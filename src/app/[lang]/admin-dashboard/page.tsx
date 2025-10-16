import { requireRole } from '@/lib/auth';
import { UserRole } from '@/generated/prisma';
import ProtectedRoute from '@/components/auth/protected-route';
import AdminDashboardContent from '@/components/dashboard/admin-dashboard-content';

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export default async function AdminDashboardPage({ params }: PageProps) {
  await params;
  
  return (
    <ProtectedRoute allowedRoles={[UserRole.ADMIN]}>
      <AdminDashboardContent />
    </ProtectedRoute>
  );
}
