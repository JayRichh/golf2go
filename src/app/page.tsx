import { ArrowRight, CheckCircle } from "lucide-react";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { CtaBand } from "~/components/CtaBand";
import { HeroActions } from "~/components/HeroActions";
import { PhotoHero } from "~/components/PhotoHero";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { PRICES_PATH } from "~/lib/event-types";
import { locations } from "~/lib/locations";

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
  },
  {
    name: "Parties, Events & Corporate",
    description: "Birthdays, galas, fundraisers, weddings, conferences and team building — mini golf suits them all.",
  },
  {
    name: "Nationwide Hire",
    description: "Portable mini golf and mini putt hire delivered across New Zealand.",
  },
];

const offers = [
  {
    title: "Hole in One Challenge",
    description:
      "Our single-hole challenge — perfect for parties, promotions, school galas and corporate events. Includes delivery and setup.",
    points: ["Quick to set up, big on fun", "Great for prizes and promotions", "Full equipment and support"],
    image: "/9-portable-mini-putt.jpg",
    alt: "Professional portable mini putt course",
  },
  {
    title: "3, 6 & 9 Hole Courses",
    description:
      "Multi-hole portable mini golf courses for bigger events and functions. Multiple layouts and obstacles available.",
    points: ["Multiple course configurations", "Indoor and outdoor setups", "Delivery, setup and pack-down"],
    image: "/1-Twin-Hedges-3-3m-x-75m.jpg",
    alt: "Twin Hedges",
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

// Location pages not already represented by a region card above: skip pages a
// card links to, and pages in the same region as one (e.g. Taranaki vs New Plymouth).
const cardPaths = new Set(serviceAreas.map((a) => a.href));
const cardRegions = new Set(
  locations.filter((l) => cardPaths.has(`/${l.path}`)).map((l) => l.region),
);
const extraAreas = locations.filter(
  (l) => !cardPaths.has(`/${l.path}`) && !cardRegions.has(l.region),
);

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
      <PhotoHero image="/2-parties-and-events-golf2go-portable-miniature-golf.jpg">
        <Text variant="h1" className="font-bold tracking-tight">
          Portable Mini Golf &amp; Mini Putt Hire in New Zealand
        </Text>
        <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
          New Zealand&apos;s first portable mini golf company — bringing the fun to your
          events since 2008, serving Wellington, Palmerston North, New Plymouth &amp;
          Taranaki.
        </Text>
        <HeroActions coursesLabel="View Our Mini Golf Courses" />
      </PhotoHero>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" className="font-bold tracking-tight">
              Mini Putt &amp; Portable Mini Golf Hire
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Choose between our Hole in One Challenge or 3, 6 and 9 hole courses
            </Text>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2">
            {offers.map((offer) => (
              <div key={offer.title}>
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                  <Image
                    src={offer.image}
                    alt={offer.alt}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-tight">
                  {offer.title}
                </h3>
                <p className="mt-3 text-foreground-secondary">{offer.description}</p>
                <ul className="mt-6 space-y-3">
                  {offer.points.map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/book" className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3">
              <Text variant="lg">Get a Hire Quote</Text>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
            <Text variant="lg" className="mx-auto mt-8 max-w-2xl text-foreground-secondary">
              Hire starts from $190. See our{" "}
              <Link href={`/${PRICES_PATH}`} className="text-primary underline hover:no-underline">
                mini golf hire prices
              </Link>{" "}
              for the full price ranges and what affects them.
            </Text>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-background-secondary py-16 md:py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" className="font-bold tracking-tight">
              Why Choose Golf 2 Go
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Easy, fun portable mini golf hire for events of every size
            </Text>
          </div>

          <dl className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name}>
                <dt className="text-xl font-semibold">{feature.name}</dt>
                <dd className="mt-2 text-foreground-secondary">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Service Areas Section - Moved higher for better SEO */}
      <section className="py-16 md:py-24">
        <Container size="xl">
          <div className="text-center">
            <Text variant="h2" className="font-bold tracking-tight">
              Mini Golf Hire Across New Zealand
            </Text>
            <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
              Portable mini golf and mini putt hire covering every major region
            </Text>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-x-12 gap-y-10 md:grid-cols-2">
            {serviceAreas.map((area) => (
              <div key={area.title}>
                <h3 className="text-xl font-semibold">
                  <Link href={area.href} className="text-primary underline hover:no-underline">
                    {area.title}
                  </Link>
                </h3>
                <p className="mt-2 text-foreground-secondary">{area.subtitle}</p>
                <p className="mt-2 text-sm font-medium">{area.places.join(", ")}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Text variant="lg" className="mx-auto max-w-3xl text-foreground-secondary">
              We also travel to{" "}
              {extraAreas.map((l, i) => (
                <span key={l.path}>
                  <Link href={`/${l.path}`} className="text-primary underline hover:no-underline">
                    {l.name}
                  </Link>
                  {i < extraAreas.length - 2 ? ", " : i === extraAreas.length - 2 ? " and " : ""}
                </span>
              ))}
              . Our portable mini golf hire delivers mini putt setups for parties,{" "}
              <Link href="/mini-golf-birthday-parties" className="text-primary underline hover:no-underline">
                birthdays
              </Link>
              ,{" "}
              <Link href="/mini-golf-school-galas-fundraisers" className="text-primary underline hover:no-underline">
                school galas and fundraisers
              </Link>
              ,{" "}
              <Link href="/mini-golf-weddings" className="text-primary underline hover:no-underline">
                weddings
              </Link>
              ,{" "}
              <Link href="/mini-golf-corporate-events" className="text-primary underline hover:no-underline">
                corporate events and team building
              </Link>
              . We also specialise in indoor mini golf — perfect for venues and conferences. Browse
              our{" "}
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

      <CtaBand title="Ready to Book Your Mini Golf Hire?" withContact>
        Tell us about your event and we&apos;ll send you a free, no-obligation quote.
      </CtaBand>
    </div>
  );
}
