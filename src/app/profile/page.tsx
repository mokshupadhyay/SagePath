"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaUser, FaAccessibleIcon, FaLanguage, FaEye } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface ProfileSectionProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
  isDarkMode: boolean;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ icon: Icon, title, children, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md mb-6`}>
    <div className="flex items-center mb-4">
      <Icon className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'} text-2xl mr-2`} />
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

const Profile: React.FC = () => {
  const { isDarkMode } = useTheme();
  const { user, initialized } = useSelector((state: RootState) => state.auth);
  const isLoggedIn = initialized && user !== null;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState('medium');
  const [language, setLanguage] = useState('english');
  const [isParentView, setIsParentView] = useState(false);

  useEffect(() => {
    if (isLoggedIn && user) {
      setName(user.displayName || '');
      setEmail(user.email || '');
      // You might want to fetch additional user preferences here
      // or store them in the auth state if they're available
    }
  }, [isLoggedIn, user]);

  const handleSaveSettings = () => {
    // Implement API call to save user settings
    console.log('Saving settings:', { name, email, isHighContrast, fontSize, language, isParentView });
    // You might want to dispatch an action here to update the user's preferences in the Redux store
  };

  if (!initialized) {
    return <div>Loading...</div>;
  }

  if (!isLoggedIn) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <>
      <Head>
        <title>Your EKLAVYA Profile</title>
        <meta name="description" content="Manage your EKLAVYA profile, accessibility preferences, and account settings." />
      </Head>

      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Your Profile</h1>
          </div>

          <ProfileSection icon={FaUser} title="Account Settings" isDarkMode={isDarkMode}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                />
              </div>
            </div>
          </ProfileSection>

          <ProfileSection icon={FaAccessibleIcon} title="Accessibility Preferences" isDarkMode={isDarkMode}>
            <div className="space-y-4">
              <div>
                <label htmlFor="highContrast" className="flex items-center">
                  <input
                    type="checkbox"
                    id="highContrast"
                    checked={isHighContrast}
                    onChange={(e) => setIsHighContrast(e.target.checked)}
                    className="mr-2"
                  />
                  High Contrast Mode
                </label>
              </div>
              <div>
                <label htmlFor="fontSize" className="block mb-1">Font Size</label>
                <select
                  id="fontSize"
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                </select>
              </div>
            </div>
          </ProfileSection>

          <ProfileSection icon={FaLanguage} title="Language Settings" isDarkMode={isDarkMode}>
            <div>
              <label htmlFor="language" className="block mb-1">Preferred Language</label>
              <select
                id="language"
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className={`w-full p-2 border rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-800'}`}
              >
                <option value="english">English</option>
                <option value="spanish">Spanish</option>
                <option value="french">French</option>
                <option value="german">German</option>
                <option value="chinese">Chinese</option>
              </select>
            </div>
          </ProfileSection>

          <ProfileSection icon={FaEye} title="Parent View" isDarkMode={isDarkMode}>
            <div>
              <label htmlFor="parentView" className="flex items-center">
                <input
                  type="checkbox"
                  id="parentView"
                  checked={isParentView}
                  onChange={(e) => setIsParentView(e.target.checked)}
                  className="mr-2"
                />
                Enable Parent View
              </label>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mt-2`}>
                Parent view allows monitoring of your child&apos;s progress and activity.
              </p>
            </div>
          </ProfileSection>

          <button
            onClick={handleSaveSettings}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            Save Settings
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;