# Motion

**Desert Fox Digital**
Version 1.0 | Production

This document defines every timing, easing, and interaction-motion rule
used on the Desert Fox Digital website. It consolidates the Motion System
(`DESIGN-SYSTEM.md` §10) with the component-level motion specs scattered
across `COMPONENTS.md`, so implementation never has to cross-reference
both documents to animate something correctly.

If this document conflicts with `DESIGN-SYSTEM.md`, `DESIGN-SYSTEM.md` wins.

---

## 1. Motion Personality

Imagine morning desert air. Soft wind. Long shadows. Nothing moves
quickly. Nothing demands attention. Everything feels intentional.

Motion communicates confidence, not entertainment. A visitor should
notice how calm the site feels — never the animations themselves.

---

## 2. Timing Scale

Every duration on the site comes from this scale. Never use an
arbitrary duration value.

| Token | Value | Usage |
|---|---|---|
| `--duration-instant` | 100ms | Immediate feedback |
| `--duration-fast` | 150ms | Hover states |
| `--duration-standard` | 250ms | Navigation, drawers, form states, reveals |
| `--duration-slow` | 500ms | Scroll reveals, hero entrance |
| `--duration-atmospheric` | 15s | Haze only |

---

## 3. Easing

```css
--ease-standard: cubic-bezier(.22, .61, .36, 1);
--ease-linear:   linear;
```

- `var(--ease-standard)` is used for every transition unless explicitly
  noted otherwise.
- `var(--ease-linear)` is reserved exclusively for the atmospheric haze —
  linear motion reads as mechanical everywhere else, which is exactly
  wrong for this brand.
- Never use bounce, elastic, overshoot, or spring easing anywhere on the site.

---

## 4. Motion Hierarchy

Three levels. Nothing operates outside them.

| Level | Name | Duration | Examples |
|---|---|---|
| 1 | Hover | 100–150ms | Buttons, links, cards, nav |
| 2 | Reveal | 250–500ms | Scroll reveals, drawers, accordion, hero entrance |
| 3 | Ambient | 15–20s | Haze only — one per viewport, never more |

---

## 5. Interaction Motion — Component Reference

Every interactive motion behavior on the site, in one place. Component
numbers reference `COMPONENTS.md`.

| Component | Trigger | Behavior | Duration |
|---|---|---|
| Primary/Secondary Button (#6, #7) | Hover | `translateY(-2px)`, shadow `var(--shadow-sm)` in, Deep Teal darkens 5% | 150ms |
| Primary/Secondary Button (#6, #7) | Active | Returns to `translateY(0)`, shadow removed | 100ms |
| Nav Link (#4) | Hover | Text darkens slightly, underline animates left → right | 150ms |
| Text/Icon Link | Hover | Arrow translates 6px right | 150ms |
| Approach Row (#19) | Hover | Divider darkens, arrow `translateX(6px)`, title weight 500 → 600, background `rgba(255,255,255,.02)` | 150ms |
| Project Card (#23) | Hover | Image `scale(1.02)`, title `translateY(-2px)` | 250ms, standard easing |
| Mobile Drawer (#46) | Open | Slides in from right | 250ms, standard easing |
| Mobile Drawer (#46) | Close | Escape key or backdrop click | 250ms, standard easing |
| Accordion (#34) | Expand/collapse | Height + opacity | 250ms, standard easing, no bounce |
| Site Nav (#4) | Scroll | Transparent → filled background state | 250ms |

**Rule:** hover motion never exceeds 150ms. If something takes longer to
respond to a hover, it reads as sluggish, not calm.

---

## 6. Scroll Reveal

The single most-used motion pattern on the site. Applies to section
headers, cards, rows, and any content entering the viewport on scroll.

```
opacity:    0 → 1
transform:  translateY(16px) → none
duration:   500ms
easing:     var(--ease-standard)
stagger:    80ms between sibling items
trigger:    15% of element into viewport
behavior:   plays once — does not replay on reverse scroll
```

Implemented via `IntersectionObserver` in the `useScrollReveal` hook
(see §9). Applied through the `.reveal` / `.is-visible` utility classes
and `.reveal-delay-1` through `.reveal-delay-4` for staggered groups.

---

## 7. Hero Entrance Sequence

The hero is the only place multiple elements animate in sequence on
page load rather than on scroll.

```
1. Navigation   — instant, no animation
2. Headline     — fade + translateY(16px), 500ms
3. Paragraph    — fade + translateY(16px), 500ms, delay 100ms
4. CTA group    — fade + translateY(16px), 500ms, delay 200ms
5. Background   — opacity 0 → 1, 1200ms
```

**Rule:** never animate all five simultaneously. The staggered delay is
what makes the entrance read as considered rather than abrupt.

---

## 8. Atmospheric Layer

Exactly two elements, assembled inside a single `AtmosphericBg`
component (#43). No other ambient motion exists anywhere in the system.

**Grain**
- Static. No animation.
- Opacity: 2–4%.

**Haze**
```
transform:  translate3d(0,0,0) → translate3d(1.5%, -1.5%, 0)
duration:   15s
easing:     var(--ease-linear)
direction:  infinite alternate
opacity:    below 10%
```

**Rules**
- One atmospheric animation per viewport. Never more.
- Applied to a maximum of two sections per page (hero, final CTA — per
  `FOUNDATIONS.md` §12).
- Haze must never obscure or distract from typography.
- Visitors should notice the haze only after spending time on the page,
  not immediately on load.
- Never increase haze opacity or movement speed beyond this spec.
- Fully disabled under `prefers-reduced-motion`.

---

## 9. Required Hooks

The motion system implies exactly three hooks. No others are needed for v1.

| Hook | Purpose |
|---|---|
| `useScrollReveal` | `IntersectionObserver` wrapper driving `.reveal` → `.is-visible` transitions per §6 |
| `useNavScrollState` | Tracks scroll position to drive the nav's transparent → filled transition |
| `useReducedMotion` | Reads `prefers-reduced-motion` and exposes a boolean so components can conditionally disable animation |

---

## 10. Implementation Rules

- Animate `transform` and `opacity` only.
- Never animate `width`, `height`, `top`, `left`, `right`, `bottom`, or
  any other layout-triggering property.

  *Exception:* the Accordion (#34) animates height as part of its
  expand/collapse — this is the one sanctioned case, and it must still
  run at 250ms standard easing with no bounce.
- Maximum three simultaneous animations on screen at any time.
- Prefer CSS transitions/animations over JavaScript-driven motion.
  JavaScript is only used to toggle the classes/state that CSS then
  animates (e.g. `useScrollReveal` adding `.is-visible`).
- Every animation must respect `prefers-reduced-motion`.

---

## 11. Reduced Motion

When `prefers-reduced-motion: reduce` is active:

**Remove entirely**
- Parallax or any transform-based movement
- Haze animation
- Scroll reveal transforms (content should appear in its final state
  immediately, not animate into place)
- Image movement (project card scale, etc.)

**Retain**
- Opacity transitions
- Focus indicators
- Navigation scroll-state changes (transparent → filled)

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

This is applied globally in `utilities/accessibility.css`. Components
should not need individual reduced-motion overrides beyond this — the
`useReducedMotion` hook exists for the small number of cases (haze,
scroll reveal) where the animation needs to be skipped in JS logic, not
just shortened in CSS.

---

## 12. The Test

Before shipping any animation, ask: **does removing this improve the
experience?**

If yes, remove it. If the honest answer is "it doesn't matter either
way," remove it too — restraint is the default, not the exception.

---

**Document Status:** Production
**Version:** 1.0
**Consolidates:** `DESIGN-SYSTEM.md` §10, motion references in `COMPONENTS.md`
**Governs:** `styles/animations.css`, `hooks/useScrollReveal.ts`,
`hooks/useNavScrollState.ts`, `hooks/useReducedMotion.ts`
