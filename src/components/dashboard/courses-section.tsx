"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface Course {
  id: string;
  title: string;
  progress: number;
  backgroundImage: string;
}

const courses: Course[] = [
  {
    id: "physics",
    title: "AP PHYSICS 1 & 2",
    progress: 75,
    backgroundImage: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900"
  },
  {
    id: "calculus",
    title: "AP CALCULUS",
    progress: 40,
    backgroundImage: "bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900"
  }
];

export default function CoursesSection() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Section Title */}
      <motion.h3 
        className="text-xl font-bold font-header text-neutral mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("dashboard.courses.title")}
      </motion.h3>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            className={`relative rounded-xl overflow-hidden shadow-lg ${course.backgroundImage}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-4 left-4 text-white text-xs opacity-50">
                ∫ x² dx = x³/3 + C
              </div>
              <div className="absolute bottom-4 right-4 text-white text-xs opacity-50">
                F = ma
              </div>
            </div>

            {/* Content */}
            <div className="relative p-4 md:p-6 text-white">
              <motion.h4 
                className="text-base md:text-lg font-bold mb-3 md:mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
              >
                {course.title}
              </motion.h4>

              {/* Progress Bar */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
              >
                <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                  <motion.div
                    className="bg-white h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${course.progress}%` }}
                    transition={{ duration: 1, delay: 1 + index * 0.2, ease: "easeOut" }}
                  />
                </div>
                <p className="text-sm text-white/80">
                  {course.progress}% {t("dashboard.courses.completed")}
                </p>
              </motion.div>

              {/* Continue Button */}
              <motion.button
                className="bg-accent text-white px-3 md:px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center space-x-2 text-sm md:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-4 h-4" />
                <span>{t("dashboard.courses.continue")}</span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
