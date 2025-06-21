import type { Metadata } from "next";
import Image from "next/image";

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";

import SimpleBookingForm from "./SimpleBookingForm";
import { HelpSection } from "./components/HelpSection";
import { QuickTips } from "./components/QuickTips";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Book Now | Golf 2 Go",
    description:
      "Book your portable mini golf course for your next event. Available for corporate events, parties, and more.",
  };
}

export default function BookPage() {
  return (
    <div className="max-w-1400px overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <div className="relative isolate overflow-hidden py-32 md:py-40">
            <div className="absolute inset-0 -z-10 w-full">
              <Image
                src="/2-parties-and-events-golf2go-portable-miniature-golf.jpg"
                alt="Golf 2 Go booking"
                fill
                className="h-full w-full object-cover opacity-30"
                sizes="100vw"
                priority
              />
            </div>
            <Container size="xl">
              <div className="mx-auto max-w-2xl text-center h-[180px] flex flex-col justify-center">
                <Text variant="h1" align="center" className="text-primary-foreground">
                  Make a Booking
                </Text>
                <Text
                  variant="xl"
                  align="center"
                  className="mt-6 text-primary-foreground/90"
                >
                  Fill out the form below and we'll get back to you with a quote
                </Text>
              </div>
            </Container>
          </div>
        </GradientBackground>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16">
        <Container size="xl" className="px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
            <div className="space-y-8">
              {/* Quick Tips */}
              <QuickTips />

              {/* Booking Form */}
              <SimpleBookingForm />
            </div>

            {/* Help Section - Sidebar */}
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <HelpSection />
            </aside>
          </div>
        </Container>
      </section>
    </div>
  );
}
