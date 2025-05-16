"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-8 md:py-20 text-center relative overflow-hidden bg-gradient-to-b from-primary/20 to-background">
      <div className="container mx-auto px-4 relative z-10">
        <h1
          className="text-5xl md:text-7xl font-bold mb-10 animate-fade-in bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          style={{ lineHeight: "1.8", paddingBottom: "0.5rem" }}
        >
          Mark Ndagu
        </h1>
        <p className="text-xl md:text-3xl mb-8 text-foreground/80 animate-fade-in animation-delay-200 max-w-2xl mx-auto">
          Fullstack Software Developer
        </p>
        <p className="text-lg mb-10 text-muted-foreground animate-fade-in animation-delay-400 max-w-xl mx-auto">
          I build things for the web.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-600">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-lg"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get in touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 py-3 px-6 rounded-lg"
            onClick={scrollToProjects}
          >
            View my work
          </Button>
        </div>

        <div className="mt-20 animate-bounce">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Scroll down"
            onClick={scrollToProjects}
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </Button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/15 to-accent/20"></div>

        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
      </div>
    </section>
  );
}
