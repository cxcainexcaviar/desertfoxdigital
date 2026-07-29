import { cn } from '@/lib/cn';

export interface ContainerProps {
  variant?: 'default' | 'reading' | 'wide' | 'full';
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

const variantClass: Record<NonNullable<ContainerProps['variant']>, string> = {
  default: 'container',
  reading: 'container container--reading',
  wide: 'container container--wide',
  full: 'container container--full',
};

export function Container({
  variant = 'default',
  as: Tag = 'div',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn(variantClass[variant], className)}>{children}</Tag>
  );
}
