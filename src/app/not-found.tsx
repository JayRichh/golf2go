import Link from 'next/link';
import { Search, Home } from 'lucide-react';
import { Container } from '~/components/ui/Container';
import { Card, CardContent } from '~/components/ui/Card';
import { Text } from '~/components/ui/Text';

export default function NotFound() {
  return (
    <div className="min-h-[50vh] bg-background">
      <Container size="lg" className="flex min-h-[50vh] flex-col items-center justify-center text-center">
        <Card variant="elevated" className="max-w-md backdrop-blur">
          <CardContent className="flex flex-col items-center p-8">
            <div className="rounded-full bg-primary/10 p-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <Text variant="h2" className="mt-6 font-semibold">
              Page Not Found
            </Text>
            <Text variant="base" className="mt-2 text-foreground-secondary">
              Sorry, we couldn't find the page you're looking for.
            </Text>
            <Link
              href="/"
              className="btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 transition-all hover:scale-105"
            >
              <Home className="h-5 w-5" />
              <Text variant="base">Return Home</Text>
            </Link>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
