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
    const loadCriticalResources = async () => {
      try {
        // List of critical resources to preload
        const criticalResources = [
          '/img/Xander.jpg',
          '/img/XanderC.jpg',
          '/img/about.webp',
          '/Logo.jpg',
          '/img/contact-1.webp',
          '/img/contact-2.webp',
          '/img/swordman-partial.webp',
          '/img/swordman.webp',
          '/img/gallery-1.webp',
          '/img/gallery-5.webp',
          '/img/stones.webp',
          '/img/play.svg',
          '/img/SayanImg.jpg'
        ];

        // Preload critical images
        const imagePromises = criticalResources.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(src);
            img.onerror = () => resolve(src); // Don't fail on image errors
            img.src = src;
          });
        });

        // Wait for all critical resources to load with a timeout
        const timeoutPromise = new Promise((resolve) => {
          setTimeout(() => resolve('timeout'), 5000); // 5 second timeout
        });

        await Promise.race([
          Promise.all(imagePromises),
          timeoutPromise
        ]);

        // Additional small delay to ensure smooth transition
        await new Promise(resolve => setTimeout(resolve, 500));

        setContentLoaded(true);
      } catch (error) {
        console.error('Error loading resources:', error);
        // Fallback: show content even if loading fails
        setContentLoaded(true);
      }
    };

    loadCriticalResources();
  }, []);

  return (
    <>
      {!contentLoaded && <LoadingAnimation />}
      {contentLoaded && (
        <main className="overflow-x-hidden relative w-screen min-h-screen">
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
