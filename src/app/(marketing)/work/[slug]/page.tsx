export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main id="main-content">
      <section className="section" data-surface="0">
        <div className="container">
          <p className="eyebrow">Case study</p>
          <h1 className="h1" style={{ marginTop: 'var(--space-16)' }}>
            {slug}
          </h1>
          <p className="lead" style={{ marginTop: 'var(--space-24)' }}>
            Placeholder — assemble from UI-PATTERNS.md Pattern 14 in Phase 9.
          </p>
        </div>
      </section>
    </main>
  );
}
