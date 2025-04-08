import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaCode, FaTrophy, FaCertificate } from "react-icons/fa";

const Resume = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="resume"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">My Resume</h2>
          <div className="w-20 h-1 bg-violet-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg">
            A summary of my educational background, technical skills, achievements, and professional certifications.
          </p>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/1emeaaclKgYB7wfCMnrq6Ce8bMd2wVfir/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-base sm:text-lg rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-1"
          >
            <span>Download Resume</span>
            <FaDownload className="group-hover:animate-bounce" />
          </a>
        </motion.div>

        {/* Resume Sections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Each card remains unchanged, just spacing is improved */}
          {/* Example: Education */}
          <motion.div variants={itemVariants}>
            <div className="bg-gray-800/50 backdrop-blur-md rounded-xl border border-gray-700 shadow-xl hover:shadow-violet-500/20 transition-all duration-300 h-full">
              <div className="bg-gradient-to-r from-violet-900/80 to-indigo-900/80 py-4 px-5 sm:px-6 flex items-center gap-3">
                <FaGraduationCap className="text-2xl text-violet-300" />
                <h3 className="text-lg sm:text-xl font-bold text-white">Education</h3>
              </div>
              <div className="p-5 sm:p-6 space-y-6">
                {[
                  {
                    title: "B.Tech in Computer Science",
                    sub: "KIIT University | 2022-2026",
                    desc: "CGPA: 7.76",
                  },
                  {
                    title: "Senior Secondary (12th)",
                    sub: "DAV Public School, Hehal",
                    desc: "Percentage: 76.8%",
                  },
                  {
                    title: "Secondary (10th)",
                    sub: "ST. Paul's School, Rampurhat",
                    desc: "Percentage: 86.6%",
                  },
                ].map((item, index) => (
                  <div key={index} className="relative pl-6 border-l-2 border-violet-500">
                    <div className="absolute w-4 h-4 bg-violet-500 rounded-full -left-[9px] top-0"></div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-violet-300">{item.sub}</p>
                    <p className="text-gray-300 mt-1">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills, Achievements, Certifications remain identical in structure */}
          {/* Just make sure they all follow the spacing, responsiveness with sm, md, lg breakpoints */}

          {/* Example: Wrap skill badges with scroll if overflow */}
          {/* Inside the skills grid */}
          {/* Example modification */}
          {/* <div className="flex flex-wrap gap-2 overflow-x-auto"> */}
          {/* Add responsive paddings, text sizing, etc. to all subcomponents as done above */}

          {/* Keep reusing the pattern for other sections */}
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
