import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

import { CtaBand } from "~/components/CtaBand";
import { HeroActions, splitLede } from "~/components/HeroActions";
import { PhotoHero } from "~/components/PhotoHero";
import { RelatedLinks } from "~/components/RelatedLinks";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import type { EventType } from "~/lib/event-types";
import { ORG_ID, SITE_URL, absUrl } from "~/lib/site";

function buildSchema(event: EventType) {
  const url = absUrl(event.path);

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Portable Mini Golf Hire for ${event.name}`,
    serviceType: "Portable Mini Golf Hire",
    description: event.metaDescription,
    url,
    provider: {
      "@id": ORG_ID,
    },
    areaServed: {
      "@type": "Country",
      name: "New Zealand",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "NZD",
      lowPrice: 190,
      highPrice: 2500,
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
        name: `Mini Golf Hire for ${event.name}`,
        item: url,
      },
    ],
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: event.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [service, breadcrumb, faq];
}

export function EventLanding({ event }: { event: EventType }) {
  const schema = buildSchema(event);
  const [lede, restOfIntro] = splitLede(event.intro);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="overflow-x-hidden">
        <PhotoHero image={event.heroImage}>
          <Text variant="h1" className="font-bold tracking-tight">
            {event.h1}
          </Text>
          <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
            {lede}
          </Text>
          <HeroActions />
        </PhotoHero>

        {/* Highlights */}
        <section className="py-16 md:py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              {restOfIntro && (
                <Text variant="lg" className="mb-12 text-foreground-secondary">
                  {restOfIntro}
                </Text>
              )}
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                Mini Golf for {event.name} — At a Glance
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {event.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <Text variant="base" className="text-foreground-secondary">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Long-form copy */}
        <section className="bg-background-secondary py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl space-y-12">
              {event.body.map((section) => (
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
              <div>
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Get a Quote for Your Event</Text>
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
                Mini Golf Hire for {event.name} — FAQs
              </Text>
              <dl className="mt-8 space-y-6">
                {event.faqs.map((faq) => (
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

        <RelatedLinks currentPath={event.path} />

        <CtaBand title={<>Book Mini Golf Hire for {event.name}</>}>
          Tell us about your event and we&apos;ll send a free, no-obligation quote.
        </CtaBand>
      </div>
    </>
  );
}
