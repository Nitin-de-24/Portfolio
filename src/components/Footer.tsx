import React from 'react';
import Container from './ui/Container';
import { NAV_ITEMS, SOCIAL_LINKS, SOCIAL_ICONS } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-950 border-t border-gray-800 text-gray-300">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <a href="#home" className="text-white text-2xl font-bold">
                <span className="text-blue-500">n</span>itin
              </a>
              <p className="mt-4 text-gray-400 max-w-xs">
                One line of code at a time.
              </p>
              
              <div className="mt-6 flex space-x-4">
                {SOCIAL_LINKS.map((link) => {
                  const IconComponent = SOCIAL_ICONS[link.icon];
                  return (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                      aria-label={link.platform}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
            
            {/* Navigation */}
            <div>
              <h3 className="text-white font-semibold mb-4">Navigation</h3>
              <nav className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            
            {/* Quick Contact */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get in Touch</h3>
              <div className="space-y-3">
                <p className="text-gray-400">
                  Have a project in mind? Let's bring it to life together.
                </p>
                <a 
                  href="mailto:hello@nitin.dev" 
                  className="text-blue-500 hover:text-blue-400 transition-colors"
                >
                  nitinsdesai10@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="py-6 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            © {currentYear} Nitin Desai. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;