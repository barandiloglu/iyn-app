"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function EducationCards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      id: 1,
      title: "KİŞİYE ÖZEL TASARLANMIŞ EĞİTİM MODELİ",
      description: "Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.",
      image: "/api/placeholder/400/300", // Placeholder for now
    },
    {
      id: 2,
      title: "KİŞİYE ÖZEL TASARLANMIŞ EĞİTİM MODELİ",
      description: "Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.",
      image: "/api/placeholder/400/300", // Placeholder for now
    },
    {
      id: 3,
      title: "KİŞİYE ÖZEL TASARLANMIŞ EĞİTİM MODELİ",
      description: "Standart planları unutun. Sizin potansiyelinize, hedeflerinize ve öğrenme stilinize en uygun yol haritasını birlikte çiziyoruz.",
      image: "/api/placeholder/400/300", // Placeholder for now
    },
  ];

  return (
    <section className="py-20 bg-neutral-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
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
              <motion.div 
                className="relative h-64 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <motion.div
                    className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <span className="text-2xl">📚</span>
                  </motion.div>
                </div>
                
                {/* Overlay gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>

              {/* Content Section */}
              <motion.div 
                className="p-6 bg-gradient-to-r from-primary to-primary-light text-white relative"
                whileHover={{ 
                  background: "linear-gradient(135deg, #0091FF 0%, #0349AA 100%)",
                  transition: { duration: 0.3 }
                }}
              >
                <motion.h3 
                  className="font-header font-bold text-lg mb-4 leading-tight"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                >
                  {card.title}
                </motion.h3>
                
                <motion.p 
                  className="text-white/90 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                >
                  {card.description}
                </motion.p>

                {/* Decorative elements */}
                <motion.div
                  className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
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
                
                <motion.div
                  className="absolute bottom-4 left-4 w-4 h-4 bg-white/30 rounded-full"
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
