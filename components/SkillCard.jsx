// my-app/components/SkillCard.jsx

import React from 'react';

/**
 * SkillCard component for displaying skills by category
 * 
 * @param {Object} props - Component props
 * @param {Object} props.skillCategory - Skill category data
 * @param {number} props.index - Index for animation delay
 * @returns {JSX.Element} SkillCard component
 */
export default function SkillCard({ skillCategory, index }) {
  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${index * 200}`;
  
  return (
    <div className={`mb-6 last:mb-0 animate-fade-in ${animationDelay}`}>
      <h3 className="text-lg font-semibold text-primary mb-3">
        {skillCategory.category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skillCategory.items.map((skill, i) => (
          <span
            key={i}
            className="bg-accent/10 text-accent-foreground px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
