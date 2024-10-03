'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';

interface GoogleTranslateLayout {
  SIMPLE: string;
  HORIZONTAL: string;
  VERTICAL: string;
  NONE: string;
}

interface GoogleTranslate {
  TranslateElement: {
    InlineLayout: GoogleTranslateLayout;
    new (config: {
      pageLanguage: string;
      autoDisplay: boolean;
      includedLanguages: string;
      layout: GoogleTranslateLayout[keyof GoogleTranslateLayout];
    }, elementId: string): void;
  };
}

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: GoogleTranslate;
    };
  }
}

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
];

const Footer: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  useEffect(() => {
    const addGoogleTranslateScript = () => {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    };

    window.googleTranslateElementInit = () => {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement({
          pageLanguage: 'en',
          autoDisplay: false,
          includedLanguages: languages.map(lang => lang.code).join(','),
          layout: window.google.translate.TranslateElement.InlineLayout.NONE,
        }, 'google_translate_element');
      }
    };

    if (!document.querySelector('script[src*="translate.google.com"]')) {
      addGoogleTranslateScript();
    }
  }, []);

  const changeLanguage = (languageCode: string, languageName: string) => {
    const selectBox = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectBox) {
      selectBox.value = languageCode;
      selectBox.dispatchEvent(new Event('change'));
      setSelectedLanguage(languageName);
      setIsOpen(false);
    }
  };

  return (
    <footer className={`${isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-800'} py-8 transition-colors duration-300`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">EkLavya</h3>
            <p className="text-sm">Empowering learners through innovative online education.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Home</Link></li>
              <li><Link href="/learning-paths" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Learning Paths</Link></li>
              <li><Link href="/resources" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Resources</Link></li>
              <li><Link href="/progress" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Progress</Link></li>
              <li><Link href="/community" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Community</Link></li>
              <li><Link href="/support" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Support</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`} aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`} aria-label="Twitter">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className={`hover:${isDarkMode ? 'text-white' : 'text-gray-900'}`} aria-label="LinkedIn">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Language</h3>
            <div className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-full px-4 py-2 text-left rounded-md ${
                  isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-black text-white hover:bg-gray-800'
                } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isDarkMode ? 'focus:ring-gray-500' : 'focus:ring-blue-500'
                }`}
              >
                {selectedLanguage}
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                    <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className={`absolute z-10 mt-1 w-full rounded-md shadow-lg ${
                  isDarkMode ? 'bg-gray-700' : 'bg-white'
                }`}>
                  <div className="py-1 max-h-60 overflow-auto">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code, lang.name)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          isDarkMode
                            ? 'text-gray-300 hover:bg-gray-600'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div id="google_translate_element" style={{ display: 'none' }}></div>
          </div>
        </div>
        
        <div className={`mt-8 border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} pt-4 text-sm text-center`}>
          © {new Date().getFullYear()} EkLavya. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;