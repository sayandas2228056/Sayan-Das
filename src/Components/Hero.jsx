import React from "react";
import { motion } from "framer-motion";
import MyImage from "../Pics/SayanImg.jpg";

const Hero = () => {
  return (
    <motion.section
      className="flex flex-col-reverse md:flex-row items-center justify-between min-h-screen text-white px-4 sm:px-6 lg:px-20 pt-24 sm:pt-28 md:pt-0 max-w-7xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Text Section */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-6 order-2 md:order-1 mt-10 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h2 className="text-violet-400 text-lg sm:text-xl font-medium tracking-wide">
            Hello, I'm
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-300">
            Sayan Das
          </h1>
          <h2 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200 mt-3">
            <span className="text-violet-400">Computer Engineer</span> & Full Stack Developer
          </h2>
        </motion.div>

        <motion.p
          className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Passionate technologist with expertise in
          <span className="text-violet-300 font-medium"> Java, C++, and C</span>.
          Specialized in <span className="text-violet-300 font-medium">Data Structures & Algorithms</span> with
          a proven track record in <span className="text-violet-300 font-medium">Web Development</span>,
          <span className="text-violet-300 font-medium"> Mobile Applications</span>,
          <span className="text-violet-300 font-medium"> Cloud Computing</span>, and
          <span className="text-violet-300 font-medium"> Cybersecurity</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 pt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-violet-600 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-violet-700 hover:shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-1"
          >
            Hire Me
          </a>
          <a
            href="#projects"
            className="px-6 sm:px-8 py-3 bg-transparent border-2 border-violet-500 text-white rounded-lg font-semibold transition-all duration-300 hover:bg-violet-500/10 hover:shadow-lg hover:shadow-violet-500/20 transform hover:-translate-y-1"
          >
            View Portfolio
          </a>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center order-1 md:order-2 mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] md:w-[290px] md:h-[290px] lg:w-[320px] lg:h-[320px]">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full blur opacity-70 animate-pulse"></div>
          <img
            src={MyImage}
            alt="Sayan Das"
            className="relative w-full h-full object-cover rounded-full border-4 border-violet-500/50 shadow-2xl shadow-violet-500/20 transition-all duration-500 hover:scale-105"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
