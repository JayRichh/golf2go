import { ORG_ID, SITE_URL } from '~/lib/site';

type SchemaContext = {
  baseUrl: string;
  siteName: string;
  siteImage: string;
}

const defaultContext: SchemaContext = {
  baseUrl: SITE_URL,
  siteName: 'Golf 2 Go NZ',
  siteImage: '/2-parties-and-events-golf2go-portable-miniature-golf.jpg'
}

type StructuredData = Record<string, unknown>;

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

// Reference to the single LocalBusiness node declared in the root layout.
// Never re-declare name/telephone/address here — reference it by @id.
function generateBusinessSchema(): { '@id': string } {
  return { '@id': ORG_ID };
}

// Courses: a Service provided by the organization
function generateCourseSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Portable Mini Golf',
    serviceType: 'Portable Mini Golf',
    provider: generateBusinessSchema(),
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
            '@type': 'Service',
            name: 'Single Hole Setup',
            description: 'Professional 3.3m x 7.5m course setup'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full Course Package',
            description: 'Complete mini golf course configuration'
          }
        }
      ]
    }
  };
}

// Gallery: an ImageGallery about the service
function generateGallerySchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'ImageGallery',
    about: {
      '@type': 'Service',
      name: 'Portable Mini Golf NZ',
      description: 'Professional portable mini golf setups and events',
      provider: generateBusinessSchema()
    },
    image: [
      `${defaultContext.baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      `${defaultContext.baseUrl}/3-fun-portable-mini-golf.jpg`,
      `${defaultContext.baseUrl}/17-golf2go-portable-miniature-golf-close-up.jpg`
    ]
  };
}

// About: an AboutPage whose main entity is the organization
function generateAboutSchema(): StructuredData {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: generateBusinessSchema()
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
      // The organization node is already declared in the root layout.
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
      break;
  }

  return schemas;
}
