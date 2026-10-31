'use client';

/**
 * MobileBar renders the fixed bottom action bar on mobile and tablet screens.
 * Requirements:
 * - Hidden on /contact and /thank-you
 * - On service pages (/services/[slug]), Request Service links to /contact?service={slug}
 * - Dynamically synchronizes 'has-mobile-bar' class on <body> to ensure adequate bottom padding
 * Client component because route inspection and DOM class synchronization occur in the browser.
 */

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { CallButton } from '@/components/ui/CallButton';
import { Button } from '@/components/ui/Button';

export function MobileBar() {
  const pathname = usePathname();

  const isHidden = pathname === '/contact' || pathname === '/thank-you';

  // Extract service slug if on a /services/[slug] page
  const serviceSlug = pathname.startsWith('/services/')
    ? pathname.replace('/services/', '').split('/')[0]
    : '';

  const requestHref = serviceSlug
    ? `/contact?service=${serviceSlug}`
    : '/contact';

  useEffect(() => {
    if (isHidden) {
      document.body.classList.remove('has-mobile-bar');
    } else {
      document.body.classList.add('has-mobile-bar');
    }

    return () => {
      document.body.classList.remove('has-mobile-bar');
    };
  }, [isHidden]);

  if (isHidden) {
    return null;
  }

  return (
    <div
      id="mobile-bar"
      className="mobile-bar lg:hidden fixed bottom-0 inset-x-0 z-30 bg-white/95 backdrop-blur border-t border-[#D6E5E2] px-4 pt-2.5"
    >
      <div className="grid grid-cols-2 gap-2.5 max-w-md mx-auto">
        <CallButton label="Call" size="sm" />
        <Button label="Request Service" href={requestHref} size="sm" />
      </div>
    </div>
  );
}
