import CareersHero from "@/components/careers/careers-hero";
import JobListings from "@/components/careers/job-listings";
import CareersBenefits from "@/components/careers/careers-benefits";
import CareersCTA from "@/components/careers/careers-cta";

export default function CareersPage() {
  return (
    <main>
      <CareersHero />
      <JobListings />
      <CareersBenefits />
      <CareersCTA />
    </main>
  );
}
