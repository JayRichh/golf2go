import { HTMLAttributes, ReactNode, forwardRef } from "react";

import { cn } from "~/utils/cn";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/** A plain content block: no border, shadow, radius or entrance motion. */
const Card = forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col", className)} {...props}>
    {children}
  </div>
));

Card.displayName = "Card";

interface CardHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, action, icon, className = "" }, ref) => (
    <div ref={ref} className={cn("mb-6 flex flex-col items-start gap-4", className)}>
      {icon && <div className="text-primary">{icon}</div>}
      <div className="min-w-0 flex-1">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        {subtitle && (
          <p className="mt-3 text-base leading-relaxed text-foreground-secondary">{subtitle}</p>
        )}
      </div>
      {action && <div className="mt-4 flex-shrink-0">{action}</div>}
    </div>
  )
);

CardHeader.displayName = "CardHeader";

interface CardContentProps {
  children?: ReactNode;
  className?: string;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", children }, ref) => (
    <div
      ref={ref}
      className={cn("w-full flex-1 text-base leading-relaxed text-foreground-secondary", className)}
    >
      {children}
    </div>
  )
);

CardContent.displayName = "CardContent";

export { Card, CardHeader, CardContent };
