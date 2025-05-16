// my-app/components/ExperienceCard.jsx

import React from 'react';

/**
 * ExperienceCard component for displaying work experience
 * 
 * @param {Object} props - Component props
 * @param {Object} props.experience - Experience data
 * @param {number} props.index - Index for animation delay
 * @returns {JSX.Element} ExperienceCard component
 */
export default function ExperienceCard({ experience, index }) {
  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${index * 200}`;
  
  return (
    <div className={`mb-6 last:mb-0 animate-fade-in ${animationDelay}`}>
      <h3 className="text-lg font-semibold text-primary">
        {experience.title}
      </h3>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
        <p className="text-muted-foreground font-medium">
          {experience.company}
          {experience.subtitle && (
            <span className="text-sm text-muted-foreground/80 ml-2">
              ({experience.subtitle})
            </span>
          )}
        </p>
        <p className="text-sm text-accent font-medium">
          {experience.period}
        </p>
      </div>
      <ul className="list-disc list-inside mt-2 space-y-1">
        {experience.responsibilities.map((resp, i) => (
          <li key={i} className="text-sm text-muted-foreground">
            {resp}
          </li>
        ))}
      </ul>
    </div>
  );
}
