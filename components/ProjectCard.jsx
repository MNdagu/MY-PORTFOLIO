// my-app/components/ProjectCard.jsx

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { truncateText } from "@/lib/utils";

/**
 * ProjectCard component for displaying project information
 *
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data
 * @param {number} props.index - Index for animation delay
 * @returns {JSX.Element} ProjectCard component
 */
export default function ProjectCard({ project, index }) {
  // Calculate animation delay based on index
  const animationDelay = `animation-delay-${(index % 3) * 200}`;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      aria-label={`View project: ${project.title}`}
    >
      <Card className="h-full bg-card hover:shadow-lg transition-shadow cursor-pointer animate-fade-in overflow-hidden">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl font-semibold text-primary">
            {project.title}
          </CardTitle>
          {project.subtitle && (
            <CardDescription className="text-sm font-medium text-muted-foreground">
              {project.subtitle}
            </CardDescription>
          )}
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            {truncateText(project.description, 150)}
          </p>
          <div className="flex flex-wrap gap-2">
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
        </CardContent>
      </Card>
    </a>
  );
}
