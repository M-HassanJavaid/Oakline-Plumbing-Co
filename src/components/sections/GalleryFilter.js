'use client';

/**
 * GalleryFilter component for the Reviews & Projects gallery.
 * Allows filtering placeholders by service category and announces filter state changes to screen readers.
 * Client component because filter state and aria-live announcements require browser state.
 */

import React, { useState } from 'react';
import { SERVICES, SVC } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

export function GalleryFilter() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [announcement, setAnnouncement] = useState('');

  const handleFilter = (filterKey) => {
    setActiveFilter(filterKey);
    const label = filterKey === 'all' ? 'all' : SVC[filterKey]?.navLabel;
    setAnnouncement(`Showing ${label} projects`);
  };

  const galleryItems = SERVICES.flatMap((s) => [
    { cat: s.slug, navLabel: s.navLabel, icon: 'camera', type: 'before photo' },
    { cat: s.slug, navLabel: s.navLabel, icon: s.icon, type: 'after photo' },
  ]);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2.5 mb-6"
        role="group"
        aria-label="Filter gallery by service"
      >
        <button
          type="button"
          className={cn('chip', activeFilter === 'all' && 'bg-teal !border-teal text-white')}
          aria-pressed={activeFilter === 'all'}
          onClick={() => handleFilter('all')}
        >
          All
        </button>
        {SERVICES.map((s) => (
          <button
            key={s.slug}
            type="button"
            className={cn('chip', activeFilter === s.slug && 'bg-teal !border-teal text-white')}
            aria-pressed={activeFilter === s.slug}
            onClick={() => handleFilter(s.slug)}
          >
            {s.navLabel}
          </button>
        ))}
      </div>

      <div className="sr-only" aria-live="polite">
        {announcement}
      </div>

      <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryItems.map((item, idx) => {
          const isVisible = activeFilter === 'all' || activeFilter === item.cat;
          if (!isVisible) return null;

          return (
            <li key={idx} data-cat={item.cat}>
              <div className="proof-slot aspect-square grid place-items-center text-teal">
                <Icon name={item.icon} className="w-8 h-8" />
              </div>
              <p className="text-sm mt-2">
                <span className="font-semibold text-teal">{item.navLabel}</span>{' '}
                <span className="text-charcoal-70 capitalize">{item.type}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
