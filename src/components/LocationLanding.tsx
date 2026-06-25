import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import type { Location } from "~/lib/locations";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://golf2go.co.nz";

function buildSchema(location: Location) {
  const url = `${baseUrl}/${location.path}`;

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `Portable Mini Golf & Mini Putt Hire — ${location.name}`,
    serviceType: "Portable Mini Golf Hire",
    description: location.metaDescription,
    url,
    provider: {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      name: "Golf 2 Go NZ",
      url: baseUrl,
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
      url: `${baseUrl}/book`,
    },
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: baseUrl },
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="overflow-x-hidden">
        {/* Hero */}
        <section className="relative bg-primary">
          <GradientBackground variant="glow">
            <div className="relative isolate overflow-hidden py-32 md:py-40">
              <div className="absolute inset-0 -z-10 w-full">
                <Image
                  src={location.heroImage}
                  alt=""
                  fill
                  className="h-full w-full object-cover opacity-30"
                  sizes="100vw"
                  priority
                />
              </div>
              <Container size="xl">
                <div className="mx-auto max-w-3xl text-center min-h-[140px] flex flex-col justify-center py-8">
                  <Text
                    variant="h1"
                    align="center"
                    className="font-bold tracking-tight text-primary-foreground"
                  >
                    {location.h1}
                  </Text>
                  <Text variant="xl" className="mx-auto mt-6 text-primary-foreground">
                    {location.intro}
                  </Text>
                  <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                    <Link
                      href="/book"
                      className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                    >
                      <Text variant="lg">Get a Hire Quote</Text>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      href="/courses"
                      className="btn-outline inline-flex items-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                    >
                      <Text variant="lg">View Our Courses</Text>
                    </Link>
                  </div>
                </div>
              </Container>
            </div>
          </GradientBackground>
        </section>

        {/* Areas covered */}
        <section className="py-20">
          <Container size="xl">
            <div className="text-center">
              <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
                Areas We Cover in {location.name}
              </Text>
              <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
                Portable mini golf and mini putt hire delivered across {location.region}
              </Text>
            </div>
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
              {location.places.map((place) => (
                <div
                  key={place}
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-3"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-primary" />
                  <Text variant="base" className="text-foreground-secondary">
                    {place}
                  </Text>
                </div>
              ))}
            </div>
          </Container>
        </section>

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

        {/* CTA */}
        <section className="relative bg-primary py-24">
          <GradientBackground variant="subtle">
            <Container size="xl" className="py-12">
              <div className="relative z-10 text-center">
                <Text
                  variant="h2"
                  align="center"
                  className="pb-4 font-bold tracking-tight text-primary-foreground"
                >
                  Book Mini Golf Hire in {location.name}
                </Text>
                <Text
                  variant="lg"
                  className="mx-auto mt-4 max-w-2xl text-center text-primary-foreground"
                >
                  Tell us about your event and we&apos;ll send a free, no-obligation quote.
                </Text>
                <div className="mt-10 flex justify-center">
                  <Link
                    href="/book"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3"
                  >
                    <Text variant="lg">Get a Hire Quote</Text>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent" />
            </Container>
          </GradientBackground>
        </section>
      </div>
    </>
  );
}
