/**
 * Logo component for Oakline Plumbing Co.
 * Server Component with SVG pipe emblem and wordmark.
 */

import React from 'react';

/**
 * @param {Object} props
 * @param {boolean} [props.dark=false] Whether rendering on a dark background.
 */
export function Logo({ dark = false }) {
  const word = dark ? '#FFFFFF' : '#153B4A';
  const sub = dark ? 'rgba(255,255,255,.72)' : '#4A5C63';

  return (
    <span className="inline-flex items-center gap-2.5">
      <svg aria-hidden="true" viewBox="0 0 40 40" className="w-9 h-9 flex-none">
        <rect
          width="40"
          height="40"
          rx="11"
          fill={dark ? '#1C4C5E' : '#153B4A'}
        />
        <path
          d="M11 28V17a6 6 0 0 1 6-6h12"
          fill="none"
          stroke="#E8A35D"
          strokeWidth="3.6"
          strokeLinecap="round"
        />
        <circle
          cx="26"
          cy="25"
          r="4.4"
          fill="none"
          stroke="#fff"
          strokeWidth="2.8"
        />
      </svg>
      <span className="leading-none">
        <span
          className="block font-display font-extrabold text-[1.15rem] tracking-[-0.02em]"
          style={{ color: word }}
        >
          Oakline
        </span>
        <span
          className="block text-[0.72rem] font-medium mt-0.5"
          style={{ color: sub }}
        >
          Plumbing Co.
        </span>
      </span>
    </span>
  );
}
