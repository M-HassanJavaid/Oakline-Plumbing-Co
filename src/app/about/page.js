/**
 * About page for Pathmaker Plumbing.
 * Server Component showcasing John Stokes' story, the team, operating standards,
 * and verified credentials in Charlotte, NC.
 */

import React from 'react';
import Link from 'next/link';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import { Icon } from '@/components/ui/Icon';
import { FinalCta } from '@/components/sections/FinalCta';
import { PROCESS, STANDARDS } from '@/data/process';
import { SITE } from '@/data/site';

export const metadata = {
  title: 'About Pathmaker Plumbing | Charlotte, NC',
  description:
    'Meet John Stokes and the team behind Pathmaker Plumbing. Serving Charlotte, Concord, Harrisburg, and surrounding areas with 25+ years of trusted plumbing experience.',
};

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'John Stokes',
      role: 'Owner & Lead Technician',
      experience: '25+ years in plumbing',
      desc: 'Founded Pathmaker Plumbing in 2013 on a straightforward promise: give homeowners an honest diagnosis, not a commission-driven sales pitch.',
    },
    {
      name: 'Caleb',
      role: 'Service Technician',
      experience: 'Praised in 17+ Google reviews',
      desc: 'Known across Charlotte for prompt arrivals, clear walkthroughs of repair options, and leaving every workspace cleaner than he found it.',
    },
    {
      name: 'Ben',
      role: 'Service Technician',
      experience: 'Praised in 6+ Google reviews',
      desc: 'Specializes in thorough diagnostic troubleshooting, water heater replacements, and clean, durable copper and PEX installations.',
    },
    {
      name: 'Rachel',
      role: 'Service Technician',
      experience: 'Praised in 5+ Google reviews',
      desc: 'Frequently commended by homeowners for patient explanations, meticulous workmanship, and attention to detail on complex repairs.',
    },
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
        h1="Plumbing Advice You Can Trust. Repairs You Actually Need."
        intro="When someone comes into your home, you want to know who they are. Pathmaker Plumbing was founded in 2013 by John Stokes to provide Charlotte homeowners with honest, skilled plumbing work without the sales pressure."
        primary={{ label: 'Request Service', to: '/contact' }}
        secondary={{ label: 'Explore Services', to: '/services', variant: 'secondary' }}
      />

      {/* Owner Story */}
      <section className="section" aria-labelledby="owner-h">
        <div className="wrap grid lg:grid-cols-[.9fr_1.1fr] gap-10 lg:gap-16 items-center">
          <div className="rounded-panel border border-[#CFE0DD] bg-soft p-8 text-center flex flex-col items-center justify-center min-h-[380px]">
            <div className="w-24 h-24 rounded-full bg-teal text-white grid place-items-center shadow-md">
              <span className="font-display font-bold text-3xl">JS</span>
            </div>
            <p className="font-display font-bold text-teal text-xl mt-5">John Stokes</p>
            <p className="text-sm font-medium text-copper-600 mt-1">
              Founder & Licensed Plumber · 25+ Years Experience
            </p>
            <p className="text-xs text-charcoal-70 mt-3 max-w-[28ch]">
              NC Plumbing License #31626 (P-1 Plumbing Unlimited)
            </p>
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#D6E5E2] text-xs font-semibold text-charcoal">
              <span className="text-amber-500">★ 4.9</span>
              <span>155+ Verified Google Reviews</span>
            </div>
          </div>
          <div>
            <span className="badge badge-aqua">Founder Story</span>
            <h2 id="owner-h" className="h2 mt-3">
              “We recommend what you need, not what we sell.”
            </h2>
            <p className="lede mt-4">
              With more than 25 years in the plumbing trade, John Stokes founded Pathmaker Plumbing in 2013 with a simple operating philosophy: treat every customer the way we would want our own family treated.
            </p>
            <p className="mt-4 text-charcoal-80 leading-relaxed">
              Too often in the home services industry, technicians are incentivized by high-pressure sales quotas and commission bonuses. Pathmaker Plumbing takes the opposite approach: we educate homeowners on the root cause, provide honest repair versus replacement tradeoffs, and never push an unnecessary repipe when a targeted repair solves the problem.
            </p>
            <div className="mt-6 space-y-3">
              {[
                'NC State Plumbing License #31626 (P-1 Plumbing Unlimited)',
                'Locally owned and based in Charlotte, NC since 2013',
                'Second opinions welcomed on major quotes from other companies',
                'Authorized Rinnai Dealer for high-efficiency tankless systems',
              ].map((t, i) => (
                <p key={i} className="flex gap-3 text-charcoal text-sm font-medium">
                  <span className="text-copper-600 mt-0.5">
                    <Icon name="check" className="w-4 h-4" />
                  </span>
                  <span>{t}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section bg-white border-y border-[#DCE7E5]" aria-labelledby="team-h">
        <div className="wrap">
          <SectionHeading
            id="team-h"
            title="The Team You’ll Meet"
            intro="Our technicians arrive in marked vehicles with shoe covers, proper diagnostic equipment, and a commitment to clear communication."
          />
          <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {teamMembers.map((m, i) => (
              <li
                key={i}
                className="rounded-panel border border-[#D6E5E2] bg-soft overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-teal text-white grid place-items-center font-display font-bold text-lg mb-4">
                    {m.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-display font-bold text-teal text-lg">{m.name}</h3>
                  <p className="text-xs font-semibold text-copper-600 mt-0.5">{m.role}</p>
                  <p className="text-xs text-charcoal-60 mt-1 font-medium">{m.experience}</p>
                  <p className="text-sm text-charcoal-70 mt-3 leading-relaxed">
                    {m.desc}
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
            title="Our Five Operating Principles"
            intro="How we hold ourselves accountable on every residential and light commercial call across Charlotte."
          />
          <ul className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
            {STANDARDS.map((s, idx) => (
              <li key={idx} className="bg-white rounded-card border border-[#D6E5E2] p-6 flex flex-col">
                <IconBadge name={s.icon} tone="copper" />
                <h3 className="h3 mt-4 text-[1.05rem]">{s.title}</h3>
                <p className="text-charcoal-70 mt-2 text-[0.92rem] leading-relaxed flex-grow">
                  {s.desc}
                </p>
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
              Verified Credentials
            </h2>
            <p className="lede mt-4">
              All work is performed under North Carolina state licensing regulations by fully insured, background-checked plumbing professionals.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="shield" tone="teal" />
                <div>
                  <h3 className="font-display font-bold text-teal text-base">NC State License</h3>
                  <p className="text-xs text-charcoal-60">P-1 Plumbing Unlimited</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                License <strong className="text-teal font-semibold">#31626</strong> issued by the North Carolina State Board of Examiners of Plumbing, Heating and Fire Sprinkler Contractors.
              </p>
            </div>

            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="award" tone="copper" />
                <div>
                  <h3 className="font-display font-bold text-teal text-base">Authorized Dealer</h3>
                  <p className="text-xs text-charcoal-60">Factory trained</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                Authorized Rinnai Dealer certified for precision installation, maintenance, and warranty service of tankless water heaters.
              </p>
            </div>

            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="clock" tone="teal" />
                <div>
                  <h3 className="font-display font-bold text-teal text-base">25+ Years Experience</h3>
                  <p className="text-xs text-charcoal-60">Founded in 2013</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                Decades of hands-on diagnostic mastery covering slab leaks, repiping, cast-iron replacements, and water filtration.
              </p>
            </div>

            <div className="bg-white p-5 rounded-panel border border-[#CFE0DD]">
              <div className="flex items-center gap-3">
                <IconBadge name="star" tone="copper" />
                <div>
                  <h3 className="font-display font-bold text-teal text-base">4.9 ★ Google Rating</h3>
                  <p className="text-xs text-charcoal-60">155 Verified Reviews</p>
                </div>
              </div>
              <p className="text-sm text-charcoal-80 mt-3">
                Consistently reviewed by real Charlotte homeowners for prompt arrivals, fair pricing, and clean job sites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Process */}
      <section className="section" aria-labelledby="comm-h">
        <div className="wrap grid lg:grid-cols-2 gap-6">
          <div className="rounded-panel bg-white border border-[#D6E5E2] p-6 md:p-10">
            <IconBadge name="pin" tone="aqua" />
            <h2 id="comm-h" className="h3 text-[1.35rem] mt-5">
              Serving the Greater Charlotte Area
            </h2>
            <p className="text-charcoal-70 mt-3 leading-relaxed">
              Based out of northeast Charlotte on Underwood Ave, Pathmaker Plumbing serves homeowners across Mecklenburg, Cabarrus, and Union counties — including Concord, Harrisburg, Huntersville, Matthews, Mint Hill, Ballantyne, and South End.
            </p>
            <p className="mt-5">
              <Link href="/service-areas" className="text-link">
                View our complete service area map &amp; towns &rarr;
              </Link>
            </p>
          </div>
          <div className="rounded-panel bg-teal on-dark p-6 md:p-10 text-white">
            <IconBadge name="clipboard" tone="white" />
            <h2 className="h3 text-[1.35rem] mt-5 !text-white">
              What to Expect on Every Call
            </h2>
            <ol className="mt-5 space-y-3 text-white/85">
              {PROCESS.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-display font-bold text-copper w-5 flex-none">
                    {i + 1}
                  </span>
                  <div>
                    <strong className="text-white block">{p.t}</strong>
                    <span className="text-sm text-white/75">{p.d}</span>
                  </div>
                </li>
              ))}
            </ol>
            <p className="mt-6">
              <Link href="/contact" className="text-link !text-copper-300 hover:!text-white">
                Contact our Charlotte office &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <FinalCta
        heading="Need Honest Plumbing Advice in Charlotte?"
        text="Call our office directly or submit a service inquiry. We diagnose first and explain every option upfront."
        primary={{ label: `Call ${SITE.phone.display}`, to: `tel:${SITE.phone.tel}` }}
        secondary={{ label: 'Schedule Online', to: '/contact' }}
      />
    </div>
  );
}
