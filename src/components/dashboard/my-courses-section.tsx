"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import OngoingCoursesSection from "./ongoing-courses-section";
import CourseRecommendationsSection from "./course-recommendations-section";
import CompletedCoursesSection from "./completed-courses-section";
import AllCoursesSection from "./all-courses-section";

export default function MyCoursesSection() {
  const { t } = useLanguage();

  return (
    <motion.div 
      className="space-y-6 gpu-accelerate"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Page Title */}
      <motion.h1 
        className="text-3xl font-bold font-header text-neutral"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {t("dashboard.courses.myCourses")}
      </motion.h1>

      {/* Ongoing Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <OngoingCoursesSection />
      </motion.div>

      {/* Course Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <CourseRecommendationsSection />
      </motion.div>

      {/* Completed Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CompletedCoursesSection />
      </motion.div>

      {/* All Courses */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <AllCoursesSection />
      </motion.div>
    </motion.div>
  );
}
