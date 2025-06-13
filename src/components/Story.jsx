import gsap from "gsap";
import { useRef } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import Resume from "./Resume";
import Contact from "./Contact";

const FloatingImage = () => {
  const frameRef = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="w-screen bg-black min-h-dvh text-blue-50">
      <div className="flex flex-col items-center py-10 pb-24 size-full">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Here is My Resume
        </p>

        <AnimatedTitle
          title="Achievements, Certifications"
          containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
        />

        <Resume />

        {/* Spacing to push the next section below the resume */}
        <div />

        {/* Collaboration section with tilt effect */}
        <div
          ref={frameRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="flex justify-center w-full px-6 md:px-20"
        >
          <div className="flex flex-col items-center h-full w-fit md:items-start">
            <p className="max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start">
              Ready to Bring Your Ideas to Life?
            </p>
            <p className="max-w-sm mt-3 text-center font-circular-web text-violet-50 md:text-start">
              Let's discuss how we can work together to create innovative technology solutions for your projects.
            </p>
            <a href="#contact" className="mt-5">
  <Button
    id="realm-btn"
    title="Let's Collaborate"
  />
</a>


          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;
