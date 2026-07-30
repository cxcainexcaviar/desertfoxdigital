import Link from 'next/link';
import { cn } from '@/lib/cn';

export interface LogoProps {
  href?: string;
  className?: string;
}

export function Logo({ href = '/', className }: LogoProps) {
  return (
    <Link href={href} className={cn('logo', className)} aria-label="Desert Fox Digital home">
      Desert Fox Digital
    </Link>
  );
}
