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
      className="bg-primary text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 items-start">
          {/* Logo and Company Info */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <a href={homeUrl} className="flex items-center space-x-3 mb-4" aria-label="IYN Education & Consultancy Home">
              <Image
                src="/logo-white.png"
                alt="IYN Education & Consultancy logo"
                width={360}
                height={90}
                className="w-64 md:w-80 h-auto"
                quality={100}
                sizes="(min-width: 1024px) 20rem, 16rem"
              />
            </a>
            <p className="text-white/80 text-sm leading-relaxed">
              Kişiye özel eğitim modelleri ile başarının formülünü birlikte keşfedelim.
            </p>
          </motion.div>

          {/* Footer Links */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div 
              key={section.title}
              className="md:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + (sectionIndex * 0.1) }}
              viewport={{ once: true }}
            >
              <h3 className="font-header font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.2 + (sectionIndex * 0.1) + (linkIndex * 0.05) 
                    }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors duration-200 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Map Section */}
        <motion.div 
          className="border-t border-white/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Map */}
            <motion.div
              className="w-full h-64 lg:h-80 bg-white/10 rounded-lg overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
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
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-header font-semibold text-xl text-white mb-4">
                {t("contact.visit")}
              </h3>
              <div className="space-y-3 text-white/80">
                <p className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📍</span>
                  <span dangerouslySetInnerHTML={{ __html: t("contact.location") }} />
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-accent">📞</span>
                  <span>{t("contact.phone")}</span>
                </p>
                <p className="flex items-center space-x-3">
                  <span className="text-accent">✉️</span>
                  <span>{t("contact.email")}</span>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div 
          className="border-t border-white/20 mt-8 pt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <p className="text-white/60 text-sm">
              {t("footer.copyright")}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
