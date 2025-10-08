"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function PopularExams() {
  const { t, language } = useLanguage();

  const exams = [
    {
      title: "exams.popular.sat.title",
      description: "exams.popular.sat.description",
      modules: "exams.popular.sat.modules",
      price: "exams.popular.sat.price"
    },
    {
      title: "exams.popular.ap.title",
      description: "exams.popular.ap.description",
      modules: "exams.popular.ap.modules",
      price: "exams.popular.ap.price"
    },
    {
      title: "exams.popular.ib.title",
      description: "exams.popular.ib.description",
      modules: "exams.popular.ib.modules",
      price: "exams.popular.ib.price"
    }
  ];

  const plans = [
    {
      title: "exams.plans.basic.title",
      price: "exams.plans.basic.price",
      features: [
        "exams.plans.basic.feature1",
        "exams.plans.basic.feature2",
        "exams.plans.basic.feature3",
        "exams.plans.basic.feature4"
      ],
      buttonText: "exams.plans.basic.button",
      popular: false,
      buttonColor: "bg-gray-800"
    },
    {
      title: "exams.plans.pro.title",
      price: "exams.plans.pro.price",
      features: [
        "exams.plans.pro.feature1",
        "exams.plans.pro.feature2",
        "exams.plans.pro.feature3",
        "exams.plans.pro.feature4"
      ],
      buttonText: "exams.plans.pro.button",
      popular: true,
      buttonColor: "bg-[#ec8d13]"
    },
    {
      title: "exams.plans.corporate.title",
      price: "exams.plans.corporate.price",
      features: [
        "exams.plans.corporate.feature1",
        "exams.plans.corporate.feature2",
        "exams.plans.corporate.feature3",
        "exams.plans.corporate.feature4"
      ],
      buttonText: "exams.plans.corporate.button",
      popular: false,
      buttonColor: "bg-gray-800"
    }
  ];

  return (
    <section key={`popular-exams-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        {/* Popular Exams Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("exams.popular.title")}
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("exams.popular.subtitle")}
          </motion.p>

          {/* Exam Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {exams.map((exam, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Exam Image Placeholder */}
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10 flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-400">
                      {exam.title.split(' ').map(word => word[0]).join('')}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-oswald text-[#ec8d13]">
                    {t(exam.title)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(exam.description)}
                  </p>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <span className="text-gray-500">
                      {t(exam.modules)}
                    </span>
                    <span className="font-bold text-[#ec8d13]">
                      {t(exam.price)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Pricing Plans Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("exams.plans.title")}
          </motion.h2>

          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'border-2 border-[#ec8d13]' : ''
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.1 * index,
                  ease: "easeOut" 
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 right-4 bg-[#ec8d13] text-white px-4 py-2 rounded-full text-sm font-bold">
                    {t("exams.plans.popular")}
                  </div>
                )}

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-oswald text-gray-800">
                    {t(plan.title)}
                  </h3>
                  
                  <div className="text-3xl font-bold text-gray-800">
                    {t(plan.price)}
                  </div>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#ec8d13] rounded-full"></div>
                        <span className="text-gray-600">
                          {t(feature)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    className={`w-full py-3 px-6 rounded-lg text-white font-bold transition-all duration-300 ${plan.buttonColor}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t(plan.buttonText)}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
