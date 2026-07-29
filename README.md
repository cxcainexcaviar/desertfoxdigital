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
# Fill in required values
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL |
| `CONTACT_EMAIL` | Yes | Contact form recipient |
| `RESEND_API_KEY` | Yes | Resend API key |
| `NEXT_PUBLIC_GA_ID` | No | Google Analytics ID |

Never commit `.env.local`.

---

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run type-check
```

---

## Documentation

Production docs live in `docs/` (FOUNDATIONS, DESIGN-SYSTEM, COMPONENTS, UI-PATTERNS, MOTION, IMPLEMENTATION-STANDARDS, BUILD-TRACKER, SITE-STRUCTURE, COPYWRITING).

**Next:** follow `docs/BUILD-TRACKER.md` from Phase 4 (UI primitives).

**The final test:** Does this feel like Desert Fox Digital?
