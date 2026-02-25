import Navbar from "./components/Navbar";
import About from "./sections/About";
import { Contact } from "./sections/Contact";
import { Exprience } from "./sections/Exprience";
import Footer from "./sections/Footer";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Testimonials from "./sections/Testimonials";
import "./App.css";
import "./index.css";
import ParticlesBackground from "./components/ParticlesBackground";
import CustomCursor from "./components/CustomCursor";
import IntroAnimation from "./components/IntroAnimation";
import { useState } from "react";

export default function App() {

  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && (
        <IntroAnimation onFinish={() => setIntroDone(true)} />
      )}

      {introDone && (
        <div className="relative gradient">
          <CustomCursor/>
          <ParticlesBackground/>
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Projects/>
          <Exprience/>
          <Testimonials/>
          <Contact/>
          <Footer/>
        </div>
      )}
    </>
  );
}