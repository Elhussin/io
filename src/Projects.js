import { datiles } from "./data";
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';



export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white mb-12 text-center">
          My Projects
        </h2>
        <p>Here are some of my recent projects...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
          {datiles.data.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/project/${project.img}` || "/api/placeholder/300/200"}
                alt={project.title}
                className="w-full h-48 object-cover"
              />`         `
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex gap-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <ExternalLink className="w-5 h-5 cursor-pointer" />
                  </a>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    title="Github"
                  >
                    <Github className="w-5 h-5 cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
