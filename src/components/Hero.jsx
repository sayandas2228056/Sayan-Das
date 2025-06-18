import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import photo from "../assets/photo.jpg";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroSectionRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Optimized image preloading with timeout
  useEffect(() => {
    const img = new window.Image();
    const timeoutId = setTimeout(() => {
      setImageLoaded(true); // Fallback if image takes too long
    }, 2000);
    
    img.src = "/img/Xander.jpg";
    img.onload = () => {
      clearTimeout(timeoutId);
      setImageLoaded(true);
    };
    img.onerror = () => {
      clearTimeout(timeoutId);
      setImageError(true);
      setImageLoaded(true); // Still set loaded to show fallback
    };
  }, []);

  // Helper: responsive background image
  const getBgImage = () => {
    if (imageError) return '/img/fallback-bg.jpg';
    return '/img/Xander.jpg';
  };

  useGSAP(() => {
    // Only animate on medium+ screens for performance
    if (window.innerWidth < 640) return;
    
    // Simplified clip-path animation with reduced complexity
    gsap.set("#hero-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    
    // Optimized scroll trigger with reduced scrub complexity
    gsap.from("#hero-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#hero-frame",
        start: "center center",
        end: "bottom center",
        scrub: 0.5, // Reduced scrub for better performance
      },
    });
    
    // Simplified text animation without stagger for faster loading
    gsap.from(".hero-text-animation", {
      y: 30, // Reduced distance
      opacity: 0,
      duration: 0.6, // Faster duration
      ease: "power2.out",
      delay: 0.1, // Minimal delay
    });
  }, []);

  return (
    <section id="home" className="overflow-x-hidden relative w-screen h-dvh">
      <div className="overflow-x-hidden relative w-screen h-dvh">
        <div
          id="hero-frame"
          ref={heroSectionRef}
          className="overflow-hidden relative z-10 w-screen bg-black bg-center bg-cover rounded-lg h-dvh"
        >
          {/* Optimized Background Image with faster transitions */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${imageLoaded ? 'opacity-100 blur-0' : 'opacity-0 blur-lg'}`}
            style={{
              backgroundImage: `url(${getBgImage()})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            aria-label="Background image of Sayan Das on a motorcycle at sunset"
            role="img"
          />
          {/* Simplified placeholder */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
            style={{
              backgroundImage: `url(${getBgImage()})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(10px)', // Reduced blur
              transform: 'scale(1.05)', // Reduced scale
            }}
            aria-hidden="true"
          />

          <div className="absolute top-0 left-0 z-40 size-full bg-black/50">
            <div className="flex flex-col gap-8 justify-center items-center px-5 h-full sm:px-10 lg:flex-row lg:gap-16 lg:justify-between lg:px-20">
              
              {/* Text Content - Left Side */}
              <div className="mt-6 w-full max-w-xl sm:mt-10 lg:w-1/2">
                <h2 className="text-base font-semibold text-gray-300 sm:text-lg md:text-2xl hero-text-animation">
                  Hey I&apos;m
                </h2>
                <h1 className="text-5xl leading-none text-blue-100 special-font hero-heading hero-text-animation sm:text-7xl md:text-8xl lg:text-9xl">
                  S<b>a</b>y<b>a</b>n D<b>a</b>s
                </h1>
                <h2 className="mt-2 text-base font-semibold text-gray-300 sm:text-lg md:text-2xl hero-text-animation">
                  <span className="text-orange-400">Cloud Computing</span> & Full Stack Developer
                </h2>
                <div className="mt-2 w-full hero-text-animation sm:mt-4">
                  <p className="text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
                    Dedicated technologist with strong expertise in
                    <span className="font-medium text-orange-400"> Java, C++, and C</span>, and a solid foundation in
                    <span className="font-medium text-orange-400"> Data Structures & Algorithms</span>. Proven experience in
                    <span className="font-medium text-orange-400"> Full Stack Web Development</span> and
                    <span className="font-medium text-orange-400"> Cloud-Native Solutions</span>, delivering scalable and high-performance applications.
                  </p>
                  <div className="flex flex-col gap-3 mt-4 sm:flex-row sm:gap-4">
                    <a
                      href="#contact"
                      className="px-5 py-2 font-semibold text-center text-white bg-orange-600 rounded-lg transition-all duration-200 transform sm:px-6 sm:py-3 hover:bg-orange-700 hover:shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
                    >
                      Hire Me
                    </a>
                    <a
                      href="#projects"
                      className="px-5 py-2 font-semibold text-center text-orange-600 bg-transparent rounded-lg border-2 border-orange-500 transition-all duration-200 transform sm:px-6 sm:py-3 hover:bg-orange-500/10 hover:shadow-lg hover:shadow-orange-500/20 hover:-translate-y-1"
                    >
                      View Portfolio
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile Image - Right Side */}
              <div className="flex justify-center items-center mt-8 w-full lg:w-1/2 lg:mt-0">
                <div className="relative w-40 h-40 sm:w-64 sm:h-64 md:w-80 md:h-80 hero-text-animation">
                  <div
                    className="overflow-hidden absolute inset-0 rounded-full border-4 shadow-2xl transition-transform duration-200 cursor-pointer border-orange-500/30 shadow-orange-500/20 hover:scale-105 bg-black/10"
                  >
                    <img
                      src={photo}
                      alt="Sayan Das profile portrait"
                      className="object-cover w-full h-full rounded-full transition-transform duration-300 hover:scale-110"
                      loading="eager" // Changed to eager for faster loading
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 animate-pulse pointer-events-none border-orange-500/20"></div>
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="flex absolute bottom-5 left-1/2 gap-4 text-xl text-gray-400 transform -translate-x-1/2 sm:gap-6 sm:text-2xl">
              <a
                href="https://www.instagram.com/__sdx__007/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-orange-500"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/offcsayantubecode"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-orange-500"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="https://github.com/sayandas2228056"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-orange-500"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sayan-das-b99810213/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-orange-500"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  );
};

export default Hero;
