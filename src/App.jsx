import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar.jsx";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingAnimation from "./components/LoadingAnimation";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a short loading period for fast, optimized experience
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <main className="overflow-x-hidden relative w-screen min-h-screen">
        <LoadingAnimation />
      </main>
    );
  }

  return (
    <main className="overflow-x-hidden relative w-screen min-h-screen">
      <NavBar />
      <Hero />
      <About />
      
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
