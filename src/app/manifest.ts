import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Desert Fox Digital',
    short_name: 'Desert Fox',
    description:
      'Boutique digital strategy agency serving local businesses.',
    start_url: '/',
    display: 'standalone',
    background_color: '#EBECF0',
    theme_color: '#283325',
    icons: [],
  };
}
