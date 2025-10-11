"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function BlogNewsletter() {
  const { t, language } = useLanguage();

  return (
    <section key={`blog-newsletter-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        <motion.div style={{ willChange: 'transform, opacity' }} className="bg-gradient-to-r from-[#0349AA] to-[#0091FF] rounded-2xl p-8 md:p-12 text-center text-white gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div style={{ willChange: 'transform, opacity' }} className="mb-8 gpu-accelerate-opacity"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="text-6xl mb-4">📧</div>
          </motion.div>

          <motion.h2 style={{ willChange: 'transform, opacity' }} className="text-3xl md:text-4xl font-bold font-oswald mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.newsletter.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg mb-8 max-w-2xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.newsletter.subtitle")}
          </motion.p>
          
          <motion.div style={{ willChange: 'transform, opacity' }} className="max-w-md mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder={t("blog.newsletter.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-white border-2 border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-white/40 shadow-lg"
              />
              <motion.button style={{ willChange: 'transform, opacity' }} className="bg-[#ec8d13] hover:bg-[#d17a0f] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg gpu-accelerate-opacity"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t("blog.newsletter.subscribeButton")}
              </motion.button>
            </div>
          </motion.div>

          <motion.p style={{ willChange: 'transform, opacity' }} className="text-white/90 text-sm mt-6 max-w-lg mx-auto leading-relaxed gpu-accelerate-opacity"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.newsletter.privacy")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
