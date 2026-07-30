import { ContactForm } from '@/components/forms';
import { Container, Eyebrow, Section } from '@/components/ui';
import { contactCard, contactHero } from '@/content/contact';

export default function ContactPage() {
  return (
    <main id="main-content">
      <Section surface={0}>
        <Container>
          <div className="contact-page">
            <div className="contact-page__intro">
              <Eyebrow label={contactHero.eyebrow} />
              <h1 className="h1" style={{ marginTop: 'var(--space-16)' }}>
                {contactHero.heading}
              </h1>
              <p className="lead" style={{ marginTop: 'var(--space-24)' }}>
                {contactHero.lead}
              </p>

              <div className="contact-page__card" style={{ marginTop: 'var(--space-48)' }}>
                <p className="h4">{contactCard.heading}</p>
                <a
                  href={`mailto:${contactCard.email}`}
                  className="contact-page__email"
                >
                  {contactCard.email}
                </a>
                <p className="small" style={{ marginTop: 'var(--space-8)', opacity: 0.75 }}>
                  {contactCard.location}
                </p>
                <p className="small" style={{ opacity: 0.75 }}>
                  {contactCard.hours}
                </p>
              </div>
            </div>

            <div className="contact-page__form">
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
