import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  align = 'left',
  className = ''
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-blue-300 text-xl max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="w-24 h-1 bg-blue-500 mt-4 rounded-full mb-2 inline-block"></div>
    </div>
  );
};

export default SectionHeading;