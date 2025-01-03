'use client';

import { useEffect } from 'react';
import { ArrowRight, Heart, Target, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import { generateAboutSchema, generateValuesSchema } from './schema';

const baseUrl = 'https://golf2go.co.nz';

const values = [
  {
    name: "Professional Excellence",
    description: "We deliver premium quality corporate entertainment experiences with unmatched professionalism.",
    icon: Trophy,
  },
  {
    name: "Executive Focus",
    description: "Dedicated to exceeding expectations for corporate clients and business events.",
    icon: Heart,
  },
  {
    name: "Business Innovation",
    description: "Continuously enhancing our premium solutions for corporate entertainment needs.",
    icon: Target,
  },
];

export default function AboutPage() {
  // Add schema.org markup
  useEffect(() => {
    const aboutSchema = generateAboutSchema(baseUrl);
    const valuesSchema = generateValuesSchema(values);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([aboutSchema, valuesSchema]);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Premium Corporate Entertainment Solutions by Golf 2 Go NZ"
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
                  className="text-primary-foreground"
                  itemProp="name"
                >
                  Professional Entertainment Solutions
                </Text>
                <Text 
                  variant="xl" 
                  className="mt-6 text-primary-foreground/90"
                  itemProp="description"
                >
                  New Zealand's leading provider of premium corporate entertainment and event solutions. 
                  Established in 2008, we've grown to become the trusted partner for business events nationwide.
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
                alt="Professional Corporate Event Solutions"
                fill
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center">
              <Text variant="h2" className="text-foreground">
                Corporate Excellence
              </Text>
              <Text 
                variant="lg" 
                className="mt-6 text-foreground-secondary"
                itemProp="description"
              >
                Our mission is to deliver exceptional corporate entertainment experiences through innovative 
                portable solutions. We specialize in premium event entertainment, professional team building 
                activities, and executive function solutions. With a focus on business excellence, we create 
                memorable experiences that enhance corporate culture and professional relationships.
              </Text>
              <div className="mt-8">
                <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                  <Text variant="base">Request Corporate Booking</Text>
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
              Professional Standards
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-6 max-w-2xl text-center text-foreground-secondary"
            >
              Our commitment to corporate excellence is guided by these core principles
            </Text>
          </div>
          <div className="mx-auto mt-16 grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
                Elevate Your Corporate Events
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/90"
              >
                Partner with New Zealand's leading corporate entertainment provider for premium event solutions.
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
                  <Text variant="lg">Corporate Inquiries</Text>
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
              Golf 2 Go NZ is New Zealand's premier provider of professional corporate entertainment solutions, 
              specializing in premium portable mini golf experiences for business events and functions.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Our executive-level service includes comprehensive event planning, professional setup, and 
              dedicated support for corporate functions, team building activities, and business entertainment needs.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              With nationwide coverage and a focus on corporate excellence, we deliver premium entertainment 
              solutions that enhance professional events and business relationships across New Zealand.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
