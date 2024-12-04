import { ArrowRight, CheckCircle } from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Our Courses - Golf 2 Go",
    description:
      "Explore our range of portable mini golf courses. Choose from Hole in One Challenge or 3, 6, and 9 hole courses.",
  };
}

interface Course {
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface CourseType {
  name: string;
  description: string;
  image: string;
}

const courses: Course[] = [
  {
    title: "Hole in One Challenge",
    description:
      "A great option for office parties and school gala day competitions. Simply hire one hole for the ultimate challenge!",
    features: [
      "Perfect for competitions",
      "Easy to set up",
      "Ideal for limited space",
      "Great for team building",
    ],
    image: "/2-parties-and-events-golf2go-portable-miniature-golf.jpg",
  },
  {
    title: "3, 6 or 9 Hole Courses",
    description: "This course is self-operated and is freighted directly to your desired location.",
    features: [
      "Multiple course options",
      "Self-operated system",
      "Direct freight delivery",
      "Indoor or outdoor use",
    ],
    image: "/3-fun-portable-mini-golf.jpg",
  },
];

const courseTypes: CourseType[] = [
  {
    name: "Twin Hedges",
    description: "A challenging course with strategic hedge placements",
    image: "/1-Twin-Hedges-3-3m-x-75m.jpg",
  },
  {
    name: "Triple Kidney",
    description: "Features multiple curved sections for added difficulty",
    image: "/10-Triple-Kidney-3-4m-x-9m.jpg",
  },
  {
    name: "Slalom",
    description: "A winding course that tests precision and control",
    image: "/12-Slalom-2-8m-x-9m.jpg",
  },
  {
    name: "Bridge over the River",
    description: "Elevated bridge section adds an exciting challenge",
    image: "/19-Bridge-over-the-River-3-3m-x-9m.jpg",
  },
  {
    name: "Multi Tunnels",
    description: "Multiple tunnel obstacles for varied gameplay",
    image: "/15-Multi-tunnels-2-8m-x-9m.jpg",
  },
  {
    name: "Holy Bridge",
    description: "Combines elevation changes with precise targeting",
    image: "/16-Holy-Bridge-3-3m-x-75m.jpg",
  },
];

export default function CoursesPage() {
  return (
    <div>
      {/* Header */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <Container size="xl" className="py-32 md:py-40">
            <div className="text-center">
              <Text variant="h1" align="center" className="tracking-tight text-primary-foreground">
                Our Courses
              </Text>
              <Text variant="xl" className="mx-auto mt-6 max-w-2xl text-primary-foreground/90">
                Choose from our selection of portable mini golf courses, perfect for any event or
                occasion.
              </Text>
            </div>
          </Container>
        </GradientBackground>
      </section>

      {/* Main Course Options */}
      <section className="py-24">
        <Container size="xl">
          <div className="text-center mb-16">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Course Packages
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
            >
              Select the perfect package for your event
            </Text>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {courses.map((course) => (
              <Card
                key={course.title}
                variant="elevated"
                interactive
                className="group overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition duration-500 will-change-transform group-hover:scale-105"
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
                      <Text variant="base">Book This Course</Text>
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
      <section className="py-24 bg-background-secondary">
        <Container size="xl">
          <div className="text-center mb-16">
            <Text variant="h2" align="center" className="font-bold tracking-tight text-foreground">
              Course Types Available
            </Text>
            <Text
              variant="lg"
              className="mx-auto mt-4 max-w-2xl text-center text-foreground-secondary"
            >
              Explore our variety of unique course layouts and challenges
            </Text>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {courseTypes.map((type) => (
              <Card
                key={type.name}
                variant="elevated"
                interactive
                className="group overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover transition duration-500 will-change-transform group-hover:scale-105"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="absolute inset-0 flex items-end p-6">
                      <div className="translate-y-4 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Text variant="lg" className="font-medium text-white">
                          {type.name}
                        </Text>
                        <Text variant="base" className="mt-2 text-white/90">
                          {type.description}
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
                Ready to Book Your Course?
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-primary-foreground/90"
              >
                Contact us today to discuss your event requirements and receive a customized quote.
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
