// my-app/components/Section.jsx

import React from "react";

/**
 * Reusable Section component for consistent section styling
 *
 * @param {Object} props - Component props
 * @param {string} props.id - Section ID for navigation
 * @param {string} props.title - Section title
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Section content
 * @param {boolean} props.withContainer - Whether to wrap content in a container
 * @param {string} props.titleColor - Color class for the title (default: text-black)
 * @returns {JSX.Element} Section component
 */
export default function Section({
  id,
  title,
  className = "",
  children,
  withContainer = true,
  titleColor = "text-foreground",
}) {
  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      aria-labelledby={`section-title-${id}`}
    >
      {withContainer ? (
        <div className="container mx-auto px-4">
          {title && (
            <h2
              id={`section-title-${id}`}
              className={`text-3xl md:text-4xl font-bold mb-12 text-center ${titleColor} animate-fade-in`}
            >
              {title}
            </h2>
          )}
          {children}
        </div>
      ) : (
        <>
          {title && (
            <div className="container mx-auto px-4">
              <h2
                id={`section-title-${id}`}
                className={`text-3xl md:text-4xl font-bold mb-12 text-center ${titleColor} animate-fade-in`}
              >
                {title}
              </h2>
            </div>
          )}
          {children}
        </>
      )}
    </section>
  );
}
