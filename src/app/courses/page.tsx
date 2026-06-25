import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import { generateCoursesSchema, generateCourseTypesSchema, generateServiceSchema } from './schema';
import { metadata } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

export { metadata };

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
    title: "Hole in One Challenge",
    description: "Our single-hole challenge — perfect for parties, birthdays, school galas, promotions and corporate events. Quick to set up and a hit with all ages.",
    features: [
      "Delivery, setup and pack-down",
      "Great for prizes and promotions",
      "Indoor or outdoor",
      "Suitable for all ages",
    ],
    image: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
    priceRange: "$190 - $500",
    suitableFor: ["Parties & Birthdays", "Fundraisers", "Corporate Events"]
  },
  {
    title: "3, 6 & 9 Hole Courses",
    description: "Multi-hole portable mini golf courses for bigger events and functions. Mix and match layouts and obstacles for the perfect mini putt experience.",
    features: [
      "Multiple course configurations",
      "Indoor and outdoor setups",
      "Full delivery and setup",
      "Ideal for larger groups",
    ],
    image: "/3-fun-portable-mini-golf.jpg",
    priceRange: "$575 - $2500",
    suitableFor: ["Big Events", "School Galas", "Corporate Functions"]
  },
];

const courseTypes: CourseType[] = [
  {
    name: "Twin Hedges",
    description: "Portable course with strategic hedge placements for a fun challenge",
    image: "/1-Twin-Hedges-3-3m-x-75m.jpg",
    dimensions: "3.3m x 7.5m",
    features: ["Classic Design", "Strategic Layout", "All Ages"]
  },
  {
    name: "Bridge over the River",
    description: "Crowd-pleasing course with an elevated bridge section",
    image: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
    dimensions: "3.3m x 9m",
    features: ["Elevated Bridge", "Eye-Catching", "Fun Challenge"]
  },
  {
    name: "Multi Tunnels",
    description: "Course with multiple tunnel obstacles for extra excitement",
    image: "/15-Multi-tunnels-2-8m-x-9m.jpg",
    dimensions: "2.8m x 9m",
    features: ["Tunnel Obstacles", "Great for Groups", "Family Friendly"]
  },
  {
    name: "Holy Bridge",
    description: "A fun combination of elevation and precision challenges",
    image: "/16-Holy-Bridge-3-3m-x-75m.jpg",
    dimensions: "3.3m x 7.5m",
    features: ["Elevated Design", "Precision Play", "All Ages"]
  },
  {
    name: "Triple Kidney",
    description: "Flowing course with multiple curved sections",
    image: "/10-Triple-Kidney-3-4m-x-9m.jpg",
    dimensions: "3.4m x 9m",
    features: ["Curved Layout", "Fun for Everyone", "Popular Choice"]
  },
  {
    name: "Slalom",
    description: "Winding course that keeps every putt interesting",
    image: "/12-Slalom-2-8m-x-9m.jpg",
    dimensions: "2.8m x 9m",
    features: ["Winding Design", "Challenging", "Family Friendly"]
  },
];

export default function CoursesPage() {
  // Generate schema markup for server-side rendering
  const coursesSchema = generateCoursesSchema(baseUrl);
  const courseTypesSchema = generateCourseTypesSchema(baseUrl);
  const serviceSchema = generateServiceSchema(baseUrl);

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([coursesSchema, courseTypesSchema, serviceSchema])
        }}
      />
      
    <div className="overflow-x-hidden">
      {/* Header */}
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
                  className="tracking-tight text-primary-foreground"
                  itemProp="name"
                >
                  Portable Mini Golf Courses & Mini Putt Solutions
                </Text>
                <Text
                  variant="xl"
                  className="mt-6 text-primary-foreground/90"
                  itemProp="description"
                >
                  Professional portable mini golf course hire and mini putt setups featuring indoor mini golf options for corporate events across New Zealand
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
              Portable Mini Golf Course Packages
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
              >
              Portable mini golf hire and mini putt courses for parties, events and corporate functions — indoor or outdoor
            </Text>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <Card
                key={course.title}
                variant="elevated"
                interactive
                className="group w-full overflow-hidden"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
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
                      <Text variant="base">Get a Hire Quote</Text>
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
              Mini Putt Course Collection
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
            >
              Portable mini golf course designs perfect for indoor mini golf setups and outdoor mini putt events
            </Text>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
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
                Ready to Book Your Mini Golf Hire?
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground"
              >
                Tell us about your event and we&apos;ll send you a free, no-obligation quote
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
              Our portable mini golf courses are designed for fun — perfect for parties, birthdays,
              fundraisers, school galas, weddings and corporate events across New Zealand.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Choose the Hole in One Challenge or a 3, 6 or 9 hole course, indoors or outdoors. We
              deliver, set up and pack down everything so you can relax and enjoy the day.
            </Text>
            <Text variant="base" className="text-foreground-secondary">
              Mix and match course designs to suit your venue and group size. Get in touch for a
              free quote on portable mini golf and mini putt hire for your event.
            </Text>
          </div>
        </Container>
        </section>
      </div>
    </>
  );
}
