import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "~/components/CtaBand";
import { HeroActions, splitLede } from "~/components/HeroActions";
import { PhotoHero } from "~/components/PhotoHero";
import { RelatedLinks } from "~/components/RelatedLinks";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import type { Location } from "~/lib/locations";
import { ORG_ID, SITE_URL, absUrl } from "~/lib/site";

function buildSchema(location: Location) {
  const url = absUrl(location.path);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Portable Mini Golf & Mini Putt Hire — ${location.name}`,
    serviceType: "Portable Mini Golf Hire",
    description: location.metaDescription,
    url,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name: location.areaServed,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "NZD",
      lowPrice: "190",
      highPrice: "2500",
      availability: "https://schema.org/InStock",
      url: absUrl("book"),
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: `Mini Golf Hire ${location.name}`,
        item: url,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [service, breadcrumb, faq];
}

export function LocationLanding({ location }: { location: Location }) {
  const schema = buildSchema(location);
  const [lede, restOfIntro] = splitLede(location.intro);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="overflow-x-hidden">
        <PhotoHero image={location.heroImage}>
          <Text variant="h1" className="font-bold tracking-tight">
            {location.h1}
          </Text>
          <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
            {lede}
          </Text>
          <HeroActions />
        </PhotoHero>

        {/* Areas covered */}
        <section className="py-16 md:py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              {restOfIntro && (
                <Text variant="lg" className="mb-12 text-foreground-secondary">
                  {restOfIntro}
                </Text>
              )}
              <Text variant="h2" className="font-bold tracking-tight">
                Areas We Cover in {location.name}
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                Portable mini golf and mini putt hire delivered across {location.region}
              </Text>
              <ul className="mt-6 grid grid-cols-2 gap-x-8 gap-y-2 text-lg sm:grid-cols-3">
                {location.places.map((place) => (
                  <li key={place}>{place}</li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {/* Long-form copy (optional per location) */}
        {location.body && location.body.length > 0 && (
          <section className="pb-20">
            <Container size="xl">
              <div className="mx-auto max-w-3xl space-y-12">
                {location.body.map((section) => (
                  <div key={section.heading}>
                    <Text variant="h2" className="font-bold tracking-tight text-foreground">
                      {section.heading}
                    </Text>
                    <div className="mt-6 space-y-4">
                      {section.paragraphs.map((p) => (
                        <Text key={p} variant="lg" className="text-foreground-secondary">
                          {p}
                        </Text>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* What's included */}
        <section className="bg-background-secondary py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                Mini Golf Hire in {location.name} — What&apos;s Included
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  "Full delivery, setup and pack-down",
                  "Indoor and outdoor courses",
                  "3, 6 and 9 hole layouts",
                  "Hole in One Challenge",
                  "Great for all ages",
                  "Parties, fundraisers & corporate events",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <Text variant="base" className="text-foreground-secondary">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Get a {location.name} Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                {location.name} Mini Golf Hire — FAQs
              </Text>
              <dl className="mt-8 space-y-6">
                {location.faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt>
                      <Text variant="lg" className="font-semibold text-foreground">
                        {faq.question}
                      </Text>
                    </dt>
                    <dd className="mt-2">
                      <Text variant="base" className="text-foreground-secondary">
                        {faq.answer}
                      </Text>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        <RelatedLinks currentPath={location.path} />

        <CtaBand title={<>Book Mini Golf Hire in {location.name}</>}>
          Tell us about your event and we&apos;ll send a free, no-obligation quote.
        </CtaBand>
      </div>
    </>
  );
}
