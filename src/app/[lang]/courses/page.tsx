import CoursesHero from "@/components/courses/courses-hero";
import PopularCourses from "@/components/courses/popular-courses";
import WhyIYNCourses from "@/components/courses/why-iyn-courses";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Courses({ params }: PageProps) {
  await params;
  
  return (
    <>
      <CoursesHero />
      <PopularCourses />
      <WhyIYNCourses />
    </>
  );
}
