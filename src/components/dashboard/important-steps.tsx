"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";

interface Step {
  id: string;
  textKey: string;
  completed: boolean;
}

const initialSteps: Step[] = [
  {
    id: "profile",
    textKey: "dashboard.importantSteps.profile",
    completed: true
  },
  {
    id: "calendar",
    textKey: "dashboard.importantSteps.calendar",
    completed: true
  },
  {
    id: "exam",
    textKey: "dashboard.importantSteps.exam",
    completed: false
  }
];

export default function ImportantSteps() {
  const { t } = useLanguage();
  const [steps, setSteps] = useState<Step[]>(initialSteps);

  const toggleStep = (stepId: string) => {
    setSteps(prev => prev.map(step => 
      step.id === stepId ? { ...step, completed: !step.completed } : step
    ));
  };

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
        {t("dashboard.importantSteps.title")}
      </motion.h3>

      {/* Steps List */}
      <motion.div 
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
          >
            {/* Checkbox */}
            <motion.button
              className={`w-6 h-6 rounded border-2 flex items-center justify-center transition-all duration-200 ${
                step.completed 
                  ? "bg-green-500 border-green-500 text-white" 
                  : "border-gray-300 hover:border-gray-400"
              }`}
              onClick={() => toggleStep(step.id)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {step.completed && (
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Check className="w-4 h-4" />
                </motion.div>
              )}
            </motion.button>

            {/* Step Text */}
            <motion.span
              className={`text-sm font-medium transition-colors duration-200 ${
                step.completed 
                  ? "text-gray-500 line-through" 
                  : "text-neutral"
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
            >
              {t(step.textKey)}
            </motion.span>
          </motion.div>
        ))}
      </motion.div>

      {/* Progress Bar */}
      <motion.div 
        className="mt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">{t("dashboard.importantSteps.progress")}</span>
          <span className="text-sm font-medium text-primary">
            {steps.filter(s => s.completed).length}/{steps.length}
          </span>
        </div>
        
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-primary to-primary-light h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ 
              width: `${(steps.filter(s => s.completed).length / steps.length) * 100}%` 
            }}
            transition={{ duration: 1, delay: 1, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
