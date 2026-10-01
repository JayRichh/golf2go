import { ORG_ID } from '~/lib/site';

// The full LocalBusiness node (@id ORG_ID) is declared once in the root
// layout. Reference it by @id here instead of redeclaring it.
export const generateContactSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Golf 2 Go NZ — Mini Golf & Mini Putt Hire",
  "url": `${baseUrl}/contact`,
  "description": "Contact Golf 2 Go for portable mini golf and mini putt hire across New Zealand.",
  "mainEntity": {
    "@id": ORG_ID
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
  "contactType": "customer service",
  "telephone": "+64-21-849931",
  "email": "admin@golf2go.co.nz",
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
