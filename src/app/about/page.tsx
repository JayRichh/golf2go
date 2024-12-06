import { ArrowRight, Heart, Target, Trophy } from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About Golf 2 Go - Our Story & Mission",
    description:
      "Learn about Golf 2 Go, New Zealand's premier portable mini golf hire service. Discover our journey and commitment to bringing fun to your events.",
  };
}

const values = [
  {
    name: "Excellence",
    description: "We strive to deliver the highest quality mini golf experience at every event.",
    icon: Trophy,
  },
  {
    name: "Customer Focus",
    description:
      "Your satisfaction is our top priority. We go above and beyond to exceed expectations.",
    icon: Heart,
  },
  {
    name: "Innovation",
    description:
      "Continuously improving our courses and services to provide the best possible experience.",
    icon: Target,
  },
];

export default function AboutPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Golf 2 Go team"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center py-12">
                <Text variant="h1" align="center" className="text-primary-foreground">
                  Our Story
                </Text>
                <Text variant="xl" className="mt-6 pb-8 text-primary-foreground/90">
                  Founded with a passion for bringing joy and entertainment to events across New
                  Zealand, Golf 2 Go has grown from a simple idea into the country's leading
                  portable mini golf provider.
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <Container size="xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
              <Image
                src="/4-portable-miniature-golf.jpg"
                alt="Professional mini golf setup"
                fill
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <Text variant="h2" className="text-foreground">
                Our Mission
              </Text>
              <Text variant="lg" className="mt-6 text-foreground-secondary">
                To create memorable experiences through innovative portable mini golf solutions,
                bringing people together and making every event special. We believe in the power of
                play to connect people and create lasting memories.
              </Text>
              <div className="mt-8">
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Get Started</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Values Section */}
      <section className="bg-background-secondary py-12 md:py-16">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" align="center" className="text-foreground">
              Our Values
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-6 max-w-2xl text-center text-foreground-secondary"
            >
              These core values guide everything we do at Golf 2 Go.
            </Text>
          </div>
          <div className="mx-auto mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value) => (
              <Card
                key={value.name}
                variant="elevated"
                interactive
                className="group flex w-full flex-col items-center text-center p-8"
              >
                <value.icon className="h-12 w-12 text-primary mb-4" />
                <Text variant="h4" className="text-foreground mb-3">
                  {value.name}
                </Text>
                <Text variant="base" className="text-foreground-secondary">
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
                Ready to Create Memories?
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/90"
              >
                Let us help make your next event unforgettable with our portable mini golf
                experience.
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/book"
                  className="btn-primary inline-flex min-w-[200px] items-center justify-center gap-2 px-8 py-3"
                >
                  <Text variant="lg">Book Now</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="btn-outline inline-flex min-w-[200px] items-center justify-center gap-2 border-primary-foreground/20 px-8 py-3 text-primary-foreground hover:bg-primary-foreground/10"
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
