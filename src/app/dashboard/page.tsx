"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useTheme } from '@/context/ThemeContext';
import { FaBook, FaChartLine, FaTasks, FaBell, FaGraduationCap, FaChevronRight, FaTrophy, FaUserGraduate, FaChalkboardTeacher, FaComments } from 'react-icons/fa';
import Link from 'next/link';

interface DashboardCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title, children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-xl`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-xl flex items-center">
          <Icon className="mr-3 text-blue-500" />
          {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { user, initialized } = useSelector((state: RootState) => state.auth);
  const [showAllRecommendations, setShowAllRecommendations] = useState(false);

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return (
      <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} flex items-center justify-center`}>
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Please Log In</h1>
          <p className="mb-8">You need to be logged in to view your dashboard.</p>
          <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-full text-lg transition-colors duration-300">
            Log In
          </Link>
        </div>
      </div>
    );
  }

  const {
    displayName,
    currentCourse,
    progress,
    recommendations,
    upcomingTasks,
    recentActivities,
    coursesCompleted,
    averageScore,
    hoursLearned,
    certificatesEarned,
    quizzesCompleted,
    forumPosts,
    mentorSessions,
    nextLiveSession,
  } = {
    ...user,
    currentCourse: {
      id: 1,
      title: 'Advanced React and Redux',
      instructor: 'Jane Smith',
      nextLesson: 'Redux Middleware',
    },
    progress: 75,
    recommendations: [
      { id: 1, title: 'Mastering JavaScript', difficulty: 'Intermediate' },
      { id: 2, title: 'Next.js Deep Dive', difficulty: 'Advanced' },
      { id: 3, title: 'GraphQL with Apollo', difficulty: 'Intermediate' },
      { id: 4, title: 'Web Performance Optimization', difficulty: 'Advanced' },
      { id: 5, title: 'TypeScript for Beginners', difficulty: 'Beginner' },
    ],
    upcomingTasks: [
      { id: 1, title: 'Complete Module 5', dueDate: '2024-10-15', type: 'module' },
      { id: 2, title: 'React Performance Quiz', dueDate: '2024-10-10', type: 'quiz' },
      { id: 3, title: 'Submit Final Project', dueDate: '2024-10-20', type: 'project' },
      { id: 4, title: 'Practice Redux Patterns', dueDate: '2024-10-25', type: 'practice' },
      { id: 5, title: 'Review TypeScript Lesson', dueDate: '2024-10-30', type: 'review' },
    ],
    recentActivities: [
      { id: 1, title: 'Completed Redux Module', time: '2024-10-05 14:32:00', type: 'completion' },
      { id: 2, title: 'Scored 95% in JavaScript Quiz', time: '2024-10-03 12:15:00', type: 'quiz' },
      { id: 3, title: 'Started GraphQL Course', time: '2024-10-02 09:22:00', type: 'start' },
      { id: 4, title: 'Completed TypeScript Basics', time: '2024-09-30 16:05:00', type: 'completion' },
    ],
    coursesCompleted: 12,
    averageScore: 89,
    hoursLearned: 56,
    certificatesEarned: 7,
    quizzesCompleted: 25,
    forumPosts: 38,
    mentorSessions: 5,
    nextLiveSession: {
      title: 'Q&A: React Hooks Deep Dive',
      date: '2024-10-12 18:00:00',
      instructor: 'Alex Johnson',
    },
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Welcome back, {displayName}!</h1>
          <Link href="/profile" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full text-lg transition-colors duration-300">
            View Profile
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Course */}
          <DashboardCard icon={FaBook} title="Current Course">
            <h4 className="text-xl font-semibold mb-2">{currentCourse.title}</h4>
            <p className="text-sm mb-2">Instructor: {currentCourse.instructor}</p>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-sm mb-4">{progress}% Complete</p>
            <p className="text-sm mb-4">Next Lesson: {currentCourse.nextLesson}</p>
            <Link href={`/course/${currentCourse.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300">
              Continue Learning
              <FaChevronRight className="ml-2" />
            </Link>
          </DashboardCard>

          {/* Recommendations */}
          <DashboardCard icon={FaChartLine} title="Recommendations">
            <ul className="space-y-2">
              {recommendations.slice(0, showAllRecommendations ? undefined : 3).map((rec) => (
                <li key={rec.id} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className={`bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}>
                      {rec.difficulty}
                    </span>
                    <Link href={`/course/${rec.id}`} className="hover:underline">{rec.title}</Link>
                  </div>
                  <FaChevronRight className="text-gray-400" />
                </li>
              ))}
            </ul>
            {recommendations.length > 3 && (
              <button
                onClick={() => setShowAllRecommendations(!showAllRecommendations)}
                className="mt-4 text-blue-500 hover:underline"
              >
                {showAllRecommendations ? 'Show Less' : 'Show More'}
              </button>
            )}
          </DashboardCard>

          {/* Upcoming Tasks */}
          <DashboardCard icon={FaTasks} title="Upcoming Tasks">
            <ul className="space-y-2">
              {upcomingTasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center">
                  <span className="flex items-center">
                    {task.type === 'module' && <FaBook className="mr-2 text-green-500" />}
                    {task.type === 'quiz' && <FaGraduationCap className="mr-2 text-blue-500" />}
                    {task.type === 'project' && <FaUserGraduate className="mr-2 text-purple-500" />}
                    {task.type === 'practice' && <FaChalkboardTeacher className="mr-2 text-yellow-500" />}
                    {task.type === 'review' && <FaComments className="mr-2 text-red-500" />}
                    {task.title}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Recent Activity */}
          <DashboardCard icon={FaBell} title="Recent Activity">
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  {activity.type === 'completion' && <FaTrophy className="mt-1 mr-2 text-yellow-500" />}
                  {activity.type === 'quiz' && <FaGraduationCap className="mt-1 mr-2 text-blue-500" />}
                  {activity.type === 'start' && <FaBook className="mt-1 mr-2 text-green-500" />}
                  <div>
                    <p>{activity.title}</p>
                    <p className="text-sm text-gray-500">{new Date(activity.time).toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </DashboardCard>

          {/* Learning Stats */}
          <DashboardCard icon={FaGraduationCap} title="Learning Stats">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-500">{coursesCompleted}</p>
                <p className="text-sm">Courses Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-green-500">{averageScore}%</p>
                <p className="text-sm">Average Score</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500">{hoursLearned}</p>
                <p className="text-sm">Hours Learned</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-purple-500">{certificatesEarned}</p>
                <p className="text-sm">Certificates Earned</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-red-500">{quizzesCompleted}</p>
                <p className="text-sm">Quizzes Completed</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-indigo-500">{forumPosts}</p>
                <p className="text-sm">Forum Posts</p>
              </div>
            </div>
          </DashboardCard>
        </div>

        {/* Additional Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Mentor Sessions */}
          <DashboardCard icon={FaChalkboardTeacher} title="Mentor Sessions">
            <p className="text-2xl font-bold text-center mb-4">{mentorSessions}</p>
            <p className="text-center mb-4">Completed Mentor Sessions</p>
            <Link href="/book-mentor" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300">
              Book a Mentor Session
              <FaChevronRight className="ml-2" />
            </Link>
          </DashboardCard>

          {/* Next Live Session */}
          <DashboardCard icon={FaComments} title="Next Live Session">
            <h4 className="text-xl font-semibold mb-2">{nextLiveSession.title}</h4>
            <p className="text-sm mb-2">Instructor: {nextLiveSession.instructor}</p>
            <p className="text-sm mb-4">Date: {new Date(nextLiveSession.date).toLocaleString()}</p>
            <Link href="/live-sessions" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-full flex items-center justify-center transition-colors duration-300">
              Join Session
              <FaChevronRight className="ml-2" />
            </Link>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;