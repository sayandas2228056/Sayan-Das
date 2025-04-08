import React from "react"; 
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaLaptopCode, FaChartLine, FaBrain } from "react-icons/fa";

const expertiseData = [
  { 
    category: "Development",
    skills: [
      { 
        skill: "Frontend Development", 
        percentage: 80,
        icon: <FaLaptopCode />,
        description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion"
      },
      { 
        skill: "Backend Development", 
        percentage: 70,
        icon: <FaServer />,
        description: "Node.js, Express, MongoDB, PostgreSQL, RESTful APIs"
      },
      { 
        skill: "Full-Stack Web Development", 
        percentage: 70,
        icon: <FaCode />,
        description: "MERN Stack, JAMstack, Responsive Design, Authentication"
      },
    ]
  },
  {
    category: "Technical Skills",
    skills: [
      { 
        skill: "Cloud Computing", 
        percentage: 60,
        icon: <FaCloud />,
        description: "AWS, Firebase, Netlify, Vercel, CI/CD Pipelines"
      },
      { 
        skill: "Problem Analysis", 
        percentage: 75,
        icon: <FaChartLine />,
        description: "Data Structures, Algorithms, System Design, Performance Optimization"
      },
      { 
        skill: "Problem Solving", 
        percentage: 70,
        icon: <FaBrain />,
        description: "Debugging, Troubleshooting, Code Refactoring, Technical Documentation"
      }
    ]
  }
];

const barVariants = {
  hidden: { width: 0 },
  visible: (percentage) => ({
    width: `${percentage}%`,
    transition: { duration: 1.5, ease: "easeInOut" },
  }),
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 }
  }
};

const Expertise = () => {
  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 text-white">
      <motion.div 
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-violet-500 text-center mb-4">My Expertise</h2>
        <p className="text-sm sm:text-base text-gray-300 text-center mb-10 max-w-2xl mx-auto">
          With a passion for creating robust and elegant solutions, I've developed proficiency in 
          various technologies and methodologies. Here's an overview of my technical capabilities.
        </p>

        {expertiseData.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-12">
            <motion.h3 
              className="text-xl sm:text-2xl font-semibold text-violet-400 mb-6 border-b border-violet-800 pb-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              {category.category}
            </motion.h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {category.skills.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="mb-8 bg-black bg-opacity-30 backdrop-blur-sm p-5 sm:p-6 rounded-lg shadow-lg hover:shadow-violet-900/20 transition-all duration-300 border border-gray-800"
                  variants={itemVariants}
                >
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-2">
                    <span className="text-violet-400 text-lg sm:text-xl">{item.icon}</span>
                    <span className="text-base sm:text-lg font-semibold text-gray-200">{item.skill}</span>
                    <span className="ml-auto text-sm sm:text-base font-semibold text-violet-400">{item.percentage}%</span>
                  </div>
                  
                  <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                  
                  <div className="w-full bg-gray-800 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      className="absolute top-0 left-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(90deg, #8B5CF6 0%, #C4B5FD ${100 - item.percentage}%)`,
                      }}
                      custom={item.percentage}
                      variants={barVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}

        <motion.div 
          className="mt-12 p-5 sm:p-6 bg-black bg-opacity-30 backdrop-blur-sm rounded-lg border border-violet-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg sm:text-xl font-semibold text-violet-400 mb-3">Currently Learning</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {["AWS Cloud, App Development, ReactNative, Advanced Data Structues"].map((item, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-violet-900 bg-opacity-40 rounded-full text-violet-200 text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Expertise;
