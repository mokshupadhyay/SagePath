"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { FaUser, FaClock, FaBookOpen, FaStar, FaTag, FaGraduationCap } from 'react-icons/fa'
const dummyCourses = [
  {
    "id":"1",
    "name":"Complete Web Developer",
    "img":"https://i.ibb.co/yFZrr43/web-development.jpg",
    "tag":"Web Developer",
    "price":200,
    "instructor":{
      "instname":"Nicole Brown",
      "instImg":"https://i.ibb.co/PrBJkmV/Nicole-Brown.jpg"
    },
    "description":"This course is quite comprehensive when compared with other courses available on this platform that is why I bought it. It is packed full with amazing content and like the description, it did make me web developer. The instructor is a very good teacher using visual aids (not just talking) and simple illustrations to drive home a point. This course does not teach everything but the basics of everything frontend and backend. I enjoyed the course, the jokes, the projects, challenges.",
    "curriculum":["Introduction to HTML & Css","Intermediate HTML & Css","JavaScript","React.js","Node.js"],
    "enrolled":32,
    "lectures":12,
    "duration":"20 hours",
    "level":"Beginner",
    "ratings":5
  },
  {
    "id":"2",
    "name":"Graphic Design",
    "img":"https://i.ibb.co/F7Br29X/Graphic-design.png",
    "tag":"Graphic Design",
    "price":250,
    "instructor":{
      "instname":"Annette Knight",
      "instImg":"https://i.ibb.co/XSb2pqf/Annette-Knight.jpg"
    },
    "description":"The future of design is digital. This course was designed to get graphic designers up to speed on the latest and greatest digitally focused projects so they can expand their skill set and offer more services. This course is massive covering so many Design projects from social media, icon design, logo design, sketching, banner design, web design and more.",
    "curriculum":["Design Principles","Color Theory","Typography","Adobe Illustrator & Photoshop","Logo Design","GIF Animation","Social Media Design"],
    "enrolled":50,
    "lectures":20,
    "duration":"30 hours",
    "level":"Beginner",
    "ratings":5
  },
  {
    "id":"3",
    "name":"Android App Development",
    "img":"https://i.ibb.co/pwV7bS3/Android-App-Development.png",
    "tag":"App Development",
    "price":300,
    "instructor":{
      "instname":"Jenis R",
      "instImg":"https://i.ibb.co/B2B71JJ/Jenis-R.jpg"
    },
    "description":"Mobile is seen in everyone's hand now. Most of which are smartphones now. Indeed, the world has become smaller and closer to the palm of your hand. People now spend most of their time behind smartphones. And everyone big and small are using essential apps like - Pathao Food, Uber Ride, Facebook, YouTube, Netflix etc. and many more. - Mobile app development industry is the most profitable industry nowadays. The future is bright for those who want to take up app development as their career as well as a great field for those who want to pursue it as a hobby. Because a passive income can be easily generated from mobile apps. From which it is possible to make an additional income in addition to your main salary or income.",
    "curriculum":["Java Programing Basic","Android User Interface","List and Adapters","SQLite Database","Firebase Database","API","Flashlight App","Wallpaper App"],
    "enrolled":10,
    "lectures":25,
    "duration":"15 hours",
    "level":"Beginner",
    "ratings":5
  },
  {
    "id":"4",
    "name":"Be a WordPress pro",
    "img":"https://i.ibb.co/FhyK6Ww/Word-Press.jpg",
    "tag":"WordPress",
    "price":150,
    "instructor":{
      "instname":"Jenny Brown",
      "instImg":"https://i.ibb.co/NpZYGqB/Jenny-Brown.jpg"
    },
    "description":"Crocoblock is a revolutionary plugin company for WordPress that has ushered in a new chapter for WordPress today. There was a time when we were building websites on WordPress when there were not so many themes or plugins available. To create a website, you had to develop the theme yourself. Nowadays, the need to develop themes by heavy coding has been reduced to a great extent due to the many theme plugins. If you know the working of all these modules well, it is possible to create a website with custom theme and functionality without coding and your clients will be impressed with your work. NFT is another popular and top trending topic of the current era. The use of NFT is increasing day by day all over the world and people are investing in electronic currency or cryptocurrency. This course shows how you can create an NFT Marketplace with WordPress through a live project. InshaAllah you can do something good in your WordPress career by learning trending things by keeping yourself updated with time.",
    "curriculum":["Jet Elements","Jet Woo Builder","Jet Compare & Wishlist","Jet Engine","NFT Websites"],
    "enrolled":15,
    "lectures":27,
    "duration":"25 hours",
    "level":"Beginner",
    "ratings":5
  },
  {
    "id":"5",
    "name":"Master of Data Entry",
    "img":"https://i.ibb.co/SRLDh4j/Data-Entry.jpg",
    "tag":"Data Entry",
    "price":100,
    "instructor":{
      "instname":"Irene Hanson",
      "instImg":"https://i.ibb.co/482M2Xk/Irene-Hanson.jpg"
    },
    "description":"Do you want to see yourself as a skilled freelancer in no time? But not sure which skill is perfect for you? Most of the people in our country take 3 months computer training as a student. And ran after the golden deer called Job. But many people don't know that it is possible to use that basic training to freelancing and earn several times the job salary. I have shown some tasks of MS Word, MS Excel, Internet Search, Lead Generation in this course which you can learn and earn lifetime income by freelancing. And students, unemployed, employed all can earn regular good income at their convenience.",
    "curriculum":["Learn Data Entry Based on Marketplace","Mail Merge / Mailing Label","Data Scraping Using Tools","Web Research","Data Entry With Mobile","About Fiverr MarketPlace"],
    "enrolled":100,
    "lectures":30,
    "duration":"40 hours",
    "level":"Beginner",
    "ratings":5
  },
  {
    "id":"6",
    "name":"SEO Course",
    "img":"https://i.ibb.co/BLq1j8n/SEO-Course.jpg",
    "tag":"SEO",
    "price":150,
    "instructor":{
      "instname":"Stephen Stewart",
      "instImg":"https://i.ibb.co/R9482ND/Stephen-Stewart.jpg"
    },
    "description":"Search Engine Optimization - A Complete Course in Bangla! Get everything here What Is SEO, Important Factors Of SEO, Types Of SEO, Keyword Research, Steps to do, Organize KW Report, On-Page SEO, Technical SEO, OFF Page SEO, SEO Audit, Analytics, Local SEO etc. many more, InshaaAllah will add fiverr gigs in future!",
    "curriculum":["Basics Of SEO","SEO - Keyword Research","On-Page SEO","Technical SEO (What is it and its Importance in Google Ranking)","SEO Audit, Analytics & Others"],
    "enrolled":35,
    "lectures":25,
    "duration":"20 hours",
    "level":"Beginner",
    "ratings":3
  }
];

const ImageWithLoader = ({ src, alt, className }: { src: string, alt: string, className?: string }) => {
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkMode } = useTheme()

  return (
    <div className={`relative w-full pt-[56.25%] ${className} ${isLoading ? 'animate-pulse' : ''}`}>
      {isLoading && (
        <div className={`absolute inset-0 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
      )}
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}

export default function Course() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Courses</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dummyCourses.map((course) => (
            <div key={course.id} className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition duration-300`}>
              <ImageWithLoader 
                src={course.img} 
                alt={course.name} 
                className="w-full"
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{course.name}</h2>
                <p className={`mb-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{course.description.substring(0, 100)}...</p>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaClock className="mr-2" /> {course.duration}
                  </span>
                  <span className="text-green-600 font-semibold">${course.price}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaUser className="mr-2" /> {course.enrolled} students
                  </span>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaBookOpen className="mr-2" /> {course.lectures} lectures
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <Image
                    src={course.instructor.instImg}
                    alt={course.instructor.instname}
                    width={40}
                    height={40}
                    className="rounded-full mr-2"
                  />
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{course.instructor.instname}</span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaTag className="mr-2" /> {course.tag}
                  </span>
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaGraduationCap className="mr-2" /> {course.level}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} flex items-center`}>
                    <FaStar className="text-yellow-400 mr-1" /> {course.ratings}
                  </span>
                  <Link href={`/course/${course.id}`} className="inline-block bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded hover:from-blue-600 hover:to-purple-600 transition duration-300">
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}