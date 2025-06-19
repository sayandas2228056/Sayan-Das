import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar.jsx";
import Features from "./components/Features";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AbtBox from "./components/AbtBox";
import LiveProject from "./components/LiveProject";
import Internship from "./components/Internship";
import Projects from "./components/Projects";

function App() {
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
