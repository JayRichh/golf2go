import { ArrowRight, Calendar, CheckCircle, MapPin, Users } from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";

export async function generateMetadata(): Promise<Metadata> {
  const { generateMetadata } = await import('./page/metadata');
  const metadata = await generateMetadata();
  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: metadata.openGraph,
    twitter: metadata.twitter,
    alternates: metadata.alternates,
    metadataBase: metadata.metadataBase,
    robots: metadata.robots
  };
}

const features = [
  {
    name: "Full Delivery & Setup",
    description: "We deliver, set up and pack down the course — you just play. Minimal disruption to your event.",
    icon: Calendar,
  },
  {
    name: "Parties, Events & Corporate",
    description: "Birthdays, galas, fundraisers, weddings, conferences and team building — mini golf suits them all.",
    icon: Users,
  },
  {
    name: "Nationwide Hire",
    description: "Portable mini golf and mini putt hire delivered across New Zealand.",
    icon: MapPin,
  },
];

const benefits = [
  "Full delivery, setup and pack-down",
  "Indoor and outdoor courses",
  "3, 6 and 9 hole layouts",
  "Hole in One Challenge",
  "Great for all ages",
  "Parties, fundraisers & corporate events",
];

const serviceAreas = [
  {
    title: "Wellington Region",
    subtitle:
      "Mini golf Wellington hire covering all suburbs — indoor and outdoor portable mini putt with full setup.",
    href: "/mini-golf-wellington",
    places: ["Wellington City", "Lower Hutt", "Upper Hutt", "Porirua"],
  },
  {
    title: "Palmerston North",
    subtitle:
      "Indoor mini golf Palmerston North and portable mini golf hire throughout the Manawatu-Whanganui region.",
    href: "/mini-golf-palmerston-north",
    places: ["Palmerston North", "Feilding", "Levin", "Whanganui"],
  },
  {
    title: "New Plymouth & Taranaki",
    subtitle:
      "New Plymouth mini golf and portable mini golf hire across the whole Taranaki region.",
    href: "/mini-golf-new-plymouth",
    places: ["New Plymouth", "Stratford", "Hawera", "Inglewood"],
  },
  {
    title: "Nationwide Coverage",
    subtitle:
      "Mini putt and portable mini golf hire available across all New Zealand regions.",
    href: "/book",
    places: ["Auckland", "Christchurch", "Hamilton", "All Other Regions"],
  },
];

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is portable mini golf?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Portable mini golf is a mobile mini putt service that brings complete mini golf courses to your location. Our portable mini golf hire includes delivery, setup, high-quality courses and full equipment for events across New Zealand."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Wellington?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide mini golf Wellington hire with full portable mini golf setup across the Wellington region, including Lower Hutt, Upper Hutt and Porirua."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Palmerston North?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely. We offer indoor mini golf Palmerston North and portable mini golf hire throughout the Manawatu region. Palmerston North is our home base."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve New Plymouth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide New Plymouth mini golf and portable mini golf hire across Taranaki, perfect for events in New Plymouth, Stratford and Hawera."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Taranaki?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we serve all of Taranaki including New Plymouth, Stratford and Hawera. Our portable mini golf hire covers the entire region with delivery and setup."
                }
              },
              {
                "@type": "Question",
                name: "How much does mini golf hire cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mini golf hire starts from $190 NZD. Pricing depends on course size, hire duration and location. Contact us for a free portable mini golf hire quote for your event."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide indoor mini golf options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, our portable mini golf courses work brilliantly indoors — ideal for venues, conferences and corporate events — with compact designs and full setup."
                }
              }
            ]
          })
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/2-parties-and-events-golf2go-portable-miniature-golf.jpg"
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
                  className="font-bold tracking-tight text-primary-foreground"
                >
                  Portable Mini Golf &amp; Mini Putt Hire in New Zealand
                </Text>
                <Text variant="xl" className="mx-auto mt-6 text-primary-foreground">
                  New Zealand&apos;s first portable mini golf company — bringing the fun to your
                  events since 2008, serving Wellington, Palmerston North, New Plymouth &amp;
                  Taranaki.
                </Text>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/book" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
                    <Text variant="lg">Get a Hire Quote</Text>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/courses"
                    className="btn-outline inline-flex items-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Text variant="lg">View Our Mini Golf Courses</Text>
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Mini Putt &amp; Portable Mini Golf Hire
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Choose between our Hole in One Challenge or 3, 6 and 9 hole courses
            </Text>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Hole in One Challenge"
                subtitle="Our single-hole challenge — perfect for parties, promotions, school galas and corporate events. Includes delivery and setup."
              />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Quick to set up, big on fun</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Great for prizes and promotions</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Full equipment and support</Text>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
                >
                  <Text variant="base">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>

            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="3, 6 & 9 Hole Courses"
                subtitle="Multi-hole portable mini golf courses for bigger events and functions. Multiple layouts and obstacles available."
              />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Multiple course configurations</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Indoor and outdoor setups</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Delivery, setup and pack-down</Text>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
                >
                  <Text variant="base">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-background-secondary py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Why Choose Golf 2 Go
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Easy, fun portable mini golf hire for events of every size
            </Text>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.name} variant="elevated" interactive className="group">
                <CardHeader
                  title={feature.name}
                  subtitle={feature.description}
                  icon={<feature.icon className="h-8 w-8" />}
                />
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Service Areas Section - Moved higher for better SEO */}
      <section className="py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Mini Golf Hire Across New Zealand
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Portable mini golf and mini putt hire covering every major region
            </Text>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <Link key={area.title} href={area.href} className="group block h-full">
                <Card variant="elevated" interactive className="h-full">
                  <CardHeader title={area.title} subtitle={area.subtitle} />
                  <CardContent>
                    <div className="space-y-2">
                      {area.places.map((place) => (
                        <Text
                          key={place}
                          variant="sm"
                          className="text-foreground-secondary"
                        >
                          • {place}
                        </Text>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Text variant="lg" className="mx-auto max-w-3xl text-foreground-secondary">
              Our portable mini golf hire delivers mini putt setups for parties, birthdays,
              fundraisers, corporate events and team building. We also specialise in indoor mini
              golf — perfect for venues and conferences. Browse our{" "}
              <Link href="/gallery" className="text-primary underline hover:no-underline">
                event gallery
              </Link>{" "}
              to see the courses in action.
            </Text>
            <div className="mt-8">
              <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                <Text variant="base">Get a Quote for Your Area</Text>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="bg-background-secondary py-24">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                Everything Included in Your Hire
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                From delivery and setup to pack-down, we take care of it all so your event runs
                smoothly — indoors or out.
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <Text variant="base" className="text-foreground-secondary">
                      {benefit}
                    </Text>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Portable mini golf course set up for an event"
                fill
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
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
    </div>
  );
}
