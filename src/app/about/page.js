/**
 * About page for Oakline Plumbing Co.
 * Server Component showcasing team values, owner story placeholder, team placeholders,
 * operating standards, and credential disclosures.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DemoTag } from '@/components/ui/DemoTag';
import { ProofSlot } from '@/components/ui/ProofSlot';
import { IconBadge } from '@/components/ui/IconBadge';
import { Icon } from '@/components/ui/Icon';
import { FinalCta } from '@/components/sections/FinalCta';
import { PROCESS } from '@/data/process';

export const metadata = {
  title: 'About Oakline Plumbing Co. | Portfolio Concept',
  description:
    'Concept About page showing where a real plumbing company’s owner story, team, standards, and verified credentials would appear.',
};

export default function AboutPage() {
  const standards = [
    ['chat', 'Communication', 'Clear updates before, during, and after a visit.'],
    ['search', 'Diagnosis', 'Recommendations based on what’s found in person.'],
    ['dollar', 'Pricing approval', 'Costs explained and approved before work starts.'],
    ['home', 'Care for your home', 'Floors and fixtures protected, work areas left tidy.'],
    ['phone', 'Follow-up', 'Clear next steps after the job is done.'],
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        h1="Get to Know the People Behind Oakline Plumbing"
        intro="When someone comes into your home, you want to know who they are. This page is where a real plumbing company introduces its owner, its team, and how it works."
        primary={{ label: 'Request Service', to: '/contact' }}
        secondary={{ label: 'Explore Services', to: '/services', variant: 'secondary' }}
      />

      {/* Owner Story */}
      <section className="section" aria-labelledby="owner-h">
        <div className="wrap grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div className="proof-slot aspect-[4/5] max-h-[520px] grid place-items-center text-center p-8">
            <div>
              <span className="w-16 h-16 mx-auto rounded-2xl bg-white grid place-items-center text-teal border border-[#CFE0DD]">
                <Icon name="user" className="w-8 h-8" />
              </span>
              <p className="font-display font-bold text-teal mt-4">Owner portrait</p>
              <p className="text-sm text-charcoal-70 mt-1 max-w-[26ch] mx-auto">
                A real photo of the owner appears here. No stock person is used to stand in for them.
              </p>
            </div>
          </div>
          <div>
            <DemoTag text="Reserved for the real owner’s story" />
            <h2 id="owner-h" className="h2 mt-4">
              The owner’s story
            </h2>
            <p className="lede mt-4">
              This is where the founder explains who they are, how they got into plumbing, and why they started the company. It would be written with them, in their own words.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'Name and role',
                'Background and experience, as they describe it',
                'Why the company exists and who it serves',
              ].map((t, i) => (
                <p key={i} className="flex gap-3 text-charcoal">
                  <span className="text-copper-600 mt-1">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span>{t}</span>
                </p>
              ))}
            </div>
            <p className="mt-6 text-[0.95rem] text-charcoal-70">
              We don’t invent a biography for a fictional company. The structure is here so a real story can be dropped in.
            </p>
          </div>
        </div>
      </section>

      {/* Team Placeholders */}
      <section className="section bg-white border-y border-[#DCE7E5]" aria-labelledby="team-h">
        <div className="wrap">
          <SectionHeading
            id="team-h"
            title="The team you’d meet"
            intro="Genuine portraits, roles, and short introductions would go here, so homeowners know who might arrive."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {['Lead technician', 'Service technician', 'Office and scheduling'].map((r, i) => (
              <li
                key={i}
                className="rounded-panel border border-[#D6E5E2] bg-soft overflow-hidden"
              >
                <div className="proof-slot !rounded-none !border-0 !border-b-2 aspect-[4/3] grid place-items-center text-teal">
                  <Icon name="user" className="w-10 h-10" />
                </div>
                <div className="p-5">
                  <p className="font-display font-bold text-teal">{r}</p>
                  <p className="text-sm text-charcoal-70 mt-1">
                    Name, photo, and a short introduction appear here for a real team member.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Standards */}
      <section className="section" aria-labelledby="std-h">
        <div className="wrap">
          <SectionHeading
            id="std-h"
            title="How we work"
            intro="These standards describe how the business should operate. Each becomes a public claim only after the owner confirms it."
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {standards.map(([i, t, d], idx) => (
              <li key={idx} className="bg-white rounded-card border border-[#D6E5E2] p-6">
                <IconBadge name={i} tone="copper" />
                <h3 className="h3 mt-4 text-[1.05rem]">{t}</h3>
                <p className="text-charcoal-70 mt-2 text-[0.95rem]">{d}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Credentials */}
      <section className="section bg-aqua" aria-labelledby="cred-h">
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14">
          <div>
            <h2 id="cred-h" className="h2">
              Credentials
            </h2>
            <p className="lede mt-4">
              Licenses, insurance, and training are listed only when verified. We never use stock badges or logos to suggest credentials that haven’t been confirmed.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <ProofSlot
              title="License details"
              body="License type and number, with a way to verify it."
              icon="shield"
            />
            <ProofSlot
              title="Insurance"
              body="Coverage stated only as confirmed by the owner."
              icon="clipboard"
            />
            <ProofSlot
              title="Training"
              body="Relevant certifications or manufacturer training."
              icon="file"
            />
            <ProofSlot
              title="Memberships"
              body="Valid trade association memberships, if any."
              icon="users"
            />
          </div>
        </div>
      </section>

      {/* Community & Process */}
      <section className="section" aria-labelledby="comm-h">
        <div className="wrap grid lg:grid-cols-2 gap-6">
          <div className="rounded-panel bg-white border border-[#D6E5E2] p-6 md:p-10">
            <IconBadge name="pin" tone="aqua" />
            <h2 id="comm-h" className="h3 text-[1.35rem] mt-5">
              Community and service area
            </h2>
            <p className="text-charcoal-70 mt-3">
              A real company’s local history and involvement would be shared here. If there’s nothing genuine to say, this section is left out rather than filled with generic copy.
            </p>
            <p className="mt-5">
              <Link href="/service-areas" className="text-link">
                See service area details
              </Link>
            </p>
          </div>
          <div className="rounded-panel bg-teal on-dark p-6 md:p-10 text-white">
            <IconBadge name="clipboard" tone="white" />
            <h2 className="h3 text-[1.35rem] mt-5 !text-white">
              What to expect
            </h2>
            <ol className="mt-5 space-y-3 text-white/85">
              {PROCESS.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-display font-bold text-copper w-5 flex-none">
                    {i + 1}
                  </span>
                  <span>{p.t}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <Link href="/contact" className="text-link">
                Go to the contact page
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        heading="Need Plumbing Help?"
        text="Send a short request, or call if the problem is urgent."
        primary={{ label: 'Request Service', to: '/contact' }}
        secondary={{ label: 'Explore Services', to: '/services' }}
      />
    </div>
  );
}
