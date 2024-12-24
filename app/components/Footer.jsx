import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://github.com/MNdagu"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mark-ndagu-2274a8240/"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">LinkedIn</span>
            </a>
            {/* <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
