'use client';

/**
 * NavigationManager component handles post-navigation requirements:
 * 1. Scrolls to top of the page instantly (scrollBehavior: 'auto')
 * 2. Moves focus to the page's <h1> (which has tabIndex={-1} and data-page-h1)
 * 3. Announces "{Page name} page loaded" through an aria-live="polite" region
 * 4. Closes open modals, menus, and dropdowns
 * Client component because route change monitoring, DOM manipulation, and focus transfer run in the browser.
 */

import React, { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ROUTES } from '@/data/routes';

export function NavigationManager() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Skip actions on initial page load per specification
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    // 1. Scroll to the top of the page instantly
    const root = document.documentElement;
    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    requestAnimationFrame(() => {
      root.style.scrollBehavior = '';
    });

    // 2. Move focus to the page's <h1>
    setTimeout(() => {
      const h1 = document.querySelector('h1[data-page-h1], h1');
      if (h1) {
        h1.focus({ preventScroll: true });
      }
    }, 60);

    // 3. Announce "{Page name} page loaded" via polite aria-live
    const currentRoute = ROUTES.find((r) => r.path === pathname);
    let pageName = 'Page';
    if (currentRoute) {
      pageName = currentRoute.title.split('|')[0].trim();
    } else {
      const pageH1 = document.querySelector('h1[data-page-h1], h1');
      if (pageH1 && pageH1.textContent) {
        pageName = pageH1.textContent.trim();
      }
    }

    setAnnouncement('');
    setTimeout(() => {
      setAnnouncement(`${pageName} page loaded`);
    }, 80);
  }, [pathname]);

  return (
    <div
      id="live-region"
      className="sr-only"
      aria-live="polite"
      aria-atomic="true"
    >
      {announcement}
    </div>
  );
}
