import React from 'react';
import Link from 'next/link';
import { FaHome, FaGraduationCap, FaBell, FaTrophy, FaComments, FaHeadset } from "react-icons/fa";

interface DesktopMenuProps {
  isDarkMode: boolean;
}

const mobileMenuItems = [
  { icon: FaHome, text: "Home", href: "/" },
  { icon: FaGraduationCap, text: "Learning Paths", href: "/learning-paths" },
  { icon: FaBell, text: "Resources", href: "/resources" },
  { icon: FaTrophy, text: "Progress", href: "/progress" },
  { icon: FaComments, text: "Community", href: "/community" },
  { icon: FaHeadset, text: "Support", href: "/support" },
];

const DesktopMenu: React.FC<DesktopMenuProps> = ({ isDarkMode }) => {
  return (
    <ul className="hidden lg:flex space-x-4">
      {mobileMenuItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className={`${
              isDarkMode
                ? "text-gray-300 hover:text-white"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            {item.text}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;