"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/language-context";
import { useMobile } from "@/hooks/use-mobile";

export default function AboutMission() {
  const { t, language } = useLanguage();
  const isMobile = useMobile();

  return (
    <section key={`about-mission-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-[#0349AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-oswald uppercase text-[#ec8d13] mb-4">
              {t("about.mission.title")}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {t("about.mission.description")}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.8, delay: isMobile ? 0.1 : 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <div className="mb-6">
              <svg className="w-16 h-16 mx-auto text-[#0349AA]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold font-oswald uppercase text-[#ec8d13] mb-4">
              {t("about.vision.title")}
            </h3>
            <p className="text-gray-800 leading-relaxed">
              {t("about.vision.description")}
            </p>
          </motion.div>
        </div>

        {/* Our Story */}
        <motion.div 
          className="bg-white rounded-2xl p-8 md:p-12 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-4">
              {t("about.story.title")}
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              {t("about.story.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/about1.png"
                alt="IYN Education Team"
                width={600}
                height={400}
                className="rounded-lg shadow-md"
              />
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                {t("about.story.paragraph1")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("about.story.paragraph2")}
              </p>
              <p className="text-gray-700 leading-relaxed">
                {t("about.story.paragraph3")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: isMobile ? 0.4 : 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold font-oswald text-gray-800 mb-4">
            {t("about.team.title")}
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            {t("about.team.subtitle")}
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <motion.div 
                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
                whileHover={!isMobile ? { rotate: 5, scale: 1.05 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#0349AA] to-[#0091FF] flex items-center justify-center text-white font-bold text-2xl">
                  AC
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {t("about.team.member1.name")}
              </h3>
              <p className="text-gray-600">
                {t("about.team.member1.title")}
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="text-center">
              <motion.div 
                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
                whileHover={!isMobile ? { rotate: -5, scale: 1.05 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#ec8d13] to-[#d17a0f] flex items-center justify-center text-white font-bold text-2xl">
                  EÖ
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {t("about.team.member2.name")}
              </h3>
              <p className="text-gray-600">
                {t("about.team.member2.title")}
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="text-center">
              <motion.div 
                className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center"
                whileHover={!isMobile ? { rotate: 5, scale: 1.05 } : {}}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-[#0349AA] to-[#0091FF] flex items-center justify-center text-white font-bold text-2xl">
                  MD
                </div>
              </motion.div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">
                {t("about.team.member3.name")}
              </h3>
              <p className="text-gray-600">
                {t("about.team.member3.title")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
