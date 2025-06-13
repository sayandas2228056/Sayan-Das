import React, { useState } from 'react';
import { FaLinkedin, FaCloud, FaCode, FaTools, FaUsers, FaExternalLinkAlt } from 'react-icons/fa';
import { BentoTilt } from './Features';

const LinkPreview = ({ url, title }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-300 transition-colors hover:text-orange-400"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaExternalLinkAlt className="text-orange-500" />
        <span>{title}</span>
      </a>
      
      {isHovered && (
        <div className="absolute left-0 z-50 w-64 p-2 mt-2 transition-all duration-300 ease-in-out transform bg-gray-900 border border-orange-500 rounded-lg shadow-lg">
          <div className="relative w-full h-32 overflow-hidden rounded-md">
            <img
              src={`https://api.microlink.io/?url=${url}&screenshot=true&meta=false&embed=screenshot.url`}
              alt={`Preview of ${title}`}
              className="object-cover w-full h-full"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x200/1a1a1a/orange?text=Preview+Not+Available';
              }}
            />
          </div>
          <div className="p-2 mt-2">
            <h4 className="text-sm font-semibold text-orange-400">{title}</h4>
            <p className="mt-1 text-xs text-gray-400">{url}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Internship = () => {
  return (
    <div id="internship" className="w-screen bg-black min-h-dvh text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24 size-full">
        <h1 className="text-white special-font hero-heading flex-center">
          <b>Intern</b> <b className="text-orange-600">ship</b>
        </h1>

        <div className="w-full max-w-6xl px-4 mx-auto mt-8">
          <BentoTilt>
            <section className="p-6 bg-black border border-gray-800 rounded-lg bg-opacity-30 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-orange-500">Cloud Computing & Full Stack Developer Intern</h2>
                  <p className="text-gray-300">Zenitech Solutions</p>
                  <p className="text-sm text-gray-400">May 2025 - Present · Bengaluru, Karnataka, India (Remote)</p>
                </div>
                <a
                  href="http://linkedin.com/in/sayan-das-b99810213/details/experience/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-orange-500 transition-colors rounded-full hover:bg-orange-500/10"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>

              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="p-4 rounded-lg bg-gray-800/30">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCode className="text-xl text-orange-500" />
                    <h3 className="text-lg font-semibold text-white">Full Stack Development</h3>
                  </div>
                  <p className="text-gray-300">
                    Built dynamic and responsive web apps using React.js, Node.js, Express, and MongoDB. 
                    Integrated frontend with RESTful APIs, implemented secure authentication, and ensured smooth user experiences.
                    <br /><br />
                    <span className="font-semibold text-orange-400">Key Achievements:</span>
                    <ul className="mt-2 ml-4 list-disc">
                      <li>Developed Zenitech Solutions' official website with contact form integration using NodeMailer</li>
                      <li>Created a dedicated admin portfolio for the company founder</li>
                      <li>Implemented secure email routing system for client inquiries</li>
                    </ul>
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/30">
                  <div className="flex items-center gap-3 mb-3">
                    <FaCloud className="text-xl text-orange-500" />
                    <h3 className="text-lg font-semibold text-white">Cloud Computing (AWS)</h3>
                  </div>
                  <p className="text-gray-300">
                    Worked with essential AWS services like EC2, S3, Lambda, and RDS. Deployed applications to the cloud, 
                    managed storage and compute resources, and configured IAM roles, VPCs, and security groups.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/30">
                  <div className="flex items-center gap-3 mb-3">
                    <FaTools className="text-xl text-orange-500" />
                    <h3 className="text-lg font-semibold text-white">DevOps & Deployment</h3>
                  </div>
                  <p className="text-gray-300">
                    Assisted in automating deployment workflows using GitHub Actions and monitored applications using CloudWatch.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-gray-800/30">
                  <div className="flex items-center gap-3 mb-3">
                    <FaUsers className="text-xl text-orange-500" />
                    <h3 className="text-lg font-semibold text-white">Team Collaboration</h3>
                  </div>
                  <p className="text-gray-300">
                    Followed Agile practices, participated in sprint planning, and contributed to team meetings and code reviews.
                  </p>
                </div>
              </div>

              <div className="p-4 mt-6 rounded-lg bg-gray-800/30">
                <h3 className="mb-3 text-lg font-semibold text-orange-500">Skills Gained</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Web Development',
                    'Front-End Development',
                    'Back-End Web Development',
                    'Cloud Computing',
                    'AWS',
                    'React.js',
                    'Node.js',
                    'MongoDB',
                    'GitHub Actions',
                    'NodeMailer',
                    'Email Integration',
                    'Contact Form Development'
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm text-orange-200 bg-orange-900 rounded-full bg-opacity-40"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 mt-6 rounded-lg bg-gray-800/30">
                <h3 className="mb-3 text-lg font-semibold text-orange-500">Project Links</h3>
                <div className="flex flex-col gap-3">
                  <LinkPreview 
                    url="https://zenitech.in/"
                    title="Zenitech Solutions Website"
                  />
                  <LinkPreview 
                    url="https://haider.zenitech.in/"
                    title="Zenitech Solutions Admin Portfolio"
                  />
                </div>
              </div>
            </section>
          </BentoTilt>
        </div>
      </div>
    </div>
  );
};

export default Internship;
