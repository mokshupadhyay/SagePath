"use client";

import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import { useTheme } from '../../context/ThemeContext';
import { FaBell, FaCheckCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';

interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning';
  message: string;
  timestamp: Date;
}

const NotificationPage: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const { isDarkMode } = useTheme();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const fetchNotifications = async () => {
      const mockNotifications: Notification[] = [
        { id: '1', type: 'info', message: 'New course "Advanced Machine Learning" added to your learning path', timestamp: new Date() },
        { id: '2', type: 'success', message: 'Congratulations! You completed the Python basics course', timestamp: new Date(Date.now() - 86400000) },
        { id: '3', type: 'warning', message: 'Upcoming deadline: Submit your final project in 3 days', timestamp: new Date(Date.now() - 172800000) },
        { id: '4', type: 'info', message: 'New webinar on "AI Ethics" scheduled for next week', timestamp: new Date(Date.now() - 259200000) },
        { id: '5', type: 'success', message: 'You have earned a badge for completing 5 courses!', timestamp: new Date(Date.now() - 345600000) },
        { id: '6', type: 'info', message: 'Recommended course: "Introduction to Cybersecurity"', timestamp: new Date(Date.now() - 518400000) },
        { id: '7', type: 'warning', message: 'Your subscription will expire in 10 days', timestamp: new Date(Date.now() - 864000000) },
        { id: '8', type: 'success', message: 'Your peer-graded assignment has been reviewed', timestamp: new Date(Date.now() - 1728000000) },
      ];
      setNotifications(mockNotifications);
    };

    fetchNotifications();
  }, []);

  if (!authContext || !authContext.user) {
    return <div>Please log in to view notifications.</div>;
  }

  const groupNotifications = () => {
    const today = new Date();
    const thisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
    
    return {
      today: notifications.filter(n => n.timestamp >= today),
      thisWeek: notifications.filter(n => n.timestamp >= thisWeek && n.timestamp < today),
      older: notifications.filter(n => n.timestamp < thisWeek)
    };
  };

  const { today, thisWeek, older } = groupNotifications();

  const renderNotifications = (notifs: Notification[], title: string) => (
    <div className="mb-8">
      <h2 className={`text-xl font-semibold mb-4 ${isDarkMode ? 'text-gray-200' : 'text-gray-700'}`}>{title}</h2>
      <ul className="space-y-3">
        {notifs.map((notif) => (
          <li 
            key={notif.id} 
            className={`p-4 rounded-lg ${
              isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-gray-50'
            } ${
              notif.type === 'info' 
                ? 'border-l-4 border-blue-500' 
                : notif.type === 'warning'
                  ? 'border-l-4 border-yellow-500'
                  : 'border-l-4 border-green-500'
            } transition-colors duration-200 shadow-sm`}
          >
            <div className="flex items-start">
              {notif.type === 'info' && <FaInfoCircle className="text-blue-500 mr-3 mt-1 flex-shrink-0" />}
              {notif.type === 'success' && <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />}
              {notif.type === 'warning' && <FaExclamationCircle className="text-yellow-500 mr-3 mt-1 flex-shrink-0" />}
              <div>
                <p className={`${isDarkMode ? 'text-gray-200' : 'text-gray-800'} font-medium`}>{notif.message}</p>
                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-1`}>
                  {notif.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 flex items-center">
          <FaBell className="mr-3" /> Notifications
        </h1>
        {notifications.length === 0 ? (
          <p>No notifications at this time.</p>
        ) : (
          <div>
            {today.length > 0 && renderNotifications(today, "Today")}
            {thisWeek.length > 0 && renderNotifications(thisWeek, "This Week")}
            {older.length > 0 && renderNotifications(older, "Older Notifications")}
          </div>
        )}
      </div>
    </div>
  );
};

export default NotificationPage;