import { FaReact, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-12 text-white bg-black border-t border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 w-full">
        
        {/* Top Section */}
        <div className="flex flex-col gap-6 justify-between items-center text-center md:flex-row md:text-left md:gap-0">
          <div>
            <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600 sm:text-xl md:text-2xl lg:text-3xl">Sayan Das</h3>
            <p className="mt-1 text-sm text-gray-400 md:text-base lg:text-lg">Full-Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="mb-1 text-sm text-gray-400">
              &copy; {currentYear} All Rights Reserved
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made by</span>
              <span>Sayan Das</span>
            </div>
          </div>
        </div>

        {/* Built With Section */}
        <div className="pt-6 mt-8 border-t border-gray-800">
          <p className="mb-4 text-sm text-center text-gray-400">Built using:</p>
          <div className="flex flex-wrap gap-6 justify-center text-sm sm:text-base">
            {[ 
              { icon: <FaReact className="text-[#61DAFB]" />, name: "React" },
              { icon: <SiTailwindcss className="text-[#06B6D4]" />, name: "Tailwind CSS" },
              { icon: <SiFramer className="text-white" />, name: "Framer Motion" },
              { icon: <FaCode className="text-orange-500" />, name: "React Icons" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center text-gray-300 transition duration-300 hover:text-orange-500 group"
              >
                <span className="transition-transform duration-300 group-hover:scale-110">{tech.icon}</span>
                <span className="ml-2">{tech.name}</span>
              </div>
            ))}

            {/* OpenAI (ChatGPT) */}
            <a
              href="https://openai.com/chatgpt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 transition duration-300 hover:text-orange-500 group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg"
                alt="OpenAI"
                className="mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
              <span>ChatGPT</span>
            </a>

            {/* Anthropic (Claude) */}
            <a
              href="https://www.anthropic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-300 transition duration-300 hover:text-orange-500 group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/36/Anthropic_logo.svg"
                alt="Anthropic"
                className="object-contain mr-2 w-5 h-5 transition-transform duration-300 group-hover:scale-110"
              />
              <span>Claude</span>
            </a>
          </div>
        </div>

        {/* Bottom Note */}
        <div className="mt-6 text-xs text-center text-gray-500">
          <p>Last updated: June 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
