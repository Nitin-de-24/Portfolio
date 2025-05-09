import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const hoverClasses = hoverable 
    ? 'transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer' 
    : '';

  return (
    <div 
      className={`
        bg-gray-900 
        border border-gray-800 
        rounded-xl 
        overflow-hidden 
        shadow-lg 
        ${hoverClasses} 
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;