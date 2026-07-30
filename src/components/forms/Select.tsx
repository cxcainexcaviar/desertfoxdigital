import { cn } from '@/lib/cn';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  id: string;
  label: string;
  name: string;
  options: SelectOption[];
  required?: boolean;
  disabled?: boolean;
  error?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
}

export function Select({
  id,
  label,
  name,
  options,
  required,
  disabled,
  error,
  value,
  onChange,
  className,
}: SelectProps) {
  return (
    <div className={cn('form-field', className)}>
      <label htmlFor={id} className="form-field__label">
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </label>
      <div className="form-field__select-wrap">
        <select
          id={id}
          name={name}
          required={required}
          disabled={disabled}
          value={value}
          onChange={onChange}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className={cn('form-field__control form-field__control--select', error && 'is-error')}
        >
          <option value="">Select…</option>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      {error ? (
        <p id={`${id}-error`} className="form-field__error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
