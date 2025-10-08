import AboutHero from "@/components/about/about-hero";
import AboutMission from "@/components/about/about-mission";
import AboutCTA from "@/components/about/about-cta";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function About({ params }: PageProps) {
  await params;
  
  return (
    <>
      <AboutHero />
      <AboutMission />
      <AboutCTA />
    </>
  );
}
