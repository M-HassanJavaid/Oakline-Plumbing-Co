'use client';

/**
 * SymptomFinder component allows users to pick observed symptoms to see suggested
 * starting services without making an automated diagnosis.
 * Client component because interactive button toggles and dynamic results require client state.
 */

import React, { useState } from 'react';
import Link from 'next/link';
import { SYMPTOMS } from '@/data/symptoms';
import { SVC } from '@/data/services';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

/**
 * @param {Object} props
 * @param {boolean} [props.extended=false] Whether to include extended symptoms (for /services page).
 * @param {string} [props.id='finder'] Base id for ARIA attributes.
 */
export function SymptomFinder({ extended = false, id = 'finder' }) {
  const [selectedId, setSelectedId] = useState(null);

  const list = SYMPTOMS.filter((s) => extended || !s.extended);
  const currentSymptom = list.find((s) => s.id === selectedId);
  const matchedService = currentSymptom ? SVC[currentSymptom.service] : null;

  const handleToggle = (symptomId) => {
    setSelectedId((prev) => (prev === symptomId ? null : symptomId));
  };

  return (
    <div
      className="bg-white rounded-panel border border-[#D6E5E2] shadow-card p-6 md:p-10"
      data-finder={id}
    >
      <p id={`${id}-label`} className="font-display font-bold text-teal text-lg">
        What are you noticing?
      </p>
      <p className="text-charcoal-70 text-[0.95rem] mt-1">
        Pick the closest match to see which service page to read first.
      </p>
      <div
        className="flex flex-wrap gap-2.5 mt-5"
        role="group"
        aria-labelledby={`${id}-label`}
      >
        {list.map((s) => {
          const isPressed = selectedId === s.id;
          return (
            <button
              key={s.id}
              type="button"
              className={cn('chip', isPressed && 'bg-teal !border-teal text-white')}
              aria-pressed={isPressed}
              onClick={() => handleToggle(s.id)}
            >
              <Icon name={s.icon} className="w-[18px] h-[18px]" />
              <span>{s.label}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 min-h-[132px]" aria-live="polite">
        {!matchedService ? (
          <div className="h-full rounded-2xl bg-soft border border-[#E1ECEA] p-5 flex items-center gap-4 text-charcoal-70">
            <span className="text-teal">
              <Icon name="search" className="w-6 h-6" />
            </span>
            <p className="text-[0.95rem]">
              Choose a symptom above. You’ll see a suggested starting point, not a diagnosis.
            </p>
          </div>
        ) : (
          <div className="rounded-2xl bg-aqua-50 border border-[#B9D3D0] p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-5 page-enter">
            <IconBadge name={matchedService.icon} tone="teal" />
            <div className="flex-1">
              <p className="text-sm font-semibold text-copper-700">
                Suggested starting point
              </p>
              <p className="font-display font-bold text-teal text-lg">
                {matchedService.name}
              </p>
              <p className="text-[0.95rem] text-charcoal-70 mt-1">
                {currentSymptom.note} The cause is confirmed only after an in-person look.
              </p>
            </div>
            <div className="flex flex-wrap gap-2.5">
              <Button
                label="Read about it"
                href={`/services/${matchedService.slug}`}
                variant="secondary"
                size="sm"
              />
              <Button
                label={matchedService.cta}
                href={`/contact?service=${matchedService.slug}`}
                variant="primary"
                size="sm"
              />
            </div>
          </div>
        )}
      </div>

      <p className="mt-5 text-[0.95rem]">
        Not sure?{' '}
        <Link href="/contact?service=other" className="text-link">
          Tell us what’s happening
        </Link>{' '}
        and the team can help sort it out.
      </p>
    </div>
  );
}
