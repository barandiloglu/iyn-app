"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

interface StatCard {
  titleKey: string;
  value: number;
  color: string;
  dotColor: string;
}

export default function WelcomeSection() {
  const { t } = useLanguage();

  const statCards: StatCard[] = [
    {
      titleKey: "dashboard.stats.upcomingExams",
      value: 1,
      color: "text-blue-600",
      dotColor: "bg-blue-400"
    },
    {
      titleKey: "dashboard.stats.activeCourses",
      value: 12,
      color: "text-purple-600",
      dotColor: "bg-purple-400"
    },
    {
      titleKey: "dashboard.stats.pendingAssignments",
      value: 5,
      color: "text-green-600",
      dotColor: "bg-green-400"
    },
    {
      titleKey: "dashboard.stats.completed",
      value: 3,
      color: "text-orange-600",
      dotColor: "bg-accent"
    }
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 gpu-accelerate"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Welcome Message */}
      <motion.h2 
        className="text-2xl font-bold font-header text-neutral mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("dashboard.welcome")}
      </motion.h2>

      {/* Statistics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card, index) => (
          <motion.div
            key={card.titleKey}
            className="bg-white border border-gray-200 rounded-lg p-4 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            style={{ willChange: 'transform' }}
          >
            {/* Colored Dot */}
            <motion.div
              className={`w-3 h-3 ${card.dotColor} rounded-full mx-auto mb-3`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            />
            
            {/* Title */}
            <motion.h3 
              className="text-sm font-medium text-gray-600 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              {t(card.titleKey)}
            </motion.h3>
            
            {/* Value */}
            <motion.div
              className={`text-3xl font-bold ${card.color}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.7 + index * 0.1,
                type: "spring",
                stiffness: 200
              }}
            >
              {card.value}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
