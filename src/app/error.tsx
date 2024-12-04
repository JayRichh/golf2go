'use client';

import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Container } from '~/components/ui/Container';
import { Card, CardContent } from '~/components/ui/Card';
import { Text } from '~/components/ui/Text';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[50vh] bg-background">
      <Container size="lg" className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Card variant="elevated" className="max-w-md backdrop-blur">
          <CardContent className="flex flex-col items-center p-8">
            <div className="rounded-full bg-error/10 p-4">
              <AlertTriangle className="h-8 w-8 text-error" />
            </div>
            <Text variant="h2" className="mt-6 font-semibold">
              Something went wrong
            </Text>
            <Text variant="base" className="mt-2 text-foreground-secondary">
              {error.message || 'An unexpected error occurred'}
            </Text>
            <button
              onClick={reset}
              className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 transition-all hover:scale-105"
            >
              <RefreshCw className="h-5 w-5" />
              <Text variant="base">Try again</Text>
            </button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
