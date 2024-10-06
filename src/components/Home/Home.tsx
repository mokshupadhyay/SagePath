// "use client";
// import React, { useState, useEffect, useContext } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import Head from 'next/head';
// import { FaBook, FaRobot, FaChartLine, FaUsers, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { useTheme } from '@/context/ThemeContext';
// import { AuthContext } from "../../context/AuthProvider";

// import pencilIcon from "../../assets/icon/pencil-icon.svg";
// import certificateIcon from "../../assets/icon/certificate-icon.svg";
// import coursesIcon from "../../assets/icon/cources-icon.svg";
// import graduateIcon from "../../assets/icon/gratuate-icon.svg";
// import joinImage from "../../assets/icon/join.png";
// import shareImage from "../../assets/icon/share.png";
// import StudentIllustration from "../../assets/icon/student-illustration.png";
// import StudentIllustration1 from "../../assets/icon/student-illustration1.svg";
// import StudentIllustration2 from "../../assets/icon/student-illustration2.jpg";
// import StudentIllustration3 from "../../assets/icon/student-illustration3.png";
// import CustomCarousel from '../CustomCarousel/CustomCarousel';

// const carouselData = [
//   {
//     image: StudentIllustration,
//     alt: "Student studying online",
//     text: "Empower your learning journey with EKLAVYA's personalized courses."
//   },
//   {
//     image: StudentIllustration1,
//     alt: "Student engaged in online lesson",
//     text: "Experience interactive lessons tailored to your learning style and pace."
//   },
//   {
//     image: StudentIllustration2,
//     alt: "Student celebrating achievement",
//     text: "Track your progress and celebrate milestones with EKLAVYA's analytics."
//   },
//   {
//     image: StudentIllustration3,
//     alt: "Student collaborating online",
//     text: "Connect with a global community of learners and expand your horizons."
//   },
// ];

// interface FeatureCardProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
//   isDarkMode: boolean;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, isDarkMode }) => (
//   <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300`}>
//     <Icon className={`w-12 h-12 mb-4 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
//     <h3 className="text-xl font-semibold mb-2">{title}</h3>
//     <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
//   </div>
// );

// interface StatCardProps {
//   icon: string;
//   title: string;
//   description: string;
//   isDarkMode: boolean;
// }

// const StatCard: React.FC<StatCardProps> = ({ icon, title, description, isDarkMode }) => (
//   <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} p-6 rounded-lg shadow-lg flex items-center space-x-4 transform hover:scale-105 transition duration-300`}>
//     <Image src={icon} alt={description} width={50} height={50} className={isDarkMode ? 'text-purple-400' : 'text-purple-600'} />
//     <div>
//       <h2 className="text-2xl font-bold">{title}</h2>
//       <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>{description}</p>
//     </div>
//   </div>
// );

// const HomePage: React.FC = () => {
//   const authContext = useContext(AuthContext);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const { isDarkMode } = useTheme();
//   const [name, setName] = useState("");
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     if (authContext && authContext.user) {
//       setIsLoggedIn(true);
//       setName(authContext.user.displayName || '');
//     } else {
//       setIsLoggedIn(false);
//     }
//   }, [authContext]);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carouselData.length);
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex - 1 + carouselData.length) % carouselData.length);
//   };

//   useEffect(() => {
//     const timer = setInterval(nextImage, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const features = [
//     {
//       icon: FaBook,
//       title: "Personalized Learning",
//       description: "Tailored curricula to meet your unique goals and learning style."
//     },
//     {
//       icon: FaRobot,
//       title: "AI-Powered Assistance",
//       description: "Get instant support and personalized recommendations from EKLAVYA AI."
//     },
//     {
//       icon: FaChartLine,
//       title: "Progress Tracking",
//       description: "Visualize your learning journey with detailed analytics and insights."
//     },
//     {
//       icon: FaUsers,
//       title: "Global Community",
//       description: "Connect with learners worldwide and participate in collaborative projects."
//     }
//   ];

//   const stats = [
//     { icon: pencilIcon, title: "10K!", description: "Online Courses" },
//     { icon: coursesIcon, title: "200+", description: "Expert Tutors" },
//     { icon: certificateIcon, title: "6K +", description: "Certified Courses" },
//     { icon: graduateIcon, title: "60K +", description: "Online Students" },
//   ];

//   return (
//     <>
//       <Head>
//         <title>EKLAVYA - Empower Your Learning Journey</title>
//         <meta name="description" content="Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community." />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
//         <div className="container mx-auto px-4 py-8 md:py-16">
//           {/* Hero Section */}
//           <section className="hero flex flex-col md:flex-row items-center justify-between mb-12 md:mb-24">
//             <div className="w-full md:w-1/2 mb-8 md:mb-0">
//               <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
//                 {isLoggedIn ? (
//                   <>
//                     Welcome back,{" "}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                       {name}
//                     </span>
//                     !
//                   </>
//                 ) : (
//                   <>
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
//                       Empower Your
//                     </span>
//                     <br />
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
//                       Learning Journey
//                     </span>
//                   </>
//                 )}
//               </h1>
//               <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                 {carouselData[currentImageIndex].text}
//               </p>
//               {!isLoggedIn ? (
//                 <div className="space-x-4">
//                   <Link href="/login" className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
//                     Log In
//                   </Link>
//                   <Link href="/register" className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
//                     Register
//                   </Link>
//                 </div>
//               ) : (
//                 <Link href="/dashboard" className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
//                   Go to Dashboard
//                 </Link>
//               )}
//             </div>
//             <div className="w-full md:w-1/2 relative">
//               <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] border border-gray-300 rounded-lg">
//                 {carouselData.map((item, index) => (
//                   <Image
//                     key={index}
//                     src={item.image}
//                     alt={item.alt}
//                     layout="fill"
//                     objectFit="cover"
//                     className={`rounded-lg transition-opacity duration-500 ${
//                       index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                     }`}
//                   />
//                 ))}
//               </div>
//               <button
//                 onClick={prevImage}
//                 className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-0 p-2 rounded-full z-10"
//                 aria-label="Previous image"
//               >
//                 <FaChevronLeft size={24} />
//               </button>
//               <button
//                 onClick={nextImage}
//                 className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-0 p-2 rounded-full z-10"
//                 aria-label="Next image"
//               >
//                 <FaChevronRight size={24} />
//               </button>
//               <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//                 {carouselData.map((_, index) => (
//                   <div
//                     key={index}
//                     className={`w-3 h-3 rounded-full ${index === currentImageIndex ? 'bg-purple-600' : 'bg-gray-400'}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Features Section */}
//           <section className="mb-12 md:mb-24">
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Why Choose EKLAVYA?</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//               {features.map((feature, index) => (
//                 <FeatureCard key={index} {...feature} isDarkMode={isDarkMode} />
//               ))}
//             </div>
//           </section>

//           {/* Stats Section */}
//           <section className="mb-12 md:mb-24">
//             <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Our Impact</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
//               {stats.map((stat, index) => (
//                 <StatCard key={index} {...stat} isDarkMode={isDarkMode} />
//               ))}
//             </div>
//           </section>

//           {/* Additional Sections */}
//           <section className={`mb-12 md:mb-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 md:p-12 flex flex-col lg:flex-row items-center`}>
//             <div className="lg:w-1/2 mb-6 lg:mb-0">
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Master the skills to drive your career</h2>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                 Get certified, master modern tech skills, and level up your career — whether you're starting out or a seasoned pro. 95% of EKLAVYA learners report our hands-on content directly helped their careers.
//               </p>
//               <Link href="/course" className="inline-block bg-purple-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
//                 Explore Courses
//               </Link>
//             </div>
//             <div className="lg:w-1/2 lg:pl-12">
//               <Image
//                 src={joinImage}
//                 alt="Master skills illustration"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </section>

//           <section className={`mb-12 md:mb-24 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 md:p-12 flex flex-col lg:flex-row-reverse items-center`}>
//             <div className="lg:w-1/2 mb-6 lg:mb-0">
//               <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">Share your knowledge as a Mentor</h2>
//               <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
//                 Join our community of expert instructors and help shape the future of online education. Share your expertise and inspire learners worldwide.
//               </p>
//               <Link href="/becomeamentor" className="inline-block bg-pink-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300">
//                 Become a Mentor
//               </Link>
//             </div>
//             <div className="lg:w-1/2 lg:pr-12">
//               <Image
//                 src={shareImage}
//                 alt="Share knowledge illustration"
//                 width={500}
//                 height={400}
//                 className="rounded-lg shadow-xl"
//               />
//             </div>
//           </section>
//         </div>
//       </main>
//     </>
//   );
// };

// export default HomePage;
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { FaBook, FaRobot, FaChartLine, FaUsers } from "react-icons/fa";
import { useTheme } from "@/context/ThemeContext";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import pencilIcon from "../../assets/icon/pencil-icon.svg";
import certificateIcon from "../../assets/icon/certificate-icon.svg";
import coursesIcon from "../../assets/icon/cources-icon.svg";
import graduateIcon from "../../assets/icon/gratuate-icon.svg";
import joinImage from "../../assets/icon/join.png";
import shareImage from "../../assets/icon/share.png";
import StudentIllustration from "../../assets/icon/student-illustration.png";
import StudentIllustration1 from "../../assets/icon/student-illustration1.svg";
import StudentIllustration2 from "../../assets/icon/student-illustration2.jpg";
import StudentIllustration3 from "../../assets/icon/student-illustration3.png";
import CustomCarousel from "../CustomCarousel/CustomCarousel";

const carouselData = [
  {
    image: StudentIllustration,
    alt: "Student studying online",
    text: "Empower your learning journey with EKLAVYA's personalized courses.",
  },
  {
    image: StudentIllustration1,
    alt: "Student engaged in online lesson",
    text: "Experience interactive lessons tailored to your learning style and pace.",
  },
  {
    image: StudentIllustration2,
    alt: "Student celebrating achievement",
    text: "Track your progress and celebrate milestones with EKLAVYA's analytics.",
  },
  {
    image: StudentIllustration3,
    alt: "Student collaborating online",
    text: "Connect with a global community of learners and expand your horizons.",
  },
];

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  isDarkMode: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  description,
  isDarkMode,
}) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    } p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300`}
  >
    <Icon
      className={`w-12 h-12 mb-4 ${
        isDarkMode ? "text-purple-400" : "text-purple-600"
      }`}
    />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
      {description}
    </p>
  </div>
);

interface StatCardProps {
  icon: string;
  title: string;
  description: string;
  isDarkMode: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  title,
  description,
  isDarkMode,
}) => (
  <div
    className={`${
      isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
    } p-6 rounded-lg shadow-lg flex items-center space-x-4 transform hover:scale-105 transition duration-300`}
  >
    <Image
      src={icon}
      alt={description}
      width={50}
      height={50}
      className={isDarkMode ? "text-purple-400" : "text-purple-600"}
    />
    <div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
        {description}
      </p>
    </div>
  </div>
);

const HomePage: React.FC = () => {
  const { user, initialized } = useSelector((state: RootState) => state.auth);
  const { isDarkMode } = useTheme();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isLoggedIn = initialized && user !== null;
  const name = user?.displayName || "";

  const features = [
    {
      icon: FaBook,
      title: "Personalized Learning",
      description:
        "Tailored curricula to meet your unique goals and learning style.",
    },
    {
      icon: FaRobot,
      title: "AI-Powered Assistance",
      description:
        "Get instant support and personalized recommendations from EKLAVYA AI.",
    },
    {
      icon: FaChartLine,
      title: "Progress Tracking",
      description:
        "Visualize your learning journey with detailed analytics and insights.",
    },
    {
      icon: FaUsers,
      title: "Global Community",
      description:
        "Connect with learners worldwide and participate in collaborative projects.",
    },
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
        <meta
          name="description"
          content="Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className={`${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        } min-h-screen transition-colors duration-300 `}
      >
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <section className="hero flex flex-col md:flex-row items-center justify-between mb-12 md:h-screen">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                {isLoggedIn ? (
                  <>
                    Welcome back,{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      {name}
                    </span>
                    !
                  </>
                ) : (
                  <>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                      Empower Your
                    </span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-400">
                      Learning Journey
                    </span>
                  </>
                )}
              </h1>
              <p
                className={`text-sm md:text-lg lg:text-xl xl:text-2xl ${
                  isDarkMode ? "text-white" : "text-black"
                } mb-6`}
              >
                {isLoggedIn
                  ? `Explore new courses and track your progress, ${name}!`
                  : "Join EKLAVYA to access personalized learning paths, AI-powered recommendations, and a supportive global community."}
              </p>
              <p
                className={`text-sm md:text-lg lg:text-xl xl:text-2xl ${
                  isDarkMode ? "text-gray-100" : "text-gray-600"
                } mb-6`}
              >
                {carouselData[currentImageIndex].text}
              </p>

              {!isLoggedIn ? (
                <div className="space-x-4">
                  <Link
                    href="/login"
                    className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
                  >
                    Log In
                  </Link>
                  <Link
                    href="/register"
                    className="bg-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300"
                  >
                    Register
                  </Link>
                </div>
              ) : (
                <Link
                  href="/dashboard"
                  className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
                >
                  Go to Dashboard
                </Link>
              )}
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] shadow-2xl rounded-lg">
                <CustomCarousel
                  images={carouselData.map((item) => ({
                    src: item.image.src,
                    alt: item.alt,
                  }))}
                  onSlideChange={(index) => setCurrentImageIndex(index)}
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-12 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
              Why Choose EKLAVYA?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-12 md:mb-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>

          {/* Additional Sections */}
          <section
            className={`mb-12 md:mb-24 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl p-6 md:p-12 flex flex-col lg:flex-row items-center`}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Master the skills to drive your career
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-6`}
              >
                Get certified, master modern tech skills, and level up your
                career — whether you&apos;re starting out or a seasoned pro. 95%
                of EKLAVYA learners report our hands-on content directly helped
                their careers.
              </p>

              <Link
                href="/course"
                className="inline-block bg-purple-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
              >
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

          <section
            className={`mb-12 md:mb-24 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            } rounded-xl p-6 md:p-12 flex flex-col lg:flex-row-reverse items-center`}
          >
            <div className="lg:w-1/2 mb-6 lg:mb-0">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
                Share your knowledge as a Mentor
              </h2>
              <p
                className={`${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                } mb-6`}
              >
                Join our community of expert instructors and help shape the
                future of online education. Share your expertise and inspire
                learners worldwide.
              </p>
              <Link
                href="/becomeamentor"
                className="inline-block bg-pink-600 text-white px-6 md:px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300"
              >
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
        </div>
      </main>
    </>
  );
};

export default HomePage;
