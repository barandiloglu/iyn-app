"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      id: 1,
      name: "Ahmet Mehmet",
      role: "Web Developer",
      content: "IYN'in web geliştirme eğitimleri sayesinde kısa sürede iş buldum. Pratik odaklı yaklaşım ve gerçek projelerle çalışmak çok faydalı oldu.",
      avatar: "👨‍💻"
    },
    {
      id: 2,
      name: "Mehmet Kaya", 
      role: "Data Scientist",
      content: "Sınav simülatörü gerçekten çok gerçekçi. Gerçek sınava girmeden önce kendimi test etme imkanı buldum ve başarılı oldum.",
      avatar: "👨‍🔬"
    },
    {
      id: 3,
      name: "Zeynep Aydın",
      role: "UX/UI Designer", 
      content: "UX/UI kursu ile tasarım prensiplerini öğrendim ve portfolyo oluşturdum. Mentör desteği çok değerliydi.",
      avatar: "👩‍🎨"
    }
  ];

  return (
    <section className="py-20 bg-neutral-light/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-header font-bold text-neutral leading-tight"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Öğrencilerimiz{" "}
            <motion.span 
              className="text-accent"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ne Diyor?
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="group relative"
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
              <motion.div
                className="bg-gradient-to-r from-primary to-primary-light text-white rounded-2xl p-6 relative overflow-hidden h-full"
                whileHover={{
                  backgroundColor: "#0349AA", // Darker blue on hover
                  transition: { duration: 0.3 }
                }}
              >
                {/* Quote mark */}
                <motion.div
                  className="absolute top-4 left-4 text-white/20 text-4xl font-serif"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 0.2, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.2 + 0.3,
                    ease: "easeOut"
                  }}
                >
                  &quot;
                </motion.div>

                {/* Content */}
                <motion.div
                  className="relative z-10 pt-8"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                >
                  <motion.p 
                    className="text-white/90 text-sm leading-relaxed mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 }}
                  >
                    {testimonial.content}
                  </motion.p>

                  {/* Author */}
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.6 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-xl"
                      whileHover={{ 
                        scale: 1.1,
                        backgroundColor: "rgba(255, 255, 255, 0.3)",
                        transition: { duration: 0.2 }
                      }}
                    >
                      {testimonial.avatar}
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-white text-sm">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/70 text-xs">
                        {testimonial.role}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute bottom-4 right-4 w-6 h-6 bg-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                <motion.div
                  className="absolute top-8 right-8 w-3 h-3 bg-white/30 rounded-full"
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

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.1 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats or additional content */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center space-x-8 bg-white rounded-2xl px-8 py-4 shadow-lg"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            {[
              { label: "Mutlu Öğrenci", value: "500+" },
              { label: "Başarı Oranı", value: "95%" },
              { label: "Sertifika", value: "1000+" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-sm text-neutral/70">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
