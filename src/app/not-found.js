/**
 * Custom 404 Not Found page for Pathmaker Plumbing.
 * Server Component matching the prototype's broken pipe motif and navigation links.
 */

import React from 'react';
import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'Page Not Found | Pathmaker Plumbing Charlotte',
  description: 'This page could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="page-enter">
      <section className="section">
        <div className="wrap max-w-2xl text-center">
          {/* Broken pipe SVG illustration */}
          <svg
            aria-hidden="true"
            viewBox="0 0 120 80"
            className="w-40 mx-auto text-teal"
            fill="none"
            strokeLinecap="round"
          >
            <path
              d="M6 60h30a10 10 0 0 0 10-10V30a10 10 0 0 1 10-10h14"
              stroke="currentColor"
              strokeWidth="8"
            />
            <path d="M88 20h26" stroke="#E8A35D" strokeWidth="8" />
            <path
              d="M78 14v12M84 30l4 4M84 10l4-4"
              stroke="#E8A35D"
              strokeWidth="3"
            />
          </svg>

          <h1 className="h1-page mt-8" tabIndex={-1} data-page-h1>
            We Couldn’t Find That Page
          </h1>
          <p className="lede mt-4">
            The link may be out of date, or the address may have a typo. These pages will get you back on track.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button label="View Services" href="/services" />
            <Button label="Home" href="/" variant="secondary" />
            <Button label="Contact" href="/contact" variant="secondary" />
          </div>
        </div>
      </section>
    </div>
  );
}
