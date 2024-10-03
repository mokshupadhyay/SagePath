"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaGraduationCap, FaRobot, FaSearch,FaClock, FaChartLine } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
// Mock data (replace with actual API calls in a real application)
const mockLearningPaths = [
    { id: 1, title: "Web Development Fundamentals", duration: "8 weeks", difficulty: "Beginner" },
    { id: 2, title: "Data Science Essentials", duration: "12 weeks", difficulty: "Intermediate" },
    { id: 3, title: "Mobile App Development with React Native", duration: "10 weeks", difficulty: "Intermediate" },
    { id: 4, title: "Machine Learning Foundations", duration: "16 weeks", difficulty: "Advanced" },
    { id: 5, title: "Cloud Computing and DevOps", duration: "14 weeks", difficulty: "Intermediate" },
];

const mockRecommendedPaths = [
    { id: 6, title: "Advanced JavaScript Concepts", duration: "6 weeks", difficulty: "Advanced" },
    { id: 7, title: "UI/UX Design Principles", duration: "8 weeks", difficulty: "Intermediate" },
];

const PathCard = ({ path, isDarkMode } : { path: { id: number, title: string, duration: string, difficulty: string }, isDarkMode: boolean }) => (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300`}>
    <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-2 flex items-center`}>
      <FaClock className="mr-2" /> Duration: {path.duration}
    </p>
    <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 flex items-center`}>
      <FaChartLine className="mr-2" /> Difficulty: {path.difficulty}
    </p>
    <Link 
      href={`/learning-path/${path.id}`} 
      className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} font-semibold`}
      >
      View Path Details →
    </Link>
  </div>
);

const LearningPaths = () => {
    const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPaths, setFilteredPaths] = useState(mockLearningPaths);

  useEffect(() => {
    const filtered = mockLearningPaths.filter(path => 
      path.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPaths(filtered);
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>EKLAVYA Learning Paths</title>
        <meta name="description" content="Explore curated learning paths and discover AI-recommended courses tailored to your goals and progress." />
      </Head>

      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Learning Paths</h1>
          </div>

          <div className="mb-8">
            <div className={`flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
              <FaSearch className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} ml-4`} />
              <input
                type="text"
                placeholder="Search learning paths..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full p-4 rounded-lg focus:outline-none ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              />
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaRobot className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              AI-Recommended Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockRecommendedPaths.map(path => (
                <PathCard key={path.id} path={path} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaGraduationCap className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
              All Learning Paths
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPaths.map(path => (
                <PathCard key={path.id} path={path} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          {filteredPaths.length === 0 && (
            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-8`}>No learning paths found matching your search.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default LearningPaths;