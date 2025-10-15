import { Metadata } from "next";
import DashboardLayout from "@/components/dashboard/dashboard-layout";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardSidebar from "@/components/dashboard/dashboard-sidebar";
import WelcomeSection from "@/components/dashboard/welcome-section";
import ImportantSteps from "@/components/dashboard/important-steps";
import SupportTeam from "@/components/dashboard/support-team";
import CalendarSection from "@/components/dashboard/calendar-section";
import CoursesSection from "@/components/dashboard/courses-section";
import NotificationsSection from "@/components/dashboard/notifications-section";

export const metadata: Metadata = {
  title: "Ana Panel | İYN Education & Consultancy",
  description: "Öğrenci dashboard'u - kurslarınızı, sınavlarınızı ve ödevlerinizi takip edin",
};

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function StudentDashboard({ params }: PageProps) {
  await params;

  return (
    <DashboardLayout>
      {/* Header with Language Selector */}
      <DashboardHeader />
      
      <div className="flex h-[calc(100vh-80px)]">
<<<<<<< HEAD
        {/* Sidebar - Hidden on mobile, visible on desktop */}
=======
        {/* Sidebar */}
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
        <DashboardSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
<<<<<<< HEAD
          <div className="flex-1 overflow-y-auto bg-[#F4F5FA] p-4 md:p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-4 md:space-y-6">
=======
          <div className="flex-1 overflow-y-auto bg-[#F4F5FA] p-6">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column - Main Content */}
                <div className="lg:col-span-2 space-y-6">
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
                  {/* Welcome Section */}
                  <WelcomeSection />
                  
                  {/* Important Steps */}
                  <ImportantSteps />
                  
                  {/* Calendar */}
                  <CalendarSection />
                  
                  {/* Courses */}
                  <CoursesSection />
                </div>
                
<<<<<<< HEAD
                {/* Right Column - Sidebar Content - Hidden on mobile, shown on desktop */}
                <div className="hidden lg:block space-y-4 md:space-y-6">
=======
                {/* Right Column - Sidebar Content */}
                <div className="space-y-6">
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
                  {/* Support Team */}
                  <SupportTeam />
                  
                  {/* Notifications */}
                  <NotificationsSection />
                </div>
              </div>
<<<<<<< HEAD
              
              {/* Mobile-only sections - shown below main content on mobile */}
              <div className="lg:hidden space-y-4 mt-6">
                {/* Support Team */}
                <SupportTeam />
                
                {/* Notifications */}
                <NotificationsSection />
              </div>
=======
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
