// src/components/UserMenu.tsx
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setUser } from '../../redux/features/authSlice';
import { auth } from '../../Firebase/Firebase.config';
import { signOut } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import {
  FaUser,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaHeadset,
  FaTrophy,
} from "react-icons/fa";

interface User {
  uid: string;
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
}

interface UserMenuProps {
  user: User;
  isDarkMode: boolean;
}

const UserMenu: React.FC<UserMenuProps> = ({ user, isDarkMode }) => {
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const userMenuRef = useRef<HTMLDivElement>(null);

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

  const providerLogOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
        localStorage.removeItem('user');
        toast.success('Logged out successfully');
        setIsUserMenuOpen(false);
        router.push('/');
      })
      .catch((error) => {
        console.error('Logout error:', error);
        toast.error('Logout failed. Please try again.');
      });
  };

  return (
    <div className="relative user-menu-container" ref={userMenuRef}>
      <button
        onClick={toggleUserMenu}
        className="flex items-center focus:outline-none transition-transform duration-300 ease-in-out transform hover:scale-110"
        aria-label="Open user menu"
      >
        {isValidUrl(user.photoURL) ? (
          <Image
            src={user.photoURL || ""}
            alt={user.displayName || "User"}
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
          className={`user-menu absolute right-0 mt-4 w-64 ${isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-md overflow-hidden shadow-xl z-50`}
        >
          <div className="px-4 py-3 border-b border-gray-700">
            <p
              className={`text-sm font-medium ${isDarkMode ? "text-pink-300" : "text-pink-500"
                }`}
            >
              {user.displayName}
            </p>
            <p
              className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"
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
                className={`flex items-center px-4 py-2 text-sm ${isDarkMode
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
              onClick={providerLogOut}
              className={`flex items-center w-full px-4 py-2 text-sm text-left ${isDarkMode
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
  );
};

export default UserMenu;