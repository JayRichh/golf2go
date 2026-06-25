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
  "description": "New Zealand's first portable mini golf company — portable mini golf and mini putt hire for parties, events, fundraisers and corporate functions nationwide",
  "foundingDate": "2008",
  "foundingLocation": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palmerston North",
      "addressRegion": "Manawatu-Whanganui",
      "addressCountry": "NZ"
    }
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "slogan": "Portable Mini Golf & Mini Putt Hire",
  "brand": {
    "@type": "Brand",
    "name": "Golf 2 Go",
    "description": "Portable mini golf and mini putt hire across New Zealand",
    "logo": `${baseUrl}/5-cropped-golf2go-logo-1.jpg`
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Mini Golf Hire Packages",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Parties & Events Hire",
          "description": "Portable mini golf hire for birthdays, parties, fundraisers and community events"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Corporate & Team Building Hire",
          "description": "Mini putt hire for corporate functions, conferences and team building"
        }
      }
    ]
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+64-21-849931",
    "email": "admin@golf2go.co.nz",
    "contactType": "customer service",
    "areaServed": "New Zealand"
  },
  "knowsAbout": [
    "Portable Mini Golf Hire",
    "Mini Putt Hire",
    "Event Entertainment",
    "Party Hire",
    "Corporate Events"
  ],
  "makesOffer": [
    {
      "@type": "Offer",
      "itemOffered": {
        "@type": "Service",
        "name": "Portable Mini Golf Hire",
        "description": "Portable mini golf and mini putt course hire for events across New Zealand"
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
    "name": "Book Mini Golf Hire"
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
