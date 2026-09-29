import React, { useEffect, useState } from 'react';
import './index.css';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/sections/About/About';
import Experience from './components/sections/Experience/Experience';
import Projects from './components/sections/Projects/Projects';
import Skills from './components/sections/Skills/Skills';
import Education from './components/sections/Education/Education';
import Contact from './components/sections/Contact/Contact';
import Footer from './components/Footer/Footer';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';
import Loader from './components/Loader/Loader';
import BackToTop from './components/BackToTop/BackToTop';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="App">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
