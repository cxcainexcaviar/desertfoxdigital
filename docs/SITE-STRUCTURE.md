# Desert Fox Digital — Project Structure
Version 3.1 | Production
**Supersedes:** SITE-STRUCTURE.md v2.0 (discarded — see Rationale below)

---

## Rationale

v2.0 was audited against `COMPONENTS.md`'s 46-component index, `BUILD-TRACKER.md`,
`IMPLEMENTATION-STANDARDS.md` §2, and `README.md`, and found to have structural issues that this version corrects.

This version is built directly from the 46-item component index, the four
build phases that define infrastructure (Phases 1, 3, 4, 5), and the actual
routes named in `UI-PATTERNS.md`.

See the full directory tree and Decisions Log in the production documentation set.

---

**Note:** Full SITE-STRUCTURE.md content is in the project production docs.
Key structure:

```
src/
├── app/              # Next.js App Router
├── components/       # 46 components per COMPONENTS.md
├── styles/           # Eight CSS cascade layers
├── hooks/            # Motion hooks
├── content/          # Static copy
├── config/           # Site configuration
├── lib/              # Service wrappers
├── types/            # Shared interfaces
└── utils/            # Pure functions
```

**Document Status:** Production
**Version:** 3.1
**Applies To:** All Desert Fox Digital web properties
