"use client";

import { Lightbulb } from "lucide-react";

import { Text } from "~/components/ui/Text";

export function QuickTips() {
  return (
    <div className="rounded-lg border border-border/50 bg-background/50 shadow-sm backdrop-blur">
      <div className="flex items-start gap-3 p-4">
        <div className="rounded-full bg-primary/10 p-2">
          <Lightbulb className="h-5 w-5 text-primary" />
        </div>
        <div>
          <Text variant="base" className="font-semibold text-foreground">
            Quick Tips
          </Text>
          <Text variant="sm" className="mt-1.5 text-foreground-secondary">
            The more details you provide, the better we can tailor our service to your event. All
            fields marked with * are required.
          </Text>
        </div>
      </div>
    </div>
  );
}
