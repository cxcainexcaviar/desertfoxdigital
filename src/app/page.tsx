import { ApproachList } from '@/components/approach';
import { CtaBlock } from '@/components/sections';
import { Button, Container, Eyebrow, Section } from '@/components/ui';
import { approach, ctaBlock, hero } from '@/content/homepage';

export default function HomePage() {
  return (
    <main id="main-content">
      <Section surface={2}>
        <Container>
          <Eyebrow label={hero.eyebrow} />
          <h1 className="display-xl" style={{ marginTop: 'var(--space-24)' }}>
            {hero.heading}
          </h1>
          <p className="lead" style={{ marginTop: 'var(--space-24)' }}>
            {hero.lead}
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
              label={hero.primaryCta.label}
              href={hero.primaryCta.href}
            />
            <Button
              variant="secondary"
              label={hero.secondaryCta.label}
              href={hero.secondaryCta.href}
            />
          </div>
        </Container>
      </Section>

      <Section surface={0} id="approach">
        <Container>
          <Eyebrow label="Approach" />
          <h2 className="h2" style={{ marginTop: 'var(--space-16)' }}>
            Five disciplines. One connected strategy.
          </h2>
          <div style={{ marginTop: 'var(--space-48)' }}>
            <ApproachList items={approach} />
          </div>
        </Container>
      </Section>

      <CtaBlock
        heading={ctaBlock.heading}
        body={ctaBlock.body}
        cta={ctaBlock.cta}
      />
    </main>
  );
}
