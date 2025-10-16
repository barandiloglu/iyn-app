import { UserRole } from "@/generated/prisma";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  firstName?: string | null;
  lastName?: string | null;
  isActive: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
  userType: 'student' | 'teacher' | 'parent';
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  message?: string;
  redirectTo?: string;
}

export interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthResponse>;
  logout: () => void;
  isAuthenticated: boolean;
}

export type DashboardRoute = 
  | '/dashboard' 
  | '/teacher-dashboard' 
  | '/parent-dashboard' 
  | '/admin-dashboard';

export interface RoleRouteMap {
  STUDENT: '/dashboard';
  TEACHER: '/teacher-dashboard';
  PARENT: '/parent-dashboard';
  ADMIN: '/admin-dashboard';
}
