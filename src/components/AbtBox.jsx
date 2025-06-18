import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaCloud, 
  FaServer, 
  FaDatabase, 
  FaTools, 
  FaCode 
} from 'react-icons/fa';
import { BentoTilt } from './Features';

// Define animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const AbtBox = () => {
  return (
    <div id='about' className="px-4 mx-auto w-full max-w-7xl sm:px-6 lg:px-8">
      {/* Name Heading */}
      <h1 className="text-white special-font hero-heading flex-center">
        <b>A</b>bout <b className='text-orange-600'>Me</b>
      </h1>
      
      <div className="flex flex-col gap-8 mt-8 md:flex-row">
        {/* About + Education */}
        
        <div className="md:w-1/2">
          {/* Professional Profile */}
          <BentoTilt>
            <section>
              <h3 className="pl-4 mb-2 text-xl font-semibold text-orange-600 border-l-4 border-orange-600 sm:text-2xl">
                Professional Profile
              </h3>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                I&apos;m <span className="font-semibold text-white">Sayan Das</span>, a dedicated
                <span className="font-semibold text-white"> Computer Science Engineer</span> with expertise in
                full-stack development and a passion for creating innovative technology solutions.
              </p>

              <p className="mt-4 text-base leading-relaxed text-gray-300 sm:text-lg">
                Currently pursuing my B.Tech in Computer Science & Engineering at
                <span className="font-semibold text-white"> KIIT University</span>, I specialize in
                building scalable web applications, cloud infrastructure, and efficient API solutions.
              </p>
            </section>
          </BentoTilt>

          {/* Education Section */}
          <BentoTilt>
            <section className="p-4 mt-4 bg-black bg-opacity-30 rounded-lg border border-gray-800 backdrop-blur-sm sm:p-6">
              <h4 className="flex gap-2 items-center mb-2 text-lg font-semibold text-orange-600 sm:text-xl sm:mb-3">
                <FaGraduationCap className="flex-shrink-0" /> Education
              </h4>
              <div className="pl-3 ml-2 text-sm border-l-2 border-orange-600 sm:ml-4 sm:pl-4 sm:text-base">
                <p className="font-medium text-white">B.Tech in Computer Science & Engineering</p>
                <p className="text-gray-400">KIIT University, Bhubaneswar, Odisha</p>
                <p className="text-gray-400">2022 - 2026</p>

                <p className="mt-2 font-medium text-white sm:mt-3">Senior Secondary Examination (CBSE Boards)</p>
                <p className="text-gray-400">DAV Public School, Hehal, Ranchi, Jharkhand</p>
                <p className="text-gray-400">2020-2022</p>

                <p className="mt-2 font-medium text-white sm:mt-3">Secondary Examination (ICSE Boards)</p>
                <p className="text-gray-400">ST Paul&apos;s School, Rampurhat, West Bengal</p>
                <p className="text-gray-400">2007-2020</p>
              </div>
            </section>
          </BentoTilt>
        </div>

        {/* My Vision */}
        <div className="md:w-1/2">
          <BentoTilt>
            <section>
              <h3 className="pl-4 mb-2 text-xl font-semibold text-orange-600 border-l-4 border-orange-600 sm:text-2xl">
                My Vision
              </h3>
              <p className="text-base leading-relaxed text-gray-300 sm:text-lg">
                I aim to leverage cutting-edge technologies to develop solutions that address real-world challenges. My goal is to contribute to high-impact projects that push the boundaries of what&apos;s possible in web development and cloud computing.
              </p>
            </section>
          </BentoTilt>

          <BentoTilt>
            <section className="p-4 mt-4 bg-black bg-opacity-30 rounded-lg border border-gray-800 backdrop-blur-sm sm:mt-6 sm:p-6">
              <h4 className="mb-2 text-lg font-semibold text-orange-600 sm:text-xl sm:mb-3">Professional Goals</h4>
              <ul className="space-y-1 text-sm text-gray-300 sm:space-y-2 sm:text-base">
                <li className="flex items-start">
                  <span className="flex-shrink-0 mr-2 text-orange-600">▹</span>
                  Master advanced full-stack development methodologies
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mr-2 text-orange-600">▹</span>
                  Explore AI integration in web applications
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mr-2 text-orange-600">▹</span>
                  Develop expertise in cloud-native architectures
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 mr-2 text-orange-600">▹</span>
                  Contribute to open-source projects in web technologies
                </li>
              </ul>
            </section>
          </BentoTilt>
        </div>
      </div>

      <BentoTilt>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-4 sm:pt-8"
        >
          <h1 className="text-white special-font hero-heading flex-center">
        <b>Technical</b><b className='text-orange-600'>Services</b>
      </h1>

          <div className="grid grid-cols-1 gap-4 xs:grid-cols-2 lg:grid-cols-3 sm:gap-6">
            {[
              {
                title: "Full-Stack Development",
                description:
                  "End-to-end web application development with modern frontend frameworks and scalable backend solutions.",
                icon: <FaLaptopCode className="text-2xl text-orange-500 sm:text-3xl" />,
              },
              {
                title: "Cloud Architecture",
                description:
                  "Design and implementation of cloud-based infrastructures using AWS services for optimal performance and scalability.",
                icon: <FaCloud className="text-2xl text-orange-500 sm:text-3xl" />,
              },
              {
                title: "API Development",
                description:
                  "Creation of robust RESTful APIs that enable secure and efficient data exchange between services.",
                icon: <FaServer className="text-2xl text-orange-500 sm:text-3xl" />,
              },
              {
                title: "Database Design",
                description:
                  "Structured database architecture that supports efficient data operations and maintains data integrity.",
                icon: <FaDatabase className="text-2xl text-orange-500 sm:text-3xl" />,
              },
              {
                title: "Technical Consultation",
                description:
                  "Expert guidance on technology stack selection and implementation strategies for web projects.",
                icon: <FaTools className="text-2xl text-orange-500 sm:text-3xl" />,
              },
              {
                title: "Code Optimization",
                description:
                  "Performance enhancement of existing applications through algorithmic improvements and code refactoring.",
                icon: <FaCode className="text-2xl text-orange-500 sm:text-3xl" />,
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-orange-700 to-yellow-600 rounded-xl opacity-0 blur transition-opacity duration-300 group-hover:opacity-100 -z-10"></div>
                <div className="p-4 h-full rounded-xl border border-gray-800 backdrop-blur-sm transition-all duration-300 bg-gray-900/90 group-hover:border-orange-500 sm:p-6">
                  <div className="flex justify-center items-center mb-3 w-12 h-12 rounded-full transition-colors bg-gray-800/50 sm:w-16 sm:h-16 sm:mb-4 group-hover:bg-orange-600/20">
                    {service.icon}
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-orange-500 sm:text-xl sm:mb-3">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-300 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </BentoTilt>
    </div>
  );
};

export default AbtBox;