import ExamsHero from "@/components/exams/exams-hero";
import PreparationPrograms from "@/components/exams/preparation-programs";
import PopularExams from "@/components/exams/popular-exams";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Exams({ params }: PageProps) {
  await params;
  
  return (
    <>
      <ExamsHero />
      <PreparationPrograms />
      <PopularExams />
    </>
  );
}
