import { UserRole } from '@/generated/prisma';
import ProtectedRoute from '@/components/auth/protected-route';
import ParentDashboardContent from '@/components/dashboard/parent-dashboard-content';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function ParentDashboardPage({ params }: PageProps) {
  await params;
  
  return (
    <ProtectedRoute allowedRoles={[UserRole.PARENT, UserRole.ADMIN]}>
      <ParentDashboardContent />
    </ProtectedRoute>
  );
}
