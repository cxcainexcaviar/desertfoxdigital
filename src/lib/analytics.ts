export function trackEvent(
  name: string,
  params?: Record<string, string | number | boolean>
): void {
  if (typeof window === 'undefined') return;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  if (typeof gtag === 'function') {
    gtag('event', name, params);
  }
}
