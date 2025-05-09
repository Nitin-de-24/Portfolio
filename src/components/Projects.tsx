import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
import { PROJECTS } from '../constants';

type ProjectFilter = 'all' | string;

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<ProjectFilter>('all');
  
  // Extract unique tags from all projects
  const allTags = [...new Set(PROJECTS.flatMap(project => project.tags))];
  
  const filteredProjects = filter === 'all'
    ? PROJECTS
    : PROJECTS.filter(project => project.tags.includes(filter));
  
  return (
    <section id="projects" className="py-20 bg-[#0a0a0a]">
      <Container>
        <SectionHeading 
          title="My Projects" 
          subtitle="Showcasing my recent work and creations"
          align="center"
        />
        
        {/* Project Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setFilter('all')}
            className={`
              px-4 py-2 rounded-full text-sm font-medium transition-all 
              ${filter === 'all' 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
            `}
          >
            All
          </button>
          
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-all 
                ${filter === tag 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
              `}
            >
              {tag}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map(project => (
            <Card 
              key={project.id} 
              hoverable 
              className="flex flex-col h-full transform transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-56 object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="bg-blue-500/10 text-blue-400 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.codeUrl && (
                    <a 
                      href={project.codeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;