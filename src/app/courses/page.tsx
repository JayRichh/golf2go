'use client';

import { useEffect } from 'react';
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import { generateCoursesSchema, generateCourseTypesSchema, generateServiceSchema } from './schema';

const baseUrl = 'https://golf2go.co.nz';

interface Course {
  title: string;
  description: string;
  features: string[];
  image: string;
  priceRange?: string;
  suitableFor?: string[];
}

interface CourseType {
  name: string;
  description: string;
  image: string;
  dimensions: string;
  features?: string[];
  suitableFor?: string[];
}

const courses: Course[] = [
  {
    title: "Premium Single Hole Challenge",
    description: "Professional entertainment solution perfect for corporate competitions, office events, and executive functions. Features our signature premium setup and dedicated event support.",
    features: [
      "Professional event management",
      "Corporate-grade equipment",
      "Flexible setup options",
      "Expert event support",
    ],
    image: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
    priceRange: "$190 - $500",
    suitableFor: ["Corporate Events", "Executive Functions", "Professional Competitions"]
  },
  {
    title: "Executive Course Package",
    description: "Comprehensive corporate entertainment solution with multiple course configurations. Premium setup and professional management for high-end business events.",
    features: [
      "Multiple premium layouts",
      "Professional operation",
      "Corporate event support",
      "Executive-level service",
    ],
    image: "/3-fun-portable-mini-golf.jpg",
    priceRange: "$575 - $2500",
    suitableFor: ["Corporate Functions", "Executive Events", "Business Entertainment"]
  },
];

const courseTypes: CourseType[] = [
  {
    name: "Twin Hedges Executive Course",
    description: "Premium course featuring strategic hedge placements for corporate challenges",
    image: "/1-Twin-Hedges-3-3m-x-75m.jpg",
    dimensions: "3.3m x 7.5m",
    features: ["Professional Design", "Strategic Layout", "Corporate-Grade Equipment"]
  },
  {
    name: "Bridge over the River Premium Course",
    description: "Signature elevated bridge section for executive entertainment",
    image: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
    dimensions: "3.3m x 9m",
    features: ["Elevated Design", "Professional Setup", "Executive Challenge"]
  },
  {
    name: "Multi Tunnels Professional Course",
    description: "Advanced course with premium tunnel obstacles for corporate events",
    image: "/15-Multi-tunnels-2-8m-x-9m.jpg",
    dimensions: "2.8m x 9m",
    features: ["Complex Layout", "Professional Challenge", "Team Building Focus"]
  },
  {
    name: "Holy Bridge Business Course",
    description: "Premium combination of elevation and precision challenges",
    image: "/16-Holy-Bridge-3-3m-x-75m.jpg",
    dimensions: "3.3m x 7.5m",
    features: ["Executive Design", "Professional Setup", "Corporate Entertainment"]
  },
  {
    name: "Triple Kidney Corporate Course",
    description: "Professional course with multiple curved sections",
    image: "/10-Triple-Kidney-3-4m-x-9m.jpg",
    dimensions: "3.4m x 9m",
    features: ["Premium Layout", "Corporate Events", "Professional Challenge"]
  },
  {
    name: "Slalom Executive Course",
    description: "Premium winding course for corporate entertainment",
    image: "/12-Slalom-2-8m-x-9m.jpg",
    dimensions: "2.8m x 9m",
    features: ["Executive Design", "Professional Setup", "Business Events"]
  },
];

export default function CoursesPage() {
  // Add schema.org markup
  useEffect(() => {
    const coursesSchema = generateCoursesSchema(baseUrl);
    const courseTypesSchema = generateCourseTypesSchema(baseUrl);
    const serviceSchema = generateServiceSchema(baseUrl);
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([coursesSchema, courseTypesSchema, serviceSchema]);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Header */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/3-fun-portable-mini-golf.jpg"
                alt="Premium Corporate Entertainment Solutions"
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
                  className="tracking-tight text-primary-foreground"
                  itemProp="name"
                >
                  Professional Entertainment Solutions
                </Text>
                <Text 
                  variant="xl" 
                  className="mt-6 text-primary-foreground/90"
                  itemProp="description"
                >
                  Discover our premium range of corporate entertainment packages and professional event solutions
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Main Course Options */}
      <section className="py-24" itemScope itemType="https://schema.org/ProductCollection">
        <Container size="xl">
          <div className="text-center mb-16">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Premium Entertainment Packages
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
            >
              Professional solutions tailored for corporate events and business functions
            </Text>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <Card
                key={course.title}
                variant="elevated"
                interactive
                className="group w-full overflow-hidden"
                itemScope
                itemType="https://schema.org/Product"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="h-full w-full object-cover transition duration-500 will-change-transform group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                    itemProp="image"
                  />
                </div>
                <CardHeader
                  title={course.title}
                  subtitle={course.description}
                  className="text-center"
                />
                <CardContent>
                  <div className="space-y-4">
                    {course.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                        <Text variant="base" className="text-foreground-secondary">
                          {feature}
                        </Text>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex justify-center">
                    <Link href="/book" className="btn-primary inline-flex items-center gap-2">
                      <Text variant="base">Request Corporate Booking</Text>
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Course Types Grid */}
      <section className="py-24 bg-background-secondary" itemScope itemType="https://schema.org/ItemList">
        <Container size="xl">
          <div className="text-center mb-16">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Premium Course Selection
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
            >
              Professional course designs for corporate events and business functions
            </Text>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseTypes.map((type, index) => (
              <Card
                key={type.name}
                variant="elevated"
                interactive
                className="group w-full overflow-hidden"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(index + 1)} />
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="h-full w-full object-cover transition duration-500 will-change-transform group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Text variant="lg" className="font-medium text-white" itemProp="name">
                          {type.name}
                        </Text>
                        <Text variant="base" className="mt-2 text-white/90" itemProp="description">
                          {type.description}
                        </Text>
                        <Text variant="sm" className="mt-2 text-white/80">
                          Dimensions: {type.dimensions}
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
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
                Contact our professional team to discuss your corporate entertainment requirements
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
              Discover our premium range of professional entertainment solutions designed specifically for 
              corporate events, business functions, and executive entertainment needs.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Each course is meticulously designed to deliver exceptional corporate entertainment experiences, 
              featuring professional-grade equipment and expert event management services.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Our comprehensive packages include professional setup, dedicated support, and customizable 
              configurations to suit various corporate venues and business event requirements.
            </Text>
          </div>
        </Container>
      </section>
    </div>
  );
}
