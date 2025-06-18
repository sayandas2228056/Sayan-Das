import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div  className="w-screen min-h-screen">
      <div className="flex relative flex-col gap-5 items-center mt-36 mb-8">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to Sayan's Portfolio
        </p>

        <AnimatedTitle
  title="Designing with <b>purpose</b>. Developing with <b>passion</b>. Delivering with <b>precision</b>."
  containerClass="mt-5 !text-black text-center"
/>

        <div className="about-subtext">
          <p>Full Stack Developer & Cloud Architect</p>
          <p className="text-gray-500">
          I'm Sayan Das, a Computer Science Engineer specializing in full-stack development, scalable web apps, and cloud-based solutions. 
          Currently pursuing my B.Tech at KIIT University, I’m passionate about building innovative and efficient tech.
          </p>
        </div>
      </div>

      <div className="w-screen h-dvh" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.webp"
            alt="Background"
            className="object-cover absolute top-0 left-0 size-full"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
