import React from "react";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaYoutube, FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          تواصل معي
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="mailto:email@example.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiMail className="w-8 h-8" />
            <span className="text-sm">Email</span>
          </a>
          <a
            href="https://github.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiGithub className="w-8 h-8" />
            <span className="text-sm">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FiLinkedin className="w-8 h-8" />
            <span className="text-sm">LinkedIn</span>
          </a>
          <a
            href="https://youtube.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaYoutube className="w-8 h-8" />
            <span className="text-sm">YouTube</span>
          </a>
          <a
            href="https://wa.me/1234567890"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaWhatsapp className="w-8 h-8" />
            <span className="text-sm">WhatsApp</span>
          </a>
          <a
            href="https://facebook.com"
            className="flex flex-col items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
          >
            <FaFacebook className="w-8 h-8" />
            <span className="text-sm">Facebook</span>
          </a>
          <a
            href="https://tiktok.com"
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
