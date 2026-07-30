import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { Eyebrow } from '@/components/ui/Eyebrow';
import { Section } from '@/components/ui/Section';
import { cn } from '@/lib/cn';

export interface CtaBlockProps {
  eyebrow?: string;
  heading: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
  className?: string;
}

export function CtaBlock({
  eyebrow,
  heading,
  body,
  cta,
  className,
}: CtaBlockProps) {
  return (
    <Section surface={2} className={cn('cta-block-section', className)}>
      <div className="cta-block__atmosphere" aria-hidden="true">
        <div className="haze" />
        <div className="grain" />
      </div>
      <Container>
        <div className="cta-block">
          {eyebrow ? <Eyebrow label={eyebrow} /> : null}
          <h2 className="cta-block__heading h2">{heading}</h2>
          <p className="cta-block__body lead">{body}</p>
          <div className="cta-block__action">
            <Button variant="primary" label={cta.label} href={cta.href} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
