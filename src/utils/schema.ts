type StructuredData = {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  telephone: string;
  areaServed: {
    '@type': string;
    name: string;
  } | string;
  address: {
    '@type': string;
    addressCountry: string;
    addressLocality: string;
  };
  contactPoint?: {
    '@type': string;
    telephone: string;
    email: string;
    contactType: string;
  };
  provider?: {
    '@type': string;
    name: string;
    description: string;
  };
  offers?: {
    '@type': string;
    availability: string;
    priceSpecification: {
      '@type': string;
      priceCurrency: string;
      minPrice: string;
    };
  };
  about?: {
    '@type': string;
    name: string;
    description: string;
  };
  potentialAction?: {
    '@type': string;
    target: string;
  };
  image?: string[];
}

type PageSpecificData = {
  [key: string]: StructuredData & {
    '@type': string;
    [key: string]: any;
  };
}

export const generateStructuredData = (pageName: string): StructuredData => {
  const baseStructuredData: StructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Golf 2 Go NZ',
    description: 'Professional portable mini golf hire and rental service in New Zealand. Premium portable mini golf solutions for events and functions across NZ.',
    url: 'https://golf2go.co.nz',
    telephone: '021849931',
    areaServed: {
      '@type': 'Country',
      name: 'New Zealand'
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'New Zealand',
      addressLocality: 'Palmerston North'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '021849931',
      email: 'admin@golf2go.co.nz',
      contactType: 'customer service'
    }
  }

  const pageSpecificData: PageSpecificData = {
    courses: {
      ...baseStructuredData,
      '@type': 'Service',
      serviceType: 'Portable Mini Golf',
      provider: {
        '@type': 'LocalBusiness',
        name: 'Golf 2 Go NZ',
        description: 'Professional portable mini golf hire service in NZ'
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'NZD',
          minPrice: '190'
        }
      }
    },
    gallery: {
      ...baseStructuredData,
      '@type': 'ImageGallery',
      about: {
        '@type': 'Service',
        name: 'Portable Mini Golf NZ',
        description: 'Professional portable mini golf setups and events'
      },
      image: [
        'https://golf2go.co.nz/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        'https://golf2go.co.nz/3-fun-portable-mini-golf.jpg',
        'https://golf2go.co.nz/17-golf2go-portable-miniature-golf-close-up.jpg'
      ]
    },
    about: {
      ...baseStructuredData,
      '@type': 'LocalBusiness',
      knowsAbout: [
        'Portable Mini Golf',
        'Mini Golf Hire',
        'Event Services',
        'Mobile Golf Solutions',
        'Portable Entertainment'
      ]
    }
  }

  return pageSpecificData[pageName] || baseStructuredData
}
