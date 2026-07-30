# Desert Fox Digital — Project Structure
Version 3.1 | Production
**Supersedes:** SITE-STRUCTURE.md v2.0 (discarded — see Rationale below)

---

## Rationale

v2.0 was audited against `COMPONENTS.md`'s 46-component index, `BUILD-TRACKER.md`,
`IMPLEMENTATION-STANDARDS.md` §2, and `README.md`, and found to have:

- **11 of 46 documented components with no file in the tree** — including
  `Container` and `Section`, the two most-used primitives in the system.
- **6 files with no corresponding entry in `COMPONENTS.md`** (`NavLink.tsx`,
  `Hero.tsx`, `HeroContent.tsx`, `ApproachSection.tsx`, `WhySection.tsx`,
  `ProjectGrid.tsx`, `TestimonialGrid.tsx`) — violating the stated rule in
  `COMPONENTS.md` that every component must be registered before code is written.
  `WhySection.tsx` directly contradicted UI-PATTERNS.md Pattern 6, which states
  the Why section needs "no component wrapper."
- **A `docs/` folder listing four files** (`SEO.md`, `TECHNICAL-ARCHITECTURE.md`,
  `ROADMAP.md`, `CHANGELOG.md`) not referenced anywhere else in the doc set,
  while **omitting `BUILD-TRACKER.md` and itself**. `ROADMAP.md` in particular
  should not exist under that name — `BUILD-TRACKER.md` explicitly states it
  *replaces* `BUILD-ROADMAP.md`.
- Overlapping, undivided responsibility between `lib/seo.ts`, `content/seo.ts`,
  `config/seo.ts`, and between `lib/utils.ts` and a separate `utils/` folder.

This version is built directly from the 46-item component index, the four
build phases that define infrastructure (Phases 1, 3, 4, 5), and the actual
routes named in `UI-PATTERNS.md`. Nothing here is invented — every file below
traces to a specific document. Where the docs left something ambiguous, it's
called out explicitly in **Open Decisions** at the bottom rather than resolved
silently.

---

```
desertfoxdigital-site/
│
├── .github/
│   └── workflows/
│       └── ci.yml                      # Lint + type-check gate on PRs (IMPLEMENTATION-STANDARDS.md §12)
│
├── docs/
│   ├── FOUNDATIONS.md
│   ├── DESIGN-SYSTEM.md
│   ├── COMPONENTS.md
│   ├── UI-PATTERNS.md
│   ├── MOTION.md
│   ├── COPYWRITING.md
│   ├── IMPLEMENTATION-STANDARDS.md
│   ├── BUILD-TRACKER.md
│   └── SITE-STRUCTURE.md               # this file
│
├── public/
│   ├── favicon/
│   ├── fonts/                          # Self-hosted: Inter, Playfair Display, Geist Mono
│   ├── images/
│   │   ├── work/                       # AVIF + WebP project imagery
│   │   └── shared/                     # Editorial/shared photography (Approach, About, etc.)
│   ├── logos/                          # Client logos — LogoStrip (#28) only, max 8
│   └── og/                             # Open Graph images
│
│
├── src/
│   │
│   ├── app/
│   │   ├── (marketing)/
│   │   │   ├── page.tsx                # Homepage — Pattern 1 + Patterns 3–9
│   │   │   ├── about/
│   │   │   │   └── page.tsx            # Pattern 10
│   │   │   ├── services/
│   │   │   │   ├── page.tsx            # Pattern 11 — Service Overview
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Pattern 12 — Service Detail (×5 services)
│   │   │   ├── work/
│   │   │   │   ├── page.tsx            # Pattern 13 — Work Index
│   │   │   │   └── [slug]/
│   │   │   │       └── page.tsx        # Pattern 14 — Case Study
│   │   │   ├── contact/
│   │   │   │   └── page.tsx            # Pattern 15
│   │   │   └── journal/                # Scaffolded, NOT linked in primary nav — see Decisions Log #1
│   │   │       ├── page.tsx            # Pattern 16 — Journal Index
│   │   │       └── [slug]/
│   │   │           └── page.tsx        # Pattern 17 — Journal Post
│   │   │
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts            # The only API route in v1 (IMPLEMENTATION-STANDARDS.md §5)
│   │   │
│   │   ├── globals.css                 # @layer declaration + @import chain only — never edited beyond that
│   │   ├── layout.tsx                  # Root layout, next/font config, metadata base
│   │   ├── loading.tsx
│   │   ├── error.tsx
│   │   ├── not-found.tsx
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   └── manifest.ts
│   │
│   │
│   ├── styles/                         # One file per cascade layer — nothing else lives here
│   │   ├── tokens.css                  # Layer: tokens
│   │   ├── reset.css                   # Layer: reset
│   │   ├── base.css                    # Layer: base
│   │   ├── layout.css                  # Layer: layout
│   │   ├── components.css              # Layer: components
│   │   ├── patterns.css                # Layer: patterns
│   │   ├── animations.css              # Layer: animations
│   │   └── utilities.css               # Layer: utilities
│   │
│   │
│   ├── components/                     # Every file below maps 1:1 to a COMPONENTS.md entry (#1–#46)
│   │   │
│   │   ├── navigation/
│   │   │   ├── SiteNav.tsx             # #4 Primary Navigation
│   │   │   ├── MobileDrawer.tsx        # #46 Mobile Drawer
│   │   │   └── index.ts
│   │   │
│   │   ├── footer/
│   │   │   ├── SiteFooter.tsx          # #41 Footer
│   │   │   ├── FooterNav.tsx           # #5 Footer Navigation
│   │   │   ├── SocialLinks.tsx         # #42 Social Links
│   │   │   └── index.ts
│   │   │
│   │   ├── hero/
│   │   │   ├── AtmosphericBg.tsx       # #43 Atmospheric Background
│   │   │   ├── HeroCTA.tsx             # #32 Hero CTA Group
│   │   │   └── index.ts
│   │   │
│   │   ├── approach/
│   │   │   ├── ApproachRow.tsx         # #19 Approach Row
│   │   │   └── index.ts
│   │   │
│   │   ├── work/
│   │   │   ├── FeaturedProject.tsx     # #22 Featured Project
│   │   │   ├── ProjectCard.tsx         # #23 Project Card
│   │   │   ├── ProjectTags.tsx         # #24 Project Tags
│   │   │   ├── MetricBadge.tsx         # #25 Metric Badge
│   │   │   └── index.ts
│   │   │
│   │   ├── testimonials/
│   │   │   ├── TestimonialCard.tsx     # #26 Testimonial Card
│   │   │   ├── FeaturedTestimonial.tsx # #27 Featured Testimonial
│   │   │   └── index.ts
│   │   │
│   │   ├── sections/
│   │   │   ├── SectionHeader.tsx       # #18 Section Header
│   │   │   ├── ServiceDetailBlock.tsx  # #20 Service Detail Block
│   │   │   ├── ServiceGrid.tsx         # #21 Service Grid
│   │   │   ├── CtaBlock.tsx            # #30 CTA Block
│   │   │   └── index.ts
│   │   │
│   │   ├── forms/
│   │   │   ├── ContactForm.tsx         # #35 Form
│   │   │   ├── Input.tsx               # #36 Input
│   │   │   ├── Textarea.tsx            # #37 Textarea
│   │   │   ├── Select.tsx              # #38 Select
│   │   │   ├── Checkbox.tsx            # #39 Checkbox
│   │   │   ├── SuccessMessage.tsx      # #40 Success Message
│   │   │   └── index.ts
│   │   │
│   │   └── ui/
│   │       ├── Container.tsx           # #1 Container
│   │       ├── Section.tsx             # #2 Section
│   │       ├── Divider.tsx             # #3 Divider
│   │       ├── Button.tsx              # #6 Primary / #7 Secondary / #8 Ghost / #9 Icon Link
│   │       ├── Eyebrow.tsx             # #10 Eyebrow
│   │       ├── Heading.tsx             # #11 Section Heading
│   │       ├── Lead.tsx                # #12 Lead Paragraph
│   │       ├── Body.tsx                # #13 Body Paragraph
│   │       ├── Quote.tsx               # #14 Quote
│   │       ├── Tag.tsx                 # #15 Tag
│   │       ├── Badge.tsx               # #16 Badge
│   │       ├── Breadcrumb.tsx          # #17 Breadcrumb
│   │       ├── LogoStrip.tsx           # #28 Logo Strip
│   │       ├── StatisticsRow.tsx       # #29 Statistics Row
│   │       ├── InlineCta.tsx           # #31 Inline CTA
│   │       ├── ContactCard.tsx         # #33 Contact Card
│   │       ├── Accordion.tsx           # #34 FAQ Item / Accordion
│   │       ├── EmptyState.tsx          # #44 Empty State
│   │       ├── Skeleton.tsx            # #45 Skeleton
│   │       └── index.ts
│   │
│   │
│   ├── hooks/                          # BUILD-TRACKER.md §3.4 — no additional motion hooks permitted
│   │   ├── useScrollReveal.ts
│   │   ├── useNavScrollState.ts
│   │   ├── useReducedMotion.ts
│   │   └── useScrollPosition.ts        # Private utility consumed by useNavScrollState only
│   │
│   │
│   ├── content/                        # Static copy/data — BUILD-TRACKER.md §7.1
│   │   ├── homepage.ts
│   │   ├── about.ts
│   │   ├── services.ts
│   │   ├── work.ts
│   │   ├── contact.ts
│   │   ├── seo.ts                      # Per-page metadata content (title/description/OG per route)
│   │   └── journal.ts                  # Populated but unreferenced by SiteNav — see Decisions Log #1
│   │
│   │
│   ├── config/                         # Site-level configuration — BUILD-TRACKER.md §3.1
│   │   ├── site.ts
│   │   ├── navigation.ts               # Single source of truth for nav items (NOT duplicated in content/)
│   │   ├── seo.ts                      # Site-wide SEO defaults (metadataBase, default OG, etc.)
│   │   └── env.ts                      # Typed environment variable access
│   │
│   │
│   ├── lib/                            # Service wrappers / integrations only
│   │   ├── cn.ts                       # Class-name helper
│   │   ├── email.ts                    # Resend wrapper
│   │   └── analytics.ts                # Optional GA wrapper (NEXT_PUBLIC_GA_ID)
│   │
│   │
│   ├── types/                          # Shared interfaces — BUILD-TRACKER.md §3.3
│   │   ├── project.ts
│   │   ├── testimonial.ts
│   │   ├── navigation.ts
│   │   ├── approach.ts
│   │   └── service.ts
│   │
│   │
│   └── utils/                          # Pure functions only — no side effects, no I/O
│       ├── format.ts
│       ├── validation.ts
│       └── helpers.ts
│
│
├── middleware.ts
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── eslint.config.mjs
├── package.json
├── .nvmrc                              # Pins Node 20 LTS (IMPLEMENTATION-STANDARDS.md §1)
├── .env.local                          # Never committed
├── .env.local.example
├── .gitignore
└── README.md
```

---

## globals.css

```css
@layer tokens, reset, base, layout, components, patterns, animations, utilities;

@import '../styles/tokens.css'     layer(tokens);
@import '../styles/reset.css'      layer(reset);
@import '../styles/base.css'       layer(base);
@import '../styles/layout.css'     layer(layout);
@import '../styles/components.css' layer(components);
@import '../styles/patterns.css'   layer(patterns);
@import '../styles/animations.css' layer(animations);
@import '../styles/utilities.css'  layer(utilities);
```

Declared once. Never reordered after initial setup (IMPLEMENTATION-STANDARDS.md §3).

---

## styles/ Contents Reference

| File | Contents |
|---|---|
| `tokens.css` | All CSS custom properties — color, typography, spacing, radius, shadow, motion |
| `reset.css` | Box-sizing, margin, border resets only. No visual styles. |
| `base.css` | h1–h6, `.display`/`.display-xl`, `.lead`/`.body`/`.small`/`.caption`, `.eyebrow`, `blockquote`, form base appearances, `.prose` |
| `layout.css` | `.container` variants, 12/8/4-column grid, section spacing (120/96/72/56px), Surface 0–3 definitions |
| `components.css` | One class family per component, all 46 — `.site-nav`, `.btn-primary`, `.approach-row`, `.accordion`, etc. |
| `patterns.css` | Section-level assemblies per UI-PATTERNS.md — hero, approach, featured work, testimonials, section header |
| `animations.css` | `@keyframes`, `.reveal`/`.is-visible`/`.reveal-delay-1…4`, hero entrance, `.haze`, `.grain`, `prefers-reduced-motion` override |
| `utilities.css` | `.visually-hidden`, skip-to-content, `:focus-visible`, text alignment, spacing helpers |

---

## Decisions Log

Resolved with the project owner on this version. Recorded here instead of
silently baked into the tree, since each one overrides or deviates from
something stated in the source docs.

1. **Journal — scaffolded, not linked in v1.** Routes (`app/(marketing)/journal/`)
   and `content/journal.ts` stay in the tree so the pattern isn't rebuilt later,
   but `config/navigation.ts` ships with **4 items, not 5** — Work, Services,
   About, Contact. This is a deliberate deviation from `COMPONENTS.md` #4,
   whose example `navItems` array includes Journal:
   ```ts
   // COMPONENTS.md #4 — example array, includes Journal:
   { label: 'Journal', href: '/journal' }
   ```
   `COMPONENTS.md` should be annotated (not silently left inconsistent) to
   note Journal is present in the type/route but conditionally rendered —
   otherwise the next person implementing SiteNav from the doc alone will
   add it back. `BUILD-TRACKER.md` Phase 7's "Omission O11" (referenced but
   not present in this doc set) still needs resolving before Journal content
   is actually written — this only unblocks the file structure, not the
   content decision.

2. **Site logo — styled text, no image asset.** Renders as
   `<span className="logo">Desert Fox Digital</span>` (or similar) styled
   with `--font-logo` (Mekona), per `FOUNDATIONS.md`/`DESIGN-SYSTEM.md`
   reserving Mekona for "logo only." No `public/brand/` folder is needed.
   Lives inside `SiteNav.tsx` and `SiteFooter.tsx` directly — not a separate
   registered component, since it's just text with a token-driven font/style,
   consistent with `COMPONENTS.md`'s reuse rule (no new component where an
   existing primitive — here, plain styled text — already solves it).

3. **Deployment — Vercel only.** `ci.yml` (lint + type-check gate) stays;
   no `deploy.yml` is added, since Vercel's native Git integration handles
   deploys without a custom Action. This also confirms the app can use
   Server Components and the `/api/contact` route as documented — no static
   export constraint. Resolves the discrepancy flagged in the Phase 0 check
   between your stack notes ("Vercel, GitHub Pages") and the doc set
   (Vercel-only throughout).

4. **`lib/` vs `utils/` boundary** (carried over, already resolved in v3.0):
   `lib/` holds service wrappers with external dependencies (Resend, GA);
   `utils/` holds pure, dependency-free functions. No file exists in both.

---

**Document Status:** Production
**Version:** 3.1
**Replaces:** SITE-STRUCTURE.md v2.0
**Derived From:** COMPONENTS.md (46/46 mapped), BUILD-TRACKER.md Phases 1/3/4/5/7, UI-PATTERNS.md pattern index, IMPLEMENTATION-STANDARDS.md §2, README.md
**Decisions Log added:** v3.1 — journal nav scope, logo rendering, and deployment target confirmed with project owner
**Applies To:** All Desert Fox Digital web properties
