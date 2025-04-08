import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const techStack = [
  { icon: <RiReactjsLine className="text-6xl sm:text-7xl text-cyan-400" />, name: "React.js", link: "https://react.dev/" },
  { icon: <SiMongodb className="text-6xl sm:text-7xl text-green-400" />, name: "MongoDB", link: "https://www.mongodb.com/" },
  { icon: <SiJavascript className="text-6xl sm:text-7xl text-yellow-400" />, name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { icon: <FaNodeJs className="text-6xl sm:text-7xl text-green-500" />, name: "Node.js", link: "https://nodejs.org/" },
  { icon: <SiHtml5 className="text-6xl sm:text-7xl text-orange-500" />, name: "HTML5", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { icon: <SiCss3 className="text-6xl sm:text-7xl text-blue-500" />, name: "CSS3", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" className="w-16 h-16 object-contain" />, name: "Python", link: "https://www.python.org/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" alt="Java" className="w-16 h-16 object-contain" />, name: "Java", link: "https://www.java.com/" },
  {  icon: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" alt="Tailwind CSS" className="w-16 h-16 object-contain" />, name: "Tailwind CSS", link: "https://tailwindcss.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg" alt="Bootstrap" className="w-16 h-16 object-contain" />, name: "Bootstrap", link: "https://getbootstrap.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/MySQL_textlogo.svg" alt="MySQL" className="w-16 h-16 object-contain" />, name: "MySQL", link: "https://www.mysql.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" className="w-16 h-16 object-contain" />, name: "AWS", link: "https://aws.amazon.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" alt="Git" className="w-16 h-16 object-contain" />, name: "Git", link: "https://git-scm.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" className="w-16 h-16 object-contain" />, name: "GitHub", link: "https://github.com/" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" className="w-16 h-16 object-contain" />, name: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
  { icon: <img src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C++" className="w-16 h-16 object-contain" />, name: "C++", link: "https://cplusplus.com/" },
];

const TechCategory = ({ title, technologies }) => (
  <div className="mb-16">
    <h2 className="text-2xl font-semibold text-gray-200 mb-6 border-b border-violet-900 pb-2">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {technologies.map((tech, index) => (
        <div key={index} className="rounded-lg p-4 flex flex-col items-center transition-all duration-300 hover:shadow-lg bg-white/5 backdrop-blur-sm min-h-[200px]">
          <div className="mb-3 min-h-[96px] flex items-center justify-center">{tech.icon}</div>
          <p className="text-gray-300 font-medium mb-2 text-center">{tech.name}</p>
          <a
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-violet-400 hover:text-violet-300 transition-colors text-center"
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
    <section className="py-16 px-4 sm:px-6 text-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-800 to-violet-300 bg-clip-text text-transparent">
            Technical Expertise
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Leveraging cutting-edge technologies to build robust, scalable, and efficient solutions.
          </p>
        </header>
        <TechCategory title="Frontend Development" technologies={techStack.filter(tech => ["React.js", "HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap"].includes(tech.name))} />
        <TechCategory title="Backend Development" technologies={techStack.filter(tech => ["Node.js", "Java", "Python", "C", "C++", "Kotlin"].includes(tech.name))} />
        <TechCategory title="Database Management" technologies={techStack.filter(tech => ["MongoDB", "MySQL"].includes(tech.name))} />
        <TechCategory title="DevOps & Version Control" technologies={techStack.filter(tech => ["AWS", "Git", "GitHub"].includes(tech.name))} />
      </div>
    </section>
  );
};

export default Technologies;
