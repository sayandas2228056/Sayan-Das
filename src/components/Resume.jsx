import React from "react";
import { motion } from "framer-motion";
import {
  FaDownload,
  FaGraduationCap,
  FaTrophy,
  FaCertificate,
} from "react-icons/fa";

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
      className="px-4 py-20 text-white bg-transparent sm:px-6 md:px-10 lg:px-16"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Section header */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">My Resume</h2>
          <div className="w-20 h-1 mx-auto mb-6 bg-orange-600"></div>
          <p className="max-w-3xl mx-auto text-base text-gray-300 sm:text-lg">
            A summary of my educational background, technical skills, achievements, and professional certifications.
          </p>
        </motion.div>

        {/* Resume Download Button */}
        <motion.div className="mb-16 text-center" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/15Iqsig44uLrAzZYrYAcgs0yHOX8Rdoyy/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-base font-medium text-white transition-all duration-300 transform rounded-lg group sm:px-8 sm:py-4 bg-gradient-to-r from-orange-600 to-orange-500 sm:text-lg hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
          >
            <span>Download Resume</span>
            <FaDownload className="group-hover:animate-bounce" />
          </a>
        </motion.div>

        {/* Resume Highlights Section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="pt-4 sm:pt-8"
        >
          <motion.div className="mb-6 text-center sm:mb-12" variants={itemVariants}>
            <h2 className="mb-2 text-2xl font-bold sm:text-3xl sm:mb-4">Resume Highlights</h2>
            <div className="w-16 h-1 mx-auto mb-2 bg-orange-600 sm:w-20 sm:mb-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 sm:gap-8">
            {/* Achievements Section */}
            <motion.div variants={itemVariants}>
              <div className="h-full overflow-hidden transition-all duration-300 border border-gray-700 shadow-xl bg-gray-800/30 backdrop-blur-md rounded-xl hover:shadow-orange-500/20">
                <div className="flex items-center gap-2 px-4 py-3 bg-orange-800/70 sm:py-4 sm:px-6 sm:gap-3">
                  <FaTrophy className="text-xl text-orange-300 sm:text-2xl" />
                  <h3 className="text-lg font-bold text-white sm:text-xl">Achievements</h3>
                </div>
                <div className="p-4 space-y-2 sm:p-6 sm:space-y-4">
                  {[
                    {
                      icon: "✅",
                      title: "250+ LeetCode Problems",
                      url: "https://leetcode.com/u/SayanDas2228056/",
                      desc: "View Profile",
                    },
                    {
                      icon: "📌",
                      title: "180+ DSA Problems",
                      url: "https://takeuforward.org/profile/sayandas24",
                      desc: "View Profile",
                    },
                    {
                      icon: "🏆",
                      title: "Runner-up in OMEGA-4 Hackathon",
                      desc: "Recognized for innovative solution development",
                    },
                    {
                      icon: "🥇",
                      title: "1st Position at Spiral Slide Event",
                      desc: "KIIT-Fest 7.0",
                    },
                  ].map((ach, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 transition-colors rounded-lg sm:gap-3 sm:p-3 hover:bg-gray-700/30">
                      <div className="flex-shrink-0 text-base font-bold text-orange-400 sm:text-lg">{ach.icon}</div>
                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">{ach.title}</h4>
                        {ach.url ? (
                          <a
                            href={ach.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-orange-400 sm:text-sm hover:underline"
                          >
                            {ach.desc} <span className="text-xs">↗</span>
                          </a>
                        ) : (
                          <p className="text-xs text-gray-300 sm:text-sm">{ach.desc}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Certifications Section */}
            <motion.div variants={itemVariants}>
              <div className="h-full overflow-hidden transition-all duration-300 border border-gray-700 shadow-xl bg-gray-800/30 backdrop-blur-md rounded-xl hover:shadow-orange-500/20">
                <div className="flex items-center gap-2 px-4 py-3 bg-orange-800/70 sm:py-4 sm:px-6 sm:gap-3">
                  <FaCertificate className="text-xl text-orange-300 sm:text-2xl" />
                  <h3 className="text-lg font-bold text-white sm:text-xl">Certifications</h3>
                </div>
                <div className="p-4 space-y-2 sm:p-6 sm:space-y-4">
                  {[
                    {
                      name: "AWS Cloud Virtual Internship",
                      issuer: "Amazon Web Services",
                      url: "https://www.linkedin.com/in/sayan-das-b99810213/details/certifications/",
                      icon: "📌",
                    },
                    {
                      name: "ReactJS Certification",
                      issuer: "Meta",
                      url: "https://coursera.org/share/503763e1cc9b45377a13e1ffb9f9c467",
                      icon: "🛠",
                    },
                    {
                      name: "Problem Solving Basics",
                      issuer: "HackerRank",
                      url: "https://www.hackerrank.com/certificates/d2c6c335f852",
                      icon: "🔢",
                    },
                    {
                      name: "Version Control",
                      issuer: "Meta",
                      url: "https://coursera.org/share/4a27172bd11c28d95975593bb6a4222e",
                      icon: "🔀",
                    },
                    {
                      name: "Java Basics",
                      issuer: "HackerRank",
                      url: "https://www.hackerrank.com/certificates/f155291563c3",
                      icon: "☕",
                    },
                  ].map((cert, index) => (
                    <div key={index} className="flex items-start gap-2 p-2 transition-colors rounded-lg sm:gap-3 sm:p-3 hover:bg-gray-700/30">
                      <div className="flex-shrink-0 text-base font-bold text-orange-400 sm:text-lg">{cert.icon}</div>
                      <div>
                        <h4 className="text-sm font-semibold text-white sm:text-base">{cert.name}</h4>
                        <p className="text-xs text-gray-300 sm:text-sm">{cert.issuer}</p>
                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-orange-400 sm:text-sm hover:underline"
                        >
                          View Certificate <span className="text-xs">↗</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
