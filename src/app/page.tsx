import HeroSection from "@/components/hero-section";
import EducationCards from "@/components/education-cards";
import OnlineEducation from "@/components/online-education";
import WhyIYN from "@/components/why-iyn";
import ExamPreparation from "@/components/exam-preparation";
import Testimonials from "@/components/testimonials";

export default function Home() {
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
