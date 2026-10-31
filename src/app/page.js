/**
 * Homepage for Oakline Plumbing Co.
 * Server Component presenting hero value proposition, trust signals, services grid,
 * interactive symptom finder, process walkthrough, featured project, coverage, FAQ,
 * and quick request form.
 */

import React from 'react';
import Link from 'next/link';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Button } from '@/components/ui/Button';
import { CallButton } from '@/components/ui/CallButton';
import { ScrollToButton } from '@/components/ui/ScrollToButton';
import { ImageWithFallback } from '@/components/ui/ImageWithFallback';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { DemoTag } from '@/components/ui/DemoTag';
import { IconBadge } from '@/components/ui/IconBadge';
import { Icon } from '@/components/ui/Icon';
import { Accordion } from '@/components/ui/Accordion';
import { TrustStrip } from '@/components/sections/TrustStrip';
import { ServiceCard } from '@/components/sections/ServiceCard';
import { SymptomFinder } from '@/components/sections/SymptomFinder';
import { ProcessPipe } from '@/components/sections/ProcessPipe';
import { FeaturedProject } from '@/components/sections/FeaturedProject';
import { CoverageMap } from '@/components/sections/CoverageMap';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { SERVICES, IMG } from '@/data/services';
import { WHY } from '@/data/process';
import { FAQ } from '@/data/faq';
import { ILLUSTRATIVE_TOWNS } from '@/data/site';

export const metadata = {
  title: 'Residential Plumbing in Charlotte | Oakline Plumbing Co. (Concept)',
  description:
    'Concept homepage for a fictional Charlotte plumbing company: services, how requests work, coverage, and a short request form.',
};

export default function HomePage() {
  return (
    <div className="page-enter">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[linear-gradient(180deg,#F6F8F7_0%,#EDF7F5_100%)]"
          aria-hidden="true"
        />
        <div className="wrap relative pt-10 pb-14 md:pt-16 md:pb-20 lg:pt-20 lg:pb-24 grid lg:grid-cols-[1.05fr_.95fr] gap-10 lg:gap-16 items-center">
          <div className="hero-in">
            <Eyebrow text="Residential Plumbing in Charlotte, NC" />
            <h1 className="h1-hero" tabIndex={-1} data-page-h1>
              Plumbing Problems? Let’s Get Them Sorted.
            </h1>
            <p className="lede mt-6 measure">
              From leaking pipes to water heater trouble, Oakline Plumbing helps Charlotte homeowners understand their options and take the next step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ScrollToButton
                targetId="home-request"
                label="Request Service"
                variant="primary"
              />
              <CallButton label="Call Now" />
            </div>
            <p className="mt-5 text-sm text-charcoal-70 flex items-start gap-2 max-w-md">
              <Icon name="info" className="w-4 h-4 mt-0.5 text-teal flex-none" />
              <span>
                A request isn’t a confirmed appointment. For urgent problems, calling is the faster route.
              </span>
            </p>
          </div>

          <div className="relative lg:pl-6">
            <svg
              aria-hidden="true"
              className="absolute -left-2 -top-6 w-40 h-40 text-copper hidden lg:block"
              viewBox="0 0 100 100"
              fill="none"
            >
              <path
                d="M8 100V44a36 36 0 0 1 36-36h56"
                stroke="currentColor"
                strokeWidth="7"
                strokeLinecap="round"
              />
            </svg>
            <ImageWithFallback
              src={IMG.hero}
              alt="A plumber working under a kitchen sink in a home. Illustrative stock photo, not an Oakline employee."
              ratio="aspect-[5/4]"
              className="rounded-[24px] shadow-lift relative"
              priority
            />
            <div className="relative md:absolute md:-bottom-6 md:-left-4 lg:-left-10 mt-4 md:mt-0 bg-white rounded-2xl shadow-lift border border-[#D6E5E2] p-4 md:max-w-[290px] flex items-start gap-3">
              <span className="w-10 h-10 rounded-xl bg-aqua text-teal grid place-items-center flex-none">
                <Icon name="pin" className="w-5 h-5" />
              </span>
              <p className="text-[0.92rem]">
                <span className="font-semibold text-teal block">Charlotte homeowners</span>
                <span className="text-charcoal-70">
                  Coverage is confirmed for each address.{' '}
                  <Link href="/service-areas" className="text-link">
                    Check yours
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <TrustStrip />

      {/* Services Overview */}
      <section className="section" aria-labelledby="home-services">
        <div className="wrap">
          <SectionHeading
            id="home-services"
            title="Plumbing Help for the Problems You Face at Home"
            intro="Start with the problem you’re seeing. Each service page explains what’s involved, what affects cost, and what happens next."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((s) => (
              <ServiceCard key={s.slug} service={s} variant="compact" />
            ))}
          </div>
          <p className="mt-8 text-[0.95rem] text-charcoal-70">
            Toilets, faucets, and fixtures would be listed here only if the real company handles them.{' '}
            <Link href="/services" className="text-link">
              See all services
            </Link>
          </p>
        </div>
      </section>

      {/* Symptom Finder Section */}
      <section className="section bg-aqua" aria-labelledby="home-symptoms" id="finder">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-14 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 id="home-symptoms" className="h2">
              Not Sure What’s Causing the Problem?
            </h2>
            <p className="lede mt-4">
              Most people don’t know the cause, and that’s fine. Tell us what you’re noticing and we’ll point you to the most relevant page.
            </p>
            <p className="mt-4 text-[0.95rem] text-charcoal-70">
              Symptoms can have more than one cause, so a technician confirms what’s going on in person.
            </p>
          </div>
          <SymptomFinder id="home-finder" />
        </div>
      </section>

      {/* Why Oakline Standards */}
      <section className="section" aria-labelledby="home-why">
        <div className="wrap">
          <div className="grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start">
            <div>
              <h2 id="home-why" className="h2">
                Clear Communication From First Contact to Next Steps
              </h2>
              <p className="lede mt-4">
                Plumbing problems are stressful enough. These are the standards the site is designed to communicate, once a real business confirms them.
              </p>
              <div className="mt-6">
                <DemoTag text="Shown as example standards, not verified claims" />
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-9">
              {WHY.map((w, idx) => (
                <li key={idx}>
                  <IconBadge name={w.icon} tone="copper" />
                  <h3 className="h3 mt-4">{w.t}</h3>
                  <p className="text-charcoal-70 mt-2 text-[0.97rem]">{w.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Process Pipe */}
      <section className="section bg-white border-y border-[#DCE7E5]" aria-labelledby="home-process">
        <div className="wrap">
          <SectionHeading
            id="home-process"
            title="What Happens After You Reach Out?"
            intro="Four steps, and nothing goes ahead until you’ve approved it."
          />
          <ProcessPipe />
        </div>
      </section>

      {/* Featured Project */}
      <section className="section" aria-labelledby="home-work">
        <div className="wrap">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <h2 id="home-work" className="h2">
                See How Plumbing Work Can Be Explained Clearly
              </h2>
              <p className="lede mt-4">
                Each project story follows the same pattern: what was wrong, what was found, what was approved, and how it turned out.
              </p>
            </div>
            <Link href="/reviews-projects" className="text-link flex-none">
              View reviews & projects
            </Link>
          </div>
          <FeaturedProject />
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="home-coverage">
        <div className="wrap">
          <div className="rounded-[24px] bg-aqua p-6 md:p-12 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 id="home-coverage" className="h2">
                Serving Charlotte and Surrounding Communities
              </h2>
              <p className="lede mt-4">
                Charlotte is the focus of this concept. Nearby towns would be listed only once real coverage is confirmed.
              </p>
              <div className="flex flex-wrap gap-2 mt-6">
                <span className="chip chip-static !border-teal !bg-teal !text-white">
                  <Icon name="pin" className="w-4 h-4" />
                  Charlotte
                </span>
                {ILLUSTRATIVE_TOWNS.slice(0, 4).map((t) => (
                  <span key={t} className="chip chip-static !bg-white/70 !border-dashed">
                    {t}
                  </span>
                ))}
              </div>
              <p className="text-sm text-charcoal-70 mt-3">
                Dashed names are illustrative only, not verified coverage.
              </p>
              <div className="mt-7">
                <Button label="Check Service Area" href="/service-areas" variant="primary" />
              </div>
            </div>
            <CoverageMap />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section pt-0 md:pt-0 lg:pt-0" aria-labelledby="home-faq">
        <div className="wrap grid lg:grid-cols-[.8fr_1.2fr] gap-10 lg:gap-16">
          <div>
            <h2 id="home-faq" className="h2">
              Questions Before You Reach Out
            </h2>
            <p className="lede mt-4">
              Quick answers about requesting help and what to expect.
            </p>
          </div>
          <Accordion items={FAQ.home} />
        </div>
      </section>

      {/* Bottom Service Request Form */}
      <section
        className="section bg-teal on-dark"
        aria-labelledby="home-request-heading"
        id="home-request"
      >
        <div className="wrap grid lg:grid-cols-[.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          <div className="text-white">
            <h2
              id="home-request-heading"
              className="h2 !text-white"
              tabIndex={-1}
              data-scroll-target="home-request"
            >
              Tell Us What Plumbing Help You Need
            </h2>
            <p className="mt-4 text-white/80 text-[1.08rem] measure">
              A few details are enough to get started. Someone would review your request, check your area, and follow up about next steps.
            </p>
            <div className="mt-8 rounded-2xl bg-white/10 border border-white/15 p-5">
              <p className="font-semibold text-white flex items-center gap-2">
                <Icon name="alert" className="w-5 h-5 text-copper" />
                Urgent problem?
              </p>
              <p className="text-white/80 mt-1.5 text-[0.95rem]">
                For active leaks, backups, or no water, call instead of filling in the form.
              </p>
              <div className="mt-4">
                <CallButton variant="copper" label="Call Now" />
              </div>
            </div>
          </div>
          <div className="bg-white rounded-[22px] p-6 md:p-9 shadow-lift text-charcoal on-light">
            <InquiryForm variant="short" heading="Request service" />
          </div>
        </div>
      </section>
    </div>
  );
}
