

import { useState,useEffect  } from "react";

const Header = ({isDarkMode,toggleDarkMode}) => {

  return (

    <header className="shadow-sm">
    <nav className="max-w-5xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Elhusseini </h1>
        <div className="flex gap-4 items-center">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <button
            onClick={toggleDarkMode}
            className={`px-3 py-1 rounded ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-800"}`}
          >
          {isDarkMode ? "Light Mode" : "Dark Mode"}

          </button>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Header;
