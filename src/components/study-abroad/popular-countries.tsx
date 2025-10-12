"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function PopularCountries() {
  const { t, language } = useLanguage();

  const countries = [
    {
      name: "overseas.countries.england.title",
      description: "overseas.countries.england.description",
      image: "/countries/england.jpg"
    },
    {
      name: "overseas.countries.netherlands.title",
      description: "overseas.countries.netherlands.description",
      image: "/countries/netherlands.jpg"
    },
    {
      name: "overseas.countries.germany.title",
      description: "overseas.countries.germany.description",
      image: "/countries/germany.jpg"
    }
  ];

  return (
    <section key={`popular-countries-${language}`} className="py-20 bg-[#F4F5FA]">
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
            {t("overseas.countries.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("overseas.countries.subtitle")}
          </motion.p>

          {/* Country Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
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
                {/* Country Image */}
                <div className="relative h-48 bg-gradient-to-br from-[#0349AA]/10 to-[#ec8d13]/10">
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-4xl font-bold text-gray-400">
                      {t(country.name).charAt(0)}
                    </div>
                  </div>
                </div>

                {/* Country Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold font-oswald text-[#ec8d13]">
                    {t(country.name)}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {t(country.description)}
                  </p>
                  
                  <motion.button style={{ willChange: 'transform, opacity' }} className="w-full bg-[#ec8d13] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#d17a0f] gpu-accelerate-opacity"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t("overseas.countries.detailsButton")}
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
