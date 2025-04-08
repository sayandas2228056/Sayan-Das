import React from "react";
import { FaHeart, FaReact, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white py-10 border-t border-gray-800 mt-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6 md:gap-0">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">Sayan Das</h3>
            <p className="text-gray-400 text-sm mt-1">Full-Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-300 mb-1">
              &copy; {currentYear} All Rights Reserved
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="mx-1 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>

        {/* Built With Section */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <p className="text-sm text-gray-400 text-center mb-4">Built using:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {[
              { icon: <FaReact />, name: "React" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <SiFramer />, name: "Framer Motion" },
              { icon: <FaCode />, name: "React Icons" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center text-gray-300 hover:text-violet-400 transition duration-300"
              >
                {tech.icon}
                <span className="ml-1">{tech.name}</span>
              </div>
            ))}

            {/* OpenAI (ChatGPT) */}
            <a
              href="https://openai.com/chatgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-violet-400 transition duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI"
                className="w-5 h-5 mr-1"
              />
              <span>ChatGPT</span>
            </a>

            {/* Anthropic (Claude) */}
            <a
              href="https://www.anthropic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 hover:text-violet-400 transition duration-300"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/Anthropic_logo.svg"
                alt="Anthropic"
                className="w-5 h-5 mr-1 object-contain"
              />
              <span>Claude</span>
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>Last updated: March 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
