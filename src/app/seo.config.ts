import type { Metadata } from 'next';

export const seoConfig: Metadata = {
  title: {
    default: 'Golf 2 Go',
    template: '%s | Golf 2 Go',
  },
  description: 'Premium portable mini golf courses for your events',
  openGraph: {
    type: 'website',
    locale: 'en_NZ',
    url: 'https://golf2go.co.nz',
    siteName: 'Golf 2 Go',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return seoConfig;
}
