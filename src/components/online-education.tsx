"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function OnlineEducation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isDesktop = useIsDesktop();

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-header font-bold text-neutral leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Online Eğitim ve Sınav İmkanları ile{" "}
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                IYN&apos;de Eğitim Çok Kolay
              </motion.span>
            </motion.h2>

            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.p 
                className="text-lg text-neutral/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.
              </motion.p>
              
              <motion.p 
                className="text-lg text-neutral/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.
              </motion.p>
              
              <motion.p 
                className="text-lg text-neutral/80 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.
              </motion.p>
            </motion.div>

            {/* Feature points */}
            <motion.div 
              className="space-y-3"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              {[
                "✓ Esnek öğrenme saatleri",
                "✓ İnteraktif video dersler",
                "✓ Canlı destek ve mentorluk",
                "✓ Mobil uyumlu platform"
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                >
                  <span className="text-accent text-xl">✓</span>
                  <span className="text-neutral font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Background decorative shape - Desktop only for performance */}
            {isDesktop && (
              <motion.div
                className="absolute -top-10 -right-10 w-80 h-80 bg-accent/20 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            {/* Main image placeholder */}
            <motion.div 
              className="relative z-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12 h-96 flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-48 h-48 bg-white/20 rounded-full flex items-center justify-center"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-6xl">🎓</span>
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 left-8 w-6 h-6 bg-accent rounded-full"
              animate={{
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute bottom-16 right-8 w-4 h-4 bg-primary rounded-full"
              animate={{
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
            
            <motion.div
              className="absolute top-1/2 right-4 w-3 h-3 bg-accent rounded-full"
              animate={{
                y: [0, -8, 0],
                x: [0, 5, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
