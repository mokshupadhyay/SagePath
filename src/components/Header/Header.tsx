"use client"

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AuthContext } from '../../context/AuthProvider';
import { useTheme } from '../../context/ThemeContext';
import banner from "../../assets/icon/banner.jpg";
import { FaSun, FaMoon } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const { user, providerLogOut } = authContext;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <header className={`
      ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
      shadow-md relative transition-colors duration-300
      border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
    `}>
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Menu Icon */}
          <button onClick={toggleMenu} className="lg:hidden z-50">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"} />
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="text-xl font-bold z-50">
            EkLavya
          </Link>
        </div>

        {/* Desktop menu */}
        <ul className="hidden lg:flex space-x-4">
          <li><Link href="/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link></li>
          <li><Link href="/learning-paths" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Learning Paths</Link></li>
          <li><Link href="/resources" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Resources</Link></li>
          <li><Link href="/progress" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Progress</Link></li>
          <li><Link href="/community" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Community</Link></li>
          <li><Link href="/support" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Support</Link></li>
        </ul>

        <div className="flex items-center space-x-4 z-50">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode 
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
            }`}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {/* Login button or User menu */}
          {user?.uid ? (
            <div className="relative">
              <label className="btn btn-ghost btn-circle avatar">
                <button 
                  onClick={toggleUserMenu} 
                  className="flex items-center focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
                >
                  <Image
                    src={banner}
                    alt={user.displayName || 'User'}
                    width={40}
                    height={40}
                    className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
                  />
                </button>
              </label>
              {isUserMenuOpen && (
                <div className={`absolute right-0 mt-4 w-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-md overflow-hidden shadow-xl z-10`}>
                  <div className="px-4 py-2">
                    <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.displayName}</p>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
                  </div>
                  <button
                    onClick={() => { providerLogOut(); toggleUserMenu(); }}
                    className={`block w-full px-4 py-2 text-sm text-left ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link href="/login" className={`
              px-4 py-2 rounded-md transition-colors duration-100
              ${isDarkMode
                ? 'bg-black text-white hover:bg-gray-700'
                : 'bg-[#00357c] text-white hover:bg-[#002d69]'}
            `}>
              LOGIN
            </Link>
          )}
        </div>
      </nav>

      {/* Full-screen Mobile menu */}
      <div 
  className={`
    fixed inset-0 
    ${isDarkMode ? 'bg-gray-900' : 'bg-white'} 
    z-50 
    transition-transform duration-300 ease-in-out transform 
    ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
    lg:hidden
  `}
>
  <div className="flex flex-col h-full justify-center items-center">
    <ul className="text-center">
      <li className="my-4"><Link href="/" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Home</Link></li>
      <li className="my-4"><Link href="/learning-paths" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Learning Paths</Link></li>
      <li className="my-4"><Link href="/resources" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Resources</Link></li>
      <li className="my-4"><Link href="/progress" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Progress</Link></li>
      <li className="my-4"><Link href="/community" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Community</Link></li>
      <li className="my-4"><Link href="/support" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Support</Link></li>
    </ul>
  </div>
</div>
    </header>
  );
};

export default Header;