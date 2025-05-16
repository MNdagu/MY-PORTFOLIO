// my-app/app/components/About.jsx
/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import { resumeLink } from "@/data/resume";

export default function About() {
  return (
    <Section id="about" title="About Me" className="bg-primary/15">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg mb-8 text-foreground animate-fade-in animation-delay-200">
          I'm a passionate fullstack developer with experience in JavaScript,
          React, Node.js, and various backend technologies like Python, Flask,
          Django and PostgreSQL. I love creating efficient, scalable, and
          user-friendly web applications that solve real-world problems.
        </p>
        <p className="text-lg mb-8 text-foreground animate-fade-in animation-delay-400">
          My approach to development focuses on writing clean, maintainable code
          and creating intuitive user experiences. I'm constantly learning new
          technologies and best practices to improve my skills.
        </p>
        <Button
          variant="outline"
          className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg animate-fade-in animation-delay-600"
          aria-label="Download my resume"
        >
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            download="Resume-Mark-Ndagu.pdf"
          >
            Download Resume
          </a>
        </Button>
      </div>
    </Section>
  );
}
