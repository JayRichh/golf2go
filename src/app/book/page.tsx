import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

import SimpleBookingForm from "./SimpleBookingForm";
import { HelpSection } from "./components/HelpSection";
import { generateBookingSchema, generateFormSchema } from "./schema";
import { SITE_URL } from '~/lib/site';

export { generateMetadata } from "./metadata";

const baseUrl = SITE_URL;

export default function BookPage() {
  const bookingSchema = generateBookingSchema(baseUrl);
  const formSchema = generateFormSchema(baseUrl);

  return (
    <div className="w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([bookingSchema, formSchema]),
        }}
      />
      <Container size="xl" className="pb-16 pt-8 md:pb-24 md:pt-10">
        <div className="grid gap-12 xl:grid-cols-[1fr_300px]">
          <div className="min-w-0">
            <header className="max-w-3xl">
              <Text variant="h1">Book Mini Golf Hire</Text>
              <Text variant="lg" className="mt-3 text-foreground-secondary">
                Fill out the form below and we&apos;ll get back to you with a free quote
              </Text>
              <Text variant="sm" className="mt-2 block text-foreground-secondary">
                <strong className="font-semibold text-foreground">Quick Tips:</strong> The more
                details you provide, the better we can tailor our service to your event. All fields
                marked with * are required.
              </Text>
            </header>
            <div className="mt-8">
              <SimpleBookingForm />
            </div>
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <HelpSection />
          </aside>
        </div>
      </Container>
    </div>
  );
}
