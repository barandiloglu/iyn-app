"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useMobile } from "@/hooks/use-mobile";

export default function AboutCTA() {
  const { t, language } = useLanguage();
  const isMobile = useMobile();

  return (
    <section key={`about-cta-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald text-gray-800 mb-8 leading-tight">
              {t("about.cta.title")}
            </h2>
            
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              {t("about.cta.subtitle")}
            </p>
            
            <motion.button 
              className="bg-gradient-to-r from-[#ec8d13] to-[#d17a0f] hover:from-[#d17a0f] hover:to-[#b8680d] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
              whileHover={!isMobile ? { 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 141, 19, 0.3)"
              } : {}}
              whileTap={{ scale: 0.95 }}
            >
              {t("about.cta.button")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
