"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

export default function SupportTeam() {
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
        {t("dashboard.support.title")}
      </motion.h3>

      {/* Advisor Card */}
      <motion.div
        className="bg-gray-50 rounded-lg p-4 mb-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {/* Avatar */}
        <motion.div
          className="flex items-center space-x-3 mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <motion.div
            className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
          >
            EC
          </motion.div>
          
          <div>
            <motion.h4 
              className="font-bold text-neutral"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              Emre Çelik
            </motion.h4>
            <motion.p 
              className="text-sm text-gray-600"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              {t("dashboard.support.advisor")}
            </motion.p>
          </div>
        </motion.div>

        {/* Chat Button */}
        <motion.button
          className="w-full bg-accent text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-600 transition-colors duration-200 flex items-center justify-center space-x-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle className="w-4 h-4" />
          <span>{t("dashboard.support.startChat")}</span>
        </motion.button>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <p className="text-sm text-gray-600">
          {t("dashboard.support.description")}
        </p>
      </motion.div>
    </motion.div>
  );
}
