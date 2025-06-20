import { useState, useEffect } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Work-Experience", id: "internship" },
  { name: "Projects", id: "projects" },
  { name: "Technologies", id: "technologies" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (section) {
          const rect = section.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'mx-8 border shadow-2xl backdrop-blur-md scale-105 bg-black/80 rounded-[2rem] border-white/10 clip-path-nav' 
          : 'mx-0 bg-transparent'
      }`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-3 group">
              <img
                src="/Logo.jpg"
                alt="Logo"
                className="object-cover w-10 h-10 rounded-full transition-transform duration-300 group-hover:scale-110"
              />
              <h1 className="text-2xl font-bold">
                <span className="text-orange-600">SAYAN </span>
                <span className="text-white">DAS</span>
              </h1>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-hover-btn relative ${
                  activeSection === item.id 
                    ? 'text-orange-500' 
                    : 'text-gray-300'
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500 transform origin-left transition-transform duration-300 scale-x-100" />
                )}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="hidden items-center space-x-4 md:flex">
            {[
              { icon: <FaEnvelope size={20} />, href: "mailto:offcsayantubecode@gmail.com,sayandas010124@gmail.com" },
              { icon: <FaGithub size={20} />, href: "https://github.com/sayandas2228056" },
              { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/sayan-das-b99810213/" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 transition-all duration-300 transform hover:text-orange-500 hover:scale-110 hover:rotate-3"
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-300 transition-transform duration-300 hover:text-orange-500 focus:outline-none hover:scale-110">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .clip-path-nav {
          clip-path: polygon(
            2% 0%,
            98% 0%,
            100% 50%,
            98% 100%,
            2% 100%,
            0% 50%
          );
        }
      `}</style>
    </nav>
  );
};

export default Navbar;