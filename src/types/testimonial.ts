export interface Testimonial {
  quote: string;
  client: string;
  business: string;
  service?: string;
  portrait?: {
    src: string;
    alt: string;
  };
  featured?: boolean;
}
