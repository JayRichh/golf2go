"use client";

import { HTMLMotionProps, Variants, motion } from "framer-motion";

import { ReactNode, forwardRef } from "react";

import { cn } from "~/utils/cn";

const cardVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
  hover: {
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
};

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
  variant?: "elevated" | "outlined" | "filled";
  interactive?: boolean;
  fullHeight?: boolean;
  noPadding?: boolean;
  children?: ReactNode;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "elevated",
      interactive = false,
      fullHeight = false,
      noPadding = false,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    return (
      <motion.div
        ref={ref}
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        whileHover={interactive ? "hover" : undefined}
        className={cn(
          "rounded-xl",
          "flex flex-col",
          "transition-colors duration-200",
          {
            "h-full": fullHeight,
            "min-h-[280px]": !fullHeight, // Ensure minimum height for uniformity
            "p-8": !noPadding,
            "bg-background shadow-lg border border-border/50 hover:shadow-xl hover:border-border":
              variant === "elevated",
            "border-2 border-border hover:border-primary/50": variant === "outlined",
            "bg-background-secondary hover:bg-background-secondary/90": variant === "filled",
            "cursor-pointer transform": interactive,
          },
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = "Card";

interface CardHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  action?: ReactNode;
  className?: string;
  icon?: ReactNode;
}

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ title, subtitle, action, icon, className = "" }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col items-start gap-4 mb-6", className)}>
        {icon && (
          <div className="text-primary text-4xl mb-2 transition-transform duration-200 group-hover:scale-110">
            {icon}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className="text-2xl font-semibold text-foreground leading-tight tracking-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-3 text-base text-foreground-secondary leading-relaxed">{subtitle}</p>
          )}
        </div>
        {action && <div className="flex-shrink-0 mt-4">{action}</div>}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

interface CardContentProps {
  children?: ReactNode;
  className?: string;
}

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = "", children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex-1 min-h-0 w-full",
          "text-foreground-secondary text-base leading-relaxed",
          className
        )}
      >
        {children}
      </div>
    );
  }
);

CardContent.displayName = "CardContent";

interface CardFooterProps {
  children?: ReactNode;
  className?: string;
  noBorder?: boolean;
}

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = "", noBorder = false, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mt-6",
          {
            "pt-4 border-t border-border": !noBorder,
          },
          className
        )}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardContent, CardFooter };
