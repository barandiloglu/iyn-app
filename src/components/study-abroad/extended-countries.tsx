"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";

export default function ExtendedCountries() {
  const { t, language } = useLanguage();

  const allCountries = [
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
    },
    {
      name: "overseas.countries.belgium.title",
      description: "overseas.countries.belgium.description",
      image: "/countries/belgium.jpg"
    },
    {
      name: "overseas.countries.switzerland.title",
      description: "overseas.countries.switzerland.description",
      image: "/countries/switzerland.jpg"
    },
    {
      name: "overseas.countries.spain.title",
      description: "overseas.countries.spain.description",
      image: "/countries/spain.jpg"
    },
    {
      name: "overseas.countries.italy.title",
      description: "overseas.countries.italy.description",
      image: "/countries/italy.jpg"
    },
    {
      name: "overseas.countries.canada.title",
      description: "overseas.countries.canada.description",
      image: "/countries/canada.jpg"
    },
    {
      name: "overseas.countries.america.title",
      description: "overseas.countries.america.description",
      image: "/countries/america.jpg"
    }
  ];

  return (
    <section key={`extended-countries-${language}`} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* All Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allCountries.map((country, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
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
                
                <p className="text-gray-600 leading-relaxed text-sm">
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

        {/* Call to Action */}
        <motion.div style={{ willChange: 'transform, opacity' }} className="text-center mt-16 gpu-accelerate-opacity"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-2xl md:text-3xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("overseas.cta.title")}
          </motion.h3>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("overseas.cta.subtitle")}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button style={{ willChange: 'transform, opacity' }} className="bg-gradient-to-r from-[#ec8d13] to-[#d17a0f] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg gpu-accelerate-opacity"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(236, 141, 19, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              {t("overseas.cta.button")}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
