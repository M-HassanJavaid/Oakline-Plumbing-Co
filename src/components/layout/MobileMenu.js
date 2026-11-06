'use client';

/**
 * MobileMenu component renders the responsive drawer for tablet/mobile viewports.
 * Requirements:
 * - Traps focus while open
 * - Closes on Escape key
 * - Closes after any navigation link is followed
 * - Closes on backdrop click
 * - Locks body scroll while open
 * - Automatically closes if screen resized >= 1024px
 * Client component because focus trapping and drawer transitions run in the browser.
 */

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { NAV, SITE } from '@/data/site';
import { SERVICES } from '@/data/services';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {React.RefObject} props.triggerRef
 */
export function MobileMenu({ isOpen, onClose, triggerRef }) {
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);
  const drawerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close during render when pathname changes
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (isOpen) {
      onClose();
    }
  }

  // Lock body scroll and focus the close button when opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        closeBtnRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Listen for Escape key, Tab navigation trapping, and window resize
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        triggerRef?.current?.focus();
        return;
      }

      if (e.key === 'Tab') {
        if (!drawerRef.current) return;
        const focusables = Array.from(
          drawerRef.current.querySelectorAll(
            'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => el.offsetParent !== null || el === document.activeElement);

        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, onClose, triggerRef]);

  const renderLink = (to, label, isSub = false) => {
    const isCurrent = pathname === to;

    return (
      <li key={to}>
        <Link
          href={to}
          onClick={onClose}
          className={cn(
            'flex items-center justify-between min-h-[52px] px-4 rounded-xl',
            isSub ? 'text-[0.98rem] pl-6' : 'font-semibold text-[1.05rem]',
            isCurrent ? 'bg-aqua text-teal' : 'text-charcoal hover:bg-aqua-50'
          )}
          aria-current={isCurrent ? 'page' : undefined}
        >
          <span>{label}</span>
          <Icon name="chevRight" className="w-4 h-4 text-charcoal-50" />
        </Link>
      </li>
    );
  };

  return (
    <div
      id="mobile-menu"
      className="mobile-menu fixed inset-0 z-50 lg:hidden"
      data-open={isOpen ? 'true' : 'false'}
      role="dialog"
      aria-modal="true"
      aria-label="Site menu"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-teal-800/50"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer sheet */}
      <div
        ref={drawerRef}
        className="sheet absolute right-0 top-0 h-full w-full max-w-[400px] bg-soft shadow-2xl flex flex-col"
      >
        <div className="h-[72px] px-5 flex items-center justify-between border-b border-[#DCE7E5]">
          <Link href="/" onClick={onClose} aria-label={`${SITE.name} home`}>
            <Logo />
          </Link>
          <button
            ref={closeBtnRef}
            type="button"
            className="inline-flex items-center gap-2 h-11 px-3 rounded-xl border border-[#B9D3D0] bg-white font-semibold text-teal"
            onClick={() => {
              onClose();
              triggerRef?.current?.focus();
            }}
          >
            <Icon name="x" className="w-5 h-5" />
            <span>Close</span>
          </button>
        </div>

        <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {renderLink('/', 'Home')}
            {renderLink('/services', 'Services')}
            {SERVICES.map((s) =>
              renderLink(`/services/${s.slug}`, s.navLabel, true)
            )}
            {NAV.filter((n) => !n.dropdown).map((n) =>
              renderLink(n.path, n.label)
            )}
          </ul>
        </nav>

        <div className="p-5 border-t border-[#DCE7E5] space-y-3 mobile-bar">
          <Button
            label="Request Service"
            href="/contact"
            variant="primary"
            className="w-full"
            onClick={onClose}
          />
          <CallButton
            label="Call"
            showNumber
            className="w-full"
            onClick={onClose}
          />
        </div>
      </div>
    </div>
  );
}
