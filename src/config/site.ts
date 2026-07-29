export const siteConfig = {
  name: 'Desert Fox Digital',
  tagline: 'Digital strategy for local businesses',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://desertfoxdigital.com',
  contactEmail: process.env.CONTACT_EMAIL ?? 'hello@desertfoxdigital.com',
  location: 'Tucson, Arizona',
  social: {
    linkedin: '',
    instagram: '',
  },
} as const;
