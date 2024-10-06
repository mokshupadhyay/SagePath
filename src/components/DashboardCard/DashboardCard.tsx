"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { useTheme } from '@/context/ThemeContext';
import { FaBook, FaChartLine, FaTasks, FaBell, FaGraduationCap, FaClock, FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';

// Define the structure of the current course and user properties
interface Course {
  id: string;
  title: string;
}

interface User {
  displayName: string;
  currentCourse?: Course;  // Ensure currentCourse is optional
  progress?: number;
  recommendations?: Array<{ id: string; title: string }>;
  upcomingTasks?: Array<{ id: string; title: string; dueDate: string }>;
  recentActivities?: Array<{ id: string; title: string; time: string }>;
  coursesCompleted?: number;
  averageScore?: number;
  hoursLearned?: number;
  certificatesEarned?: number;
}

interface DashboardCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

// The reusable DashboardCard component
const DashboardCard: React.FC<DashboardCardProps> = ({ icon: Icon, title, children }) => {
  const { isDarkMode } = useTheme();
  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'} rounded-lg shadow-md p-4`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-lg flex items-center">
          <Icon className="mr-2" />
          {title}
        </h3>
      </div>
      <div>{children}</div>
    </div>
  );
};

// The main Dashboard component
const Dashboard: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { user, initialized } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = initialized && user !== null;

  if (!initialized) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className={`${isDarkMode ? 'bg-red-800 text-white' : 'bg-red-100 text-red-800'} p-4 rounded-md`}>
          <h2 className="font-bold mb-2">Authentication Required</h2>
          <p>Please log in to view your dashboard.</p>
        </div>
      </div>
    );
  }

  const {
    displayName,
    currentCourse,  // Optional access to currentCourse
    progress = 0,  // Set default value to avoid errors
    recommendations = [],  // Provide default empty arrays for recommendations
    upcomingTasks = [],    // Provide default empty array for tasks
    recentActivities = [],
    coursesCompleted = 0,
    averageScore = 0,
    hoursLearned = 0,
    certificatesEarned = 0
  } = user as User;  // Ensure user conforms to the User interface

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Welcome back, {displayName}!</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Current Course Section */}
          <DashboardCard icon={FaBook} title="Current Course">
            {currentCourse ? (
              <>
                <h4 className="text-xl font-semibold mb-2">{currentCourse.title}</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <p className="text-sm mb-4">{progress}% Complete</p>
                <Link href={`/course/${currentCourse.id}`} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full flex items-center justify-center">
                  Continue Learning
                  <FaChevronRight className="ml-2" />
                </Link>
              </>
            ) : (
              <p>No current course available.</p>
            )}
          </DashboardCard>

          {/* Recommendations Section */}
          <DashboardCard icon={FaChartLine} title="Recommendations">
            <ul className="space-y-2">
              {recommendations.map((rec) => (
                <li key={rec.id} className="flex items-center">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">New</span>
                  <Link href={`/course/${rec.id}`} className="hover:underline">{rec.title}</Link>
                </li>
              ))}
            </ul>
          </DashboardCard>

          {/* Upcoming Tasks Section */}
          <DashboardCard icon={FaTasks} title="Upcoming Tasks">
            <ul className="space-y-2">
              {upcomingTasks.map((task) => (
                <li key={task.id} className="flex justify-between items-center">
                  <span>{task.title}</span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </li>
              ))}
            </ul>
          </DashboardCard>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Activity Section */}
          <DashboardCard icon={FaBell} title="Recent Activity">
            <ul className="space-y-4">
              {recentActivities.map((activity) => (
                <li key={activity.id} className="flex items-start">
                  <FaClock className="mt-1 mr-2 text-blue-500" />
                  <div>
                    <p>{activity.title}</p>
                    <p className="text-sm text-gray-500">{new Date(activity.time).toLocaleString()}</p>
                  </div>
                </li>
              ))}
            </ul>
          </DashboardCard>

          {/* Learning Stats Section */}
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
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
