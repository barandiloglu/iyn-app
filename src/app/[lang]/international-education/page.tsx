import OverseasHero from "@/components/international-education/overseas-hero";
import OverseasIntro from "@/components/international-education/overseas-intro";
import PopularCountries from "@/components/international-education/popular-countries";
import ExtendedCountries from "@/components/international-education/extended-countries";

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
