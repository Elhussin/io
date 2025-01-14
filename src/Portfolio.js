import React from "react";
// import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { FaYoutube, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { certificatesData, projectsData } from "./data";

import Projects from "./Projects";
import Certificates from "./Certificates";
console.log(2, projectsData);
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            <p>Elhusseini | Optician | Developer </p>
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
            I am an experienced optician and software developer with over 15
            years of expertise. My journey spans professional optics, Islamic
            Studies, and software development. I am passionate about creating
            solutions that combine technical innovation with practical
            application.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/Elhussin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="GitHub Profile"
            >
              <FiGithub className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/elhusseini2023/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="LinkedIn Profile"
            >
              <FiLinkedin className="w-6 h-6 cursor-pointer" />
            </a>
            <a
              href="mailto:hasin3112@gmail.com"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              aria-label="Email Me"
            >
              <FiMail className="w-6 h-6 cursor-pointer" />
            </a>
          </div>
        </div>
      </section>
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Programming Languages
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Python, JavaScript, HTML, CSS, PHP, C
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Frameworks
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Django, Flask, PyQt5, React, Bootstrap
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Database
              </h3>
              <p className="text-gray-600 dark:text-gray-400">MySQL, SQL</p>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Tools
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Git, Docker</p>
            </div>
          </div>
        </div>
      </section>
      <Projects projects={projectsData} />
      <Certificates certificates={certificatesData} />
    </div>
  );
};

export default Portfolio;
