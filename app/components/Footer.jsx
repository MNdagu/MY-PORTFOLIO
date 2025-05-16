"use client";

import { Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-background border-t border-border/20 pt-8 pb-4">
      <div className="container mx-auto px-4">
        {/* Top section with info and social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div>
            <h3
              className="text-xl font-bold text-primary mb-4"
              style={{ lineHeight: "1.8", paddingBottom: "0.25rem" }}
            >
              Mark Ndagu
            </h3>
            <p className="text-muted-foreground">
              Fullstack developer.
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/MNdagu"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary p-2 rounded-full transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mark-ndagu-2274a8240/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary p-2 rounded-full transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="mailto:ndagumark@gmail.com"
                className="bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary p-2 rounded-full transition-colors"
                aria-label="Email Me"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>


        {/* Bottom section with copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p
            className="text-sm text-muted-foreground mb-4 md:mb-0"
            style={{ lineHeight: "1.8", paddingBottom: "0.25rem" }}
          >
            &copy; {new Date().getFullYear()} Mark Ndagu. All rights reserved.
          </p>

          <div className="flex items-center space-x-4">
            <p className="text-sm text-muted-foreground flex items-center">
              Built with <Heart className="h-3 w-3 text-red-500 mx-1" />
            </p>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full bg-secondary/50 hover:bg-primary/10 text-foreground hover:text-primary"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
