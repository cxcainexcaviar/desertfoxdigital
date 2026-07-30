# Foundations

**Desert Fox Digital**
Version 2.0 | Production

This document defines the brand foundation that every design and implementation
decision must serve. Read this before reading any other documentation.

---

## 1. Who Desert Fox Digital Is

Desert Fox Digital is a boutique digital strategy agency serving local businesses.
It is not a full-service agency. It is not a freelance operation. It is a
deliberately small studio that trades scale for quality.

Every design decision, every line of copy, and every component built for this
website must reflect that positioning.

---

## 2. What the Website Must Do

A first-time visitor should be able to answer these five questions within
thirty seconds:

1. What does Desert Fox Digital do?
2. Who is it for?
3. Why is it different?
4. Can it be trusted?
5. What should I do next?

If any answer is unclear, the page must be revised.

---

## 3. Brand Personality

### The website should feel

- Quiet
- Warm
- Intelligent
- Grounded
- Purposeful
- Editorial
- Refined

### The website should never feel

- Corporate
- Aggressive
- Sales-driven
- Loud
- Overly technical
- Trendy

### The reference point

Desert Fox Digital is designed to feel like an editorial studio, not a
marketing agency. Think considered publication, not promotional brochure.
The interface should disappear behind the content. Visitors should remember
the ideas — not the UI.

---

## 4. The Name

The desert fox survives through observation, adaptability, and efficiency.
It does not overpower. It outthinks.

That philosophy governs every business decision Desert Fox Digital makes —
and every design decision made for this website. Restraint is a feature.
Efficiency is an aesthetic.

---

## 5. Design Principles

These five principles govern every decision made within the design system.
They are listed in order of priority. When principles conflict, the higher
principle wins.

### 5.1 Clarity First

Every element must have a purpose. If an element does not improve
understanding, remove it. Decoration is not a purpose. Filling space
is not a purpose.

Ask before adding anything: does this make the page clearer?
If the answer is no or maybe, do not add it.

### 5.2 Typography Creates Hierarchy

Typography is the primary design tool. Hierarchy comes from size, weight,
spacing, and alignment — not from bright colors, oversized icons, or
decorative graphics.

When the layout feels weak, the answer is better typography, not
more elements.

### 5.3 White Space Is Content

Empty space is intentional. Spacing creates rhythm. Rhythm creates
confidence. Never fill unused space simply because it exists.

A section with generous whitespace communicates control.
A section with no whitespace communicates anxiety.

### 5.4 Motion Supports Understanding

Animation exists to reinforce interaction and guide attention.
It never exists purely for decoration.

If removing an animation improves the experience, remove it.
Visitors should notice how calm the website feels — not notice
the animations themselves.

### 5.5 Restraint Over Novelty

The interface must feel timeless. Trends date quickly. Clarity does not.

Avoid: glassmorphism, neon gradients, excessive blur, exaggerated shadows,
oversized floating elements, cursor effects, particle systems, and anything
that would feel out of place in a considered editorial publication.

---

## 6. Color

The palette is deliberately small. Every color has a defined role and a maximum
coverage limit. Adding colors outside the palette is never permitted.

Token values and hex codes live in `DESIGN-SYSTEM.md §4` and `tokens.css`.
This section defines intent and usage rules only.

### Primary Colors

**Juniper**
The primary brand color. Communicates trust and groundedness.
Used for navigation, headlines, footer, dark sections, icons, and primary text.
Maximum 40% visual coverage.

**Dust**
The primary light surface. The default resting state of every page.
Used for page backgrounds, cards, sections, forms, and light surfaces.

**Deep Teal**
The primary interactive color. Communicates action and forward momentum.
Used for primary buttons, links, active navigation states, form focus, and CTAs.
Never use as a page background.

**Fox Clay**
The brand accent. Communicates warmth and craft.
Used for small highlights, dividers, tags, metrics, and decorative accents.
Maximum 10% visual coverage. Use sparingly.

### Supporting Colors

**Sandstone Shadow**
Used for dark overlays, image overlays, and secondary backgrounds.

**Agave**
Used for borders, eyebrows, metadata, disabled states, and secondary icons.
Supports content without competing.

**Mesa Clay**
Used for editorial accents only. One instance per page maximum.

### Color Ratios

- 60% — Neutral structure (Dust, white)
- 30% — Structure (Juniper, Sandstone Shadow)
- 10% — Accent (Deep Teal, Fox Clay)

### Color Rules

- Never place two accent colors adjacent to each other
- Never use more than one primary action color per section
- Use Juniper for trust, Deep Teal for action, Fox Clay sparingly
- Never introduce colors outside this palette

---

## 7. Typography

Typography is the primary design tool on this site. Hierarchy comes from size,
weight, and spacing — not from color or decoration. The three typefaces have
strictly defined roles. They do not overlap.

The complete type scale, token values, and fluid `clamp()` sizes live in
`DESIGN-SYSTEM.md §3` and `tokens.css`. This section defines typeface intent
and usage rules only.

### Typefaces

**Mekona**
Logo only. Never used anywhere else on the site.

**Playfair Display**
The editorial typeface. Carries the brand's character and warmth.
Used for H1–H3, hero headings, pull quotes, and display typography.
Weights: 400 regular, 500 medium. Italic reserved for emphasis only.
Never use for H4, body copy, UI labels, or navigation.

**Inter**
The interface typeface. Carries the brand's clarity and precision.
Used for H4, navigation, body copy, buttons, cards, forms, UI labels, and footer.
Weights: 400, 500, 600, 700.
Never use for display headings or pull quotes.

**Geist Mono**
The mono typeface. Carries the brand's technical groundedness.
Used for eyebrows, section labels, metadata, small captions, and technical references.
Never use for paragraphs, headings, or long-form content.

### Type Rules

- Maximum reading width: 70 characters; preferred 55–65 characters
- Default alignment: left — center only in hero sections, CTAs, and pull quotes
- Never allow headings to wrap awkwardly on mobile
- Scale all display typography with `clamp()` for fluid sizing
- One H1 per page, descending logical hierarchy — no skipped levels

---

## 8. Spacing

The site uses an 8-point spacing system. Every spacing value must come
from a token. Never use arbitrary values. White space is not padding —
it is an editorial decision. Generous spacing communicates control;
cramped spacing communicates anxiety.

The complete spacing scale and token values live in `DESIGN-SYSTEM.md §5`
and `tokens.css`. Section spacing tiers are: 120px desktop → 96px tablet
→ 72px mobile → 56px small mobile.

---

## 9. Layout

Layout exists to create rhythm and direct attention — not to fill a grid.
The grid is a tool, not a destination.

Container widths, grid column counts, gutters, and all breakpoint values
live in `DESIGN-SYSTEM.md §5` and `tokens.css`.

### Layout Principles

- Design for ranges, not specific devices
- Four container variants: default, reading, wide media, full bleed
- Three grid configurations: 12-column desktop, 8-column tablet, 4-column mobile
- Eight named breakpoints from small mobile through ultra wide
- Never shrink desktop layouts — recompose them
- Hierarchy must never change between breakpoints; only the presentation does

---

## 10. Surfaces

The site uses four surface levels. Surfaces create depth and rhythm by
alternating light and dark areas without relying on decoration.
Never stack two dark surfaces consecutively unless one is the footer
(which is always Surface 2 and is a structural, not content, element).

CSS token values and alternation rules live in `DESIGN-SYSTEM.md §6`.

**Surface 0 — Page Background**
The neutral resting state. Long-form content. Standard page sections.

**Surface 1 — Raised**
For elements that need to lift off the page — cards, testimonials, forms.
Uses a subtle border and shadow to communicate elevation.

**Surface 2 — Editorial**
The brand's dark, authoritative mode. Used for the hero, footer, and CTA sections.
Reverses the text/background relationship: light text on dark ground.

**Surface 3 — Overlay**
Used over imagery only. A translucent Juniper layer that preserves the image
while keeping text legible. Never blur the full page.

---

## 11. Motion

Motion communicates confidence. It should feel like breathing, not entertainment.
Visitors should notice how calm the site feels — not notice the animations themselves.

Token values, timing durations, easing curves, and all implementation details
live in `MOTION.md` (authoritative) and `DESIGN-SYSTEM.md §10`.

### Motion Philosophy

Three tiers of movement: hover (immediate, ≤150ms), scroll reveal (deliberate,
up to 500ms), and atmospheric (imperceptibly slow, 15s+). Each tier has a
defined maximum — never exceed it.

### Motion Rules

- Animate `transform` and `opacity` only — never layout properties
- Maximum three simultaneous animations anywhere on screen
- Prefer CSS over JavaScript for all motion
- Always respect `prefers-reduced-motion` — remove transforms and haze, retain opacity and focus states
- If removing an animation improves the experience, remove it
- Visitors should notice calm, not animation

---

## 12. Atmosphere

The atmosphere layer is part of the brand identity, not a visual effect.
It should feel discovered rather than noticed — something visitors become
aware of after time on the page, not immediately.

Technical implementation details (movement values, timing, opacity limits,
layer order) live in `MOTION.md §8` and `COMPONENTS.md #43`.

### Atmosphere Rules

- Apply only to the hero section and the final CTA block — two sections maximum per page
- The haze must never distract from typography or compete with content
- Never increase opacity or movement speed beyond the specified limits
- Disabled entirely under `prefers-reduced-motion`

---

## 13. Imagery

### Style

Natural light. Long shadows. Editorial. Quiet. Organic. Minimal. Authentic.

### Preferred Subjects

Architecture, desert landscapes, local businesses, craftspeople,
hospitality, storefronts, natural textures, hands at work, materials,
light and shadow.

### Avoid

Corporate offices, people pointing at laptops, fake meetings, bright
blue technology graphics, obvious stock photography, heavy editing,
high saturation.

### Format

AVIF preferred, WebP fallback, SVG for icons and logos.
Never use large GIFs or unoptimized images.

---

## 14. Accessibility

Accessibility is a release requirement, not a nice-to-have.

- Minimum contrast: WCAG AA. Target: AAA where possible.
- Minimum body font size: 16px
- Minimum touch target: 44×44px
- Every interactive element reachable by keyboard with visible focus state
- One H1 per page, logical heading hierarchy
- Descriptive alt text on all images
- All forms have visible, persistent labels
- Respect `prefers-reduced-motion` at all times
- Screen reader landmarks on every page

---

## 15. The Final Test

Before any page, component, or feature is approved, ask:

**Does this feel like Desert Fox Digital?**

Not because of a logo or a color, but because of the experience.
Calm instead of urgency. Confidence instead of hype.
Craft instead of decoration. Clarity instead of complexity.

If a design becomes stronger by removing elements, it is moving
in the right direction.

If a design becomes louder by adding elements, it is moving
in the wrong direction.

The website should feel finished not because it has more —
but because there is nothing unnecessary left to remove.

---

**Document Status:** Production
**Version:** 2.0
**Supersedes:** FOUNDATIONS.md v1.0
**Technical values:** All hex codes, pixel values, token definitions, timing durations, and easing curves live in DESIGN-SYSTEM.md and tokens.css — not in this document.
**Applies To:** All current and future Desert Fox Digital web properties
