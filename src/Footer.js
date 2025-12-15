import React from "react";
import { Mail, Github, Linkedin, Youtube, Facebook, MessageCircle, Phone } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Elhussin",
      icon: <Github size={20} />,
      hoverColor: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/elhusseini2023/",
      icon: <Linkedin size={20} />,
      hoverColor: "hover:text-blue-600"
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@hussaintaha9184",
      icon: <Youtube size={20} />,
      hoverColor: "hover:text-red-600"
    },
    {
      name: "WhatsApp",
      href: "https://wa.me/+966540919725",
      icon: <MessageCircle size={20} />,
      hoverColor: "hover:text-green-500"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/hasin.taha/",
      icon: <Facebook size={20} />,
      hoverColor: "hover:text-blue-500"
    },
    {
      name: "Email",
      href: "mailto:hasin3112@gmail.com",
      icon: <Mail size={20} />,
      hoverColor: "hover:text-amber-500"
    }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-slate-900/50 border-t border-gray-100 dark:border-slate-800 pt-16 pb-8" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-4">
              Elhusseini.
            </h2>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
              Building digital experiences with passion and precision. Let's create something amazing together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              <li><a href="#projects" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a></li>
              <li><a href="#about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About Me</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group">
                <Mail size={16} className="text-blue-600 group-hover:scale-110 transition-transform"/>
                <a href="mailto:hasin3112@gmail.com" className="hover:text-gray-900 dark:hover:text-white transition-colors">hasin3112@gmail.com</a>
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-400 group">
                <Phone size={16} className="text-blue-600 group-hover:scale-110 transition-transform"/>
                <a href="tel:+966540919725" className="hover:text-gray-900 dark:hover:text-white transition-colors">+966 54 091 9725</a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-gray-100 dark:border-slate-700 text-gray-500 dark:text-gray-400 transition-all hover:-translate-y-1 ${link.hoverColor}`}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-slate-800 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} OsmBeta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
