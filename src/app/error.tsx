'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main id="main-content" className="section" data-surface="0">
      <div className="container">
        <h1 className="h2">Something went wrong</h1>
        <p className="lead" style={{ marginTop: 'var(--space-16)' }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          type="button"
          className="btn btn--primary"
          style={{ marginTop: 'var(--space-32)' }}
          onClick={reset}
        >
          Try again
        </button>
        {process.env.NODE_ENV === 'development' && (
          <pre
            className="small"
            style={{ marginTop: 'var(--space-24)', opacity: 0.6 }}
          >
            {error.message}
          </pre>
        )}
      </div>
    </main>
  );
}
