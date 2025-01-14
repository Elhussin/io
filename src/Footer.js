import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4" id="contact">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Contact Me
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:hasin3112@gmail.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiMail className="w-8 h-8" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://github.com/Elhussin"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiGithub className="w-8 h-8" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/elhusseini2023/"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiLinkedin className="w-8 h-8" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://www.youtube.com/@hussaintaha9184"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaYoutube className="w-8 h-8" />
            <span className="text-sm">YouTube</span>
          </a>
          <a
            href="https://wa.me/+966540919725"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaWhatsapp className="w-8 h-8" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://www.facebook.com/hasin.taha/"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaFacebook className="w-8 h-8" />
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href="https://www.tiktok.com/"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaTiktok className="w-8 h-8" />
            <span className="text-sm">TikTok</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
