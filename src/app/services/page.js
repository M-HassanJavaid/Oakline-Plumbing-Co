/**
 * All Services directory page for Pathmaker Plumbing.
 * Server Component presenting all core residential services, extended symptom matcher,
 * extra services, urgent guidance, and services FAQ.
 */

import React from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { SymptomFinder } from '@/components/sections/SymptomFinder';
import { Accordion } from '@/components/ui/Accordion';
import { FinalCta } from '@/components/sections/FinalCta';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { IconBadge } from '@/components/ui/IconBadge';
import { SERVICES, EXTRA_SERVICES } from '@/data/services';
import { FAQ } from '@/data/faq';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Residential Plumbing Services in Charlotte, NC | Pathmaker Plumbing',
  description:
    'Expert residential plumbing in Charlotte: drain cleaning, slab leak detection, water heaters, and sewer lines. Straight answers, clear estimates, and 25+ years experience.',
};

export default function ServicesPage() {
  const steps = [
    ['Request', 'Send an online inquiry or call our Charlotte office directly.'],
    ['Confirmation', 'Our dispatch team confirms your address, details, and scheduling window.'],
    ['In-Person Diagnosis', 'A licensed technician evaluates the root cause with proper tools.'],
    ['Options & Upfront Approval', 'We explain your repair options and pricing before any work begins.'],
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        h1="Residential Plumbing Services in Charlotte, NC"
        intro="Dependable plumbing solutions for homeowners across Greater Charlotte, Concord, Harrisburg, Huntersville, and Matthews. We diagnose the true root cause first, explain your options clearly, and recommend only the repairs you actually need."
        primary={{ label: 'Request Service Online', to: '/contact' }}
        secondary={{ label: `Call ${SITE.phone.display}`, to: `tel:${SITE.phone.tel}`, variant: 'secondary' }}
      />

      {/* Directory Grid */}
      <section className="section" aria-labelledby="svc-dir">
        <div className="wrap">
          <SectionHeading
            id="svc-dir"
            title="Core Plumbing Services"
            intro="Explore our four primary service disciplines. Each service page covers common symptoms, diagnostic methods, pricing factors, and real customer reviews."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} variant="full" />
            ))}
          </div>
        </div>
      </section>

      {/* Other Plumbing Work */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="svc-extra">
        <div className="wrap">
          <div className="rounded-panel border border-[#D6E5E2] bg-white p-6 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start">
            <IconBadge name="tools" tone="aqua" />
            <div>
              <h2 id="svc-extra" className="h3 text-[1.35rem]">
                Additional Fixture &amp; Repair Capabilities
              </h2>
              <p className="text-charcoal-70 mt-2 measure leading-relaxed">
                In addition to major pipe diagnostics and water heater installations, our licensed plumbers handle routine residential repairs, replacements, and fixture upgrades throughout Mecklenburg and Cabarrus counties.
              </p>
              <div className="flex flex-wrap gap-2.5 mt-5">
                {EXTRA_SERVICES.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-soft border border-[#CFE0DD] text-sm font-medium text-teal"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Symptom Matcher */}
      <section className="section bg-aqua" aria-labelledby="svc-sym">
        <div className="wrap">
          <SectionHeading
            id="svc-sym"
            title="Find Help by Symptom"
            intro="Not sure which plumbing service you need? Select the symptom you’re seeing in your home to find the recommended next step."
          />
          <SymptomFinder extended id="svc-finder" />
        </div>
      </section>

      {/* Urgent vs Standard workflow */}
      <section className="section" aria-labelledby="svc-urgent">
        <div className="wrap grid lg:grid-cols-2 gap-6">
          <div className="rounded-panel bg-copper-100 border border-[#F1CFA8] p-6 md:p-10 flex flex-col justify-between">
            <div>
              <IconBadge name="alert" tone="white" />
              <h2 id="svc-urgent" className="h3 text-[1.4rem] mt-5 text-charcoal">
                Active Leaks &amp; Urgent Problems
              </h2>
              <p className="mt-3 text-charcoal measure leading-relaxed">
                If water is spraying, flooding living spaces, or sewage is backing into your home, calling our office directly is the fastest way to get help.
              </p>
              <p className="mt-3 text-sm text-charcoal-80">
                <strong>Hours:</strong> {SITE.hours}
              </p>
              <p className="mt-2 text-xs text-charcoal-70">
                {SITE.emergencyPolicy}
              </p>
            </div>
            <div className="mt-6">
              <CallButton variant="primary" label={`Call ${SITE.phone.display}`} />
            </div>
          </div>

          <div className="rounded-panel bg-white border border-[#D6E5E2] p-6 md:p-10">
            <IconBadge name="clipboard" tone="aqua" />
            <h2 className="h3 text-[1.4rem] mt-5">How We Handle Every Service Call</h2>
            <ol className="mt-5 space-y-4">
              {steps.map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-teal text-white grid place-items-center font-display font-bold text-sm flex-none">
                    {i + 1}
                  </span>
                  <div>
                    <span className="font-semibold text-teal block">{t}</span>
                    <span className="text-charcoal-70 text-[0.95rem]">{d}</span>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Check Coverage Banner */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="svc-cov">
        <div className="wrap">
          <div className="rounded-panel bg-white border border-[#D6E5E2] p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <IconBadge name="pin" tone="aqua" />
              <div>
                <h2 id="svc-cov" className="h3 text-[1.3rem]">
                  Serving Greater Charlotte &amp; Nearby Communities
                </h2>
                <p className="text-charcoal-70 mt-1">
                  Based at 5676 Underwood Ave in Charlotte. Serving Mecklenburg, Cabarrus, and Union counties.
                </p>
              </div>
            </div>
            <Button
              label="Check Service Areas &rarr;"
              href="/service-areas"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="svc-faq">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="svc-faq" className="h2">
              Frequently Asked Questions
            </h2>
            <p className="lede mt-4">Common questions about scheduling, estimates, and diagnostic visits.</p>
          </div>
          <Accordion items={FAQ.services} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        heading="Have a Plumbing Issue in Charlotte?"
        text="Submit a short service inquiry or call (704) 733-7507 to speak with our team. We diagnose first and explain every option upfront."
        primary={{ label: 'Request Service Online', to: '/contact' }}
        secondary={{ label: `Call ${SITE.phone.display}`, to: `tel:${SITE.phone.tel}` }}
      />
    </div>
  );
}
