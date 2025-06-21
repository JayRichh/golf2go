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
    name: "Efficient Setup",
    description: "Professional installation with minimal disruption to your event schedule.",
    icon: Calendar,
  },
  {
    name: "Corporate Events",
    description: "Tailored solutions for team building and corporate functions.",
    icon: Users,
  },
  {
    name: "Nationwide Service",
    description: "Professional delivery and setup across New Zealand.",
    icon: MapPin,
  },
];

const benefits = [
  "Professional event management",
  "Corporate team building solutions",
  "Customizable course layouts",
  "Indoor and outdoor capabilities",
  "Full setup and support service",
  "Comprehensive event planning",
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
                  text: "Portable mini golf is a professional mobile mini putt service that brings complete mini golf courses to your location. Our portable mini golf hire includes professional setup, high-quality courses, and full equipment rental for events across New Zealand."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Wellington?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide mini golf Wellington services with full portable mini golf hire across the Wellington region. Our mobile mini golf setup covers all Wellington suburbs and surrounding areas."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Palmerston North?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Absolutely! We offer indoor mini golf Palmerston North services and portable mini golf hire throughout the Manawatu region. Palmerston North is one of our key service areas with regular mini golf setups."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve New Plymouth?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we provide New Plymouth mini golf services and portable mini golf hire across Taranaki. Our mobile mini golf courses are perfect for events in New Plymouth and surrounding areas."
                }
              },
              {
                "@type": "Question",
                name: "Do you serve Taranaki?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we serve all of Taranaki including New Plymouth, Stratford, and Hawera. Our portable mini golf hire covers the entire Taranaki region with professional mini golf setup and delivery."
                }
              },
              {
                "@type": "Question",
                name: "How much does mini golf hire cost?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Mini golf hire costs start from $190 NZD for basic setups. Pricing varies based on course size, duration, location, and additional services. Contact us for a customized portable mini golf hire quote for your event."
                }
              },
              {
                "@type": "Question",
                name: "Do you provide indoor mini golf options?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we specialize in indoor mini golf setups perfect for venues, conferences, and corporate events. Our portable mini golf courses work excellently indoors with professional setup and compact designs."
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
                alt="Golf 2 Go events"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center h-[180px] flex flex-col justify-center">
                <Text
                  variant="h1"
                  align="center"
                  className="font-bold tracking-tight text-primary-foreground"
                >
                  Welcome to Golf2Go
                </Text>
                <Text variant="xl" className="mx-auto mt-6 text-primary-foreground/90">
                  New Zealand's first portable mini golf company, bringing fun to your events since
                  2008.
                </Text>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="/book" className="btn-primary inline-flex items-center gap-2 px-8 py-3">
                    <Text variant="lg">Request Quote</Text>
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                  <Link
                    href="/courses"
                    className="btn-outline inline-flex items-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Text variant="lg">View Solutions</Text>
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
              Professional Event Solutions
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              You can choose between our Hole in One Challenge or 3, 6 or 9 hole courses
            </Text>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Corporate Package"
                subtitle="Perfect for team building and corporate events. Includes professional setup and event management."
              />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Professional event coordination</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Customizable course layouts</Text>
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
                  <Text variant="base">Request Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </CardContent>
            </Card>

            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Event Package"
                subtitle="Comprehensive solutions for large events and functions. Multiple course options available."
              />
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Multiple course configurations</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Professional installation</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <Text variant="base">Event management support</Text>
                  </div>
                </div>
                <Link
                  href="/book"
                  className="btn-primary mt-8 inline-flex items-center justify-center gap-2"
                >
                  <Text variant="base">Request Quote</Text>
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
              Why Choose Golf2Go
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Professional solutions for your corporate events and functions
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
              Service Areas Across New Zealand
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Professional portable mini golf hire and mini putt services covering major regions
            </Text>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Wellington Region"
                subtitle="Mini golf Wellington services covering all suburbs. Indoor and outdoor portable mini golf hire with professional setup."
              />
              <CardContent>
                <div className="space-y-2">
                  <Text variant="sm" className="text-foreground-secondary">• Wellington City</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Lower Hutt</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Upper Hutt</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Porirua</Text>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Palmerston North"
                subtitle="Indoor mini golf Palmerston North and portable mini golf hire throughout Manawatu-Whanganui region."
              />
              <CardContent>
                <div className="space-y-2">
                  <Text variant="sm" className="text-foreground-secondary">• Palmerston North</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Feilding</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Levin</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Whanganui</Text>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="New Plymouth & Taranaki"
                subtitle="New Plymouth mini golf services and portable mini golf hire across all Taranaki region."
              />
              <CardContent>
                <div className="space-y-2">
                  <Text variant="sm" className="text-foreground-secondary">• New Plymouth</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Stratford</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Hawera</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Inglewood</Text>
                </div>
              </CardContent>
            </Card>

            <Card variant="elevated" interactive className="group">
              <CardHeader
                title="Nationwide Coverage"
                subtitle="Mini putt and portable mini golf hire services available across all New Zealand regions."
              />
              <CardContent>
                <div className="space-y-2">
                  <Text variant="sm" className="text-foreground-secondary">• Auckland</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Christchurch</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Hamilton</Text>
                  <Text variant="sm" className="text-foreground-secondary">• All Other Regions</Text>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Text variant="lg" className="mx-auto max-w-3xl text-foreground-secondary">
              Our portable mini golf hire service delivers professional mini putt setups for corporate events,
              team building activities, and special functions. We specialize in indoor mini golf solutions
              perfect for venues and conferences across New Zealand.
            </Text>
            <div className="mt-8">
              <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                <Text variant="base">Get Quote for Your Area</Text>
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
                Comprehensive Event Solutions
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                Our professional event solutions are designed to deliver exceptional experiences for
                corporate functions and team building activities.
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
                  <Text variant="base">Request Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Professional event setup"
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
                Ready to Transform Your Event?
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/90"
              >
                Contact our professional team to discuss your event requirements and receive a
                customized quote.
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="btn-primary inline-flex min-w-[200px] items-center justify-center gap-2 px-8 py-3"
                >
                  <Text variant="lg">Request Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex min-w-[200px] items-center justify-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Text variant="lg">Contact Sales</Text>
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
