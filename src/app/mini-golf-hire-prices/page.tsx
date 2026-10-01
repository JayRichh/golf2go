import { CheckCircle } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { CtaBand } from "~/components/CtaBand";
import { HeroActions } from "~/components/HeroActions";
import { PhotoHero } from "~/components/PhotoHero";
import { RelatedLinks } from "~/components/RelatedLinks";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { PRICES_PATH } from "~/lib/event-types";
import { ORG_ID, SITE_URL, absUrl, imageSize } from "~/lib/site";
import { generateMetadata as buildMetadata } from "../seo.config";

const PATH = PRICES_PATH;
const H1 = "Mini Golf Hire Prices NZ";
const DESCRIPTION =
  "Mini golf hire: 1 hole $190–$500, courses $575–$2500. We deliver, set up & pack down; delivery is priced by distance from Palmerston North, quoted separately.";

export const metadata: Metadata = buildMetadata({
  title: "Mini Golf Hire Prices NZ | From $190",
  description: DESCRIPTION,
  path: PATH,
  images: [{ url: "/3-fun-portable-mini-golf.jpg", ...imageSize("/3-fun-portable-mini-golf.jpg"), alt: H1 }],
});

const priceBands = [
  {
    name: "Hole in One Challenge",
    range: "$190 – $500",
    detail:
      "A single hole for promotions, stalls, prize draws and smaller parties. The price moves within the range with hire duration and location.",
  },
  {
    name: "3, 6 & 9-Hole Courses",
    range: "$575 – $2500",
    detail:
      "A full portable mini golf course for birthdays, galas, weddings, conferences and team building. The exact figure depends on the number of holes, hire duration and location.",
  },
];

const priceFactors = [
  {
    heading: "Number of holes",
    text: "A single Hole in One Challenge costs less than a full course. Moving from 3 to 6 or 9 holes adds layouts, obstacles and playing capacity, and the price reflects that.",
  },
  {
    heading: "Hire duration",
    text: "A short promotion slot and an all-day event are priced differently. Tell us the start and finish times you have in mind and we will quote for that window.",
  },
  {
    heading: "Distance from Palmerston North",
    text: "We are based in Palmerston North, and delivery is priced by distance from there. The closer your event is to Palmerston North, the less delivery adds; we also travel further afield across New Zealand.",
  },
  {
    heading: "Indoor or outdoor",
    text: "Every course can be set up indoors or outdoors. Let us know which, and how much space you have, so we can choose a layout that fits and price it accurately.",
  },
];

const included = [
  "Delivery to your venue",
  "Setup before your event",
  "Pack-down afterwards",
  "Full equipment for play",
  "Indoor or outdoor layouts",
  "A free, no-obligation quote",
];

const faqs = [
  {
    question: "How much does mini golf hire cost in NZ?",
    answer:
      "Our hire starts from $190. The Hole in One Challenge ranges from $190 to $500, and full 3, 6 or 9-hole courses range from $575 to $2500, depending on holes, duration and location.",
  },
  {
    question: "Is delivery included in the price?",
    answer:
      "We deliver, set up and pack down every hire. The delivery cost is priced by distance from our base in Palmerston North and quoted separately, alongside the hire price.",
  },
  {
    question: "How much notice do you need?",
    answer:
      "We need a minimum of 48 hours notice for every booking. Send us your date and venue and we will confirm availability with your quote.",
  },
  {
    question: "How do I get an exact price?",
    answer:
      "Fill in the booking form with your date, location, the number of holes you want and how long you need them. We will reply with a free, no-obligation quote.",
  },
];

function buildSchema() {
  const url = absUrl(PATH);
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${url}#service`,
      name: "Portable Mini Golf & Mini Putt Hire",
      serviceType: "Portable Mini Golf Hire",
      description: DESCRIPTION,
      url,
      provider: { "@id": ORG_ID },
      areaServed: { "@type": "Country", name: "New Zealand" },
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "NZD",
        lowPrice: 190,
        highPrice: 2500,
        availability: "https://schema.org/InStock",
        url: absUrl("book"),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Mini Golf Hire Prices", item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
      })),
    },
  ];
}

export default function MiniGolfHirePricesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildSchema()) }}
      />

      <div className="overflow-x-hidden">
        <PhotoHero image="/3-fun-portable-mini-golf.jpg">
          <Text variant="h1" className="font-bold tracking-tight">
            {H1}
          </Text>
          <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
            Portable mini golf and mini putt hire from Golf 2 Go starts from $190. Here is
            how our pricing works, what changes the total, and what every hire includes, so
            you can budget before you ask for a quote.
          </Text>
          <HeroActions quoteLabel="Get a Free Quote" />
        </PhotoHero>

        {/* Price ranges */}
        <section className="py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                Hire Price Ranges
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                We publish two price ranges. Where your event lands within a range depends on the
                factors below, and your quote confirms the exact figure.
              </Text>
              <div className="mt-10 grid gap-10 sm:grid-cols-2">
                {priceBands.map((band) => (
                  <div key={band.name}>
                    <Text variant="lg" className="font-semibold text-foreground">
                      {band.name}
                    </Text>
                    <Text variant="h3" className="mt-2 font-bold text-primary">
                      {band.range}
                    </Text>
                    <Text variant="base" className="mt-3 text-foreground-secondary">
                      {band.detail}
                    </Text>
                  </div>
                ))}
              </div>
              <Text variant="base" className="mt-6 text-foreground-secondary">
                See every layout, with its dimensions, on our{" "}
                <Link href="/courses" className="text-primary underline hover:no-underline">
                  courses page
                </Link>
                . For example, Twin Hedges measures 3.3m × 7.5m and Triple Kidney measures 3.4m × 9m.
              </Text>
            </div>
          </Container>
        </section>

        {/* What affects price */}
        <section className="bg-background-secondary py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                What Affects the Price
              </Text>
              <div className="mt-8 space-y-8">
                {priceFactors.map((f) => (
                  <div key={f.heading}>
                    <Text variant="lg" className="font-semibold text-foreground">
                      {f.heading}
                    </Text>
                    <Text variant="base" className="mt-2 text-foreground-secondary">
                      {f.text}
                    </Text>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Included */}
        <section className="py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                What Every Hire Includes
              </Text>
              <Text variant="lg" className="mt-4 text-foreground-secondary">
                There is no assembly on your side. We deliver the course, set it up, and pack it
                down when your event is over.
              </Text>
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                    <Text variant="base" className="text-foreground-secondary">
                      {item}
                    </Text>
                  </div>
                ))}
              </div>
              <Text variant="base" className="mt-8 text-foreground-secondary">
                Bookings need a minimum of 48 hours notice. Whether you are planning{" "}
                <Link href="/mini-golf-corporate-events" className="text-primary underline hover:no-underline">
                  a corporate event
                </Link>
                ,{" "}
                <Link href="/mini-golf-birthday-parties" className="text-primary underline hover:no-underline">
                  a birthday party
                </Link>
                ,{" "}
                <Link href="/mini-golf-school-galas-fundraisers" className="text-primary underline hover:no-underline">
                  a school gala or fundraiser
                </Link>{" "}
                or{" "}
                <Link href="/mini-golf-weddings" className="text-primary underline hover:no-underline">
                  a wedding
                </Link>
                , the same pricing approach applies.
              </Text>
            </div>
          </Container>
        </section>

        {/* FAQ */}
        <section className="bg-background-secondary py-20">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <Text variant="h2" className="font-bold tracking-tight text-foreground">
                Mini Golf Hire Pricing — FAQs
              </Text>
              <dl className="mt-8 space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt>
                      <Text variant="lg" className="font-semibold text-foreground">
                        {faq.question}
                      </Text>
                    </dt>
                    <dd className="mt-2">
                      <Text variant="base" className="text-foreground-secondary">
                        {faq.answer}
                      </Text>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Container>
        </section>

        <RelatedLinks currentPath={PATH} />

        <CtaBand title="Get an Exact Price for Your Event">
          Tell us your date, location and the course you want, and we&apos;ll send a free,
          no-obligation quote.
        </CtaBand>
      </div>
    </>
  );
}
