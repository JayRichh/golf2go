import { ArrowRight, CheckCircle, Clock, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

import { PhotoHero } from "~/components/PhotoHero";
import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";
import { generateContactSchema, generateContactFormSchema } from './schema';
import { SITE_URL } from '~/lib/site';
import { metadata } from './metadata';

const baseUrl = SITE_URL;

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: "021 849931",
    description: "Available 8am - 8pm, 7 days a week",
    href: "tel:021849931",
    action: "Call Now"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: "admin@golf2go.co.nz",
    description: "We respond within 24 hours",
    href: "mailto:admin@golf2go.co.nz",
    action: "Send Email"
  },
  {
    icon: MapPin,
    title: "Service Areas",
    details: "Nationwide Coverage",
    description: "North & South Island",
    href: "#service-areas",
    action: "View Areas"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "8:00 AM - 8:00 PM",
    description: "Monday - Sunday",
    href: "#contact-form",
    action: "Get Quote"
  }
];

const serviceAreas = [
  {
    region: "Auckland Region",
    areas: ["Auckland City", "North Shore", "Waitakere", "Manukau", "Franklin"]
  },
  {
    region: "Wellington Region", 
    areas: ["Wellington City", "Lower Hutt", "Upper Hutt", "Porirua", "Kapiti Coast"]
  },
  {
    region: "Canterbury Region",
    areas: ["Christchurch", "Selwyn", "Waimakariri", "Banks Peninsula", "Ashburton"]
  },
  {
    region: "Other Major Areas",
    areas: ["Hamilton", "Tauranga", "Rotorua", "Palmerston North", "Dunedin", "Invercargill"]
  }
];

export { metadata };

export default function ContactPage() {
  // Generate schema markup for server-side rendering
  const contactSchema = generateContactSchema(baseUrl);
  const contactFormSchema = generateContactFormSchema();

  return (
    <>
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([contactSchema, contactFormSchema])
        }}
      />
      
      <div className="overflow-x-hidden">
        <PhotoHero
          image="/2-parties-and-events-golf2go-portable-miniature-golf.jpg"
          alt="Contact Golf 2 Go NZ for Professional Corporate Entertainment"
        >
          <Text variant="h1" className="font-bold tracking-tight">
            Contact Golf 2 Go NZ
          </Text>
          <Text variant="xl" className="mx-auto mt-6 max-w-2xl">
            New Zealand's leading provider of professional corporate entertainment solutions
          </Text>
        </PhotoHero>

        {/* Contact Information */}
        <section className="py-16 md:py-24" itemScope itemType="https://schema.org/ContactPage">
          <Container size="xl">
            <div className="mb-12 text-center">
              <Text variant="h2">
                Get In Touch
              </Text>
              <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
                Ready to elevate your corporate event? Contact our professional team for premium entertainment solutions.
              </Text>
            </div>

            <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <li key={item.title} itemScope itemType="https://schema.org/ContactPoint">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground-secondary" itemProp="name">
                    <item.icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    {item.title}
                  </h3>
                  <p className="mt-2 break-words text-xl font-bold" itemProp="value">
                    {item.details}
                  </p>
                  <p className="mt-1 text-sm text-foreground-secondary">{item.description}</p>
                  <a
                    href={item.href}
                    className="mt-3 inline-flex min-h-11 items-center gap-2 font-medium text-primary underline hover:no-underline"
                  >
                    {item.action}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* Service Areas */}
        <section id="service-areas" className="bg-background-secondary py-16 md:py-24">
          <Container size="xl">
            <div className="mb-12 text-center">
              <Text variant="h2">
                Nationwide Service Coverage
              </Text>
              <Text variant="lg" className="mx-auto mt-4 max-w-2xl text-foreground-secondary">
                We provide professional corporate entertainment solutions across New Zealand
              </Text>
            </div>

            <dl className="mx-auto grid max-w-5xl gap-x-12 gap-y-8 md:grid-cols-2">
              {serviceAreas.map((area) => (
                <div key={area.region}>
                  <dt className="text-xl font-semibold">{area.region}</dt>
                  <dd className="mt-2 text-foreground-secondary">{area.areas.join(", ")}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 text-center">
              <Text variant="base" className="mb-6 text-foreground-secondary">
                Don't see your area listed? We also service many other locations across New Zealand.
              </Text>
              <a
                href="tel:021849931"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" aria-hidden="true" />
                Call to Confirm Coverage
              </a>
            </div>
          </Container>
        </section>

        {/* Quick Contact & Booking CTA */}
        <section id="contact-form" className="py-16 md:py-24">
          <Container size="xl">
            <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2">
              {/* Quick Contact */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Quick Contact</h3>
                <p className="mt-3 text-foreground-secondary">
                  Get instant assistance for your corporate event needs
                </p>
                <ul className="mt-6 space-y-6">
                  <li>
                    <a href="tel:021849931" className="inline-flex items-center gap-3 text-lg font-semibold text-primary underline hover:no-underline">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                      Call Now: 021 849931
                    </a>
                    <p className="mt-1 pl-8 text-sm text-foreground-secondary">Available 8am - 8pm, 7 days</p>
                  </li>
                  <li>
                    <a href="mailto:admin@golf2go.co.nz" className="inline-flex items-center gap-3 break-all text-lg font-semibold text-primary underline hover:no-underline">
                      <Mail className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                      Email: admin@golf2go.co.nz
                    </a>
                    <p className="mt-1 pl-8 text-sm text-foreground-secondary">Response within 24 hours</p>
                  </li>
                </ul>
              </div>

              {/* Booking CTA */}
              <div>
                <h3 className="text-2xl font-semibold tracking-tight">Ready to Book?</h3>
                <p className="mt-3 text-foreground-secondary">
                  Complete our detailed booking form for a comprehensive quote
                </p>
                <ul className="mt-6 space-y-3">
                  {[
                    "Instant quote calculation",
                    "Professional event planning",
                    "Nationwide delivery & setup",
                    "Corporate excellence guarantee",
                  ].map((point) => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <Link href="/book" className="btn-primary btn-lg mt-8 inline-flex items-center gap-2">
                  Complete Booking Form
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* SEO Content Section */}
        <section className="py-12 bg-background">
          <Container size="xl">
            <div className="mx-auto max-w-3xl text-center space-y-4">
              <Text variant="lg" className="text-foreground-secondary">
                Contact Golf 2 Go NZ for professional corporate entertainment solutions across New Zealand. 
                We specialize in premium portable mini golf experiences for business events, team building activities, and executive functions.
              </Text>
              <Text variant="base" className="text-foreground-secondary">
                Our nationwide service coverage includes Auckland, Wellington, Christchurch, Hamilton, Tauranga, and many other locations. 
                Call 021 849931 or email admin@golf2go.co.nz for immediate assistance with your corporate event planning needs.
              </Text>
              <Text variant="base" className="text-foreground-secondary">
                Available 8am to 8pm, seven days a week, our professional team provides expert consultation, 
                competitive pricing, and comprehensive event solutions tailored to your business requirements.
              </Text>
            </div>
          </Container>
        </section>
      </div>
    </>
  );
}