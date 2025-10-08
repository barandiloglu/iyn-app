import LoginHero from "@/components/login/login-hero";
import LoginOptions from "@/components/login/login-options";

interface PageProps {
  params: Promise<{
    lang: string;
  }>;
}

export async function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export default async function Login({ params }: PageProps) {
  await params;

  return (
    <>
      <LoginHero />
      <LoginOptions />
    </>
  );
}
