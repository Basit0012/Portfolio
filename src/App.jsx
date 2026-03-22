import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Gaming from './components/Gaming';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="w-full relative z-10 text-[#f0f4f8]">
      <Navbar />
      
      <main className="w-full mt-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Gaming />
        <Experience />
        <Achievements />
        <Education />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
