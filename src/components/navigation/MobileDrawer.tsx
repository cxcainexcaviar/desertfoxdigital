'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { primaryCta } from '@/config/navigation';
import type { NavItem } from '@/types/navigation';
import { cn } from '@/lib/cn';

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export function MobileDrawer({ isOpen, onClose, navItems }: MobileDrawerProps) {
  const pathname = usePathname();
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<
          HTMLElement
        >('a[href], button:not([disabled])');
        if (focusable.length === 0) return;
        const first = focusable[0]!;
        const last = focusable[focusable.length - 1]!;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={cn('mobile-drawer', isOpen && 'is-open')}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        className="mobile-drawer__backdrop"
        aria-label="Close navigation"
        tabIndex={isOpen ? 0 : -1}
        onClick={onClose}
      />
      <div
        ref={panelRef}
        className="mobile-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="mobile-drawer__header">
          <button
            ref={closeRef}
            type="button"
            className="mobile-drawer__close"
            aria-label="Close menu"
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>
        <ul className="mobile-drawer__links">
          {navItems.map((item) => {
            const current =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'mobile-drawer__link',
                    current && 'is-current'
                  )}
                  aria-current={current ? 'page' : undefined}
                  onClick={onClose}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mobile-drawer__cta">
          <Button
            variant="primary"
            label={primaryCta.label}
            href={primaryCta.href}
            className="mobile-drawer__cta-btn"
          />
        </div>
      </div>
    </div>
  );
}
