import React from "react";
import { FaHeart, FaReact, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-12 text-black bg-gray-100 border-t border-gray-300">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left md:gap-0">
          <div>
            <h3 className="text-lg font-semibold sm:text-xl">Sayan Das</h3>
            <p className="mt-1 text-sm text-gray-600">Full-Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="mb-1 text-sm text-gray-600">
              &copy; {currentYear} All Rights Reserved
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span>Made with</span>
              <FaHeart className="mx-1 text-red-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>

        {/* Built With Section */}
        <div className="pt-6 mt-8 border-t border-gray-300">
          <p className="mb-4 text-sm text-center text-gray-600">Built using:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm sm:text-base">
            {[ 
              { icon: <FaReact />, name: "React" },
              { icon: <SiTailwindcss />, name: "Tailwind CSS" },
              { icon: <SiFramer />, name: "Framer Motion" },
              { icon: <FaCode />, name: "React Icons" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center text-gray-700 transition duration-300 hover:text-violet-400"
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
              className="flex items-center text-gray-700 transition duration-300 hover:text-violet-400"
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
              className="flex items-center text-gray-700 transition duration-300 hover:text-violet-400"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/Anthropic_logo.svg"
                alt="Anthropic"
                className="object-contain w-5 h-5 mr-1"
              />
              <span>Claude</span>
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-xs text-center text-gray-500">
          <p>Last updated: March 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
