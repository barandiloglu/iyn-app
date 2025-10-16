import { requireRole } from '@/lib/auth';
import { UserRole } from '@/generated/prisma';
import ProtectedRoute from '@/components/auth/protected-route';
import TeacherDashboardContent from '@/components/dashboard/teacher-dashboard-content';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function TeacherDashboardPage({ params }: PageProps) {
  await params;
  
  return (
    <ProtectedRoute allowedRoles={[UserRole.TEACHER, UserRole.ADMIN]}>
      <TeacherDashboardContent />
    </ProtectedRoute>
  );
}
