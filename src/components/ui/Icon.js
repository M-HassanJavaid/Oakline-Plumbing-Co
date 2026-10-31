/**
 * Icon component that renders inline SVG paths from the centralized icon registry.
 * Keeps SVGs accessible with role="img" when labeled, or aria-hidden when decorative.
 */

import React from 'react';
import { ICON_PATHS } from '@/data/icons';

/**
 * @param {Object} props
 * @param {string} props.name Key matching ICON_PATHS.
 * @param {string} [props.className='w-5 h-5'] CSS class names.
 * @param {string} [props.label=''] Accessible label for assistive technology.
 */
export function Icon({ name, className = 'w-5 h-5', label = '' }) {
  const pathMarkup = ICON_PATHS[name] || '';

  if (label) {
    return (
      <svg
        role="img"
        aria-label={label}
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        dangerouslySetInnerHTML={{ __html: pathMarkup }}
      />
    );
  }

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      dangerouslySetInnerHTML={{ __html: pathMarkup }}
    />
  );
}
