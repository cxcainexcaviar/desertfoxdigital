import type { ApproachItem } from '@/types/approach';

export const hero = {
  eyebrow: 'Digital strategy for local businesses',
  heading: 'Mark Your Territory.',
  lead: 'Desert Fox Digital helps local businesses claim ground and hold it through thoughtful strategy, search visibility, and marketing built to last.',
  primaryCta: { label: 'Claim Your Ground', href: '/contact' },
  secondaryCta: { label: 'Explore Our Approach', href: '#approach' },
} as const;

export const approach: ApproachItem[] = [
  {
    number: '01',
    title: 'Foundation',
    principle: 'Clarity before momentum',
    description:
      'We establish the strategic groundwork so every subsequent effort has purpose and direction.',
    href: '/services/foundation',
  },
  {
    number: '02',
    title: 'Digital',
    principle: 'Experiences that last',
    description:
      'Websites and digital properties designed for clarity, performance, and long-term value.',
    href: '/services/digital',
  },
  {
    number: '03',
    title: 'Visibility',
    principle: 'Found when it matters',
    description:
      'Search and local visibility built on substance — not shortcuts or temporary tactics.',
    href: '/services/visibility',
  },
  {
    number: '04',
    title: 'Presence',
    principle: 'Consistent and considered',
    description:
      'Brand presence across channels that feels intentional rather than fragmented.',
    href: '/services/presence',
  },
  {
    number: '05',
    title: 'Scale',
    principle: 'Growth with purpose',
    description:
      'Systems and strategy that support sustainable growth without sacrificing quality.',
    href: '/services/scale',
  },
];

export const ctaBlock = {
  heading: 'Grow with purpose.',
  body: "If you're ready for marketing built on clarity instead of noise, let's start the conversation.",
  cta: { label: 'Start a Project', href: '/contact' },
} as const;
