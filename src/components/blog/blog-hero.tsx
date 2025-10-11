"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function BlogHero() {
  const { t, language } = useLanguage();
  const isDesktop = useIsDesktop();

  return (
    <section key={`blog-hero-${language}`} className="relative bg-gradient-to-b from-[#0349AA] to-[#0091FF] text-white overflow-hidden">
      {/* Background decorative shapes - Desktop only for performance */}
      {isDesktop && (
        <>
          <motion.div
            className="absolute -left-32 top-20 w-64 h-64 bg-white/10 rounded-full blur-3xl gpu-accelerate-all"
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
            className="absolute -right-32 top-32 w-80 h-80 bg-white/5 rounded-full blur-3xl gpu-accelerate-all"
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

      <div className="relative container mx-auto px-4 py-20 lg:py-32">
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-oswald uppercase leading-tight mb-8 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("blog.hero.title")}
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed max-w-4xl mx-auto mb-16 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("blog.hero.subtitle")}
          </motion.p>
        </div>

        {/* Floating elements - Desktop only for performance */}
        {isDesktop && (
          <>
            <motion.div
              className="absolute top-1/4 left-4 md:left-10 w-4 h-4 bg-white/30 rounded-full gpu-accelerate-opacity"
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ willChange: 'transform, opacity' }}
            />
            
            <motion.div
              className="absolute top-1/3 right-4 md:right-16 w-6 h-6 bg-white/20 rounded-full gpu-accelerate-opacity"
              animate={{
                y: [0, 15, 0],
                opacity: [0.2, 0.4, 0.2],
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
              className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-white/40 rounded-full gpu-accelerate-opacity"
              animate={{
                y: [0, -10, 0],
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4],
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

      {/* Bottom wave decoration */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent gpu-accelerate-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        style={{ willChange: 'opacity' }}
      />
    </section>
  );
}
