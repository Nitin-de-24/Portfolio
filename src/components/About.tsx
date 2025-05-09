import React from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#0a0a0a]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image with decorative elements */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg p-1 transform rotate-3 shadow-xl">
              <div className="overflow-hidden rounded-lg bg-gray-900 p-1">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Nitin" 
                  className="rounded-lg transform -rotate-3 hover:rotate-0 transition-transform duration-500 w-full"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-blue-500/10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full"></div>
            <div className="absolute top-1/2 -right-8 w-8 h-8 bg-blue-500 rounded-full"></div>
          </div>
          
          {/* Content */}
          <div>
            <SectionHeading 
              title="About Me" 
              subtitle="Get to know more about who I am"
            />
            
            <div className="space-y-6 text-gray-300">
              <p>
                Welcome to my digital space! I'm Nitin, a passionate full-stack developer with a keen eye for detail and a love for creating seamless user experiences.
              </p>
              
              <p>
                With over 1 year of experience in web development, I've had the privilege of working with various technologies and frameworks to build scalable and efficient solutions. My approach combines technical expertise with creative problem-solving to deliver products that exceed expectations.
              </p>
              
              <p>
                Outside of coding, I enjoy hiking, geo-politics, and experimenting with new cooking recipes. I believe that these diverse interests fuel my creativity and bring fresh perspectives to my technical work.
              </p>
              
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-blue-500 font-semibold mb-2">Education</h3>
                  <p className="text-white font-medium">B.Tech Computer Science</p>
                  <p className="text-gray-400">SRM University, Chennai</p>
                </div>
                
                <div>
                  <h3 className="text-blue-500 font-semibold mb-2">Experience</h3>
                  <p className="text-white font-medium">1+ Years</p>
                  <p className="text-gray-400">Full-Stack Development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;