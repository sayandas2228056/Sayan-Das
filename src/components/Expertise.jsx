import React from "react";
import { FaCode, FaServer, FaCloud, FaLaptopCode, FaChartLine, FaBrain } from "react-icons/fa";
import { BentoTilt } from "./Features";

const expertiseData = [
  {
    category: "Development",
    skills: [
      {
        skill: "Frontend Development",
        percentage: 80,
        icon: <FaLaptopCode />,
        description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      },
      {
        skill: "Backend Development",
        percentage: 70,
        icon: <FaServer />,
        description: "Node.js, Express, MongoDB, PostgreSQL, RESTful APIs",
      },
      {
        skill: "Full-Stack Web Development",
        percentage: 70,
        icon: <FaCode />,
        description: "MERN Stack, JAMstack, Responsive Design, Authentication",
      },
    ],
  },
  {
    category: "Technical Skills",
    skills: [
      {
        skill: "Cloud Computing",
        percentage: 60,
        icon: <FaCloud />,
        description: "AWS, Firebase, Netlify, Vercel, CI/CD Pipelines",
      },
      {
        skill: "Problem Analysis",
        percentage: 75,
        icon: <FaChartLine />,
        description: "Data Structures, Algorithms, System Design, Performance Optimization",
      },
      {
        skill: "Problem Solving",
        percentage: 70,
        icon: <FaBrain />,
        description: "Debugging, Troubleshooting, Code Refactoring, Technical Documentation",
      },
    ],
  },
];

const Expertise = () => {
  return (
    <div className="relative row-span-1 md:col-span-1 md:row-span-2">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      </div>
      
      <div className="relative z-10 overflow-hidden border border-orange-600 shadow-lg rounded-xl backdrop-blur-sm">
        <section className="px-4 py-16 text-white sm:px-6 md:px-10 lg:px-16 xl:px-20">
          <div className="max-w-6xl mx-auto">
            {expertiseData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h3 className="pb-2 mb-6 text-xl font-semibold text-orange-500 border-b border-orange-800 sm:text-2xl">
                  {category.category}
                </h3>

                {category.skills.map((item, index) => (
                  <BentoTilt key={index}>
                    <div className="p-5 mb-8 transition-all duration-300 border border-gray-800 rounded-lg shadow-lg bg-opacity-30 backdrop-blur-sm sm:p-6 hover:shadow-orange-900/20">
                      <div className="flex flex-wrap items-center gap-2 mb-2 sm:gap-4">
                        <span className="text-lg text-orange-500 sm:text-xl">{item.icon}</span>
                        <span className="text-base font-semibold text-gray-200 sm:text-lg">{item.skill}</span>
                        <span className="ml-auto text-sm font-semibold text-orange-500 sm:text-base">
                          {item.percentage}%
                        </span>
                      </div>

                      <p className="mb-3 text-sm text-gray-400">{item.description}</p>

                      <div className="relative w-full h-3 overflow-hidden bg-gray-800 rounded-full">
                        <div
                          className="absolute top-0 left-0 h-full rounded-full"
                          style={{
                            width: `${item.percentage}%`,
                            background: `linear-gradient(90deg, #EA580C 0%, #FDBA74 ${100 - item.percentage}%)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </BentoTilt>
                ))}
              </div>
            ))}

            <BentoTilt>
              <div className="p-5 mt-12 bg-black border border-orange-800 rounded-lg sm:p-6 bg-opacity-30 backdrop-blur-sm">
                <h3 className="mb-3 text-lg font-semibold text-orange-500 sm:text-xl">Currently Learning</h3>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {["AWS Cloud", "App Development", "ReactNative", "Advanced Data Structures"].map((item, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs text-orange-200 bg-orange-900 rounded-full bg-opacity-40 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </BentoTilt>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Expertise;