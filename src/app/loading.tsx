import { Container } from "~/components/ui/Container";

export default function Loading() {
  return (
    <div className="min-h-[50vh] bg-background">
      <Container
        size="lg"
        className="flex min-h-[50vh] flex-col items-center justify-center text-center"
      >
        <div className="relative">
          <div className="h-16 w-16 animate-pulse rounded-full bg-primary/20">
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl text-primary">⛳</span>
            </div>
          </div>
        </div>
        <p className="mt-6 animate-pulse text-lg font-medium text-foreground">Loading...</p>
      </Container>
    </div>
  );
}
