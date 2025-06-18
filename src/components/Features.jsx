import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaGraduationCap } from "react-icons/fa";
import Technologies from "./Technologies";
import AbtBox from "./AbtBox";
import Projects from "./Projects";
import React from "react"; 
import { motion } from "framer-motion";
import { FaCode, FaServer, FaCloud, FaLaptopCode, FaChartLine, FaBrain } from "react-icons/fa";
import Expertise from "./Expertise"
import Internship from "./Internship"
import LiveProject from "./LiveProject"

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="object-cover object-center absolute top-0 left-0 size-full"
      />
      <div className="flex relative z-10 flex-col justify-between p-5 text-blue-50 size-full">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 text-xs max-w-64 md:text-base">{description}</p>
          )}
        </div>

        {isComingSoon && (
          <div
            ref={hoverButtonRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex overflow-hidden relative gap-1 items-center px-5 py-2 text-xs uppercase bg-black rounded-full cursor-pointer border-hsla w-fit text-white/20"
          >
            {/* Radial gradient hover effect */}
            <div
              className="absolute -inset-px opacity-0 transition duration-300 pointer-events-none"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <TiLocationArrow className="relative z-20" />
            <p className="relative z-20">coming soon</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Features = () => (
    <section className="pb-52 bg-black">
      <div className="container px-3 mx-auto md:px-10">
        <div className="container px-3 mx-auto md:px-10">
          <div className="px-5 py-32">
           <AbtBox/>
          </div>
        </div>
        <LiveProject/>
        <Internship/>
        <Projects/>
  
        <h1 className="text-white special-font hero-heading flex-center">
        <b>My</b> <b className='text-orange-600'>Expertise</b>
      </h1>
        <Expertise src="videos/feature-3.mp4" />
        <Technologies/>
    </div>
  </section>
);

export default Features;
