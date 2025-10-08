"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import { usePathname } from "next/navigation";
import ReactCountryFlag from "react-country-flag";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const pathname = usePathname();
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  const homeUrl = `/${language}`;

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
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
    { key: "nav.overseas", href: `/${language}/international-education` },
    { key: "nav.blog", href: `/${language}/blog` }
  ];

  const languages = [
    { code: "tr", name: "Türkçe", country: "TR" },
    { code: "en", name: "English", country: "GB" }
  ];

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a 
            href={homeUrl}
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            aria-label="IYN Education & Consultancy Home"
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
                className={`transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary font-bold"
                    : "text-neutral font-medium hover:text-primary"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.a
              href={`/${language}/login`}
              className={`flex items-center space-x-2 transition-colors duration-200 ${
                isActive(`/${language}/login`)
                  ? "text-primary font-bold"
                  : "text-neutral hover:text-primary"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <User size={20} />
              <span>{t("nav.login")}</span>
            </motion.a>
            
            {/* Language Selector */}
            <div className="relative" ref={languageDropdownRef}>
              <motion.button
                className="flex items-center space-x-2 px-3 py-2 text-neutral hover:text-primary transition-colors duration-200 rounded-lg hover:bg-neutral-light/50"
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
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
                    className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-neutral-light/20 overflow-hidden z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    {languages.map((lang, index) => (
                      <motion.button
                        key={lang.code}
                        className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-neutral-light/50 transition-colors duration-200 ${
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
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="md:hidden p-2 text-neutral"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
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
          className="md:hidden overflow-hidden"
        >
          <nav className="py-4 space-y-4">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className={`block transition-colors duration-200 ${
                  isActive(item.href)
                    ? "text-primary font-bold"
                    : "text-neutral font-medium hover:text-primary"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                {t(item.key)}
              </motion.a>
            ))}
            
            {/* Mobile Language Selector */}
            <motion.div
              className="space-y-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: navigationItems.length * 0.1, duration: 0.3 }}
            >
              <span className="text-neutral/60 text-sm font-medium">Language / Dil</span>
              <div className="flex space-x-2">
                {languages.map((lang) => (
                  <motion.button
                    key={lang.code}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
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
                    <span>{lang.name}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>

            <motion.a
              href={`/${language}/login`}
              className={`flex items-center space-x-2 font-medium transition-colors duration-200 w-full ${
                isActive(`/${language}/login`)
                  ? "text-primary font-bold"
                  : "text-neutral hover:text-primary"
              }`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
              transition={{ delay: (navigationItems.length + 1) * 0.1, duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            >
              <User size={20} />
              <span>{t("nav.login")}</span>
            </motion.a>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
