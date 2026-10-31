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
import { CallButton } from '@/components/ui/CallButton';
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
        <div className="wrap h-[72px] flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex-none rounded-lg focus-visible:outline-offset-2"
            aria-label="Oakline Plumbing Co. home"
          >
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {NAV.map((n) => {
                if (n.dropdown) {
                  return <NavDropdown key={n.label} />;
                }

                const isActive =
                  pathname === n.path ||
                  (n.path !== '/' && pathname.startsWith(n.path + '/'));

                return (
                  <li key={n.path}>
                    <Link
                      href={n.path}
                      className={cn(
                        'nav-link',
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
          <div className="flex items-center gap-2">
            {/* Desktop large: text phone trigger */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal(e.currentTarget);
              }}
              className="hidden xl:inline-flex items-center gap-2 h-11 px-3 rounded-xl font-semibold text-teal hover:bg-aqua/60 transition-colors"
            >
              <Icon name="phone" className="w-[18px] h-[18px] text-copper-600" />
              <span>{SITE.phoneDisplay}</span>
            </button>

            {/* Desktop medium: compact Call button */}
            <CallButton
              label="Call"
              size="sm"
              variant="secondary"
              className="hidden lg:inline-flex xl:hidden"
            />

            {/* Primary Request Service button */}
            <Button
              label="Request Service"
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            />

            {/* Mobile/Tablet phone icon button */}
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                openModal(e.currentTarget);
              }}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl border border-[#B9D3D0] bg-white text-teal"
              aria-label="Call Oakline (demo number)"
            >
              <Icon name="phone" className="w-5 h-5" />
            </button>

            {/* Mobile menu hamburger toggle */}
            <button
              ref={mobileMenuTriggerRef}
              type="button"
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-teal text-white"
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Icon name="menu" className="w-5 h-5" />
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
