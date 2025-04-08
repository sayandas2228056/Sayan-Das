import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaCheckCircle, FaSpinner, FaMoon, FaSun } from "react-icons/fa";

// Projects List (Ensure this order remains intact)
const projects = [
  {
    title: "HierX - Job Portal Website",
    description: "A job portal that connects employers and job seekers, allowing resume uploads and job postings.",
    technologies: "Node.js, React.js, Bootstrap, Tailwind, Supabase, Clerk, ShadCN",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/JobPortal",
  },
  {
    title: "ChatZ - Realtime Chatting Application",
    description: "A real-time messaging app with Login and WebSocket-based communication.",
    technologies: "HTML, CSS, JavaScript, Tailwind CSS, ReactJS, Node.js, MongoDB, Socket.io",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/Chzts",
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application designed to monitor and analyze user health metrics.",
    technologies: "ReactJS, NodeJS, ExpressJS, MongoDB",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/Fitness-Tracker",
  },
  {
    title: "Coupon Generator",
    description: "A full-stack web application that generates secure discount coupons, using cookies for security.",
    technologies: "React, Node.js, Express.js, Cookies",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/CouponGenerator",
  },
  {
    title: "GI-Tag",
    description: "A machine learning project that uses NLP and KNN to classify and analyze Geographical Indications (GI) tagged products.",
    technologies: "Python, NLP, KNN, Machine Learning",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/GI-Tag",
  },
  {
    title: "Optimised Ant-Colony for Load Balancing",
    description: "A serverless function load balancer using AWS Lambda, API Gateway, DynamoDB, and a weighted routing algorithm.",
    technologies: "Node.js, REST API, Express.js, AWS",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/ACO-Optimised-Load-Balancer-for-Cloud-Computing",
  },
  {
    title: "Weather App",
    description: "A simple weather application that provides current weather information based on user location.",
    technologies: "HTML, CSS, JavaScript, ReactJS",
    status: "Completed",
    repo: "https://github.com/sayandas2228056/Weather-Forcasting",
  },
  
];

const Projects = () => {
  const [theme, setTheme] = useState("light");
  const [filter, setFilter] = useState("All");

  // Toggle theme function
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  // Filter projects while maintaining the original order
  const filteredProjects =
    filter === "All"
      ? [...projects]
      : projects.filter((p) => p.status === filter).sort((a, b) => projects.indexOf(a) - projects.indexOf(b));

  return (
    <section className={`${theme === "dark" ? "dark" : ""} py-20 px-6 md:px-16 lg:px-24`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Theme Toggle */}
        <div className="flex justify-end mb-6">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 transition-all"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white relative inline-block">
            Portfolio Projects
            <span className="absolute bottom-1 left-0 w-full h-3 bg-indigo-100 dark:bg-indigo-900/30 -z-10 rounded"></span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of projects demonstrating my technical expertise and problem-solving capabilities.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center mb-6">
          {["All", "Completed", "Work in Progress"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`mx-2 px-4 py-2 rounded-lg ${
                filter === status
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
              } transition-all`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid gap-6 md:gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100, damping: 12 } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{project.title}</h3>
                  <motion.a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
                    aria-label={`GitHub repository for ${project.title}`}
                    whileTap={{ scale: 0.8 }}
                  >
                    <FaGithub className="text-xl" />
                  </motion.a>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="pt-4 border-t border-gray-200/30 dark:border-gray-700/30">
                  <div className="flex items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mr-2">Technologies:</span>
                    <span className="text-gray-600 dark:text-gray-400 text-sm">{project.technologies}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-700 dark:text-gray-300 text-sm font-medium mr-2">Status:</span>
                    <span className={`text-sm flex items-center ${project.status === "Completed" ? "text-green-600 dark:text-green-400" : "text-amber-600 dark:text-amber-400"}`}>
                      {project.status === "Completed" ? (
                        <><FaCheckCircle className="mr-1" /> Completed</>
                      ) : (
                        <><FaSpinner className="mr-1 animate-spin" /> In Progress</>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;