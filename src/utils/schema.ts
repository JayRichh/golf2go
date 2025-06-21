type SchemaContext = {
  baseUrl: string;
  siteName: string;
  siteImage: string;
}

const defaultContext: SchemaContext = {
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz',
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

// Generate FAQ schema for home page
function generateFAQSchema(): any {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is portable mini golf?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Portable mini golf is a professional mobile mini putt service that brings complete mini golf courses to your location. Our portable mini golf hire includes professional setup, high-quality courses, and full equipment rental for events across New Zealand.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you serve Wellington?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide mini golf Wellington services with full portable mini golf hire across the Wellington region. Our mobile mini golf setup covers all Wellington suburbs and surrounding areas.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you serve Palmerston North?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We offer indoor mini golf Palmerston North services and portable mini golf hire throughout the Manawatu region. Palmerston North is one of our key service areas with regular mini golf setups.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you serve New Plymouth?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide New Plymouth mini golf services and portable mini golf hire across Taranaki. Our mobile mini golf courses are perfect for events in New Plymouth and surrounding areas.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you serve Taranaki?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we serve all of Taranaki including New Plymouth, Stratford, and Hawera. Our portable mini golf hire covers the entire Taranaki region with professional mini golf setup and delivery.'
        }
      },
      {
        '@type': 'Question',
        name: 'How much does mini golf hire cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mini golf hire costs start from $190 NZD for basic setups. Pricing varies based on course size, duration, location, and additional services. Contact us for a customized portable mini golf hire quote for your event.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide indoor mini golf options?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we specialize in indoor mini golf setups perfect for venues, conferences, and corporate events. Our portable mini golf courses work excellently indoors with professional setup and compact designs.'
        }
      }
    ]
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
      `${defaultContext.baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      `${defaultContext.baseUrl}/3-fun-portable-mini-golf.jpg`,
      `${defaultContext.baseUrl}/17-golf2go-portable-miniature-golf-close-up.jpg`
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
    case 'home':
      schemas.push(generateBusinessSchema());
      schemas.push(generateFAQSchema());
      break;
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
