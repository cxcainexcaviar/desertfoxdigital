# Motion

**Desert Fox Digital**
Version 1.0 | Production

This document defines every timing, easing, and interaction-motion rule used on the Desert Fox Digital website.

If this document conflicts with `DESIGN-SYSTEM.md`, `DESIGN-SYSTEM.md` wins.

---

## 1. Motion Personality

Imagine morning desert air. Soft wind. Long shadows. Nothing moves quickly. Nothing demands attention. Everything feels intentional.

Motion communicates confidence, not entertainment.

---

## 2. Timing Scale

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

Never use bounce, elastic, overshoot, or spring easing.

---

## 4. Motion Hierarchy

| Level | Name | Duration | Examples |
|---|---|---|---|
| 1 | Hover | 100–150ms | Buttons, links, cards, nav |
| 2 | Reveal | 250–500ms | Scroll reveals, drawers, accordion, hero entrance |
| 3 | Ambient | 15–20s | Haze only |

---

## 5. Scroll Reveal

```
opacity:    0 → 1
transform:  translateY(16px) → none
duration:   500ms
easing:     var(--ease-standard)
stagger:    80ms between sibling items
trigger:    15% of element into viewport
behavior:   plays once
```

Implemented via `useScrollReveal` → `.reveal` / `.is-visible`.

---

## 6. Hero Entrance Sequence

```
1. Navigation   — instant
2. Headline     — fade + translateY(16px), 500ms
3. Paragraph    — fade + translateY(16px), 500ms, delay 100ms
4. CTA group    — fade + translateY(16px), 500ms, delay 200ms
5. Background   — opacity 0 → 1, 1200ms
```

---

## 7. Atmospheric Layer

Grain: static, 2–4% opacity.
Haze: 15s linear alternate, translate3d ≤1.5%, opacity below 10%.
Max two sections per page. Disabled under `prefers-reduced-motion`.

---

## 8. Required Hooks

| Hook | Purpose |
|---|---|
| `useScrollReveal` | IntersectionObserver for reveals |
| `useNavScrollState` | Nav transparent → filled |
| `useReducedMotion` | prefers-reduced-motion boolean |

---

## 9. Implementation Rules

- Animate `transform` and `opacity` only (accordion height is the one exception)
- Max three simultaneous animations
- Prefer CSS over JS
- Always respect `prefers-reduced-motion`

---

## 10. Reduced Motion

Remove: parallax, haze, scroll-reveal transforms, image movement.
Retain: opacity transitions, focus indicators, nav scroll state.

---

**Document Status:** Production | **Version:** 1.0
