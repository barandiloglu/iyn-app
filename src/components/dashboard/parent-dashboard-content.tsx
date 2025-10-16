"use client";

import { motion } from "framer-motion";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/contexts/toast-context";
import { useRouter } from "next/navigation";

export default function ParentDashboardContent() {
  const { user, logout } = useAuth();
  const { addToast } = useToast();
  const router = useRouter();

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

  return (
    <div className="min-h-screen bg-[#F4F5FA]">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Parent Dashboard
              </h1>
              <p className="text-gray-600 mt-1">
                Welcome back, {user?.firstName || 'Parent'}!
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-500">Logged in as</p>
                <p className="font-medium text-gray-800">{user?.email}</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">
                    {user?.firstName?.[0] || user?.email?.[0] || 'P'}
                  </span>
                </div>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200 text-sm font-medium"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* My Children */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">My Children</h3>
                <p className="text-sm text-gray-600">Student profiles</p>
              </div>
            </div>
              <p className="text-gray-600 mb-4">
                View your children&apos;s profiles, academic progress, and performance overview.
              </p>
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              View Children
            </button>
          </motion.div>

          {/* Academic Progress */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📈</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Progress</h3>
                <p className="text-sm text-gray-600">Academic tracking</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Monitor your children&apos;s academic progress, grades, and learning achievements.
            </p>
            <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors">
              View Progress
            </button>
          </motion.div>

          {/* Assignments */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Assignments</h3>
                <p className="text-sm text-gray-600">Homework & projects</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Track upcoming assignments, due dates, and your children&apos;s submission status.
            </p>
            <button className="w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition-colors">
              View Assignments
            </button>
          </motion.div>

          {/* Attendance */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Attendance</h3>
                <p className="text-sm text-gray-600">Class attendance</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Check your children&apos;s class attendance records and school calendar events.
            </p>
            <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors">
              View Attendance
            </button>
          </motion.div>

          {/* Communication */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💬</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Messages</h3>
                <p className="text-sm text-gray-600">Teacher communication</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Communicate with teachers, receive updates, and stay informed about school events.
            </p>
            <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors">
              View Messages
            </button>
          </motion.div>

          {/* Reports */}
          <motion.div
            className="bg-white rounded-xl shadow-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">Reports</h3>
                <p className="text-sm text-gray-600">Detailed analytics</p>
              </div>
            </div>
            <p className="text-gray-600 mb-4">
              Access detailed reports on your children&apos;s performance, behavior, and achievements.
            </p>
            <button className="w-full bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
              View Reports
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
