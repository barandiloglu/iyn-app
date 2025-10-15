"use client";

import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface CourseRecommendation {
  id: string;
  title: string;
  descriptionKey: string;
}

const recommendations: CourseRecommendation[] = [
  {
    id: "1",
    title: "AP Chemistry",
    descriptionKey: "courses.recommendations.chemistry.description"
  },
  {
    id: "2",
    title: "SAT Math Prep",
    descriptionKey: "courses.recommendations.sat.description"
  }
];

function RecommendationCard({ recommendation, index }: { recommendation: CourseRecommendation; index: number }) {
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
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold font-header text-neutral mb-2">{recommendation.title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{t(recommendation.descriptionKey)}</p>
        </div>
        <motion.button
          className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-light transition-colors duration-200 flex items-center space-x-2 ml-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ willChange: "transform" }}
        >
          <Eye className="w-4 h-4" />
          <span>{t("dashboard.courses.review")}</span>
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function CourseRecommendationsSection() {
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
        {t("dashboard.courses.recommendations")}
      </motion.h2>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard key={recommendation.id} recommendation={recommendation} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
