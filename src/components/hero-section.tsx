"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function HeroSection() {
  const { t } = useLanguage();
  const isDesktop = useIsDesktop();
  
  return (
    <section className="relative bg-white overflow-hidden min-w-0">
      {/* Background decorative shapes - Desktop only for performance */}
      {isDesktop && (
        <>
          <motion.div
            className="absolute -left-32 top-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl gpu-accelerate-all"
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform, filter' }}
          />
          
          <motion.div
            className="absolute -right-32 top-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl gpu-accelerate-all"
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: 'transform, filter' }}
          />
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-header font-bold text-neutral leading-tight mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("hero.title")}{" "}
            <motion.span
              className="text-accent gpu-accelerate-opacity"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
            >
              {t("hero.titleHighlight")}
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl text-neutral/80 max-w-4xl mx-auto mb-12 leading-relaxed gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* CTA Button */}
          <motion.button
            className="group bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(3, 73, 170, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform, opacity' }}
          >
            <span>{t("hero.cta")}</span>
            <motion.div
              className="gpu-accelerate"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: 'transform' }}
            >
              <ArrowRight size={20} />
            </motion.div>
          </motion.button>

          {/* Floating elements - Desktop only for performance */}
          {isDesktop && (
            <>
              <motion.div
                className="absolute top-1/4 left-4 md:left-10 w-4 h-4 bg-accent rounded-full opacity-60 gpu-accelerate-opacity"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ willChange: 'transform, opacity' }}
              />
              
              <motion.div
                className="absolute top-1/3 right-4 md:right-16 w-6 h-6 bg-primary rounded-full opacity-40 gpu-accelerate-opacity"
                animate={{
                  y: [0, 15, 0],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                style={{ willChange: 'transform, opacity' }}
              />
              
              <motion.div
                className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-accent rounded-full opacity-50 gpu-accelerate-opacity"
                animate={{
                  y: [0, -10, 0],
                  x: [0, 10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            </>
          )}
        </div>
      </div>

      {/* Bottom wave decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-light/50 to-transparent gpu-accelerate-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ willChange: 'opacity' }}
      />
    </section>
  );
}
