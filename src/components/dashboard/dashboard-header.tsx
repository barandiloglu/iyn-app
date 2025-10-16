"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Bell, X, Home, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";
import { useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

interface Notification {
  id: string;
  textKey: string;
  timeKey: string;
  type: "exam" | "update";
  dotColor: string;
}

export default function DashboardHeader() {
  const { t, language, setLanguage } = useLanguage();
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  const languageRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    await logout();
    addToast({
      type: 'success',
      title: 'Logged Out Successfully',
      message: 'You have been logged out of your account.',
      duration: 2000
    });
    router.push('/login');
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notificationRef.current && !notificationRef.current.contains(event.target as Node)) {
        setIsNotificationOpen(false);
      }
      if (languageRef.current && !languageRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications: Notification[] = [
    {
      id: "exam",
      textKey: "dashboard.notifications.examUploaded",
      timeKey: "dashboard.notifications.hoursAgo",
      type: "exam",
      dotColor: "bg-blue-500"
    },
    {
      id: "schedule",
      textKey: "dashboard.notifications.scheduleUpdated",
      timeKey: "dashboard.notifications.hoursAgo",
      type: "update",
      dotColor: "bg-accent"
    }
  ];

  const handleGoHome = () => {
    router.push(`/${language}`);
  };

  const languages = [
    { code: "tr", name: "Türkçe", country: "TR" },
    { code: "en", name: "English", country: "GB" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  const handleLanguageChange = (langCode: string) => {
    setLanguage(langCode as "tr" | "en");
    setIsLanguageOpen(false);
    // Update the URL to reflect the language change
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(/^\/[a-z]{2}/, `/${langCode}`);
    router.push(newPath);
  };

  return (
    <motion.header 
      className="bg-white border-b border-gray-200 px-4 md:px-6 py-4 h-20 flex items-center justify-between relative gpu-accelerate z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ willChange: "transform" }}
    >
      {/* Logo and Title */}
      <div className="flex items-center space-x-3 md:space-x-4 ml-12 lg:ml-0">
        <motion.div
          className="gpu-accelerate"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ willChange: "transform" }}
        >
          <Image
            src="/images/dashboard/squareLogo.png"
            alt="İYN Education & Consultancy"
            width={45}
            height={45}
            className="object-contain rounded-lg"
          />
        </motion.div>
        
        <motion.div
          className="gpu-accelerate hidden sm:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ willChange: "transform" }}
        >
          <h1 className="text-lg md:text-xl font-bold font-header text-neutral">{t("dashboard.title")}</h1>
        </motion.div>
      </div>

              {/* User Info and Actions */}
              <div className="flex items-center space-x-2 md:space-x-4">
                {/* Home Button - Hidden on small mobile */}
                <motion.button
                  className="hidden cursor-pointer sm:flex items-center space-x-2 px-3 md:px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-200 gpu-accelerate"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGoHome}
                  style={{ willChange: "transform" }}
                >
                  <Home className="w-4 h-4" />
                  <span className="hidden md:inline text-sm font-medium">Return to Website</span>
                </motion.button>

                {/* Mobile Home Button - Icon only */}
                <motion.button
                  className="sm:hidden p-2 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors duration-200 gpu-accelerate"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGoHome}
                  style={{ willChange: "transform" }}
                >
                  <Home className="w-4 h-4" />
                </motion.button>

                {/* Language Selector */}
                <div className="relative" ref={languageRef}>
                  <motion.button
                    className="flex cursor-pointer items-center space-x-1 md:space-x-2 px-2 md:px-3 py-2 text-neutral hover:text-primary transition-colors duration-200 rounded-lg hover:bg-neutral-light/50 gpu-accelerate"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    style={{ willChange: "transform" }}
                  >
                    <ReactCountryFlag 
                      countryCode={currentLanguage.country} 
                      svg 
                      style={{
                        width: '16px',
                        height: '12px',
                        borderRadius: '2px'
                      }}
                    />
                    <span className="hidden md:inline text-sm font-medium">{currentLanguage.name}</span>
                    <motion.div
                      animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                  </motion.button>

                  {/* Language Dropdown */}
                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-light/20 overflow-hidden z-[9999] gpu-accelerate-opacity"
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        style={{ willChange: 'transform, opacity' }}
                      >
                        {languages.map((lang, index) => (
                          <motion.button
                            key={lang.code}
                            className={`w-full cursor-pointer flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-light/50 transition-colors duration-200 gpu-accelerate-opacity ${
                              language === lang.code ? 'bg-primary/10 text-primary' : 'text-neutral'
                            }`}
                            onClick={() => handleLanguageChange(lang.code)}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.05 }}
                            whileHover={{ x: 5 }}
                            style={{ willChange: 'transform, opacity' }}
                          >
                            <ReactCountryFlag 
                              countryCode={lang.country} 
                              svg 
                              style={{
                                width: '16px',
                                height: '12px',
                                borderRadius: '2px'
                              }}
                            />
                            <span className="font-medium">{lang.name}</span>
                            {language === lang.code && (
                              <motion.div
                                className="ml-auto w-2 h-2 bg-primary rounded-full"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1 }}
                              />
                            )}
                          </motion.button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Notifications */}
        <div className="relative" ref={notificationRef}>
          <motion.button
            className="relative cursor-pointer p-2 text-gray-600 hover:text-primary transition-colors duration-200 gpu-accelerate"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsNotificationOpen(!isNotificationOpen)}
            style={{ willChange: "transform" }}
          >
            <Bell className="w-6 h-6" />
            {/* Notification badge */}
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-white text-xs rounded-full flex items-center justify-center">
              {notifications.length}
            </span>
          </motion.button>

          {/* Notification Dropdown */}
          <AnimatePresence>
            {isNotificationOpen && (
               <motion.div
                 className="absolute right-0 top-full mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-[9999]"
                 initial={{ opacity: 0, y: -10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, y: -10, scale: 0.95 }}
                 transition={{ duration: 0.2, ease: "easeOut" }}
               >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                  <h3 className="font-bold text-neutral">{t("dashboard.notifications.title")}</h3>
                  <button
                    onClick={() => setIsNotificationOpen(false)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Notifications List */}
                <div className="max-h-64 overflow-y-auto">
                  {notifications.map((notification, index) => (
                    <motion.div
                      key={notification.id}
                      className="flex items-start space-x-3 p-4 hover:bg-gray-50 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      {/* Notification Dot */}
                      <div className={`w-2 h-2 ${notification.dotColor} rounded-full mt-2 flex-shrink-0`} />
                      
                      {/* Notification Content */}
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-neutral font-medium leading-relaxed">
                          {t(notification.textKey)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {notification.id === "exam" ? `2 ${t(notification.timeKey)}` : `7 ${t(notification.timeKey)}`}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="p-4 border-t border-gray-200">
                  <motion.button
                    className="w-full text-center text-sm text-primary hover:text-primary-light font-medium transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {t("dashboard.notifications.viewAll")}
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* User Profile */}
                <motion.div
                  className="relative flex items-center space-x-2 md:space-x-3 gpu-accelerate"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  style={{ willChange: "transform" }}
                >
          <span className="hidden md:inline text-sm font-medium text-neutral">
            {user?.firstName} {user?.lastName}
          </span>
          
          {/* Avatar with dropdown */}
          <div className="relative" ref={profileRef}>
            <motion.button
              className="w-8 h-8 md:w-10 md:h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold gpu-accelerate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ willChange: "transform" }}
              onClick={() => setIsProfileOpen(!isProfileOpen)}
            >
              {user?.firstName?.[0]}{user?.lastName?.[0] || user?.email?.[0] || 'U'}
            </motion.button>
            
            {/* Profile Dropdown */}
            <AnimatePresence>
              {isProfileOpen && (
                <motion.div
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-medium text-gray-800">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    Logout
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
