// my-app/components/EducationCard.jsx

import React from 'react';

/**
 * EducationCard component for displaying education information
 * 
 * @param {Object} props - Component props
 * @param {Object} props.education - Education data
 * @param {number} props.index - Index for animation delay
 * @returns {JSX.Element} EducationCard component
 */
export default function EducationCard({ education, index }) {
  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${index * 200}`;
  
  return (
    <div className={`mb-6 last:mb-0 animate-fade-in ${animationDelay}`}>
      <h3 className="text-lg font-semibold text-primary">
        {education.institution}
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <p className="text-muted-foreground font-medium">
          {education.degree}
        </p>
        <p className="text-sm text-accent font-medium">
          {education.period}
        </p>
      </div>
      {education.description && (
        <p className="text-sm text-muted-foreground mt-2">
          {education.description}
        </p>
      )}
    </div>
  );
}
