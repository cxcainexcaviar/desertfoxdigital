import Link from 'next/link';
import { cn } from '@/lib/cn';

export interface ApproachRowProps {
  number: string;
  title: string;
  principle: string;
  description: string;
  href: string;
  className?: string;
}

export function ApproachRow({
  number,
  title,
  principle,
  description,
  href,
  className,
}: ApproachRowProps) {
  return (
    <article className={cn('approach-row', className)}>
      <Link href={href} className="approach-row__link">
        <span className="approach-row__number">{number}</span>
        <div className="approach-row__content">
          <h3 className="approach-row__title">{title}</h3>
          <p className="approach-row__principle">{principle}</p>
          <p className="approach-row__description">{description}</p>
        </div>
        <span className="approach-row__cta">
          Explore
          <span className="approach-row__arrow" aria-hidden="true">
            →
          </span>
        </span>
      </Link>
    </article>
  );
}
