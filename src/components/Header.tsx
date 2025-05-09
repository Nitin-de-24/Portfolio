import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Update header style on scroll
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.getAttribute('id') || '';
        }
      });
      
      if (currentSection !== activeSection && currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <a href="#home" className="text-white text-2xl font-bold">
            <span className="text-blue-500">n</span>itin
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className={`
                  text-base font-medium transition-colors duration-200 relative py-2
                  ${activeSection === item.href.substring(1) ? 'text-blue-500' : 'text-gray-300 hover:text-white'}
                `}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 rounded-full"></span>
                )}
              </a>
            ))}
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-gray-900 rounded-lg shadow-xl">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className={`
                    px-4 py-2 text-base font-medium transition-colors duration-200
                    ${activeSection === item.href.substring(1) ? 'text-blue-500 bg-gray-800' : 'text-gray-300 hover:bg-gray-800 hover:text-white'}
                  `}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;