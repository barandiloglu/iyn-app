"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/contexts/language-context";

export default function EducationCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { t } = useLanguage();

  const cards = [
    {
      id: 1,
      titleKey: "education.card1.title",
      descriptionKey: "education.card1.description",
      image: "/images/personalize-education.png",
    },
    {
      id: 2,
      titleKey: "education.card2.title",
      descriptionKey: "education.card2.description",
      image: "/images/personalize-education-v2.png",
    },
    {
      id: 3,
      titleKey: "education.card3.title",
      descriptionKey: "education.card3.description",
      image: "/images/personalize-education-v3.png",
    },
  ];

  return (
    <section className="py-20 bg-neutral-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
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
            >
              {/* Image Section */}
              <motion.div style={{ willChange: 'transform, opacity' }} className="relative h-48 overflow-hidden gpu-accelerate-opacity"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <img 
                  src={card.image} 
                  alt={t(card.titleKey)}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradient */}
                <motion.div style={{ willChange: 'transform' }} className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 gpu-accelerate"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div style={{ willChange: 'transform, opacity' }} className="p-6 bg-gradient-to-r from-primary to-primary-light text-white relative flex-1 flex flex-col gpu-accelerate-opacity"
                whileHover={{ 
                  background: "linear-gradient(135deg, #0091FF 0%, #0349AA 100%)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 style={{ willChange: 'transform, opacity' }} className="font-header font-bold text-lg mb-4 leading-tight gpu-accelerate-opacity"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                >
                  {t(card.titleKey)}
                </motion.h3>
                
                <motion.p style={{ willChange: 'transform, opacity' }} className="text-white/90 text-sm leading-relaxed flex-1 gpu-accelerate-opacity"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                >
                  {t(card.descriptionKey)}
                </motion.p>

                {/* Decorative elements */}
                <motion.div style={{ willChange: 'transform, opacity' }} className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full gpu-accelerate-opacity"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div style={{ willChange: 'transform, opacity' }} className="absolute bottom-4 left-4 w-4 h-4 bg-white/30 rounded-full gpu-accelerate-opacity"
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
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
