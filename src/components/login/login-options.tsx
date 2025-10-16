"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";
import { useIsDesktop } from "@/hooks/use-media-query";

export default function LoginOptions() {
  const { t, language } = useLanguage();
  const isDesktop = useIsDesktop();
  const router = useRouter();
  const { login, isLoading } = useAuth();
  const { addToast } = useToast();
  const [selectedType, setSelectedType] = useState<string>("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const loginTypes = [
    {
      id: "student",
      title: t("login.options.student.title"),
      description: t("login.options.student.description"),
      icon: "🎓",
      color: "from-[#0349AA] to-[#0091FF]"
    },
    {
      id: "parent",
      title: t("login.options.parent.title"),
      description: t("login.options.parent.description"),
      icon: "👨‍👩‍👧‍👦",
      color: "from-[#ec8d13] to-[#d17a0f]"
    },
    {
      id: "teacher",
      title: t("login.options.teacher.title"),
      description: t("login.options.teacher.description"),
      icon: "👨‍🏫",
      color: "from-[#0349AA] to-[#0091FF]"
    }
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await login({
        email,
        password,
        userType: selectedType as 'student' | 'teacher' | 'parent',
      });

      if (result.success && result.redirectTo) {
        addToast({
          type: 'success',
          title: 'Login Successful!',
          message: 'Redirecting to your dashboard...',
          duration: 2000
        });
        // Small delay to show success toast before redirect
        setTimeout(() => {
          router.push(result.redirectTo || '/dashboard');
        }, 500);
      } else {
        addToast({
          type: 'error',
          title: 'Login Failed',
          message: result.message || 'Please check your credentials and try again.',
        });
      }
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Network Error',
        message: 'Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section key={`login-options-${language}`} className="py-20 bg-[#F4F5FA]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
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
            {t("login.options.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("login.options.subtitle")}
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Login Type Selection */}
            <motion.div style={{ willChange: 'transform, opacity' }} className="space-y-6 gpu-accelerate-opacity"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-2xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("login.selectType")}
              </motion.h3>

              {loginTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedType === type.id ? "transform scale-105" : "hover:scale-102"
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedType(type.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div
                    className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                      selectedType === type.id
                        ? "border-[#0349AA] bg-white shadow-xl"
                        : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg"
                    }`}
                  >
                    {/* Selection indicator */}
                    {selectedType === type.id && (
                      <motion.div style={{ willChange: 'transform, opacity' }} className="absolute -top-2 -right-2 w-8 h-8 bg-[#0349AA] rounded-full flex items-center justify-center gpu-accelerate-opacity"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <span className="text-white text-sm">✓</span>
                      </motion.div>
                    )}

                    <div className="flex items-center space-x-4">
                      <motion.div
                        className={`text-4xl p-4 rounded-xl bg-gradient-to-r ${type.color} text-white shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {type.icon}
                      </motion.div>
                      
                      <div className="flex-1">
                        <h4 className="text-xl font-bold font-oswald text-gray-800 mb-2">
                          {type.title}
                        </h4>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {type.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Login Form */}
            <motion.div style={{ willChange: 'transform, opacity' }} className="bg-white rounded-2xl shadow-xl p-8 gpu-accelerate-opacity"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-2xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("login.form.title")}
              </motion.h3>

              <form onSubmit={handleLogin} className="space-y-6">
                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("login.form.email")}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                    placeholder={t("login.form.emailPlaceholder")}
                    required
                  />
                </motion.div>

                {/* Password Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("login.form.password")}
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                    placeholder={t("login.form.passwordPlaceholder")}
                    required
                  />
                </motion.div>

                {/* Remember Me & Forgot Password */}
                <motion.div style={{ willChange: 'transform, opacity' }} className="flex items-center justify-between gpu-accelerate-opacity"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#0349AA] border-gray-300 rounded focus:ring-[#0349AA]"
                    />
                    <span className="text-sm text-gray-600">
                      {t("login.form.rememberMe")}
                    </span>
                  </label>
                  
                  <a
                    href="#"
                    className="text-sm text-[#0349AA] hover:text-[#0091FF] transition-colors duration-200"
                  >
                    {t("login.form.forgotPassword")}
                  </a>
                </motion.div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isLoading}
                  className="w-full bg-gradient-to-r from-[#0349AA] to-[#0091FF] text-white font-bold py-4 px-6 rounded-lg hover:from-[#0091FF] hover:to-[#0349AA] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                  viewport={{ once: true }}
                  whileHover={!isSubmitting && !isLoading ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting && !isLoading ? { scale: 0.98 } : {}}
                >
                  {isSubmitting || isLoading ? (
                    <div className="flex items-center justify-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Logging in...</span>
                    </div>
                  ) : (
                    t("login.form.loginButton")
                  )}
                </motion.button>

                {/* Sign Up Link */}
                <motion.div style={{ willChange: 'transform, opacity' }} className="text-center gpu-accelerate-opacity"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600">
                    {t("login.form.noAccount")}{" "}
                    <a
                      href="#"
                      className="text-[#0349AA] hover:text-[#0091FF] font-medium transition-colors duration-200"
                    >
                      {t("login.form.signUp")}
                    </a>
                  </p>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
