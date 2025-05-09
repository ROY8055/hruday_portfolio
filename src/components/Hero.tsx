import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Twitter } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white">
                <span className="inline-block">Hi, I'm </span>
                <span className="text-blue-600 dark:text-blue-400 inline-block">Hruday Kalluri</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
                Full satck python Developer
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0">
                A passionate full stack python developer crafting beautiful and functional web experiences.
                Fresh graduate with a strong foundation in modern technologies and design principles.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all transform hover:scale-105 shadow-md"
              >
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-600 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-gray-700 transition-all transform hover:scale-105 shadow-md flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-start space-x-6">
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
          </div>
          
          <div className="relative h-80 sm:h-96 lg:h-auto">
            <div className="relative h-full w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative h-full w-full bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-700">
                <img 
                  src="https://hrudaykalluri19.wordpress.com/wp-content/uploads/2025/04/1713800923765.jpg?w=683" 
                  alt="Professional portrait" 
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden sm:block">
          <a 
            href="#about" 
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-md animate-bounce"
            aria-label="Scroll down"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;