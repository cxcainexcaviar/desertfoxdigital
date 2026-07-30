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

<<<<<<< HEAD
## Getting Started

```bash
npm install
cp .env.local.example .env.local
npm run dev
```

=======
## Prerequisites

- Node.js 20 LTS (`node -v` to confirm)
- npm 10+ (`npm -v` to confirm)

---

## Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/desertfoxdigital/desertfoxdigital-site.git
cd desertfoxdigital-site

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Fill in the required values — see Environment Variables below

# 4. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL, e.g. `https://desertfoxdigital.com` |
| `CONTACT_EMAIL` | Yes | Address that receives contact form submissions |
| `RESEND_API_KEY` | Yes | API key for email delivery via Resend |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics measurement ID |

Never commit `.env.local` or any real key to the repository.

---

## Project Structure

```
src/
├── app/              # Next.js App Router — pages, layouts, API routes
├── components/       # All UI components, organized by feature subdirectory
├── styles/           # Eight CSS layer files (tokens → utilities)
├── hooks/            # React hooks (useScrollReveal, useNavScrollState, useReducedMotion)
├── content/          # All static copy and data — no inline strings over 2–3 lines
├── config/           # Site configuration (site, navigation, seo, env)
├── lib/              # Utility helpers and service wrappers
├── types/            # Shared TypeScript interfaces
└── utils/            # Pure utility functions

public/
├── fonts/            # Self-hosted font files
├── images/           # AVIF + WebP imagery
├── logos/            # Client logos for LogoStrip
└── og/               # Open Graph images
```

Full directory tree in `docs/SITE-STRUCTURE.md`.

---

## Available Scripts

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

---

## CSS Architecture

Styles use CSS Cascade Layers. Layer order is declared once in `src/app/globals.css` and never changed:

```
tokens → reset → base → layout → components → patterns → animations → utilities
```

All values must reference design tokens in `tokens.css`. No hardcoded colors, spacing, or durations. No CSS Modules. No inline styles.

Full rules in `docs/IMPLEMENTATION-STANDARDS.md`.

>>>>>>> 24fb788 (self hosted font loading)
---

## Documentation

All project documentation lives in `docs/`.

| File | Contents |
|---|---|
<<<<<<< HEAD
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
=======
| `FOUNDATIONS.md` | Brand philosophy, design principles, color intent, typography intent |
| `DESIGN-SYSTEM.md` | Complete visual system — tokens, type scale, color, layout, motion |
| `COMPONENTS.md` | All 46 components with interfaces, anatomy, and usage rules |
| `UI-PATTERNS.md` | How components assemble into page sections and full pages |
| `MOTION.md` | Timing, easing, scroll reveal, hero entrance, reduced motion |
| `SITE-STRUCTURE.md` | Full directory tree and file conventions |
| `IMPLEMENTATION-STANDARDS.md` | Coding standards, naming, QA checklist, git workflow |
| `BUILD-TRACKER.md` | Phase-by-phase build tasks, objectives, risks, and exit criteria |

> **Governance hierarchy:** FOUNDATIONS.md → DESIGN-SYSTEM.md → COMPONENTS.md → UI-PATTERNS.md → MOTION.md → IMPLEMENTATION-STANDARDS.md
> When documents conflict, the higher document wins.

---

## Design Principles

Desert Fox Digital is designed to feel like an editorial studio, not a marketing agency.

- Clarity over complexity
- Restraint over decoration
- Craft over speed
- Longevity over trend

If a design becomes stronger by removing elements, it is moving in the right direction.

**The final test:** Does this feel like Desert Fox Digital?

---

## Before Writing Any Code

1. Read `docs/FOUNDATIONS.md` — understand the brand before touching anything
2. Read `docs/DESIGN-SYSTEM.md` — all visual decisions derive from here
3. Read `docs/IMPLEMENTATION-STANDARDS.md` — all coding decisions derive from here
4. Check `docs/COMPONENTS.md` — confirm no existing component solves the problem
5. Open `docs/BUILD-TRACKER.md` — work the current phase top-to-bottom

---

## Performance Targets

| Metric | Target |
|---|---|
| Lighthouse Performance | 95+ |
| Lighthouse Accessibility | 100 |
| Lighthouse Best Practices | 100 |
| Lighthouse SEO | 100 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | Excellent |

---

## Browser Support

Modern evergreen browsers. No IE11 support required.
>>>>>>> 24fb788 (self hosted font loading)
