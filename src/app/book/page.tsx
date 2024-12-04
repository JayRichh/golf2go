import type { Metadata } from "next";

import { Container } from "~/components/ui/Container";
import { GradientBackground } from "~/components/ui/GradientBackground";
import { Text } from "~/components/ui/Text";

import BookingForm from "./BookingForm";
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
    <div className="max-w-1400px">
      {/* Hero Section */}
      <section className="relative bg-primary">
        <GradientBackground variant="glow">
          <Container size="xl" className="py-16 md:py-24">
            <div className="text-center">
              <Text variant="h1" align="center" className="text-primary-foreground">
                Make a Booking
              </Text>
              <Text
                variant="xl"
                align="center"
                className="mx-auto mt-6 max-w-2xl text-primary-foreground/90"
              >
                Fill out the form below and we'll get back to you with a quote
              </Text>
            </div>
          </Container>
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
              <BookingForm />
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
