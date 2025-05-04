import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroSectionRef = useRef(null);

  useGSAP(() => {
    // Setting up the clip path animation for the hero frame
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: 0.5, // Smooth out the scrub effect
      },
    });

    // Enhanced text animations
    gsap.from(".hero-text-animation", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });

    // Background image animation
    gsap.fromTo(
      ".bg-image-overlay",
      {
        opacity: 0,
        scale: 1.1,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
  }, []);

  useEffect(() => {
    // Preload image with high priority
    const img = new Image();
    img.src = '/img/Xander.jpg';
    img.loading = "eager";
    img.fetchPriority = "high";
  }, []);

  return (
    <section id="home" className="relative w-screen h-screen overflow-x-hidden">
      <div className="relative w-screen h-full overflow-x-hidden">
        <div
          id="hero-frame"
          ref={heroSectionRef}
          className="relative z-10 w-full h-full overflow-hidden bg-black rounded-lg"
        >
          {/* Background Image Container */}
          <div
            className="absolute inset-0 transition-opacity duration-500 opacity-100 bg-image-overlay"
            style={{
              backgroundImage: `url('/img/Xander.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.01)',
            }}
          />
          
          {/* Overlay */}
          <div className="absolute top-0 left-0 z-40 flex items-center justify-start w-full h-full bg-black/50">
            <div className="px-5 text-left sm:px-10">
              {/* Text Content */}
              <h2 className="text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl hero-text-animation">
                Hey I'm
                <h1 className="text-blue-100 special-font hero-heading hero-text-animation">
                  S<b>a</b>y<b>a</b>n D<b>a</b>s
                </h1>
              </h2> 

              <h2 className="text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl hero-text-animation">
                <span className="text-orange-400">Cloud Computing</span> & Full Stack Developer
              </h2>

              <p className="flex flex-wrap gap-2 text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl hero-text-animation">
                Dedicated technologist with strong expertise in
                <span className="font-medium text-orange-400"> Java, C++, and C</span>, and a solid foundation in
                <span className="font-medium text-orange-400"> Data Structures & Algorithms.</span>
                Proven experience in
                <span className="font-medium text-orange-400"> Full Stack Web Development</span> and
                <span className="font-medium text-orange-400"> Cloud-Native Solutions</span>, delivering scalable and high-performance applications.
              </p>

              <div className="flex gap-4 mt-4">
                <a
                  href="#contact"
                  className="px-6 py-3 font-semibold text-white transition-all duration-300 transform bg-orange-600 rounded-lg sm:px-8 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                >
                  Hire Me
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 font-semibold text-orange-600 transition-all duration-300 transform bg-transparent border-2 border-orange-500 rounded-lg sm:px-8 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
                >
                  View Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Icons - Positioned at the center bottom */}
      <div className="absolute z-50 flex gap-6 text-2xl text-gray-400 transform -translate-x-1/2 bottom-5 left-1/2">
        <a
          href="https://www.instagram.com/__sdx__007/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-orange-500"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.facebook.com/offcsayantubecode"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-orange-500"
          aria-label="Facebook"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/sayandas2228056"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-orange-500"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/sayan-das-b99810213/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-orange-500"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 0.5;
          }
          100% {
            transform: translateY(-100vh) translateX(50px);
            opacity: 0;
          }
        }
        .social-icon {
          color: #ffffff;
          transition: color 0.3s ease;
        }
        .social-icon:hover {
          color: #ff7f50;
        }
      `}</style>
    </section>
  );
};

export default Hero;
