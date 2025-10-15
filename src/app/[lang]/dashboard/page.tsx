import WelcomeSection from "@/components/dashboard/welcome-section";
import ImportantSteps from "@/components/dashboard/important-steps";
import SupportTeam from "@/components/dashboard/support-team";
import CalendarSection from "@/components/dashboard/calendar-section";
import CoursesSection from "@/components/dashboard/courses-section";
import NotificationsSection from "@/components/dashboard/notifications-section";

export default function StudentDashboard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      {/* Left Column - Main Content */}
      <div className="lg:col-span-2 space-y-4 md:space-y-6">
        {/* Welcome Section */}
        <WelcomeSection />
        
        {/* Important Steps */}
        <ImportantSteps />
        
        {/* Calendar */}
        <CalendarSection />
        
        {/* Courses */}
        <CoursesSection />
      </div>
      
      {/* Right Column - Sidebar Content - Hidden on mobile, shown on desktop */}
      <div className="hidden lg:block space-y-4 md:space-y-6">
        {/* Support Team */}
        <SupportTeam />
        
        {/* Notifications */}
        <NotificationsSection />
      </div>
      
      {/* Mobile-only sections - shown below main content on mobile */}
      <div className="lg:hidden space-y-4 mt-6">
        {/* Support Team */}
        <SupportTeam />
        
        {/* Notifications */}
        <NotificationsSection />
      </div>
    </div>
  );
}
