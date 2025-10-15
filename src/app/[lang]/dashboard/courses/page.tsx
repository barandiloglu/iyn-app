import MyCoursesSection from "@/components/dashboard/my-courses-section";

export default function CoursesPage() {
  return (
    <div className="grid grid-cols-1 gap-4 md:gap-6">
      {/* My Courses Section */}
      <MyCoursesSection />
    </div>
  );
}
