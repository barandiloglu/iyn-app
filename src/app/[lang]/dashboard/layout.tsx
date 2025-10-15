import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";

export const metadata: Metadata = {
  title: "Dashboard | İYN Education & Consultancy",
  description: "Öğrenci dashboard'u - kurslarınızı, sınavlarınızı ve ödevlerinizi takip edin",
};

interface DashboardLayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function DashboardPageLayout({ children, params }: DashboardLayoutProps) {
  await params;

  return (
    <DashboardLayout>
      {/* Header with Language Selector - Rendered once */}
      <DashboardHeader />
      
      <div className="flex h-[calc(100vh-80px)]">
        {/* Sidebar - Hidden on mobile, visible on desktop - Rendered once */}
        <DashboardSidebar />
        
        {/* Main Content Area - Only this changes between pages */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto bg-[#F4F5FA] p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              {/* Dynamic content area - only this part changes */}
              {children}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
