import { cn } from '@/lib/cn';

export interface InputProps {
  id: string;
  label: string;
  name: string;
  type?: 'text' | 'email' | 'tel';
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export function Input({
  id,
  label,
  name,
  type = 'text',
  placeholder,
  required,
  disabled,
  error,
  value,
  onChange,
  className,
}: InputProps) {
  return (
    <div className={cn('form-field', className)}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn('form-field__control', error && 'is-error')}
      />
      {error ? (
        <p id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
