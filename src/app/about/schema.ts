import { ORG_ID } from '~/lib/site';

// The full LocalBusiness node (@id ORG_ID) is declared once in the root
// layout. Reference it by @id here instead of redeclaring it.
export const generateAboutSchema = (baseUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Golf 2 Go NZ — Portable Mini Golf & Mini Putt Hire",
  "url": `${baseUrl}/about`,
  "description": "New Zealand's first portable mini golf company — portable mini golf and mini putt hire for parties, events, fundraisers and corporate functions nationwide",
  "mainEntity": {
    "@id": ORG_ID
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
