/**
 * FinalCta component displayed at the bottom of pages before footer.
 * Server Component rendered with dark teal container and copper/ghost action buttons.
 */

import React from 'react';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';

/**
 * @param {Object} props
 * @param {string} props.heading CTA banner heading.
 * @param {string} props.text Descriptive explanation.
 * @param {Object} props.primary Primary button config.
 * @param {Object|'call'} [props.secondary='call'] Secondary button config.
 */
export function FinalCta({ heading, text, primary, secondary = 'call' }) {
  return (
    <section className="section pt-0 md:pt-0 lg:pt-0">
      <div className="wrap">
        <div className="relative overflow-hidden rounded-[24px] bg-teal on-dark px-6 py-10 md:px-14 md:py-14 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <svg
            aria-hidden="true"
            className="absolute right-0 bottom-0 w-72 h-72 text-[#1C4C5E]"
            viewBox="0 0 200 200"
            fill="none"
          >
            <path
              d="M200 40H120a50 50 0 0 0-50 50v110"
              stroke="currentColor"
              strokeWidth="26"
            />
          </svg>
          <div className="relative">
            <h2 className="h2 !text-white">{heading}</h2>
            <p className="mt-3 text-white/80 text-[1.06rem] measure">{text}</p>
          </div>
          <div className="relative flex flex-wrap gap-3">
            <Button
              label={primary.label}
              href={primary.to || primary.href}
              variant="copper"
            />
            {secondary === 'call' ? (
              <CallButton variant="ghost-light" label="Call Now" />
            ) : secondary ? (
              <Button
                label={secondary.label}
                href={secondary.to || secondary.href}
                variant="ghost-light"
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
