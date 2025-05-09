import React, { useState } from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import { SKILLS } from '../constants';

type SkillFilter = 'all' | 'technical' | 'soft' | 'tool';

const Skills: React.FC = () => {
  const [filter, setFilter] = useState<SkillFilter>('all');
  
  const filteredSkills = filter === 'all' 
    ? SKILLS 
    : SKILLS.filter(skill => skill.category === filter);
  
  const handleFilterChange = (newFilter: SkillFilter) => {
    setFilter(newFilter);
  };

  return (
    <section id="skills" className="py-20 bg-gray-950">
      <Container>
        <SectionHeading 
          title="My Skills" 
          subtitle="A comprehensive look at my technical abilities and expertise"
          align="center"
        />
        
        {/* Skill Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {(['all', 'technical', 'soft', 'tool'] as const).map((category) => (
            <button
              key={category}
              onClick={() => handleFilterChange(category)}
              className={`
                px-5 py-2 rounded-full text-sm font-medium transition-all 
                ${filter === category 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-white font-medium text-lg">{skill.name}</h3>
                <span className="text-blue-500 font-semibold">{skill.level}%</span>
              </div>
              
              <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-700 to-blue-400 rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    transition: 'width 1s ease-in-out',
                    animationDelay: `${index * 0.2}s`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;