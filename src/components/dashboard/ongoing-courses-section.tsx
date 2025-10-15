"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface OngoingCourse {
  id: string;
  title: string;
  instructorKey: string;
  progress: number;
  nextLessonKey: string;
  descriptionKey: string;
  badge: string;
  badgeColor: string;
}

const ongoingCourses: OngoingCourse[] = [
  {
    id: "1",
    title: "AP Calculus BC",
    instructorKey: "courses.ongoing.calculus.instructor",
    progress: 75,
    nextLessonKey: "courses.ongoing.calculus.nextLesson",
    descriptionKey: "courses.ongoing.calculus.description",
    badge: "Calc",
    badgeColor: "bg-gradient-to-r from-blue-600 to-purple-600"
  },
  {
    id: "2", 
    title: "AP Physics 1",
    instructorKey: "courses.ongoing.physics.instructor",
    progress: 45,
    nextLessonKey: "courses.ongoing.physics.nextLesson",
    descriptionKey: "courses.ongoing.physics.description",
    badge: "Phys",
    badgeColor: "bg-gradient-to-r from-orange-500 to-red-500"
  }
];

function OngoingCourseCard({ course, index }: { course: OngoingCourse; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-6 border border-gray-100"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{ willChange: "transform" }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold font-header text-neutral mb-1">{course.title}</h3>
          <p className="text-sm text-gray-600">
            {t("dashboard.courses.instructor")}: {t(course.instructorKey)}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-lg text-white text-sm font-medium ${course.badgeColor}`}>
          {course.badge}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">{t("dashboard.courses.progress")}</span>
          <span className="text-sm font-bold text-primary">{course.progress}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-primary h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${course.progress}%` }}
            transition={{ duration: 1, delay: 0.5 + index * 0.1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Next Lesson */}
      <div className="bg-blue-50 rounded-lg p-3 mb-4">
        <p className="text-sm text-blue-800">
          <span className="font-medium">{t("dashboard.courses.nextLesson")}:</span> {t(course.nextLessonKey)}
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-6 leading-relaxed">{t(course.descriptionKey)}</p>

      {/* Continue Button */}
      <motion.button
        className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ willChange: "transform" }}
      >
        <Play className="w-4 h-4" />
        <span>{t("dashboard.courses.continue")}</span>
      </motion.button>
    </motion.div>
  );
}

export default function OngoingCoursesSection() {
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
        {t("dashboard.courses.ongoingCourses")}
      </motion.h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ongoingCourses.map((course, index) => (
          <OngoingCourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
