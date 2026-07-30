import { cn } from '@/lib/cn';

export interface TestimonialCardProps {
  quote: string;
  client: string;
  business: string;
  service?: string;
  className?: string;
}

export function TestimonialCard({
  quote,
  client,
  business,
  service,
  className,
}: TestimonialCardProps) {
  return (
    <blockquote className={cn('testimonial-card', className)}>
      <p className="testimonial-card__quote">{quote}</p>
      <footer className="testimonial-card__footer">
        <cite className="testimonial-card__client">{client}</cite>
        <span className="testimonial-card__business">{business}</span>
        {service ? (
          <span className="testimonial-card__service">{service}</span>
        ) : null}
      </footer>
    </blockquote>
  );
}
