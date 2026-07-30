import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { SiteNav } from '@/components/navigation';
import { SiteFooter } from '@/components/footer';
import './globals.css';

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});

const playfair = localFont({
  src: [
    {
      path: '../../public/fonts/PlayfairDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/PlayfairDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const geistMono = localFont({
  src: [
    {
      path: '../../public/fonts/GeistMono-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['monospace'],
});

const mekona = localFont({
  src: [
    {
      path: '../../public/fonts/Mekona.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-logo',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} ${mekona.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
