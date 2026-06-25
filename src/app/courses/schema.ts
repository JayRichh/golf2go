export const generateCoursesSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ProductCollection",
  "@id": `${baseUrl}/courses#collection`,
  "name": "Portable Mini Golf & Mini Putt Hire Packages",
  "description": "Portable mini golf courses for hire — parties, events, fundraisers and corporate functions across New Zealand",
  "url": `${baseUrl}/courses`,
  "provider": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Golf 2 Go NZ",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Palmerston North",
      "addressRegion": "Manawatu-Whanganui",
      "addressCountry": "NZ"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+64-21-849931",
      "email": "admin@golf2go.co.nz",
      "contactType": "customer service"
    }
  },
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Hole in One Challenge",
      "description": "Single-hole portable mini golf setup — perfect for parties, promotions and competitions",
      "brand": {
        "@type": "Brand",
        "name": "Golf 2 Go NZ"
      },
      "category": "Portable Mini Golf Hire",
      "image": `${baseUrl}/2-parties-and-events-golf2go-portable-miniature-golf.jpg`,
      "offers": {
        "@type": "Offer",
        "price": "190",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/book`,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "190",
          "priceCurrency": "NZD"
        }
      }
    },
    {
      "@type": "Product",
      "name": "9 Hole Course Hire",
      "description": "Full 9-hole portable mini golf course for events, fundraisers and corporate functions",
      "brand": {
        "@type": "Brand",
        "name": "Golf 2 Go NZ"
      },
      "category": "Portable Mini Golf Hire",
      "image": `${baseUrl}/3-fun-portable-mini-golf.jpg`,
      "offers": {
        "@type": "Offer",
        "price": "575",
        "priceCurrency": "NZD",
        "availability": "https://schema.org/InStock",
        "url": `${baseUrl}/book`,
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "price": "575",
          "priceCurrency": "NZD"
        }
      }
    }
  ]
});

export const generateCourseTypesSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Product",
        "name": "Twin Hedges",
        "description": "Portable mini golf course, 3.3m x 7.5m, with strategic hedge placements",
        "image": `${baseUrl}/1-Twin-Hedges-3-3m-x-75m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "NZD",
            "minPrice": "190",
            "maxPrice": "2500"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Product",
        "name": "Bridge over the River",
        "description": "Portable mini golf course, 3.3m x 9m, with an elevated bridge section",
        "image": `${baseUrl}/19-Bridge-over-the-River-3-3m-x-9m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "NZD",
            "minPrice": "190",
            "maxPrice": "2500"
          }
        }
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Product",
        "name": "Multi Tunnels",
        "description": "Portable mini golf course, 2.8m x 9m, with multiple tunnel obstacles",
        "image": `${baseUrl}/15-Multi-tunnels-2-8m-x-9m.jpg`,
        "brand": {
          "@type": "Brand",
          "name": "Golf 2 Go NZ"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "NZD",
          "availability": "https://schema.org/InStock",
          "url": `${baseUrl}/book`,
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "NZD",
            "minPrice": "190",
            "maxPrice": "2500"
          }
        }
      }
    }
  ],
  "numberOfItems": 3
});

export const generateServiceSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/courses#service`,
  "name": "Portable Mini Golf & Mini Putt Hire",
  "description": "Portable mini golf course hire for parties, events, fundraisers and corporate functions across New Zealand",
  "provider": {
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
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
  "serviceType": "Portable Mini Golf Hire",
  "termsOfService": `${baseUrl}/terms`
});
