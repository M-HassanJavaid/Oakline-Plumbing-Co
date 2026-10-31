'use client';

/**
 * CallModal component renders the accessible explanation modal triggered by all Call actions.
 * Honesty safeguard: Explains that phone buttons in this portfolio concept do not place calls.
 * Requirements:
 * - Traps focus while open
 * - Closes on Escape key or backdrop click
 * - Locks page scrolling while open
 * - Restores focus to the triggering element upon closing
 * Client component because DOM focus trapping, keyboard handlers, and context integration require browser execution.
 */

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useCallModal } from '@/context/CallModalContext';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { Notice } from '@/components/ui/Notice';
import { Button } from '@/components/ui/Button';
import { SITE } from '@/data/site';

export function CallModal() {
  const { isOpen, closeModal } = useCallModal();
  const cardRef = useRef(null);
  const initialCloseBtnRef = useRef(null);

  // Lock body scroll and set initial focus on open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        initialCloseBtnRef.current?.focus();
      }, 40);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle Escape key and focus trapping
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal(true);
        return;
      }

      if (e.key === 'Tab') {
        if (!cardRef.current) return;
        const focusables = Array.from(
          cardRef.current.querySelectorAll(
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

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <div
      id="call-modal"
      className="modal fixed inset-0 z-[60] grid place-items-center p-4"
      data-open={isOpen ? 'true' : 'false'}
      role="dialog"
      aria-modal="true"
      aria-labelledby="callTitle"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-teal-800/55"
        onClick={() => closeModal(true)}
        aria-hidden="true"
      />

      {/* Modal card */}
      <div
        ref={cardRef}
        className="modal-card relative w-full max-w-md bg-white rounded-[22px] shadow-2xl p-6 md:p-8"
      >
        <button
          ref={initialCloseBtnRef}
          type="button"
          className="absolute right-4 top-4 w-11 h-11 grid place-items-center rounded-xl hover:bg-soft text-teal"
          aria-label="Close"
          onClick={() => closeModal(true)}
        >
          <Icon name="x" className="w-5 h-5" />
        </button>

        <IconBadge name="phone" tone="copper" />
        <h2 id="callTitle" className="h3 text-[1.35rem] mt-4">
          Call the team
        </h2>
        <p className="mt-2 text-charcoal-70">
          Calling is the best option for urgent issues like active leaks, backups, or no water.
        </p>

        <div className="mt-5 rounded-2xl bg-aqua-50 border border-[#B9D3D0] p-5">
          <p className="font-display font-extrabold text-2xl text-teal tracking-tight">
            {SITE.phoneDisplay}
          </p>
          <p className="text-sm text-charcoal-70 mt-1">{SITE.phoneNote}</p>
          <p className="text-sm text-charcoal-70 mt-3 flex gap-2">
            <Icon name="clock" className="w-4 h-4 mt-0.5 text-teal flex-none" />
            <span>{SITE.hoursNote}</span>
          </p>
        </div>

        <Notice
          tone="warn"
          className="mt-4"
          body="This is a fictional business. In a live site, this button would dial the verified number directly instead of opening this panel."
        />

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button
            label="Send a request instead"
            href="/contact"
            variant="primary"
            className="flex-1"
            onClick={() => closeModal(false)}
          />
          <button
            type="button"
            className="btn btn-secondary flex-1"
            onClick={() => closeModal(true)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
