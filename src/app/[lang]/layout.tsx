import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/contexts/language-context";
import { AuthProvider } from "@/contexts/auth-context";
import { ToastProvider } from "@/contexts/toast-context";
import ConditionalLayout from "@/components/conditional-layout";
import ToastContainerWrapper from "@/components/ui/toast-container";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IYN Education & Consultancy",
  description: "Kişiye özel eğitim modelleri ile başarının formülü. Standart planları unutun, potansiyelinize uygun yol haritasını birlikte çizelim.",
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/logo.png",
  },
};

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    lang: string;
  }>;
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body
        className={`${oswald.variable} antialiased bg-background text-neutral`}
      >
        <LanguageProvider initialLanguage={lang as "tr" | "en"}>
          <AuthProvider>
            <ToastProvider>
              <ConditionalLayout>
                <Header />
                <main className="min-h-screen">
                  {children}
                </main>
                <Footer />
                <ToastContainerWrapper />
              </ConditionalLayout>
            </ToastProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

