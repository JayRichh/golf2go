import { Phone } from "lucide-react";

import { Text } from "~/components/ui/Text";

export function HelpSection() {
  return (
    <div className="border-t border-border pt-8 xl:border-t-0 xl:pt-0">
      <h2 className="text-xl font-semibold">Need Help?</h2>
      <Text variant="sm" className="mt-2 block text-foreground-secondary">
        Have questions about our services or the booking process? We&apos;re here to help!
      </Text>

      <a
        href="tel:021849931"
        className="mt-6 inline-flex min-h-11 items-center gap-3 text-primary hover:underline"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span>
          <span className="block text-sm font-medium text-foreground">Call Us</span>
          <span className="block text-2xl font-bold">021 849931</span>
        </span>
      </a>

      <Text variant="sm" className="mt-8 block font-medium text-foreground">
        Operating Hours
      </Text>
      <dl className="mt-2 space-y-1 text-sm">
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-foreground-secondary">Monday - Friday</dt>
          <dd className="font-medium">9:00 AM - 5:00 PM</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-foreground-secondary">Saturday</dt>
          <dd className="font-medium">10:00 AM - 4:00 PM</dd>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <dt className="text-foreground-secondary">Sunday</dt>
          <dd className="font-medium">By Appointment</dd>
        </div>
      </dl>

      <Text variant="xs" className="mt-4 block text-foreground-secondary">
        We typically respond to inquiries within 24 hours during business hours
      </Text>
    </div>
  );
}
