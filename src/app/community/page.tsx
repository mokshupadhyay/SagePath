"use client";
import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { FaComments, FaUsers, FaVideo, FaSearch, FaPlus } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';
// Mock data (replace with actual API calls in a real application)
const mockForums = [
  { id: 1, title: "Python Programming", posts: 156, lastActive: "2 hours ago" },
  { id: 2, title: "Web Development", posts: 203, lastActive: "5 minutes ago" },
  { id: 3, title: "Data Science", posts: 89, lastActive: "1 day ago" },
];

const mockStudyGroups = [
  { id: 1, title: "JavaScript Study Group", members: 15, nextMeeting: "Tomorrow, 3 PM" },
  { id: 2, title: "Machine Learning Enthusiasts", members: 23, nextMeeting: "Friday, 6 PM" },
];

const mockLiveClasses = [
  { id: 1, title: "Introduction to React Hooks", instructor: "Jane Doe", startTime: "Today, 7 PM" },
  { id: 2, title: "Advanced SQL Techniques", instructor: "John Smith", startTime: "Tomorrow, 2 PM" },
];

const ForumCard = ({ forum, isDarkMode }: { forum: { id: number, title: string, posts: number, lastActive: string }, isDarkMode: boolean }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300`}>
    <h3 className="text-xl font-semibold mb-2">{forum.title}</h3>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Posts: {forum.posts}</p>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Last active: {forum.lastActive}</p>
    <Link href={`/forum/${forum.id}`} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} mt-2 inline-block font-semibold`}>
      Join Discussion →
    </Link>
  </div>
);

const StudyGroupCard = ({ group, isDarkMode }: { group: { id: number, title: string, members: number, nextMeeting: string }, isDarkMode: boolean }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300`}>
    <h3 className="text-xl font-semibold mb-2">{group.title}</h3>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Members: {group.members}</p>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Next meeting: {group.nextMeeting}</p>
    <Link href={`/study-group/${group.id}`} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} mt-2 inline-block font-semibold`}>
      Join Group →
    </Link>
  </div>
);

const LiveClassCard = ({ liveClass, isDarkMode }: { liveClass: { id: number, title: string, instructor: string, startTime: string }, isDarkMode: boolean }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-md transform hover:scale-105 transition duration-300`}>
    <h3 className="text-xl font-semibold mb-2">{liveClass.title}</h3>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Instructor: {liveClass.instructor}</p>
    <p className={isDarkMode ? 'text-gray-300' : 'text-gray-600'}>Starts: {liveClass.startTime}</p>
    <Link href={`/live-class/${liveClass.id}`} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'} mt-2 inline-block font-semibold`}>
      Join Class →
    </Link>
  </div>
);

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredForums, setFilteredForums] = useState(mockForums);
  const [filteredStudyGroups, setFilteredStudyGroups] = useState(mockStudyGroups);
  const { isDarkMode } = useTheme();
  const [filteredLiveClasses, setFilteredLiveClasses] = useState(mockLiveClasses);

  useEffect(() => {
    setFilteredForums(mockForums.filter(forum =>
      forum.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setFilteredStudyGroups(mockStudyGroups.filter(group =>
      group.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
    setFilteredLiveClasses(mockLiveClasses.filter(liveClass =>
      liveClass.title.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm]);

  return (
    <>
      <Head>
        <title>Sage Path Community</title>
        <meta name="description" content="Join discussion forums, virtual study groups, and live classes in the Sage Path learning community." />
      </Head>

      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">

          <div className={`mb-8 flex items-center ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
            <FaSearch className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'} ml-4`} />
            <input
              type="text"
              placeholder="Search community..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full p-4 rounded-lg focus:outline-none ${isDarkMode
                ? 'bg-gray-800 text-white placeholder-gray-400'
                : 'bg-white text-gray-800 placeholder-gray-500'
                }`}
            />
          </div>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold flex items-center">
                <FaComments className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                Discussion Forums
              </h2>
              <Link href="/create-forum" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:from-purple-600 hover:to-pink-600 transition duration-300">
                <FaPlus className="mr-2" /> Create Forum
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredForums.map(forum => (
                <ForumCard key={forum.id} forum={forum} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section className="mb-12">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold flex items-center">
                <FaUsers className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                Virtual Study Groups
              </h2>
              <Link href="/create-study-group" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:from-purple-600 hover:to-pink-600 transition duration-300">
                <FaPlus className="mr-2" /> Create Study Group
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredStudyGroups.map(group => (
                <StudyGroupCard key={group.id} group={group} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold flex items-center">
                <FaVideo className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                Live Classes
              </h2>
              <Link href="/create-live-class" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full flex items-center hover:from-purple-600 hover:to-pink-600 transition duration-300">
                <FaPlus className="mr-2" /> Create Live Class
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLiveClasses.map(liveClass => (
                <LiveClassCard key={liveClass.id} liveClass={liveClass} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Community;