"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function CareersCTA() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-gradient-to-r from-[#0349AA] to-[#0091FF] rounded-2xl p-8 md:p-12 text-white text-center gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          {/* CTA Content */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform' }}
          >
            <div className="text-6xl mb-4">💼</div>
          </motion.div>

          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-oswald mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("careers.cta.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 max-w-2xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("careers.cta.subtitle")}
          </motion.p>
          
          {/* Contact Information */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Mail size={20} />
              </div>
              <span className="text-white/90 text-sm">{t("careers.cta.email")}</span>
              <span className="text-white font-medium">hr@iyn.edu.tr</span>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Phone size={20} />
              </div>
              <span className="text-white/90 text-sm">{t("careers.cta.phone")}</span>
              <span className="text-white font-medium">+90 (212) 555 0123</span>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              style={{ willChange: 'transform' }}
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <MapPin size={20} />
              </div>
              <span className="text-white/90 text-sm">{t("careers.cta.address")}</span>
              <span className="text-white font-medium text-center text-sm">{t("careers.cta.addressDetail")}</span>
            </motion.div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.button
              className="bg-[#ec8d13] hover:bg-[#d17a0f] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              <Send size={20} />
              <span>{t("careers.cta.applyNow")}</span>
            </motion.button>
            
            <motion.button
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 border border-white/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: 'transform' }}
            >
              {t("careers.cta.learnMore")}
            </motion.button>
          </motion.div>

          <motion.p 
            className="text-white/90 text-sm mt-8 max-w-lg mx-auto leading-relaxed gpu-accelerate-opacity"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ willChange: 'opacity' }}
          >
            {t("careers.cta.note")}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
