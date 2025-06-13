import React, { useState } from 'react';
import { FaGithub, FaCheckCircle, FaSpinner, FaExternalLinkAlt } from 'react-icons/fa';
import { BentoTilt } from './Features';
import { desc } from 'framer-motion/client';

const projects = [
  {
    title:'Emager- Ai based image generator',
    description:'A image generator that uses AI to generate images.',
    technologies:'React.js, Node.js, Express.js, MongoDB, GeminiAPI',
    status:'Work in Progress',
    repo:'https://github.com/sayandas2228056/Emager',
  },
  {
    title:'InteliCV - AI Based Resume Builder',
    description:'A resume builder that uses AI to generate resumes.',
    technologies:'React.js, Node.js, Express.js, MongoDB, GeminiAPI',
    status:'Work in Progress',
    repo:'https://github.com/sayandas2228056/InteliCV',
  },
  {
    title: 'InteliView - Ai Based Interview Preparator',
    description: 'A job portal that connects employers and job seekers, allowing resume uploads and job postings.',
    technologies: 'Node.js, React.js, Express.js, MongoDB, GeminiAPI',
    status: 'Work in Progress',
    repo: 'https://github.com/sayandas2228056/InteliView',
  },
  {
    title:'Zenitech Solutions Website',
    description:'A website for a company that provides solutions for businesses.',
    technologies:' React.js, Node.js, Express.js, NodeMailer',
    status:'Completed',
    repo:'https://github.com/sayandas2228056/Zenitech',
    link:'https://zenitech.in/'
  },
  {
    title:'Zenitech Solutions-Admin Portfolio',
    description:'A admin panel for the founder of Zenitech Solutions.',
    technologies:' React.js, tailwindcss',
    status:'Completed',
    repo:'https://github.com/sayandas2228056/Zenitech',
    link:'https://haider.zenitech.in/'
  },
  {
    title: 'HierX - Job Portal Website',
    description: 'A job portal that connects employers and job seekers, allowing resume uploads and job postings.',
    technologies: 'Node.js, React.js, Bootstrap, Tailwind, Supabase, Clerk, ShadCN',
    status: 'Completed',
    repo: 'https://github.com/sayandas2228056/JobPortal',
  },
  {
    title: 'ChatZ - Realtime Chatting Application',
    description: 'A real-time messaging app with Login and WebSocket-based communication.',
    technologies: 'HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Node.js, MongoDB, Socket.io',
    status: 'Completed',
    repo: 'https://github.com/sayandas2228056/Chzts',
  },
  {
    title: 'Fitness Tracker',
    description: 'A fitness tracking application designed to monitor and analyze user health metrics.',
    technologies: 'ReactJS, NodeJS, ExpressJS, MongoDB',
    status: 'Completed',
    repo: 'https://github.com/sayandas2228056/Fitness-Tracker',
  },
  {
    title: 'Coupon Generator',
    description: 'A full-stack web application that generates secure discount coupons, using cookies for security.',
    technologies: 'React, Node.js, Express.js, Cookies',
    status: 'Completed',
    repo: 'https://github.com/sayandas2228056/CouponGenerator',
  },
  {
    title: 'Optimised Ant-Colony for Load Balancing',
    description: 'A serverless function load balancer using AWS Lambda, API Gateway, and a weighted routing algorithm.',
    technologies: 'Node.js, REST API, Express.js, AWS',
    status: 'Completed',
    repo: 'https://github.com/sayandas2228056/ACO-Optimised-Load-Balancer-for-Cloud-Computing',
  },
];

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? [...projects]
      : projects.filter((p) => p.status === filter);

  return (
    <div id="projects">
      {/* Heading */}
      <h1 className="text-white special-font hero-heading flex-center">
        <b>P</b>ortfolio <b className="text-orange-600">Projects</b>
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 my-6">
        {['All', 'Completed', 'Work in Progress'].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-lg ${
              filter === status
                ? 'bg-orange-600 text-white'
                : 'bg-gray-800 text-gray-300'
            } transition-colors`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <BentoTilt key={idx}>
            <section className="p-4 bg-black border border-gray-800 rounded-lg bg-opacity-30 backdrop-blur-sm sm:p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-500 transition-colors hover:text-orange-300"
                      title="Visit Website"
                    >
                      <FaExternalLinkAlt size={18} />
                    </a>
                  )}
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-orange-500 transition-colors hover:text-orange-300"
                    title="View Repository"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
              </div>
              <p className="mb-2 text-sm text-gray-300 sm:text-base">{project.description}</p>
              <p className="mb-1 text-sm font-medium text-orange-500 sm:text-sm">Technologies:</p>
              <p className="text-sm text-gray-400">{project.technologies}</p>
              <div className="flex items-center mt-3 text-sm text-gray-300">
                <span className="mr-2 font-medium text-orange-500">Status:</span>
                <span
                  className={`flex items-center gap-1 ${
                    project.status === 'Completed'
                      ? 'text-green-500'
                      : 'text-yellow-500'
                  }`}
                >
                  {project.status === 'Completed' ? (
                    <>
                      <FaCheckCircle /> Completed
                    </>
                  ) : (
                    <>
                      <FaSpinner className="animate-spin" /> In Progress
                    </>
                  )}
                </span>
              </div>
            </section>
          </BentoTilt>
        ))}
      </div>
    </div>
  );
};

export default Projects;
