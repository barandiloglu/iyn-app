import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { db } from './db';
import { UserRole } from '@/generated/prisma';
import { AuthUser, LoginCredentials, AuthResponse } from '@/types/auth';
import { getJwtSecret, isProduction } from './config';
const COOKIE_NAME = 'auth-token';

export interface JWTPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export function hashPassword(password: string): string {
  return bcrypt.hashSync(password, 12);
}

export function verifyPassword(password: string, hashedPassword: string): boolean {
  return bcrypt.compareSync(password, hashedPassword);
}

export function generateToken(payload: JWTPayload): string {
  return jwt.sign(payload, getJwtSecret(), { expiresIn: '7d' });
}

export function verifyToken(token: string): JWTPayload | null {
  try {
    return jwt.verify(token, getJwtSecret()) as JWTPayload;
  } catch {
    return null;
  }
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProduction(),
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: '/',
    // Don't set domain for localhost, let browser handle it
    ...(isProduction() && { domain: '.vercel.app' }),
  });
}

export async function removeAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function getAuthToken(): Promise<string | null> {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value || null;
}

export async function getCurrentUser(): Promise<AuthUser | null> {
  const token = await getAuthToken();
  if (!token) return null;

  const payload = verifyToken(token);
  if (!payload) return null;

  const user = await db.user.findUnique({
    where: { id: payload.userId },
    select: {
      id: true,
      email: true,
      role: true,
      firstName: true,
      lastName: true,
      isActive: true,
    },
  });

  return user && user.isActive ? user : null;
}

export function requireAuth(redirectTo: string = '/login') {
  return async function() {
    const user = await getCurrentUser();
    if (!user) {
      redirect(redirectTo);
    }
    return user;
  };
}

export function requireRole(allowedRoles: UserRole[], redirectTo: string = '/dashboard') {
  return async function() {
    const user = await getCurrentUser();
    if (!user) {
      redirect('/login');
    }
    if (!allowedRoles.includes(user.role)) {
      redirect(redirectTo);
    }
    return user;
  };
}

export async function authenticateUser(credentials: LoginCredentials): Promise<AuthResponse> {
  try {
    const { email, password, userType } = credentials;
    
    // Convert userType to UserRole
    const roleMap: Record<string, UserRole> = {
      student: UserRole.STUDENT,
      teacher: UserRole.TEACHER,
      parent: UserRole.PARENT,
    };

    const expectedRole = roleMap[userType];
    if (!expectedRole) {
      return {
        success: false,
        message: 'Invalid user type selected',
      };
    }

    // Find user by email
    const user = await db.user.findUnique({
      where: { email: email.toLowerCase() },
    });

    if (!user) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    // Check if user is active
    if (!user.isActive) {
      return {
        success: false,
        message: 'Account is deactivated. Please contact support.',
      };
    }

    // Verify password
    if (!verifyPassword(password, user.password)) {
      return {
        success: false,
        message: 'Invalid email or password',
      };
    }

    // Check role permissions (admin can login as any type)
    if (user.role !== expectedRole && user.role !== UserRole.ADMIN) {
      return {
        success: false,
        message: `Access denied. This account is for ${user.role.toLowerCase()}s only.`,
      };
    }

    // Generate token
    const token = generateToken({
      userId: user.id,
      email: user.email,
      role: user.role,
    });

    // Set cookie
    await setAuthCookie(token);

    // Determine redirect route
    const routeMap: Record<UserRole, string> = {
      [UserRole.STUDENT]: '/dashboard',
      [UserRole.TEACHER]: '/teacher-dashboard',
      [UserRole.PARENT]: '/parent-dashboard',
      [UserRole.ADMIN]: '/admin-dashboard',
    };

    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
      isActive: user.isActive,
    };

    return {
      success: true,
      user: authUser,
      redirectTo: routeMap[user.role],
      message: 'Login successful',
    };
  } catch (error) {
    console.error('Authentication error:', error);
    return {
      success: false,
      message: 'An error occurred during login. Please try again.',
    };
  }
}
