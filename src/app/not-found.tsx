import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="section" data-surface="0">
      <div className="container">
        <p className="eyebrow">404</p>
        <h1 className="h2" style={{ marginTop: 'var(--space-16)' }}>
          Page not found
        </h1>
        <p className="lead" style={{ marginTop: 'var(--space-16)' }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="btn btn--primary"
          style={{ marginTop: 'var(--space-32)', display: 'inline-flex' }}
        >
          Back home
        </Link>
      </div>
    </main>
  );
}
