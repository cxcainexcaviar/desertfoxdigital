import { cn } from '@/lib/cn';

export interface MetricBadgeProps {
  value: string;
  label: string;
  className?: string;
}

export function MetricBadge({ value, label, className }: MetricBadgeProps) {
  return (
    <div className={cn('metric-badge', className)}>
      <p className="metric-badge__value">{value}</p>
      <p className="metric-badge__label">{label}</p>
    </div>
  );
}
