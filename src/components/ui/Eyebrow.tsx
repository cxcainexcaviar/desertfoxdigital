import { cn } from '@/lib/cn';

export interface EyebrowProps {
  label: string;
  className?: string;
}

export function Eyebrow({ label, className }: EyebrowProps) {
  return <p className={cn('eyebrow', className)}>{label}</p>;
}
