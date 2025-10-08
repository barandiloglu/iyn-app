"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function AboutCTA() {
  const { t, language } = useLanguage();

  return (
    <section key={`about-cta-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald text-gray-800 mb-8 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("about.cta.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("about.cta.subtitle")}
          </motion.p>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#ec8d13] to-[#d17a0f] hover:from-[#d17a0f] hover:to-[#b8680d] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 141, 19, 0.3)"
              }}
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
