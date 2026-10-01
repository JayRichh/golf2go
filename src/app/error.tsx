"use client";

import { AlertTriangle, RefreshCw } from "lucide-react";

import { Container } from "~/components/ui/Container";
import { Text } from "~/components/ui/Text";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <Container
      size="sm"
      className="flex min-h-[50vh] flex-col items-center justify-center py-16 text-center"
    >
      <AlertTriangle className="h-8 w-8 text-error" aria-hidden="true" />
      <Text variant="h2" className="mt-6 font-semibold">
        Something went wrong
      </Text>
      <Text variant="base" className="mt-2 text-foreground-secondary">
        {error.message || "An unexpected error occurred"}
      </Text>
      <button onClick={reset} className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3">
        <RefreshCw className="h-5 w-5" aria-hidden="true" />
        Try again
      </button>
    </Container>
  );
}
