import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Button from './ui/Button';
import Container from './ui/Container';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative bg-[#0a0a0a] overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-[-300px] right-[-200px] w-[600px] h-[600px] rounded-full bg-blue-600/20 blur-[120px] z-0"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] rounded-full bg-blue-800/10 blur-[100px] z-0"></div>
      
      {/* Content */}
      <Container className="relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block">
            <span className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium border border-blue-500/20">
              Full-Stack Developer
            </span>
          </div>
          
          <h1
            className={`text-5xl md:text-7xl font-bold text-white mb-6 transition-opacity duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Hello, I'm <span className="text-blue-500">Nitin Desai</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-12 leading-relaxed">
            I build exceptional digital experiences that inspire and connect through clean code and modern design.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button onClick={scrollToProjects} size="lg">
              View My Work
            </Button>
            <Button onClick={scrollToContact} variant="outline" size="lg">
              Contact Me
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
        <ChevronDown className="text-gray-400" size={24} />
      </div>
    </section>
  );
};

export default Hero;