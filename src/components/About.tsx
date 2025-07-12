import React from 'react';
import { Calendar, GraduationCap, Briefcase, User } from 'lucide-react';
import Certificates from './Certificates'; // adjust the path if needed
const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <User className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Who I Am</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                I'm a Full stack python developer with a passion for creating clean, efficient, and user-friendly 
                websites. Recently graduated with a batchlor of degree in Artifical Intelligence and Mechine Learning, I specialize in using 
                modern technologies like React, TypeScript, VsCode, and Tailwind CSS to build beautiful 
                digital experiences.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>2021 - 2025</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">Artifical Intelligence and Mechine Learning</h4>
                  <p className="text-gray-600 dark:text-gray-300">JNTUGV</p>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>2019 - 2021</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">MPC</h4>
                  <p className="text-gray-600 dark:text-gray-300">Intermediate</p>
                   <div>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-1">
                    <Calendar size={16} className="mr-2" />
                    <span>2019</span>
                  </div>
                  <h4 className="font-medium text-gray-900 dark:text-white">SSC</h4>
                  <p className="text-gray-600 dark:text-gray-300">Z.P.H.School</p>
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h3>
              </div>
              <div className="space-y-4">
                <div>
                  
                  <h4 className="font-medium text-gray-900 dark:text-white">Fresher</h4>
                
                </div>
               
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative space-y-6">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">My Interests</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {['Web Design', 'UI/UX', 'Mobile Apps', 'Open Source', 'AI', 'Photography'].map((interest, index) => (
                    <div 
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800 px-4 py-2 rounded-md text-center text-gray-700 dark:text-gray-300 font-medium text-sm hover:bg-blue-50 dark:hover:bg-gray-600 transition-colors"
                    >
                      {interest}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Languages</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Telugu</span>
                      
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">Hindi</span>
                      
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300">English</span>
                    
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
<div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg mt-6">
  <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">Certificates</h3>
  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
    <li>
      <a href="https://drive.google.com/file/d/1n69ixqAzwcinodXt0qKy5QjxOXZzL7cm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Full Stack Development - HIMES (Sep 2025)
      </a>
    </li>
    <li>
      <a href="https://drive.google.com/file/d/165BMYD8rOTLySCQJwhq0BTvIoOo9R2ls/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Full Stack Web Development using python - HIMES (Sep 2025)
      </a>
    </li>
    <li>
      <a href="https://drive.google.com/file/d/1oL1Zp1gPZewMWtI5OISaAgJ4TWtGMD-I/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        Python - Cisco (Aug 2024)
      </a>
    </li>
    <li>
      <a href="https://drive.google.com/file/d/1yt3xH-X22n_qeLwLe31ZhIAsSbfRQSLD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
        JavaScript - Cisco (Aug 2024)
      </a>
    </li>
  </ul>
</div>

              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Personal Traits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { trait: 'Creative', value: 90 },
                    { trait: 'Team Player', value: 85 },
                    { trait: 'Problem Solver', value: 95 },
                    { trait: 'Detail-Oriented', value: 80 }
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-700 dark:text-gray-300">{item.trait}</span>
                        <span className="text-gray-700 dark:text-gray-300">{item.value}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                        <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: `${item.value}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
<Certificates />
export default About;