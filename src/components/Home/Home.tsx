// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// // Import SVG files from the assets folder
// import pencilIcon from "../../assets/icon/pencil-icon.svg";
// import certificateIcon from "../../assets/icon/certificate-icon.svg";
// import coursesIcon from "../../assets/icon/cources-icon.svg";
// import graduateIcon from "../../assets/icon/gratuate-icon.svg";
// import joinImage from "../../assets/icon/join.png";
// import shareImage from "../../assets/icon/share.png";
// import StudentIllustration from "../../assets/icon/student-illustration.png";
// import './Home.css'

// // Define the structure for our card items
// type CardItem = {
//   icon: string;
//   title: string;
//   description: string;
// };

// // Card items data
// const cardItems: CardItem[] = [
//   { icon: pencilIcon, title: "10K!", description: "Online Courses" },
//   { icon: coursesIcon, title: "200+", description: "Expert Tutors" },
//   { icon: certificateIcon, title: "6K +", description: "Certified Courses" },
//   { icon: graduateIcon, title: "60K +", description: "Online Students" },
// ];

// export default function Home() {
//   return (
//     <div className="home-page">
//       <div className="hero">
//         <div className="hero-content">
//           <div className="hero-image-mobile">
//             <div className="image-container">
//               <Image
//                 src={StudentIllustration}
//                 alt="Student illustration"
//                 width={300}
//                 height={300}
//               />
//             </div>
//           </div>
//           <div className="hero-text">
//             <p className="subtitle">Learn your favourite subject</p>
//             <h1 className="title">Top & High Quality Online Courses For All</h1>
//             <p className="description">Learning is fun & education</p>
//             <Link href="/course" className="cta-button">
//               ALL COURSES
//             </Link>
//           </div>
//           <div className="hero-image-desktop">
//             <div className="image-container">
//               <Image
//                 src={StudentIllustration}
//                 alt="Student illustration"
//                 width={300}
//                 height={300}
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="card-grid">
//         {cardItems.map((item, index) => (
//           <div key={index} className="card">
//             <Image
//               src={item.icon}
//               alt={item.description}
//               width={50}
//               height={50}
//               className="card-icon"
//             />
//             <div className="card-content">
//               <h2 className="card-title">{item.title}</h2>
//               <p className="card-description">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="feature-section">
//         <div className="feature-content">
//           <h3 className="feature-subtitle">What&apos;s New</h3>
//           <h1 className="feature-title">Master the skills to drive your career</h1>
//           <p className="feature-description">
//             Get certified, master modern tech skills, and level up your career —
//             whether you&apos;re starting out or a seasoned pro. 95% of eLearning
//             learners report our hands-on content directly helped their careers.
//           </p>
//         </div>
//         <div className="feature-image">
//           <Image
//             src={joinImage}
//             alt="Master skills illustration"
//             width={500}
//             height={400}
//           />
//         </div>
//       </div>

//       <div className="feature-section reversed">
//         <div className="feature-image">
//           <Image
//             src={shareImage}
//             alt="Share knowledge illustration"
//             width={500}
//             height={400}
//           />
//         </div>
//         <div className="feature-content">
//           <h1 className="feature-title">
//             Want to share your knowledge? Join us as a Mentor
//           </h1>
//           <p className="feature-description">
//             High-definition video is video of higher resolution and quality than
//             standard-definition. While there is no standardized meaning for
//             high-definition, generally any video.
//           </p>
//           <div className="feature-list">
//             {["Best Courses", "Top rated Instructors"].map((text, index) => (
//               <div key={index} className="feature-item">
//                 <svg
//                   className="feature-icon"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     fillRule="evenodd"
//                     d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// "use client"
// import React, { useState } from 'react';
// import Link from 'next/link';
// import Head from 'next/head';
// import { FaBook, FaRobot, FaChartLine, FaUsers } from 'react-icons/fa';

// const FeatureCard = ({ icon: Icon, title, description }) => (
//   <div className="border p-4 rounded shadow-md">
//     <Icon className="w-8 h-8 mb-2 text-blue-600" />
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p>{description}</p>
//   </div>
// );

// const HomePage = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const features = [
//     {
//       icon: FaBook,
//       title: "Personalized Learning Paths",
//       description: "Tailored curricula to meet your unique goals and learning style."
//     },
//     {
//       icon: FaRobot,
//       title: "AI-Powered Assistance",
//       description: "Get instant support and personalized recommendations from EKLAVYA AI."
//     },
//     {
//       icon: FaChartLine,
//       title: "Track Your Progress",
//       description: "Visualize your learning journey with detailed analytics and insights."
//     },
//     {
//       icon: FaUsers,
//       title: "Global Learning Community",
//       description: "Connect with learners worldwide and participate in collaborative projects."
//     }
//   ];

//   return (
//     <>
//       <Head>
//         <title>EKLAVYA - Empower Your Learning Journey</title>
//         <meta name="description" content="Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className="container mx-auto px-4 py-8">
//         <h1 className="text-4xl font-bold mb-8 text-center">Welcome to EKLAVYA</h1>
        
//         {!isLoggedIn ? (
//           <div className="mb-8 text-center">
//             <h2 className="text-2xl font-semibold mb-4">Empower Your Learning Journey</h2>
//             <p className="mb-4">Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community.</p>
//             <div className="space-x-4">
//               <Link href="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Log In</Link>
//               <Link href="/register" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Sign Up</Link>
//             </div>
//           </div>
//         ) : (
//           <div className="mb-8 text-center">
//             <h2 className="text-2xl font-semibold mb-4">Welcome back!</h2>
//             <Link href="/dashboard" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Go to Dashboard</Link>
//           </div>
//         )}

//         <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//           {features.map((feature, index) => (
//             <FeatureCard key={index} {...feature} />
//           ))}
//         </section>

//         <section className="mb-8">
//           <h2 className="text-2xl font-semibold mb-4">Featured Learning Paths</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//             {/* Placeholder for featured learning paths */}
//             {[1, 2, 3].map((path) => (
//               <div key={path} className="border p-4 rounded shadow-md">
//                 <h3 className="text-lg font-semibold mb-2">Learning Path {path}</h3>
//                 <p>Description of learning path {path}.</p>
//                 <Link href={`/learning-path/${path}`} className="text-blue-600 hover:underline mt-2 inline-block">
//                   Explore Path
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section>
//           <h2 className="text-2xl font-semibold mb-4">Latest News and Updates</h2>
//           <div className="space-y-4">
//             {/* Placeholder for news and updates */}
//             {[1, 2, 3].map((news) => (
//               <div key={news} className="border p-4 rounded shadow-md">
//                 <h3 className="text-lg font-semibold mb-2">News Title {news}</h3>
//                 <p>Brief description of news item {news}.</p>
//                 <Link href={`/news/${news}`} className="text-blue-600 hover:underline mt-2 inline-block">
//                   Read More
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </section>
//       </main>
//     </>
//   );
// };

// export default HomePage;

"use client";
"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { FaBook, FaRobot, FaChartLine, FaUsers, FaGraduationCap, FaUserTie, FaSun, FaMoon } from 'react-icons/fa';

import pencilIcon from "../../assets/icon/pencil-icon.svg";
import certificateIcon from "../../assets/icon/certificate-icon.svg";
import coursesIcon from "../../assets/icon/cources-icon.svg";
import graduateIcon from "../../assets/icon/gratuate-icon.svg";
import joinImage from "../../assets/icon/join.png";
import shareImage from "../../assets/icon/share.png";
import StudentIllustration from "../../assets/icon/student-illustration.png";
import { useTheme } from '@/context/ThemeContext';

const FeatureCard = ({ icon: Icon, title, description, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300`}>
    <Icon className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
  </div>
);

const StatCard = ({ icon, title, description, isDarkMode }) => (
  <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg flex items-center space-x-4 transform hover:scale-105 transition duration-300`}>
    <Image src={icon} alt={description} width={50} height={50} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
    </div>
  </div>
);

const HomePage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isDarkMode} = useTheme();
  const features = [
    {
      icon: FaBook,
      title: "Personalized Learning",
      description: "Tailored curricula to meet your unique goals and learning style."
    },
    {
      icon: FaRobot,
      title: "AI-Powered Assistance",
      description: "Get instant support and personalized recommendations from EKLAVYA AI."
    },
    {
      icon: FaChartLine,
      title: "Progress Tracking",
      description: "Visualize your learning journey with detailed analytics and insights."
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description: "Connect with learners worldwide and participate in collaborative projects."
    }
  ];

  const stats = [
    { icon: pencilIcon, title: "10K!", description: "Online Courses" },
    { icon: coursesIcon, title: "200+", description: "Expert Tutors" },
    { icon: certificateIcon, title: "6K +", description: "Certified Courses" },
    { icon: graduateIcon, title: "60K +", description: "Online Students" },
  ];

  return (
    <>
      <Head>
        <title>EKLAVYA - Empower Your Learning Journey</title>
        <meta name="description" content="Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-16">
          {/* <div className="flex justify-end mb-8">
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full ${isDarkMode ? 'bg-yellow-400 text-gray-900' : 'bg-gray-800 text-yellow-400'}`}
            >
              {isDarkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div> */}

          <section className="hero flex flex-col lg:flex-row items-center justify-between mb-24 lg:flex-wrap">
            <div className="lg:w-1/2 mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
                Empower Your Learning Journey
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8`}>
                Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community.
              </p>
              {!isLoggedIn ? (
                <div className="space-x-4">
                  <Link href="/login" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                    Log In
                  </Link>
                  <Link href="/register" className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
                    Register
                  </Link>
                </div>
              ) : (
                <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Go to Dashboard
                </Link>
              )}
            </div>
            <div className="lg:w-1/2">
              <Image
                src={StudentIllustration}
                alt="Student illustration"
                width={600}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose EKLAVYA?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          <section className={`mb-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-12 flex flex-col lg:flex-row items-center`}>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Master the skills to drive your career</h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Get certified, master modern tech skills, and level up your career — whether you're starting out or a seasoned pro. 95% of EKLAVYA learners report our hands-on content directly helped their careers.
              </p>
              <Link href="/courses" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
                Explore Courses
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pl-12">
              <Image
                src={joinImage}
                alt="Master skills illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </section>

          <section className={`mb-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-12 flex flex-col lg:flex-row-reverse items-center`}>
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold mb-6">Share your knowledge as a Mentor</h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                Join our community of expert instructors and help shape the future of online education. Share your expertise and inspire learners worldwide.
              </p>
              <Link href="/become-mentor" className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
                Become a Mentor
              </Link>
            </div>
            <div className="lg:w-1/2 lg:pr-12">
              <Image
                src={shareImage}
                alt="Share knowledge illustration"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Learning Paths</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Web Development", icon: FaBook },
                { title: "Data Science", icon: FaChartLine },
                { title: "Mobile App Development", icon: FaRobot },
              ].map((path, index) => (
                <div key={index} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-lg`}>
                  <path.icon className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                  <h3 className="text-xl font-semibold mb-2">{path.title}</h3>
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Master the skills needed for a successful career in {path.title.toLowerCase()}.</p>
                  <Link href={`/learning-path/${index + 1}`} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'}`}>
                    Explore Path →
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;