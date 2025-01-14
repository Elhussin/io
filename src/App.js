

import './index.css';
import { useState,useEffect  } from "react";
import Portfolio from './Portfolio';  // Import the Portfolio component 
import  Header from "./Header";
import Footer from './Footer';
const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage on mount
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    const newMode = !isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", newMode);
    if (newMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
  
        <div className={`min-h-screen ${isDarkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <Header {...{isDarkMode, toggleDarkMode}} />

        <main className="max-w-5xl mx-auto px-4 py-8">

        <Portfolio /> 
       </main>
      <Footer />
    </div>
    
  );
};

export default App;

