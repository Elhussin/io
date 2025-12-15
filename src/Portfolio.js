import React from "react";
import { Github, Linkedin, Mail, Code, Database, Layout, Terminal } from "lucide-react";
import { certificatesData, projectsData } from "./data";
import Projects from "./Projects";
import Certificates from "./Certificates";

const Portfolio = () => {
  return (
    <div className="min-h-screen  dark:bg-gray-900 font-sans transition-colors duration-300">
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900/20 dark:to-transparent -z-10" />
        
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium text-sm">
            Available for Hire
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Elhusseini</span>
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-8">
            Optician & <span className="text-blue-600 dark:text-blue-400">Software Developer</span>
          </p>
          
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10">
            Bridging the gap between professional optics and digital innovation. 
            With over 15 years of experience, I craft solutions that combine technical expertise with real-world application.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Elhussin"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/elhusseini2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/30"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hasin3112@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-gray-800 text-gray-700 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:scale-105 hover:shadow-md"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
              Technical Expertise
            </h2>
            <div className="w-16 h-1 bg-blue-600 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Languages */}
            <SkillCard 
              icon={<Code className="text-violet-500" size={32} />}
              title="Languages"
              skills={["Python", "JavaScript", "HTML5", "CSS3", "PHP", "C"]}
            />
            
            {/* Frameworks */}
            <SkillCard 
              icon={<Layout className="text-blue-500" size={32} />}
              title="Frameworks"
              skills={["React", "Django", "Flask", "PyQt5", "Tailwind", "Bootstrap"]}
            />
            
            {/* Database */}
            <SkillCard 
              icon={<Database className="text-emerald-500" size={32} />}
              title="Database"
              skills={["MySQL", "PostgreSQL", "SQLite", "SQL Server"]}
            />
            
            {/* Tools */}
            <SkillCard 
              icon={<Terminal className="text-amber-500" size={32} />}
              title="Tools & DevOps"
              skills={["Git", "Docker", "VS Code", "Linux", "REST APIs"]}
            />
          </div>
        </div>
      </section>

      <div id="projects">
        <Projects projects={projectsData} />
      </div>
      
      <div id="certificates">
        <Certificates certificates={certificatesData} />
      </div>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group ring-1 ring-transparent hover:ring-blue-500/10">
    <div className="mb-6 bg-gray-50 dark:bg-gray-700/50 w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span 
          key={skill} 
          className="px-3 py-1 text-sm rounded-md bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 font-medium border border-transparent hover:border-gray-200 dark:hover:border-gray-600 transition-colors"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default Portfolio;
