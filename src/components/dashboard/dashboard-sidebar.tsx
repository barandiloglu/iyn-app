"use client";

import { motion } from "framer-motion";
import { Home, BookOpen, FileText, ClipboardList, BarChart3, LogOut } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

interface MenuItem {
  id: string;
  labelKey: string;
  icon: React.ComponentType<any>;
  href?: string;
}

const menuItems: MenuItem[] = [
  { id: "home", labelKey: "dashboard.sidebar.home", icon: Home },
  { id: "courses", labelKey: "dashboard.sidebar.courses", icon: BookOpen },
  { id: "assignments", labelKey: "dashboard.sidebar.assignments", icon: FileText },
  { id: "exams", labelKey: "dashboard.sidebar.exams", icon: ClipboardList },
  { id: "reports", labelKey: "dashboard.sidebar.reports", icon: BarChart3 },
];

export default function DashboardSidebar() {
  const { t } = useLanguage();
  const [activeItem, setActiveItem] = useState("home");

  return (
    <motion.aside 
      className="w-64 bg-white border-r border-gray-200 flex flex-col gpu-accelerate"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <motion.button
                key={item.id}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                  isActive 
                    ? "bg-accent text-white shadow-md" 
                    : "text-neutral hover:bg-gray-100 hover:text-primary"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveItem(item.id)}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                <span className="font-medium">{t(item.labelKey)}</span>
              </motion.button>
            );
          })}
        </motion.div>
      </nav>

      {/* Logout Button */}
      <motion.div 
        className="p-4 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">{t("dashboard.sidebar.logout")}</span>
        </motion.button>
      </motion.div>
    </motion.aside>
  );
}
