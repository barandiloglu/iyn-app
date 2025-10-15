"use client";

import { motion, AnimatePresence } from "framer-motion";
import { FileText, ClipboardList, Download, Eye, Play, Clock, CheckCircle, AlertCircle, XCircle } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface Assignment {
  id: string;
  course: string;
  titleKey: string;
  dueDate: string;
  status: "completed" | "pending" | "not-started";
  isOverdue?: boolean;
  actionKey: string;
  actionType: "view-results" | "download" | "start";
}

interface Exam {
  id: string;
  course: string;
  titleKey: string;
  dueDate: string;
  status: "completed" | "pending" | "not-started";
  isOverdue?: boolean;
  actionKey: string;
  actionType: "view-results" | "download" | "start";
}

const assignments: Assignment[] = [
  {
    id: "1",
    course: "AP Calculus BC",
    titleKey: "assignments.calculus.title",
    dueDate: "15 Ekim 2025",
    status: "completed",
    actionKey: "assignments.action.viewResults",
    actionType: "view-results"
  },
  {
    id: "2",
    course: "AP Physics 1",
    titleKey: "assignments.physics.title",
    dueDate: "22 Ekim 2025",
    status: "pending",
    isOverdue: true,
    actionKey: "assignments.action.download",
    actionType: "download"
  },
  {
    id: "3",
    course: "IB English A",
    titleKey: "assignments.english.title",
    dueDate: "29 Ekim 2025",
    status: "not-started",
    isOverdue: true,
    actionKey: "assignments.action.start",
    actionType: "start"
  },
  {
    id: "4",
    course: "AP Microeconomics",
    titleKey: "assignments.economics.title",
    dueDate: "5 Kasım 2025",
    status: "pending",
    actionKey: "assignments.action.download",
    actionType: "download"
  }
];

const exams: Exam[] = [
  {
    id: "5",
    course: "AP Calculus BC",
    titleKey: "exams.calculus.title",
    dueDate: "12 Ekim 2025",
    status: "completed",
    actionKey: "exams.action.viewResults",
    actionType: "view-results"
  },
  {
    id: "6",
    course: "AP Physics 1",
    titleKey: "exams.physics.title",
    dueDate: "18 Ekim 2025",
    status: "pending",
    actionKey: "exams.action.start",
    actionType: "start"
  },
  {
    id: "7",
    course: "IB Chemistry",
    titleKey: "exams.chemistry.title",
    dueDate: "25 Ekim 2025",
    status: "not-started",
    actionKey: "exams.action.start",
    actionType: "start"
  }
];

function StatusBadge({ status }: { status: string }) {
  const { t } = useLanguage();
  
  const statusConfig = {
    completed: {
      labelKey: "dashboard.assignments.status.completed",
      icon: CheckCircle,
      className: "bg-green-100 text-green-800 border-green-200",
      iconClassName: "text-green-600"
    },
    pending: {
      labelKey: "dashboard.assignments.status.pending",
      icon: Clock,
      className: "bg-orange-100 text-orange-800 border-orange-200",
      iconClassName: "text-orange-600"
    },
    "not-started": {
      labelKey: "dashboard.assignments.status.notStarted",
      icon: XCircle,
      className: "bg-gray-100 text-gray-800 border-gray-200",
      iconClassName: "text-gray-600"
    }
  };

  const config = statusConfig[status as keyof typeof statusConfig];
  const Icon = config.icon;

  return (
    <motion.span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${config.className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      style={{ willChange: "transform" }}
    >
      <Icon className={`w-3 h-3 ${config.iconClassName}`} />
      {t(config.labelKey)}
    </motion.span>
  );
}

function ActionButton({ actionKey, actionType, isOverdue }: { actionKey: string; actionType: string; isOverdue?: boolean }) {
  const { t } = useLanguage();
  const getIcon = () => {
    switch (actionType) {
      case "view-results":
        return Eye;
      case "download":
        return Download;
      case "start":
        return Play;
      default:
        return Eye;
    }
  };

  const Icon = getIcon();
  const textColor = isOverdue ? "text-red-600 hover:text-red-700" : "text-primary hover:text-primary-light";

  return (
    <motion.button
      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${textColor}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{ willChange: "transform" }}
    >
      <Icon className="w-4 h-4" />
      {t(actionKey)}
    </motion.button>
  );
}

function AssignmentExamRow({ item, index, type }: { item: Assignment | Exam; index: number; type: "assignment" | "exam" }) {
  const { t } = useLanguage();
  
  return (
    <motion.tr
      className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors duration-200"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ willChange: "transform" }}
    >
      <td className="px-4 py-4">
        <span className="text-sm font-medium text-neutral">{item.course}</span>
      </td>
      <td className="px-4 py-4">
        <span className="text-sm text-neutral">{t(item.titleKey)}</span>
      </td>
      <td className="px-4 py-4">
        <span className={`text-sm ${item.isOverdue ? "text-red-600 font-medium" : "text-neutral"}`}>
          {item.dueDate}
        </span>
      </td>
      <td className="px-4 py-4">
        <StatusBadge status={item.status} />
      </td>
      <td className="px-4 py-4">
        <ActionButton 
          actionKey={item.actionKey} 
          actionType={item.actionType} 
          isOverdue={item.isOverdue}
        />
      </td>
    </motion.tr>
  );
}

function SectionHeader({ title, count, type }: { title: string; count: number; type: "assignment" | "exam" }) {
  const icon = type === "assignment" ? FileText : ClipboardList;
  const Icon = icon;

  return (
    <motion.div
      className="flex items-center justify-between mb-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Icon className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-header text-neutral">{title}</h3>
          <p className="text-sm text-gray-600">{count} {type === "assignment" ? "ödev" : "sınav"}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function AssignmentsExamsSection() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState<"assignments" | "exams">("assignments");

  // Set initial tab based on current page
  useEffect(() => {
    if (pathname.includes('/exams')) {
      setActiveTab('exams');
    } else {
      setActiveTab('assignments');
    }
  }, [pathname]);

  return (
    <motion.div 
      className="bg-white rounded-xl shadow-sm p-6 gpu-accelerate"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Main Title */}
      <motion.h2 
        className="text-2xl font-bold font-header text-neutral mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {t("dashboard.assignments.title")}
      </motion.h2>

      {/* Tab Navigation */}
      <motion.div 
        className="flex gap-1 mb-8 bg-gray-100 p-1 rounded-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
            activeTab === "assignments" 
              ? "bg-white text-primary shadow-sm" 
              : "text-gray-600 hover:text-primary"
          }`}
          onClick={() => setActiveTab("assignments")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center justify-center gap-2">
            <FileText className="w-4 h-4" />
            <span>{t("dashboard.assignments.assignments")}</span>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
              {assignments.length}
            </span>
          </div>
        </motion.button>
        <motion.button
          className={`flex-1 py-2 px-4 rounded-md font-medium transition-all duration-200 ${
            activeTab === "exams" 
              ? "bg-white text-primary shadow-sm" 
              : "text-gray-600 hover:text-primary"
          }`}
          onClick={() => setActiveTab("exams")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform" }}
        >
          <div className="flex items-center justify-center gap-2">
            <ClipboardList className="w-4 h-4" />
            <span>{t("dashboard.assignments.exams")}</span>
            <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
              {exams.length}
            </span>
          </div>
        </motion.button>
      </motion.div>

      {/* Content */}
      <AnimatePresence mode="wait">
        {activeTab === "assignments" && (
          <motion.div
            key="assignments"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader 
              title={t("dashboard.assignments.allAssignments")} 
              count={assignments.length} 
              type="assignment"
            />
            
            <motion.div
              className="bg-gray-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.course")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.assignmentTitle")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.dueDate")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.status")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.action")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {assignments.map((assignment, index) => (
                      <AssignmentExamRow 
                        key={assignment.id} 
                        item={assignment} 
                        index={index}
                        type="assignment"
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeTab === "exams" && (
          <motion.div
            key="exams"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <SectionHeader 
              title={t("dashboard.assignments.allExams")} 
              count={exams.length} 
              type="exam"
            />
            
            <motion.div
              className="bg-gray-50 rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.course")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.assignmentTitle")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.dueDate")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.status")}
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        {t("dashboard.assignments.action")}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {exams.map((exam, index) => (
                      <AssignmentExamRow 
                        key={exam.id} 
                        item={exam} 
                        index={index}
                        type="exam"
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
