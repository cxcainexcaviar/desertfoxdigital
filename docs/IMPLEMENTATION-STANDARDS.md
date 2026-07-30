# Implementation Standards

**Desert Fox Digital**
Version 2.0 | Production

This document defines every coding, naming, file, and quality standard for
all implementation work on the Desert Fox Digital website. It is derived
from the full production documentation set and supersedes any prior version.

Governance hierarchy — when documents conflict, the higher document wins:

```
FOUNDATIONS.md
      ↓
DESIGN-SYSTEM.md
      ↓
COMPONENTS.md
      ↓
UI-PATTERNS.md
      ↓
MOTION.md
      ↓
IMPLEMENTATION-STANDARDS.md (this document)
      ↓
Page implementation
```

When in doubt, return to FOUNDATIONS.md and ask: **Does this feel like
Desert Fox Digital?**

---

## 1. Tech Stack

| Concern | Decision |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript — strict mode, zero `any` |
| Styling | CSS Cascade Layers — global only, no CSS Modules |
| Fonts | Self-hosted — Inter, Playfair Display, Geist Mono in `public/fonts/` |
| Icons | Lucide React — outline style only, never filled |
| Animation | CSS-first; JS hooks for class toggling only (see §7) |
| Images | Next.js `<Image>` component throughout |
| Email | Configured via `RESEND_API_KEY` in `.env.local` |
| Package manager | npm |
| Node | 20 LTS minimum |
| Deployment | Vercel |
| Analytics | `NEXT_PUBLIC_GA_ID` in `.env.local` (optional) |

No framework, library, or dependency may be added without explicit approval.
Confirm any item marked above before first deploy or team onboarding.

---

## 2. Project Structure

Follow `SITE-STRUCTURE.md` exactly. The complete directory tree is
authoritative. Do not create files or directories outside it without
first updating `SITE-STRUCTURE.md`.

### Key directories

```
src/app/          Next.js App Router — pages, layouts, API routes
src/components/   All UI components, organized by feature subdirectory
src/styles/       Eight CSS layer files — one file per layer, nothing else
src/hooks/        React hooks (useScrollReveal, useNavScrollState, useReducedMotion, useScrollPosition)
src/content/      All static copy and data — no inline strings over 2–3 lines
src/config/       Site-level configuration (site.ts, navigation.ts, seo.ts, env.ts)
src/lib/          Utility helpers and service wrappers
src/types/        Shared TypeScript interfaces
src/utils/        Pure utility functions
public/fonts/     Self-hosted font files
public/images/    AVIF + WebP imagery, organized by work/ and shared/
public/logos/     Client logos for LogoStrip
public/og/        Open Graph images
```

### File conventions

- **Components:** One primary export per file. File name matches export name. PascalCase.
- **Barrel exports:** Every component subdirectory has an `index.ts`.
- **CSS:** One file per cascade layer in `src/styles/`. Never create component-scoped CSS files.
- **Types:** Shared interfaces in `src/types/`. Component-specific types may be inline or co-located.
- **Content:** Static data in `src/content/`. Never inline long strings in JSX.
- **Hooks:** Prefix with `use`, camelCase file name (e.g. `useScrollReveal.ts`).
- **Utils:** Descriptive camelCase or kebab-case.

---

## 3. CSS Architecture

### Cascade layer order

Declared once in `src/app/globals.css`. Never changed after initial setup.

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

### Layer responsibilities

| File | Contents |
|---|---|
| `tokens.css` | All CSS custom properties — colors, typography, spacing, radius, shadow, motion |
| `reset.css` | Box-sizing, margin resets, border resets. No visual styles. |
| `base.css` | h1–h6, display classes, lead/body/small/caption, eyebrow, blockquote, prose, form base appearances |
| `layout.css` | `.container` variants, 12/8/4 column grid, section spacing, surface 0–3 definitions |
| `components.css` | All 46 component styles — one class per component as defined in `COMPONENTS.md` |
| `patterns.css` | Section-level pattern assemblies as defined in `UI-PATTERNS.md` |
| `animations.css` | @keyframes, base transitions, `.reveal`/`.is-visible`, haze, grain, hero entrance, reduced-motion |
| `utilities.css` | `.visually-hidden`, skip-to-content, focus-visible, text alignment, spacing helpers, display utilities |

### CSS rules

- Every value must reference a design token from `tokens.css`. Never hardcode colors, spacing, font sizes, radii, shadows, or durations.
- Use layer order for specificity management. Never use `!important` except inside `utilities.css`.
- Never write component-scoped CSS, CSS Modules, or inline styles.
- Class names: BEM-inspired kebab-case (e.g. `.approach-row`, `.approach-row__number`, `.approach-row--active`).
- `tokens.css` is the single source of truth for all token values. `theme.css` (Tailwind v4 theme file) must remain in sync with it. If the two conflict, `tokens.css` wins and `theme.css` must be corrected.

### Known token conflict — resolved

`theme.css` currently defines `--duration-slow: 400ms`. The authoritative value per `MOTION.md` §2 and `DESIGN-SYSTEM.md` §10 is **500ms** (scroll reveals, hero entrance). `theme.css` must be updated to `--duration-slow: 500ms` before motion work begins.

---

## 4. TypeScript Standards

- Strict mode enabled in `tsconfig.json`. Zero `any` permitted.
- Use `interface` for component props. Avoid `React.FC` — prefer explicit return types where needed.
- All props typed and destructured in function parameters.
- Shared types live in `src/types/`. Component-specific types may be co-located if not reused.
- Zero TypeScript errors before merge. `npm run type-check` must pass clean.

---

## 5. React and Next.js Standards

### Server vs Client components

- Server Components by default. Every component is a Server Component unless it requires interactivity.
- Add `'use client'` only when the component uses: hooks, state, event handlers, browser APIs, or `useReducedMotion`.
- Never add `'use client'` to a component that does not need it.

### Image optimization

- Use `next/image` (`<Image>`) for all photography and project imagery.
- Add `priority` only to the LCP candidate — typically the hero heading or hero background on the homepage.
- All below-the-fold images use the default lazy loading behavior.
- Provide `sizes` attribute wherever the image width varies across breakpoints.
- Image formats: AVIF preferred, WebP fallback. Never unoptimized JPEGs or GIFs.

### Data and content

- Static content lives in `src/content/`. Import it into Server Components directly.
- The contact form API route at `src/app/api/contact/route.ts` is the only API route in v1.
- No external data-fetching libraries (SWR, React Query) in v1.

### No inline styles

Zero inline `style` props. Everything through design tokens and CSS layers.

---

## 6. Component Standards

Before writing any component:

1. Confirm no existing component in `COMPONENTS.md` already solves the problem.
2. Use the TypeScript interface exactly as defined in `COMPONENTS.md`.
3. Reference only approved design tokens.
4. Implement all defined states: Default, Hover, Focus, Active, Disabled, Loading (where applicable), Error (where applicable).
5. Verify all accessibility requirements for the component.

### State requirements

Every interactive component must define behavior for every applicable state.
No component ships with an undefined hover, focus, or disabled state.

### Composition over duplication

Compose existing components rather than duplicating their functionality.
If two components share markup, one should wrap the other — not duplicate it.

### One primary CTA per component

No major component contains more than one primary button.

### Semantic HTML

Use the element that matches the content's meaning:

| Content | Element |
|---|---|
| Navigation | `<nav>` |
| Page sections | `<section>` |
| Featured project | `<article>` |
| Testimonial | `<blockquote>` |
| FAQ | `<details>` / `<summary>` |
| Action trigger | `<button>` |
| Navigation link | `<a>` |
| Footer | `<footer>` |

Never use a `<div>` where a semantic element is available.

---

## 7. Motion Standards

All motion rules derive from `MOTION.md`, which consolidates `DESIGN-SYSTEM.md` §10.
When those two conflict, `DESIGN-SYSTEM.md` wins.

### Implementation approach

CSS-first always. JavaScript is used only to toggle classes or boolean state
that CSS then animates. Never drive animation values from JavaScript directly.

### The three sanctioned hooks

| Hook | File | Purpose |
|---|---|---|
| `useScrollReveal` | `hooks/useScrollReveal.ts` | `IntersectionObserver` wrapper — adds `.is-visible` to `.reveal` elements |
| `useNavScrollState` | `hooks/useNavScrollState.ts` | Drives nav transparent → filled transition on scroll |
| `useReducedMotion` | `hooks/useReducedMotion.ts` | Reads `prefers-reduced-motion`, exposes boolean for JS-side motion gating |

No other hooks are needed for motion in v1. Do not create additional motion hooks.

### Authoritative timing values

| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | 100ms | Immediate feedback (button active return) |
| `--duration-fast` | 150ms | All hover states — never exceed this for hover |
| `--duration-standard` | 250ms | Nav scroll state, drawers, accordion, form states |
| `--duration-slow` | 500ms | Scroll reveals, hero entrance |
| `--duration-atmospheric` | 15s | Haze only |

Easing: `var(--ease-standard)` for everything. `var(--ease-linear)` for haze only.
Never use bounce, elastic, overshoot, or spring.

### What may be animated

- `transform` — always permitted
- `opacity` — always permitted
- `height` — accordion only, 250ms standard easing, no bounce. This is the one sanctioned exception.
- Nothing else. Never animate `width`, `top`, `left`, `right`, `bottom`, or any layout property.

### Scroll reveal

```
opacity:   0 → 1
transform: translateY(16px) → none
duration:  500ms (--duration-slow)
easing:    var(--ease-standard)
stagger:   80ms between siblings
trigger:   15% of element in viewport
behavior:  plays once, never replays on reverse scroll
```

Applied via `.reveal` → `.is-visible` classes. Stagger via `.reveal-delay-1` through `.reveal-delay-4`.

### Hero entrance sequence

```
1. Navigation  — instant, no animation
2. Headline    — fade + translateY(16px), 500ms
3. Paragraph   — fade + translateY(16px), 500ms, delay 100ms
4. CTA group   — fade + translateY(16px), 500ms, delay 200ms
5. Background  — opacity 0 → 1, 1200ms
```

Never animate all elements simultaneously.

### Atmospheric layer

Haze: `translate3d(0,0,0)` → `translate3d(1.5%,-1.5%,0)`, 15s, linear, infinite alternate, opacity below 10%.
Grain: static, 2–4% opacity.
Maximum two atmospheric sections per page (hero + CTA block).

### Reduced motion

When `prefers-reduced-motion: reduce` is active, the global rule in `utilities.css` collapses all
animation and transition durations to `0.01ms`. The `useReducedMotion` hook handles the JS-side
cases (haze, scroll reveal) that need to be skipped entirely rather than just shortened.

Remove under reduced motion: haze, scroll reveal transforms, image scale, parallax.
Retain under reduced motion: opacity transitions, focus indicators, nav scroll-state changes.

### Maximum simultaneous animations

Three on screen at any time. Never more.

---

## 8. Accessibility Standards

Accessibility is a release requirement. No page or component merges without passing every item below.

- Minimum contrast: WCAG AA. Target AAA where achievable.
- Minimum body font size: 16px.
- Minimum touch target: 44×44px on every interactive element.
- Every interactive element reachable and operable by keyboard alone.
- Visible focus indicator on every interactive element (defined in `utilities.css`).
- One `<h1>` per page. Heading hierarchy descends logically without skipping levels.
- Descriptive `alt` text on every image. Decorative images use `alt=""`.
- All form fields have visible, persistent labels — never placeholder-only.
- Screen reader landmarks on every page (`<nav>`, `<main>`, `<footer>`, region labels).
- Skip-to-content link present on every page (defined in `utilities.css`).
- `prefers-reduced-motion` respected at all times.
- Never use animation as the sole means of conveying information.
- ARIA attributes as specified per component in `COMPONENTS.md`. Do not add ARIA that is not specified.

---

## 9. Responsive Standards

Breakpoints defined in `DESIGN-SYSTEM.md` §5 and reflected in `tokens.css`:

| Name | Value |
|---|---|
| Small Mobile | 375px |
| Mobile | 480px |
| Large Mobile | 640px |
| Tablet | 768px |
| Laptop | 1024px |
| Desktop | 1200px |
| Wide | 1440px |
| Ultra Wide | 1600px+ |

Design for ranges, not specific devices. Recompose layouts — never simply scale them down.

### Rules

- Single column on mobile for every major section.
- Buttons become full width on mobile wherever specified in `UI-PATTERNS.md`.
- Typography scales fluidly with `clamp()` for all display and heading sizes.
- No horizontal scroll at any breakpoint.
- Content must never touch the viewport edge — container padding applies at all sizes.
- Test every component and page at 375px, 768px, 1200px, and 1440px before merge.

---

## 10. Performance Standards

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Interaction to Next Paint | Excellent |

### Implementation rules

- Self-host all fonts. Use `font-display: swap`. Preload critical weights (Inter 400/600, Playfair Display 400/500).
- Serve AVIF with WebP fallback for all photography. Lazy-load everything below the fold.
- Playfair Display is LCP-critical on pages with a hero heading — treat it accordingly, not just as a swapped font.
- No unused imports. Tree-shake aggressively.
- Monitor bundle size with `next build`. Target < 100KB gzipped JS for the homepage.
- Avoid large JavaScript bundles. No unnecessary client-side libraries.
- No unoptimized images. No large GIFs.

---

## 11. Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL, e.g. `https://desertfoxdigital.com` |
| `CONTACT_EMAIL` | Yes | Address that receives contact form submissions |
| `RESEND_API_KEY` | Yes | API key for email delivery via Resend |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

Copy `.env.local.example` to `.env.local` and fill values before running `npm run dev`.
Never commit `.env.local` or any real key to the repository.

---

## 12. Git and Workflow

- `main` is protected. All work happens on feature branches.
- Branch naming: `feat/component-name`, `fix/issue-description`, `docs/document-name`.
- Commit style: Conventional Commits (e.g. `feat: implement ApproachRow`, `fix: accordion focus trap`).
- PRs must reference the relevant component number(s) from `COMPONENTS.md` and pattern number(s) from `UI-PATTERNS.md`.
- PRs must include a screenshot at 375px and 1200px and a completed QA checklist (§13 below).
- Never merge a PR with TypeScript errors, ESLint errors, or failing accessibility checks.
- Update documentation before changing structure or standards. Code follows docs, not the reverse.

---

## 13. QA Checklist

Every component and page must pass all applicable items before merge.

### Visual

- [ ] All values reference design tokens — no hardcoded colors, spacing, or motion values
- [ ] Typography hierarchy is clear without relying on color alone
- [ ] Spacing follows the 8-point scale at every level
- [ ] Colors match the approved palette
- [ ] No unnecessary decoration or elements
- [ ] Elevation never exceeds Level 2 (`--shadow-md`)
- [ ] Surface value correct for this section

### Motion

- [ ] Motion is subtle and purposeful — passes the "does removing this improve it?" test
- [ ] No more than three simultaneous animations on screen
- [ ] All durations and easings reference motion tokens
- [ ] Reduced motion tested: content appears in final state, no transforms, no haze
- [ ] `prefers-reduced-motion` verified in browser devtools

### Accessibility

- [ ] Keyboard navigation tested end-to-end
- [ ] Visible focus indicators on every interactive element
- [ ] Color contrast passes WCAG AA minimum
- [ ] Screen reader landmarks present and labeled
- [ ] Touch targets meet 44×44px minimum
- [ ] One H1 per page, logical heading hierarchy
- [ ] Alt text present and descriptive on all images
- [ ] Form labels visible and persistent (never placeholder-only)

### Responsive

- [ ] Tested at 375px, 768px, 1200px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Typography scales correctly with clamp()
- [ ] Buttons full width on mobile where specified
- [ ] Layout recomposes — does not simply shrink

### Code

- [ ] No TypeScript errors (`npm run type-check` passes)
- [ ] No ESLint errors (`npm run lint` passes)
- [ ] Semantic HTML elements used correctly
- [ ] No inline styles
- [ ] No CSS Modules or component-scoped style files
- [ ] No unused imports
- [ ] `'use client'` present only where required

### Content

- [ ] Copy follows brand voice (FOUNDATIONS.md §3)
- [ ] All content limits respected (UI-PATTERNS.md content limits table)
- [ ] No placeholder text or lorem ipsum
- [ ] No TODO comments in production code
- [ ] Images support — not distract from — the message

---

## 14. Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

---

## 15. Build Order Reference

For new environment setup or resuming implementation, follow this sequence:

1. Confirm Node 20 LTS and npm are installed
2. Clone repository, run `npm install`
3. Copy `.env.local.example` → `.env.local`, fill required values
4. Configure fonts with `next/font` (Inter, Playfair Display, Geist Mono)
5. Build CSS architecture — establish `globals.css` layer order, create all eight layer files
6. Implement design tokens in `tokens.css` — verify `theme.css` is in sync
7. Implement `reset.css` and `base.css`
8. Build `layout.css` — containers, grid, section spacing, surfaces
9. Build Container (#1) and Section (#2) components
10. Build all primitive components (#3–#17) from `COMPONENTS.md`
11. Build composite components (#18–#46)
12. Implement the three motion hooks
13. Assemble homepage from patterns in `UI-PATTERNS.md`
14. Build remaining pages in order: About → Services → Work → Contact → Journal
15. QA every page at all four breakpoints before deploy

---

**Document Status:** Production
**Version:** 2.0
**Supersedes:** IMPLEMENTATION-STANDARDS.md v1.0
**Derived From:** FOUNDATIONS.md, DESIGN-SYSTEM.md, COMPONENTS.md, UI-PATTERNS.md,
MOTION.md, SITE-STRUCTURE.md, theme.css (all v1.0 Production)
**Applies To:** All Desert Fox Digital implementation work
