import Link from 'next/link';
import { Logo } from '@/components/ui/Logo';
import { FooterNav } from '@/components/footer/FooterNav';
import { siteConfig } from '@/config/site';
import type { FooterNavGroup } from '@/types/navigation';
import { cn } from '@/lib/cn';

const footerGroups: FooterNavGroup[] = [
  {
    label: 'Navigate',
    links: [
      { label: 'Work', href: '/work' },
      { label: 'Services', href: '/services' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    label: 'Services',
    links: [
      { label: 'Foundation', href: '/services/foundation' },
      { label: 'Digital', href: '/services/digital' },
      { label: 'Visibility', href: '/services/visibility' },
      { label: 'Presence', href: '/services/presence' },
      { label: 'Scale', href: '/services/scale' },
    ],
  },
];

export interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className={cn('site-footer', className)} data-surface="2">
      <div className="site-footer__inner container">
        <div className="site-footer__brand">
          <Logo className="site-footer__logo" />
          <p className="site-footer__statement">
            Boutique digital strategy for local businesses. Clarity over noise.
          </p>
        </div>

        <FooterNav groups={footerGroups} className="site-footer__nav" />

        <div className="site-footer__contact">
          <p className="footer-nav__label">Contact</p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="footer-nav__link"
          >
            {siteConfig.contactEmail}
          </a>
          <p className="site-footer__meta">{siteConfig.location}</p>
        </div>

        <div className="site-footer__legal">
          <p className="site-footer__meta">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <Link href="/privacy" className="footer-nav__link">
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
