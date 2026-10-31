/**
 * Dynamic Service Page template handling all 4 core services:
 * - drain-cleaning
 * - leak-repair
 * - water-heaters
 * - sewer-lines
 *
 * Implements the shared SERVICE_EXTRAS configuration to render blocks in the exact
 * sequence defined in the prototype. Unknown slugs invoke Next.js notFound().
 * Statically generated via generateStaticParams.
 */

import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SERVICES, SVC } from '@/data/services';
import { PageHero } from '@/components/sections/PageHero';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { IconBadge } from '@/components/ui/IconBadge';
import { Icon } from '@/components/ui/Icon';
import { Notice } from '@/components/ui/Notice';
import { ProofSlot } from '@/components/ui/ProofSlot';
import { Accordion } from '@/components/ui/Accordion';
import { FinalCta } from '@/components/sections/FinalCta';
import { ProcessPipe } from '@/components/sections/ProcessPipe';
import { FactorGrid } from '@/components/sections/FactorGrid';
import { CompareCards } from '@/components/sections/CompareCards';
import { DemoTag } from '@/components/ui/DemoTag';
import { CallButton } from '@/components/ui/CallButton';

/**
 * Statically pre-render all 4 service routes at build time.
 */
export async function generateStaticParams() {
  return SERVICES.map((s) => ({
    slug: s.slug,
  }));
}

/**
 * Generate metadata matching each service's meta object.
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = SVC[slug];

  if (!service) {
    return {
      title: 'Page Not Found | Oakline Plumbing Co. (Concept)',
      description: 'This page could not be found.',
    };
  }

  return {
    title: service.meta.title,
    description: service.meta.desc,
  };
}

/* ---------------- Reusable Service Page Blocks ---------------- */

function SymptomsBlock({ service }) {
  const isFiveCols = service.symptoms.items.length > 4;

  return (
    <section className="section" aria-labelledby="sym-h">
      <div className="wrap">
        <SectionHeading
          id="sym-h"
          title={service.symptoms.heading}
          intro={service.symptoms.intro}
        />
        <ul
          className={`grid sm:grid-cols-2 ${
            isFiveCols ? 'lg:grid-cols-5' : 'lg:grid-cols-4'
          } gap-5`}
        >
          {service.symptoms.items.map((i, idx) => (
            <li
              key={idx}
              className="bg-white rounded-card border border-[#D6E5E2] p-6"
            >
              <IconBadge name={i.icon} tone="aqua" />
              <h3 className="h3 mt-4 text-[1.08rem]">{i.t}</h3>
              <p className="text-charcoal-70 mt-2 text-[0.95rem]">{i.d}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScopeBlock({ service, numbered = false, bg = 'bg-aqua' }) {
  return (
    <section className={`section ${bg}`} aria-labelledby="scope-h">
      <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14">
        <div>
          <h2 id="scope-h" className="h2">
            {service.scope.heading}
          </h2>
          <p className="lede mt-4">{service.scope.intro}</p>
          {service.scope.note && (
            <div className="mt-6">
              <Notice tone="info" body={service.scope.note} />
            </div>
          )}
        </div>
        <FactorGrid
          items={service.scope.items}
          cols="sm:grid-cols-2"
          numbered={numbered}
          tone="soft"
        />
      </div>
    </section>
  );
}

function CostBlock({ service, title = 'What influences the cost', extra = null }) {
  return (
    <section className="section" aria-labelledby="cost-h">
      <div className="wrap">
        <div className="grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14">
          <div>
            <h2 id="cost-h" className="h2">
              {title}
            </h2>
            <p className="lede mt-4">{service.costs.intro}</p>
            <p className="mt-5 text-[0.95rem] text-charcoal-70 flex items-start gap-2">
              <Icon name="dollar" className="w-4 h-4 mt-1 text-copper-600 flex-none" />
              <span>
                No prices are shown in this concept. A live site would explain the company’s real estimate policy.
              </span>
            </p>
          </div>
          <ul className="divide-y divide-[#D6E5E2] border-y border-[#D6E5E2]">
            {service.costs.items.map((c, idx) => (
              <li
                key={idx}
                className="py-5 grid sm:grid-cols-[200px_1fr] gap-1 sm:gap-6"
              >
                <span className="font-display font-bold text-teal">{c.t}</span>
                <span className="text-charcoal-70">{c.d}</span>
              </li>
            ))}
          </ul>
        </div>
        {extra}
      </div>
    </section>
  );
}

function ProofBlock({ service }) {
  return (
    <section
      className="section bg-white border-y border-[#DCE7E5]"
      aria-labelledby="proof-h"
    >
      <div className="wrap">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div className="max-w-2xl">
            <h2 id="proof-h" className="h2">
              Real work, shown honestly
            </h2>
            <p className="lede mt-4">
              This space is reserved for genuine project photos and reviews related to {service.name.toLowerCase()}. Nothing here is invented.
            </p>
          </div>
          <DemoTag text="Proof placeholders — fictional demonstration" />
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <ProofSlot
            title={service.proof.label}
            body="Problem, approved scope, work completed, and outcome, published with the customer’s permission."
            icon="clipboard"
          />
          <ProofSlot
            title="Project photos"
            body="Real before and after photos with descriptive captions, used only with permission."
            icon="camera"
          />
          <ProofSlot
            title="Customer review"
            body={service.proof.review}
            icon="quote"
          />
        </div>
        <p className="mt-6">
          <Link href="/reviews-projects" className="text-link">
            See how project stories are laid out
          </Link>
        </p>
      </div>
    </section>
  );
}

function FaqBlock({ service }) {
  return (
    <section className="section" aria-labelledby="faq-h">
      <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
        <div>
          <h2 id="faq-h" className="h2">
            {service.name} questions
          </h2>
          <p className="lede mt-4">Answers to what homeowners usually ask first.</p>
        </div>
        <Accordion items={service.faqs} />
      </div>
    </section>
  );
}

function RelatedServices({ currentSlug }) {
  const others = SERVICES.filter((s) => s.slug !== currentSlug);

  return (
    <section className="pb-14 md:pb-20" aria-labelledby="rel-h">
      <div className="wrap">
        <h2 id="rel-h" className="font-display font-bold text-teal text-lg mb-4">
          Other services
        </h2>
        <ul className="grid sm:grid-cols-3 gap-3">
          {others.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="card-link flex items-center gap-3 bg-white rounded-2xl border border-[#D6E5E2] p-4 min-h-[64px]"
              >
                <span className="text-copper-700">
                  <Icon name={s.icon} className="w-5 h-5" />
                </span>
                <span className="font-semibold text-teal">{s.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Main Dynamic Service Page Component ---------------- */

export default async function DynamicServicePage({ params }) {
  const { slug } = await params;
  const service = SVC[slug];

  if (!service) {
    notFound();
  }

  const drainVisitSteps = [
    { t: 'Intake', d: 'You tell us which drains are slow and for how long.' },
    { t: 'Assessment', d: 'The technician checks the affected drains.' },
    { t: 'Options', d: 'Clearing methods are explained, with costs.' },
    { t: 'Your approval', d: 'Work starts only after you agree.' },
    { t: 'Follow-up', d: 'You’ll hear what was done and anything to watch for.' },
  ];

  return (
    <div className="page-enter">
      <PageHero
        crumbs={[
          { label: 'Home', to: '/' },
          { label: 'Services', to: '/services' },
          { label: service.name },
        ]}
        h1={service.hero.h1}
        intro={service.hero.intro}
        primary={{
          label: service.cta,
          to: `/contact?service=${service.slug}`,
        }}
        image={service.image}
        imageAlt={service.imageAlt}
        icon={service.icon}
        note="Requests aren’t confirmed appointments. For urgent problems, call."
      />

      {/* Render Service Extras specific to each service */}
      {slug === 'drain-cleaning' && (
        <>
          <SymptomsBlock service={service} />
          <ScopeBlock service={service} />
          <section className="section" aria-labelledby="visit-h">
            <div className="wrap">
              <SectionHeading
                id="visit-h"
                title="How a drain visit works"
                intro="From your first message to follow-up, here’s what to expect."
              />
              <ProcessPipe steps={drainVisitSteps} />
            </div>
          </section>
          <div className="bg-aqua">
            <CostBlock service={service} />
          </div>
          <ProofBlock service={service} />
          <FaqBlock service={service} />
        </>
      )}

      {slug === 'leak-repair' && (
        <>
          <SymptomsBlock service={service} />
          <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="types-h">
            <div className="wrap">
              <h2 id="types-h" className="h2 mb-8">
                Types of leaks
              </h2>
              <div className="grid md:grid-cols-2 gap-5">
                {service.leakTypes.map((t, i) => (
                  <div
                    key={i}
                    className={`rounded-panel p-6 md:p-8 ${
                      i ? 'bg-white border border-[#D6E5E2]' : 'bg-aqua'
                    }`}
                  >
                    <h3 className="h3 text-[1.2rem]">{t.t}</h3>
                    <p className="text-charcoal-70 mt-2">{t.d}</p>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-charcoal-70">
                Listed as examples. A live site would show only leak work the business actually performs.
              </p>
            </div>
          </section>
          <ScopeBlock service={service} numbered={true} />
          <section className="section" aria-labelledby="rs-h">
            <div className="wrap">
              <SectionHeading
                id="rs-h"
                title="Finding, fixing, and restoring are separate scopes"
                intro="Knowing which step covers what helps avoid surprises. Your estimate would say which of these is included."
              />
              <ol className="grid md:grid-cols-3 gap-5">
                {service.repairScopes.map((r, i) => (
                  <li
                    key={i}
                    className="relative bg-white rounded-panel border border-[#D6E5E2] p-6 md:p-7"
                  >
                    <span className="font-display font-extrabold text-copper-600">
                      Scope {i + 1}
                    </span>
                    <h3 className="h3 mt-1">{r.t}</h3>
                    <p className="text-charcoal-70 mt-2 text-[0.96rem]">{r.d}</p>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Notice
                  tone="warn"
                  title="Active leak?"
                  body={
                    <>
                      {service.safetyNote}{' '}
                      <CallButton
                        variant="ghost-light"
                        className="!p-0 !min-h-0 !border-0 text-link !inline !bg-transparent font-semibold"
                        label="Call the team"
                      />
                    </>
                  }
                />
              </div>
            </div>
          </section>
          <div className="bg-aqua">
            <CostBlock service={service} title="Cost considerations" />
          </div>
          <ProofBlock service={service} />
          <FaqBlock service={service} />
        </>
      )}

      {slug === 'water-heaters' && (
        <>
          <SymptomsBlock service={service} />
          <section className="section bg-aqua" aria-labelledby="cmp-h">
            <div className="wrap">
              <SectionHeading
                id="cmp-h"
                title={service.compare.heading}
                intro={service.compare.intro}
              />
              <CompareCards compare={service.compare} />
            </div>
          </section>
          <section className="section" aria-labelledby="eq-h">
            <div className="wrap">
              <SectionHeading
                id="eq-h"
                title="Equipment types"
                intro="Categories are shown as placeholders. A live site would list only what the company services."
              />
              <FactorGrid
                items={service.equipment}
                cols="sm:grid-cols-2 lg:grid-cols-4"
              />
            </div>
          </section>
          <ScopeBlock service={service} numbered={true} />
          <section className="section" aria-labelledby="inst-h">
            <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-14">
              <div>
                <h2 id="inst-h" className="h2">
                  What an installation covers
                </h2>
                <p className="lede mt-4">
                  These items are worth confirming in any replacement proposal.
                </p>
                <div className="mt-6">
                  <Notice tone="info" body={service.installNote} />
                </div>
              </div>
              <ul className="space-y-3">
                {service.install.map((i, idx) => (
                  <li
                    key={idx}
                    className="flex gap-4 bg-white rounded-2xl border border-[#D6E5E2] p-5"
                  >
                    <span className="w-8 h-8 rounded-lg bg-aqua text-teal grid place-items-center flex-none">
                      <Icon name="check" className="w-4 h-4" />
                    </span>
                    <span>
                      <span className="font-semibold text-teal block">{i.t}</span>
                      <span className="text-charcoal-70 text-[0.96rem]">{i.d}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
          <div className="bg-aqua">
            <CostBlock
              service={service}
              title="Pricing and warranties"
              extra={
                <div>
                  <h3 className="h3 text-[1.25rem] mt-14 mb-5">
                    Understanding warranties
                  </h3>
                  <FactorGrid
                    items={service.warranty}
                    cols="md:grid-cols-3"
                    tone="soft"
                  />
                </div>
              }
            />
          </div>
          <ProofBlock service={service} />
          <FaqBlock service={service} />
        </>
      )}

      {slug === 'sewer-lines' && (
        <>
          <SymptomsBlock service={service} />
          <ScopeBlock service={service} />
          <section className="section" aria-labelledby="ns-h">
            <div className="wrap">
              <SectionHeading
                id="ns-h"
                title="Possible next steps after assessment"
                intro="What happens next depends on what’s found and on the services the company actually provides."
              />
              <FactorGrid items={service.nextSteps} cols="md:grid-cols-3" />
            </div>
          </section>
          <section className="section bg-aqua" aria-labelledby="cmp-h">
            <div className="wrap">
              <SectionHeading
                id="cmp-h"
                title={service.compare.heading}
                intro={service.compare.intro}
              />
              <CompareCards compare={service.compare} />
            </div>
          </section>
          <CostBlock service={service} title="Scope and cost factors" />
          <ProofBlock service={service} />
          <FaqBlock service={service} />
        </>
      )}

      {/* Related Services */}
      <RelatedServices currentSlug={service.slug} />

      {/* Final Call to Action */}
      <FinalCta
        heading={service.final.h}
        text={service.final.t}
        primary={{
          label: service.cta,
          to: `/contact?service=${service.slug}`,
        }}
      />
    </div>
  );
}
