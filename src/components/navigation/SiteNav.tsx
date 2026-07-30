'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/ui/Logo';
import { MobileDrawer } from '@/components/navigation/MobileDrawer';
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
  const [drawerOpen, setDrawerOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  const closeDrawer = () => {
    setDrawerOpen(false);
    menuBtnRef.current?.focus();
  };

  return (
    <>
      <header className={cn('site-nav', isFilled && 'site-nav--scrolled')}>
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

          <div className="site-nav__actions">
            <div className="site-nav__cta">
              <Button
                variant="primary"
                label={primaryCta.label}
                href={primaryCta.href}
              />
            </div>

            <button
              ref={menuBtnRef}
              type="button"
              className="site-nav__menu-btn"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              aria-controls="mobile-drawer"
              onClick={() => setDrawerOpen(true)}
            >
              <Menu size={24} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>

      <MobileDrawer
        isOpen={drawerOpen}
        onClose={closeDrawer}
        navItems={navItems}
      />
    </>
  );
}
