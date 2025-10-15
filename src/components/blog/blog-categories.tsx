"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function BlogCategories() {
  const { t, language } = useLanguage();

  const categories = [
    {
      name: "blog.categories.education.title",
      description: "blog.categories.education.description",
      icon: "🎓",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      name: "blog.categories.exams.title",
      description: "blog.categories.exams.description",
      icon: "📝",
      color: "from-[#ec8d13] to-[#d17a0f]"
    },
    {
      name: "blog.categories.overseas.title",
      description: "blog.categories.overseas.description",
      icon: "🌍",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      name: "blog.categories.career.title",
      description: "blog.categories.career.description",
      icon: "💼",
      color: "from-[#ec8d13] to-[#d17a0f]"
    },
    {
      name: "blog.categories.tips.title",
      description: "blog.categories.tips.description",
      icon: "💡",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      name: "blog.categories.news.title",
      description: "blog.categories.news.description",
      icon: "📰",
      color: "from-[#ec8d13] to-[#d17a0f]"
    }
  ];

  return (
    <section key={`blog-categories-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        <motion.div style={{ willChange: 'transform, opacity' }} className="text-center mb-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2 style={{ willChange: 'transform, opacity' }} className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.categories.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("blog.categories.subtitle")}
          </motion.p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
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
              {/* Category Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${category.color} flex items-center justify-center text-2xl`}>
                {category.icon}
              </div>

              {/* Category Content */}
              <div className="text-center space-y-4">
                <h3 className="text-xl font-bold font-oswald text-gray-800">
                  {t(category.name)}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {t(category.description)}
                </p>
                
                <motion.button
                  className={`bg-gradient-to-r ${category.color} text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 hover:shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t("blog.categories.readMore")}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
