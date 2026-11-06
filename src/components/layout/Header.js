'use client';

/**
 * Header component for primary site branding, navigation, and persistent call actions.
 * Client component because mobile menu trigger and responsive drawer integration need client state.
 */

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NavDropdown } from './NavDropdown';
import { MobileMenu } from './MobileMenu';
import { NAV, SITE } from '@/data/site';
import { Button } from '@/components/ui/Button';
import { useCallModal } from '@/context/CallModalContext';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuTriggerRef = useRef(null);
  const { openModal } = useCallModal();

  return (
    <>
      <header id="site-header" className="sticky top-0 z-40 bg-soft/95 backdrop-blur border-b border-[#DCE7E5]">
        <div className="wrap h-[72px] flex items-center justify-between gap-2 lg:gap-4">
          <Link
            href="/"
            className="flex-none rounded-lg focus-visible:outline-offset-2"
            aria-label={`${SITE.name} home`}
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:block flex-shrink-0">
            <ul className="flex items-center gap-0.5 xl:gap-1.5">
              {NAV.map((n) => {
                if (n.dropdown) {
                  return <NavDropdown key={n.label} />;
                }

                const isActive =
                  pathname === n.path ||
                  (n.path !== '/' && pathname.startsWith(n.path + '/'));

                return (
                  <li key={n.path} className="flex-shrink-0">
                    <Link
                      href={n.path}
                      className={cn(
                        'nav-link whitespace-nowrap',
                        isActive && 'font-semibold text-teal'
                      )}
                      aria-current={isActive ? 'page' : undefined}
                    >
                      {n.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2 xl:gap-3 flex-shrink-0">
            {/* Desktop: single verified phone action */}
            <a
              href={`tel:${SITE.phoneTel || SITE.phone.tel}`}
              onClick={(e) => {
                if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
                  e.preventDefault();
                  openModal(e.currentTarget);
                }
              }}
              className="hidden lg:inline-flex items-center gap-2 h-11 px-2.5 xl:px-3 rounded-xl font-semibold text-teal hover:bg-aqua/60 transition-colors whitespace-nowrap flex-none"
              aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
            >
              <Icon name="phone" className="w-[18px] h-[18px] text-copper-600 flex-none" />
              <span className="whitespace-nowrap font-bold text-sm xl:text-base tracking-tight">
                {SITE.phoneDisplay}
              </span>
            </a>

            {/* Primary Request Service button */}
            <Button
              label="Request Service"
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex whitespace-nowrap flex-none"
            />

            {/* Mobile/Tablet phone icon button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal(e.currentTarget);
              }}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#B9D3D0] bg-white text-teal flex-none"
              aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
            >
              <Icon name="phone" className="w-5 h-5 flex-none" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              ref={mobileMenuTriggerRef}
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-teal text-white flex-none"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icon name="menu" className="w-5 h-5 flex-none" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        triggerRef={mobileMenuTriggerRef}
      />
    </>
  );
}
