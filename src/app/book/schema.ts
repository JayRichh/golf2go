export const generateBookingSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${baseUrl}/book#service`,
  "name": "Golf 2 Go NZ Corporate Entertainment Solutions",
  "serviceType": "Corporate Entertainment",
  "provider": {
    "@type": "Organization",
    "name": "Golf 2 Go NZ",
    "url": baseUrl
  },
  "areaServed": {
    "@type": "Country",
    "name": "New Zealand"
  },
  "offers": {
    "@type": "AggregateOffer",
    "priceCurrency": "NZD",
    "availability": "https://schema.org/InStock",
    "priceValidUntil": new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
    "offerCount": "7",
    "offers": [
      {
        "@type": "Offer",
        "name": "Single Hole Package",
        "price": "190.00",
        "priceCurrency": "NZD",
        "description": "1 Hole Premium Mini Golf Setup"
      },
      {
        "@type": "Offer",
        "name": "Double Hole Package",
        "price": "260.00",
        "priceCurrency": "NZD",
        "description": "2 Holes Premium Mini Golf Setup"
      },
      {
        "@type": "Offer",
        "name": "Triple Hole Package",
        "price": "338.00",
        "priceCurrency": "NZD",
        "description": "3 Holes Premium Mini Golf Setup"
      },
      {
        "@type": "Offer",
        "name": "Executive Package",
        "price": "575.00",
        "priceCurrency": "NZD",
        "description": "9 Holes Premium Mini Golf Setup"
      }
    ]
  },
  "potentialAction": {
    "@type": "ReserveAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/book`,
      "inLanguage": "en-NZ",
      "actionPlatform": [
        "http://schema.org/DesktopWebPlatform",
        "http://schema.org/MobileWebPlatform"
      ]
    },
    "result": {
      "@type": "Reservation",
      "name": "Corporate Entertainment Booking"
    }
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Corporate Entertainment Solutions",
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Corporate Events",
        "description": "Premium entertainment solutions for corporate functions"
      },
      {
        "@type": "OfferCatalog",
        "name": "Team Building",
        "description": "Professional team building activities and solutions"
      },
      {
        "@type": "OfferCatalog",
        "name": "Executive Functions",
        "description": "High-end entertainment for executive events"
      }
    ]
  },
  "serviceOutput": {
    "@type": "Thing",
    "name": "Professional Event Experience",
    "description": "Premium interactive entertainment setup with professional management"
  },
  "termsOfService": `${baseUrl}/terms`,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "150",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Organization",
        "name": "Corporate Client NZ"
      },
      "reviewBody": "Exceptional professional service and premium entertainment solution for our corporate event."
    }
  ]
});

export const generateFormSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "WebForm",
  "name": "Corporate Entertainment Booking Form",
  "url": `${baseUrl}/book`,
  "encodingType": "application/x-www-form-urlencoded",
  "actionableFeedbackPolicy": `${baseUrl}/terms`,
  "availableLanguage": {
    "@type": "Language",
    "name": "English",
    "alternateName": "en-NZ"
  }
});
