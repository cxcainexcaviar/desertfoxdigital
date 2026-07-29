import { cn } from '@/lib/cn';

export interface DividerProps {
  variant?: 'full' | 'inset' | 'short';
  className?: string;
}

const variantClass: Record<NonNullable<DividerProps['variant']>, string> = {
  full: 'divider',
  inset: 'divider divider--inset',
  short: 'divider divider--short',
};

export function Divider({
  variant = 'full',
  className,
}: DividerProps) {
  return (
    <hr
      className={cn(variantClass[variant], className)}
      role="separator"
    />
  );
}
