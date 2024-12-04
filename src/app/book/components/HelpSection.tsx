'use client';

import { Phone, HelpCircle } from 'lucide-react';
import { Text } from '~/components/ui/Text';

export function HelpSection() {
  return (
    <div className="rounded-lg border border-border/50 bg-background shadow-sm">
      {/* Header */}
      <div className="border-b border-border/50 p-4">
        <div className="flex items-center gap-2">
          <HelpCircle className="h-5 w-5 text-primary" />
          <Text variant="base" className="font-semibold">Need Help?</Text>
        </div>
        <Text variant="sm" className="mt-1.5 text-foreground-secondary">
          Have questions about our services or the booking process? We're here to help!
        </Text>
      </div>

      {/* Content */}
      <div className="space-y-3 p-4">
        {/* Phone Contact */}
        <a 
          href="tel:021849931"
          className="flex items-center gap-3 rounded-md border border-border/50 bg-background/50 p-2.5 transition-all hover:border-primary/50 hover:bg-background hover:shadow-sm"
        >
          <div className="rounded-full bg-primary/10 p-1.5">
            <Phone className="h-4 w-4 text-primary" />
          </div>
          <div>
            <Text variant="sm" className="font-medium text-foreground">
              Call Us
            </Text>
            <Text variant="sm" className="text-primary">
              021 849931
            </Text>
          </div>
        </a>

        {/* Operating Hours */}
        <div className="space-y-2 rounded-md border border-border/50 bg-background/50 p-2.5">
          <Text variant="sm" className="font-medium text-foreground">
            Operating Hours
          </Text>
          <div className="space-y-1">
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-foreground-secondary">Monday - Friday</span>
              <span className="font-medium">9:00 AM - 5:00 PM</span>
            </div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-foreground-secondary">Saturday</span>
              <span className="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div className="flex items-baseline justify-between text-sm">
              <span className="text-foreground-secondary">Sunday</span>
              <span className="font-medium">By Appointment</span>
            </div>
          </div>
        </div>

        {/* Response Time */}
        <div className="rounded-md bg-primary/5 p-2.5 text-center">
          <Text variant="xs" className="text-foreground-secondary">
            We typically respond to inquiries within 24 hours during business hours
          </Text>
        </div>
      </div>
    </div>
  );
}
