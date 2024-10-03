// pages/settings.js
"use client";
import { useState } from 'react';
import { useTheme } from '../../context/ThemeContext'; // Assuming you have a ThemeContext for dark mode

export default function Settings() {
  const { isDarkMode } = useTheme(); // Get the dark mode state from context
  const [accessibility, setAccessibility] = useState({
    screenReader: false,
    highContrast: false,
    brailleSupport: false,
  });
  const [language, setLanguage] = useState('en');
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  // Handle form submissions for settings updates
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Call an API or use localStorage to persist user settings
    console.log('Settings Updated:', { accessibility, language, notifications });
  };

  return (
    <div className={`settings-container ${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-800'} min-h-screen py-8`}>
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">User Settings</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Accessibility Settings */}
          <section className="p-4 rounded-md shadow-md bg-gray-200 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-4">Accessibility</h2>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={accessibility.screenReader}
                onChange={() =>
                  setAccessibility((prev) => ({
                    ...prev,
                    screenReader: !prev.screenReader,
                  }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              Enable Screen Reader
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={accessibility.highContrast}
                onChange={() =>
                  setAccessibility((prev) => ({
                    ...prev,
                    highContrast: !prev.highContrast,
                  }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              Enable High Contrast Mode
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={accessibility.brailleSupport}
                onChange={() =>
                  setAccessibility((prev) => ({
                    ...prev,
                    brailleSupport: !prev.brailleSupport,
                  }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              Enable Braille Display Support
            </label>
          </section>

          {/* Language Preferences */}
          <section className="p-4 rounded-md shadow-md bg-gray-200 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-4">Language Preferences</h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className={`block w-full px-4 py-2 rounded-md border ${isDarkMode ? 'bg-gray-600 text-gray-300' : 'bg-white text-gray-800'} focus:ring-2 focus:ring-blue-500`}
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
              <option value="hi">Hindi</option>
            </select>
          </section>

          {/* Notification Settings */}
          <section className="p-4 rounded-md shadow-md bg-gray-200 dark:bg-gray-700">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={notifications.email}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, email: !prev.email }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              Email Notifications
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={notifications.sms}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, sms: !prev.sms }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              SMS Notifications
            </label>
            <label className="flex items-center mb-2">
              <input
                type="checkbox"
                checked={notifications.push}
                onChange={() =>
                  setNotifications((prev) => ({ ...prev, push: !prev.push }))
                }
                className={`mr-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}
              />
              Push Notifications
            </label>
          </section>

          {/* Save Settings Button */}
          <button
            type="submit"
            className={`mt-4 w-full px-4 py-2 rounded-md ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-blue-500 hover:bg-blue-600 text-white'} transition-colors`}
          >
            Save Settings
          </button>
        </form>
      </div>
    </div>
  );
}
