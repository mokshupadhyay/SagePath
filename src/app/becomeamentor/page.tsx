import React from 'react';
import Image from 'next/image';
import { FaChalkboardTeacher, FaGraduationCap, FaDollarSign, FaGlobe } from 'react-icons/fa';
import teacherIllustration from "../../assets/icon/teacher-illustration.svg";

interface BenefitCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon: Icon, title, description }) => (
  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
    <Icon className="w-12 h-12 mb-4 text-purple-600" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function BecomeMentorPage() {
  const benefits = [
    {
      icon: FaChalkboardTeacher,
      title: "Share Your Knowledge",
      description: "Empower others by sharing your expertise and experience."
    },
    {
      icon: FaGraduationCap,
      title: "Continuous Learning",
      description: "Stay updated with the latest trends while teaching others."
    },
    {
      icon: FaDollarSign,
      title: "Earn Extra Income",
      description: "Get compensated for your time and expertise as a mentor."
    },
    {
      icon: FaGlobe,
      title: "Global Impact",
      description: "Reach and influence learners from around the world."
    }
  ];

  return (
    <main className="bg-gray-100 text-gray-800 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="hero flex flex-col lg:flex-row items-center justify-between mb-24">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Become a Mentor
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Share your expertise, inspire learners, and make a global impact with EKLAVYA. Join our community of passionate mentors today!
            </p>
          </div>
          <div className="lg:w-1/2">
            <Image 
              src={teacherIllustration} 
              alt="Teacher Illustration" 
              width={600} 
              height={400} 
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Become a Mentor?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </section>

        {/* Application Form */}
        <section className="mb-24 bg-white rounded-xl p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Apply to Become a Mentor</h2>
          <form className="max-w-2xl mx-auto">
            <div className="mb-6">
              <label htmlFor="name" className="block mb-2 font-semibold">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="expertise" className="block mb-2 font-semibold">Area of Expertise</label>
              <input
                type="text"
                id="expertise"
                name="expertise"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="experience" className="block mb-2 font-semibold">Years of Experience</label>
              <input
                type="number"
                id="experience"
                name="experience"
                required
                min="0"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="motivation" className="block mb-2 font-semibold">Why do you want to become a mentor?</label>
              <textarea
                id="motivation"
                name="motivation"
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg bg-gray-100 text-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}