import { ApproachRow } from '@/components/approach/ApproachRow';
import type { ApproachItem } from '@/types/approach';
import { cn } from '@/lib/cn';

export interface ApproachListProps {
  items: ApproachItem[];
  className?: string;
}

export function ApproachList({ items, className }: ApproachListProps) {
  return (
    <div className={cn('approach-list', className)}>
      {items.map((item) => (
        <ApproachRow
          key={item.number}
          number={item.number}
          title={item.title}
          principle={item.principle}
          description={item.description}
          href={item.href}
        />
      ))}
    </div>
  );
}
