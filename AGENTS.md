# Bali Casa Hannah Website

## Project Mission

Build a premium luxury villa website focused on:

- Organic SEO growth
- Booking inquiry conversion
- Luxury hospitality branding
- High performance
- Long-term maintainability

---

## Business Objectives

Primary KPI:

- Increase direct booking inquiries
- Reduce OTA dependency
- Improve Google visibility

Secondary KPI:

- Increase user engagement
- Improve trust signals
- Showcase villa experience

---

## Target Audience

Primary:

- Australian travelers
- Families
- Groups
- Luxury vacation seekers

Secondary:

- European travelers
- Remote workers
- Long-stay guests

---

## Brand Positioning

Bali Casa Hannah is a luxury tropical villa experience.

Brand attributes:

- Premium
- Elegant
- Warm
- Trustworthy
- Private
- Relaxing

Avoid:

- Corporate appearance
- Startup appearance
- Generic Airbnb appearance

---

## Technical Stack

Frontend:

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 (using `@tailwindcss/postcss`)
- shadcn/ui

Deployment:

- Vercel

Data Management:

- Local configuration via `src/lib/site-pages.ts` (Source of truth for dynamic routes)
- JSON-LD Structured Data via `src/lib/schema.ts`

Analytics:

- Google Analytics 4
- Microsoft Clarity

---

## Engineering Principles

1. Server Components first.
2. Minimize client components.
3. Reuse before creating new components.
4. Accessibility is mandatory.
5. SEO is mandatory.
6. Performance is a feature.

## Development Conventions

### Architecture & Routing

- **Dynamic Pages**: Managed via `src/app/[slug]/page.tsx`. To add a new page, update the `sitePages` array in `src/lib/site-pages.ts`.
- **Component Hierarchy**:
  - `src/components/ui/`: Atomic primitives (Radix UI based).
  - `src/components/common/`: Global layout elements (Footer, Nav).
  - `src/components/sections/`: Page-specific blocks.

### Styling & Design System

- **Typography**: Use semantic classes from `src/app/styles/typography.css` (e.g., `.text-h1`, `.text-body-md`) instead of arbitrary Tailwind sizes.
- **Colors**: Use the custom theme variables defined in `src/app/globals.css` (e.g., Mahogany, Gold) to maintain the luxury brand identity.
- **Fonts**: Headings use `Libre Baskerville` (`--font-heading`), body uses `Inter` (`--font-body`).

### Tooling

- **Package Manager**: `pnpm`
- **Commands**: `pnpm dev`, `pnpm build`, `pnpm lint`.

7. Simplicity over cleverness.

---

## Performance Targets

Lighthouse:

- Performance ≥ 90
- Accessibility ≥ 95
- SEO = 100
- Best Practices ≥ 95

Core Web Vitals:

- LCP < 2.5s
- CLS < 0.1
- INP < 200ms

---

## SEO Requirements

Every page must include:

- Metadata
- Open Graph
- Canonical URL

Structured Data:

- Organization
- LodgingBusiness
- FAQ
- Breadcrumb

Semantic HTML is required.

---

## UX Principles

Every page must answer:

1. Why stay here?
2. Why trust this villa?
3. Why book now?

Every page must contain a clear CTA.

---

## Design Principles

Use:

- Large photography
- Strong visual hierarchy
- Generous whitespace
- Premium typography

Avoid:

- Excessive animations
- Visual clutter
- Overdesigned layouts

---

## Agent Workflow

Villa Architect
↓
Frontend Engineer
↓
Reviewer
↓
Approval
↓
Production

No implementation starts without architecture approval.

No deployment happens without reviewer approval.
