"use client";

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from '@/contexts/auth-context';
import { UserRole } from '@/generated/prisma';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

export default function ProtectedRoute({ 
  children, 
  allowedRoles, 
  redirectTo 
}: ProtectedRouteProps) {
  const { user, isLoading, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        // Extract language from current pathname
        const pathSegments = pathname?.split('/').filter(Boolean) || [];
        const language = pathSegments[0] || 'tr';
        const loginPath = redirectTo || `/${language}/login`;
        router.push(loginPath);
        return;
      }

      if (allowedRoles && user && !allowedRoles.includes(user.role)) {
        // Extract language from current pathname
        const pathSegments = pathname?.split('/').filter(Boolean) || [];
        const language = pathSegments[0] || 'tr';
        
        // Redirect to appropriate dashboard based on user role
        const roleRoutes: Record<UserRole, string> = {
          [UserRole.STUDENT]: `/${language}/dashboard`,
          [UserRole.TEACHER]: `/${language}/teacher-dashboard`,
          [UserRole.PARENT]: `/${language}/parent-dashboard`,
          [UserRole.ADMIN]: `/${language}/admin-dashboard`,
          [UserRole.USER]: `/${language}/dashboard`,
        };
        
        router.push(roleRoutes[user.role]);
        return;
      }
    }
  }, [isLoading, isAuthenticated, user, allowedRoles, redirectTo, router, pathname]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F4F5FA]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0349AA] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role)) {
    return null;
  }

  return <>{children}</>;
}
