/**
 * ServiceCard displays individual plumbing services.
 * Supports compact variant (for home page) and full variant (for services page).
 * Server Component.
 */

import React from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { IconBadge } from '@/components/ui/IconBadge';
import { Button } from '@/components/ui/Button';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';

/**
 * @param {Object} props
 * @param {Object} props.service Service data object.
 * @param {'compact'|'full'} [props.variant='compact']
 */
export function ServiceCard({ service, variant = 'compact' }) {
  if (variant === 'full') {
    return (
      <article className="group bg-white rounded-panel border border-[#D6E5E2] shadow-card overflow-hidden flex flex-col card-link">
        <ImageWithFallback
          src={service.image}
          alt={service.imageAlt}
          ratio="aspect-[16/9]"
          icon={service.icon}
          tag="Illustrative image"
        />
        <div className="p-6 md:p-8 flex flex-col flex-1">
          <div className="flex items-center gap-3 mb-3">
            <IconBadge name={service.icon} tone="copper" />
            <h3 className="h3 text-[1.35rem]">{service.name}</h3>
          </div>
          <p className="text-charcoal-70">{service.directory.overview}</p>
          <p className="font-semibold text-teal mt-5 text-[0.95rem]">
            Common reasons people call
          </p>
          <ul className="mt-2 space-y-2">
            {service.directory.problems.map((p, idx) => (
              <li key={idx} className="flex gap-2.5 text-[0.97rem]">
                <span className="text-copper-600 mt-1">
                  <Icon name="check" className="w-4 h-4" />
                </span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="mt-auto pt-7 flex flex-wrap gap-3">
            <Button
              label={`Explore ${service.navLabel}`}
              href={`/services/${service.slug}`}
              variant="primary"
              size="sm"
            />
            <Button
              label="Request Service"
              href={`/contact?service=${service.slug}`}
              variant="secondary"
              size="sm"
            />
          </div>
        </div>
      </article>
    );
  }

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-panel border border-[#D6E5E2] shadow-card overflow-hidden flex flex-col card-link"
    >
      <ImageWithFallback
        src={service.image}
        alt={service.imageAlt}
        ratio="aspect-[3/2]"
        icon={service.icon}
        tag=""
      />
      <div className="p-6 flex flex-col flex-1">
        <span className="text-copper-700 mb-3">
          <Icon name={service.icon} className="w-6 h-6" />
        </span>
        <h3 className="h3">{service.name}</h3>
        <p className="text-teal font-semibold mt-2 text-[0.97rem]">
          {service.problem}
        </p>
        <p className="text-charcoal-70 mt-2 text-[0.97rem]">
          {service.summary}
        </p>
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 font-semibold text-teal">
          <span className="underline decoration-copper decoration-2 underline-offset-4 group-hover:decoration-teal">
            View service
          </span>
          <span className="sr-only">: {service.name}</span>
          <Icon
            name="chevRight"
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  );
}
