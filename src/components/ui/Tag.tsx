import { cn } from '@/lib/cn';

export interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return <span className={cn('tag', className)}>{label}</span>;
}
