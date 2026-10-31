/**
 * All business details in this file are fictional placeholders for demonstration
 * purposes and must be verified with a real business owner before reuse.
 */

import { SERVICES } from './services';

export const ROUTES = [
  {
    path: '/',
    title: 'Residential Plumbing in Charlotte | Oakline Plumbing Co. (Concept)',
    desc: 'Concept homepage for a fictional Charlotte plumbing company: services, how requests work, coverage, and a short request form.'
  },
  {
    path: '/services',
    title: 'Residential Plumbing Services | Oakline Plumbing Co. (Concept)',
    desc: 'Concept services directory: drain cleaning, leak repair, water heaters, and sewer lines, with help finding the right service by symptom.'
  },
  ...SERVICES.map(s => ({
    path: `/services/${s.slug}`,
    slug: s.slug,
    title: s.meta.title,
    desc: s.meta.desc
  })),
  {
    path: '/about',
    title: 'About Oakline Plumbing Co. | Portfolio Concept',
    desc: 'Concept About page showing where a real plumbing company’s owner story, team, standards, and verified credentials would appear.'
  },
  {
    path: '/reviews-projects',
    title: 'Example Project & Review Layouts | Oakline Concept',
    desc: 'Concept layouts for genuine reviews and project stories. No fabricated testimonials or ratings are shown.'
  },
  {
    path: '/service-areas',
    title: 'Charlotte Service Area | Oakline Plumbing Co. (Concept)',
    desc: 'Concept service area page centered on Charlotte, NC, with a demo ZIP check and accessible coverage list.'
  },
  {
    path: '/contact',
    title: 'Request Plumbing Service | Oakline Plumbing Co. (Concept)',
    desc: 'Concept contact page with a call option for urgent issues and a demo service request form.'
  },
  {
    path: '/thank-you',
    title: 'Request Received | Oakline Plumbing Co. (Concept)',
    desc: 'Demo request confirmation page.'
  },
  {
    path: '/privacy',
    title: 'Privacy Notice | Oakline Plumbing Co. (Concept)',
    desc: 'How this concept site handles form information.'
  },
  {
    path: '/terms',
    title: 'Website Terms | Oakline Plumbing Co. (Concept)',
    desc: 'Terms for using this concept site.'
  }
];
