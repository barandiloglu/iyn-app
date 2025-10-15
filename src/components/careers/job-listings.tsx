"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Users, ArrowRight } from "lucide-react";

export default function JobListings() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobListings = [
    {
      id: 1,
      title: "careers.jobs.seniorInstructor.title",
      department: "careers.jobs.seniorInstructor.department",
      location: "careers.jobs.seniorInstructor.location",
      type: "careers.jobs.seniorInstructor.type",
      experience: "careers.jobs.seniorInstructor.experience",
      description: "careers.jobs.seniorInstructor.description",
      requirements: [
        "careers.jobs.seniorInstructor.req1",
        "careers.jobs.seniorInstructor.req2",
        "careers.jobs.seniorInstructor.req3",
        "careers.jobs.seniorInstructor.req4"
      ],
      icon: "👨‍🏫",
      isUrgent: false
    },
    {
      id: 2,
      title: "careers.jobs.marketingSpecialist.title",
      department: "careers.jobs.marketingSpecialist.department",
      location: "careers.jobs.marketingSpecialist.location",
      type: "careers.jobs.marketingSpecialist.type",
      experience: "careers.jobs.marketingSpecialist.experience",
      description: "careers.jobs.marketingSpecialist.description",
      requirements: [
        "careers.jobs.marketingSpecialist.req1",
        "careers.jobs.marketingSpecialist.req2",
        "careers.jobs.marketingSpecialist.req3"
      ],
      icon: "📈",
      isUrgent: true
    },
    {
      id: 3,
      title: "careers.jobs.techSupport.title",
      department: "careers.jobs.techSupport.department",
      location: "careers.jobs.techSupport.location",
      type: "careers.jobs.techSupport.type",
      experience: "careers.jobs.techSupport.experience",
      description: "careers.jobs.techSupport.description",
      requirements: [
        "careers.jobs.techSupport.req1",
        "careers.jobs.techSupport.req2",
        "careers.jobs.techSupport.req3"
      ],
      icon: "💻",
      isUrgent: false
    },
    {
      id: 4,
      title: "careers.jobs.studentAdvisor.title",
      department: "careers.jobs.studentAdvisor.department",
      location: "careers.jobs.studentAdvisor.location",
      type: "careers.jobs.studentAdvisor.type",
      experience: "careers.jobs.studentAdvisor.experience",
      description: "careers.jobs.studentAdvisor.description",
      requirements: [
        "careers.jobs.studentAdvisor.req1",
        "careers.jobs.studentAdvisor.req2",
        "careers.jobs.studentAdvisor.req3"
      ],
      icon: "🎯",
      isUrgent: false
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ willChange: 'transform, opacity' }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ willChange: 'opacity' }}
          >
            {t("careers.jobs.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {t("careers.jobs.subtitle")}
          </motion.p>
        </motion.div>

        {/* Job Listings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jobListings.map((job, index) => (
            <motion.div
              key={job.id}
              className={`bg-white rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden ${
                job.isUrgent ? 'border-[#ec8d13]' : 'border-gray-100 hover:border-[#0349AA]'
              } gpu-accelerate-opacity`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut" 
              }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.3 }
              }}
              style={{ willChange: 'transform, opacity' }}
            >
              {/* Job Header */}
              <div className={`p-6 ${job.isUrgent ? 'bg-gradient-to-r from-[#ec8d13] to-[#d17a0f]' : 'bg-gradient-to-r from-[#0349AA] to-[#0091FF]'} text-white`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.div
                      className="text-3xl"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.2 }}
                      style={{ willChange: 'transform' }}
                    >
                      {job.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold font-oswald mb-1">
                        {t(job.title)}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {t(job.department)}
                      </p>
                    </div>
                  </div>
                  {job.isUrgent && (
                    <motion.span
                      className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                      style={{ willChange: 'transform' }}
                    >
                      {t("careers.jobs.urgent")}
                    </motion.span>
                  )}
                </div>
              </div>

              {/* Job Details */}
              <div className="p-6">
                {/* Job Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin size={16} />
                    <span className="text-sm">{t(job.location)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Clock size={16} />
                    <span className="text-sm">{t(job.type)}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Users size={16} />
                    <span className="text-sm">{t(job.experience)}</span>
                  </div>
                </div>

                {/* Job Description */}
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t(job.description)}
                </p>

                {/* Requirements */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3">{t("careers.jobs.requirements")}:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((requirement, reqIndex) => (
                      <motion.li
                        key={reqIndex}
                        className="flex items-start space-x-2 text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{ duration: 0.4, delay: index * 0.1 + 0.4 + reqIndex * 0.1 }}
                        style={{ willChange: 'transform, opacity' }}
                      >
                        <span className="text-[#0349AA] mt-1">•</span>
                        <span className="text-sm">{t(requirement)}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Apply Button */}
                <motion.button
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    job.isUrgent 
                      ? 'bg-[#ec8d13] hover:bg-[#d17a0f] text-white' 
                      : 'bg-[#0349AA] hover:bg-[#0091FF] text-white'
                  } gpu-accelerate`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{ willChange: 'transform' }}
                >
                  <span>{t("careers.jobs.apply")}</span>
                  <ArrowRight size={16} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Open Positions Message */}
        <motion.div
          className="text-center mt-12 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          style={{ willChange: 'transform, opacity' }}
        >
          <p className="text-gray-600 mb-4">
            {t("careers.jobs.noMatch")}
          </p>
          <motion.button
            className="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-6 rounded-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ willChange: 'transform' }}
          >
            {t("careers.jobs.sendResume")}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
