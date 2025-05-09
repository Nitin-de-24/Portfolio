import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    // Update page title
    document.title = "Nitin Desai | Portfolio";

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="mb-4 relative w-24 h-24">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-500/20 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-l-blue-500 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-white text-xl font-bold relative">
            <span className="text-blue-500">n</span>itin
            <span className="absolute -right-6 h-6 w-1 bg-blue-500 animate-blink"></span>
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0a0a0a] text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;