# Oakline Plumbing Co. — Next.js Application

A production-grade Next.js App Router conversion of the Oakline Plumbing Co. prototype. Built with clean, accessible, and maintainable modern JavaScript, React 19, and Tailwind CSS.

> **Honesty Safeguard & Fictional Concept Disclosure:**
> Oakline Plumbing Co. is a fictional portfolio concept created by PlumbNexo. All phone numbers, team members, reviews, and credentials shown are illustrative placeholders. Form submissions are simulated in-memory and nothing is transmitted over a network. Every page includes `noindex, nofollow` metadata.

---

## Table of Contents
- [Quick Start](#quick-start)
- [Available Scripts](#available-scripts)
- [Project Architecture](#project-architecture)
- [Route Mapping](#route-mapping)
- [Content Management Guide](#content-management-guide)
- [Component Structure](#component-structure)
- [Accessibility & Key Interactions](#accessibility--key-interactions)
- [Honesty & Compliance Safeguards](#honesty--compliance-safeguards)

---

## Quick Start

### Prerequisites
- Node.js 18.18+ or 20+
- npm (or yarn / pnpm)

### Setup & Run
```bash
# Install dependencies (if not already installed)
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Available Scripts

- **`npm run dev`**: Starts the local Next.js development server at port 3000.
- **`npm run build`**: Builds an optimized production build using Next.js with static site generation for all static routes.
- **`npm start`**: Runs the production server after building.
- **`npm run lint`**: Runs ESLint with Next.js core web vitals and React Hooks rules.

---

## Project Architecture

```
oakline-plumbing-co/
├── src/
│   ├── app/                               # Next.js App Router directory
│   │   ├── layout.js                      # Root layout (fonts, providers, skip link, chrome)
│   │   ├── globals.css                    # Tailwind CSS v4 tokens, components & utilities
│   │   ├── page.js                        # Home page (/)
│   │   ├── not-found.js                   # Custom 404 page with broken pipe illustration
│   │   ├── about/page.js                  # About page (/about)
│   │   ├── contact/page.js                # Contact page (/contact, supports ?service=)
│   │   ├── privacy/page.js                # Privacy policy (/privacy)
│   │   ├── reviews-projects/page.js       # Reviews & Projects gallery (/reviews-projects)
│   │   ├── service-areas/page.js          # Service areas & ZIP checker (/service-areas)
│   │   ├── services/
│   │   │   ├── page.js                    # Services directory (/services)
│   │   │   └── [slug]/page.js             # Shared service template (statically generated)
│   │   ├── terms/page.js                  # Website terms (/terms)
│   │   └── thank-you/page.js              # Guarded in-memory thank-you page (/thank-you)
│   ├── components/
│   │   ├── layout/                        # Global layout components
│   │   │   ├── ConceptBanner.js           # Top banner disclosing fictional concept
│   │   │   ├── Header.js                  # Sticky header with logo, nav, and phone CTA
│   │   │   ├── NavDropdown.js             # Accessible services dropdown (click/hover/keys)
│   │   │   ├── MobileMenu.js              # Full-screen mobile drawer with focus trap
│   │   │   ├── MobileBar.js               # Sticky bottom bar for mobile screens
│   │   │   ├── Footer.js                  # Site footer with disclosure & sitemap
│   │   │   ├── CallModal.js               # Accessible demo call modal with focus lock
│   │   │   └── NavigationManager.js       # Route change watcher (scroll, focus H1, announce)
│   │   ├── sections/                      # Major page sections
│   │   │   ├── PageHero.js                # Reusable hero banner for interior pages
│   │   │   ├── FinalCta.js                # Bottom conversion strip
│   │   │   ├── ServiceCard.js             # Compact (home) and Full (services) cards
│   │   │   ├── SymptomFinder.js           # Interactive symptom diagnostic widget
│   │   │   ├── ProcessPipe.js             # Animated 4-step pipe track (IntersectionObserver)
│   │   │   ├── GalleryFilter.js           # Filterable projects grid with screen reader announcements
│   │   │   ├── ZipChecker.js              # Interactive service area ZIP validator
│   │   │   ├── InquiryForm.js             # Robust inquiry form with validation & simulation
│   │   │   ├── FactorGrid.js              # Pricing / estimate factor cards
│   │   │   ├── CompareCards.js            # Standard vs Premium repair comparisons
│   │   │   ├── FeaturedProject.js         # Case study project showcase
│   │   │   ├── CoverageMap.js             # Stylized vector coverage map
│   │   │   └── TrustStrip.js              # Credential & proof strip
│   │   └── ui/                            # Atomic, reusable UI primitives
│   │       ├── Accordion.js               # Accessible expandable FAQ item
│   │       ├── Breadcrumbs.js             # Accessible breadcrumb trail
│   │       ├── Button.js                  # Polymorphic button / Next Link (primary, secondary, copper, ghost)
│   │       ├── CallButton.js              # Trigger button for Call Modal
│   │       ├── DemoTag.js                 # Honesty tag badge with info icon
│   │       ├── Eyebrow.js                 # Section eyebrow pill
│   │       ├── Icon.js                    # Typed SVG icon renderer from icon path dictionary
│   │       ├── IconBadge.js               # Icon badge with colored background
│   │       ├── ImageWithFallback.js       # Next.js Image wrapper with branded error fallback
│   │       ├── Notice.js                  # Alert / callout box (info, warn, error, success)
│   │       ├── ProofSlot.js               # Dashed placeholder slot for proof / credentials
│   │       ├── ScrollToButton.js          # Smooth scroll anchor trigger with focus transfer
│   │       └── SectionHeading.js          # Reusable section heading + lede block
│   ├── context/                           # React Context providers (in-memory)
│   │   ├── CallModalContext.js            # Global state for opening/closing the demo call modal
│   │   └── SubmissionContext.js           # In-memory storage for submitted request info
│   ├── data/                              # Content single-sources of truth
│   │   ├── site.js                        # General site info, navigation links, service towns
│   │   ├── services.js                    # Services catalog, Unsplash photos, and service configs
│   │   ├── symptoms.js                    # Symptom diagnostic data
│   │   ├── faq.js                         # FAQ entries grouped by section
│   │   ├── process.js                     # 4-step service process & "Why Oakline" factors
│   │   ├── icons.js                       # SVG path definitions for all site icons
│   │   └── routes.js                      # Route metadata (titles, descriptions, canonical paths)
│   └── lib/
│       └── utils.js                       # CSS class merging helper (cn)
├── public/                                # Static assets (favicon.svg, robots.txt)
├── next.config.mjs                        # Next.js build and image domain configuration
├── package.json                           # Dependencies and scripts
└── README.md                              # This file
```

---

## Route Mapping

| Prototype Hash | Next.js App Router Route | Static Params / Query | Page Component |
|---|---|---|---|
| `#/` | `/` | — | `src/app/page.js` |
| `#/services` | `/services` | — | `src/app/services/page.js` |
| `#/services/drain-cleaning` | `/services/drain-cleaning` | `slug: "drain-cleaning"` | `src/app/services/[slug]/page.js` |
| `#/services/leak-repair` | `/services/leak-repair` | `slug: "leak-repair"` | `src/app/services/[slug]/page.js` |
| `#/services/water-heaters` | `/services/water-heaters` | `slug: "water-heaters"` | `src/app/services/[slug]/page.js` |
| `#/services/sewer-lines` | `/services/sewer-lines` | `slug: "sewer-lines"` | `src/app/services/[slug]/page.js` |
| `#/about` | `/about` | — | `src/app/about/page.js` |
| `#/reviews-projects` | `/reviews-projects` | — | `src/app/reviews-projects/page.js` |
| `#/service-areas` | `/service-areas` | — | `src/app/service-areas/page.js` |
| `#/contact` | `/contact` | `?service={slug}` | `src/app/contact/page.js` |
| `#/thank-you` | `/thank-you` | Guarded (in-memory) | `src/app/thank-you/page.js` |
| `#/privacy` | `/privacy` | — | `src/app/privacy/page.js` |
| `#/terms` | `/terms` | — | `src/app/terms/page.js` |
| *any unknown* | `not-found.js` (404) | — | `src/app/not-found.js` |

---

## Content Management Guide

All copy, services, symptoms, FAQs, and navigation links live strictly inside `src/data/`. To update content, edit the corresponding data file without modifying page markup:

### 1. General Site Info & Towns
- **File:** `src/data/site.js`
- Contains:
  - `SITE`: Company name, phone, email, license number, emergency response copy, hours, and disclosures.
  - `NAV`: Main navigation links and their route paths.
  - `ILLUSTRATIVE_TOWNS`: Towns served, counties, and ZIP codes.

### 2. Services & Service Details
- **File:** `src/data/services.js`
- Contains:
  - `SERVICES`: Array of service objects with `id`, `name`, `slug`, `icon`, `summary`, `scope`, `bullets`, `typicalUse`, `signals`, and `meta`.
  - `SERVICE_EXTRAS`: Per-service layout configurations (factors, comparisons, featured project, FAQ items).
  - `IMG`: Approved Unsplash imagery with descriptive alt text and photographic credits.
  - `SERVICE_OPTIONS`: Options shown in dropdown selectors.

### 3. FAQs
- **File:** `src/data/faq.js`
- Contains `FAQ` arrays grouped by category:
  - `home`: General questions for the homepage accordion.
  - `services`: Service directory questions.
  - `areas`: Coverage and dispatch questions for the Service Areas page.
  - `contact`: Inquiry and estimate questions for the Contact page.

### 4. Symptoms & Diagnostic Widget
- **File:** `src/data/symptoms.js`
- Contains `SYMPTOMS`: The interactive symptom selector items with matching service references and recommended actions.

### 5. Work Process & Why Oakline
- **File:** `src/data/process.js`
- Contains:
  - `PROCESS`: The 4 sequential steps displayed in the animated pipe diagram.
  - `WHY`: The 4 trust and quality pillars.

---

## Component Structure

### Server vs. Client Components
- **Server Components (Default):** All page routes, section wrappers (`PageHero`, `FinalCta`, `FactorGrid`, `CompareCards`, `FeaturedProject`, `CoverageMap`, `TrustStrip`, `ServiceCard`), `Header` chrome, `Footer`, and UI badges (`DemoTag`, `ProofSlot`, `Notice`).
- **Client Components (`"use client"`):**
  - Interactive navigation: `NavDropdown`, `MobileMenu`, `NavigationManager`.
  - Modals & triggers: `CallModal`, `CallButton`.
  - Interactive UI: `Accordion`, `ImageWithFallback`, `ScrollToButton`.
  - Dynamic widgets: `InquiryForm`, `SymptomFinder`, `ZipChecker`, `GalleryFilter`, `ProcessPipe`.

---

## Accessibility & Key Interactions

1. **Navigation & Screen Readers:**
   - Every route change instantly scrolls to the top of the page (`window.scrollTo(0, 0)`).
   - Focus is automatically transferred to the page's `<h1>` (`tabIndex={-1}` and `data-page-h1`), so screen reader users immediately hear the new page context.
   - Screen reader announcement via a live region (`aria-live="polite"`): `"{Page Title} page loaded"`.
   - Skip-to-content link: Present as the very first tabbable element in the DOM.

2. **Services Dropdown:**
   - Opens immediately on click.
   - Opens on hover with a 180ms hover-intent delay to prevent accidental flickering.
   - Arrow keys (`ArrowDown` / `ArrowUp`) navigate through menu items; `Escape` closes the menu and returns focus to the toggle button.

3. **Mobile Drawer:**
   - Traps keyboard focus when open.
   - Closes automatically on `Escape` key, backdrop click, or link selection.
   - Restores focus to the hamburger button upon closing.

4. **Call Modal:**
   - Traps keyboard focus within the dialog.
   - Prevents background page scrolling (`overflow: hidden` on `document.body`).
   - Closes on `Escape` key or clicking outside the modal dialog.
   - Restores focus to whichever element triggered the modal.

5. **Inquiry Form:**
   - Accessible form labels with explicit `id` bindings.
   - Top-level error summary box that provides clickable anchor jumps to invalid inputs.
   - Live validation activates after the first submit attempt.
   - Double-submission lock disables buttons while processing.
   - Simulated failure checkbox allows testing the retry flow with a simulated 1.2s network latency.

6. **Guarded Thank-You Page:**
   - Stores submitted request data strictly in memory via React Context (no `localStorage`, cookies, or network requests).
   - Direct visits or page refreshes without an in-memory submission display "No request to confirm" with a link back to the contact form.

---

## Honesty & Compliance Safeguards

- **Top Concept Banner:** Visible on every page clarifying that this is a fictional demonstration portfolio piece by PlumbNexo.
- **Footer Disclosure:** Clear disclaimer stating Oakline Plumbing Co. is not a licensed contracting business and takes no real service calls.
- **Demo Tags:** Every form, image, and example layout contains an explicit demo tag (`Demo form — nothing is sent`, `Illustrative image`, `Example project layout`).
- **Proof Placeholders:** Dashed proof slots for reviews, licenses, and team photos make it clear no fake testimonials or credentials are fabricated.
- **Search Engine Directive:** `robots: { index: false, follow: false }` is set in the root layout metadata to prevent indexing.

---

## License & Attribution

Designed and engineered as a demonstration portfolio piece for PlumbNexo.
"# Oakline-Plumbing-Co" 
