export default async function JournalPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <main id="main-content">
      <section className="section" data-surface="0">
        <div className="container container--reading">
          <p className="eyebrow">Journal</p>
          <h1 className="h1" style={{ marginTop: 'var(--space-16)' }}>
            {slug}
          </h1>
          <p className="lead" style={{ marginTop: 'var(--space-24)' }}>
            Placeholder — Pattern 17.
          </p>
        </div>
      </section>
    </main>
  );
}
