import type { Metadata } from 'next';
import './globals.css';

/**
 * Fonts: add woff2 files under public/fonts/ then wire with next/font/local:
 *   Inter-Regular.woff2, Inter-SemiBold.woff2
 *   PlayfairDisplay-Regular.woff2, PlayfairDisplay-Medium.woff2
 *   GeistMono-Medium.woff2
 * Until then, system fallbacks from tokens.css apply.
 */

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://desertfoxdigital.com'
  ),
  title: {
    default: 'Desert Fox Digital',
    template: '%s · Desert Fox Digital',
  },
  description:
    'Boutique digital strategy agency serving local businesses. Thoughtful strategy, search visibility, and marketing built to last.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Desert Fox Digital',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
