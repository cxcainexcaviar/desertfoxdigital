function requireEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  return value;
}

export const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://desertfoxdigital.com',
  contactEmail: process.env.CONTACT_EMAIL ?? '',
  resendApiKey: process.env.RESEND_API_KEY ?? '',
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? '',
} as const;

export function getRequiredEnv() {
  return {
    siteUrl: requireEnv('NEXT_PUBLIC_SITE_URL'),
    contactEmail: requireEnv('CONTACT_EMAIL'),
    resendApiKey: requireEnv('RESEND_API_KEY'),
  };
}
