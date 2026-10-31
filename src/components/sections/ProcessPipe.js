'use client';

/**
 * ProcessPipe component renders the signature connected pipe sequence.
 * Fills with copper gradient animation once when scrolled into view (using IntersectionObserver),
 * or displays immediately filled if prefers-reduced-motion is active.
 * Client component because viewport intersection observation requires browser APIs.
 */

import React, { useEffect, useRef, useState } from 'react';
import { PROCESS } from '@/data/process';
import { Icon } from '@/components/ui/Icon';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {Array<{ t: string, d: string }>} [props.steps=PROCESS]
 * @param {string} [props.note] Note displayed below the steps.
 */
export function ProcessPipe({
  steps = PROCESS,
  note = 'Example process for this concept. A live site would describe the company’s actual workflow.',
}) {
  const containerRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, show final state immediately without animation
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion || !('IntersectionObserver' in window)) {
      const raf = requestAnimationFrame(() => setIsActive(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsActive(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const totalSteps = steps.length;
  // Calculate horizontal pipe track offset:
  // Starts at center of joint 1 (34px) and ends at center of the final joint.
  // The column gap is 24px.
  const trackRightStyle = `calc((100% - ${(totalSteps - 1) * 24}px) / ${totalSteps} - 34px)`;

  return (
    <div
      ref={containerRef}
      className={cn('relative', isActive && 'pipe-on')}
      data-pipe
    >
      {/* Desktop horizontal flow */}
      <ol
        className="hidden md:grid relative"
        style={{
          gridTemplateColumns: `repeat(${totalSteps}, minmax(0, 1fr))`,
          columnGap: '24px',
        }}
      >
        <div
          aria-hidden="true"
          className="pipe-track"
          style={{ left: '34px', right: trackRightStyle }}
        >
          <div className="pipe-flow" />
        </div>
        {steps.map((st, i) => (
          <li key={i} className="pipe-step relative">
            <span className="pipe-joint" aria-hidden="true">
              {i + 1}
            </span>
            <h3 className="h3 mt-6">
              <span className="sr-only">Step {i + 1}: </span>
              {st.t}
            </h3>
            <p className="text-charcoal-70 mt-2 text-[0.97rem] pr-4">{st.d}</p>
          </li>
        ))}
      </ol>

      {/* Mobile vertical flow */}
      <ol className="md:hidden relative space-y-8">
        <div aria-hidden="true" className="pipe-vert">
          <div className="pipe-flow" />
        </div>
        {steps.map((st, i) => (
          <li key={i} className="pipe-step relative flex gap-5">
            <span className="pipe-joint flex-none" aria-hidden="true">
              {i + 1}
            </span>
            <div className="pt-3">
              <h3 className="h3">
                <span className="sr-only">Step {i + 1}: </span>
                {st.t}
              </h3>
              <p className="text-charcoal-70 mt-1.5 text-[0.97rem]">{st.d}</p>
            </div>
          </li>
        ))}
      </ol>

      {note && (
        <p className="mt-10 text-sm text-charcoal-70 flex items-center gap-2">
          <Icon name="info" className="w-4 h-4 text-teal" />
          <span>{note}</span>
        </p>
      )}
    </div>
  );
}
