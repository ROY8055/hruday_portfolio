import React, { useState } from 'react';
import { Code, Paintbrush, Database, Globe, Server, Wrench } from 'lucide-react';

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Array<{
    name: string;
    level: number;
  }>;
};

const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: <Code size={24} />,
    skills: [
      { name: 'HTML', level: 90 },
      { name: 'CSS', level: 85 },
      { name: 'JavaScript', level: 80 },
      { name: 'React', level: 75 },
      { name: 'TypeScript', level: 70 },
      { name: 'Tailwind CSS', level: 85 },
    ],
  },
  {
    name: 'Design',
    icon: <Paintbrush size={24} />,
    skills: [
      { name: 'Adobe XD', level: 75 },
      { name: 'UI/UX Design', level: 70 },
      { name: 'Responsive Design', level: 85 },
      
    ],
  },
  {
    name: 'Backend',
    icon: <Server size={24} />,
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Django', level: 75 },
     
    ],
  },
  {
    name: 'Database',
    icon: <Database size={24} />,
    skills: [
   
      { name: 'SQL Basics', level: 60 },
     
    ],
  },
  {
    name: 'Tools',
    icon: <Wrench size={24} />,
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code', level: 90 },
      { name: 'npm/yarn', level: 85 },
      { name: 'Webpack', level: 65 },
      { name: 'Chrome DevTools', level: 85 },
    ],
  },
  {
    name: 'Other',
    icon: <Globe size={24} />,
    skills: [
      { name: 'Responsive Design', level: 85 },
      { name: 'Cross-Browser Compatibility', level: 80 },
      { name: 'Web Performance', level: 75 },
      { name: 'Accessibility', level: 70 },
      { name: 'SEO Basics', level: 65 },
    ],
  },
];

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].name);
  const [isAnimated, setIsAnimated] = useState(false);

  React.useEffect(() => {
    setIsAnimated(false);
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Skills</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my technical skills and competencies as a full stack developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <ul>
                {skillCategories.map((category) => (
                  <li key={category.name}>
                    <button
                      onClick={() => setActiveCategory(category.name)}
                      className={`w-full px-6 py-4 flex items-center text-left transition-colors ${
                        activeCategory === category.name
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-4 border-blue-600 dark:border-blue-400'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50'
                      }`}
                    >
                      <span className="mr-3">{category.icon}</span>
                      <span className="font-medium">{category.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
                {skillCategories.find(c => c.name === activeCategory)?.icon}
                <span className="ml-3">{activeCategory} Skills</span>
              </h3>

              <div className="space-y-6">
                {skillCategories
                  .find(category => category.name === activeCategory)
                  ?.skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div
                          className={`bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-1000 ease-out ${
                            isAnimated ? '' : 'w-0'
                          }`}
                          style={{ width: isAnimated ? `${skill.level}%` : '0%' }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {['JavaScript', 'TypeScript', 'React', 'HTML5', 'CSS3', 'Tailwind CSS', 'Git', 'Node.js', 'Responsive Design', 'VS Code', 'npm'].map((tech, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 flex items-center justify-center text-center transform transition-transform hover:scale-105"
            >
              <span className="font-medium text-gray-700 dark:text-gray-300">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;