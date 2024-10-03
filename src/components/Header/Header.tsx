// "use client"

// import React, { useState, useContext, useEffect, useRef } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import { AuthContext } from '../../context/AuthProvider';
// import { useTheme } from '../../context/ThemeContext';
// import banner from "../../assets/icon/banner.jpg";
// import { FaSun, FaMoon, FaUser, FaDesktop, FaChartLine, FaBookmark, FaCog, FaSignOutAlt } from 'react-icons/fa';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
//   const { isDarkMode, toggleTheme } = useTheme();
//   const authContext = useContext(AuthContext);
//   const userMenuRef = useRef<HTMLDivElement>(null);

//   if (!authContext) {
//     return <div>Loading...</div>;
//   }

//   const { user, providerLogOut } = authContext;

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleUserMenu = () => {
//     setIsUserMenuOpen(!isUserMenuOpen);
//   };

//   function isValidUrl(url) {
//     try {
//       new URL(url);
//       return true;
//     } catch (error) {
//       return false;
//     }
//   }

//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'auto';
//     }

//     return () => {
//       document.body.style.overflow = 'auto';
//     };
//   }, [isMenuOpen]);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
//         setIsUserMenuOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   const userMenuItems = [
//     { icon: FaUser, text: 'Profile', href: '/profile' },
//     { icon: FaDesktop, text: 'Dashboard', href: '/dashboard' },
//     { icon: FaChartLine, text: 'Progress', href: '/progress' },
//     { icon: FaBookmark, text: 'Support', href: '/support' },
//     { icon: FaCog, text: 'Settings', href: '/settings' },
//   ];

//   return (
//     <header className={`
//       ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}
//       shadow-md relative transition-colors duration-300
//       border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'}
//     `}>
//       <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <div className="flex items-center space-x-4">
//           <button onClick={toggleMenu} className="lg:hidden z-[100]">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke={isDarkMode ? 'white' : 'black'}>
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h8m-8 6h16"} />
//             </svg>
//           </button>

//           <Link href="/" className="text-xl font-bold z-50">
//             EkLavya
//           </Link>
//         </div>

//         {user?.uid && (
//           <ul className="hidden lg:flex space-x-4">
//             <li><Link href="/" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Home</Link></li>
//             <li><Link href="/learning-paths" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Learning Paths</Link></li>
//             <li><Link href="/resources" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Resources</Link></li>
//             <li><Link href="/progress" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Progress</Link></li>
//             <li><Link href="/community" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Community</Link></li>
//             <li><Link href="/support" className={`${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-gray-900'}`}>Support</Link></li>
//           </ul>
//         )}

//         <div className="flex items-center space-x-4 z-50">
//           <button
//             onClick={toggleTheme}
//             className={`p-2 rounded-full transition-colors duration-300 ${
//               isDarkMode
//                 ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
//                 : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//             }`}
//           >
//             {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
//           </button>

//           {user?.uid ? (
//             <div className="relative" ref={userMenuRef}>
//               <label className="btn btn-ghost btn-circle avatar">
//                 <button
//                   onClick={toggleUserMenu}
//                   className="flex items-center focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
//                 >
//                   <Image
//                     src={isValidUrl(user?.photoURL) ? user.photoURL : banner}
//                     alt={user?.displayName || 'User'}
//                     width={40}
//                     height={40}
//                     className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
//                   />
//                 </button>
//               </label>
//               {isUserMenuOpen && (
//                 <div className={`absolute right-0 mt-4 w-64 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-md overflow-hidden shadow-xl z-10`}>
//                   <div className="px-4 py-3 border-b border-gray-700">
//                     <p className={`text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{user.displayName}</p>
//                     <p className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
//                   </div>
//                   <div className="py-2">
//                     {userMenuItems.map((item, index) => (
//                       <Link
//                         key={index}
//                         href={item.href}
//                         className={`flex items-center px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                         onClick={toggleUserMenu}
//                       >
//                         <item.icon className="mr-3" size={16} />
//                         {item.text}
//                       </Link>
//                     ))}
//                   </div>
//                   <div className="border-t border-gray-700 py-2">
//                     <button
//                       onClick={() => { providerLogOut(); toggleUserMenu(); }}
//                       className={`flex items-center w-full px-4 py-2 text-sm text-left ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'}`}
//                     >
//                       <FaSignOutAlt className="mr-3" size={16} />
//                       Logout
//                     </button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <Link href="/login" className={`
//               px-4 py-2 rounded-md transition-colors duration-100
//               ${isDarkMode
//                 ? 'bg-black text-white hover:bg-gray-700'
//                 : 'bg-[#00357c] text-white hover:bg-[#002d69]'}
//             `}>
//               LOGIN
//             </Link>
//           )}
//         </div>
//       </nav>

//       {user?.uid && (
//         <div
//           className={`
//             fixed inset-0
//             ${isDarkMode ? 'bg-gray-900' : 'bg-white'}
//             z-40
//             transition-transform duration-300 ease-in-out transform
//             ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
//             lg:hidden
//           `}
//         >
//           <div className="flex flex-col h-full justify-center items-center">
//             <ul className="text-center">
//               <li className="my-4"><Link href="/" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Home</Link></li>
//               <li className="my-4"><Link href="/learning-paths" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Learning Paths</Link></li>
//               <li className="my-4"><Link href="/resources" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Resources</Link></li>
//               <li className="my-4"><Link href="/progress" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Progress</Link></li>
//               <li className="my-4"><Link href="/community" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Community</Link></li>
//               <li className="my-4"><Link href="/support" className={`text-2xl ${isDarkMode ? 'text-white hover:text-gray-300' : 'text-gray-800 hover:text-gray-600'}`} onClick={toggleMenu}>Support</Link></li>
//             </ul>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

"use client";

import React, { useState, useContext, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { AuthContext } from "../../context/AuthProvider";
import { useTheme } from "../../context/ThemeContext";
import {
  FaSun,
  FaMoon,
  FaUser,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaHeadset ,
  FaTrophy,
  FaHome,
  FaComments,
  FaGraduationCap,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const authContext = useContext(AuthContext);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  function isValidUrl(url: string | null | undefined): boolean {
    if (!url) return false;
    try {
      new URL(url);
      return true;
    } catch (error) {
      console.error("Invalid URL:", error);
      return false;
    }
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        userMenuRef.current &&
        !userMenuRef.current.contains(event.target as Node)
      ) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const userMenuItems = [
    { icon: FaUser, text: "Profile", href: "/profile" },
    { icon: FaBell, text: "Notification", href: "/notifications" },
    { icon: FaTrophy, text: "Progress", href: "/progress" },
    { icon: FaHeadset, text: "Support", href: "/support" },  
    { icon: FaCog, text: "Settings", href: "/settings" },
  ];

  if (!authContext) {
    return <div>Loading...</div>;
  }

  const mobileMenuItems = [
    { icon: FaHome, text: "Home", href: "/" },
    { icon: FaGraduationCap, text: "Learning Paths", href: "/learning-paths" },
    { icon: FaBell, text: "Resources", href: "/resources" },
    { icon: FaTrophy, text: "Progress", href: "/progress" },
    { icon: FaComments, text: "Community", href: "/community" },
    { icon: FaHeadset, text: "Support", href: "/support" },
  ];

  const { user, providerLogOut } = authContext;

  return (
    <header
      className={`
      ${isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}
      shadow-md relative transition-colors duration-300
      border-b ${isDarkMode ? "border-gray-700" : "border-gray-200"}
    `}
    >
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {user?.uid && (
            <button onClick={toggleMenu} className="lg:hidden z-[100]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke={isDarkMode ? "white" : "black"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h8m-8 6h16"
                  }
                />
              </svg>
            </button>
          )}

          <Link href="/" className="text-xl font-bold z-50">
            EkLavya
          </Link>
        </div>

        {user?.uid && (
          <ul className="hidden lg:flex space-x-4">
            <li>
              <Link
                href="/"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/learning-paths"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Learning Paths
              </Link>
            </li>
            <li>
              <Link
                href="/resources"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href="/progress"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Progress
              </Link>
            </li>
            <li>
              <Link
                href="/community"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Community
              </Link>
            </li>
            <li>
              <Link
                href="/support"
                className={`${
                  isDarkMode
                    ? "text-gray-300 hover:text-white"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                Support
              </Link>
            </li>
          </ul>
        )}

        <div className="flex items-center space-x-4 z-50">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full transition-colors duration-300 ${
              isDarkMode
                ? "bg-gray-700 text-gray-300 hover:bg-gray-600"
                : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>

          {user?.uid ? (
            <div className="relative user-menu-container" ref={userMenuRef}>
              <button
                onClick={toggleUserMenu}
                className="flex items-center focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
              >
                {isValidUrl(user?.photoURL) ? (
                  <Image
                    src={user.photoURL || ""}
                    alt={user?.displayName || "User"}
                    width={40}
                    height={40}
                    className="rounded-full transition-all duration-300 ease-in-out hover:shadow-lg"
                  />
                ) : (
                  <FaUser
                    size={30}
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-800"} rounded-full transition-all duration-300 ease-in-out hover:shadow-lg`}
                  />
                )}
              </button>
              {isUserMenuOpen && (
                <div
                  className={`user-menu absolute right-0 mt-4 w-64 ${
                    isDarkMode ? "bg-gray-800" : "bg-white"
                  } rounded-md overflow-hidden shadow-xl z-10`}
                >
                  <div className="px-4 py-3 border-b border-gray-700">
                    <p
                      className={`text-sm font-medium ${
                        isDarkMode ? "text-pink-300" : "text-pink-500"
                      }`}
                    >
                      {user.displayName}
                    </p>
                    <p
                      className={`text-xs ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {user.email}
                    </p>
                  </div>
                  <div className="py-2">
                    {userMenuItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`flex items-center px-4 py-2 text-sm ${
                          isDarkMode
                            ? "text-gray-300 hover:bg-gray-700"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                        onClick={toggleUserMenu}
                      >
                        <item.icon className="mr-3" size={16} />
                        {item.text}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-700 py-2">
                    <button
                      onClick={() => {
                        providerLogOut();
                        toggleUserMenu();
                        window.location.href = "/";
                      }}
                      className={`flex items-center w-full px-4 py-2 text-sm text-left ${
                        isDarkMode
                          ? "text-gray-300 hover:bg-gray-700"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <FaSignOutAlt className="mr-3" size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className={`
              px-4 py-2 rounded-md transition-colors duration-100
              ${
                isDarkMode
                  ? "bg-black text-white hover:bg-gray-700"
                  : "bg-[#00357c] text-white hover:bg-[#002d69]"
              }
            `}
            >
              LOGIN
            </Link>
          )}
        </div>
      </nav>

      {user?.uid && (
  <div
    className={`
      fixed inset-0 
      ${isDarkMode ? "bg-gray-900" : "bg-white"} 
      z-40 
      transition-transform duration-300 ease-in-out transform 
      ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:hidden
    `}
  >
    <div className="flex flex-col h-full justify-center items-center">
      <ul className="text-center space-y-12"> {/* Add space-y-4 for vertical spacing */}
        {mobileMenuItems.map((item, index) => (
          <li className="flex justify-center items-center" key={index}> {/* Center items */}
            <Link
              href={item.href}
              className={`flex items-center text-2xl ${
                isDarkMode
                  ? "text-white hover:text-gray-300"
                  : "text-gray-800 hover:text-gray-600"
              }`}
              onClick={toggleMenu}
            >
              <item.icon className="mr-2" size={30} />
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)}
    </header>
  );
};

export default Header;
