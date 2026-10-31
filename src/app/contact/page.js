/**
 * Contact page for Oakline Plumbing Co.
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
  title: 'Request Plumbing Service | Oakline Plumbing Co. (Concept)',
  description:
    'Concept contact page with a call option for urgent issues and a demo service request form.',
};

export default async function ContactPage({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const rawService = resolvedSearchParams?.service;

  // Ignore service param if not a valid slug or 'other'
  const validPreset =
    rawService && (SVC[rawService] || rawService === 'other') ? rawService : '';

  const nextSteps = [
    'Your request is received, once the form workflow confirms it.',
    'A team member reviews it and confirms your area and availability.',
    'They follow up to talk through next steps.',
    'An appointment is only set when you both agree on a time.',
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
            Tell Us What Plumbing Help You Need
          </h1>
          <p className="lede mt-5 measure">
            Call for urgent problems. Send a request for planned repairs, assessments, and estimates. Either way, a request isn’t a confirmed appointment until someone follows up with you.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-10 max-w-4xl">
            {/* Call Option */}
            <div className="bg-white rounded-panel border border-[#D6E5E2] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <IconBadge name="phone" tone="copper" />
                <h2 className="h3 text-[1.25rem]">Call the team</h2>
              </div>
              <p className="text-charcoal-70 mt-3 text-[0.97rem]">
                For urgent concerns and questions about availability.
              </p>
              <p className="mt-4 font-display font-extrabold text-xl text-teal">
                {SITE.phoneDisplay}
              </p>
              <p className="text-sm text-charcoal-70">
                Demo number. {SITE.hoursNote}
              </p>
              <div className="mt-5">
                <CallButton variant="secondary" label="Call Now" />
              </div>
            </div>

            {/* Form Option */}
            <div className="bg-white rounded-panel border border-[#D6E5E2] p-6 md:p-7">
              <div className="flex items-center gap-3">
                <IconBadge name="clipboard" tone="aqua" />
                <h2 className="h3 text-[1.25rem]">Request service</h2>
              </div>
              <p className="text-charcoal-70 mt-3 text-[0.97rem]">
                For planned repairs, assessments, and estimates. Takes about a minute.
              </p>
              <div className="mt-5">
                <ScrollToButton
                  targetId="contact-form"
                  focusFirstInput
                  label="Start your request"
                  variant="primary"
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
              heading="Service request"
            />
          </div>

          <aside
            className="space-y-6 lg:sticky lg:top-28"
            aria-label="What happens next and coverage"
          >
            <div className="rounded-panel bg-soft border border-[#D6E5E2] p-6">
              <h2 className="h3">What happens next</h2>
              <ol className="mt-4 space-y-4">
                {nextSteps.map((t, i) => (
                  <li key={i} className="flex gap-3 text-[0.96rem]">
                    <span className="w-7 h-7 rounded-full bg-teal text-white grid place-items-center text-sm font-bold flex-none">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{t}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-panel bg-aqua p-6">
              <h2 className="h3">Coverage and hours</h2>
              <ul className="mt-4 space-y-3 text-[0.96rem]">
                <li className="flex gap-3">
                  <Icon name="pin" className="w-5 h-5 text-teal flex-none" />
                  <span>
                    Charlotte, NC is the demonstration focus.{' '}
                    <Link href="/service-areas" className="text-link">
                      Coverage details
                    </Link>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="w-5 h-5 text-teal flex-none" />
                  <span>{SITE.hoursNote}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="mail" className="w-5 h-5 text-teal flex-none" />
                  <span>
                    Response expectations are stated only once a real policy exists.
                  </span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Contact FAQ */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="ctfaq-h">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="ctfaq-h" className="h2">
              Before you send
            </h2>
            <p className="lede mt-4">Short answers to common questions.</p>
          </div>
          <Accordion items={FAQ.contact} />
        </div>
      </section>
    </div>
  );
}
