import React from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects = ({ projects = [] }) => {
  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-center max-w-2xl">
            A showcase of my technical journey, from web applications to desktop software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 flex flex-col h-full overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                   <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-blue-600 hover:text-white transition-colors"
                        title="View Live"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/90 rounded-full text-gray-900 hover:bg-gray-900 hover:text-white transition-colors"
                        title="View Code"
                      >
                        <Github size={18} />
                      </a>
                   </div>
                </div>
                
                <img
                  src={`${process.env.PUBLIC_URL}/images/project/${project.img}`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000"; // Fallback image
                  }}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 mb-3">
                   <span className="p-1.5 rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      <Code2 size={16} />
                   </span>
                   <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                      {project.title}
                   </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description.replace(/\*\*.+?\*\*/g, match => match.replace(/\*\*/g, ''))}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    {project.id ? `Project #${project.id}` : 'Latest Work'}
                  </span>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
                  >
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
            <a 
              href="https://github.com/Elhussin?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all shadow-sm hover:shadow-md"
            >
              <Github size={20} />
              <span>View All Repositories</span>
            </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;