import React, { useState, useEffect } from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaFacebook, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ["home", "about", "projects", "technologies", "expertise", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false);
    }
  };

  return (
    <header 
      className={`flex justify-between items-center px-6 md:px-10 py-3 fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-black/25 backdrop-blur-lg shadow-lg shadow-violet-900/10" 
          : "bg-black/10 backdrop-blur-lg"
      }`}
    >
      <h1 className="text-2xl font-semibold tracking-widest text-violet-300">SayanDas</h1>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-8 text-lg font-medium">
        {["Home", "About", "Projects", "Technologies", "Expertise", "Contact"].map((item, index) => (
          <h2
            key={index}
            className={`cursor-pointer transition duration-200 ${
              activeSection === item.toLowerCase() ? "text-violet-400 underline" : "text-violet-300 hover:text-gray-300"
            }`}
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </h2>
        ))}
      </nav>
      
      {/* Social Icons */}
      <div className="flex gap-6 items-center">
        <div className="hidden md:flex gap-6">
          {[
            { icon: FaLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/sayan-das-b99810213" },
            { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/__sdx__007/" },
            { icon: FaGithub, name: "GitHub", link: "https://github.com/sayandas2228056" },
            { icon: FaFacebook, name: "Facebook", link: "https://www.facebook.com/offcsayantubecode" },
            { 
              icon: () => <img src="https://img.icons8.com/?size=100&id=6cdjttfIiwc0&format=png&color=000000" alt="LeetCode" className="w-6 h-6 transition-transform transform hover:-translate-y-1" />, 
              name: "LeetCode", 
              link: "https://leetcode.com/u/SayanDas2228056/" 
            },
          ].map(({ icon: Icon, name, link }, index) => (
            <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="relative group text-violet-300">
              {typeof Icon === 'function' && Icon.name === undefined ? 
                <Icon /> : 
                <Icon className="hover:text-violet-600 transition-transform transform hover:scale-110" />
              }
              <span className="absolute top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {name}
              </span>
            </a>
          ))}
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-violet-300 focus:outline-none"
          >
            {menuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-black/30 backdrop-blur-lg text-white flex flex-col items-center space-y-4 py-4 transition-all duration-300 border-t border-gray-800">
          {/* Mobile Navigation Links */}
          {["Home", "About", "Projects", "Technologies", "Expertise", "Contact"].map((item, index) => (
            <h2
              key={index}
              className={`cursor-pointer transition duration-200 ${
                activeSection === item.toLowerCase() ? "text-violet-400 underline" : "hover:text-gray-300"
              }`}
              onClick={() => scrollToSection(item.toLowerCase())}
            >
              {item}
            </h2>
          ))}
          
          {/* Mobile Social Links */}
          <div className="flex justify-center gap-6 pt-4 pb-2">
            {[
              { icon: FaLinkedin, name: "LinkedIn", link: "https://www.linkedin.com/in/sayan-das-b99810213" },
              { icon: FaInstagram, name: "Instagram", link: "https://www.instagram.com/__sdx__007/" },
              { icon: FaGithub, name: "GitHub", link: "https://github.com/sayandas2228056" },
              { icon: FaFacebook, name: "Facebook", link: "https://www.facebook.com/offcsayantubecode" },
              { 
                icon: () => <img src="https://img.icons8.com/?size=100&id=6cdjttfIiwc0&format=png&color=000000" alt="LeetCode" className="w-6 h-6" />, 
                name: "LeetCode", 
                link: "https://leetcode.com/u/SayanDas2228056/" 
              },
            ].map(({ icon: Icon, name, link }, index) => (
              <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-violet-300 hover:text-violet-600 transition-transform transform hover:scale-110">
                {typeof Icon === 'function' && Icon.name === undefined ? 
                  <Icon /> : 
                  <Icon />
                }
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;