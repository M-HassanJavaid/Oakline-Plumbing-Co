'use client';

/**
 * Thank You page for Pathmaker Plumbing.
 * Client component that displays confirmation with the requested service name.
 * If no submission exists in memory, displays "No request to confirm".
 */

import React from 'react';
import Link from 'next/link';
import { useSubmission } from '@/context/SubmissionContext';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { Notice } from '@/components/ui/Notice';
import { Icon } from '@/components/ui/Icon';
import { SITE } from '@/data/site';

export default function ThankYouPage() {
  const { lastSubmission } = useSubmission();

  // Guard: when visiting /thank-you directly without submitting the form in this session
  if (!lastSubmission) {
    return (
      <div className="page-enter">
        <section className="section">
          <div className="wrap max-w-2xl text-center">
            <span className="w-16 h-16 mx-auto rounded-2xl bg-aqua grid place-items-center text-teal">
              <Icon name="clipboard" className="w-8 h-8" />
            </span>
            <h1 className="h1-page mt-6" tabIndex={-1} data-page-h1>
              No Request to Confirm
            </h1>
            <p className="lede mt-4">
              This page displays confirmation details after a service inquiry is submitted. Please use our form or call directly to get in touch.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button label="Go to Service Request Form" href="/contact" />
              <Button label="Back to Home" href="/" variant="secondary" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  const nextSteps = [
    'Our dispatch team reviews your address and requested plumbing service.',
    'We reach out by phone or message to confirm scheduling and answer any upfront questions.',
    'A licensed technician arrives equipped to diagnose the problem and provide a clear, upfront estimate.',
  ];

  return (
    <div className="page-enter">
      <section className="section">
        <div className="wrap max-w-3xl">
          <div className="bg-white rounded-[24px] border border-[#D6E5E2] shadow-card p-7 md:p-12">
            <span className="w-16 h-16 rounded-2xl bg-[#ECF7F1] grid place-items-center text-success">
              <Icon name="checkCircle" className="w-9 h-9" />
            </span>
            <div className="mt-6">
              <span className="badge badge-aqua font-semibold">
                Inquiry Logged Successfully
              </span>
            </div>
            <h1 className="h1-page mt-4" tabIndex={-1} data-page-h1>
              Thank You — Your Request Has Been Received
            </h1>
            <p className="lede mt-4">
              We have received your service inquiry for{' '}
              <strong className="text-teal font-semibold">
                {lastSubmission.serviceLabel || 'Plumbing Service'}
              </strong>
              . A member of our Charlotte team will follow up with you promptly.
            </p>

            <Notice
              tone="info"
              className="mt-7"
              title="Need immediate assistance?"
              body={
                <span>
                  Our office hours are {SITE.hours}. If you are dealing with an active water leak or immediate plumbing emergency, call us directly at{' '}
                  <strong className="text-teal">{SITE.phone.display}</strong>.
                </span>
              }
            />

            <h2 className="h3 mt-9 text-teal">What Happens Next</h2>
            <ol className="mt-4 space-y-3">
              {nextSteps.map((t, i) => (
                <li key={i} className="flex gap-3 text-charcoal-80 text-[0.96rem]">
                  <span className="w-7 h-7 rounded-full bg-teal text-white grid place-items-center text-xs font-bold flex-none">
                    {i + 1}
                  </span>
                  <span className="pt-0.5">{t}</span>
                </li>
              ))}
            </ol>

            <div className="mt-9 pt-7 border-t border-[#E1ECEA] flex flex-wrap gap-3">
              <CallButton label={`Call ${SITE.phone.display}`} variant="primary" />
              <Button label="Back to Home" href="/" variant="secondary" />
              <Button label="Browse Services" href="/services" variant="secondary" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
