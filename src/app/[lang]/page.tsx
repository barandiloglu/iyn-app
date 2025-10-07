import HeroSection from "@/components/hero-section";
import EducationCards from "@/components/education-cards";
import OnlineEducation from "@/components/online-education";
import WhyIYN from "@/components/why-iyn";
import ExamPreparation from "@/components/exam-preparation";
import Testimonials from "@/components/testimonials";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Home({ params }: PageProps) {
  await params;
  
  return (
    <>
      <HeroSection />
      <EducationCards />
      <OnlineEducation />
      <WhyIYN />
      <ExamPreparation />
      <Testimonials />
    </>
  );
}

