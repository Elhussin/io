

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

        <Portfolio />    {/* Use the Portfolio component */}
        <section id="skills" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <p>Here are some of my technical skills...</p>
        </section>

        <section id="contact" className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Contact</h2>
          <p>Feel free to reach out via email or social media.</p>
        </section>
      </main>
      <Footer />
    </div>
    
  );
};

export default App;

