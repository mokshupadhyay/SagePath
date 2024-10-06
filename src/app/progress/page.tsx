"use client";
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGraduationCap, FaClock, FaTrophy, FaBook, FaChartLine, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Extended mock data
const mockUserProgress = {
  name: "John Doe",
  overallProgress: 68,
  totalCourses: 10,
  completedCourses: 4,
  totalHoursLearned: 120,
  achievements: 15,
  currentCourses: [
    { id: 1, title: "Advanced Machine Learning", progress: 75 },
    { id: 2, title: "Web Development with React", progress: 40 },
    { id: 3, title: "Data Structures and Algorithms", progress: 60 },
  ],
  recentCompletions: [
    { id: 4, title: "Introduction to Python Programming" },
    { id: 5, title: "Database Management Systems" },
  ],
  weeklyProgress: [
    { week: 'Week 1', hours: 10 },
    { week: 'Week 2', hours: 15 },
    { week: 'Week 3', hours: 8 },
    { week: 'Week 4', hours: 20 },
  ],
  skillDistribution: [
    { name: 'Programming', value: 30 },
    { name: 'Data Science', value: 25 },
    { name: 'Web Development', value: 20 },
    { name: 'Machine Learning', value: 15 },
    { name: 'DevOps', value: 10 },
  ],
  completionRate: [
    { course: 'Course 1', completed: 100, remaining: 0 },
    { course: 'Course 2', completed: 75, remaining: 25 },
    { course: 'Course 3', completed: 50, remaining: 50 },
    { course: 'Course 4', completed: 25, remaining: 75 },
    { course: 'Course 5', completed: 0, remaining: 100 },
  ],
  streak: 14,
  nextMilestone: {
    title: "Complete 5 Courses",
    progress: 80,
  },
};

const ProgressCard = ({ icon: Icon, title, value, suffix = '', isDarkMode } : { icon: React.ElementType, title: string, value: number, suffix?: string, isDarkMode: boolean }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md flex items-center transform hover:scale-105 transition duration-300`}>
    <Icon className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} text-3xl mr-4`} />
    <div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-bold">{value}{suffix}</p>
    </div>
  </div>
);



const ProgressPage = () => {
  const { isDarkMode } = useTheme();
  const {
    overallProgress,
    totalCourses,
    completedCourses,
    totalHoursLearned,
    achievements,
    recentCompletions,
    streak,
    nextMilestone,
  } = mockUserProgress;

  return (
    <>
      <Head>
        <title>Your Learning Progress - EKLAVYA</title>
        <meta name="description" content="Track your learning journey and see your progress on EKLAVYA." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Your Learning Progress</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <ProgressCard icon={FaChartLine} title="Overall Progress" value={overallProgress} suffix="%" isDarkMode={isDarkMode} />
            <ProgressCard icon={FaBook} title="Total Courses" value={totalCourses} isDarkMode={isDarkMode} />
            <ProgressCard icon={FaGraduationCap} title="Completed Courses" value={completedCourses} isDarkMode={isDarkMode} />
            <ProgressCard icon={FaClock} title="Total Hours Learned" value={totalHoursLearned} isDarkMode={isDarkMode} />
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Recent Completions</h2>
              <ul className="space-y-2">
                {recentCompletions.map((course) => (
                  <li key={course.id} className="flex items-center">
                    <FaCheckCircle className="text-green-500 mr-2" />
                    <span>{course.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Achievements</h2>
              <div className="flex items-center mb-4">
                <FaTrophy className="text-yellow-500 text-3xl mr-4" />
                <p className="text-2xl font-bold">{achievements} Unlocked</p>
              </div>
              <Link href="/achievements" className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} inline-block`}>
                View All Achievements →
              </Link>
            </div>

            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md`}>
              <h2 className="text-xl font-semibold mb-4">Learning Streak</h2>
              <div className="flex items-center mb-4">
                <FaCalendarAlt className="text-blue-500 text-3xl mr-4" />
                <p className="text-2xl font-bold">{streak} Days</p>
              </div>
              <p>Keep up the great work!</p>
            </div>
          </div>

          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-md mb-8`}>
            <h2 className="text-xl font-semibold mb-4">Next Milestone</h2>
            <p className="mb-2">{nextMilestone.title}</p>
            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2.5`}>
              <div
                className="bg-gradient-to-r from-purple-500 to-pink-500 h-2.5 rounded-full"
                style={{ width: `${nextMilestone.progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm">{nextMilestone.progress}% progress</p>
          </div>

          <div className="text-center">
            <Link href="/learning-paths" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition duration-300">
              Explore More Courses
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProgressPage;