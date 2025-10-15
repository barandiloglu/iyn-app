"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

export default function WhyIYNCourses() {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: (
        <Image
          src="/images/courses/teacher.svg"
          alt="Expert Trainers"
          width={64}
          height={64}
          className="w-32 h-32"
        />
      ),
      title: "courses.features.experts.title",
      description: "courses.features.experts.description"
    },
    {
      icon: (
        <Image
          src="/images/courses/study-plan.svg"
          alt="Personalized Study Plans"
          width={64}
          height={64}
          className="w-32 h-32"
        />
      ),
      title: "courses.features.plans.title",
      description: "courses.features.plans.description"
    },
    {
      icon: (
        <Image
          src="/images/courses/consultancy.svg"
          alt="University Application Consultancy"
          width={64}
          height={64}
          className="w-32 h-32"
        />
      ),
      title: "courses.features.consultancy.title",
      description: "courses.features.consultancy.description"
    }
  ];

  return (
    <section key={`why-iyn-courses-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Why IYN Section */}
        <motion.div style={{ willChange: 'transform, opacity' }} className="text-center mb-20 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 style={{ willChange: 'transform, opacity' }} className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="text-[#ec8d13]">AP</span>/
            <span className="text-[#0349AA]">IB</span>{" "}
            {t("courses.why.title")}
          </motion.h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * index,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div style={{ willChange: 'transform, opacity' }} className="mb-6 text-[#0349AA] gpu-accelerate-opacity"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 + (0.1 * index), ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {feature.icon}
              </motion.div>
              
              <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-xl font-bold font-oswald text-gray-800 mb-4 gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (0.1 * index), ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t(feature.title)}
              </motion.h3>
              
              <motion.p style={{ willChange: 'transform, opacity' }} className="text-gray-600 leading-relaxed gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + (0.1 * index), ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t(feature.description)}
              </motion.p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div style={{ willChange: 'transform, opacity' }} className="bg-[#ec8d13] rounded-2xl p-8 md:p-12 text-center text-white gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 style={{ willChange: 'transform, opacity' }} className="text-3xl md:text-4xl font-bold font-oswald mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("courses.cta.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg mb-8 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("courses.cta.subtitle")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button style={{ willChange: 'transform, opacity' }} className="bg-white text-[#ec8d13] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg gpu-accelerate-opacity"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("courses.cta.button")}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
