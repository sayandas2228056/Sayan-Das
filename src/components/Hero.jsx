import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef, useState } from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import photo from "../assets/photo.jpg";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroSectionRef = useRef(null);
  const [showContactPopup, setShowContactPopup] = useState(false);

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

    // Animate the text elements
    gsap.from(".hero-text-animation", {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  const contactLinks = [
    { icon: <FaWhatsapp size={24} />, href: "https://wa.me/919876543210", label: "WhatsApp" },
    { icon: <FaEnvelope size={24} />, href: "mailto:offcsayantubecode@gmail.com,sayandas010124@gmail.com", label: "Email" },
    { icon: <FaLinkedin size={24} />, href: "https://www.linkedin.com/in/sayan-das-b99810213/", label: "LinkedIn" },
    { icon: <FaGithub size={24} />, href: "https://github.com/sayandas2228056", label: "GitHub" },
  ];

  return (
    <section id="home" className="relative w-screen overflow-x-hidden h-dvh">
      <div className="relative w-screen overflow-x-hidden h-dvh">
        <div
          id="hero-frame"
          ref={heroSectionRef}
          className="relative z-10 w-screen overflow-hidden bg-black bg-center bg-cover rounded-lg h-dvh"
          style={{ backgroundImage: "url('/img/Xander.jpg')" }}
        >
          <div className="absolute top-0 left-0 z-40 size-full bg-black/50">
            <div className="flex flex-col items-center justify-center h-full gap-8 px-5 sm:px-10 lg:flex-row lg:gap-16 lg:justify-between lg:px-20">
              
              {/* Text Content - Left Side */}
              <div className="w-full mt-10 lg:w-1/2">
                <h2 className="text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl hero-text-animation">
                  Hey I&apos;m
                </h2>
                <h1 className="text-blue-100 special-font hero-heading hero-text-animation">
                  S<b>a</b>y<b>a</b>n D<b>a</b>s
                </h1>

                <h2 className="text-lg font-semibold text-gray-300 sm:text-2xl md:text-3xl hero-text-animation">
                  <span className="text-orange-400">Cloud Computing</span> & Full Stack Developer
                </h2>

                <div className="w-full hero-text-animation">
                  <p className="text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                    Dedicated technologist with strong expertise in
                    <span className="font-medium text-orange-400"> Java, C++, and C</span>, and a solid foundation in
                    <span className="font-medium text-orange-400"> Data Structures & Algorithms</span>. Proven experience in
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

              {/* Profile Image - Right Side */}
              <div className="flex items-center justify-center w-full lg:w-1/2">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 hero-text-animation">
                  <div 
                    className="absolute inset-0 overflow-hidden transition-transform duration-300 border-4 rounded-full shadow-2xl cursor-pointer border-orange-500/30 shadow-orange-500/20 hover:scale-105"
                    onClick={() => setShowContactPopup(!showContactPopup)}
                  >
                    <img
                      src={photo}
                      alt="Sayan Das"
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 border-4 rounded-full animate-pulse border-orange-500/20"></div>

                  {/* Contact Popup */}
                  {showContactPopup && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-black/80 backdrop-blur-sm"></div>
                      <div className="relative z-50 flex flex-col items-center gap-4 p-4">
                        {contactLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-white transition-all duration-300 transform rounded-full bg-orange-500/20 hover:bg-orange-500/40 hover:scale-110"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {link.icon}
                            <span className="text-sm font-medium">{link.label}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Social Icons */}
            <div className="absolute flex gap-6 text-2xl text-gray-400 transform -translate-x-1/2 bottom-5 left-1/2">
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
