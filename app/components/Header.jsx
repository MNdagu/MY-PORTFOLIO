"use client";

import Link from "next/link";
import { Briefcase, User, FileText, Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    {
      href: "#projects",
      label: "Projects",
      icon: <Briefcase className="h-4 w-4" />,
    },
    { href: "#about", label: "About", icon: <User className="h-4 w-4" /> },
    {
      href: "#resume",
      label: "Resume",
      icon: <FileText className="h-4 w-4" />,
    },
    { href: "#contact", label: "Contact", icon: <Mail className="h-4 w-4" /> },
  ];

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "bg-background/90 border-border/50 py-2"
          : "bg-background/50 border-transparent py-4"
      }`}
    >
      <nav className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl md:text-2xl font-bold text-primary hover:text-primary/90 transition-colors"
          style={{
            lineHeight: "1.8",
            paddingBottom: "0.25rem",
            display: "inline-block",
          }}
          aria-label="Mark Ndagu - Home"
        >
          Mark<span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8 mr-4">
            {navLinks.map((link) => (
              <li key={link.href} className="group">
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-foreground hover:text-primary transition-colors py-2"
                  onClick={closeMenu}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-primary"></span>
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </Button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/95 backdrop-blur-md z-40 animate-fade-in">
            <nav className="container mx-auto px-4 py-8">
              <ul className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <li key={link.href} className="animate-slide-in-left">
                    <Link
                      href={link.href}
                      className="flex items-center gap-3 text-lg text-foreground hover:text-primary transition-colors py-2"
                      onClick={closeMenu}
                    >
                      {link.icon}
                      <span>{link.label}</span>
                    </Link>
                  </li>
                ))}
                <li className="animate-slide-in-left pt-4 flex justify-between items-center">
                  <span className="text-lg text-foreground">Theme</span>
                  <ThemeToggle />
                </li>
              </ul>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
}
