import { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Card, CardHeader, CardContent } from "~/components/ui/Card";
import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";
import { generateContactSchema, generateContactFormSchema } from './schema';
import { metadata } from './metadata';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://golf2go.co.nz';

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
    details: "info@golf2go.co.nz",
    description: "We respond within 24 hours",
    href: "mailto:info@golf2go.co.nz",
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
        {/* Header */}
        <section className="relative bg-primary">
          <GradientBackground variant="glow">
            <div className="relative isolate overflow-hidden py-32 md:py-40">
              <div className="absolute inset-0 -z-10 w-full">
                <Image
                  src="/2-parties-and-events-golf2go-portable-miniature-golf.jpg"
                  alt="Contact Golf 2 Go NZ for Professional Corporate Entertainment"
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
                    className="font-bold tracking-tight text-primary-foreground"
                  >
                    Contact Golf 2 Go NZ
                  </Text>
                  <Text
                    variant="xl"
                    className="mt-6 text-primary-foreground/90 text-center"
                  >
                    New Zealand's leading provider of professional corporate entertainment solutions
                  </Text>
                </div>
              </Container>
            </div>
          </GradientBackground>
        </section>

        {/* Contact Information */}
        <section className="py-16 md:py-24" itemScope itemType="https://schema.org/ContactPage">
          <Container size="xl">
            <div className="text-center mb-16">
              <Text variant="h2" align="center" className="text-foreground">
                Get In Touch
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-foreground-secondary"
              >
                Ready to elevate your corporate event? Contact our professional team for premium entertainment solutions.
              </Text>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <Card
                  key={item.title}
                  variant="elevated"
                  interactive
                  className="group text-center p-6 hover:shadow-lg transition-shadow"
                  itemScope
                  itemType="https://schema.org/ContactPoint"
                >
                  <CardContent className="flex flex-col items-center space-y-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <Text variant="h4" className="text-foreground" itemProp="name">
                        {item.title}
                      </Text>
                      <Text variant="lg" className="font-semibold text-foreground" itemProp="value">
                        {item.details}
                      </Text>
                      <Text variant="sm" className="text-foreground-secondary">
                        {item.description}
                      </Text>
                    </div>
                    <a
                      href={item.href}
                      className="btn-outline btn-sm inline-flex items-center gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      {item.action}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        {/* Service Areas */}
        <section id="service-areas" className="bg-background-secondary py-16 md:py-24">
          <Container size="xl">
            <div className="text-center mb-16">
              <Text variant="h2" align="center" className="text-foreground">
                Nationwide Service Coverage
              </Text>
              <Text
                variant="lg"
                className="mx-auto mt-6 max-w-2xl text-center text-foreground-secondary"
              >
                We provide professional corporate entertainment solutions across New Zealand
              </Text>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceAreas.map((area) => (
                <Card key={area.region} variant="elevated" className="p-6">
                  <div className="pb-4">
                    <Text variant="h4" className="text-foreground font-semibold">
                      {area.region}
                    </Text>
                  </div>
                  <CardContent>
                    <ul className="space-y-2">
                      {area.areas.map((location) => (
                        <li key={location}>
                          <Text variant="sm" className="text-foreground-secondary">
                            • {location}
                          </Text>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Text variant="base" className="text-foreground-secondary mb-6">
                Don't see your area listed? We also service many other locations across New Zealand.
              </Text>
              <a
                href="tel:021849931"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Phone className="h-5 w-5" />
                Call to Confirm Coverage
              </a>
            </div>
          </Container>
        </section>

        {/* Quick Contact & Booking CTA */}
        <section id="contact-form" className="py-16 md:py-24">
          <Container size="xl">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-8 lg:grid-cols-2">
                {/* Quick Contact */}
                <Card variant="elevated" className="p-8">
                  <CardHeader
                    title="Quick Contact"
                    subtitle="Get instant assistance for your corporate event needs"
                    className="pb-6"
                  />
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <a
                        href="tel:021849931"
                        className="flex items-center gap-3 p-4 rounded-lg border hover:bg-background-secondary transition-colors"
                      >
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <Text variant="base" className="font-medium text-foreground">
                            Call Now: 021 849931
                          </Text>
                          <Text variant="sm" className="text-foreground-secondary">
                            Available 8am - 8pm, 7 days
                          </Text>
                        </div>
                      </a>
                      
                      <a
                        href="mailto:info@golf2go.co.nz"
                        className="flex items-center gap-3 p-4 rounded-lg border hover:bg-background-secondary transition-colors"
                      >
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <Text variant="base" className="font-medium text-foreground">
                            Email: info@golf2go.co.nz
                          </Text>
                          <Text variant="sm" className="text-foreground-secondary">
                            Response within 24 hours
                          </Text>
                        </div>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                {/* Booking CTA */}
                <Card variant="elevated" className="p-8 bg-primary text-primary-foreground">
                  <CardHeader
                    title={<Text variant="sm" className="text-2xl md:text-3xl xl:text-4xl font-semibold leading-snug text-primary-foreground">Ready to Book?</Text>}
                    subtitle={<Text variant="sm" className="text-primary-foreground/90">Complete our detailed booking form for a comprehensive quote</Text>}
                    className="pb-6"
                  />
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <Text variant="sm" className="text-primary-foreground/80">
                        ✓ Instant quote calculation
                      </Text>
                      <Text variant="sm" className="text-primary-foreground/80">
                        ✓ Professional event planning
                      </Text>
                      <Text variant="sm" className="text-primary-foreground/80">
                        ✓ Nationwide delivery & setup
                      </Text>
                      <Text variant="sm" className="text-primary-foreground/80">
                        ✓ Corporate excellence guarantee
                      </Text>
                    </div>
                    <Link
                      href="/book"
                      className="btn-outline btn-lg w-full justify-center border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 inline-flex items-center gap-2"
                    >
                      Complete Booking Form
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </CardContent>
                </Card>
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
                Call 021 849931 or email info@golf2go.co.nz for immediate assistance with your corporate event planning needs.
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