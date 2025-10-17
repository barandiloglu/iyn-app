"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronDown, LayoutDashboard, LogOut } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";
import { usePathname, useRouter } from "next/navigation";
import ReactCountryFlag from "react-country-flag";
import { UserRole } from "@/generated/prisma";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { user, isAuthenticated, logout, isLoading, refreshAuth } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const userDropdownRef = useRef<HTMLDivElement>(null);
  const homeUrl = `/${language}`;

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
      if (userDropdownRef.current && !userDropdownRef.current.contains(event.target as Node)) {
        setIsUserDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to check if a navigation item is active
  const isActive = (href: string) => {
    if (href === `/${language}`) {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const navigationItems = [
    { key: "nav.about", href: `/${language}/about` },
    { key: "nav.courses", href: `/${language}/courses` },
    { key: "nav.exams", href: `/${language}/exams` },
    { key: "nav.overseas", href: `/${language}/study-abroad` },
    { key: "nav.careers", href: `/${language}/careers` },
    { key: "nav.blog", href: `/${language}/blog` },
  ];

  const languages = [
    { code: "tr", name: "Türkçe", country: "TR" },
    { code: "en", name: "English", country: "GB" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  // Function to get dashboard route based on user role
  const getDashboardRoute = (userRole: UserRole): string => {
    const routeMap: Record<UserRole, string> = {
      [UserRole.STUDENT]: `/${language}/dashboard`,
      [UserRole.TEACHER]: `/${language}/teacher-dashboard`,
      [UserRole.PARENT]: `/${language}/parent-dashboard`,
      [UserRole.ADMIN]: `/${language}/admin-dashboard`,
    };
    return routeMap[userRole] || `/${language}/dashboard`;
  };

  // Handle dashboard navigation with auth refresh
  const handleDashboardNavigation = async (dashboardRoute: string) => {
    try {
      // Refresh auth status before navigation
      await refreshAuth();
      setIsUserDropdownOpen(false);
      // Navigate to dashboard
      router.push(dashboardRoute);
    } catch (error) {
      console.error('Dashboard navigation error:', error);
      // If auth refresh fails, still try to navigate
      setIsUserDropdownOpen(false);
      router.push(dashboardRoute);
    }
  };

  // Handle logout
  const handleLogout = async () => {
    await logout();
    addToast({
      type: 'success',
      title: 'Logged Out Successfully',
      message: 'You have been logged out of your account.',
      duration: 2000
    });
    router.push(`/${language}`);
    setIsUserDropdownOpen(false);
  };

  return (
    <motion.header 
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="bg-white shadow-sm sticky top-0 z-50 gpu-accelerate-opacity"
      style={{ willChange: 'opacity, transform' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a 
            href={homeUrl}
            className="flex items-center space-x-3 gpu-accelerate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1.0, ease: "easeOut" }}
            whileHover={{}}
            aria-label="IYN Education & Consultancy Home"
            style={{ willChange: 'transform, opacity' }}
          >
            <Image
              src="/logo.png"
              alt="IYN Education & Consultancy logo"
              width={280}
              height={70}
              className="w-64 md:w-64 lg:w-72 h-auto"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`relative text-sm font-medium transition-all duration-0 gpu-accelerate-opacity group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-neutral hover:text-primary"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + (index * 0.1), duration: 0.6, ease: "easeOut" }}
                whileHover={{}}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform, opacity' }}
              >
                {t(item.key)}
                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: isActive(item.href) ? "100%" : 0 
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoading ? (
              /* Loading State */
              <div className="flex items-center space-x-2 px-3 py-2 min-w-[120px] justify-center">
                <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ) : isAuthenticated && user ? (
              /* User Dropdown */
              <div className="relative" ref={userDropdownRef}>
                <motion.button
                  className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-neutral hover:text-primary transition-colors duration-0 rounded-lg hover:bg-neutral-light/50 gpu-accelerate min-w-[120px] justify-center"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                  onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                  whileHover={{}}
                  whileTap={{ scale: 0.95 }}
                  style={{ willChange: 'transform, opacity' }}
                >
                  {/* User Avatar */}
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {user?.firstName?.[0]}{user?.lastName?.[0] || user?.email?.[0] || 'U'}
                  </div>
                  <span className="text-sm font-medium">
                    {user?.firstName} {user?.lastName}
                  </span>
                  <motion.div
                    animate={{ rotate: isUserDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown size={16} />
                  </motion.div>
                </motion.button>

                {/* User Dropdown Menu */}
                <AnimatePresence>
                  {isUserDropdownOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg border border-neutral-light/20 overflow-hidden z-50 gpu-accelerate-opacity"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      style={{ willChange: 'transform, opacity' }}
                    >
                      {/* User Info Header */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-800">
                          {user?.firstName} {user?.lastName}
                        </p>
                        <p className="text-xs text-gray-500">{user?.email}</p>
                      </div>

                      {/* Dashboard Link */}
                      <motion.button
                        onClick={() => handleDashboardNavigation(getDashboardRoute(user.role))}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-light/50 transition-colors duration-200 gpu-accelerate-opacity text-neutral"
                        whileHover={{ x: 5 }}
                        style={{ willChange: 'transform' }}
                      >
                        <LayoutDashboard size={16} />
                        <span className="text-sm font-medium">{t("nav.dashboard")}</span>
                      </motion.button>

                      {/* Logout Button */}
                      <motion.button
                        onClick={handleLogout}
                        className="w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-red-50 transition-colors duration-200 gpu-accelerate-opacity text-red-600"
                        whileHover={{ x: 5 }}
                        style={{ willChange: 'transform' }}
                      >
                        <LogOut size={16} />
                        <span className="text-sm font-medium">{t("nav.logout")}</span>
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <motion.a
                href={`/${language}/login`}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-0 gpu-accelerate min-w-[120px] justify-center ${
                  isActive(`/${language}/login`)
                    ? "text-primary"
                    : "text-neutral hover:text-primary"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
                whileHover={{}}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform, opacity' }}
              >
                <User size={20} />
                <span>{t("nav.login")}</span>
              </motion.a>
            )}
            
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <motion.button
                className="flex cursor-pointer items-center space-x-2 px-3 py-2 text-sm font-medium text-neutral hover:text-primary transition-colors duration-0 rounded-lg hover:bg-neutral-light/50 gpu-accelerate min-w-[100px]"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                whileHover={{}}
                whileTap={{ scale: 0.95 }}
                style={{ willChange: 'transform, opacity' }}
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
                <span className="text-sm font-medium">{currentLanguage.name}</span>
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
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-light/20 overflow-hidden z-50 gpu-accelerate-opacity"
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
                        onClick={() => {
                          setLanguage(lang.code as "tr" | "en");
                          setIsLanguageOpen(false);
                        }}
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
                        <span className="text-sm font-medium">{lang.name}</span>
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
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-neutral gpu-accelerate"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            style={{ willChange: 'transform, opacity' }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMenuOpen ? 1 : 0, 
            height: isMenuOpen ? "auto" : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden gpu-accelerate-opacity"
          style={{ willChange: 'height, opacity' }}
        >
          <nav className="py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`relative block text-sm font-medium transition-all duration-0 gpu-accelerate-opacity group ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-neutral hover:text-primary"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
                whileHover={{}}
                style={{ willChange: 'transform, opacity' }}
              >
                {t(item.key)}
                {/* Animated Underline */}
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ 
                    width: isActive(item.href) ? "100%" : 0 
                  }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                />
              </motion.a>
            ))}
            
            {/* Mobile Language Selector */}
            <motion.div
              className="space-y-2 gpu-accelerate-opacity"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
              transition={{ delay: navigationItems.length * 0.05, duration: 0.4, ease: "easeOut" }}
              style={{ willChange: 'transform, opacity' }}
            >
              <span className="text-neutral/60 text-sm font-medium">Language / Dil</span>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-0 gpu-accelerate ${
                      language === lang.code 
                        ? 'bg-primary text-white' 
                        : 'bg-neutral-light text-neutral hover:bg-primary/10'
                    }`}
                    onClick={() => {
                      setLanguage(lang.code as "tr" | "en");
                      setIsMenuOpen(false);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ willChange: 'transform' }}
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
                    <span className="text-sm font-medium">{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {isLoading ? (
              /* Mobile Loading State */
              <motion.div
                className="space-y-3 gpu-accelerate-opacity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
                transition={{ delay: (navigationItems.length + 1) * 0.05, duration: 0.4, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="flex items-center space-x-3 p-3 bg-neutral-light/20 rounded-lg">
                  <div className="w-10 h-10 bg-gray-200 rounded-full animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="w-32 h-3 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              </motion.div>
            ) : isAuthenticated && user ? (
              /* Mobile User Section */
              <motion.div
                className="space-y-3 gpu-accelerate-opacity"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
                transition={{ delay: (navigationItems.length + 1) * 0.05, duration: 0.4, ease: "easeOut" }}
                style={{ willChange: 'transform, opacity' }}
              >
                {/* User Info */}
                <div className="flex items-center space-x-3 p-3 bg-neutral-light/20 rounded-lg">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {user?.firstName?.[0]}{user?.lastName?.[0] || user?.email?.[0] || 'U'}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-neutral">
                      {user?.firstName} {user?.lastName}
                    </p>
                    <p className="text-xs text-gray-500">{user?.email}</p>
                  </div>
                </div>

                {/* Dashboard Link */}
                <motion.button
                  onClick={() => {
                    handleDashboardNavigation(getDashboardRoute(user.role));
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-0 w-full gpu-accelerate-opacity ${
                    isActive(getDashboardRoute(user.role))
                      ? "text-primary"
                      : "text-neutral hover:text-primary"
                  }`}
                  whileHover={{ x: 5 }}
                  style={{ willChange: 'transform' }}
                >
                  <LayoutDashboard size={20} />
                  <span>{t("nav.dashboard")}</span>
                </motion.button>

                {/* Logout Button */}
                <motion.button
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center space-x-2 text-sm font-medium text-red-600 hover:text-red-700 transition-colors duration-0 w-full gpu-accelerate-opacity"
                  whileHover={{ x: 5 }}
                  style={{ willChange: 'transform' }}
                >
                  <LogOut size={20} />
                  <span>{t("nav.logout")}</span>
                </motion.button>
              </motion.div>
            ) : (
              <motion.a
                href={`/${language}/login`}
                className={`flex items-center space-x-2 text-sm font-medium transition-colors duration-0 w-full gpu-accelerate-opacity ${
                  isActive(`/${language}/login`)
                    ? "text-primary"
                    : "text-neutral hover:text-primary"
                }`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, scale: isMenuOpen ? 1 : 0.95 }}
                transition={{ delay: (navigationItems.length + 1) * 0.05, duration: 0.4, ease: "easeOut" }}
                onClick={() => setIsMenuOpen(false)}
                style={{ willChange: 'transform, opacity' }}
              >
                <User size={20} />
                <span>{t("nav.login")}</span>
              </motion.a>
            )}
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
