"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function Footer() {
  const { t, language } = useLanguage();
  const homeUrl = `/${language}`;
  const footerSections = [
    {
      title: t("footer.courses"),
      links: [
        "Web Development",
        "Data Science", 
        "UX/UI Design",
        "All Courses"
      ]
    },
    {
      title: t("footer.company"),
      links: [
        "About Us",
        "Careers",
        "Press"
      ]
    },
    {
      title: t("footer.support"),
      links: [
        "Help Center",
        "Contact Us",
        "FAQ"
      ]
    },
    {
      title: t("footer.follow"),
      links: [
        "Instagram",
        "Facebook", 
        "Linkedin"
      ]
    }
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-b from-[#0349AA] to-[#0349AA] text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section: Logo, Links, and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mb-6">
          {/* Logo and Company Info */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href={homeUrl} className="flex items-center space-x-3 mb-3" aria-label="IYN Education & Consultancy Home">
              <Image
                src="/logo-white.png"
                alt="IYN Education & Consultancy logo"
                width={280}
                height={70}
                className="w-56 md:w-64 lg:w-72 h-auto"
                quality={100}
                sizes="(min-width: 1024px) 18rem, 16rem"
              />
            </a>
            <p className="text-white/80 text-xs leading-relaxed">
              Kişiye özel eğitim modelleri ile başarının formülünü birlikte keşfedelim.
            </p>
          </motion.div>

          {/* Footer Links */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {footerSections.map((section, sectionIndex) => (
                <div key={section.title} className="space-y-2">
                  <h3 className="font-oswald font-semibold text-sm text-white">
                    {section.title}
                  </h3>
                  <ul className="space-y-1">
                    {section.links.map((link, linkIndex) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          delay: 0.3 + (sectionIndex * 0.05) + (linkIndex * 0.02) 
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href="#"
                          className="text-white/70 hover:text-white transition-colors duration-200 text-xs"
                          whileHover={{ x: 3 }}
                        >
                          {link}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Map and Contact - Top Right */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <h3 className="font-oswald font-semibold text-sm text-white">
                {t("contact.visit")}
              </h3>
              
              {/* Compact Map */}
              <div className="w-full h-32 bg-white/10 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.538222946411!2d27.1344184759145!3d38.42903527182786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd94ceb443941%3A0x4691bc041a2b8c49!2zxLBZTg!5e0!3m2!1sen!2sca!4v1759805787268!5m2!1sen!2sca"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                  title="IYN Education & Consultancy Location"
                />
              </div>

              {/* Compact Contact Info */}
              <div className="space-y-2 text-xs text-white/70">
                <p className="flex items-start space-x-2">
                  <span className="text-[#ec8d13] mt-0.5 text-xs">📍</span>
                  <span dangerouslySetInnerHTML={{ __html: t("contact.location") }} />
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[#ec8d13] text-xs">📞</span>
                  <span>{t("contact.phone")}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <span className="text-[#ec8d13] text-xs">✉️</span>
                  <span>{t("contact.email")}</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-white/20 pt-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-white/60 text-xs">
              {t("footer.copyright")}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
