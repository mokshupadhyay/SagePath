import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '../../context/ThemeContext';
import mistake from '../../public/assets/icon/wrong.png';

const NotFound = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
    }`}>
      <div className="w-3/5 relative aspect-square">
        <Image
          src={mistake}
          alt="404 Not Found"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Link 
        href="/" 
        className={`text-2xl mt-4 ${
          isDarkMode 
            ? 'text-blue-400 hover:text-blue-300' 
            : 'text-blue-600 hover:text-blue-800'
        } transition-colors duration-300`}
      >
        Go back to Home page
      </Link>
    </div>
  );
};

export default NotFound;