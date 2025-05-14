import React, { useState } from 'react';
import { ExternalLink, Github, Code, Monitor } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: string;
  demo: string;
  repo: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A responsive dashboard for an e-commerce platform featuring real-time analytics, order tracking, and inventory management.',
    image: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    category: 'Web App',
    demo: 'https://sage-conkies-9cedf7.netlify.app/	',
    repo: 'https://github.com/ROY8055/e-commerce-website',
  },
  {
    id: 2,
    title: 'Data Quality Checker',
    description: ' An automated system to evaluate and report on the quality of datasets, highlighting missing values, inconsistencies, and anomalies',
    image: 'https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['Python'],
    category: 'Web App',
    demo: 'https://dataqualitychecker-uy3ygqhkdgunk3trzwwkaq.streamlit.app/',
    repo: 'https://github.com/ROY8055/Data_Quality_Checker',
  },
  {
    id: 3,
    title: 'Calculator',
    description: 'A modern, responsive website for a local restaurant featuring online ordering, gallery, and table reservation system.',
    image: 'https://images.pexels.com/photos/53621/calculator-calculation-insurance-finance-53621.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
    category: 'Website',
    demo: 'https://6824b23c6dd8fd2e451b6a2a--roycalculator.netlify.app/',
    repo: 'https://github.com/ROY8055/calculator',
  },
  {
    id: 4,
    title: 'Snake Game',
    description: 'This game to create a fun and interactive experience for users, allowing them to play the classic snake game directly in their browser.',
    image: 'https://images.pexels.com/photos/63851/snake-terrarium-toxic-63851.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'python', 'CSS', 'json'],
    category: 'Web App',
    demo: 'https://lucent-crepe-86e383.netlify.app/',
    repo: 'https://github.com/ROY8055/Snake_game',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase projects, skills, and professional information.',
    image: 'https://images.pexels.com/photos/3361483/pexels-photo-3361483.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
    category: 'Website',
    demo: 'https://graceful-profiterole-a0fac9.netlify.app/',
    repo: 'https://github.com/ROY8055/My_Portfolio',
  },
  {
    id: 6,
    title: 'trip to Travel',
    description: 'A travel website that provides information about various destinations, travel tips, and booking options.',
    image: 'https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&w=600',
    technologies: ['HTML', 'CSS', 'JavaScript', 'API'],
    category: 'Web App',
    demo: 'https://glowing-palmier-0e9173.netlify.app/',
    repo: 'https://github.com/ROY8055/travel-to-world',
  },
];

const filters = ['All', 'Web App', 'Website', 'UI/UX'];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of projects that showcase my skills and experience in web development.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {filters.map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={`px-4 py-2 rounded-md transition-colors ${
                filter === item
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                  <div className="flex space-x-3 mb-2">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label="View Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label="View Repository"
                    >
                      <Github size={18} />
                    </a>
                    <button
                      onClick={() => setActiveProject(project)}
                      className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                      aria-label="View Details"
                    >
                      <Monitor size={18} />
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                  <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded text-xs font-medium">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen p-4">
              <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={() => setActiveProject(null)}></div>
              <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl transform transition-all max-w-4xl w-full">
                <div className="relative">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black transition-colors"
                    aria-label="Close"
                  >
                    &times;
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{activeProject.title}</h3>
                    <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
                      {activeProject.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{activeProject.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <a
                      href={activeProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md flex items-center gap-2 transition-colors"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={activeProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-md flex items-center gap-2 transition-colors"
                    >
                      <Github size={18} /> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;