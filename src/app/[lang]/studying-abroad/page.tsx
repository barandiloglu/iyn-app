import OverseasHero from "@/components/studying-abroad/overseas-hero";
import OverseasIntro from "@/components/studying-abroad/overseas-intro";
import PopularCountries from "@/components/studying-abroad/popular-countries";
import ExtendedCountries from "@/components/studying-abroad/extended-countries";

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
