import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight, FaCode, FaCloud, FaUsers, FaComments, FaBriefcase } from 'react-icons/fa';
import { BentoTilt } from './Features';

// Import all images
import InteliView1 from '../assets/project/inteliview1.png';
import InteliView2 from '../assets/project/inteliview2.png';
import InteliView3 from '../assets/project/inteliview3.png';
import InteliView4 from '../assets/project/inteliview4.png';
import InteliView5 from '../assets/project/inteliview5.png';
import InteliView6 from '../assets/project/inteliview6.png';
import InteliView7 from '../assets/project/inteliview7.png';
import Zenitech from '../assets/project/ZenitechSolutions1.png';
import Zenitech2 from '../assets/project/ZenitechSolutions2.png';
import Zenitech3 from '../assets/project/ZenitechSolutions3.png';
import Zenitech4 from '../assets/project/ZenitechSolutions4.png';
import Zenitech5 from '../assets/project/ZenitechSolutions5.png';
import Zenitech6 from '../assets/project/ZenitechSolutions6.png';
import Zenitech7 from '../assets/project/ZenitechSolutions7.png';
import JobPortal from '../assets/project/JobPortal1.png';
import JobPortal2 from '../assets/project/JobPortal2.png';
import JobPortal3 from '../assets/project/JobPortal3.png';
import JobPortal4 from '../assets/project/JobPortal4.png';
import JobPortal5 from '../assets/project/JobPortal5.png';
import JobPortal6 from '../assets/project/JobPortal6.png';
import ChatZ from '../assets/project/ChatZ.png';
import ChatZ1 from '../assets/project/ChatZ1.png';
import ChatZ2 from '../assets/project/ChatZ2.png';
import ChatZ3 from '../assets/project/ChatZ3.png';
import ChatZ4 from '../assets/project/ChatZ4.png';
import ChatZ5 from '../assets/project/ChatZ5.png';
import HierX from '../assets/project/Hierx1.png';
import HierX2 from '../assets/project/HierX2.png';
import HierX3 from '../assets/project/HierX3.png';
import HierX4 from '../assets/project/HierX4.png';

const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef(null);
  const [zoomed, setZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const imgBoxRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3500);
    }
    return () => clearInterval(intervalRef.current);
  }, [images.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Mouse move handler for zoomed image
  const handleMouseMove = (e) => {
    if (!imgBoxRef.current) return;
    const rect = imgBoxRef.current.getBoundingClientRect();
    // Clamp the zoomed image inside the box
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    // Clamp so the zoomed image doesn't overflow
    x = Math.max(0, Math.min(x, rect.width));
    y = Math.max(0, Math.min(y, rect.height));
    setMousePos({ x, y });
  };

  return (
    <div
      className="overflow-hidden relative bg-gray-900 rounded-lg"
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      tabIndex={0}
    >
      <div
        className="relative h-64 sm:h-80"
        ref={imgBoxRef}
        onMouseEnter={() => { setIsPaused(true); setZoomed(true); }}
        onMouseLeave={() => { setIsPaused(false); setZoomed(false); }}
        onMouseMove={handleMouseMove}
        style={{ cursor: zoomed ? 'zoom-in' : 'pointer' }}
      >
        <img
          src={images[currentIndex]}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="object-cover w-full h-full transition-opacity duration-500"
        />
        {/* Zoomed image preview, only on hover */}
        {zoomed && (
          <div
            className="absolute z-40"
            style={{
              left: mousePos.x + 24 > (imgBoxRef.current?.offsetWidth || 0) - 180 ? (imgBoxRef.current?.offsetWidth || 0) - 180 : mousePos.x + 24,
              top: mousePos.y - 80 < 0 ? 0 : mousePos.y - 80,
            }}
          >
            <img
              src={images[0]}
              alt={title + ' zoomed preview'}
              className="object-contain w-44 h-44 bg-black rounded-xl border-4 border-orange-500 shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 24px #ea580c88)' }}
            />
          </div>
        )}
        
        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full transition-all transform -translate-y-1/2 hover:bg-opacity-70"
        >
          <span className="sr-only">Previous Image</span>
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 p-2 text-white bg-black bg-opacity-50 rounded-full transition-all transform -translate-y-1/2 hover:bg-opacity-70"
        >
          <span className="sr-only">Next Image</span>
          <FaChevronRight />
        </button>
        
        {/* Dots indicator */}
        <div className="flex absolute bottom-2 left-1/2 gap-2 transform -translate-x-1/2">
          {images.map((_, index) => (
            <button
              key={index}
              aria-label={`Go to image ${index + 1}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex ? 'bg-orange-500' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, icon: Icon }) => {
  return (
    <BentoTilt>
      <div className="p-6 h-full bg-black bg-opacity-30 rounded-lg border border-gray-800 backdrop-blur-sm">
        <div className="flex gap-3 items-center mb-4">
          <Icon className="text-2xl text-orange-500" />
          <div>
            <h3 className="text-xl font-bold text-orange-500">{project.title}</h3>
            <p className="text-sm text-gray-400">{project.type}</p>
          </div>
        </div>

        <ProjectCarousel images={project.images} title={project.title} />

        <div className="mt-4">
          <p className="text-sm leading-relaxed text-gray-300">{project.description}</p>
          
          <div className="mt-4">
            <h4 className="mb-2 font-semibold text-orange-400">Key Features:</h4>
            <ul className="space-y-1 text-sm text-gray-300">
              {project.features.map((feature, index) => (
                <li key={index} className="flex gap-2 items-start">
                  <span className="mt-1 text-orange-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4">
            <h4 className="mb-2 font-semibold text-orange-400">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs text-orange-200 bg-orange-900 bg-opacity-40 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 mt-6">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-4 py-2 text-white bg-gray-800 rounded-lg transition-colors hover:bg-gray-700"
              >
                <FaGithub />
                <span className="text-sm">GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center px-4 py-2 text-white bg-orange-600 rounded-lg transition-colors hover:bg-orange-700"
              >
                <FaExternalLinkAlt />
                <span className="text-sm">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </BentoTilt>
  );
};

const LiveProject = () => {
  const projects = [
    {
      title: "InteliView",
      type: "AI Interview Platform",
      images: [InteliView1, InteliView2, InteliView3, InteliView4, InteliView5, InteliView6, InteliView7],
      description: "An intelligent interview platform that revolutionizes the hiring process with AI-powered mock interviews, real-time feedback, and comprehensive analytics.",
      features: [
        "AI-powered mock test sessions",
        "Real-time Resume Analysis and Feedback",
        "Comprehensive performance analytics",
        "Multiple interview guide",
        "Progress tracking and improvement suggestions"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Together API", "JWT", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/inteliview",
      liveUrl: "https://inteli-view.vercel.app/"
    },
    {
      title: "Zenitech Solutions",
      type: "Corporate Website",
      images: [Zenitech, Zenitech2, Zenitech3, Zenitech4, Zenitech5, Zenitech6, Zenitech7],
      description: "A professional corporate website for Zenitech Solutions, featuring modern design, service showcases, and integrated contact systems.",
      features: [
        "Responsive modern design",
        "Service portfolio showcase",
        "Integrated contact form with email routing",
        "Admin portfolio management",
        "SEO optimized structure",
        "Fast loading performance"
      ],
      technologies: ["React.js", "Node.js", "Express", "NodeMailer", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/yourusername/zenitech-solutions",
      liveUrl: "https://zenitech.in"
    },
    {
      title: "HierX",
      type: "Hierarchical Management System",
      images: [HierX, HierX2, HierX3, HierX4],
      description: "An organizational hierarchy management system for efficient team structure visualization and management with role-based access control.",
      features: [
        "Interactive organizational chart",
        "Role-based access control",
        "Employee management dashboard",
        "Hierarchical reporting structure",
        "Performance tracking integration",
        "Department-wise analytics"
      ],
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT", "Cloudinary"],
    },
    {
      title: "ChatZ",
      type: "Real-time Chat Application",
      images: [ChatZ, ChatZ1, ChatZ2, ChatZ3, ChatZ4, ChatZ5],
      description: "A modern real-time chat application with group messaging, file sharing, and advanced chat features for seamless communication.",
      features: [
        "Real-time messaging with Socket.io",
        "Group chat functionality",
        "File and image sharing",
        "Message encryption",
        "Online status indicators",
        "Message history and search"
      ],
      technologies: ["React.js", "Node.js", "Socket.io", "MongoDB", "Express", "JWT", "Multer", "Emoji Support"],
      githubUrl: "https://github.com/sayandas2228056/Chzts",
    },
    {
      title: "Job Portal Platform",
      type: "Employment Management System",
      images: [JobPortal, JobPortal2, JobPortal3, JobPortal4, JobPortal5, JobPortal6],
      description: "A comprehensive job portal connecting employers and job seekers with advanced filtering, application tracking, and profile management.",
      features: [
        "User authentication for employers and job seekers",
        "Advanced job search and filtering",
        "Application tracking system",
        "Resume upload and management",
        "Employer dashboard for job postings",
        "Real-time notifications"
      ],
      technologies: ["React.js", "Node.js", "Express", "Supabase", "Clerk", "Tailwind CSS"],
    },
    
    
  ];

  const projectIcons = [FaCode, FaCloud, FaBriefcase, FaComments, FaUsers];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div id="projects" className="w-screen text-blue-50 bg-black min-h-dvh">
      <div className="flex relative flex-col items-center py-10 pb-24 size-full">
        <h1 className="text-white special-font hero-heading flex-center">
          <b>Protfolio</b> <b className="text-orange-600">projects</b>
        </h1>
        <p className="px-4 mt-4 max-w-2xl text-center text-gray-300">
          Explore my portfolio of live projects showcasing full-stack development, 
          cloud integration, and modern web technologies.
        </p>
        <div className="px-4 mx-auto mt-8 w-full max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-2">
            {visibleProjects.map((project, index) => {
              const projIdx = projects.indexOf(project);
              return (
                <ProjectCard
                  key={index}
                  project={project}
                  icon={projectIcons[projIdx % projectIcons.length]}
                />
              );
            })}
          </div>
          {/* Show More / Show Less buttons */}
          {!showAll && projects.length > 2 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(true)}
                className="px-6 py-3 font-semibold text-white bg-orange-600 rounded-lg shadow-lg transition-colors hover:bg-orange-700"
              >
                Show More
              </button>
            </div>
          )}
          {showAll && projects.length > 2 && (
            <div className="flex justify-center mt-8">
              <button
                onClick={() => setShowAll(false)}
                className="px-6 py-3 font-semibold text-white bg-gray-700 rounded-lg shadow-lg transition-colors hover:bg-gray-800"
              >
                Show Less
              </button>
            </div>
          )}
        </div>
        <div className="mt-12 text-center">
          <div className="p-6 mx-auto max-w-2xl bg-black bg-opacity-30 rounded-lg border border-gray-800 backdrop-blur-sm">
            <h3 className="mb-3 text-xl font-bold text-orange-500">Want to see more?</h3>
            <p className="mb-4 text-gray-300">
              Check out my GitHub profile for more projects and contributions to open source.
            </p>
            <a
              href="https://github.com/sayandas2228056"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex gap-2 items-center px-6 py-3 text-white bg-orange-600 rounded-lg transition-colors hover:bg-orange-700"
            >
              <FaGithub />
              <span>View GitHub Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveProject;