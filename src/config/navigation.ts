import type { NavItem } from '@/types/navigation';

export const navItems: NavItem[] = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const primaryCta = {
  label: 'Start a Project',
  href: '/contact',
} as const;
