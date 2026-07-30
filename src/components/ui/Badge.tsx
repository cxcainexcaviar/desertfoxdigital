import { cn } from '@/lib/cn';

export interface BadgeProps {
  label: string;
  variant?: 'default' | 'metric' | 'award';
  className?: string;
}

export function Badge({
  label,
  variant = 'default',
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'badge',
        variant !== 'default' && `badge--${variant}`,
        className
      )}
    >
      {label}
    </span>
  );
}
