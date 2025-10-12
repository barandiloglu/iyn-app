"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function OverseasIntro() {
  const { t, language } = useLanguage();

  return (
    <section key={`overseas-intro-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div style={{ willChange: 'transform, opacity' }} className="text-center mb-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 style={{ willChange: 'transform, opacity' }} className="text-sm md:text-base font-bold font-oswald uppercase text-[#ec8d13] mb-4 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("overseas.intro.subtitle")}
          </motion.h2>
          
          <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-16 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("overseas.intro.title")}
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative h-96 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10 flex items-center justify-center">
                  <div className="text-6xl font-bold text-gray-400">
                    🌍
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div style={{ willChange: 'transform, opacity' }} className="space-y-6 gpu-accelerate-opacity"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.p style={{ willChange: 'transform, opacity' }} className="text-gray-700 leading-relaxed text-lg gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("overseas.intro.paragraph1")}
              </motion.p>
              
              <motion.p style={{ willChange: 'transform, opacity' }} className="text-gray-700 leading-relaxed text-lg gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("overseas.intro.paragraph2")}
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
