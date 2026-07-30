# Components

**Desert Fox Digital**
Version 1.0 | Production

This document defines every reusable component in the Desert Fox Digital
design system. Each component maps to a numbered entry in this document.
No component may be built without a corresponding entry here.

Before building any component:
1. Confirm it does not already exist
2. Use the TypeScript interface exactly as defined
3. Reference only approved design tokens
4. Implement all defined states
5. Verify accessibility requirements

---

## Global Rules

These rules apply to every component without exception.

- All values reference design tokens. Never hardcode colors, spacing,
  typography, radius, shadow, or motion values.
- Use semantic HTML elements appropriate to the component's purpose.
- Every interactive component supports full keyboard navigation.
- Every interactive component has a visible focus indicator.
- Minimum touch target size: 44×44px.
- One primary CTA maximum per major component.
- Compose existing components rather than duplicating functionality.
- No component introduces new visual language not defined in the design system.

---

## Component Index

| # | Component | File |
|---|---|---|
| 1 | Container | `ui/Container.tsx` |
| 2 | Section | `ui/Section.tsx` |
| 3 | Divider | `ui/Divider.tsx` |
| 4 | Primary Navigation | `navigation/SiteNav.tsx` |
| 5 | Footer Navigation | `footer/FooterNav.tsx` |
| 6 | Primary Button | `ui/Button.tsx` |
| 7 | Secondary Button | `ui/Button.tsx` |
| 8 | Ghost Button | `ui/Button.tsx` |
| 9 | Icon Link | `ui/Button.tsx` |
| 10 | Eyebrow | `ui/Eyebrow.tsx` |
| 11 | Section Heading | `ui/Heading.tsx` |
| 12 | Lead Paragraph | `ui/Lead.tsx` |
| 13 | Body Paragraph | `ui/Body.tsx` |
| 14 | Quote | `ui/Quote.tsx` |
| 15 | Tag | `ui/Tag.tsx` |
| 16 | Badge | `ui/Badge.tsx` |
| 17 | Breadcrumb | `ui/Breadcrumb.tsx` |
| 18 | Section Header | `sections/SectionHeader.tsx` |
| 19 | Approach Row | `approach/ApproachRow.tsx` |
| 20 | Service Detail Block | `sections/ServiceDetailBlock.tsx` |
| 21 | Service Grid | `sections/ServiceGrid.tsx` |
| 22 | Featured Project | `work/FeaturedProject.tsx` |
| 23 | Project Card | `work/ProjectCard.tsx` |
| 24 | Project Tags | `work/ProjectTags.tsx` |
| 25 | Metric Badge | `work/MetricBadge.tsx` |
| 26 | Testimonial Card | `testimonials/TestimonialCard.tsx` |
| 27 | Featured Testimonial | `testimonials/FeaturedTestimonial.tsx` |
| 28 | Logo Strip | `ui/LogoStrip.tsx` |
| 29 | Statistics Row | `ui/StatisticsRow.tsx` |
| 30 | CTA Block | `sections/CtaBlock.tsx` |
| 31 | Inline CTA | `ui/InlineCta.tsx` |
| 32 | Hero CTA Group | `hero/HeroCTA.tsx` |
| 33 | Contact Card | `ui/ContactCard.tsx` |
| 34 | FAQ Item | `ui/Accordion.tsx` |
| 35 | Form | `forms/ContactForm.tsx` |
| 36 | Input | `forms/Input.tsx` |
| 37 | Textarea | `forms/Textarea.tsx` |
| 38 | Select | `forms/Select.tsx` |
| 39 | Checkbox | `forms/Checkbox.tsx` |
| 40 | Success Message | `forms/SuccessMessage.tsx` |
| 41 | Footer | `footer/SiteFooter.tsx` |
| 42 | Social Links | `footer/SocialLinks.tsx` |
| 43 | Atmospheric Background | `hero/AtmosphericBg.tsx` |
| 44 | Empty State | `ui/EmptyState.tsx` |
| 45 | Skeleton | `ui/Skeleton.tsx` |
| 46 | Mobile Drawer | `navigation/MobileDrawer.tsx` |

---

## 1. Container

**Purpose**
Creates consistent horizontal alignment across every page.
All content must live inside a container.

**File:** `src/components/ui/Container.tsx`

```typescript
interface ContainerProps {
  variant?: 'default' | 'reading' | 'wide' | 'full';
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}
```

**Variants**

| Variant | Max Width | Usage |
|---|---|---|
| `default` | 1200px | Standard page content |
| `reading` | 720px | Long-form text, articles |
| `wide` | 1400px | Large imagery, featured projects |
| `full` | 100% | Full-bleed sections |

**Padding**
Desktop: 32px | Tablet: 24px | Mobile: 20px

**Rules**
- Content must never touch the viewport edge
- Never nest `wide` inside `default`
- `full` variant carries no horizontal padding

---

## 2. Section

**Purpose**
Defines vertical rhythm. Every page is built from stacked sections.

**File:** `src/components/ui/Section.tsx`

```typescript
interface SectionProps {
  surface?: 0 | 1 | 2 | 3;
  as?: keyof JSX.IntrinsicElements;
  id?: string;
  className?: string;
  children: React.ReactNode;
}
```

**Spacing**
Desktop: 120px | Tablet: 96px | Mobile: 72px | Small Mobile: 56px

**Surface Values**
- `0` — Dust background (default)
- `1` — Raised white/light surface
- `2` — Juniper dark surface
- `3` — Overlay (imagery only)

**Rules**
- Every page section uses this component
- Never apply ad-hoc spacing to sections
- Sections alternate surface values for rhythm

---

## 3. Divider

**Purpose**
Separates content without introducing unnecessary visual weight.
Preferred over borders for content separation.

**File:** `src/components/ui/Divider.tsx`

```typescript
interface DividerProps {
  variant?: 'full' | 'inset' | 'short';
  className?: string;
}
```

**Anatomy**
`<hr>` or `<div role="separator">`

**Styles**
- Height: 1px
- Color: `var(--color-border)`
- Spacing: 48px above and below

**Variants**
- `full` — spans the full container width
- `inset` — indented on both sides
- `short` — 120px wide, centered

**Rules**
- Never use decorative dividers
- Never animate dividers
- Dividers create rhythm, not decoration

---

## 4. Primary Navigation

**Purpose**
Primary site navigation. Appears on every page.
Transitions from transparent over the hero to a filled state on scroll.

**File:** `src/components/navigation/SiteNav.tsx`

```typescript
interface SiteNavProps {
  transparent?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  current?: boolean;
}

const navItems: NavItem[] = [
  { label: 'Work',     href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About',    href: '/about' },
  { label: 'Journal',  href: '/journal' },
  { label: 'Contact',  href: '/contact' },
];
```

**Anatomy**
Logo | Nav links | Primary CTA ("Start a Project")

**Height:** 80px (constant, never changes on scroll)

**States**

| State | Background | Border | Blur |
|---|---|---|---|
| Default (hero) | Transparent | None | None |
| Scrolled | Dust | 1px bottom border | 12px backdrop blur |
| Mobile | — | — | Drawer triggered |

**Hover**
Link darkens slightly. Underline animates left to right over 150ms.

**Accessibility**
- `<nav>` element with `aria-label="Primary navigation"`
- Current page link has `aria-current="page"`
- Keyboard navigable
- Escape closes mobile drawer
- Focus returns to trigger after drawer closes

---

## 5. Footer Navigation

**Purpose**
Simplified navigation used only inside the footer.
No CTA button. Grouped links.

**File:** `src/components/footer/FooterNav.tsx`

```typescript
interface FooterNavGroup {
  label: string;
  links: {
    label: string;
    href: string;
  }[];
}

interface FooterNavProps {
  groups: FooterNavGroup[];
}
```

**Rules**
- No CTA button
- Never used outside the footer component
- Links are grouped by category

---

## 6. Primary Button

**Purpose**
Main call-to-action. Maximum one per visual section.

**File:** `src/components/ui/Button.tsx` (`variant="primary"`)

```typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'icon-link';
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}
```

**Anatomy**
`<button>` or `<a>` when `href` is provided

**Styles**
- Height: 48px
- Padding: 16px × 24px
- Radius: `var(--radius-sm)` (6px)
- Background: `var(--color-deep-teal)`
- Text: `var(--color-dust)`
- Font: Inter 16px, weight 600

**States**

| State | Background | Transform | Shadow |
|---|---|---|---|
| Default | Deep Teal | none | none |
| Hover | Deep Teal darkened 5% | translateY(-2px) | `var(--shadow-sm)` |
| Active | Deep Teal | translateY(0) | none |
| Disabled | Deep Teal 40% opacity | none | none |
| Loading | Deep Teal | none | none — spinner replaces label |

**Loading State**
Spinner replaces label text. Button width remains fixed.

**Content Rules**
Maximum three words.
Preferred: "Start a Project", "Claim Your Ground", "Let's Talk".

---

## 7. Secondary Button

**Purpose**
Supporting action. Text only with arrow.

**File:** `src/components/ui/Button.tsx` (`variant="secondary"`)

Uses the same `ButtonProps` interface as Component #6.

**Styles**
- No background
- No border
- Color: `var(--color-deep-teal)`
- Includes trailing arrow icon

**Hover**
Arrow translates 6px right over 150ms.

---

## 8. Ghost Button

**Purpose**
Tertiary action. Used on dark surfaces.

**File:** `src/components/ui/Button.tsx` (`variant="ghost"`)

Uses the same `ButtonProps` interface as Component #6.

**Styles**
- Background: transparent
- Border: 1px solid `var(--color-juniper)`
- Color: `var(--color-juniper)`

**Hover**
Background fills with Juniper. Text becomes Dust. Lift 2px.

---

## 9. Icon Link

**Purpose**
Small inline action. Arrow only.

**File:** `src/components/ui/Button.tsx` (`variant="icon-link"`)

Uses the same `ButtonProps` interface as Component #6.

**Styles**
Text link with trailing arrow. No background. No border.

**Example**
"Learn More →"

**Hover**
Arrow translates 6px right over 150ms.

**Rules**
Arrow only. No decorative icons. Never use for primary actions.

---

## 10. Eyebrow

**Purpose**
Introduces every major section. Always the first element in a section.

**File:** `src/components/ui/Eyebrow.tsx`

```typescript
interface EyebrowProps {
  label: string;
  className?: string;
}
```

**Anatomy**
`<p>` with `.eyebrow` class

**Styles**
- Font: Geist Mono
- Size: 12px (`var(--text-caption)`)
- Weight: 500
- Transform: uppercase
- Letter spacing: 0.12em
- Color: `var(--color-agave)`

**Rules**
- Never exceed one line
- Always uppercase
- Never use as a heading
- Color is always Agave — never override

---

## 11. Section Heading

**Purpose**
Primary heading inside every section. Sets the editorial tone.

**File:** `src/components/ui/Heading.tsx`

```typescript
interface HeadingProps {
  level: 1 | 2 | 3 | 4;
  display?: boolean;
  displaySize?: 'xl' | 'default';
  children: React.ReactNode;
  className?: string;
}
```

**Rules**
- One H1 per page
- Playfair Display for H1, H2, H3
- Inter for H4
- Maximum two lines for display headings
- Maximum 12 words for section headings
- `text-wrap: balance` always applied
- Letter spacing: -0.02em for H1–H3

---

## 12. Lead Paragraph

**Purpose**
Supports major headings. Provides context below the section heading.

**File:** `src/components/ui/Lead.tsx`

```typescript
interface LeadProps {
  children: React.ReactNode;
  className?: string;
}
```

**Styles**
- Font: Inter
- Size: 20px (`var(--text-lead)`)
- Weight: 400
- Line height: 1.6
- Max width: 640px

**Rules**
Maximum three lines. Never center-aligned except in hero and CTA.

---

## 13. Body Paragraph

**Purpose**
Standard body copy.

**File:** `src/components/ui/Body.tsx`

```typescript
interface BodyProps {
  size?: 'body' | 'small' | 'caption';
  children: React.ReactNode;
  className?: string;
}
```

**Styles**
- Font: Inter
- Size: 16px (body), 14px (small), 12px (caption)
- Line height: 1.7
- Max width: 70ch
- Paragraph gap: 24px

**Rules**
- Never center-align long-form content
- Never exceed 70 characters per line

---

## 14. Quote

**Purpose**
Editorial pull quote. Used in testimonials and brand story moments.

**File:** `src/components/ui/Quote.tsx`

```typescript
interface QuoteProps {
  quote: string;
  attribution?: {
    name: string;
    title?: string;
    company?: string;
  };
  className?: string;
}
```

**Anatomy**
`<blockquote>` with `<footer>` for attribution

**Styles**
- Font: Playfair Display
- Size: clamp(2rem, 3vw, 2.75rem)
- Weight: 400
- Line height: 1.25
- Max width: 22ch
- Attribution: Inter, 14px, 70% opacity

**Rules**
- No quotation mark graphics
- No speech bubbles
- Attribution below quote, never above
- Never use for body copy

---

## 15. Tag

**Purpose**
Categorizes work by service type.

**File:** `src/components/ui/Tag.tsx`

```typescript
interface TagProps {
  label: string;
  className?: string;
}
```

**Styles**
- Padding: 8px × 12px
- Radius: 999px (pill)
- Border: 1px solid `var(--color-agave)`
- Background: transparent
- Font: Inter, 12px, weight 500

**Examples**
SEO, Brand Strategy, Website, Content, Email

**Rules**
- Never use bright colors
- Maximum five tags per project
- Never use as a button

---

## 16. Badge

**Purpose**
Highlights a metric, award, or status. Draws brief attention.

**File:** `src/components/ui/Badge.tsx`

```typescript
interface BadgeProps {
  label: string;
  variant?: 'default' | 'metric' | 'award';
  className?: string;
}
```

**Styles**
- Padding: 4px × 8px
- Radius: `var(--radius-sm)`
- Background: Dust + 4% darkened
- Border: 1px solid `var(--color-border)`
- Font: Inter, 12px, weight 600

**Examples**
+214%, Award, Featured

**Rules**
Keep understated. Never use bright colors.
Never use more than one badge per card.

---

## 17. Breadcrumb

**Purpose**
Wayfinding on interior pages. Never used on the homepage.

**File:** `src/components/ui/Breadcrumb.tsx`

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}
```

**Anatomy**
`<nav aria-label="Breadcrumb">` with `<ol>`

**Styles**
- Font: Inter, 14px
- Color: Agave
- Separator: "/"
- Current page: Juniper, no link

**Structure**
Home / Services / Brand Strategy

**Rules**
- Never larger than body text
- Never on the homepage
- Last item is never a link

---

## 18. Section Header

**Purpose**
Reusable pattern that opens every major section.
Eyebrow → Heading → Lead paragraph → Whitespace.

**File:** `src/components/sections/SectionHeader.tsx`

```typescript
interface SectionHeaderProps {
  eyebrow: string;
  heading: string;
  lead?: string;
  align?: 'left' | 'center';
  className?: string;
}
```

**Anatomy**
Eyebrow (Component #10)
↓
Heading (Component #11)
↓
Lead (Component #12, optional)
↓
Whitespace (32px below before primary content)

**Rules**
- Used on nearly every major section
- `align="center"` only for CTA and hero sections
- Lead paragraph is optional
- Never add additional elements inside SectionHeader

---

## 19. Approach Row

**Purpose**
Signature component. Replaces traditional service cards with an
editorial row presentation. No cards. No icons. No background colors.

**File:** `src/components/approach/ApproachRow.tsx`

```typescript
interface ApproachRowProps {
  number: string;           // "01" through "05"
  title: string;
  principle: string;
  description: string;
  href: string;
  className?: string;
}
```

**Anatomy**
Number | Title + Principle + Description | "Explore →"

**Layout**
Desktop: three-column grid (number | content | cta)
Mobile: stacked single column

**States**

| Element | Default | Hover |
|---|---|---|
| Divider | `var(--color-border)` | darkened |
| Background | transparent | `rgba(255,255,255,.02)` |
| Arrow | position 0 | translateX(6px) |
| Title weight | 500 | 600 |

**Accessibility**
- Entire row is clickable
- `<article>` element
- Minimum touch target 44px height
- Focus state on the link, not the row

**Rules**
- No background color on default state
- No card shadow ever
- No icons
- Divider is always present above each row

---

## 20. Service Detail Block

**Purpose**
Displays a single service in detail. Used on individual service pages.

**File:** `src/components/sections/ServiceDetailBlock.tsx`

```typescript
interface ServiceDetailBlockProps {
  heading: string;
  description: string;
  deliverables: string[];   // Maximum 8 items
  cta?: {
    label: string;
    href: string;
  };
  className?: string;
}
```

**Anatomy**
Heading → Description → Deliverables list (max 8) → Optional CTA

**Rules**
- Maximum 8 deliverable bullets
- Never used on the homepage
- One CTA maximum

---

## 21. Service Grid

**Purpose**
Displays an overview of all services.

**File:** `src/components/sections/ServiceGrid.tsx`

```typescript
interface ServiceGridProps {
  services: {
    title: string;
    description: string;
    href: string;
  }[];
}
```

**Layout**
Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column
Column gap: 32px

---

## 22. Featured Project

**Purpose**
Highlights the primary case study. Occupies visual priority.
Supporting projects must never compete with this component.

**File:** `src/components/work/FeaturedProject.tsx`

```typescript
interface FeaturedProjectProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  tags: string[];           // Maximum 5
  metrics: Metric[];        // Maximum 3
  href: string;
  className?: string;
}

interface Metric {
  value: string;
  label: string;
}
```

**Anatomy**
`<article>`
Large image (≈60% width) | Project name | Description | Tags | Metrics | "View Project →"

**Rules**
- `<article>` element
- Maximum 3 metrics
- Maximum 5 tags
- Image must have descriptive alt text
- Description maximum 3 lines

---

## 23. Project Card

**Purpose**
Preview for supporting projects. Never competes with Featured Project.

**File:** `src/components/work/ProjectCard.tsx`

```typescript
interface ProjectCardProps {
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  title: string;
  description: string;
  tags: string[];           // Maximum 5
  href: string;
  className?: string;
}
```

**Anatomy**
Image (16:9) | Title | Description (max 3 lines) | Tags | "View Project →"

**States**

| Element | Default | Hover |
|---|---|---|
| Image | scale(1) | scale(1.02) |
| Title | translateY(0) | translateY(-2px) |
| Tags | opacity 0.8 | opacity 1 |

**Transition:** 250ms standard easing

**Rules**
- 16:9 image ratio enforced
- Description maximum 3 lines
- Never used as the featured project

---

## 24. Project Tags

**Purpose**
Identifies the services used on a project.

**File:** `src/components/work/ProjectTags.tsx`

```typescript
interface ProjectTagsProps {
  tags: string[];           // Maximum 5
  className?: string;
}
```

Renders a list of Tag components (Component #15).

**Rules**
Maximum 5 tags per project.

---

## 25. Metric Badge

**Purpose**
Displays a project result with context.
Metrics must always support a story — never exist alone.

**File:** `src/components/work/MetricBadge.tsx`

```typescript
interface MetricBadgeProps {
  value: string;            // e.g. "+214%"
  label: string;            // e.g. "Organic Traffic"
  className?: string;
}
```

**Anatomy**
Large value (Inter Bold) above small muted label

**Rules**
- Maximum 3 metrics per project
- Label is always required — never show value alone
- Never use animated counters

---

## 26. Testimonial Card

**Purpose**
Displays a client testimonial. Supports the featured testimonial
in a grid of three.

**File:** `src/components/testimonials/TestimonialCard.tsx`

```typescript
interface TestimonialCardProps {
  quote: string;            // Maximum 5 lines
  client: string;
  business: string;
  service?: string;
  className?: string;
}
```

**Anatomy**
`<blockquote>`
Quote | Client name | Business | Service (optional)

**Rules**
- No decorative quotation mark graphics
- Quote maximum 5 lines
- `<blockquote>` element always
- Service is optional

---

## 27. Featured Testimonial

**Purpose**
Larger editorial testimonial. One per page maximum.

**File:** `src/components/testimonials/FeaturedTestimonial.tsx`

```typescript
interface FeaturedTestimonialProps {
  quote: string;
  client: string;
  business: string;
  service?: string;
  portrait?: {
    src: string;
    alt: string;
  };
  className?: string;
}
```

**Rules**
- One per page maximum
- Portrait is optional
- No decorative quotation marks
- `<blockquote>` element always

---

## 28. Logo Strip

**Purpose**
Provides social proof through client or partner logos.

**File:** `src/components/ui/LogoStrip.tsx`

```typescript
interface Logo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface LogoStripProps {
  logos: Logo[];            // Maximum 8
  className?: string;
}
```

**Styles**
- Single row
- Equal height logos
- Muted (80% opacity)
- Hover restores full opacity (100%)
- Never colorful

**Rules**
Maximum 8 logos. Never add animation or scroll behavior.

---

## 29. Statistics Row

**Purpose**
Displays key metrics in a horizontal row.

**File:** `src/components/ui/StatisticsRow.tsx`

```typescript
interface Statistic {
  value: string;
  label: string;
}

interface StatisticsRowProps {
  statistics: Statistic[];  // Maximum 4
  className?: string;
}
```

**Layout**
Desktop: 4 columns | Mobile: 2 columns

**Rules**
- Maximum 4 statistics
- Label always required
- Never use animated counters
- Metrics must support surrounding content

---

## 30. CTA Block

**Purpose**
The final invitation on a page. One primary action only.

**File:** `src/components/sections/CtaBlock.tsx`

```typescript
interface CtaBlockProps {
  eyebrow?: string;
  heading: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}
```

**Anatomy**
Atmospheric background | Eyebrow | Heading | Body | Primary Button

**Styles**
- Surface 2 (Juniper background)
- Atmospheric haze layer active
- Centered content
- Generous padding (120px desktop)

**Rules**
- One button only
- No secondary CTA
- Atmospheric background always present
- Never use more than one CTA Block per page

---

## 31. Inline CTA

**Purpose**
Appears inside long-form content to prompt a related action.

**File:** `src/components/ui/InlineCta.tsx`

```typescript
interface InlineCtaProps {
  sentence: string;
  label: string;
  href: string;
  className?: string;
}
```

**Anatomy**
Sentence text → Text link →

**Rules**
Never a button. Text link only. Never in hero sections.

---

## 32. Hero CTA Group

**Purpose**
The primary action group in the hero section.
Primary button + secondary link. Horizontal on desktop, vertical on mobile.

**File:** `src/components/hero/HeroCTA.tsx`

```typescript
interface HeroCtaGroupProps {
  primary: {
    label: string;
    href: string;
  };
  secondary: {
    label: string;
    href: string;
  };
  className?: string;
}
```

**Anatomy**
Primary Button (Component #6) | Secondary Button (Component #7)

**Layout**
Desktop: horizontal, 16px gap
Mobile: vertical, stacked, full width

**Rules**
- Maximum two buttons
- Primary always left/top
- Secondary always right/bottom
- No ghost buttons in the hero CTA group

---

## 33. Contact Card

**Purpose**
Displays contact information in a structured format.

**File:** `src/components/ui/ContactCard.tsx`

```typescript
interface ContactCardProps {
  heading: string;
  email?: string;
  phone?: string;
  hours?: string;
  location?: string;
  className?: string;
}
```

**Anatomy**
Heading | Email | Phone | Hours | Location

**Rules**
All fields optional except heading.
Never include icon illustrations. Small indicators only.

---

## 34. FAQ Item / Accordion

**Purpose**
Expandable question and answer. Used on service pages and contact page.

**File:** `src/components/ui/Accordion.tsx`

```typescript
interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;     // Index of default open item (0-based)
  className?: string;
}
```

**Animation**
Height and opacity expand over 250ms standard easing. No bounce.

**Behavior**
- One item expanded by default (index 0 unless overridden)
- Only one item open at a time
- Keyboard navigable: Enter and Space toggle
- Arrow keys navigate between items

**Accessibility**
- `<button>` for trigger
- `aria-expanded` on trigger
- `aria-controls` pointing to panel
- Panel has `role="region"` and `aria-labelledby`

**Rules**
No bounce animation. Height and opacity only.

---

## 35. Form

**Purpose**
Collects project inquiries from prospective clients.

**File:** `src/components/forms/ContactForm.tsx`

```typescript
interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

interface FormValues {
  name: string;
  business: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}
```

**Fields**
Name | Business | Email | Phone (optional) | Service (optional) | Message

**Rules**
- Maximum 6 fields
- Labels always visible — never placeholder-only
- Field gap: 24px
- Single column layout
- Submit via primary button ("Send Message" or "Start a Project")

---

## 36. Input

**Purpose**
Single-line text input.

**File:** `src/components/forms/Input.tsx`

```typescript
interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
```

**Styles**
- Height: 48px
- Radius: `var(--radius-sm)` (6px)
- Border: 1px solid `var(--color-border)`
- Padding: 12px × 16px
- Font: Inter 16px

**States**

| State | Border | Shadow |
|---|---|---|
| Default | `var(--color-border)` | none |
| Focus | `var(--color-deep-teal)` | subtle teal glow |
| Error | `var(--color-mesa-clay)` | none |
| Disabled | `var(--color-agave)` | none |

**Error**
Error message appears below input. Fade in only — no shake.
Color: Mesa Clay. Font: 14px.

**Rules**
Label is always visible above input. Never placeholder-only.

---

## 37. Textarea

**Purpose**
Multi-line text input. Used for the message field.

**File:** `src/components/forms/Textarea.tsx`

```typescript
interface TextareaProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}
```

**Styles**
- Minimum height: 160px
- Resizable: vertically only
- Same border and focus styles as Input (Component #36)

**Rules**
Label always visible. Resizable vertically, never horizontally.

---

## 38. Select

**Purpose**
Dropdown selection for service type.

**File:** `src/components/forms/Select.tsx`

```typescript
interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps {
  id: string;
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}
```

**Styles**
Native `<select>` appearance with a simple custom arrow.
Same height and border styles as Input (Component #36).

**Rules**
Native select element. No custom dropdown libraries.

---

## 39. Checkbox

**Purpose**
Single boolean option. Used for consent or preferences.

**File:** `src/components/forms/Checkbox.tsx`

```typescript
interface CheckboxProps {
  id: string;
  label: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}
```

**Styles**
- Square shape
- Simple checkmark on checked state
- Deep Teal fill when checked
- Touch target: minimum 44×44px

---

## 40. Success Message

**Purpose**
Confirms form submission. Replaces the form after successful send.

**File:** `src/components/forms/SuccessMessage.tsx`

```typescript
interface SuccessMessageProps {
  heading?: string;
  body?: string;
  nextSteps?: string;
  className?: string;
}
```

**Default Copy**
Heading: "Message received."
Body: "We'll review your inquiry and be in touch within one business day."
Next steps: "In the meantime, explore our work."

**Rules**
Warm and professional tone. Never corporate. Never over-enthusiastic.
Replaces form — never displayed alongside it.

---

## 41. Footer

**Purpose**
Closes every page. Five-column desktop layout.

**File:** `src/components/footer/SiteFooter.tsx`

```typescript
interface SiteFooterProps {
  className?: string;
}
```

**Anatomy**
Column 1: Logo + Brand statement
Column 2: Navigation (Component #5)
Column 3: Services links
Column 4: Contact information
Column 5: Legal (copyright, privacy policy)

**Layout**
Desktop: 5 columns | Mobile: single column, stacked

**Surface**
Surface 2 — Juniper background, Dust text

**Rules**
- Never feels like another landing page
- No CTA button in the footer
- Generous spacing
- Social links (Component #42) appear below brand statement

---

## 42. Social Links

**Purpose**
Links to Desert Fox Digital social profiles.

**File:** `src/components/footer/SocialLinks.tsx`

```typescript
interface SocialLink {
  platform: string;
  href: string;
  label: string;           // Screen reader label
}

interface SocialLinksProps {
  links: SocialLink[];
  className?: string;
}
```

**Styles**
- Outlined icon style
- 80% opacity default
- 100% opacity on hover
- Never colorful — always monochrome

**Rules**
Never use filled or colorful brand icons.
Aria-label required on every link.

---

## 43. Atmospheric Background

**Purpose**
The brand atmosphere layer. Used in hero, final CTA, and selected
feature sections. Never applied to more than two sections per page.

**File:** `src/components/hero/AtmosphericBg.tsx`

```typescript
interface AtmosphericBgProps {
  variant?: 'hero' | 'cta';
  className?: string;
  children?: React.ReactNode;
}
```

**Layer Order (bottom to top)**
1. Gradient — static, Juniper to transparent
2. Grain — static, 2–4% opacity
3. Haze — animated, below 10% opacity
4. Content — always above atmosphere

**Haze Animation**
```css
transform: translate3d(0,0,0) → translate3d(1.5%,-1.5%,0)
duration: 15s
easing: linear
direction: infinite alternate
```

**Rules**
- Content is always readable above the atmosphere
- Haze must never obscure typography
- Never increase opacity beyond 10%
- Never increase movement beyond 2%
- Disabled when `prefers-reduced-motion` is active

---

## 44. Empty State

**Purpose**
Displayed when a dynamic section has no content to show.

**File:** `src/components/ui/EmptyState.tsx`

```typescript
interface EmptyStateProps {
  heading: string;
  body: string;
  action?: {
    label: string;
    href: string;
  };
  className?: string;
}
```

**Anatomy**
Heading → Body explanation → Optional suggested action link

**Rules**
Friendly, helpful tone. Never apologetic or technical.
Action is optional — never forced.

---

## 45. Skeleton

**Purpose**
Placeholder shown while content is loading.
Used for dynamic content areas only.

**File:** `src/components/ui/Skeleton.tsx`

```typescript
interface SkeletonProps {
  variant?: 'text' | 'heading' | 'card' | 'image';
  lines?: number;           // For 'text' variant
  className?: string;
}
```

**Styles**
- Background: Agave at 20% opacity
- Subtle pulse animation (opacity only)
- Radius matches the content it replaces

**Rules**
Reserve spinners for button loading states only.
Skeleton replaces content blocks. Spinner replaces button labels.

---

## 46. Mobile Drawer

**Purpose**
Mobile navigation menu. Slides in from the right on hamburger trigger.

**File:** `src/components/navigation/MobileDrawer.tsx`

```typescript
interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}
```

**Anatomy**
Slide panel from right | Nav links | Close button | 30% backdrop

**Animation**
Slide from right over 250ms standard easing.
Backdrop fades in simultaneously.

**Behavior**
- Escape key closes drawer
- Clicking backdrop closes drawer
- Focus is trapped inside drawer while open
- Focus returns to hamburger trigger on close
- Body scroll locked while open

**Accessibility**
- `role="dialog"`
- `aria-modal="true"`
- `aria-label="Mobile navigation"`
- Focus trap active while open
- Escape closes immediately

**Rules**
- No fullscreen overlay
- Slides from right only
- 30% backdrop — never heavier
- Never use for anything other than navigation

---

## Adding New Components

If a new page or feature requires a component not listed here:

1. Confirm no existing component solves the problem
2. Confirm the component aligns with the design system
3. Add a new numbered entry to this document before writing code
4. Follow the same interface and documentation format
5. Reference only existing design tokens
6. Never introduce new visual language

Components grow from the system. They never define it.

---

**Document Status:** Production
**Version:** 1.0
**Component Count:** 46
**Applies To:** All Desert Fox Digital web properties
