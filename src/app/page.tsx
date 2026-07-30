import { Button, Container, Eyebrow, Section } from '@/components/ui';

export default function HomePage() {
  return (
    <main id="main-content">
      <Section surface={2}>
        <Container>
          <Eyebrow label="Digital strategy for local businesses" />
          <h1 className="display-xl" style={{ marginTop: 'var(--space-24)' }}>
            Mark Your Territory.
          </h1>
          <p className="lead" style={{ marginTop: 'var(--space-24)' }}>
            Desert Fox Digital helps local businesses claim ground and hold it
            through thoughtful strategy, search visibility, and marketing built
            to last.
          </p>
          <div
            style={{
              marginTop: 'var(--space-48)',
              display: 'flex',
              gap: 'var(--space-16)',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="primary"
              label="Claim Your Ground"
              href="/contact"
            />
            <Button
              variant="secondary"
              label="Our Approach"
              href="#approach"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
