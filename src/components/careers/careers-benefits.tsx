"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function CareersBenefits() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      title: "careers.benefits.growth.title",
      description: "careers.benefits.growth.description",
      icon: "🚀",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      title: "careers.benefits.workLife.title",
      description: "careers.benefits.workLife.description",
      icon: "⚖️",
      color: "from-[#ec8d13] to-[#d17a0f]"
    },
    {
      title: "careers.benefits.learning.title",
      description: "careers.benefits.learning.description",
      icon: "📚",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      title: "careers.benefits.health.title",
      description: "careers.benefits.health.description",
      icon: "💚",
      color: "from-[#ec8d13] to-[#d17a0f]"
    },
    {
      title: "careers.benefits.team.title",
      description: "careers.benefits.team.description",
      icon: "🤝",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      title: "careers.benefits.innovation.title",
      description: "careers.benefits.innovation.description",
      icon: "💡",
      color: "from-[#ec8d13] to-[#d17a0f]"
    }
  ];

  return (
    <section className="py-20 bg-[#F4F5FA]" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ willChange: 'opacity' }}
          >
            {t("careers.benefits.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("careers.benefits.subtitle")}
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 gpu-accelerate-opacity"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Benefit Icon */}
              <motion.div 
                className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${benefit.color} flex items-center justify-center text-3xl`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                style={{ willChange: 'transform' }}
              >
                {benefit.icon}
              </motion.div>

              {/* Benefit Content */}
              <div className="text-center">
                <motion.h3 
                  className="text-xl font-bold font-oswald text-gray-800 mb-4 gpu-accelerate-opacity"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {t(benefit.title)}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed gpu-accelerate-opacity"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {t(benefit.description)}
                </motion.p>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute bottom-4 right-4 w-3 h-3 bg-[#ec8d13] rounded-full opacity-20"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                }}
                style={{ willChange: 'transform, opacity' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Company Culture Section */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-lg gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
              className="gpu-accelerate-opacity"
              style={{ willChange: 'transform, opacity' }}
            >
              <h3 className="text-2xl md:text-3xl font-bold font-oswald text-gray-800 mb-6">
                {t("careers.culture.title")}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t("careers.culture.description")}
              </p>
              <div className="space-y-4">
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="w-2 h-2 bg-[#0349AA] rounded-full"></div>
                  <span className="text-gray-700">{t("careers.culture.value1")}</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="w-2 h-2 bg-[#ec8d13] rounded-full"></div>
                  <span className="text-gray-700">{t("careers.culture.value2")}</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  <div className="w-2 h-2 bg-[#0349AA] rounded-full"></div>
                  <span className="text-gray-700">{t("careers.culture.value3")}</span>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Team Illustration */}
              <div className="bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10 rounded-2xl p-8 text-center">
                <div className="text-6xl mb-4">👥</div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">{t("careers.culture.team")}</h4>
                <p className="text-gray-600">{t("careers.culture.teamDescription")}</p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-[#ec8d13] rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-3 h-3 bg-[#0349AA] rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-16 h-1 bg-[#ec8d13] rounded-full"></div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
