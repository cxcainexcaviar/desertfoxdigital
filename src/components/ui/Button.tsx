import Link from 'next/link';
import { cn } from '@/lib/cn';

export interface ButtonProps {
  variant: 'primary' | 'secondary' | 'ghost' | 'icon-link';
  label: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const variantClass: Record<ButtonProps['variant'], string> = {
  primary: 'btn btn--primary',
  secondary: 'btn btn--secondary',
  ghost: 'btn btn--ghost',
  'icon-link': 'btn btn--icon-link',
};

export function Button({
  variant,
  label,
  href,
  onClick,
  disabled = false,
  loading = false,
  type = 'button',
  className,
}: ButtonProps) {
  const classes = cn(variantClass[variant], className);
  const showArrow = variant === 'secondary' || variant === 'icon-link';
  const content = loading ? (
    <span className="btn__spinner" aria-hidden="true" />
  ) : (
    <>
      <span>{label}</span>
      {showArrow ? (
        <span className="btn__arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classes} aria-busy={loading || undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      aria-busy={loading || undefined}
    >
      {content}
    </button>
  );
}
