"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function PreparationPrograms() {
  const { t, language } = useLanguage();

  const programs = [
    {
      title: "exams.programs.sat.title",
      description: "exams.programs.sat.description"
    },
    {
      title: "exams.programs.apib.title",
      description: "exams.programs.apib.description"
    },
    {
      title: "exams.programs.european.title",
      description: "exams.programs.european.description"
    },
    {
      title: "exams.programs.online.title",
      description: "exams.programs.online.description"
    }
  ];

  return (
    <section key={`preparation-programs-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div style={{ willChange: 'transform, opacity' }} className="text-center mb-16 gpu-accelerate-opacity"
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
            {t("exams.programs.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("exams.programs.subtitle")}
          </motion.p>
        </motion.div>

        {/* Program Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#0091FF] to-[#0349AA] rounded-2xl p-8 text-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.1 * index,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-xl font-bold font-oswald mb-4">
                {t(program.title)}
              </h3>
              <p className="leading-relaxed">
                {t(program.description)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
