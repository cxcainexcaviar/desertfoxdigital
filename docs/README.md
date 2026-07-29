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

## Prerequisites

- Node.js 20 LTS (`node -v` to confirm)
- npm 10+ (`npm -v` to confirm)

---

## Getting Started

```bash
# 1. Clone the repository
git clone <your-repo-url>
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

See `docs/SITE-STRUCTURE.md` for the full authoritative tree.

```
src/
├── app/              # Next.js App Router — pages, layouts, API routes
├── components/       # All UI components, organized by feature subdirectory
├── styles/           # Eight CSS layer files (tokens → utilities)
├── hooks/            # React hooks (useScrollReveal, useNavScrollState, useReducedMotion)
├── content/          # All static copy and data
├── config/           # Site configuration
├── lib/              # Utility helpers and service wrappers
├── types/            # Shared TypeScript interfaces
└── utils/            # Pure utility functions
```

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

---

## Design Principles

Desert Fox Digital is designed to feel like an editorial studio, not a marketing agency.

- Clarity over complexity
- Restraint over decoration
- Craft over speed
- Longevity over trend

**The final test:** Does this feel like Desert Fox Digital?

---

## Before Writing Any Code

1. Read `docs/FOUNDATIONS.md`
2. Read `docs/DESIGN-SYSTEM.md`
3. Read `docs/IMPLEMENTATION-STANDARDS.md`
4. Check `docs/COMPONENTS.md`
5. Open `docs/BUILD-TRACKER.md` — work the current phase top-to-bottom
