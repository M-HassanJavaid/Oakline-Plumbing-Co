/**
 * Breadcrumbs component for accessible page hierarchy navigation.
 */

import React from 'react';
import Link from 'next/link';

/**
 * @param {Object} props
 * @param {Array<{ label: string, to?: string }>} props.items List of breadcrumb items.
 */
export function Breadcrumbs({ items = [] }) {
  if (!items.length) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-charcoal-70">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;

          return (
            <li key={i} className="flex items-center gap-1.5">
              {isLast || !it.to ? (
                <span aria-current="page" className="font-semibold text-teal">
                  {it.label}
                </span>
              ) : (
                <>
                  <Link
                    href={it.to}
                    className="hover:text-teal underline-offset-4 hover:underline"
                  >
                    {it.label}
                  </Link>
                  <span aria-hidden="true" className="text-charcoal-50">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
