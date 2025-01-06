type SchemaContext = {
  baseUrl: string;
  siteName: string;
  siteImage: string;
}

const defaultContext: SchemaContext = {
  baseUrl: 'https://golf2go.co.nz',
  siteName: 'Golf 2 Go NZ',
  siteImage: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg'
}

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
  } | {
    '@type': 'AggregateOffer';
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
  // Additional properties for specific schemas
  serviceType?: string;
  hasOfferCatalog?: {
    '@type': string;
    name: string;
    itemListElement: Array<{
      '@type': string;
      itemOffered: {
        '@type': string;
        name: string;
        description: string;
      };
    }>;
  };
  knowsAbout?: string[];
  mainEntity?: {
    '@type': string;
    name: string;
    description: string;
    areaServed: string;
    foundingDate: string;
  };
}

// Generate breadcrumb schema
function generateBreadcrumbSchema(path: string) {
  const parts = path.split('/').filter(Boolean);
  const items = parts.map((part, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@id': `${defaultContext.baseUrl}/${parts.slice(0, index + 1).join('/')}`,
      name: part.charAt(0).toUpperCase() + part.slice(1)
    }
  }));

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@id': defaultContext.baseUrl,
          name: 'Home'
        }
      },
      ...items
    ]
  };
}

// Generate base business schema
function generateBusinessSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Golf 2 Go NZ',
    description: 'Professional portable mini golf hire and rental service in New Zealand. Premium portable mini golf solutions for events and functions across NZ.',
    url: defaultContext.baseUrl,
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
  };
}

// Generate course schema with proper product offerings
function generateCourseSchema(): StructuredData {
  return {
    ...generateBusinessSchema(),
    '@type': 'SportsActivityLocation',
    serviceType: 'Portable Mini Golf',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Golf 2 Go NZ',
      description: 'Professional portable mini golf hire service in NZ'
    },
    offers: {
      '@type': 'AggregateOffer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'NZD',
        minPrice: '190'
      }
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Mini Golf Course Options',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Single Hole Setup',
            description: 'Professional 3.3m x 7.5m course setup'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Product',
            name: 'Full Course Package',
            description: 'Complete mini golf course configuration'
          }
        }
      ]
    }
  };
}

// Generate gallery schema with proper image organization
function generateGallerySchema(): StructuredData {
  return {
    ...generateBusinessSchema(),
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
  };
}

// Generate about page schema with comprehensive business info
function generateAboutSchema(): StructuredData {
  return {
    ...generateBusinessSchema(),
    '@type': 'AboutPage',
    knowsAbout: [
      'Portable Mini Golf',
      'Mini Golf Hire',
      'Event Services',
      'Mobile Golf Solutions',
      'Portable Entertainment'
    ],
    mainEntity: {
      '@type': 'Organization',
      name: 'Golf 2 Go NZ',
      description: 'Leading provider of portable mini golf solutions in New Zealand',
      areaServed: 'New Zealand',
      foundingDate: '2020'
    }
  };
}

export function generateStructuredData(pageName: string, path?: string): any[] {
  const schemas = [];
  
  // Add breadcrumbs for all pages except home
  if (path && path !== '/') {
    schemas.push(generateBreadcrumbSchema(path));
  }

  // Add page-specific schema
  switch (pageName) {
    case 'courses':
      schemas.push(generateCourseSchema());
      break;
    case 'gallery':
      schemas.push(generateGallerySchema());
      break;
    case 'about':
      schemas.push(generateAboutSchema());
      break;
    default:
      schemas.push(generateBusinessSchema());
  }

  return schemas;
}
