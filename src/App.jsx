import React from "react";
import { motion } from "framer-motion";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Expertise from "./Components/Expertise";
import BgImage from "./Pics/img1.jpg"; // 🖼️ Import the background image

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: "easeInOut" } },
};

const App = () => {
  return (
    <div className="relative min-h-screen scroll-smooth">
      {/* Background Image */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center -z-10"
        style={{ backgroundImage: `url(${BgImage})` }}
      ></div>

      {/* Dark Overlay for Contrast */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/40 -z-10"></div>

      <div className="relative z-10">
        <Header />

        {/* Sections with Smooth Fade-In Animation */}
        <motion.section
          id="home"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Hero />
        </motion.section>

        <motion.section
          id="about"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <About />
        </motion.section>

        <motion.section
          id="projects"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Projects />
        </motion.section>

        <motion.section
          id="technologies"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Technologies />
        </motion.section>

        <motion.section
          id="expertise"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Expertise />
        </motion.section>

        <motion.section
          id="contact"
          className="py-10"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default App;
