
import React from 'react';
import Link from 'next/link';
import { FaHome, FaGraduationCap, FaTrophy, FaComments, FaHeadset, FaBook } from "react-icons/fa";
// import { menuItems } from '../constants/menuItems';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
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
const MobileMenu: React.FC<MobileMenuProps> = React.memo(({ isOpen, toggleMenu, isDarkMode }) => {
  return (
    <div
      className={`
        fixed inset-0 
        ${isDarkMode ? "bg-gray-900" : "bg-white"} 
        z-40 
        transition-transform duration-300 ease-in-out transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:hidden
      `}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <ul className="text-center space-y-8">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`flex items-center text-xl ${isDarkMode
                    ? "text-white hover:text-gray-300"
                    : "text-gray-800 hover:text-gray-600"
                  }`}
                onClick={toggleMenu}
              >
                <item.icon className="mr-2" size={24} />
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
});

MobileMenu.displayName = 'MobileMenu';

export default MobileMenu;