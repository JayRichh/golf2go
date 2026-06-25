import { ArrowRight, Heart, Target, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import { generateAboutSchema, generateValuesSchema } from './schema';

export { generateMetadata } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

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
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt=""
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center min-h-[140px] flex flex-col justify-center py-8">
                <Text
                  variant="h1"
                  align="center"
                  className="text-primary-foreground"
                  itemProp="name"
                >
                  About Golf 2 Go — Portable Mini Golf &amp; Mini Putt Hire
                </Text>
                <Text
                  variant="xl"
                  className="mt-6 text-primary-foreground"
                  itemProp="description"
                >
                  New Zealand&apos;s first portable mini golf company. Since 2008 we&apos;ve brought
                  mini putt fun to parties, events and corporate functions right across the country.
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

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
      <section className="bg-background-secondary py-12 md:py-16" itemScope itemType="https://schema.org/ItemList">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" align="center" className="text-foreground">
              Why People Choose Golf 2 Go
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-6 max-w-2xl text-center text-foreground-secondary"
            >
              What makes our portable mini golf hire so popular
            </Text>
          </div>
          <div className="mx-auto mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <Card
                key={value.name}
                variant="elevated"
                interactive
                className="group flex w-full flex-col items-center text-center p-8"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <Text variant="h4" className="text-foreground mb-3" itemProp="name">
                  {value.name}
                </Text>
                <Text variant="base" className="text-foreground-secondary" itemProp="description">
                  {value.description}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-24">
        <GradientBackground variant="subtle">
          <Container size="xl" className="py-24">
            <div className="relative z-10">
              <Text
                variant="h2"
                align="center"
                className="pb-4 font-bold tracking-tight text-primary-foreground"
              >
                Ready to Book Your Mini Golf Hire?
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground"
              >
                Tell us about your event and we&apos;ll send you a free, no-obligation quote.
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="btn-primary inline-flex w-full sm:min-w-[200px] sm:w-auto items-center justify-center gap-2 px-8 py-3"
                >
                  <Text variant="lg">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex w-full sm:min-w-[200px] sm:w-auto items-center justify-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Text variant="lg">Contact Us</Text>
                </Link>
              </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent" />
          </Container>
        </GradientBackground>
      </section>

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
