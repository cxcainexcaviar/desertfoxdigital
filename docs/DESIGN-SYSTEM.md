# Design System

**Desert Fox Digital**
Version 1.1 | Production

This document defines every visual and interaction standard for the
Desert Fox Digital website. It is the single source of truth for all
implementation decisions.

If this document conflicts with any other document, this document wins.
If this document does not cover something, consult FOUNDATIONS.md before
making a decision independently.

**Changelog (v1.0 → v1.1)**
- §10 Motion System: removed full duplicated motion behavior (hover specs,
  scroll reveal, hero entrance, atmospheric layer, reduced motion). Those
  rules live authoritatively in MOTION.md. Retained only the timing
  reference table and easing summary that implementers need inline.
  Added explicit pointer to MOTION.md.
- §10 Motion System timing table: corrected "Slow" row — was listed as
  "400–500ms" in FOUNDATIONS.md §11 and implied inconsistently elsewhere.
  Authoritative value per MOTION.md §2 is 500ms. Table now reads 500ms
  with no range.
- §12 Iconography: resolved conflict with IMPLEMENTATION-STANDARDS.md.
  Icon library scope narrowed to Lucide React only (outline, never filled).
  Phosphor and Heroicons removed. See rationale in §12.
- §16 Governance: hierarchy updated to include MOTION.md and
  IMPLEMENTATION-STANDARDS.md, which were absent from v1.0 despite being
  part of the authoritative document chain.
- v2.0-draft reviewed and rejected. Rationale in §17 (new section).

---

## 1. How to Use This Document

This document is organized in the order things get built:

1. Tokens — the raw values
2. Typography — how type is set
3. Color — how color is applied
4. Layout — how space is structured
5. Components — how elements are built
6. Patterns — how components assemble
7. Motion — timing tokens and easing only (full behavior in MOTION.md)
8. Surfaces — how backgrounds work
9. Imagery — how visuals are chosen
10. Accessibility — what is required
11. Performance — what is targeted
12. Quality — how work is approved

Read it in order once. Return to individual sections as needed.

---

## 2. Design Tokens

Tokens are the foundation of the entire system. Every value used anywhere
on the site — color, spacing, radius, shadow, duration — must come from
a token. Never hardcode values inside components or pattern files.

Tokens are defined in `src/styles/tokens.css`.

### Color Tokens

```css
--color-juniper:          #283325;
--color-dust:             #EBECF0;
--color-deep-teal:        #225065;
--color-fox-clay:         #9E6647;
--color-sandstone-shadow: #455953;
--color-agave:            #90A9A0;
--color-mesa-clay:        #944A3A;
--color-white:            #FFFFFF;
--color-black:            #000000;
--color-border:           rgba(40, 51, 37, 0.12);
--color-overlay:          rgba(40, 51, 37, 0.85);
```

### Typography Tokens

```css
--font-logo:    "Mekona", serif;
--font-display: "Playfair Display", Georgia, serif;
--font-body:    "Inter", system-ui, sans-serif;
--font-mono:    "Geist Mono", monospace;

--text-display-xl: clamp(3.75rem, 6vw, 4.5rem);
--text-display:    clamp(3rem, 5vw, 3.75rem);
--text-h1:         clamp(2.5rem, 4vw, 3rem);
--text-h2:         clamp(2rem, 3vw, 2.5rem);
--text-h3:         clamp(1.5rem, 2.4vw, 2rem);
--text-h4:         1.5rem;
--text-lead:       1.25rem;
--text-body:       1rem;
--text-small:      0.875rem;
--text-caption:    0.75rem;
```

### Spacing Tokens

```css
--space-4:   4px;
--space-8:   8px;
--space-12:  12px;
--space-16:  16px;
--space-24:  24px;
--space-32:  32px;
--space-48:  48px;
--space-64:  64px;
--space-80:  80px;
--space-96:  96px;
--space-120: 120px;
--space-160: 160px;
```

### Radius Tokens

```css
--radius-sm: 6px;   /* Buttons, inputs */
--radius-md: 8px;   /* Cards, images */
--radius-lg: 12px;  /* Use sparingly */
```

### Shadow Tokens

```css
--shadow-none: none;
--shadow-sm:   0 8px 30px rgba(0, 0, 0, 0.04);
--shadow-md:   0 16px 40px rgba(0, 0, 0, 0.06);
```

### Motion Tokens

```css
--duration-instant:     100ms;
--duration-fast:        150ms;
--duration-standard:    250ms;
--duration-slow:        500ms;
--duration-atmospheric: 15s;

--ease-standard: cubic-bezier(.22, .61, .36, 1);
--ease-linear:   linear;
```

---

## 3. Typography System

### Typeface Roles

| Typeface | Role | Never Use For |
|---|---|---|
| Mekona | Logo only | Anything else |
| Playfair Display | Headings, quotes, display | Body copy, UI labels |
| Inter | Body, UI, forms, navigation | Display headings |
| Geist Mono | Eyebrows, metadata, captions | Paragraphs, headings |

### Type Scale

| Level | Size | Weight | Line Height | Font |
|---|---|---|---|---|
| Display XL | 72px fluid | 400 | 1.0 | Playfair Display |
| Display | 60px fluid | 400 | 1.05 | Playfair Display |
| H1 | 48px fluid | 500 | 1.1 | Playfair Display |
| H2 | 40px fluid | 500 | 1.15 | Playfair Display |
| H3 | 32px fluid | 500 | 1.2 | Playfair Display |
| H4 | 24px | 600 | 1.3 | Inter |
| Lead | 20px | 400 | 1.6 | Inter |
| Body | 16px | 400 | 1.7 | Inter |
| Small | 14px | 400 | 1.6 | Inter |
| Caption | 12px | 500 | 1.5 | Geist Mono |

### Typography Rules

**Hierarchy**
Establish hierarchy through size, weight, spacing, and alignment.
Never through color alone.

**Alignment**
Default to left-aligned text. Use centered alignment only in:
hero sections, CTA blocks, and pull quotes.
Never center-align body paragraphs.

**Line Length**
Maximum 70 characters per line.
Preferred 55–65 characters.
Never allow long paragraphs to span the full container width.

**Heading Rules**
- One H1 per page
- Headings descend logically: H1 → H2 → H3
- Maximum two lines for display headings
- Maximum 12 words per section heading
- Never allow headings to wrap awkwardly on mobile
- Use `text-wrap: balance` on all headings

**Eyebrow Rules**
- Geist Mono, uppercase, 0.12em letter spacing
- Color: Agave
- Never exceed one line
- Introduces every major section

**Body Copy Rules**
- Minimum size: 16px
- Maximum width: 70ch
- Paragraph gap: 24px
- Never center-align long-form content

---

## 4. Color System

### Color Application

**Juniper** — Trust and structure
Navigation, headlines, footer, dark sections, primary text.
Maximum 40% visual coverage.

**Dust** — Space and openness
Page background, cards, sections, forms, light surfaces.
The default resting state of every page.

**Deep Teal** — Action and interaction
Primary buttons, links, active states, form focus, CTAs.
One per section maximum. Never as a background.

**Fox Clay** — Brand warmth
Tags, metrics, small accents, decorative dividers.
Maximum 10% visual coverage. Never dominant.

**Agave** — Metadata and borders
Borders, eyebrows, disabled states, secondary icons.
Supports content without competing.

**Sandstone Shadow** — Depth
Overlays, secondary dark backgrounds, image treatments.

**Mesa Clay** — Editorial moments only
Use with extreme restraint. One instance per page maximum.

### Color Ratios

- 60% Neutral — Dust and white
- 30% Structure — Juniper and Sandstone Shadow
- 10% Accent — Deep Teal and Fox Clay

### Color Rules

- Never place two accent colors adjacent to one another
- Never use more than one primary action color per section
- Never introduce colors outside the approved palette
- Test all color combinations for WCAG AA contrast minimum

---

## 5. Layout System

### Container Widths

```
Default:     max-width 1200px, padding 32px desktop / 24px tablet / 20px mobile
Reading:     max-width 720px
Wide Media:  max-width 1400px
Full Bleed:  100vw
```

Content must never touch the viewport edge.

### Grid System

```
Desktop: 12 columns, 32px gutters
Tablet:  8 columns,  24px gutters
Mobile:  4 columns,  20px gutters
```

### Section Spacing

```
Desktop:      120px top and bottom
Tablet:       96px
Mobile:       72px
Small Mobile: 56px
```

### Breakpoints

```
Small Mobile: 375px
Mobile:       480px
Large Mobile: 640px
Tablet:       768px
Laptop:       1024px
Desktop:      1200px
Wide:         1440px
Ultra Wide:   1600px+
```

### Vertical Rhythm

Every section follows this order without exception:

1. Eyebrow
2. Heading
3. Supporting copy
4. Primary content
5. Optional CTA
6. Whitespace

### Responsive Rules

- Never shrink desktop layouts. Recompose them.
- Layouts adapt. Hierarchy never changes.
- Single-column on mobile for every section.
- Buttons become full width on mobile.
- Typography scales fluidly with `clamp()`.

---

## 6. Surface System

### Surface Levels

**Surface 0 — Page Background**
`background: var(--color-dust)`
Primary page background. Used for all standard page sections.

**Surface 1 — Raised**
`background: #fff` or Dust + 2% brightness
`border: 1px solid var(--color-border)`
`box-shadow: var(--shadow-sm)`
Cards, testimonials, forms.

**Surface 2 — Editorial**
`background: var(--color-juniper)`
`color: var(--color-dust)`
Footer, final CTA, hero dark variant.

**Surface 3 — Overlay**
`background: var(--color-overlay)` (Juniper 85%)
Used over imagery only. Never blur the full page.

### Surface Alternation

Sections should alternate to create rhythm:
Dust → Juniper → Dust → Dust → Juniper

Avoid repeating more than two dark sections consecutively.

---

## 7. Elevation System

Elevation should be nearly invisible. It creates separation without drama.

```
Level 0: No shadow (default state)
Level 1: var(--shadow-sm) — cards only
Level 2: var(--shadow-md) — hover states only
```

Never exceed Level 2. Never create custom shadow values.

---

## 8. Border System

**Standard border:** `1px solid var(--color-border)`

Borders separate content. They do not decorate it.
Dividers are preferred over borders wherever possible.
Never use borders purely for visual interest.

---

## 9. Component Standards

Every component must follow these rules without exception.

### Token Usage
All colors, spacing, typography, radius, shadow, and motion values
must reference design tokens. Never hardcode values.

### Semantic HTML
Use the correct element for the purpose:
- Navigation → `<nav>`
- Buttons → `<button>`
- Sections → `<section>`
- Footer → `<footer>`
- Featured project → `<article>`
- Testimonial → `<blockquote>`
- FAQ → `<details>` / `<summary>`

### Single Responsibility
Each component does one thing. It does not replicate another
component's functionality. Compose components rather than
duplicating them.

### Single Primary CTA
No major component contains more than one primary CTA button.

### State Requirements
Every interactive component defines behavior for:
- Default
- Hover
- Focus
- Active
- Disabled
- Loading (where applicable)
- Error (where applicable)

### Reuse Rule
Before creating any new component, confirm that no existing
component solves the problem. If one does, use it.

---

## 10. Motion System

**Full motion behavior is defined in MOTION.md.** That document is the
authoritative source for hover specs, scroll reveal, hero entrance
sequence, atmospheric layer behavior, and reduced motion rules.
MOTION.md states that when it conflicts with this document, this document
wins — but the motion behavior defined in MOTION.md does not conflict
with anything here; the two documents are complementary.

The timing token values below are provided inline for implementer
convenience. They are identical to the tokens in §2 and to MOTION.md §2.

### Timing Reference

| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | 100ms | Immediate feedback (button active return) |
| `--duration-fast` | 150ms | All hover states — never exceed for hover |
| `--duration-standard` | 250ms | Navigation, drawers, accordion, form states |
| `--duration-slow` | 500ms | Scroll reveals, hero entrance |
| `--duration-atmospheric` | 15s | Haze only |

### Easing

`var(--ease-standard)` — all transitions.
`var(--ease-linear)` — atmospheric haze only.
Never use bounce, elastic, overshoot, or spring easing.

### Motion Personality

Motion communicates confidence. The site should feel like morning desert
air — calm, deliberate, unhurried. Visitors should notice how calm it
feels, never the animations themselves.

For full implementation rules, see **MOTION.md**.

---

## 11. Imagery Standards

### Photography Style

Natural light. Long shadows. Editorial. Quiet. Minimal. Authentic.

### Preferred Subjects

Architecture, desert landscapes, local businesses, craftspeople,
storefronts, natural textures, hands at work, light and shadow.

### Avoid

Corporate offices, laptop pointing, fake meetings, bright tech graphics,
obvious stock photography, heavy editing, high saturation.

### Treatment

Slight warmth is acceptable. Subtle grain is acceptable.
No heavy filters. No high saturation. No illustration unless
single-color, outline style, and editorially justified.

### Formats

AVIF preferred. WebP fallback. SVG for icons and logos.
Lazy-load all below-the-fold imagery.
Never use large GIFs or unoptimized images.

### Composition

Negative space. Simple framing. Strong light. Muted tones.
Wide framing preferred. Images support the content — they do not
replace it.

---

## 12. Iconography

### Style
Outlined. 1.5px stroke. Rounded joins. Consistent proportions.

### Library
**Lucide React only.** This resolves the conflict between v1.0 of this
document (which listed Lucide, Phosphor, and Heroicons) and
IMPLEMENTATION-STANDARDS.md (which specifies Lucide React exclusively).
IMPLEMENTATION-STANDARDS.md is more specific and was authored later;
Lucide React is the single approved library. Never mix icon styles
within a page. Never use filled variants.

### Allowed Uses
Navigation, forms, small indicators, contact, metadata.

### Not Allowed
Large feature illustrations, marketing graphics, decorative fillers,
icons larger than 24px in body content.

---

## 13. Accessibility Requirements

Accessibility is a release requirement. No page ships without passing.

### Contrast
- Minimum: WCAG AA
- Target: WCAG AAA where achievable

### Typography
- Minimum body size: 16px
- Minimum interactive text: 16px

### Interaction
- Every interactive element reachable by keyboard
- Visible focus indicators on all interactive elements
- Minimum touch target: 44×44px
- No interaction dependent on hover alone

### Structure
- One H1 per page
- Logical descending heading hierarchy
- Descriptive alt text on all images
- All form fields have visible persistent labels
- Skip to content link present on every page
- Screen reader landmarks on every page

### Motion
- Always respect `prefers-reduced-motion`
- Never use animation as the sole means of conveying information

### Pre-launch Checklist
- [ ] Keyboard navigation tested
- [ ] Screen reader landmarks verified
- [ ] Color contrast verified
- [ ] Focus states visible
- [ ] Touch targets meet minimum size
- [ ] Reduced motion verified
- [ ] Alt text present
- [ ] Form labels visible and persistent

---

## 14. Performance Standards

### Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |
| Interaction to Next Paint | Excellent |

### Implementation Rules

- Self-host all fonts; use `font-display: swap`; preload critical weights
- Serve AVIF with WebP fallback for all photography
- Lazy-load all below-the-fold images
- No design decision should significantly reduce performance
- Avoid large JavaScript bundles
- Avoid unoptimized images
- Avoid multiple font families beyond the approved three

---

## 15. Quality Checklist

Before any page, component, or feature is considered complete:

**Visual**
- [ ] Typography hierarchy is clear without color
- [ ] All spacing follows the spacing scale
- [ ] Colors match the approved palette
- [ ] No unnecessary decoration
- [ ] Elevation is subtle, Level 2 maximum

**Motion**
- [ ] Motion is subtle and purposeful
- [ ] No more than three simultaneous animations
- [ ] Reduced motion tested and verified

**Accessibility**
- [ ] Keyboard navigable
- [ ] Focus states visible
- [ ] Contrast passes AA minimum
- [ ] Screen reader landmarks present
- [ ] Touch targets meet 44×44px minimum

**Responsive**
- [ ] Tested at 375px, 768px, 1200px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Typography scales correctly

**Code**
- [ ] All values reference design tokens
- [ ] No hardcoded colors, spacing, or motion values
- [ ] Semantic HTML elements used correctly
- [ ] One H1 per page

**Content**
- [ ] Copy follows brand voice
- [ ] Images support — not distract from — the message
- [ ] No placeholder text or TODO comments in production

---

## 16. Governance

Design decisions follow this hierarchy. Never skip a level.

```
FOUNDATIONS.md
      ↓
DESIGN-SYSTEM.md  ← this document
      ↓
COMPONENTS.md
      ↓
UI-PATTERNS.md
      ↓
MOTION.md
      ↓
IMPLEMENTATION-STANDARDS.md
      ↓
Page Implementation
```

When in doubt, return to FOUNDATIONS.md and ask:
**Does this feel like Desert Fox Digital?**

---

## 17. Note on DESIGN-SYSTEM.md v2.0-draft

A comparison draft was produced that reduced this document from ~680 lines
to ~180 by removing all content that existed elsewhere in the documentation
set and replacing it with cross-references.

**That draft was reviewed and rejected.** The rationale:

The draft removed content that has no clean single home elsewhere. Typography
rules, color application descriptions, vertical rhythm order, responsive
principles, component standards, and the quality checklist either live here
alone or appear here in their most authoritative form. Removing them to
cross-references would require an implementer to hold three or more documents
open simultaneously to answer a single component question — a net increase in
friction for a small-team or solo build.

The draft also surfaced a real conflict (icon library scope) without resolving
it. That conflict is resolved in §12 of this document.

The correct response to the duplication identified in the draft is the
targeted approach taken in this v1.1: remove the one section (full motion
behavior, §10) that had a cleaner authoritative home elsewhere, and leave
everything else that earns its place by being the definitive statement of
that rule.

---

**Document Status:** Production
**Version:** 1.1
**Supersedes:** DESIGN-SYSTEM.md v1.0, DESIGN-SYSTEM.md v2.0-draft
**Owner:** Desert Fox Digital
**Applies To:** All current and future Desert Fox Digital web properties
