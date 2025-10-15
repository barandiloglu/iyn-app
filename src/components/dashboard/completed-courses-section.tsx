"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface CompletedCourse {
  id: string;
  titleKey: string;
  score: number;
  maxScore: number;
}

const completedCourses: CompletedCourse[] = [
  {
    id: "1",
    titleKey: "courses.completed.microeconomics",
    score: 92,
    maxScore: 100
  },
  {
    id: "2",
    titleKey: "courses.completed.english",
    score: 88,
    maxScore: 100
  }
];

function CompletedCourseItem({ course, index }: { course: CompletedCourse; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center space-x-3">
        <div className="p-1 bg-green-100 rounded-full">
          <CheckCircle className="w-5 h-5 text-green-600" />
        </div>
        <span className="font-medium text-neutral">{t(course.titleKey)}</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">{t("dashboard.courses.successScore")}:</span>
        <span className="font-bold text-accent">{course.score}/{course.maxScore}</span>
      </div>
    </motion.div>
  );
}

export default function CompletedCoursesSection() {
  const { t } = useLanguage();

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Section Title */}
      <motion.h2 
        className="text-2xl font-bold font-header text-neutral mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("dashboard.courses.completedCourses")}
      </motion.h2>

      {/* Completed Courses List */}
      <div className="space-y-3">
        {completedCourses.map((course, index) => (
          <CompletedCourseItem key={course.id} course={course} index={index} />
        ))}
      </div>

      {/* Empty State (if no completed courses) */}
      {completedCourses.length === 0 && (
        <motion.div
          className="text-center py-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <CheckCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500">{t("dashboard.courses.noCompletedCourses")}</p>
        </motion.div>
      )}
    </motion.div>
  );
}
