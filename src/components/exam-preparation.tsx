"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Clock, BarChart3 } from "lucide-react";

export default function ExamPreparation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: CheckCircle,
      text: "Binlerce pratik sorusu"
    },
    {
      icon: Clock,
      text: "Süreli deneme sınavları"
    },
    {
      icon: BarChart3,
      text: "Ayrıntılı performans raporları"
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary font-header font-semibold text-lg uppercase tracking-wider">
                SINAV HAZIRLIĞI
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-header font-bold text-neutral leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Sınavlarınızı{" "}
              <motion.span 
                className="text-primary"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Güvenle Geçin
              </motion.span>
            </motion.h2>

            {/* Description */}
            <motion.p 
              className="text-lg text-neutral/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Sınav modülleri ile güçlü ve zayıf yönlerinizi belirleyin, 
              gerçek sınav deneyimi yaşayın ve başarı için gereken avantajları elde edin.
            </motion.p>

            {/* Feature List */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                >
                  <motion.div
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{ 
                      scale: 1.1,
                      backgroundColor: "rgba(3, 73, 170, 0.2)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    <feature.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <span className="text-neutral font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="group bg-gradient-to-r from-primary to-primary-light text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(3, 73, 170, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Deneme Sınavına Başla</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                →
              </motion.div>
            </motion.button>
          </motion.div>

          {/* Right Side - Image/Chart */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Main chart container */}
            <motion.div 
              className="bg-gradient-to-br from-neutral-light/50 to-white rounded-2xl p-8 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Chart header */}
              <motion.div
                className="text-center mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-header font-semibold text-neutral text-lg">
                  AP® Calculus BC 2023
                </h3>
                <p className="text-neutral/60 text-sm">Free-Response Questions</p>
              </motion.div>

              {/* Simulated chart */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {/* Progress bars */}
                {[
                  { label: "Question 1", progress: 85, color: "bg-primary" },
                  { label: "Question 2", progress: 72, color: "bg-accent" },
                  { label: "Question 3", progress: 91, color: "bg-primary" },
                  { label: "Question 4", progress: 68, color: "bg-accent" },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-neutral/80">{item.label}</span>
                      <span className="text-neutral font-medium">{item.progress}%</span>
                    </div>
                    <div className="w-full bg-neutral-light rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full ${item.color}`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${item.progress}%` } : { width: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Performance summary */}
              <motion.div
                className="mt-6 p-4 bg-primary/5 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex justify-between items-center">
                  <span className="text-neutral font-medium">Toplam Skor</span>
                  <span className="text-primary font-bold text-xl">79%</span>
                </div>
                <div className="mt-2">
                  <div className="w-full bg-neutral-light rounded-full h-2">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-primary to-primary-light rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: "79%" } : { width: 0 }}
                      transition={{ duration: 1, delay: 1.2 }}
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-8 h-8 bg-accent rounded-full opacity-60"
              animate={{
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary rounded-full opacity-40"
              animate={{
                x: [0, 10, 0],
                opacity: [0.4, 0.8, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
