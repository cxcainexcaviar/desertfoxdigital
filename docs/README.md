# Desert Fox Digital

Marketing website for Desert Fox Digital — a boutique digital strategy agency serving local businesses in Tucson, Arizona.

---

## Tech Stack

| Concern | Decision |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript — strict mode, zero `any` |
| Styling | CSS Cascade Layers — global only, no CSS Modules |
| Fonts | Self-hosted — Inter, Playfair Display, Geist Mono |
| Icons | Lucide React — outline style only |
| Email | Resend |
| Deployment | Vercel |
| Package manager | npm |
| Node | 20 LTS minimum |

---

## Getting Started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

---

## Documentation

All project documentation lives in `docs/`.

| File | Contents |
|---|---|
| `FOUNDATIONS.md` | Brand philosophy, design principles |
| `DESIGN-SYSTEM.md` | Complete visual system — tokens, type, color, layout |
| `COMPONENTS.md` | All 46 components with interfaces and rules |
| `UI-PATTERNS.md` | How components assemble into pages |
| `MOTION.md` | Timing, easing, scroll reveal, reduced motion |
| `SITE-STRUCTURE.md` | Full directory tree |
| `IMPLEMENTATION-STANDARDS.md` | Coding standards, QA checklist |
| `BUILD-TRACKER.md` | Phase-by-phase build tasks |
| `COPYWRITING.md` | Editorial voice and copy standards |

> **Governance hierarchy:** FOUNDATIONS.md → DESIGN-SYSTEM.md → COMPONENTS.md → UI-PATTERNS.md → MOTION.md → IMPLEMENTATION-STANDARDS.md

**The final test:** Does this feel like Desert Fox Digital?
