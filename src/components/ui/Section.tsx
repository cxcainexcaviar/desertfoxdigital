import { cn } from '@/lib/cn';

export interface SectionProps {
  surface?: 0 | 1 | 2 | 3;
  as?: React.ElementType;
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  surface = 0,
  as: Tag = 'section',
  id,
  className,
  children,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn('section', className)}
      data-surface={surface}
    >
      {children}
    </Tag>
  );
}
