import OverseasHero from "@/components/study-abroad/overseas-hero";
import OverseasIntro from "@/components/study-abroad/overseas-intro";
import PopularCountries from "@/components/study-abroad/popular-countries";
import ExtendedCountries from "@/components/study-abroad/extended-countries";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function InternationalEducation({ params }: PageProps) {
  await params;
  
  return (
    <>
      <OverseasHero />
      <OverseasIntro />
      <PopularCountries />
      <ExtendedCountries />
    </>
  );
}
