"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaBook, FaChartLine, FaTasks, FaBell, FaGraduationCap, FaClock, FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Mock data (replace with actual data fetching in a real application)
const mockUserData = {
  name: "John Doe",
  currentCourse: "Advanced Machine Learning",
  progress: 65,
  recommendations: [
    { id: 1, title: "Deep Learning Fundamentals" },
    { id: 2, title: "Natural Language Processing" },
    { id: 3, title: "Computer Vision Techniques" },
  ],
  upcomingTasks: [
    { id: 1, title: "Complete Module 5 Quiz", dueDate: "2023-06-15" },
    { id: 2, title: "Submit Project Proposal", dueDate: "2023-06-20" },
    { id: 3, title: "Peer Review Assignment", dueDate: "2023-06-22" },
  ],
  recentActivities: [
    { id: 1, title: "Completed lesson: Neural Networks Basics", time: "2 hours ago" },
    { id: 2, title: "Submitted assignment: Data Preprocessing", time: "1 day ago" },
    { id: 3, title: "Started new course: Advanced Machine Learning", time: "3 days ago" },
  ],
};

const DashboardCard = ({ icon: Icon, title, children, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300`}>
    <div className="flex items-center mb-4">
      <Icon className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} text-2xl mr-2`} />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

const Dashboard = () => {
    const { isDarkMode } = useTheme();  
    const { name, currentCourse, progress, recommendations, upcomingTasks, recentActivities } = mockUserData;

  return (
    <>
      <Head>
        <title>EKLAVYA Dashboard - Your Learning Journey</title>
        <meta name="description" content="Track your progress and discover personalized learning recommendations on your EKLAVYA dashboard." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold">Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{name}</span>!</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <DashboardCard icon={FaBook} title="Current Course" isDarkMode={isDarkMode}>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{currentCourse}</p>
              <div className="mt-4">
                <div className="flex justify-between mb-1">
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Progress</span>
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{progress}%</span>
                </div>
                <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-2.5`}>
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
              </div>
              <Link href="/course" className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} mt-4 inline-block`}>
                Continue Learning →
              </Link>
            </DashboardCard>

            <DashboardCard icon={FaChartLine} title="Personalized Recommendations" isDarkMode={isDarkMode}>
              <ul className="space-y-2">
                {recommendations.map((rec) => (
                  <li key={rec.id}>
                    <Link href={`/course/${rec.id}`} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'}`}>
                      {rec.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </DashboardCard>

            <DashboardCard icon={FaTasks} title="Upcoming Tasks" isDarkMode={isDarkMode}>
              <ul className="space-y-2">
                {upcomingTasks.map((task) => (
                  <li key={task.id} className="flex justify-between items-center">
                    <span className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{task.title}</span>
                    <span className="text-sm text-gray-500">{task.dueDate}</span>
                  </li>
                ))}
              </ul>
            </DashboardCard>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DashboardCard icon={FaBell} title="Recent Activity" isDarkMode={isDarkMode}>
              <ul className="space-y-4">
                {recentActivities.map((activity) => (
                  <li key={activity.id} className="flex items-start">
                    <FaClock className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} mt-1 mr-2`} />
                    <div>
                      <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>{activity.title}</p>
                      <p className="text-sm text-gray-500">{activity.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </DashboardCard>

            <DashboardCard icon={FaGraduationCap} title="Your Learning Stats" isDarkMode={isDarkMode}>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">12</p>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Courses Completed</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-400">89%</p>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Average Score</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-purple-400">56</p>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Hours Learned</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-pink-400">7</p>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Certificates Earned</p>
                </div>
              </div>
            </DashboardCard>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;