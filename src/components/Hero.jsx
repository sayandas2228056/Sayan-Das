import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroSectionRef = useRef(null);
  const imageWrapperRef = useRef(null);
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

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
        scrub: true,
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

    // Background image animation when loaded
    if (bgImageLoaded) {
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
    }
  }, [bgImageLoaded]);

  useEffect(() => {
    // Preload image with priority
    const img = new Image();
    img.src = '/img/Xander.jpg';
    
    // Add loading priority
    img.loading = "eager";
    img.fetchPriority = "high";
    
    // Handle successful load
    img.onload = () => {
      setBgImageLoaded(true);
    };

    // Clean up
    return () => {
      img.onload = null;
    };
  }, []);

  return (
    <section id="home" className="relative w-screen overflow-x-hidden h-dvh">
      <div className="relative w-screen overflow-x-hidden h-dvh">
        <div
          id="hero-frame"
          ref={heroSectionRef}
          className="relative z-10 w-screen overflow-hidden bg-black rounded-lg h-dvh"
        >
          {/* Background Image Container */}
          <div
            ref={imageWrapperRef}
            className={`absolute inset-0 bg-image-overlay transition-opacity duration-500 ${
              bgImageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url('${
                bgImageLoaded ? '/img/Xander.jpg' : '/img/placeholder.jpg'
              }')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              transform: 'scale(1.01)', // Slight scale to prevent white edges during animation
            }}
          />

          {/* Overlay */}
          <div className="absolute top-0 left-0 z-40 size-full bg-black/50">
            {/* Rest of your content remains the same */}
            <div className="flex flex-col items-center gap-8 px-5 mt-24 sm:px-10 lg:flex-row lg:gap-16">
              {/* Your existing content */}
            </div>

            {/* Social Icons */}
            <div className="absolute flex gap-6 text-2xl text-gray-400 transform -translate-x-1/2 bottom-5 left-1/2">
              {/* Your existing social icons */}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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