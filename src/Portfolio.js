import React from 'react';
// import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { FaYoutube, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiGithub, FiLinkedin } from "react-icons/fi";


import { Projects } from "./Projects";
import  Certificates  from "./Certificates";
const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <section className="max-w-5xl mx-auto px-4 py-20">
   <div className="text-center">
    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
      Hello, I'm Elhusseini
    </h1>
    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
      A Passionate Web Developer | Creative UI/UX Designer
    </p>
    <p className="text-lg text-gray-700 dark:text-gray-400 mb-8">
      👋 Hi, I’m @hasin3112
      👀 I’m interested in html, cs, php, javaScript, bootStrab ,React ,python
      🌱 I’m currently learning Data Anllizitin , React ,
      💞️ I’m looking to collaborate on FullSatk
      📫 How to reach me on Twiter: @Hasintaha ,Email: Hasin3112@gmail.com
      I specialize in creating efficient, scalable, and visually appealing web applications.  
      With certifications from Harvard and Shiyar Academy, I bring expertise in technologies like Python JavaScript, PHP, MySQL, HTML, CSS, and more.
    </p>
    <div className="flex justify-center gap-4">
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label="GitHub Profile"
      >
        <FiGithub className="w-6 h-6 cursor-pointer" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label="LinkedIn Profile"
      >
        <FiLinkedin className="w-6 h-6 cursor-pointer" />
      </a>
      <a
        href="mailto:email@example.com"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        aria-label="Email Me"
      >
        <FiMail className="w-6 h-6 cursor-pointer" />
      </a>
    </div>
  </div>
</section>


 
        <Projects />    {/* Use the Projects component */}
 
        <Certificates />    {/* Use the Certificates component */}

      {/* قسم المهارات */}
      <section id="skills" className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">مهاراتي</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2">Frontend</h3>
                <p className="text-gray-600">React, JavaScript, HTML, CSS</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2">Backend</h3>
                <p className="text-gray-600">Python, PHP, Django, Flask, PyQt5 </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2">Database</h3>
                <p className="text-gray-600">MySQL, SQL</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold mb-2">Tools</h3>
                <p className="text-gray-600">Git, Docker</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
