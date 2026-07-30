# Desert Fox Digital — Build Tracker

**Version:** 2.0
**Status:** 🟡 Ready to Begin
**Replaces:** BUILD-ROADMAP.md (v1.0) + BUILD-CHECKLIST.md (v1.0)
**Standards reference:** IMPLEMENTATION-STANDARDS.md
**Design reference:** FOUNDATIONS.md → DESIGN-SYSTEM.md → COMPONENTS.md → UI-PATTERNS.md → MOTION.md

> Complete phases top-to-bottom. Never skip a phase — rework cost rises sharply downstream.
> Each phase opens with orientation (objective, risks, effort) followed by discrete checkboxes.
> Mark a checkbox complete only when the item and its QA pass.
> When a phase's exit criteria are all checked, mark it complete in the dashboard and move forward.

---

## Project Dashboard

| Field | Value |
|-------|--------|
| Project | Desert Fox Digital marketing site |
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict, zero `any`) |
| Styling | CSS Cascade Layers (global only) |
| Package manager | npm |
| Node | 20 LTS minimum |
| Deployment | Vercel |
| Components | 46 (COMPONENTS.md) |
| Patterns | 19 (UI-PATTERNS.md) |
| Motion hooks | 3 |

### Overall Milestone Progress

- [ ] Phase 0 — Pre-flight
- [ ] Phase 1 — Foundation
- [ ] Phase 2 — Design System
- [ ] Phase 3 — Utilities, Config, Types, Hooks
- [ ] Phase 4 — Core UI Primitives (#1–#17)
- [ ] Phase 5 — Composite Components (#18–#46)
- [ ] Phase 6 — Motion System
- [ ] Phase 7 — Content
- [ ] Phase 8 — Homepage
- [ ] Phase 9 — Remaining Pages
- [ ] Phase 10 — Production & Launch

### Dependency Graph

```
Phase 0
  └─► Phase 1
        └─► Phase 2
              └─► Phase 3
                    └─► Phase 4
                          └─► Phase 5
                                └─► Phase 6
                                      └─► Phase 8 ◄── Phase 7 (parallel-safe)
                                            └─► Phase 9
                                                  └─► Phase 10
```

### Risk Register

| Risk | Mitigation |
|------|------------|
| Token / theme drift | `tokens.css` is authoritative; sync any theme file before motion work |
| Scope creep (new components) | Must be added to COMPONENTS.md before any code is written |
| Accessibility debt | Treat a11y as a release requirement; block merges on failures |
| Motion that feels decorative | Apply the "remove it?" test before shipping; max three simultaneous |
| Content limits exceeded | Enforce in content modules and at PR review |
| Unapproved dependencies | Explicit approval required; default is reject |
| Parallel work conflicts | Feature branches + Conventional Commits; docs updated first |

---

## Phase 0 — Pre-flight

**Objective**
Confirm environment, documentation, and repository hygiene so implementation can begin without blockers.

**Dependencies:** None
**Estimated effort:** < 0.5 days
**Risk:** Outdated or conflicting docs from earlier drafts — treat the uploaded production set as the sole source of truth.

### Environment confirmation
- [ ] Node 20 LTS installed and verified (`node -v`)
- [ ] npm 10+ available (`npm -v`)
- [ ] Git repository initialized / cloned
- [ ] `.nvmrc` or `package.json` `engines` field pins Node 20

### Documentation present and current
- [ ] `docs/FOUNDATIONS.md`
- [ ] `docs/DESIGN-SYSTEM.md`
- [ ] `docs/COMPONENTS.md`
- [ ] `docs/UI-PATTERNS.md`
- [ ] `docs/MOTION.md`
- [ ] `docs/IMPLEMENTATION-STANDARDS.md`
- [ ] `docs/SITE-STRUCTURE.md` (or equivalent authoritative tree)
- [ ] Root `README.md` updated to match current standards

### Repository hygiene
- [ ] `.gitignore` excludes `.env.local`, `node_modules`, `.next`, build artifacts
- [ ] `.env.local.example` exists with all required keys
- [ ] Branch protection plan confirmed (`main` protected; feature branches only)

**Exit criteria:** Environment ready. Full doc set present and current. Clean repo baseline.

---

## Phase 1 — Foundation

**Objective**
Stand up a compilable Next.js 15 App Router shell with fonts, environment, and global CSS entry point. Nothing visual beyond a placeholder page.

**Dependencies:** Phase 0
**Estimated effort:** 0.5–1 day
**Risk:** Unapproved dependencies introduced at this stage — reject unless explicitly approved in IMPLEMENTATION-STANDARDS.md.

### 1.1 Project configuration
- [ ] `package.json` — Next.js 15, React, TypeScript, Lucide React; no unapproved deps
- [ ] `tsconfig.json` — strict mode, zero `any`
- [ ] `next.config.ts`
- [ ] `eslint.config.mjs`
- [ ] `postcss.config.mjs` (if needed)
- [ ] `.env.local.example`
- [ ] `.env.local` (local only — never commit)
- [ ] `middleware.ts` (if required for redirects or headers)

### 1.2 App Router shell
- [ ] `src/app/layout.tsx` — root layout, fonts, metadata base
- [ ] `src/app/globals.css` — cascade layer order declared once, never changed
- [ ] `src/app/page.tsx` — placeholder homepage
- [ ] `src/app/loading.tsx`
- [ ] `src/app/error.tsx`
- [ ] `src/app/not-found.tsx`
- [ ] `src/app/sitemap.ts`
- [ ] `src/app/robots.ts`
- [ ] `src/app/manifest.ts`

### 1.3 Fonts
- [ ] Self-hosted fonts in `public/fonts/` — Inter, Playfair Display, Geist Mono
- [ ] `next/font/local` configuration in root layout (do not use `next/font/google`)
- [ ] Critical weights preloaded: Inter 400/600, Playfair Display 400/500
- [ ] `font-display: swap`

### 1.4 Environment variables
- [ ] `NEXT_PUBLIC_SITE_URL`
- [ ] `CONTACT_EMAIL`
- [ ] `RESEND_API_KEY`
- [ ] `NEXT_PUBLIC_GA_ID` (optional)

**Exit criteria:** `npm run dev` starts cleanly. Root layout renders. Fonts load with `font-display: swap`. `npm run type-check` and `npm run lint` pass on the empty shell.

---

## Phase 2 — Design System

**Objective**
Establish the complete CSS architecture and all design tokens so every subsequent component draws from a single source of truth. No component should be started before this phase exits.

**Dependencies:** Phase 1
**Estimated effort:** 1–2 days
**Risk:** Token drift between `tokens.css` and any `theme.css` — `tokens.css` always wins on conflict.

### 2.1 Cascade layer order (`globals.css`)

```css
@layer tokens, reset, base, layout, components, patterns, animations, utilities;
```

- [ ] Layer order declared exactly once in `src/app/globals.css`
- [ ] All eight `@import` statements present, pathed correctly, and using layer syntax

### 2.2 Layer files (`src/styles/`)
- [ ] `tokens.css` — all design tokens: colors, typography, spacing, radius, shadow, motion
- [ ] `reset.css` — box-sizing, margin/border resets only
- [ ] `base.css` — h1–h6, display classes, lead/body/small/caption, eyebrow, blockquote, prose, form base
- [ ] `layout.css` — `.container` variants, 12/8/4 column grid, section spacing, Surface 0–3 definitions
- [ ] `components.css` — styles for all 46 components; one class family per component
- [ ] `patterns.css` — section-level pattern assemblies
- [ ] `animations.css` — `@keyframes`, base transitions, `.reveal`/`.is-visible`, haze, grain, hero entrance, reduced-motion
- [ ] `utilities.css` — `.visually-hidden`, skip-to-content, focus-visible, text alignment, spacing helpers, display utilities

### 2.3 Token verification
- [ ] Color tokens match DESIGN-SYSTEM.md §2
- [ ] Typography tokens including fluid `clamp()` values
- [ ] Spacing scale (8-point)
- [ ] Radius tokens
- [ ] Shadow tokens — none / sm / md only
- [ ] Motion tokens: `--duration-*`, `--ease-standard`, `--ease-linear`
- [ ] **Known conflict resolved:** `--duration-slow: 500ms` (not 400ms) — update any theme file that still reads 400ms
- [ ] `theme.css` (if present) kept in sync; `tokens.css` wins on any conflict

### 2.4 Global accessibility utilities
- [ ] Skip-to-content link present and styled
- [ ] Visible `:focus-visible` indicator
- [ ] Global `prefers-reduced-motion` rule collapses all durations to `0.01ms`

**Exit criteria:** All values reference tokens. Zero hardcoded colors, spacing, or durations anywhere in the layer files. `npm run type-check` and `npm run lint` clean.

---

## Phase 3 — Utilities, Config, Types, Hooks

**Objective**
Create the shared TypeScript and React infrastructure — config, types, pure utilities, and the three motion hooks. Hooks are implemented here but not wired to UI until Phase 6.

**Dependencies:** Phase 2 (tokens must exist for any CSS-aware utilities)
**Estimated effort:** 0.5–1 day

### 3.1 Config (`src/config/`)
- [ ] `site.ts`
- [ ] `navigation.ts`
- [ ] `seo.ts`
- [ ] `env.ts` — typed environment variable access

### 3.2 Lib / Utils (`src/lib/`, `src/utils/`)
- [ ] `cn.ts` — class-name helper (if used)
- [ ] Pure utility functions as needed
- [ ] `email.ts` — Resend wrapper
- [ ] `analytics.ts` — optional GA wrapper

### 3.3 Types (`src/types/`)
- [ ] `project.ts`
- [ ] `testimonial.ts`
- [ ] `navigation.ts`
- [ ] `approach.ts`
- [ ] `service.ts`
- [ ] Shared interfaces only; component-specific types may be co-located

### 3.4 Motion hooks (`src/hooks/`) — implement now, wire in Phase 6
- [ ] `useReducedMotion.ts`
- [ ] `useScrollReveal.ts`
- [ ] `useNavScrollState.ts`
- [ ] `useScrollPosition.ts` — private utility used internally by `useNavScrollState`; not a standalone motion hook

**Rule:** No additional motion hooks in v1.

**Exit criteria:** Hooks compile and export cleanly. Environment access is typed. No motion wiring yet — that is Phase 6.

---

## Phase 4 — Core UI Primitives (#1–#17)

**Objective**
Build the atomic building blocks required by every page and composite component. Every primitive must satisfy the Definition of Done before Phase 5 begins.

**Dependencies:** Phases 1–3
**Estimated effort:** 2–3 days
**Risk:** Skipping states or semantic HTML — these are blocked at PR review.

Build in the order below. Each component must satisfy the Definition of Done (end of this document) before moving to the next.

### Layout primitives
- [ ] **#1 Container** — `ui/Container.tsx`
  Variants: default / reading / wide / full
  QA: padding at 375 / 768 / 1200 / 1440; never touches viewport edge
- [ ] **#2 Section** — `ui/Section.tsx`
  Surfaces 0–3 via `data-surface` attribute; spacing tokens; `id` support
- [ ] **#3 Divider** — `ui/Divider.tsx`
  Variants: full / inset / short

### Buttons and links
- [ ] **#6 Primary Button**
- [ ] **#7 Secondary Button**
- [ ] **#8 Ghost Button**
- [ ] **#9 Icon Link**
  File: `ui/Button.tsx`
  QA (all variants): Default / Hover / Focus / Active / Disabled / Loading; keyboard navigable; 44×44px minimum touch target; label ≤3 words

### Typography primitives
- [ ] **#10 Eyebrow** — `ui/Eyebrow.tsx`
- [ ] **#11 Section Heading** — `ui/Heading.tsx` (levels 1–4, display variants)
- [ ] **#12 Lead Paragraph** — `ui/Lead.tsx`
- [ ] **#13 Body Paragraph** — `ui/Body.tsx`
- [ ] **#14 Quote** — `ui/Quote.tsx`

### Small UI
- [ ] **#15 Tag** — `ui/Tag.tsx`
- [ ] **#16 Badge** — `ui/Badge.tsx`
- [ ] **#17 Breadcrumb** — `ui/Breadcrumb.tsx`

### Navigation
- [ ] **#4 Primary Navigation** — `navigation/SiteNav.tsx`
  Transparent → filled on scroll; mobile hamburger; `aria-label`; active page state
- [ ] **#46 Mobile Drawer** — `navigation/MobileDrawer.tsx`
  Focus trap; Escape closes; backdrop; body scroll lock; 250ms slide

### Footer
- [ ] **#5 Footer Navigation** — `footer/FooterNav.tsx`
- [ ] **#42 Social Links** — `footer/SocialLinks.tsx`
- [ ] **#41 Site Footer** — `footer/SiteFooter.tsx` (5-column → single column on mobile)

**Barrel exports:** every subdirectory must have `index.ts`.

**Exit criteria:** All primitives render in isolation. All states present. No inline styles. Semantic HTML. Tokens only.

---

## Phase 5 — Composite Components (#18–#46)

**Objective**
Assemble higher-level marketing and form components on top of the primitives built in Phase 4. Prefer composition over duplication at every step.

**Dependencies:** Phase 4
**Estimated effort:** 3–5 days
**Risk:** Building page-specific logic directly inside composites — any reusable UI must live in `components/`.

### Section-level
- [ ] **#18 Section Header** — `sections/SectionHeader.tsx`
- [ ] **#20 Service Detail Block** — `sections/ServiceDetailBlock.tsx`
- [ ] **#21 Service Grid** — `sections/ServiceGrid.tsx`
- [ ] **#30 CTA Block** — `sections/CtaBlock.tsx`
- [ ] **#31 Inline CTA** — `ui/InlineCta.tsx`

### Approach
- [ ] **#19 Approach Row** — `approach/ApproachRow.tsx`
  Exactly 5 rows on homepage; hover states per MOTION.md

### Work
- [ ] **#22 Featured Project** — `work/FeaturedProject.tsx`
- [ ] **#23 Project Card** — `work/ProjectCard.tsx`
- [ ] **#24 Project Tags** — `work/ProjectTags.tsx`
- [ ] **#25 Metric Badge** — `work/MetricBadge.tsx`

### Testimonials
- [ ] **#26 Testimonial Card** — `testimonials/TestimonialCard.tsx`
- [ ] **#27 Featured Testimonial** — `testimonials/FeaturedTestimonial.tsx`

### Marketing UI
- [ ] **#28 Logo Strip** — `ui/LogoStrip.tsx` (max 8 logos; 100% opacity on touch devices via `@media (hover: hover)`)
- [ ] **#29 Statistics Row** — `ui/StatisticsRow.tsx` (max 4 stats)
- [ ] **#33 Contact Card** — `ui/ContactCard.tsx`
- [ ] **#44 Empty State** — `ui/EmptyState.tsx`
- [ ] **#45 Skeleton** — `ui/Skeleton.tsx`

### Forms
- [ ] **#36 Input** — `forms/Input.tsx`
- [ ] **#37 Textarea** — `forms/Textarea.tsx`
- [ ] **#38 Select** — `forms/Select.tsx`
- [ ] **#39 Checkbox** — `forms/Checkbox.tsx`
- [ ] **#40 Success Message** — `forms/SuccessMessage.tsx`
- [ ] **#35 Contact Form** — `forms/ContactForm.tsx` (max 6 fields)
- [ ] **#34 FAQ / Accordion** — `ui/Accordion.tsx`
  Uses `<button>` + `aria-expanded` + `aria-controls`; panel has `role="region"` + `aria-labelledby`; height + opacity only; 250ms

### Hero and atmosphere
- [ ] **#32 Hero CTA Group** — `hero/HeroCTA.tsx`
- [ ] **#43 Atmospheric Background** — `hero/AtmosphericBg.tsx`
  Layers: gradient → grain → haze → content
  Haze: 15s linear alternate, <10% opacity, disabled under reduced motion

**Exit criteria:** All 46 components exist and match their TypeScript interfaces in COMPONENTS.md. All defined states implemented. Form and accordion accessibility complete. Composition preferred over duplication.

---

## Phase 6 — Motion System

**Objective**
Wire the three motion hooks and CSS animations so the site feels calm, editorial, and intentional. Motion should pass the "does removing this improve it?" test — if yes, cut it.

**Dependencies:** Phases 2, 3, 4, 5 — especially AtmosphericBg and SectionHeader
**Estimated effort:** 1–2 days
**Risk:** Decorative animation that fails the removal test — cut before shipping, not after.

### CSS foundation
- [ ] Motion tokens verified in `tokens.css`
- [ ] `@keyframes` and transition utilities in `animations.css`
- [ ] `.reveal` / `.is-visible` + stagger delay classes (1–4)
- [ ] Hero entrance sequence classes
- [ ] Haze keyframes
- [ ] Global reduced-motion override in `utilities.css`

### Hooks wired
- [ ] `useScrollReveal` applied to section headers, cards, and rows
- [ ] `useNavScrollState` drives SiteNav transparent → filled transition
- [ ] `useReducedMotion` gates haze and scroll-reveal transforms

### Behavior verification
- [ ] Scroll reveal: opacity 0→1, `translateY(16px)`→0, 500ms, 80ms stagger, 15% trigger threshold, plays once
- [ ] Hero entrance order: Nav (instant) → Headline → Paragraph (+100ms) → CTA (+200ms) → Background (+1200ms)
- [ ] Hover motions ≤150ms
- [ ] Max three simultaneous animations at any moment
- [ ] Only `transform` and `opacity` animated (accordion height is the one named exception)
- [ ] Reduced motion: no haze, no reveal transforms — content appears in its final state immediately

**Exit criteria:** All MOTION.md behaviors satisfied. No animation feels decorative. Reduced motion tested in DevTools.

---

## Phase 7 — Content

**Objective**
Move all static copy and data into `src/content/` so page files stay clean and content limits are enforceable in one place.

**Dependencies:** Can be drafted in parallel with Phases 4–6; must be ready before Phase 8 begins
**Estimated effort:** 1–2 days (overlap-safe)

### Content modules (`src/content/`)
- [ ] `homepage.ts` — hero, approach rows, featured work, why section, testimonials, CTA
- [ ] `about.ts`
- [ ] `services.ts` — overview + five service detail datasets
- [ ] `work.ts` — projects, metrics, tags
- [ ] `contact.ts` — form labels, FAQ, contact card
- [ ] `navigation.ts` (or confirm already in `src/config/`)
- [ ] `seo.ts` — metadata content per page
- [ ] Journal stubs if journal is confirmed in v1 scope (decision required — see Omission O11)

### Content limits (UI-PATTERNS.md — enforced here)
- Hero headline ≤12 words
- Lead ≤3 lines
- Project description ≤3 lines
- Tags ≤5 per project; metrics ≤3 per project
- Testimonial quote ≤5 lines
- Approach rows = exactly 5
- Button labels ≤3 words

**Exit criteria:** No long inline strings in JSX. Brand voice matches FOUNDATIONS.md §3. No lorem ipsum or TODOs in production content.

---

## Phase 8 — Homepage

**Objective**
Assemble the homepage strictly from UI-PATTERNS.md (Patterns 1–9, 18, 19). The page must educate before it asks for action. One dominant focal point and one primary CTA per section.

**Dependencies:** Phases 4–7
**Estimated effort:** 1–2 days

### Assembly checklist
- [ ] Page Shell (Pattern 1) — SiteNav → content → CtaBlock → SiteFooter
- [ ] Hero (Pattern 3) — Surface 2 + AtmosphericBg + Eyebrow + Display XL + Lead + HeroCtaGroup; minimum height 90vh desktop, natural height mobile
- [ ] Approach (Pattern 4) — SectionHeader + 5× ApproachRow + Dividers
- [ ] Featured Work (Pattern 5) — SectionHeader + FeaturedProject + 3× ProjectCard + secondary "View All Work" CTA
- [ ] Why Desert Fox Digital (Pattern 6) — three editorial columns (plain `<div>` elements in a CSS grid; no Column component) + brand story body
- [ ] Testimonials (Pattern 7) — FeaturedTestimonial (one per page) + 3× TestimonialCard; max 4 testimonials total
- [ ] CTA Block (Pattern 8) — Surface 2 + AtmosphericBg + single primary button
- [ ] Footer (Pattern 9)
- [ ] Content density alternation verified (Pattern 18)
- [ ] Surface alternation verified (Pattern 19): Hero (2) → Approach (0) → Featured Work (1) → Why (0) → Testimonials (1) → CTA (2) → Footer (2)
  *Note: CTA Block (Surface 2) → Footer (Surface 2) is a sanctioned exception; the footer is a structural element, not a content section.*

### Responsive QA (375 / 768 / 1200 / 1440)
- [ ] No horizontal scroll at any breakpoint
- [ ] Buttons full-width on mobile where specified
- [ ] Single column on mobile for every major section
- [ ] Typography scales with `clamp()`

**Exit criteria:** Homepage educates before asking for action. One dominant focal point per section. One primary CTA per section. Motion and accessibility verified.

---

## Phase 9 — Remaining Pages

**Objective**
Ship every remaining route to the same quality bar as the homepage.

**Dependencies:** Phase 8 (homepage patterns proven)
**Estimated effort:** 3–5 days

Build in this order:

1. - [ ] **About** (Pattern 10)
2. - [ ] **Services overview** (Pattern 11)
3. - [ ] **Service detail pages ×5** (Pattern 12) — identical structure, content varies
4. - [ ] **Work index** (Pattern 13)
5. - [ ] **Case study pages** (Pattern 14)
6. - [ ] **Contact** (Pattern 15) + API route `src/app/api/contact/route.ts`
7. - [ ] **Journal index** (Pattern 16) — if in v1 scope
8. - [ ] **Journal post** (Pattern 17) — if in v1 scope

Each page must satisfy:
- [ ] Uses Page Shell
- [ ] Ends with CTA Block then Footer
- [ ] Correct surface sequence
- [ ] One H1; logical heading hierarchy with no skipped levels
- [ ] Breadcrumb on all interior pages (never on homepage)
- [ ] Metadata and Open Graph ready

**Exit criteria:** All routes render. Contact form submits successfully via Resend. No placeholder routes or TODOs.

---

## Phase 10 — Production & Launch

**Objective**
Prove production readiness across code quality, accessibility, performance, and SEO. Deploy only when all exit criteria are met.

**Dependencies:** Phases 0–9 complete
**Estimated effort:** 1–2 days
**Risks:** Last-minute scope additions — defer to post-launch. Env or email misconfiguration — test contact form end-to-end before DNS cutover.

### Code quality
- [ ] `npm run type-check` — zero errors
- [ ] `npm run lint` — zero errors
- [ ] No unused imports
- [ ] No `'use client'` on Server Components that do not need it
- [ ] No inline styles anywhere
- [ ] No CSS Modules or component-scoped CSS files
- [ ] Bundle size checked (`next build`); homepage JS target <100KB gzipped

### Accessibility
- [ ] Keyboard navigation end-to-end on every page
- [ ] Visible focus indicators
- [ ] WCAG AA contrast (AAA where achievable)
- [ ] Touch targets ≥44×44px
- [ ] One H1 per page; no skipped heading levels
- [ ] Descriptive alt text; decorative images use `alt=""`
- [ ] Form labels visible and persistent
- [ ] Landmarks present: `nav`, `main`, `footer`, `region`
- [ ] Skip-to-content link present
- [ ] `prefers-reduced-motion` verified in DevTools

### Performance
- [ ] Lighthouse Performance ≥95
- [ ] Lighthouse Accessibility = 100
- [ ] Lighthouse Best Practices = 100
- [ ] Lighthouse SEO = 100
- [ ] LCP <2.5s
- [ ] CLS <0.1
- [ ] INP Excellent
- [ ] Images: AVIF + WebP; lazy-load below fold; `priority` on LCP candidate only
- [ ] Fonts preloaded correctly

### SEO and metadata
- [ ] Unique `<title>` and `<meta description>` per page
- [ ] Open Graph and Twitter card tags
- [ ] Canonical URLs
- [ ] `sitemap.ts` and `robots.ts` correct
- [ ] Structured data if required

### Final QA sweep (run on every page and component)

**Visual**
- [ ] All values from design tokens
- [ ] Typography hierarchy legible without color
- [ ] 8-point spacing throughout
- [ ] Elevation never exceeds Level 2
- [ ] Correct surface applied

**Motion**
- [ ] Subtle and purposeful
- [ ] ≤3 simultaneous animations
- [ ] Reduced-motion tested

**Responsive**
- [ ] 375 / 768 / 1200 / 1440
- [ ] No horizontal scroll
- [ ] Layout recomposes — does not merely shrink

**Content**
- [ ] Brand voice consistent with FOUNDATIONS.md
- [ ] All content limits respected
- [ ] No placeholders or TODOs

### Launch
- [ ] Production environment variables set on Vercel
- [ ] Contact form tested end-to-end on production (Resend)
- [ ] Analytics enabled if required
- [ ] DNS and SSL confirmed
- [ ] Smoke test on production URL
- [ ] Cross-browser tested (modern evergreen)
- [ ] Final "Does this feel like Desert Fox Digital?" review passed

**Exit criteria:** No TypeScript, ESLint, or a11y failures. Performance targets met. Contact form live end-to-end. Production smoke test passed.

---

## Success Metrics at Launch

- Lighthouse Performance ≥95, Accessibility 100, Best Practices 100, SEO 100
- LCP <2.5s, CLS <0.1, INP Excellent
- Contact form delivers reliably end-to-end
- Every page answers the five FOUNDATIONS.md questions within ~30 seconds
- Site feels quiet, editorial, and intentional — not corporate or sales-driven

---

## Definition of Done

A component or page is complete only when every item below is checked:

- [ ] Implemented per COMPONENTS.md / UI-PATTERNS.md interface and structure
- [ ] All values reference design tokens — no hardcoded colors, spacing, radii, shadows, or durations
- [ ] All required states present: Default / Hover / Focus / Active / Disabled / Loading / Error (as applicable)
- [ ] Semantic HTML
- [ ] Keyboard accessible with visible focus indicator
- [ ] Touch target ≥44×44px
- [ ] Responsive at 375 / 768 / 1200 / 1440
- [ ] `prefers-reduced-motion` respected
- [ ] TypeScript clean
- [ ] ESLint clean
- [ ] No inline styles; no CSS Modules
- [ ] Barrel export present (components)
- [ ] Documentation updated if architecture or component set changed
- [ ] Screenshots at 375px and 1200px attached to PR

---

## Common Pitfalls

Do not ship any of the following:

- Hardcoded colors, spacing, radii, shadows, or durations anywhere in code
- Unapproved dependencies (default is reject)
- Page-specific UI built inside a page file instead of `components/`
- Motion wired before the foundation (tokens + reduced-motion + hooks) is solid
- More than one primary CTA per section
- Nested major patterns
- Skipped documentation updates when structure changes
- `any` or disabled strict TypeScript
- `100vh` forced on mobile heroes — use 90vh minimum on desktop, natural height on mobile
- AtmosphericBg applied to more than two sections per page

---

## PR Requirements

- Branch: `feat/…`, `fix/…`, or `docs/…`
- Conventional Commits
- Reference component # and pattern # in PR description
- Screenshots at 375px and 1200px
- Completed QA checklist
- Zero TypeScript / ESLint / a11y failures on merge

---

**Document status:** Production
**Version:** 2.0
**Replaces:** BUILD-ROADMAP.md v1.0 and BUILD-CHECKLIST.md v1.0
**Maintained against:** IMPLEMENTATION-STANDARDS.md v2.0, COMPONENTS.md v1.0, UI-PATTERNS.md v1.0, MOTION.md v1.0, DESIGN-SYSTEM.md v1.0, FOUNDATIONS.md v1.0
**Next action:** Complete Phase 0, then begin Phase 1 on a clean feature branch.
