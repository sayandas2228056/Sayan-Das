import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BentoTilt } from "./Features";

const techStack = [
  { icon: <RiReactjsLine className="text-6xl text-cyan-400 sm:text-7xl" />, name: "React.js", link: "https://react.dev/" },
  { icon: <SiMongodb className="text-6xl text-green-400 sm:text-7xl" />, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: <SiJavascript className="text-6xl text-yellow-400 sm:text-7xl" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <FaNodeJs className="text-6xl text-green-500 sm:text-7xl" />, name: "Node.js", link: "https://nodejs.org/" },
  { icon: <SiHtml5 className="text-6xl text-orange-500 sm:text-7xl" />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <SiCss3 className="text-6xl text-blue-500 sm:text-7xl" />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="object-contain w-16 h-16" />, name: "Python", link: "https://www.python.org/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" className="object-contain w-16 h-16" />, name: "Java", link: "https://www.java.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="object-contain w-16 h-16" />, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" className="object-contain w-16 h-16" />, name: "Bootstrap", link: "https://getbootstrap.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL" className="object-contain w-16 h-16" />, name: "MySQL", link: "https://www.mysql.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="object-contain w-16 h-16" />, name: "AWS", link: "https://aws.amazon.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" className="object-contain w-16 h-16" />, name: "Git", link: "https://git-scm.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="object-contain w-16 h-16" />, name: "GitHub", link: "https://github.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" className="object-contain w-16 h-16" />, name: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" className="object-contain w-16 h-16" />, name: "C++", link: "https://cplusplus.com/" },
  {
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
        alt="Azure"
        className="object-contain w-16 h-16"
      />
    ),
    name: "Azure",
    link: "https://azure.microsoft.com/"
  }
];

const TechCategory = ({ title, technologies }) => (
  <div className="mb-16" id="technologies">
    <h2 className="pb-2 mb-6 text-2xl font-semibold text-gray-200 border-b border-orange-600">{title}</h2>
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {technologies.map((tech, index) => (
        <div key={index} className="rounded-lg p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg bg-white/5 backdrop-blur-sm min-h-[200px]">
          <div className="mb-3 min-h-[96px] flex items-center justify-center">{tech.icon}</div>
          <p className="mb-2 font-medium text-center text-gray-300">{tech.name}</p>
          <a
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-center text-orange-600 transition-colors hover:text-orange-400"
          >
            Learn More
          </a>
        </div>
      ))}
    </div>
  </div>
);

const Technologies = () => {
  return (
    <section className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
      <div className="mx-auto">
        {/* New Heading */}
        <h1 className="text-white special-font hero-heading flex-center">
          <b>Technical </b> <b className="text-orange-600">Expertise</b>
        </h1>
        
        
        <BentoTilt>
          <TechCategory title="Frontend Development" technologies={techStack.filter(tech => ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"].includes(tech.name))} />
        </BentoTilt>
        <BentoTilt>
          <TechCategory title="Backend Development" technologies={techStack.filter(tech => ["Node.js", "Java", "Python", "C", "C++", "Kotlin"].includes(tech.name))} />
        </BentoTilt>
        <BentoTilt>
          <TechCategory title="Database Management" technologies={techStack.filter(tech => ["MongoDB", "MySQL"].includes(tech.name))} />
        </BentoTilt>
        <BentoTilt>
          <TechCategory title="DevOps & Version Control" technologies={techStack.filter(tech => ["AWS", "Git", "GitHub", "Azure"].includes(tech.name))} />
        </BentoTilt>
        
      </div>
    </section>
  );
};

export default Technologies;
