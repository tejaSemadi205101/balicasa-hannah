# Frontend Architecture -- Balicasa Hannah Project

## Tech Stack

```
Framework   : Next.js (Turbopack)
Language    : TypeScript (strict mode)
Styling     : Tailwind CSS v4
UI Library  : shadcn/ui (Radix UI primitives)
Animation   : Motion (formerly Framer Motion)
CMS         : Sanity
Package Mgr : pnpm
Hosting     : Vercel
```

---

## Build Tool

```
Bundler     : Turbopack (Next.js default dev bundler)
Dev script  : "next dev --turbopack"

DO NOT add --webpack flag unless a confirmed Turbopack error
is documented and reproduced consistently on the dev machine.
```

---

## Design Tokens

```
Style       : refer to global.css
Typography       : refer to typography.css

RULE: Never use hardcoded hex values in components.
      Always reference CSS variables from global.css
      and typography.css.
      If a variable does not exist, create it in global.css
      first under @theme {}, then reference it.
      Do not inline raw values anywhere in components.
```

### Typography

```
Serif (H1-H2)    : Playfair Display
Body / Labels    : Inter
Scale            : refer to typography.css for size, weight,
                   and line-height tokens

RULE: H1-H2 always use Playfair Display.
      Body copy, labels, captions always use Inter or Lato.
      Never mix serif fonts arbitrarily.
      Never use system fonts for branded sections.
```

---

## Rendering Strategy

```
DEFAULT          : Server Components
                   No 'use client' unless explicitly justified

STATIC (SSG)     : All marketing pages
                   homepage, about, facilities, services,
                   experiences, location, rates, about-us

INCREMENTAL (ISR): Content pages fed from Sanity CMS
                   Revalidate interval defined per page
                   based on expected update frequency

SERVER (SSR)     : Availability and booking pages only
                   Use only when real-time data is required

CLIENT COMPONENT : Only when browser APIs, event handlers,
                   or React hooks are strictly required
```

### When to Use 'use client'

```
ALLOWED          : Interactive booking widgets
                   Date pickers and calendar components
                   Form inputs with validation state
                   Scroll-triggered animations via Motion
                   Components reading window or document

NOT ALLOWED      : Layout components
                   Static content sections
                   Navigation (unless interactive state required)
                   Any component that can render on the server
```

---

## Component Architecture

```
STRUCTURE
/components
  /ui          → shadcn/ui base components
                 Do not modify these files directly
  /sections    → Page-level section components
                 HeroSection.tsx, FacilitiesGrid.tsx, etc.
  /layouts     → Page wrapper and layout components
  /common      → Shared components used across sections

NAMING
  PascalCase for all component files
  Suffix with component type:
    HeroSection.tsx
    FacilitiesGrid.tsx
    TestimonialCard.tsx

PROPS
  Always define props with TypeScript interfaces
  Export prop interfaces for reuse across components
  No implicit any -- strict typing required
```

---

## Tailwind CSS v4 Rules

```
CONFIG          : CSS-first configuration via @theme in global.css
                  No tailwind.config.js or tailwind.config.ts

THEME EXTENSION : All custom values go inside @theme {} in global.css
                  Do not create a separate config file

ARBITRARY VALUES: Avoid [value] syntax in class names
                  If a value is needed more than once,
                  define it as a CSS variable first

DARK MODE       : Use CSS variables approach
                  Do not use Tailwind dark: prefix
                  unless explicitly instructed
```

---

## Sanity CMS Integration

```
Purpose         : Content layer for villa descriptions,
                  facilities, gallery images, rates, FAQ entries

Fetching        : Server Components only
                  Never fetch Sanity data from Client Components

Pattern         : Fetch in page.tsx or layout.tsx
                  Pass data as props to child Server Components

Schema location : /sanity/schemas
Studio          : /studio or separate Sanity deployment

GROQ            : All queries use GROQ syntax
                  Type all query results with TypeScript interfaces
                  Never use 'any' for Sanity response types
```

---

## Figma Integration (MCP)

```
Plugin          : GLips/Figma-Context-MCP (via Cline marketplace)
Active file key : yPmyG3TWbAoH8Q1ykf40LM (Balicasa Megeve)

WORKFLOW
1. Read Figma context for the target section via MCP
2. Extract design tokens -- colors, spacing, typography
3. Map tokens to existing CSS variables in global.css
4. Build component using CSS variables, not raw Figma values
5. Verify color values against design tokens above
   before committing
```

---

## Motion (Animation) Rules

```
Library         : Motion (formerly Framer Motion)
Scope           : Client Components only
                  Animated components must use 'use client'

PERFORMANCE     : Prefer CSS transitions for hover and focus states
                  Use Motion only for:
                  - Scroll-triggered entrance animations
                  - Complex sequence animations
                  - Staggered list reveals

LCP RULE        : No Motion animations on above-the-fold content
                  that delay Largest Contentful Paint

ACCESSIBILITY   : Always respect prefers-reduced-motion
                  Wrap Motion animations with useReducedMotion hook
                  or @media (prefers-reduced-motion: reduce) in CSS
```

---

## Copy & Content Rules

```
Language        : English B1-B2 level
Supporting text : Maximum 2 lines per H2 or H3 block
                  Never 3 lines -- enforce at component level

FORBIDDEN WORDS : luxury, paradise, stunning, nestled,
                  world-class, magical, glamorous, spoiled,
                  idyllic, once-in-a-lifetime

NUMBERS RULE    : Always use concrete numbers and distances
                  "266 metres from Boy N Cow"
                  not "near restaurants"

RULE            : All hardcoded copy in components must comply
                  before commit
                  Copy fed from Sanity must be validated on entry
```

---

## File Conventions

```
COMPONENTS      : /components/[category]/ComponentName.tsx
PAGES           : /app/[route]/page.tsx (App Router)
STYLES          : /styles/global.css and typography.css
SANITY SCHEMAS  : /sanity/schemas/[content-type].ts
TYPES           : /types/[domain].ts
AGENT CONTEXT   : /.agents/memory/CONTEXT.md
```

---

## Page Inventory

```
/                    → Homepage
/about               → About Casa Hannah
/facilities          → Facilities page
/services            → Services page
/experiences         → Experiences page
/location            → Location page
/rates               → Rates page
/availability        → Availability & booking
```
