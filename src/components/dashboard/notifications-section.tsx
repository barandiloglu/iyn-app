"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

interface Notification {
  id: string;
  textKey: string;
  timeKey: string;
  type: "exam" | "update";
  dotColor: string;
}

const notifications: Notification[] = [
  {
    id: "exam",
    textKey: "dashboard.notifications.examUploaded",
    timeKey: "dashboard.notifications.hoursAgo",
    type: "exam",
    dotColor: "bg-blue-500"
  },
  {
    id: "schedule",
    textKey: "dashboard.notifications.scheduleUpdated",
    timeKey: "dashboard.notifications.hoursAgo",
    type: "update",
    dotColor: "bg-accent"
  }
];

export default function NotificationsSection() {
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
        {t("dashboard.notifications.title")}
      </motion.h3>

      {/* Notifications List */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {notifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Notification Dot */}
            <motion.div
              className={`w-2 h-2 ${notification.dotColor} rounded-full mt-2 flex-shrink-0`}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            />

            {/* Notification Content */}
            <div className="flex-1 min-w-0">
              <motion.p
                className="text-sm text-neutral font-medium leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              >
                {t(notification.textKey)}
              </motion.p>
              
              <motion.p
                className="text-xs text-gray-500 mt-1"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {notification.id === "exam" ? `2 ${t(notification.timeKey)}` : `7 ${t(notification.timeKey)}`}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Button */}
      <motion.button
        className="w-full mt-4 text-center text-sm text-primary hover:text-primary-light font-medium transition-colors duration-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {t("dashboard.notifications.viewAll")}
      </motion.button>
    </motion.div>
  );
}
