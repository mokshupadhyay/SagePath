import React from 'react';
import Link from 'next/link';
// import { menuItems } from '../constants/menuItems';
import { FaHome, FaGraduationCap, FaBook, FaTrophy, FaComments, FaHeadset } from "react-icons/fa";

interface DesktopMenuProps {
  isDarkMode: boolean;
}

const menuItems = [
  { icon: FaHome, text: "Home", href: "/" },
  { icon: FaGraduationCap, text: "Learning Paths", href: "/learning-paths" },
  { icon: FaBook, text: "Resources", href: "/resources" },
  { icon: FaTrophy, text: "Progress", href: "/progress" },
  { icon: FaComments, text: "Community", href: "/community" },
  { icon: FaHeadset, text: "Support", href: "/support" },
];

const DesktopMenu: React.FC<DesktopMenuProps> = React.memo(({ isDarkMode }) => {
  return (
    <ul className="hidden lg:flex space-x-4">
      {menuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`flex items-center ${isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-gray-900"
              }`}
          >
            <item.icon className="mr-2" size={16} />
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
});

DesktopMenu.displayName = 'DesktopMenu';

export default DesktopMenu;