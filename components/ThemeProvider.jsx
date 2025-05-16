"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Create a context for the theme
const ThemeContext = createContext({
  theme: "dark",
  setTheme: () => null,
  toggleTheme: () => null,
});

// Custom hook to use the theme context
export const useTheme = () => useContext(ThemeContext);

// Theme provider component
export default function ThemeProvider({ children }) {
  // State to track the current theme
  const [theme, setTheme] = useState("dark");

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Effect to update the DOM when theme changes
  useEffect(() => {
    // Check for saved theme preference or use default
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  // Effect to apply theme class to HTML element and save preference
  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    
    // Save theme preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
