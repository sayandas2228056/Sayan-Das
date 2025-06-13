import { useState, useEffect } from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar.jsx";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
function App() {
  const [contentLoaded, setContentLoaded] = useState(false);

  useEffect(() => {
    // Simulate content loading
    const timer = setTimeout(() => {
      setContentLoaded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingAnimation />
      {contentLoaded && (
        <main className="relative w-screen min-h-screen overflow-x-hidden">
          <NavBar />
          <Hero />
          <About />
          <Features />
          <Story />
          <Contact />
          <Footer />
        </main>
      )}
    </>
  );
}

export default App;
