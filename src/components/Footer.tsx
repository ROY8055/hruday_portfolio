import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-10 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 mb-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-colors transform hover:scale-110"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>

          <div className="flex space-x-6 mb-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
          </div>

          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              <a href="mailto:john.doe@example.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                hrudaykalluri19@gmail.com
              </a>
            </p>
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
              <span>Made with</span>
              <Heart size={16} className="mx-1 text-red-500 fill-red-500" />
              <span>by Hruday Kalluri © {new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;