import SignupHero from "@/components/signup/signup-hero";
import SignupForm from "@/components/signup/signup-form";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Signup({ params }: PageProps) {
  await params;

  return (
    <>
      <SignupHero />
      <SignupForm />
    </>
  );
}


