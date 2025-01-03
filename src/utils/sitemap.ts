import { MetadataRoute } from 'next'

const baseUrl = 'https://golf2go.co.nz'

// Industry & Sector Keywords
const industryKeywords = [
  'corporate event solutions',
  'business entertainment services',
  'professional event management',
  'corporate function planning',
  'executive team building',
  'premium event experiences',
  'luxury corporate events',
  'high-end entertainment',
  'exclusive corporate activities',
  'VIP event solutions'
]

// Event Type Keywords
const eventTypeKeywords = [
  'corporate team building activities',
  'executive retreat planning',
  'business conference entertainment',
  'corporate celebration ideas',
  'professional networking events',
  'company milestone celebrations',
  'corporate awards ceremonies',
  'business launch events',
  'client appreciation activities',
  'staff engagement solutions'
]

// Business Function Keywords
const businessKeywords = [
  'employee engagement activities',
  'corporate wellness programs',
  'team development solutions',
  'business relationship building',
  'corporate culture activities',
  'professional development events',
  'company morale boosters',
  'workplace engagement solutions',
  'business social activities',
  'corporate entertainment planning'
]

// Professional Service Keywords
const serviceKeywords = [
  'premium event services',
  'corporate entertainment specialists',
  'professional event coordination',
  'executive event planning',
  'corporate function management',
  'business event logistics',
  'professional setup services',
  'corporate activity planning',
  'event solution providers',
  'business entertainment experts'
]

// Location & Market Keywords
const marketKeywords = [
  'Palmerston North corporate events',
  'New Zealand business functions',
  'NZ corporate activities',
  'New Zealand event solutions',
  'nationwide corporate services',
  'NZ business entertainment',
  'premium event locations',
  'corporate venue activities',
  'business function spaces',
  'executive event venues'
]

// Activity-Specific Keywords
const activityKeywords = [
  'premium mini golf experiences',
  'corporate golf entertainment',
  'executive gaming solutions',
  'professional activity setups',
  'luxury entertainment options',
  'interactive business activities',
  'corporate recreation solutions',
  'professional gaming events',
  'executive entertainment options',
  'premium activity planning'
]

export const seoKeywords = [
  ...industryKeywords,
  ...eventTypeKeywords,
  ...businessKeywords,
  ...serviceKeywords,
  ...marketKeywords,
  ...activityKeywords,
  // Additional High-Value Keywords
  'exclusive corporate entertainment',
  'premium business activities',
  'executive team development',
  'corporate wellness solutions',
  'professional event experiences',
  'business relationship building',
  'corporate culture enhancement',
  'executive entertainment options',
  'premium activity solutions',
  'corporate engagement activities',
  'professional team building',
  'business entertainment planning',
  'corporate recreation services',
  'executive event solutions',
  'premium corporate activities',
  'professional function planning',
  'business activity coordination',
  'corporate entertainment experts',
  'executive recreation planning',
  'premium event management'
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/courses`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }
  ]

  return routes
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
    '@type': 'BusinessService',
    name: 'Golf 2 Go NZ',
    description: 'New Zealand\'s leading corporate entertainment and event solutions provider, specializing in premium interactive experiences and professional team building activities',
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
      serviceType: 'Corporate Entertainment',
      provider: {
        '@type': 'Organization',
        name: 'Golf 2 Go NZ',
        description: 'Premium corporate entertainment and team building solutions'
      },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        priceSpecification: {
          '@type': 'PriceSpecification',
          priceCurrency: 'NZD',
          minPrice: '190'
        }
      },
      amenityFeature: [
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Professional Event Setup',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Corporate Customization',
          value: true
        },
        {
          '@type': 'LocationFeatureSpecification',
          name: 'Event Management',
          value: true
        }
      ]
    },
    gallery: {
      ...baseStructuredData,
      '@type': 'CreativeWork',
      about: {
        '@type': 'Service',
        name: 'Corporate Event Solutions',
        description: 'Premium entertainment and team building experiences'
      },
      image: [
        'https://golf2go.co.nz/2-parties-and-events-golf2go-portable-miniature-golf.jpg',
        'https://golf2go.co.nz/3-fun-portable-mini-golf.jpg',
        'https://golf2go.co.nz/17-golf2go-portable-miniature-golf-close-up.jpg'
      ],
      potentialAction: {
        '@type': 'ViewAction',
        target: 'https://golf2go.co.nz/book'
      }
    },
    about: {
      ...baseStructuredData,
      '@type': 'Organization',
      knowsAbout: [
        'Corporate Entertainment',
        'Event Management',
        'Team Building',
        'Professional Development',
        'Business Events'
      ]
    }
  }

  return pageSpecificData[pageName] || baseStructuredData
}
