export default function Loading() {
  return (
    <div className="section" data-surface="0">
      <div className="container">
        <div className="skeleton" style={{ height: '2rem', width: '40%' }} />
        <div
          className="skeleton"
          style={{ height: '1rem', width: '60%', marginTop: 'var(--space-16)' }}
        />
      </div>
    </div>
  );
}
