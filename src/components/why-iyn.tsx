"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function WhyIYN() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const isDesktop = useIsDesktop();

  const features = [
    {
      number: "1",
      title: "UZMAN LIDERLİĞİNDE VIDEO DERSLER",
      description: "Sektör profesyonellerinden yüksek kaliteli video kurslarımızla öğrenin.",
      icon: "🎥"
    },
    {
      number: "2", 
      title: "GERÇEKÇİ SINAV SİMÜLATÖRLERİ",
      description: "Gerçeğini yansıtan sınavlarla pratik yaparak tam olarak hazır olduğunuzdan emin olun.",
      icon: "📝"
    },
    {
      number: "3",
      title: "BİTİRME SERTİFİKALARI", 
      description: "Yeni becerilerinizi özgeçmişinizde ve Linkedin'de sergilemek için sertifikalar kazanın.",
      icon: "🏆"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light/30 relative overflow-hidden" ref={ref}>
      {/* Background decorative shape - Desktop only for performance */}
      {isDesktop && (
        <motion.div
          className="absolute -left-32 top-1/2 transform -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl gpu-accelerate-all"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ willChange: 'transform, filter' }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-header font-bold text-neutral leading-tight gpu-accelerate-opacity"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ willChange: 'opacity' }}
          >
            Neden{" "}
            <motion.span 
              className="text-accent gpu-accelerate-opacity"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ willChange: 'transform, opacity' }}
            >
              IYN?
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              className="group relative gpu-accelerate-opacity"
              initial={{ opacity: 0, y: 100 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              <motion.div
                className="bg-accent rounded-2xl p-8 text-white relative overflow-hidden h-full gpu-accelerate"
                whileHover={{
                  backgroundColor: "#f97316", // Slightly different orange on hover
                  transition: { duration: 0.3 }
                }}
                style={{ willChange: 'background-color' }}
              >
                {/* Number Circle */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg gpu-accelerate-opacity"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <span className="text-accent font-header font-bold text-xl">
                    {feature.number}
                  </span>
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4 gpu-accelerate-opacity"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.2 }
                  }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <motion.div
                  className="gpu-accelerate-opacity"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  style={{ willChange: 'opacity' }}
                >
                  <h3 className="font-header font-bold text-lg mb-4 leading-tight">
                    {feature.title}
                  </h3>
                  
                  <p className="text-white/90 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute bottom-4 right-4 w-8 h-8 bg-white/20 rounded-full gpu-accelerate-opacity"
                  animate={{
                    scale: [1, 1.3, 1],
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
                  className="absolute top-8 left-8 w-4 h-4 bg-white/30 rounded-full gpu-accelerate-opacity"
                  animate={{
                    y: [0, -5, 0],
                    opacity: [0.3, 0.7, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  style={{ willChange: 'transform, opacity' }}
                />

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl gpu-accelerate-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                  style={{ willChange: 'opacity' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <motion.div
          className="flex justify-center space-x-4 mt-16 gpu-accelerate-opacity"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ willChange: 'opacity' }}
        >
          {[...Array(5)].map((_, index) => (
            <motion.div
              key={index}
              className="w-3 h-3 bg-primary/30 rounded-full gpu-accelerate-opacity"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.2,
              }}
              style={{ willChange: 'transform, opacity' }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
