"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import { FaRobot, FaHeart, FaQuestionCircle, FaChevronDown, FaChevronUp, FaPaperPlane } from 'react-icons/fa';
import { useTheme } from '@/context/ThemeContext';

// Mock data (replace with actual API calls in a real application)
const mockFAQs = [
  { id: 1, question: "How do I reset my password?", answer: "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions sent to your email." },
  { id: 2, question: "Can I download course materials for offline viewing?", answer: "Yes, most course materials can be downloaded for offline viewing. Look for the download icon next to the resource you want to save." },
  { id: 3, question: "How do I join a virtual study group?", answer: "To join a virtual study group, go to the Community page, find a group you're interested in, and click the 'Join Group' button." },
];

const mockMentalHealthResources = [
  { id: 1, title: "Stress Management Techniques", link: "/resources/stress-management" },
  { id: 2, title: "Mindfulness and Meditation Guide", link: "/resources/mindfulness" },
  { id: 3, title: "Coping with Exam Anxiety", link: "/resources/exam-anxiety" },
];

// Define the type for message
type Message = {
  text: string;
  sender: 'user' | 'ai';
};

// Component for each FAQ item
const FAQItem = ({ faq, isDarkMode }: { faq: { id: number, question: string, answer: string }, isDarkMode: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} py-4`}>
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{faq.question}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <p className={`mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{faq.answer}</p>}
    </div>
  );
};

// AIChat component with the fixed TypeScript issue
const AIChat = ({ isDarkMode }: { isDarkMode: boolean }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = () => {
    if (inputMessage.trim() === '') return;

    setMessages([...messages, { text: inputMessage, sender: 'user' }]);
    setInputMessage('');

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setMessages(prevMessages => [
        ...prevMessages,
        { text: "Thank you for your question. An EKLAVYA support representative will get back to you shortly.", sender: 'ai' }
      ]);
    }, 1000);
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4 h-96 flex flex-col`}>
      <div className="flex-grow overflow-y-auto mb-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-purple-600 text-white' : (isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-800')}`}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message here..."
          className={`flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300'}`}
          onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
        />
        <button
          onClick={handleSendMessage}
          className="bg-purple-600 text-white p-2 rounded-r-lg hover:bg-purple-700 transition"
        >
          <FaPaperPlane />
        </button>
      </div>
    </div>
  );
};

// Main Support component
const Support = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>EKLAVYA Support</title>
        <meta name="description" content="Get help with AI chatbot, access mental health resources, and find answers to frequently asked questions on EKLAVYA." />
      </Head>

      <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Support Center</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaRobot className={`mr-2 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`} />
                AI Chatbot Support
              </h2>
              <AIChat isDarkMode={isDarkMode} />
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 flex items-center">
                <FaHeart className={`mr-2 ${isDarkMode ? 'text-red-400' : 'text-red-600'}`} />
                Mental Health Resources
              </h2>
              <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
                <ul className="space-y-2">
                  {mockMentalHealthResources.map(resource => (
                    <li key={resource.id}>
                      <a href={resource.link} className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-500'}`}>
                        {resource.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          <section className="mt-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center">
              <FaQuestionCircle className={`mr-2 ${isDarkMode ? 'text-green-400' : 'text-green-600'}`} />
              Frequently Asked Questions
            </h2>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md p-4`}>
              {mockFAQs.map(faq => (
                <FAQItem key={faq.id} faq={faq} isDarkMode={isDarkMode} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Support;
