// my-app/lib/utils.js

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names and merges Tailwind CSS classes
 *
 * @param {...string} inputs - Class names to combine
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Formats a date to a readable string
 *
 * @param {Date|string} date - Date to format
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} - Formatted date
 */
export function formatDate(date, options = {}) {
  const defaultOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    ...options,
  };

  return new Date(date).toLocaleDateString("en-US", defaultOptions);
}

/**
 * Scrolls to an element with smooth behavior
 *
 * @param {string} id - Element ID to scroll to
 */
export function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

/**
 * Truncates text to a specified length
 *
 * @param {string} text - Text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} - Truncated text
 */
export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;

  // Find the last space within the maxLength
  const lastSpaceIndex = text.lastIndexOf(" ", maxLength);

  // If no space found, just cut at maxLength
  const cutoffIndex = lastSpaceIndex > 0 ? lastSpaceIndex : maxLength;

  return text.slice(0, cutoffIndex) + "...";
}
