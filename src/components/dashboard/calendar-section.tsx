"use client";

import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

interface CalendarDay {
  date: number;
  hasEvent: boolean;
  isSelected: boolean;
  isToday: boolean;
}

// These will be replaced with translations

// Sample data for October 2025
const generateCalendar = (): CalendarDay[] => {
  const days: CalendarDay[] = [];
  const today = 8; // October 8, 2025
  const eventDays = [16, 18, 21, 30]; // Days with events
  
  for (let i = 1; i <= 31; i++) {
    days.push({
      date: i,
      hasEvent: eventDays.includes(i),
      isSelected: i === today,
      isToday: i === today
    });
  }
  
  return days;
};

export default function CalendarSection() {
  const { t } = useLanguage();
  const [currentMonth] = useState(9); // October (0-indexed)
  const [currentYear] = useState(2025);
  const calendarDays = generateCalendar();

  // Get translated month and day names
  const monthNames = [
    t("dashboard.calendar.months.january"), t("dashboard.calendar.months.february"), 
    t("dashboard.calendar.months.march"), t("dashboard.calendar.months.april"),
    t("dashboard.calendar.months.may"), t("dashboard.calendar.months.june"),
    t("dashboard.calendar.months.july"), t("dashboard.calendar.months.august"),
    t("dashboard.calendar.months.september"), t("dashboard.calendar.months.october"),
    t("dashboard.calendar.months.november"), t("dashboard.calendar.months.december")
  ];

  const dayNames = [
    t("dashboard.calendar.days.monday"), t("dashboard.calendar.days.tuesday"),
    t("dashboard.calendar.days.wednesday"), t("dashboard.calendar.days.thursday"),
    t("dashboard.calendar.days.friday"), t("dashboard.calendar.days.saturday"),
    t("dashboard.calendar.days.sunday")
  ];

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Calendar Header */}
      <motion.div 
        className="flex items-center justify-between mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className="text-xl font-bold font-header text-neutral">
          {t("dashboard.calendar.title")}
        </h3>
        
        <motion.div
          className="text-accent font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {monthNames[currentMonth]} {currentYear}
        </motion.div>
      </motion.div>

      {/* Day Headers */}
      <motion.div 
<<<<<<< HEAD
        className="grid grid-cols-7 gap-1 md:gap-2 mb-4"
=======
        className="grid grid-cols-7 gap-2 mb-4"
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {dayNames.map((day, index) => (
          <motion.div
            key={day}
<<<<<<< HEAD
            className="text-center text-xs md:text-sm font-medium text-gray-600 py-2"
=======
            className="text-center text-sm font-medium text-gray-600 py-2"
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
          >
            {day}
          </motion.div>
        ))}
      </motion.div>

      {/* Calendar Grid */}
      <motion.div 
<<<<<<< HEAD
        className="grid grid-cols-7 gap-1 md:gap-2"
=======
        className="grid grid-cols-7 gap-2"
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {calendarDays.map((day, index) => (
          <motion.button
            key={day.date}
            className={`
<<<<<<< HEAD
              aspect-square flex items-center justify-center text-xs md:text-sm font-medium rounded-lg transition-all duration-200 relative
=======
              aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all duration-200 relative
>>>>>>> b21879fc535d7ff9a6bd1b8327ec884ccd07d3d1
              ${day.isSelected 
                ? "bg-primary text-white shadow-md" 
                : day.hasEvent 
                  ? "bg-gray-100 text-neutral hover:bg-gray-200" 
                  : "text-neutral hover:bg-gray-100"
              }
            `}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.4, 
              delay: 0.6 + index * 0.02,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {day.date}
            
            {/* Event Indicator */}
            {day.hasEvent && !day.isSelected && (
              <motion.div
                className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-accent rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.02 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      {/* Legend */}
      <motion.div 
        className="flex items-center justify-start mt-4 space-x-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-accent rounded-full"></div>
          <span className="text-sm text-gray-600">{t("dashboard.calendar.exam")}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
