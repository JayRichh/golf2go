import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PhotoHero } from "~/components/PhotoHero";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { generateCoursesSchema, generateCourseTypesSchema, generateServiceSchema } from './schema';
import { SITE_URL } from '~/lib/site';
import { metadata } from './metadata';

const baseUrl = SITE_URL;

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
      <PhotoHero image="/3-fun-portable-mini-golf.jpg">
        <Text variant="h1" className="tracking-tight">
          Portable Mini Golf Courses & Mini Putt Solutions
        </Text>
        <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
          Professional portable mini golf course hire and mini putt setups featuring indoor mini golf options for corporate events across New Zealand
        </Text>
      </PhotoHero>

      {/* Main Course Options */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="mb-12 text-center">
            <Text variant="h2" className="font-bold tracking-tight">
              Portable Mini Golf Course Packages
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Portable mini golf hire and mini putt courses for parties, events and corporate functions — indoor or outdoor
            </Text>
          </div>
          <div className="grid gap-12 lg:grid-cols-2">
            {courses.map((course) => (
              <div key={course.title}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">
                  {course.title}
                </h3>
                <p className="mt-3 text-foreground-secondary">{course.description}</p>
                <ul className="mt-6 space-y-3">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-foreground-secondary">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary mt-8 inline-flex items-center gap-2">
                  <Text variant="base">Get a Hire Quote</Text>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Course Types Grid */}
      <section className="bg-background-secondary py-16 md:py-24" itemScope itemType="https://schema.org/ItemList">
        <Container size="xl">
          <div className="mb-12 text-center">
            <Text variant="h2" className="font-bold tracking-tight">
              Mini Putt Course Collection
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Portable mini golf course designs perfect for indoor mini golf setups and outdoor mini putt events
            </Text>
          </div>
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {courseTypes.map((type, index) => (
              <li key={type.name} itemScope itemType="https://schema.org/ListItem">
                <meta itemProp="position" content={String(index + 1)} />
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <div className="mt-3">
                  <Text variant="lg" className="font-semibold" itemProp="name">
                    {type.name}
                  </Text>
                  <Text variant="sm" className="block font-medium text-primary">
                    Dimensions: {type.dimensions}
                  </Text>
                  <Text variant="base" className="mt-1 text-foreground-secondary" itemProp="description">
                    {type.description}
                  </Text>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 text-primary-foreground md:py-24">
        <Container size="xl" className="text-center">
          <Text variant="h2" className="font-bold tracking-tight">
            Ready to Book Your Mini Golf Hire?
          </Text>
          <Text variant="lg" className="mx-auto mt-4 max-w-2xl">
            Tell us about your event and we&apos;ll send you a free, no-obligation quote
          </Text>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/book"
              className="btn-inverse inline-flex w-full items-center justify-center gap-2 px-8 py-3 sm:w-auto sm:min-w-[200px]"
            >
              <Text variant="lg">Get a Hire Quote</Text>
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="btn-outline-inverse inline-flex w-full items-center justify-center gap-2 px-8 py-3 sm:w-auto sm:min-w-[200px]"
            >
              <Text variant="lg">Contact Us</Text>
            </Link>
          </div>
        </Container>
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
