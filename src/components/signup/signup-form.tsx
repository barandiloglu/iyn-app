"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useToast } from "@/contexts/toast-context";
import { Eye, EyeOff } from "lucide-react";

interface PasswordRequirements {
  minLength: boolean;
  hasUppercase: boolean;
  hasNumber: boolean;
  hasSpecialChar: boolean;
}

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export default function SignupForm() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const { addToast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPasswordPopup, setShowPasswordPopup] = useState(false);

  // Password validation logic
  const validatePassword = (password: string): PasswordRequirements => {
    return {
      minLength: password.length >= 8,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /\d/.test(password),
      hasSpecialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    };
  };

  const getPasswordStrength = (password: string): PasswordStrength => {
    const requirements = validatePassword(password);
    const score = Object.values(requirements).filter(Boolean).length;
    
    if (score === 0) return { score: 0, label: "Very Weak", color: "bg-red-500" };
    if (score === 1) return { score: 25, label: "Weak", color: "bg-red-400" };
    if (score === 2) return { score: 50, label: "Fair", color: "bg-yellow-400" };
    if (score === 3) return { score: 75, label: "Good", color: "bg-blue-400" };
    return { score: 100, label: "Strong", color: "bg-green-500" };
  };

  const passwordRequirements = validatePassword(formData.password);
  const passwordStrength = getPasswordStrength(formData.password);
  const isPasswordValid = Object.values(passwordRequirements).every(Boolean);
  const doPasswordsMatch = formData.password === formData.confirmPassword && formData.confirmPassword.length > 0;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isPasswordValid) {
      addToast({
        type: 'error',
        title: 'Invalid Password',
        message: 'Please ensure your password meets all requirements.',
      });
      return;
    }

    if (!doPasswordsMatch) {
      addToast({
        type: 'error',
        title: 'Passwords Do Not Match',
        message: 'Please ensure both passwords are identical.',
      });
      return;
    }

    if (!formData.agreeToTerms) {
      addToast({
        type: 'error',
        title: 'Terms and Conditions',
        message: 'Please agree to the terms and conditions to continue.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const result = await response.json();

      if (result.success) {
        addToast({
          type: 'success',
          title: 'Account Created Successfully!',
          message: 'Welcome! You can now log in with your credentials.',
          duration: 5000
        });
        
        // Redirect to login page
        router.push('/login');
      } else {
        addToast({
          type: 'error',
          title: 'Sign-up Failed',
          message: result.message || 'An error occurred. Please try again.',
        });
      }
    } catch {
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
    <section key={`signup-form-${language}`} className="py-20 bg-[#F4F5FA]">
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
            {t("signup.form.title")}
          </motion.h2>
          
          <motion.p style={{ willChange: 'transform, opacity' }} className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed gpu-accelerate-opacity"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {t("signup.form.subtitle")}
          </motion.p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* System Information - Left Column */}
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
                {t("signup.systemInfo.title")}
              </motion.h3>

              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Exam Packages Info */}
                <div className="p-6 rounded-2xl border-2 border-[#0349AA] bg-white shadow-lg">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl p-4 rounded-xl bg-gradient-to-r from-[#0349AA] to-[#0091FF] text-white shadow-lg">
                      📚
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-oswald text-gray-800">
                        {t("signup.systemInfo.examPackages.title")}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("signup.systemInfo.examPackages.description")}
                  </p>
                </div>

                {/* Practice Tests Info */}
                <div className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl p-4 rounded-xl bg-gradient-to-r from-[#ec8d13] to-[#d17a0f] text-white shadow-lg">
                      🎯
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-oswald text-gray-800">
                        {t("signup.systemInfo.practiceTests.title")}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("signup.systemInfo.practiceTests.description")}
                  </p>
                </div>

                {/* Progress Tracking Info */}
                <div className="p-6 rounded-2xl border-2 border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl p-4 rounded-xl bg-gradient-to-r from-[#0349AA] to-[#0091FF] text-white shadow-lg">
                      📊
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-oswald text-gray-800">
                        {t("signup.systemInfo.progressTracking.title")}
                      </h4>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {t("signup.systemInfo.progressTracking.description")}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Sign Up Form - Right Column */}
            <motion.div style={{ willChange: 'transform, opacity' }} className="bg-white rounded-2xl shadow-xl p-8 gpu-accelerate-opacity"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-2xl font-bold font-oswald text-gray-800 mb-6 gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("signup.form.createAccount")}
              </motion.h3>

            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off" data-form-type="other" data-opera-ignore="true" data-browser-ignore="true" data-password-manager-ignore="true">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("signup.form.firstName")}
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                    placeholder={t("signup.form.firstNamePlaceholder")}
                    required
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t("signup.form.lastName")}
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                    placeholder={t("signup.form.lastNamePlaceholder")}
                    required
                  />
                </motion.div>
              </div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("signup.form.email")}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                  placeholder={t("signup.form.emailPlaceholder")}
                  autoComplete="email"
                  data-form-type="other"
                  data-lpignore="true"
                  data-1p-ignore="true"
                  data-bwignore="true"
                  data-opera-ignore="true"
                  data-opera-password-ignore="true"
                  data-browser-ignore="true"
                  data-password-manager-ignore="true"
                  data-opera-suggestions="false"
                  data-opera-autofill="false"
                  required
                />
              </motion.div>

              {/* Password Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative"
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("signup.form.password")}
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setShowPasswordPopup(true)}
                    onBlur={() => setTimeout(() => setShowPasswordPopup(false), 200)}
                    className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0349AA] focus:ring-2 focus:ring-[#0349AA]/20 transition-all duration-300"
                    placeholder={t("signup.form.passwordPlaceholder")}
                    autoComplete="new-password"
                    data-form-type="other"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-bwignore="true"
                    data-opera-ignore="true"
                    data-opera-password-ignore="true"
                    data-browser-ignore="true"
                    data-password-manager-ignore="true"
                    data-opera-suggestions="false"
                    data-opera-autofill="false"
                    data-opera-password-suggestions="false"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {/* Password Requirements Popup */}
                {showPasswordPopup && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 z-50 gpu-accelerate-all"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ willChange: 'transform, opacity' }}
                  >
                    {/* Popup Header */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-bold font-oswald text-gray-800">
                        {t("signup.passwordRequirements.title")}
                      </h4>
                      <div className="w-8 h-8 bg-gradient-to-r from-[#0349AA] to-[#0091FF] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">🔒</span>
                      </div>
                    </div>

                    {/* Password Requirements */}
                    <div className="space-y-3">
                      <motion.div 
                        className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                          passwordRequirements.minLength ? 'text-green-600' : 'text-gray-700'
                        }`}
                        animate={{ 
                          color: passwordRequirements.minLength ? '#059669' : '#374151'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            passwordRequirements.minLength 
                              ? 'bg-green-500 text-white' 
                              : 'bg-[#0349AA] text-white'
                          }`}
                          animate={{ 
                            backgroundColor: passwordRequirements.minLength ? '#10b981' : '#0349AA'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {passwordRequirements.minLength ? '✓' : '1'}
                        </motion.span>
                        <span>{t("signup.passwordRequirements.minLength")}</span>
                      </motion.div>

                      <motion.div 
                        className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                          passwordRequirements.hasUppercase ? 'text-green-600' : 'text-gray-700'
                        }`}
                        animate={{ 
                          color: passwordRequirements.hasUppercase ? '#059669' : '#374151'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            passwordRequirements.hasUppercase 
                              ? 'bg-green-500 text-white' 
                              : 'bg-[#0349AA] text-white'
                          }`}
                          animate={{ 
                            backgroundColor: passwordRequirements.hasUppercase ? '#10b981' : '#0349AA'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {passwordRequirements.hasUppercase ? '✓' : '2'}
                        </motion.span>
                        <span>{t("signup.passwordRequirements.uppercase")}</span>
                      </motion.div>

                      <motion.div 
                        className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                          passwordRequirements.hasNumber ? 'text-green-600' : 'text-gray-700'
                        }`}
                        animate={{ 
                          color: passwordRequirements.hasNumber ? '#059669' : '#374151'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            passwordRequirements.hasNumber 
                              ? 'bg-green-500 text-white' 
                              : 'bg-[#0349AA] text-white'
                          }`}
                          animate={{ 
                            backgroundColor: passwordRequirements.hasNumber ? '#10b981' : '#0349AA'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {passwordRequirements.hasNumber ? '✓' : '3'}
                        </motion.span>
                        <span>{t("signup.passwordRequirements.number")}</span>
                      </motion.div>

                      <motion.div 
                        className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                          passwordRequirements.hasSpecialChar ? 'text-green-600' : 'text-gray-700'
                        }`}
                        animate={{ 
                          color: passwordRequirements.hasSpecialChar ? '#059669' : '#374151'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.span 
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                            passwordRequirements.hasSpecialChar 
                              ? 'bg-green-500 text-white' 
                              : 'bg-[#0349AA] text-white'
                          }`}
                          animate={{ 
                            backgroundColor: passwordRequirements.hasSpecialChar ? '#10b981' : '#0349AA'
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {passwordRequirements.hasSpecialChar ? '✓' : '4'}
                        </motion.span>
                        <span>{t("signup.passwordRequirements.specialChar")}</span>
                      </motion.div>
                    </div>

                    {/* Popup Footer */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {t("signup.passwordPopup.tip")}
                        </span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-[#0349AA] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#0091FF] rounded-full"></div>
                          <div className="w-2 h-2 bg-[#ec8d13] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Password Strength Indicator - Compact with Height Animation */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: formData.password ? "auto" : 0,
                    opacity: formData.password ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    opacity: { duration: 0.2 }
                  }}
                  style={{ willChange: 'height, opacity' }}
                >
                  {formData.password && (
                    <motion.div 
                      className="mt-2 flex items-center justify-between"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className="text-xs text-gray-600">Strength:</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-16 bg-gray-200 rounded-full h-1">
                          <motion.div
                            className={`h-1 rounded-full ${passwordStrength.color}`}
                            initial={{ width: 0 }}
                            animate={{ width: `${passwordStrength.score}%` }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            style={{ willChange: 'width' }}
                          />
                        </div>
                        <span className={`text-xs font-medium ${passwordStrength.score === 100 ? 'text-green-600' : passwordStrength.score >= 75 ? 'text-blue-600' : passwordStrength.score >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {passwordStrength.label}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>

              {/* Confirm Password Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("signup.form.confirmPassword")}
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 pr-12 border-2 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                      formData.confirmPassword.length > 0
                        ? doPasswordsMatch
                          ? 'border-green-500 focus:border-green-500 focus:ring-green-500/20'
                          : 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
                        : 'border-gray-200 focus:border-[#0349AA] focus:ring-[#0349AA]/20'
                    }`}
                    placeholder={t("signup.form.confirmPasswordPlaceholder")}
                    autoComplete="new-password"
                    data-form-type="other"
                    data-lpignore="true"
                    data-1p-ignore="true"
                    data-bwignore="true"
                    data-opera-ignore="true"
                    data-opera-password-ignore="true"
                    data-browser-ignore="true"
                    data-password-manager-ignore="true"
                    data-opera-suggestions="false"
                    data-opera-autofill="false"
                    data-opera-password-suggestions="false"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>

                {/* Password Match Indicator with Height Animation */}
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: formData.confirmPassword ? "auto" : 0,
                    opacity: formData.confirmPassword ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.4, 
                    ease: "easeInOut",
                    opacity: { duration: 0.2 }
                  }}
                  style={{ willChange: 'height, opacity' }}
                >
                  {formData.confirmPassword && (
                    <motion.div 
                      className={`mt-2 flex items-center space-x-2 text-sm ${doPasswordsMatch ? 'text-green-600' : 'text-red-500'}`}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <span className={`w-4 h-4 rounded-full flex items-center justify-center ${doPasswordsMatch ? 'bg-green-500' : 'bg-red-500'} text-white text-xs`}>
                        {doPasswordsMatch ? '✓' : '✗'}
                      </span>
                      <span>
                        {doPasswordsMatch ? 'Passwords match' : 'Passwords do not match'}
                      </span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>

              {/* Terms and Conditions */}
              <motion.div style={{ willChange: 'transform, opacity' }} className="flex items-start space-x-3 gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleInputChange}
                  className="w-5 h-5 text-[#0349AA] border-gray-300 rounded focus:ring-[#0349AA] mt-0.5"
                  required
                />
                <label className="text-sm text-gray-600 leading-relaxed">
                  {t("signup.form.agreeToTerms")}{" "}
                  <a
                    href="#"
                    className="text-[#0349AA] hover:text-[#0091FF] font-medium transition-colors duration-200"
                  >
                    {t("signup.form.termsAndConditions")}
                  </a>
                </label>
              </motion.div>

              {/* Sign Up Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || !isPasswordValid || !doPasswordsMatch || !formData.agreeToTerms}
                className="w-full bg-gradient-to-r from-[#0349AA] to-[#0091FF] text-white font-bold py-4 px-6 rounded-lg hover:from-[#0091FF] hover:to-[#0349AA] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
                viewport={{ once: true }}
                whileHover={!isSubmitting && isPasswordValid && doPasswordsMatch && formData.agreeToTerms ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting && isPasswordValid && doPasswordsMatch && formData.agreeToTerms ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  t("signup.form.createAccountButton")
                )}
              </motion.button>

              {/* Login Link */}
              <motion.div style={{ willChange: 'transform, opacity' }} className="text-center gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-gray-600">
                  {t("signup.form.alreadyHaveAccount")}{" "}
                  <Link
                    href="/login"
                    className="text-[#0349AA] hover:text-[#0091FF] font-medium transition-colors duration-200"
                  >
                    {t("signup.form.signIn")}
                  </Link>
                </p>
              </motion.div>
            </form>
            </motion.div>

          </div>

          {/* Mobile Password Requirements - Hidden on desktop, visible on mobile */}
          <div className="lg:hidden mt-8">
            <motion.div style={{ willChange: 'transform, opacity' }} className="space-y-6 gpu-accelerate-opacity"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.h3 style={{ willChange: 'transform, opacity' }} className="text-2xl font-bold font-oswald text-gray-800 mb-6 text-center gpu-accelerate-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {t("signup.passwordRequirements.title")}
              </motion.h3>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                {/* Mobile Password Requirements */}
                <div className="p-6 rounded-2xl border-2 border-[#0349AA] bg-white shadow-lg">
                  <div className="space-y-4">
                    <motion.div 
                      className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                        passwordRequirements.minLength ? 'text-green-600' : 'text-gray-700'
                      }`}
                      animate={{ 
                        color: passwordRequirements.minLength ? '#059669' : '#374151'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          passwordRequirements.minLength 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#0349AA] text-white'
                        }`}
                        animate={{ 
                          backgroundColor: passwordRequirements.minLength ? '#10b981' : '#0349AA'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {passwordRequirements.minLength ? '✓' : '1'}
                      </motion.span>
                      <span>{t("signup.passwordRequirements.minLength")}</span>
                    </motion.div>

                    <motion.div 
                      className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                        passwordRequirements.hasUppercase ? 'text-green-600' : 'text-gray-700'
                      }`}
                      animate={{ 
                        color: passwordRequirements.hasUppercase ? '#059669' : '#374151'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          passwordRequirements.hasUppercase 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#0349AA] text-white'
                        }`}
                        animate={{ 
                          backgroundColor: passwordRequirements.hasUppercase ? '#10b981' : '#0349AA'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {passwordRequirements.hasUppercase ? '✓' : '2'}
                      </motion.span>
                      <span>{t("signup.passwordRequirements.uppercase")}</span>
                    </motion.div>

                    <motion.div 
                      className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                        passwordRequirements.hasNumber ? 'text-green-600' : 'text-gray-700'
                      }`}
                      animate={{ 
                        color: passwordRequirements.hasNumber ? '#059669' : '#374151'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          passwordRequirements.hasNumber 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#0349AA] text-white'
                        }`}
                        animate={{ 
                          backgroundColor: passwordRequirements.hasNumber ? '#10b981' : '#0349AA'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {passwordRequirements.hasNumber ? '✓' : '3'}
                      </motion.span>
                      <span>{t("signup.passwordRequirements.number")}</span>
                    </motion.div>

                    <motion.div 
                      className={`flex items-center space-x-3 text-sm transition-all duration-300 ${
                        passwordRequirements.hasSpecialChar ? 'text-green-600' : 'text-gray-700'
                      }`}
                      animate={{ 
                        color: passwordRequirements.hasSpecialChar ? '#059669' : '#374151'
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.span 
                        className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                          passwordRequirements.hasSpecialChar 
                            ? 'bg-green-500 text-white' 
                            : 'bg-[#0349AA] text-white'
                        }`}
                        animate={{ 
                          backgroundColor: passwordRequirements.hasSpecialChar ? '#10b981' : '#0349AA'
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {passwordRequirements.hasSpecialChar ? '✓' : '4'}
                      </motion.span>
                      <span>{t("signup.passwordRequirements.specialChar")}</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
