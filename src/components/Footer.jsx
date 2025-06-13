import { FaHeart, FaReact, FaCode } from "react-icons/fa";
import { SiTailwindcss, SiFramer } from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 mt-12 text-white bg-black border-t border-gray-800">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left md:gap-0">
          <div>
            <h3 className="text-lg font-semibold text-transparent sm:text-xl bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text">Sayan Das</h3>
            <p className="mt-1 text-sm text-gray-400">Full-Stack Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <p className="mb-1 text-sm text-gray-400">
              &copy; {currentYear} All Rights Reserved
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span>Made with</span>
              <FaHeart className="mx-1 text-orange-500 animate-pulse" />
              <span>in India</span>
            </div>
          </div>
        </div>

        {/* Built With Section */}
        <div className="pt-6 mt-8 border-t border-gray-800">
          <p className="mb-4 text-sm text-center text-gray-400">Built using:</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm sm:text-base">
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
                className="w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
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
                className="object-contain w-5 h-5 mr-2 transition-transform duration-300 group-hover:scale-110"
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
