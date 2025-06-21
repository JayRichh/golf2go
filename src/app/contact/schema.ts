export const generateContactSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Golf 2 Go NZ - Professional Corporate Entertainment",
  "url": `${baseUrl}/contact`,
  "description": "Contact New Zealand's leading corporate entertainment provider for premium portable mini golf solutions and business event planning.",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Golf 2 Go NZ",
    "url": baseUrl,
    "telephone": "+64-21-849931",
    "email": "info@golf2go.co.nz",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "NZ",
      "addressRegion": "New Zealand"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-41.2865",
      "longitude": "174.7762"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "State",
        "name": "North Island"
      },
      {
        "@type": "State", 
        "name": "South Island"
      }
    ],
    "serviceType": [
      "Corporate Entertainment",
      "Business Event Planning",
      "Team Building Activities",
      "Executive Functions",
      "Professional Mini Golf Hire"
    ],
    "priceRange": "$$",
    "openingHours": "Mo-Su 08:00-20:00",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "NZD"
  },
  "potentialAction": {
    "@type": "CommunicateAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/contact`,
      "inLanguage": "en-NZ"
    }
  }
});

export const generateContactFormSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPoint",
  "contactType": "Corporate Bookings",
  "telephone": "+64-21-849931",
  "email": "info@golf2go.co.nz",
  "availableLanguage": ["English"],
  "areaServed": "NZ",
  "hoursAvailable": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "08:00",
    "closes": "20:00"
  }
});