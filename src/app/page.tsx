import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Users, MapPin, CheckCircle, ArrowRight } from 'lucide-react';
import { Container } from '~/components/ui/Container';
import { GradientBackground } from '~/components/ui/GradientBackground';
import { Text } from '~/components/ui/Text';
import { Card, CardHeader, CardContent } from '~/components/ui/Card';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Golf 2 Go - Professional Portable Mini Golf Solutions',
    description: 'New Zealand\'s premier portable mini golf hire service. Perfect for corporate events, team building, and professional functions.',
  };
}

const features = [
  {
    name: 'Efficient Setup',
    description: 'Professional installation with minimal disruption to your event schedule.',
    icon: Calendar,
  },
  {
    name: 'Corporate Events',
    description: 'Tailored solutions for team building and corporate functions.',
    icon: Users,
  },
  {
    name: 'Nationwide Service',
    description: 'Professional delivery and setup across New Zealand.',
    icon: MapPin,
  },
];

const benefits = [
  'Professional event management',
  'Corporate team building solutions',
  'Customizable course layouts',
  'Indoor and outdoor capabilities',
  'Full setup and support service',
  'Comprehensive event planning',
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="subtle">
          <Container size="xl" className="py-24 lg:py-32">
            <div className="flex flex-col items-center text-center">
              <Text variant="h1" align="center" className="font-bold tracking-tight text-primary-foreground">
                Welcome to Golf2Go
              </Text>
              <Text variant="xl" className="mx-auto mt-6 max-w-2xl text-primary-foreground/90">
                New Zealand's first portable mini golf company, bringing fun to your events since 2008.
              </Text>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-3"
                >
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
              <Card
                key={feature.name}
                variant="elevated"
                interactive
                className="group"
              >
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

      {/* Benefits Section */}
      <section className="py-24">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="flex flex-col justify-center">
              <Text variant="h2"  className="font-bold tracking-tight text-foreground">
                Comprehensive Event Solutions
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                Our professional event solutions are designed to deliver exceptional experiences for corporate functions and team building activities.
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
                <Link
                  href="/book"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <Text variant="base">Request Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
            <Card variant="elevated" className="relative aspect-[4/3] overflow-hidden p-0">
              <Image
                src="/2-parties-and-events-golf2go-portable-miniature-golf.jpg"
                alt="Professional event setup"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative bg-primary py-24">
        <GradientBackground variant="subtle">
          <Container size="xl" className="py-24">
              <div className="relative z-10">
                <Text variant="h2" align="center" className="pb-4 font-bold tracking-tight text-primary-foreground">
                  Ready to Transform Your Event?
                </Text>
                <Text variant="lg" className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/90">
                  Contact our professional team to discuss your event requirements and receive a customized quote.
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
