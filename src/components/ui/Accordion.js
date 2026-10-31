'use client';

/**
 * Accordion component with animated expanding panels and accessible ARIA attributes.
 * Generated IDs use React's useId() for SSR/hydration parity. Links inside collapsed
 * panels are removed from the tab sequence (tabIndex = -1) until opened.
 * Client component because state and keyboard accessibility require browser interaction.
 */

import React, { useState, useId } from 'react';
import Link from 'next/link';
import { Icon } from './Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {Array<{ q: string, a: string, link?: { label: string, to: string } }>} props.items
 * @param {string} [props.className='']
 */
export function Accordion({ items = [], className = '' }) {
  const baseId = useId();
  // Open states keyed by index
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div
      className={cn(
        'divide-y divide-[#CFE0DD] border-y border-[#CFE0DD]',
        className
      )}
    >
      {items.map((it, i) => {
        const isOpen = !!openItems[i];
        const panelId = `${baseId}-panel-${i}`;
        const btnId = `${baseId}-btn-${i}`;

        return (
          <div key={i} className="acc-item" data-open={isOpen ? 'true' : 'false'}>
            <h3>
              <button
                type="button"
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggleItem(i)}
                className="w-full flex items-center justify-between gap-6 text-left py-5 min-h-[64px] font-display font-bold text-[1.07rem] text-teal hover:text-teal-600"
              >
                <span>{it.q}</span>
                <span className="acc-icon flex-none w-9 h-9 rounded-full bg-aqua grid place-items-center text-teal">
                  <Icon name="x" className="w-4 h-4 rotate-45" />
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              className="acc-panel"
            >
              <div>
                <div className="pb-6 pr-12 text-charcoal-70 measure">
                  <p>{it.a}</p>
                  {it.link && (
                    <p className="mt-3">
                      <Link
                        href={it.link.to}
                        className="text-link"
                        tabIndex={isOpen ? 0 : -1}
                      >
                        {it.link.label}
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
