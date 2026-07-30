import { cn } from '@/lib/cn';

export interface TextareaProps {
  id: string;
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
  rows?: number;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
}

export function Textarea({
  id,
  label,
  name,
  placeholder,
  required,
  disabled,
  error,
  rows = 5,
  value,
  onChange,
  className,
}: TextareaProps) {
  return (
    <div className={cn('form-field', className)}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        rows={rows}
        value={value}
        onChange={onChange}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-error` : undefined}
        className={cn('form-field__control form-field__control--textarea', error && 'is-error')}
      />
      {error ? (
        <p id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
