"use client";

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className={`min-h-screen ${className}`}>
      <div className="section-pattern">
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
}

export function PageHeader({ title, description }: { title: string; description?: string }) {
  return (
    <div className="bg-primary py-24 text-center">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-foreground/90">{description}</p>
        )}
      </div>
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10" />
    </div>
  );
}

export function PageContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 ${className}`}>
      <div className="animate-fade-in">{children}</div>
    </div>
  );
}
