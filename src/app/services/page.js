/**
 * All Services directory page.
 * Server Component presenting all core residential services, extended symptom matcher,
 * urgent guidance, and services FAQ.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { SymptomFinder } from '@/components/sections/SymptomFinder';
import { Accordion } from '@/components/ui/Accordion';
import { FinalCta } from '@/components/sections/FinalCta';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { IconBadge } from '@/components/ui/IconBadge';
import { SERVICES } from '@/data/services';
import { FAQ } from '@/data/faq';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'Residential Plumbing Services | Oakline Plumbing Co. (Concept)',
  description:
    'Concept services directory: drain cleaning, leak repair, water heaters, and sewer lines, with help finding the right service by symptom.',
};

export default function ServicesPage() {
  const steps = [
    ['Request', 'You send the form or call with a few details.'],
    ['Confirmation', 'Staff confirm your area, availability, and next step.'],
    ['Assessment', 'The problem is looked at in person.'],
    ['Proposed next step', 'You get options and decide what to approve.'],
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services' }]}
        h1="Plumbing Services for Your Home"
        intro="Residential plumbing help for Charlotte homeowners, landlords, and property managers. This concept covers four core services, each with its own page explaining what’s involved."
        primary={{ label: 'Request Plumbing Service', to: '/contact' }}
      />

      {/* Directory Grid */}
      <section className="section" aria-labelledby="svc-dir">
        <div className="wrap">
          <SectionHeading
            id="svc-dir"
            title="Choose the service that fits your problem"
            intro="Each page goes into symptoms, scope, cost factors, and common questions."
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
                Other plumbing work
              </h2>
              <p className="text-charcoal-70 mt-2 measure">
                Fixtures, toilets, faucets, and garbage disposals would appear here as a short list, only if the real company handles them. They don’t get separate pages unless there’s something genuinely useful to say.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {['Toilets', 'Faucets', 'Fixtures', 'Garbage disposals'].map((t) => (
                  <span key={t} className="chip chip-static !border-dashed">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-charcoal-70 mt-3">
                Placeholder list. Not offered as confirmed services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extended Symptom Matcher */}
      <section className="section bg-aqua" aria-labelledby="svc-sym">
        <div className="wrap">
          <SectionHeading
            id="svc-sym"
            title="Find help by symptom"
            intro="Only know what you’re seeing? Pick it here to find the page to start with."
          />
          <SymptomFinder extended id="svc-finder" />
        </div>
      </section>

      {/* Urgent vs Standard workflow */}
      <section className="section" aria-labelledby="svc-urgent">
        <div className="wrap grid lg:grid-cols-2 gap-6">
          <div className="rounded-panel bg-copper-100 border border-[#F1CFA8] p-6 md:p-10">
            <IconBadge name="alert" tone="white" />
            <h2 id="svc-urgent" className="h3 text-[1.4rem] mt-5">
              Urgent plumbing needs
            </h2>
            <p className="mt-3 text-charcoal measure">
              If water is actively leaking, sewage is backing up, or you have no water, call rather than sending a form. Phone calls reach someone faster than a request queue.
            </p>
            <p className="mt-3 text-[0.95rem] text-charcoal-70">
              {SITE.hoursNote} This concept doesn’t claim 24/7 or emergency availability.
            </p>
            <div className="mt-6">
              <CallButton variant="primary" label="Call Now" />
            </div>
          </div>

          <div className="rounded-panel bg-white border border-[#D6E5E2] p-6 md:p-10">
            <IconBadge name="clipboard" tone="aqua" />
            <h2 className="h3 text-[1.4rem] mt-5">How service requests work</h2>
            <ol className="mt-5 space-y-4">
              {steps.map(([t, d], i) => (
                <li key={i} className="flex gap-4">
                  <span className="w-8 h-8 rounded-full bg-teal text-white grid place-items-center font-display font-bold text-sm flex-none">
                    {i + 1}
                  </span>
                  <span>
                    <span className="font-semibold text-teal block">{t}</span>
                    <span className="text-charcoal-70 text-[0.96rem]">{d}</span>
                  </span>
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
                  Check coverage before you request
                </h2>
                <p className="text-charcoal-70 mt-1">
                  Charlotte is the focus of this concept. Coverage is confirmed for every address.
                </p>
              </div>
            </div>
            <Button
              label="See Service Areas"
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
              Service questions
            </h2>
            <p className="lede mt-4">What to know before choosing a service.</p>
          </div>
          <Accordion items={FAQ.services} />
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        heading="Know what you need, or want help figuring it out?"
        text="Send a short request and choose “Other / Not sure” if you’re unsure. For urgent problems, call."
        primary={{ label: 'Request Plumbing Service', to: '/contact' }}
      />
    </div>
  );
}
