/**
 * Contact page for Pathmaker Plumbing.
 * Server Component accepting optional service query parameter to preselect service.
 * Renders urgent call option, full inquiry form, next-step sidebar, and contact FAQ.
 */

import React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { IconBadge } from '@/components/ui/IconBadge';
import { CallButton } from '@/components/ui/CallButton';
import { ScrollToButton } from '@/components/ui/ScrollToButton';
import { Icon } from '@/components/ui/Icon';
import { Accordion } from '@/components/ui/Accordion';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { SVC } from '@/data/services';
import { FAQ } from '@/data/faq';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Contact & Service Request | Pathmaker Plumbing Charlotte',
  description:
    'Contact Pathmaker Plumbing in Charlotte, NC. Call (704) 733-7507 for urgent plumbing issues or submit an online request for diagnostics and estimates.',
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const rawService = resolvedSearchParams?.service;

  // Ignore service param if not a valid slug or 'other'
  const validPreset =
    rawService && (SVC[rawService] || rawService === 'other') ? rawService : '';

  const nextSteps = [
    'Your request is received directly by our Charlotte dispatch team.',
    'A team member reviews the problem, your address, and technician availability.',
    'We follow up by phone or message to confirm details and schedule your visit.',
    'Work begins only after our in-person diagnosis and your upfront approval of the estimate.',
  ];

  return (
    <div className="page-enter">
      {/* Hero Header */}
      <section className="bg-aqua relative overflow-hidden">
        <div className="wrap relative py-12 md:py-16">
          <Breadcrumbs
            items={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
          />
          <h1 className="h1-page max-w-3xl" tabIndex={-1} data-page-h1>
            Contact Pathmaker Plumbing
          </h1>
          <p className="lede mt-5 measure">
            Call for urgent leaks and water heater outages. Submit an online request for planned repairs, diagnostics, and second opinions on existing quotes.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-4xl">
            {/* Call Option */}
            <div className="bg-white rounded-panel border border-[#D6E5E2] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <IconBadge name="phone" tone="copper" />
                <h2 className="h3 text-[1.25rem]">Call Our Office Directly</h2>
              </div>
              <p className="text-charcoal-70 mt-3 text-[0.97rem]">
                Fastest response for active leaks, sewer backups, and urgent repairs.
              </p>
              <p className="mt-4 font-display font-extrabold text-2xl text-teal">
                <a href={`tel:${SITE.phone.tel}`} className="hover:underline">
                  {SITE.phone.display}
                </a>
              </p>
              <p className="text-sm text-charcoal-70 mt-1">
                {SITE.hours}
              </p>
              <div className="mt-5">
                <CallButton variant="primary" label={`Call ${SITE.phone.display}`} />
              </div>
            </div>

            {/* Form Option */}
            <div className="bg-white rounded-panel border border-[#D6E5E2] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <IconBadge name="clipboard" tone="aqua" />
                <h2 className="h3 text-[1.25rem]">Send an Online Request</h2>
              </div>
              <p className="text-charcoal-70 mt-3 text-[0.97rem]">
                For scheduled assessments, tankless upgrades, and second opinions. Takes about a minute.
              </p>
              <div className="mt-6">
                <ScrollToButton
                  targetId="contact-form"
                  focusFirstInput
                  label="Fill Out Service Request"
                  variant="secondary"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full Request Form and Side Guidance */}
      <section className="section" aria-label="Service request form">
        <div className="wrap grid lg:grid-cols-[1.25fr_.75fr] gap-10 lg:gap-14 items-start">
          <div
            className="bg-white rounded-[22px] border border-[#D6E5E2] shadow-card p-6 md:p-10 outline-none"
            id="contact-form"
            data-scroll-target="contact-form"
            tabIndex={-1}
          >
            <InquiryForm
              variant="full"
              preset={validPreset}
              heading="Service Request Form"
            />
          </div>

          <aside
            className="space-y-6 lg:sticky lg:top-28"
            aria-label="What happens next and office details"
          >
            <div className="rounded-panel bg-soft border border-[#D6E5E2] p-6">
              <h2 className="h3 text-teal">What Happens Next</h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((t, i) => (
                  <li key={i} className="flex gap-3 text-[0.95rem]">
                    <span className="w-7 h-7 rounded-full bg-teal text-white grid place-items-center text-xs font-bold flex-none">
                      {i + 1}
                    </span>
                    <span className="pt-0.5 text-charcoal-80">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-panel bg-aqua p-6">
              <h2 className="h3 text-teal">Office &amp; Service Territory</h2>
              <ul className="mt-4 space-y-3 text-[0.95rem]">
                <li className="flex gap-3">
                  <Icon name="pin" className="w-5 h-5 text-teal flex-none mt-0.5" />
                  <span>
                    <strong>Shop Address:</strong> {SITE.address} (Charlotte, NC).
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="w-5 h-5 text-teal flex-none mt-0.5" />
                  <span>
                    <strong>Operating Hours:</strong> {SITE.hours}. Saturday &amp; Sunday closed.
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="shield" className="w-5 h-5 text-teal flex-none mt-0.5" />
                  <span>
                    <strong>Licensing:</strong> NC State License #31626 (P-1 Plumbing Unlimited).
                  </span>
                </li>
              </ul>
              <div className="mt-5 pt-4 border-t border-[#CFE0DD]">
                <Link href="/service-areas" className="text-link text-sm">
                  View complete service areas &amp; towns &rarr;
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="ctfaq-h">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="ctfaq-h" className="h2">
              Before You Send
            </h2>
            <p className="lede mt-4">Helpful answers about response times and scheduling.</p>
          </div>
          <Accordion items={FAQ.contact} />
        </div>
      </section>
    </div>
  );
}
