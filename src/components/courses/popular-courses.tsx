"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function PopularCourses() {
  const { t, language } = useLanguage();

  const courses = [
    {
      id: 1,
      title: "AP CALCULUS AB/BC",
      description: "courses.calculus.description",
      hours: "courses.calculus.hours",
      level: "courses.calculus.level",
      image: "/courses/calculus.jpg",
      levelColor: "text-[#ec8d13]"
    },
    {
      id: 2,
      title: "AP PHYSICS 1 & 2",
      description: "courses.physics.description",
      hours: "courses.physics.hours",
      level: "courses.physics.level",
      image: "/courses/physics.jpg",
      levelColor: "text-[#ec8d13]"
    },
    {
      id: 3,
      title: "AP CHEMISTRY",
      description: "courses.chemistry.description",
      hours: "courses.chemistry.hours",
      level: "courses.chemistry.level",
      image: "/courses/chemistry.jpg",
      levelColor: "text-[#ec8d13]"
    },
    {
      id: 4,
      title: "AP BIOLOGY",
      description: "courses.biology.description",
      hours: "courses.biology.hours",
      level: "courses.biology.level",
      image: "/courses/biology.jpg",
      levelColor: "text-[#ec8d13]"
    },
    {
      id: 5,
      title: "MACRO/MICROECONOMICS",
      description: "courses.economics.description",
      hours: "courses.economics.hours",
      level: "courses.economics.level",
      image: "/courses/economics.jpg",
      levelColor: "text-[#ec8d13]"
    },
    {
      id: 6,
      title: "AP ENGLISH LANGUAGE",
      description: "courses.english.description",
      hours: "courses.english.hours",
      level: "courses.english.level",
      image: "/courses/english.jpg",
      levelColor: "text-[#ec8d13]"
    }
  ];

  return (
    <section key={`popular-courses-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        {/* AP and IB Programs Introduction */}
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
            {t("courses.programs.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-4xl mx-auto mb-12 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("courses.programs.description")}
          </motion.p>

          {/* Program Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* AP Program Card */}
            <motion.div style={{ willChange: 'transform, opacity' }} className="bg-[#ec8d13] rounded-2xl p-8 text-white gpu-accelerate-opacity"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold font-oswald mb-4">
                {t("courses.ap.title")}
              </h3>
              <p className="leading-relaxed">
                {t("courses.ap.description")}
              </p>
            </motion.div>

            {/* IB Program Card */}
            <motion.div style={{ willChange: 'transform, opacity' }} className="bg-[#0349AA] rounded-2xl p-8 text-white gpu-accelerate-opacity"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold font-oswald mb-4">
                {t("courses.ib.title")}
              </h3>
              <p className="leading-relaxed">
                {t("courses.ib.description")}
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Popular Courses Section */}
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
            {t("courses.popular.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("courses.popular.subtitle")}
          </motion.p>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: "easeOut" 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Course Image */}
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#ec8d13] tracking-wider uppercase">
                      {course.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="space-y-4 flex flex-col flex-1">
                <h3 className="text-xl font-bold font-oswald text-[#ec8d13]">
                  {course.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed flex-1">
                  {t(course.description)}
                </p>
                
                <div className="flex justify-between items-end pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-gray-500 text-sm">
                    {t(course.hours)}
                  </span>
                  <span className={`font-bold text-sm ${course.levelColor}`}>
                    {t(course.level)}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
