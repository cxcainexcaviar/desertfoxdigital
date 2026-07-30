'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { navItems, primaryCta } from '@/config/navigation';
import { useNavScrollState } from '@/hooks/useNavScrollState';
import { cn } from '@/lib/cn';

export interface SiteNavProps {
  transparent?: boolean;
}

export function SiteNav({ transparent = true }: SiteNavProps) {
  const scrolled = useNavScrollState(40);
  const pathname = usePathname();
  const isFilled = !transparent || scrolled;

  return (
    <header
      className={cn('site-nav', isFilled && 'site-nav--scrolled')}
    >
      <nav
        className="site-nav__inner container"
        aria-label="Primary navigation"
      >
        <Logo className="site-nav__logo" />

        <ul className="site-nav__links">
          {navItems.map((item) => {
            const current =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn('site-nav__link', current && 'is-current')}
                  aria-current={current ? 'page' : undefined}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="site-nav__cta">
          <Button
            variant="primary"
            label={primaryCta.label}
            href={primaryCta.href}
          />
        </div>
      </nav>
    </header>
  );
}
