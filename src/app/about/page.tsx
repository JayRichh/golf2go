import { ArrowRight, Heart, Target, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "~/components/CtaBand";
import { PhotoHero } from "~/components/PhotoHero";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { generateAboutSchema, generateValuesSchema } from './schema';
import { SITE_URL } from '~/lib/site';

export { generateMetadata } from './metadata';

const baseUrl = SITE_URL;

const values = [
  {
    name: "Easy & Hassle-Free",
    description: "We deliver, set up and pack down the course so you can focus on your event.",
    icon: Trophy,
  },
  {
    name: "Fun for All Ages",
    description: "From kids' birthdays to corporate team building, mini golf brings everyone together.",
    icon: Heart,
  },
  {
    name: "Trusted Since 2008",
    description: "New Zealand's first portable mini golf company, with thousands of events delivered.",
    icon: Target,
  },
];

export default function AboutPage() {
  const aboutSchema = generateAboutSchema(baseUrl);
  const valuesSchema = generateValuesSchema(values);

  return (
    <div className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([aboutSchema, valuesSchema]),
        }}
      />
      <PhotoHero image="/3-fun-portable-mini-golf.jpg">
        <Text variant="h1" itemProp="name">
          About Golf 2 Go — Portable Mini Golf &amp; Mini Putt Hire
        </Text>
        <Text variant="xl" className="mx-auto mt-6 max-w-2xl" itemProp="description">
          New Zealand&apos;s first portable mini golf company. Since 2008 we&apos;ve brought
          mini putt fun to parties, events and corporate functions right across the country.
        </Text>
      </PhotoHero>

      {/* Mission Section */}
      <section className="py-12 md:py-16" itemScope itemType="https://schema.org/Organization">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/4-portable-miniature-golf.jpg"
                alt="A Golf 2 Go portable mini golf course set up for an event"
                fill
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="flex flex-col justify-center">
              <Text variant="h2" className="text-foreground">
                Our Story
              </Text>
              <Text
                variant="lg"
                className="mt-6 text-foreground-secondary"
                itemProp="description"
              >
                Golf 2 Go started in 2008 as New Zealand&apos;s first portable mini golf company,
                based in Palmerston North. Today we hire out portable mini golf and mini putt courses
                for birthdays, school galas, fundraisers, weddings, corporate events and team
                building — delivered and set up anywhere in New Zealand. Our goal is simple: easy,
                memorable fun for every kind of event.
              </Text>
              <div className="mt-8">
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-background-secondary py-16 md:py-24" itemScope itemType="https://schema.org/ItemList">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2">
              Why People Choose Golf 2 Go
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              What makes our portable mini golf hire so popular
            </Text>
          </div>
          <ul className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
            {values.map((value, index) => (
              <li key={value.name} itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={String(index + 1)} />
                <h3 className="text-xl font-semibold" itemProp="name">
                  {value.name}
                </h3>
                <p className="mt-2 text-foreground-secondary" itemProp="description">
                  {value.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Ready to Book Your Mini Golf Hire?" withContact>
        Tell us about your event and we&apos;ll send you a free, no-obligation quote.
      </CtaBand>

      {/* SEO Content Section */}
      <section className="py-12 bg-background">
        <Container size="xl">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <Text variant="lg" className="text-foreground-secondary">
              Golf 2 Go is New Zealand&apos;s original portable mini golf and mini putt hire company,
              based in Palmerston North and serving events nationwide.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              We deliver and set up complete mini golf courses for birthdays, parties, school galas,
              fundraisers, weddings, corporate functions and team building — indoors or outdoors.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              From Wellington and the Manawatu to New Plymouth and Taranaki, our portable mini golf
              hire makes any event more fun. Get in touch for a free quote.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
