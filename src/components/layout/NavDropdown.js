'use client';

/**
 * NavDropdown component for the desktop header navigation.
 * Requirements:
 * - Opens on click
 * - Opens on hover with a short delay (180ms hover intent)
 * - Supports keyboard navigation with Up/Down arrow keys
 * - Closes with Escape and returns focus to trigger
 * - Closes when focus moves outside the dropdown
 * Client component because mouseover delays, keyboard event traps, and focus handling require browser APIs.
 */

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SERVICES } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  // Close dropdown on route change during render (React recommended pattern)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsOpen(false);
  }

  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);
  const hoverTimerRef = useRef(null);

  // Active state: Services link remains highlighted on any /services route
  const isActive = pathname === '/services' || pathname.startsWith('/services/');

  const handleMouseEnter = () => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) return;
    clearTimeout(hoverTimerRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (typeof window === 'undefined') return;
    if (!window.matchMedia('(hover: hover) and (min-width: 1024px)').matches) return;
    // 180ms delay prevents accidental closures when cursor briefly slips off the menu
    hoverTimerRef.current = setTimeout(() => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(document.activeElement)
      ) {
        setIsOpen(false);
      }
    }, 180);
  };

  const handleTriggerClick = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      if (isOpen) {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
      return;
    }

    if (['ArrowDown', 'ArrowUp'].includes(e.key)) {
      if (!dropdownRef.current) return;
      e.preventDefault();
      const items = Array.from(
        dropdownRef.current.querySelectorAll('[data-dropdown-item]')
      );
      if (!items.length) return;

      if (!isOpen) {
        setIsOpen(true);
        items[e.key === 'ArrowDown' ? 0 : items.length - 1]?.focus();
        return;
      }

      const currentIndex = items.indexOf(document.activeElement);
      if (currentIndex === -1) {
        items[e.key === 'ArrowDown' ? 0 : items.length - 1]?.focus();
      } else {
        const nextIndex =
          (currentIndex + (e.key === 'ArrowDown' ? 1 : -1) + items.length) %
          items.length;
        items[nextIndex]?.focus();
      }
    }
  };

  // Close dropdown when focus moves outside
  const handleBlur = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget)
    ) {
      setIsOpen(false);
    }
  };

  return (
    <li
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      onBlur={handleBlur}
      data-dropdown
    >
      <button
        ref={triggerRef}
        type="button"
        className="nav-link"
        aria-expanded={isOpen}
        aria-controls="svc-menu"
        aria-current={isActive ? 'page' : undefined}
        onClick={handleTriggerClick}
        data-dropdown-trigger
      >
        <span>Services</span>
        <Icon
          name="chevDown"
          className={cn(
            'w-4 h-4 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        id="svc-menu"
        className={cn(
          'dropdown-panel absolute left-0 top-[calc(100%+8px)] w-[340px] bg-white rounded-2xl border border-[#D6E5E2] shadow-lift p-2'
        )}
        data-open={isOpen ? 'true' : 'false'}
        data-dropdown-panel
      >
        <ul>
          <li>
            <Link
              href="/services"
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-3 hover:bg-aqua-50 font-semibold text-teal',
                pathname === '/services' && 'bg-aqua-50'
              )}
              aria-current={pathname === '/services' ? 'page' : undefined}
              data-dropdown-item
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
            >
              <span className="w-9 h-9 rounded-lg bg-teal text-white grid place-items-center flex-none">
                <Icon name="grid" className="w-[18px] h-[18px]" />
              </span>
              <span>All Services</span>
            </Link>
          </li>
          {SERVICES.map((s) => {
            const isSubActive = pathname === `/services/${s.slug}`;
            return (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className={cn(
                    'flex items-center gap-3 rounded-xl px-3 py-2.5 hover:bg-aqua-50',
                    isSubActive && 'bg-aqua-50'
                  )}
                  aria-current={isSubActive ? 'page' : undefined}
                  data-dropdown-item
                  tabIndex={isOpen ? 0 : -1}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="w-9 h-9 rounded-lg bg-aqua text-teal grid place-items-center flex-none">
                    <Icon name={s.icon} className="w-[18px] h-[18px]" />
                  </span>
                  <span>
                    <span className="block font-semibold text-teal text-[0.95rem]">
                      {s.navLabel}
                    </span>
                    <span className="block text-[0.82rem] text-charcoal-70 leading-snug">
                      {s.problem}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
}
