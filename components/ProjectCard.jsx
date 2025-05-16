"use client";

// my-app/components/ProjectCard.jsx
import React, { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { truncateText } from "@/lib/utils";
import { ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

/**
 * ProjectCard component for displaying project information
 *
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data
 * @param {number} props.index - Index for staggered animation effect
 * @returns {JSX.Element} ProjectCard component
 */
export default function ProjectCard({ project, index }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = project.description.length > 150;

  const toggleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="group relative">
      <Card
        className={`${
          isExpanded ? "h-auto" : "h-full"
        } bg-card hover:shadow-lg transition-all duration-300 animate-fade-in animation-delay-${
          (index % 3) * 200
        } overflow-hidden relative z-0`}
      >
        <CardHeader className="pb-2 relative">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold text-primary">
                {project.title}
              </CardTitle>
              {project.subtitle && (
                <CardDescription className="text-sm font-medium text-muted-foreground mt-1">
                  {project.subtitle}
                </CardDescription>
              )}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors p-1.5 rounded-full hover:bg-primary/10 flex items-center justify-center border border-primary/20 hover:border-primary/50"
              aria-label={`View project: ${project.title}`}
              title="View Project"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col h-full">
          <div className="flex-grow">
            <div className="mb-4">
              <p
                id={`project-description-${project.id}`}
                className={`text-sm text-muted-foreground ${
                  isExpanded ? "transition-all duration-300" : ""
                }`}
              >
                {isExpanded
                  ? project.description
                  : shouldTruncate
                  ? truncateText(project.description, 150)
                  : project.description}
              </p>

              {shouldTruncate && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="mt-2 p-0 h-auto text-primary hover:text-primary/80 hover:bg-transparent"
                  onClick={toggleExpand}
                  aria-expanded={isExpanded}
                  aria-controls={`project-description-${project.id}`}
                >
                  {isExpanded ? (
                    <span className="flex items-center text-xs">
                      See Less <ChevronUp className="ml-1 h-3 w-3" />
                    </span>
                  ) : (
                    <span className="flex items-center text-xs">
                      Read More <ChevronDown className="ml-1 h-3 w-3" />
                    </span>
                  )}
                </Button>
              )}
            </div>

            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="outline"
                  className="bg-accent/10 text-accent-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
