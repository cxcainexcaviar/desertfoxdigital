# UI Patterns

**Desert Fox Digital**
Version 1.0 | Production

This document defines how components assemble into complete page sections
and full page layouts. Patterns are the architecture of the site.

The Design System defines the rules.
Components define the building blocks.
Patterns define how those blocks are arranged.

Every page on the Desert Fox Digital website is built from these patterns.
No new page layout should be created without a corresponding pattern entry.

---

## How to Use This Document

1. Identify the section or page being built
2. Find the matching pattern
3. Assemble using only the listed components
4. Follow the exact component order
5. Respect the responsive behavior defined for each pattern
6. Never add components not listed in the pattern

---

## Pattern Rules

**One dominant focal point per section.**
Every section has one thing the eye goes to first. Typography, photography,
a large quote, or a project image. Never two competing focal points.

**One primary CTA per section.**
If a section needs an action, it gets one button. Never two primary buttons
in the same visual section.

**Do not nest major patterns.**
Patterns compose components. They do not compose other patterns.

**End every pattern with whitespace.**
The section spacing (120px desktop / 96px tablet / 72px mobile) is the
breathing room that separates patterns. Never collapse it.

**Educate before asking for action.**
Every page should deliver value before presenting a CTA. The sequence is
always: inform → build trust → invite action.

---

## Content Limits

These limits apply across all patterns. Never exceed them.

| Element | Limit |
|---|---|
| Hero headline | 12 words maximum |
| Lead paragraph | 3 lines maximum |
| Project description | 3 lines maximum |
| Project tags | 5 maximum |
| Metrics per project | 3 maximum |
| Testimonial quote | 5 lines maximum |
| Approach rows | 5 (fixed) |
| Deliverable bullets | 8 maximum |
| Logo strip logos | 8 maximum |
| Statistics | 4 maximum |
| Button label | 3 words maximum |

---

## Pattern Index

| # | Pattern | Used On |
|---|---|---|
| 1 | Page Shell | Every page |
| 2 | Section | Every page |
| 3 | Hero | Homepage, interior page heroes |
| 4 | Approach | Homepage |
| 5 | Featured Work | Homepage, Work page |
| 6 | Why Desert Fox Digital | Homepage |
| 7 | Testimonials | Homepage, About |
| 8 | CTA Block | Every page (final section) |
| 9 | Footer | Every page |
| 10 | About Page | About |
| 11 | Service Overview Page | Services |
| 12 | Service Detail Page | Individual service pages |
| 13 | Work Index Page | Work |
| 14 | Case Study Page | Individual case studies |
| 15 | Contact Page | Contact |
| 16 | Journal Index Page | Journal |
| 17 | Journal Post Page | Individual posts |
| 18 | Content Density | Every page |
| 19 | Surface Alternation | Every page |

---

## 1. Page Shell Pattern

**Purpose**
The wrapper every page lives inside. Consistent across the entire site.

**Components**
- Primary Navigation (Component #4)
- Page content (patterns below)
- CTA Block (Component #30) — second to last section on every page
- Footer (Component #41)

**Structure**
```
<SiteNav />
  ↓
[Page-specific patterns]
  ↓
<CtaBlock />
  ↓
<SiteFooter />
```

**Rules**
- Navigation is always first
- CTA Block is always second to last
- Footer is always last
- Never skip directly from hero to footer
- Every page educates before asking for action

**Responsive**
Navigation collapses to hamburger at tablet breakpoint (768px).
Footer collapses to single column on mobile.

---

## 2. Section Pattern

**Purpose**
The internal structure every major section follows.
Applied inside every pattern below.

**Component Order**
```
<Section surface={0|1|2}>
  <Container>
    <SectionHeader>        ← Eyebrow + Heading + Lead
    [Primary content]      ← Pattern-specific
    [Supporting content]   ← Optional
    [CTA]                  ← Optional, one maximum
  </Container>
</Section>
```

**Vertical Order (never changes)**
1. Eyebrow
2. Heading
3. Supporting copy
4. Primary content
5. Optional supporting content
6. Optional CTA
7. Whitespace

**Rules**
- Never invent a new section order
- Eyebrow always precedes heading
- CTA always follows content, never precedes it
- Whitespace closes every section

---

## 3. Hero Pattern

**Purpose**
Captures attention immediately. Communicates one clear idea within
five seconds. Sets the tone for the entire page.

**Used On:** Homepage, interior page heroes

**Components**
- Atmospheric Background (Component #43)
- Eyebrow (Component #10)
- Section Heading (Component #11, Display XL)
- Lead Paragraph (Component #12)
- Hero CTA Group (Component #32)

**Homepage Hero Structure**
```
<Section surface={2}>
  <AtmosphericBg variant="hero">
    <Container>
      <Eyebrow label="DIGITAL STRATEGY FOR LOCAL BUSINESSES" />
      <Heading level={1} display displaySize="xl">
        Mark Your Territory.
      </Heading>
      <Lead>
        Desert Fox Digital helps local businesses claim ground and hold
        it through thoughtful strategy, search visibility, and marketing
        built to last.
      </Lead>
      <HeroCtaGroup
        primary={{ label: "Claim Your Ground", href: "/contact" }}
        secondary={{ label: "Explore Our Approach", href: "#approach" }}
      />
    </Container>
  </AtmosphericBg>
</Section>
```

**Height**
- Minimum: 90vh
- Desktop: auto
- Mobile: natural height — never force 100vh

**Entrance Animation Sequence**
```
Navigation    → immediate
Headline      → fade + translateY(16px), 500ms
Paragraph     → fade + translateY(16px), 500ms, delay 100ms
CTA group     → fade + translateY(16px), 500ms, delay 200ms
Background    → opacity 0 → 1, 1200ms
```

**Rules**
- One idea. One headline. One supporting paragraph. One primary action.
- Never add: statistics, feature lists, testimonials, partner logos
- No photography in the hero — atmospheric background only
- Maximum two buttons (primary + secondary)
- Centered content alignment on homepage hero

**Interior Page Hero**
Simpler. No atmospheric background. Eyebrow + H1 + Lead only.
Left-aligned. Surface 0 (Dust).

**Responsive**
- Typography scales with `clamp()`
- Buttons stack vertically on mobile, full width
- Atmospheric background reduces opacity on mobile

---

## 4. Approach Pattern

**Purpose**
Introduces Desert Fox Digital's philosophy. The signature section of
the site. Editorial rows — no cards, no icons, no background colors.

**Used On:** Homepage

**Components**
- Section Header (Component #18)
- Divider (Component #3)
- Approach Row × 5 (Component #19)

**Structure**
```
<Section surface={0}>
  <Container>
    <SectionHeader
      eyebrow="OUR APPROACH"
      heading="Marketing works better when every piece has a purpose."
      lead="Five disciplines. One connected strategy. Built to grow with your business."
    />
    <Divider variant="full" />
    <ApproachRow number="01" title="Foundation" href="/services/foundation" ... />
    <Divider variant="full" />
    <ApproachRow number="02" title="Digital"    href="/services/digital" ... />
    <Divider variant="full" />
    <ApproachRow number="03" title="Visibility" href="/services/visibility" ... />
    <Divider variant="full" />
    <ApproachRow number="04" title="Presence"   href="/services/presence" ... />
    <Divider variant="full" />
    <ApproachRow number="05" title="Scale"      href="/services/scale" ... />
    <Divider variant="full" />
  </Container>
</Section>
```

**Rules**
- Always exactly 5 rows
- Divider above and below every row
- No cards, no icons, no background colors
- Rows link to individual service pages
- Whitespace is the only separator between rows

**Responsive**
Desktop: three-column layout per row (number | content | cta)
Mobile: single-column, stacked per row

---

## 5. Featured Work Pattern

**Purpose**
Shows proof before asking for trust. One featured project followed
by three supporting cards.

**Used On:** Homepage, Work page

**Components**
- Section Header (Component #18)
- Featured Project (Component #22)
- Project Card × 3 (Component #23)
- Secondary Button (Component #7) — "View All Work"

**Structure**
```
<Section surface={0}>
  <Container>
    <SectionHeader
      eyebrow="SELECTED WORK"
      heading="Work that earns attention for the right reasons."
    />
    <FeaturedProject ... />
    <ProjectGrid>
      <ProjectCard ... />
      <ProjectCard ... />
      <ProjectCard ... />
    </ProjectGrid>
    <Button variant="secondary" label="View All Work" href="/work" />
  </Container>
</Section>
```

**Project Grid Layout**
Desktop: 3 columns, 32px gap
Tablet: 2 columns (third card drops below)
Mobile: 1 column, stacked

**Rules**
- Featured project always appears before the grid
- Supporting cards must never visually compete with the featured project
- Maximum 3 metrics per project
- Maximum 5 tags per project
- "View All Work" link is secondary button — never primary

**Responsive**
Featured project stacks image above content on mobile.
Grid becomes single column on mobile.

---

## 6. Why Desert Fox Digital Pattern

**Purpose**
Differentiates through philosophy, not services. Three editorial columns
followed by a brand story.

**Used On:** Homepage

**Components**
- Section Header (Component #18)
- Three editorial columns (body copy, no component wrapper needed)
- Body Paragraph (Component #13) — brand story

**Structure**
```
<Section surface={0}>
  <Container>
    <SectionHeader
      eyebrow="WHY DESERT FOX DIGITAL"
      heading="Boutique by design."
    />
    <Grid columns={3}>
      <Column>
        <Heading level={4}>Boutique Scale</Heading>
        <Body>Fewer clients by design. Every business receives
        direct strategic attention.</Body>
      </Column>
      <Column>
        <Heading level={4}>Strategy First</Heading>
        <Body>Every tactic serves a larger plan. We solve
        problems — not chase trends.</Body>
      </Column>
      <Column>
        <Heading level={4}>Honest Reporting</Heading>
        <Body>Clear communication. Real metrics.
        No inflated promises.</Body>
      </Column>
    </Grid>
    <Body>The desert fox survives through observation, adaptability,
    and efficiency. Our work follows the same philosophy.</Body>
  </Container>
</Section>
```

**Rules**
- Three columns exactly
- Copy carries the emotional weight
- No icons
- No cards
- Brand story is plain body copy — no special treatment

**Responsive**
Three columns stack to single column on mobile.

---

## 7. Testimonials Pattern

**Purpose**
Replaces claims with evidence. Quality over quantity.

**Used On:** Homepage, About page

**Components**
- Section Header (Component #18)
- Featured Testimonial (Component #27)
- Testimonial Card × 3 (Component #26)

**Structure**
```
<Section surface={0}>
  <Container>
    <SectionHeader
      eyebrow="CLIENT STORIES"
      heading="Built on trust. Measured by results."
    />
    <FeaturedTestimonial ... />
    <TestimonialGrid>
      <TestimonialCard ... />
      <TestimonialCard ... />
      <TestimonialCard ... />
    </TestimonialGrid>
  </Container>
</Section>
```

**Testimonial Grid Layout**
Desktop: 3 columns, 32px gap
Tablet: 2 columns
Mobile: 1 column

**Rules**
- Featured testimonial always appears before the grid
- Maximum one featured testimonial per page
- Never more than 4 testimonials total per section (1 featured + 3 cards)
- No decorative quotation marks
- Quote maximum 5 lines

**Responsive**
Featured testimonial stacks on mobile.
Grid becomes single column on mobile.

---

## 8. CTA Block Pattern

**Purpose**
The final invitation on every page. One clear action.

**Used On:** Every page, always second to last section

**Components**
- CTA Block (Component #30)
- Atmospheric Background (Component #43)
- Primary Button (Component #6)

**Homepage Copy**
```
Eyebrow: (none)
Heading: "Grow with purpose."
Body:    "If you're ready for marketing built on clarity instead of
          noise, let's start the conversation."
CTA:     "Start a Project" → /contact
```

**Structure**
```
<Section surface={2}>
  <AtmosphericBg variant="cta">
    <Container>
      <CtaBlock
        heading="Grow with purpose."
        body="If you're ready for marketing built on clarity instead
              of noise, let's start the conversation."
        cta={{ label: "Start a Project", href: "/contact" }}
      />
    </Container>
  </AtmosphericBg>
</Section>
```

**Rules**
- One button only — never add a secondary CTA
- Atmospheric background always active
- Centered content alignment
- Never the last section — Footer always follows
- Appears on every page without exception

**Responsive**
Button becomes full width on mobile.
Typography scales with `clamp()`.

---

## 9. Footer Pattern

**Purpose**
Closes the experience. Not another landing page.

**Used On:** Every page, always last

**Components**
- Footer (Component #41)
- Footer Navigation (Component #5)
- Social Links (Component #42)

**Column Structure**
```
Column 1: Logo + Brand statement + Social Links
Column 2: Navigation links
Column 3: Services links
Column 4: Contact information
Column 5: Legal (copyright, privacy policy)
```

**Rules**
- No CTA button in the footer
- No promotional copy
- Surface 2 (Juniper background)
- Generous padding

**Responsive**
5 columns collapse to single column, stacked, on mobile.

---

## 10. About Page Pattern

**Purpose**
Visitors leave understanding how Desert Fox Digital thinks — not
what it sells.

**Page Structure**
```
<PageShell>
  <Hero />               ← Interior hero variant
  <BrandStory />         ← Editorial content pattern
  <Values />             ← Three-column editorial
  <Approach />           ← Pattern #4
  <Testimonials />       ← Pattern #7
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Rules**
- Philosophy before services
- No pricing or service detail on the About page
- Approach section links to service pages

---

## 11. Service Overview Page Pattern

**Purpose**
Provides a high-level view of all five service disciplines.

**Page Structure**
```
<PageShell>
  <Hero />               ← Interior hero variant
  <ServiceGrid />        ← Pattern #21 — all 5 services
  <Approach />           ← Pattern #4 (abbreviated)
  <FeaturedWork />       ← Pattern #5
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

---

## 12. Service Detail Page Pattern

**Purpose**
Deep-dive into a single service discipline.
Every service page follows exactly the same rhythm.
Consistency builds familiarity.

**Page Structure**
```
<PageShell>
  <Hero />               ← Service-specific headline
  <Overview />           ← Service Detail Block (Component #20)
  <Benefits />           ← Three-column editorial
  <Process />            ← Numbered steps, editorial style
  <Deliverables />       ← Service Detail Block, deliverables only
  <FeaturedWork />       ← Filtered to this service
  <FAQ />                ← Accordion (Component #34)
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Rules**
- All five service pages use identical pattern
- Only content changes between pages
- Breadcrumb (Component #17) appears below navigation
- FAQ items specific to each service

---

## 13. Work Index Page Pattern

**Purpose**
Showcases all case studies.

**Page Structure**
```
<PageShell>
  <Hero />               ← Interior hero variant
  <FeaturedProject />    ← Single featured case study
  <ProjectGrid />        ← All remaining projects
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Project Grid**
Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column

**Rules**
- Featured project always appears first
- No filtering UI in v1
- No pagination in v1 — show all projects

---

## 14. Case Study Page Pattern

**Purpose**
Full detail on a single project.

**Page Structure**
```
<PageShell>
  <Hero />               ← Project name + category
  <Overview />           ← Challenge and objective
  <Approach />           ← How the work was done
  <Results />            ← Metrics and outcomes
  <Gallery />            ← Project imagery
  <Testimonial />        ← Single client quote (if available)
  <RelatedWork />        ← 2–3 related project cards
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Rules**
- Breadcrumb (Component #17) below navigation
- Results section requires context — never metrics alone
- Related work never exceeds 3 cards

---

## 15. Contact Page Pattern

**Purpose**
Reduces friction. One clear path to starting a conversation.

**Page Structure**
```
<PageShell>
  <Hero />               ← Interior hero variant, brief
  <ContactSection>
    <Container>
      <Grid columns={2}>
        <ContactForm />      ← Component #35
        <ContactCard />      ← Component #33
      </Grid>
    </Container>
  </ContactSection>
  <FAQ />                ← Common pre-contact questions
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Rules**
- Form on the left, contact information on the right (desktop)
- Stacks to single column on mobile, form first
- Maximum 6 form fields
- No unnecessary introductory copy before the form
- FAQ answers questions that reduce form hesitation

**Responsive**
Two-column layout collapses to single column on mobile.
Form appears above contact card on mobile.

---

## 16. Journal Index Page Pattern

**Purpose**
Entry point to all journal articles.

**Page Structure**
```
<PageShell>
  <Hero />               ← Interior hero variant
  <ArticleGrid />        ← Editorial card grid
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Article Grid**
Desktop: 3 columns | Tablet: 2 columns | Mobile: 1 column

**Rules**
- No sidebar
- No category filtering in v1
- Articles sorted newest first

---

## 17. Journal Post Page Pattern

**Purpose**
Long-form editorial reading experience.

**Page Structure**
```
<PageShell>
  <Hero />               ← Article title + eyebrow category
  <Article>
    <Container variant="reading">
      [Article content]
      <InlineCta />      ← Component #31 (optional, mid-article)
    </Container>
  </Article>
  <RelatedArticles />    ← 2–3 related posts
  <CtaBlock />           ← Pattern #8
  <SiteFooter />
</PageShell>
```

**Rules**
- Reading container (720px max) for article body
- Breadcrumb (Component #17) below navigation
- One inline CTA maximum, placed naturally in content
- No sidebar
- No comment section

---

## 18. Content Density Pattern

**Purpose**
Creates visual rhythm by alternating between information-heavy and
information-light sections. Prevents cognitive overload.

**Rule**
Never place two text-heavy sections consecutively.

**Correct Sequence**
```
High density  (Approach rows)
  ↓
Low density   (Brand story — short copy, whitespace)
  ↓
High density  (Featured work)
  ↓
Low density   (Single testimonial)
  ↓
High density  (Three testimonial cards)
  ↓
Low density   (CTA block)
```

**Homepage Application**
```
Hero          → Low (one idea)
Approach      → High (five rows of content)
Featured Work → High (project + three cards)
Why DFD       → Medium (three short columns)
Testimonials  → High (featured + three cards)
CTA Block     → Low (one heading, one button)
```

---

## 19. Surface Alternation Pattern

**Purpose**
Background alternation creates visual rhythm without adding decoration.

**Rule**
Alternate surface values between consecutive sections.
Never repeat Surface 2 (Juniper) more than twice consecutively.

**Homepage Surface Sequence**
```
Hero          → Surface 2 (Juniper)
Approach      → Surface 0 (Dust)
Featured Work → Surface 0 (Dust)
Why DFD       → Surface 0 (Dust)
Testimonials  → Surface 0 (Dust)
CTA Block     → Surface 2 (Juniper)
Footer        → Surface 2 (Juniper)
```

**Rules**
- Surface 1 (raised) is used for cards within sections, not entire sections
- Surface 3 (overlay) is used over imagery only
- Two consecutive Surface 0 sections are acceptable
- Two consecutive Surface 2 sections require a clear reason

---

## Pattern QA Checklist

Before any pattern implementation is considered complete:

**Structure**
- [ ] Components assembled in the correct order
- [ ] No components added that are not listed in the pattern
- [ ] Section Header appears before primary content
- [ ] CTA appears after content, never before

**Content**
- [ ] All content limits respected (headline words, tag count, metrics)
- [ ] No placeholder text or lorem ipsum
- [ ] Copy follows brand voice

**Visual**
- [ ] One dominant focal point per section
- [ ] One primary CTA per section
- [ ] Surface value correct for this section
- [ ] Whitespace preserved between sections

**Responsive**
- [ ] Tested at 375px, 768px, 1200px
- [ ] No horizontal scroll
- [ ] Typography scales correctly
- [ ] Buttons full width on mobile where specified

**Accessibility**
- [ ] Heading hierarchy correct within the pattern
- [ ] Interactive elements keyboard navigable
- [ ] Scroll reveal tested with reduced motion disabled

---

## Adding New Patterns

If a new page requires a layout not documented here:

1. Confirm no existing pattern solves the problem
2. Assemble only from existing components
3. Follow the Section Pattern (Pattern #2) internally
4. Add the new pattern to this document before writing code
5. Ensure it would feel at home beside any existing page

Patterns extend the system. They never override it.

---

**Document Status:** Production
**Version:** 1.0
**Pattern Count:** 19
**Applies To:** All Desert Fox Digital web properties