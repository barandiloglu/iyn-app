"use client";

import { motion } from "framer-motion";
import { Clock, Award } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";

interface Course {
  id: string;
  titleKey: string;
  descriptionKey: string;
  hoursKey: string;
  levelKey: string;
  image: string;
}

const allCourses: Course[] = [
  {
    id: "1",
    titleKey: "courses.calculus.title",
    descriptionKey: "courses.calculus.description",
    hoursKey: "courses.calculus.hours",
    levelKey: "courses.calculus.level",
    image: "/images/courses/calculus.jpg"
  },
  {
    id: "2",
    titleKey: "courses.physics.title",
    descriptionKey: "courses.physics.description",
    hoursKey: "courses.physics.hours",
    levelKey: "courses.physics.level",
    image: "/images/courses/physics.jpg"
  },
  {
    id: "3",
    titleKey: "courses.chemistry.title",
    descriptionKey: "courses.chemistry.description",
    hoursKey: "courses.chemistry.hours",
    levelKey: "courses.chemistry.level",
    image: "/images/courses/chemistry.jpg"
  },
  {
    id: "4",
    titleKey: "courses.biology.title",
    descriptionKey: "courses.biology.description",
    hoursKey: "courses.biology.hours",
    levelKey: "courses.biology.level",
    image: "/images/courses/biology.jpg"
  },
  {
    id: "5",
    titleKey: "courses.economics.title",
    descriptionKey: "courses.economics.description",
    hoursKey: "courses.economics.hours",
    levelKey: "courses.economics.level",
    image: "/images/courses/economics.jpg"
  },
  {
    id: "6",
    titleKey: "courses.english.title",
    descriptionKey: "courses.english.description",
    hoursKey: "courses.english.hours",
    levelKey: "courses.english.level",
    image: "/images/courses/english.jpg"
  }
];

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { t } = useLanguage();

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      style={{ willChange: "transform" }}
    >
      {/* Course Image */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-primary-light/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl opacity-20">
            {course.titleKey.includes('calculus') && '∫'}
            {course.titleKey.includes('physics') && '⚛'}
            {course.titleKey.includes('chemistry') && '🧪'}
            {course.titleKey.includes('biology') && '🧬'}
            {course.titleKey.includes('economics') && '📈'}
            {course.titleKey.includes('english') && '📚'}
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Title */}
        <h3 className="text-lg font-bold font-header text-neutral mb-3">
          {t(course.titleKey)}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
          {t(course.descriptionKey)}
        </p>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>{t(course.hoursKey)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Award className="w-4 h-4" />
            <span>{t(course.levelKey)}</span>
          </div>
        </div>

        {/* Enroll Button */}
        <motion.button
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary-light transition-colors duration-200 mt-auto"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ willChange: "transform" }}
        >
          {t("dashboard.courses.enroll")}
        </motion.button>
      </div>
    </motion.div>
  );
}

export default function AllCoursesSection() {
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
        {t("dashboard.courses.allCourses")}
      </motion.h2>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allCourses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>
    </motion.div>
  );
}
