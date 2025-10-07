"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";

type Language = "tr" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation object
const translations = {
  tr: {
    // Navigation
    "nav.about": "Hakkımızda",
    "nav.courses": "Kurslar",
    "nav.exams": "Sınavlar",
    "nav.overseas": "Yurtdışı Eğitim",
    "nav.blog": "Blog",
    "nav.login": "Giriş Yap",
    
    // Hero Section
    "hero.title": "IYN İLE BAŞARININ FORMULU",
    "hero.titleHighlight": "SANA ÖZEL",
    "hero.subtitle": "Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.",
    "hero.cta": "Kayıt Ol",
    
    // Education Cards
    "education.title": "KİŞİYE ÖZEL TASARLANMIŞ EĞİTİM MODELİ",
    "education.description": "Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.",
    
    // Online Education
    "online.title": "Online Eğitim ve Sınav İmkanları ile",
    "online.titleHighlight": "IYN'de Eğitim Çok Kolay",
    
    // Why IYN
    "why.title": "Neden",
    "why.titleHighlight": "IYN?",
    "why.feature1.title": "UZMAN LIDERLİĞİNDE VIDEO DERSLER",
    "why.feature1.desc": "Sektör profesyonellerinden yüksek kaliteli video kurslarımızla öğrenin.",
    "why.feature2.title": "GERÇEKÇİ SINAV SİMÜLATÖRLERİ",
    "why.feature2.desc": "Gerçeğini yansıtan sınavlarla pratik yaparak tam olarak hazır olduğunuzdan emin olun.",
    "why.feature3.title": "BİTİRME SERTİFİKALARI",
    "why.feature3.desc": "Yeni becerilerinizi özgeçmişinizde ve Linkedin'de sergilemek için sertifikalar kazanın.",
    
    // Exam Preparation
    "exam.subtitle": "SINAV HAZIRLIĞI",
    "exam.title": "Sınavlarınızı",
    "exam.titleHighlight": "Güvenle Geçin",
    "exam.description": "Sınav modülleri ile güçlü ve zayıf yönlerinizi belirleyin, gerçek sınav deneyimi yaşayın ve başarı için gereken avantajları elde edin.",
    "exam.feature1": "Binlerce pratik sorusu",
    "exam.feature2": "Süreli deneme sınavları",
    "exam.feature3": "Ayrıntılı performans raporları",
    "exam.cta": "Deneme Sınavına Başla",
    
    // Testimonials
    "testimonials.title": "Öğrencilerimiz",
    "testimonials.titleHighlight": "Ne Diyor?",
    "testimonial1.content": "IYN'in web geliştirme eğitimleri sayesinde kısa sürede iş buldum. Pratik odaklı yaklaşım ve gerçek projelerle çalışmak çok faydalı oldu.",
    "testimonial1.name": "Ahmet Mehmet",
    "testimonial1.role": "Web Developer",
    "testimonial2.content": "Sınav simülatörü gerçekten çok gerçekçi. Gerçek sınava girmeden önce kendimi test etme imkanı buldum ve başarılı oldum.",
    "testimonial2.name": "Mehmet Kaya",
    "testimonial2.role": "Data Scientist",
    "testimonial3.content": "UX/UI kursu ile tasarım prensiplerini öğrendim ve portfolyo oluşturdum. Mentör desteği çok değerliydi.",
    "testimonial3.name": "Zeynep Aydın",
    "testimonial3.role": "UX/UI Designer",
    
    // Footer
    "footer.courses": "Kurslar",
    "footer.company": "Şirket",
    "footer.support": "Destek",
    "footer.follow": "Bizi Takip Edin",
    "footer.copyright": "© 2024 IYN Education & Consultancy. Tüm hakları saklıdır.",
    
    // Stats
    "stats.students": "Mutlu Öğrenci",
    "stats.success": "Başarı Oranı",
    "stats.certificates": "Sertifika",
    
    // Contact
    "contact.visit": "Ofisimizi Ziyaret Edin",
    "contact.location": "IYN Education & Consultancy<br />İzmir, Turkey",
    "contact.phone": "+90 (XXX) XXX XX XX",
    "contact.email": "info@iyneducation.com",
  },
  en: {
    // Navigation
    "nav.about": "About Us",
    "nav.courses": "Courses",
    "nav.exams": "Exams",
    "nav.overseas": "Overseas Education",
    "nav.blog": "Blog",
    "nav.login": "Login",
    
    // Hero Section
    "hero.title": "THE FORMULA FOR SUCCESS WITH IYN IS",
    "hero.titleHighlight": "SPECIAL TO YOU",
    "hero.subtitle": "Forget standard plans. Together, we draw the most suitable roadmap for your potential, goals, and learning style.",
    "hero.cta": "Register Now",
    
    // Education Cards
    "education.title": "PERSONALLY DESIGNED EDUCATION MODEL",
    "education.description": "Forget standard plans. Together, we draw the most suitable roadmap for your potential, goals, and learning style.",
    
    // Online Education
    "online.title": "Education is Very Easy with IYN's",
    "online.titleHighlight": "Online Education and Exam Opportunities",
    
    // Why IYN
    "why.title": "Why",
    "why.titleHighlight": "IYN?",
    "why.feature1.title": "VIDEO LESSONS WITH EXPERT LEADERSHIP",
    "why.feature1.desc": "Learn with high-quality video courses from industry professionals.",
    "why.feature2.title": "REALISTIC EXAM SIMULATORS",
    "why.feature2.desc": "Practice with realistic exams and be sure you are fully prepared.",
    "why.feature3.title": "COMPLETION CERTIFICATES",
    "why.feature3.desc": "Earn certificates to showcase your new skills on your resume and LinkedIn.",
    
    // Exam Preparation
    "exam.subtitle": "EXAM PREPARATION",
    "exam.title": "Pass Your Exams",
    "exam.titleHighlight": "Confidently",
    "exam.description": "Identify your strengths and weaknesses with exam modules, experience real exam conditions, and gain the advantages needed for success.",
    "exam.feature1": "Thousands of practice questions",
    "exam.feature2": "Timed practice exams",
    "exam.feature3": "Detailed performance reports",
    "exam.cta": "Start Practice Exam",
    
    // Testimonials
    "testimonials.title": "What Do Our Students",
    "testimonials.titleHighlight": "Say?",
    "testimonial1.content": "Thanks to IYN's web development training, I found a job quickly. The practical approach and working with real projects was very beneficial.",
    "testimonial1.name": "Ahmet Mehmet",
    "testimonial1.role": "Web Developer",
    "testimonial2.content": "The exam simulator is really realistic. I had the opportunity to test myself before taking the real exam and succeeded.",
    "testimonial2.name": "Mehmet Kaya",
    "testimonial2.role": "Data Scientist",
    "testimonial3.content": "I learned design principles with the UX/UI course and created a portfolio. The mentor support was very valuable.",
    "testimonial3.name": "Zeynep Aydın",
    "testimonial3.role": "UX/UI Designer",
    
    // Footer
    "footer.courses": "Courses",
    "footer.company": "Company",
    "footer.support": "Support",
    "footer.follow": "Follow Us",
    "footer.copyright": "© 2024 IYN Education & Consultancy. All rights reserved.",
    
    // Stats
    "stats.students": "Happy Students",
    "stats.success": "Success Rate",
    "stats.certificates": "Certificates",
    
    // Contact
    "contact.visit": "Visit Our Office",
    "contact.location": "IYN Education & Consultancy<br />İzmir, Turkey",
    "contact.phone": "+90 (XXX) XXX XX XX",
    "contact.email": "info@iyneducation.com",
  }
};

interface LanguageProviderProps {
  children: ReactNode;
  initialLanguage?: Language;
}

export function LanguageProvider({ children, initialLanguage = "tr" }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>(initialLanguage);
  const router = useRouter();
  const pathname = usePathname();

  // Sync language state with URL parameter on mount
  useEffect(() => {
    setLanguageState(initialLanguage);
  }, [initialLanguage]);

  // Handle language change with navigation
  const handleSetLanguage = (lang: Language) => {
    // Save preference but don't update state yet - let the new page load with correct language
    localStorage.setItem("iyn-language", lang);
    
    // Navigate to the new language route
    // Extract the path after the language segment
    const pathSegments = pathname?.split('/').filter(Boolean) || [];
    const currentPath = pathSegments.slice(1).join('/');
    const newPath = currentPath ? `/${lang}/${currentPath}` : `/${lang}`;
    
    router.push(newPath);
  };

  // Translation function
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.tr] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
