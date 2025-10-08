import OverseasHero from "@/components/overseas/overseas-hero";
import OverseasIntro from "@/components/overseas/overseas-intro";
import PopularCountries from "@/components/overseas/popular-countries";
import ExtendedCountries from "@/components/overseas/extended-countries";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Overseas({ params }: PageProps) {
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
