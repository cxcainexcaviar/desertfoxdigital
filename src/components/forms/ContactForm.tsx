'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/forms/Input';
import { Textarea } from '@/components/forms/Textarea';
import { Select } from '@/components/forms/Select';
import { isRequired, isValidEmail } from '@/utils/validation';
import { cn } from '@/lib/cn';

export interface ContactFormProps {
  onSuccess?: () => void;
  className?: string;
}

interface FormValues {
  name: string;
  business: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  business?: string;
  email?: string;
  message?: string;
}

const serviceOptions = [
  { value: 'foundation', label: 'Foundation' },
  { value: 'digital', label: 'Digital' },
  { value: 'visibility', label: 'Visibility' },
  { value: 'presence', label: 'Presence' },
  { value: 'scale', label: 'Scale' },
  { value: 'not-sure', label: 'Not sure yet' },
];

const initial: FormValues = {
  name: '',
  business: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

export function ContactForm({ onSuccess, className }: ContactFormProps) {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const update =
    (field: keyof FormValues) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setValues((v) => ({ ...v, [field]: e.target.value }));
      setErrors((err) => ({ ...err, [field]: undefined }));
      setFormError(null);
    };

  const validate = (): FormErrors => {
    const next: FormErrors = {};
    if (!isRequired(values.name)) next.name = 'Name is required.';
    if (!isRequired(values.business)) next.business = 'Business is required.';
    if (!isRequired(values.email)) next.email = 'Email is required.';
    else if (!isValidEmail(values.email)) next.email = 'Enter a valid email.';
    if (!isRequired(values.message)) next.message = 'Message is required.';
    return next;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setLoading(true);
    setFormError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        setFormError(
          data?.error ??
            'Something went wrong while sending your message. Please try again.'
        );
        return;
      }

      setSubmitted(true);
      setValues(initial);
      onSuccess?.();
    } catch {
      setFormError(
        'Something went wrong while sending your message. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={cn('contact-form contact-form--success', className)}>
        <p className="h3">Message sent.</p>
        <p className="lead" style={{ marginTop: 'var(--space-16)' }}>
          Thank you. We&apos;ll be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form className={cn('contact-form', className)} onSubmit={onSubmit} noValidate>
      <Input
        id="contact-name"
        label="Name"
        name="name"
        required
        value={values.name}
        onChange={update('name')}
        error={errors.name}
      />
      <Input
        id="contact-business"
        label="Business"
        name="business"
        required
        value={values.business}
        onChange={update('business')}
        error={errors.business}
      />
      <Input
        id="contact-email"
        label="Email"
        name="email"
        type="email"
        required
        value={values.email}
        onChange={update('email')}
        error={errors.email}
      />
      <Input
        id="contact-phone"
        label="Phone"
        name="phone"
        type="tel"
        value={values.phone}
        onChange={update('phone')}
      />
      <Select
        id="contact-service"
        label="Service"
        name="service"
        options={serviceOptions}
        value={values.service}
        onChange={update('service')}
      />
      <Textarea
        id="contact-message"
        label="Message"
        name="message"
        required
        value={values.message}
        onChange={update('message')}
        error={errors.message}
      />

      {formError ? (
        <p className="form-field__error" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="contact-form__actions">
        <Button
          variant="primary"
          label="Send Message"
          type="submit"
          loading={loading}
        />
      </div>
    </form>
  );
}
