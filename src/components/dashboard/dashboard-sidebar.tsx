"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Home, BookOpen, FileText, ClipboardList, BarChart3, LogOut, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useLanguage } from "@/contexts/language-context";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";

interface MenuItem {
  id: string;
  labelKey: string;
  icon: React.ComponentType<{ className?: string }>;
  href?: string;
}

const menuItems: MenuItem[] = [
  { id: "home", labelKey: "dashboard.sidebar.home", icon: Home, href: "/dashboard" },
  { id: "courses", labelKey: "dashboard.sidebar.courses", icon: BookOpen, href: "/dashboard/courses" },
  { id: "assignments", labelKey: "dashboard.sidebar.assignments", icon: FileText, href: "/dashboard/assignments" },
  { id: "exams", labelKey: "dashboard.sidebar.exams", icon: ClipboardList, href: "/dashboard/exams" },
  { id: "reports", labelKey: "dashboard.sidebar.reports", icon: BarChart3, href: "/dashboard" },
];

export default function DashboardSidebar() {
  const { t, language } = useLanguage();
  const { logout } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

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

  // Determine active item based on current pathname
  const getActiveItem = () => {
    if (pathname.includes('/assignments')) return 'assignments';
    if (pathname.includes('/exams')) return 'exams';
    if (pathname.includes('/courses')) return 'courses';
    return 'home';
  };

  const activeItem = getActiveItem();

  // Close mobile menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={() => setIsMobileMenuOpen(true)}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </motion.button>


      {/* Sidebar - Desktop */}
      <motion.aside 
        className="hidden lg:flex w-64 bg-white border-r border-gray-200 flex-col gpu-accelerate"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{ willChange: "transform" }}
      >
      {/* Navigation Menu */}
      <nav className="flex-1 p-4">
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={`/${language}${item.href}`}
                  className={`w-full cursor-pointer flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                    isActive 
                      ? "bg-accent text-white shadow-md" 
                      : "text-neutral hover:bg-gray-100 hover:text-primary"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                  <span className="font-medium">{t(item.labelKey)}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </nav>

      {/* Logout Button */}
      <motion.div 
        className="p-4 border-t border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.button
          onClick={handleLogout}
          className="w-full cursor-pointer flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <LogOut className="w-5 h-5" />
          <span className="font-medium">{t("dashboard.sidebar.logout")}</span>
        </motion.button>
      </motion.div>
      </motion.aside>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.aside
             ref={sidebarRef}
             className="lg:hidden fixed left-0 top-0 w-64 h-full bg-white z-[9999] shadow-2xl"
             initial={{ x: -264 }}
             animate={{ x: 0 }}
             exit={{ x: -264 }}
             transition={{ duration: 0.3, ease: "easeOut" }}
           >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-lg font-bold text-neutral">Menu</h2>
              <motion.button
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-5 h-5 text-gray-600" />
              </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <nav className="flex-1 p-4">
              <div className="space-y-2">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;
                  
                  return (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link
                        href={`/${language}${item.href}`}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                          isActive 
                            ? "bg-accent text-white shadow-md" 
                            : "text-neutral hover:bg-gray-100 hover:text-primary"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <Icon className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-500"}`} />
                        <span className="font-medium">{t(item.labelKey)}</span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </nav>

            {/* Mobile Logout Button */}
            <div className="p-4 border-t border-gray-200">
              <motion.button
                className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleLogout}
              >
                <LogOut className="w-5 h-5" />
                <span className="font-medium">{t("dashboard.sidebar.logout")}</span>
              </motion.button>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
