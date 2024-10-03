"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { FaSearch, FaBook, FaVideo, FaFileAlt, FaDownload, FaTimes } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Mock data (replace with actual API calls in a real application)
const mockResources = [
  { id: 1, title: "Introduction to Machine Learning", type: "pdf", category: "AI", size: "2.5 MB" },
  { id: 2, title: "Web Development Basics", type: "video", category: "Web", duration: "45 min" },
  { id: 3, title: "Data Structures and Algorithms", type: "article", category: "Computer Science", readTime: "10 min" },
  { id: 4, title: "Python for Data Science", type: "pdf", category: "Data Science", size: "5.1 MB" },
  { id: 5, title: "React.js Crash Course", type: "video", category: "Web", duration: "1h 20min" },
  { id: 6, title: "Cloud Computing Fundamentals", type: "article", category: "Cloud", readTime: "15 min" },
];

const ResourceCard = ({ resource, isDarkMode } : { resource: { id: number, title: string, type: string, category: string, size?: string, duration?: string, readTime?: string }, isDarkMode: boolean }) => {
  const getIcon = (type : string) => {
    switch (type) {
      case 'pdf': return <FaFileAlt className="text-red-500" />;
      case 'video': return <FaVideo className="text-blue-500" />;
      case 'article': return <FaBook className="text-green-500" />;
      default: return <FaFileAlt className="text-gray-500" />;
    }
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-4 sm:p-6 rounded-lg shadow-md flex flex-col sm:flex-row justify-between items-start sm:items-center transform hover:scale-105 transition duration-300`}>
      <div className="flex items-start sm:items-center mb-4 sm:mb-0">
        <div className="mr-6 text-3xl">{getIcon(resource.type)}</div>
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{resource.title}</h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>Category: {resource.category}</p>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} text-sm`}>
            {resource.size || resource.duration || `Read time: ${resource.readTime}`}
          </p>
        </div>
      </div>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 mt-4 sm:mt-0">
        <FaDownload />
      </button>
    </div>
  );
};

const Resources = () => {
  const { isDarkMode } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [filteredResources, setFilteredResources] = useState(mockResources);

const categories = ['All', ...Array.from(new Set(mockResources.map(resource => resource.category)))];
const types = ['All', ...Array.from(new Set(mockResources.map(resource => resource.type)))];

  useEffect(() => {
    const filtered = mockResources.filter(resource => 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedCategory === 'All' || resource.category === selectedCategory) &&
      (selectedType === 'All' || resource.type === selectedType)
    );
    setFilteredResources(filtered);
  }, [searchTerm, selectedCategory, selectedType]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('All');
    setSelectedType('All');
  };

  return (
    <>
      <Head>
        <title>EKLAVYA Resources</title>
        <meta name="description" content="Access a wide range of learning materials including PDFs, videos, and articles in our searchable and filterable resource library." />
      </Head>

      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Resources</h1>

          <div className="space-y-4 mb-8">
            <div className={`flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
              <FaSearch className={`${isDarkMode ? 'text-gray-300' : 'text-gray-500'} ml-4`} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full p-4 rounded-lg focus:outline-none ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
              />
            </div>
            <div>
              <label htmlFor="category-select" className="block mb-2 font-semibold">Filter by Category:</label>
              <select
                id="category-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className={`w-full p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md appearance-none border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="type-select" className="block mb-2 font-semibold">Filter by Type:</label>
              <select
                id="type-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className={`w-full p-4 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md appearance-none border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}
              >
                {types.map(type => (
                  <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                ))}
              </select>
            </div>
            <button
              onClick={clearFilters}
              className={`w-full p-4 rounded-lg ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition duration-300 flex items-center justify-center`}
            >
              <FaTimes className="mr-2" /> Clear Filters
            </button>
          </div>

          <div className="space-y-6">
            {filteredResources.map(resource => (
              <ResourceCard key={resource.id} resource={resource} isDarkMode={isDarkMode} />
            ))}
          </div>

          {filteredResources.length === 0 && (
            <p className={`text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mt-8`}>No resources found matching your criteria.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Resources;