import Link from 'next/link';
import type { FooterNavGroup } from '@/types/navigation';
import { cn } from '@/lib/cn';

export interface FooterNavProps {
  groups: FooterNavGroup[];
  className?: string;
}

export function FooterNav({ groups, className }: FooterNavProps) {
  return (
    <div className={cn('footer-nav', className)}>
      {groups.map((group) => (
        <div key={group.label} className="footer-nav__group">
          <p className="footer-nav__label">{group.label}</p>
          <ul className="footer-nav__list">
            {group.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="footer-nav__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
