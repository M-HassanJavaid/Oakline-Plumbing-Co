/**
 * Utility functions for Pathmaker Plumbing.
 */

/**
 * Combines class names, filtering out falsy values.
 * @param  {...(string|boolean|undefined|null)} classes
 * @returns {string} Concatenated class string.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
