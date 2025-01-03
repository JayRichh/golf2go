export const generateAboutSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${baseUrl}/#organization`,
  "name": "Golf 2 Go NZ",
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": `${baseUrl}/5-cropped-golf2go-logo-1.jpg`,
    "width": "400",
    "height": "400"
  },
  "description": "New Zealand's premier corporate entertainment and event solutions provider, specializing in premium portable mini golf experiences for professional events",
  "foundingDate": "2008",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Auckland",
      "addressCountry": "NZ"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Palmerston North",
    "addressCountry": "New Zealand"
  },
  "slogan": "Premium Corporate Entertainment Solutions",
  "brand": {
    "@type": "Brand",
    "name": "Golf 2 Go",
    "description": "Professional portable mini golf and corporate entertainment solutions",
    "logo": `${baseUrl}/5-cropped-golf2go-logo-1.jpg`
  },
  "keywords": [
    "corporate entertainment provider",
    "professional event solutions",
    "premium portable mini golf",
    "corporate team building",
    "business event entertainment",
    "executive function activities",
    "professional event management",
    "corporate entertainment specialists",
    "premium event solutions",
    "business entertainment services"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Entertainment Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate Events",
          "description": "Premium entertainment solutions for corporate functions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Team Building",
          "description": "Professional team building activities and solutions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Executive Functions",
          "description": "High-end entertainment for executive events"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "021849931",
    "email": "admin@golf2go.co.nz",
    "contactType": "customer service",
    "areaServed": "New Zealand"
  },
  "knowsAbout": [
    "Corporate Entertainment",
    "Event Management",
    "Team Building",
    "Professional Development",
    "Business Events"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Premium Portable Mini Golf",
        "description": "Professional portable mini golf solutions for corporate events"
      }
    }
  ],
  "potentialAction": {
    "@type": "ViewAction",
    "target": [
      {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/book`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    ],
    "name": "Book Corporate Entertainment"
  }
});

export const generateValuesSchema = (values: any[]) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": values.map((value, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Thing",
      "name": value.name,
      "description": value.description
    }
  }))
});
