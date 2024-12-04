"use client";

import { motion } from "framer-motion";

import { cn } from "~/utils/cn";

export interface GradientBackgroundProps {
  variant?: "default" | "subtle" | "glow";
  interactive?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export const GradientBackground = ({
  variant = "default",
  interactive = false,
  className,
  children,
}: GradientBackgroundProps) => {
  const variants = {
    default: {
      initial: { opacity: 0.5 },
      animate: { opacity: [0.5, 0.6, 0.5] },
    },
    subtle: {
      initial: { opacity: 0.3 },
      animate: { opacity: [0.3, 0.4, 0.3] },
    },
    glow: {
      initial: { opacity: 0.4 },
      animate: { opacity: [0.4, 0.5, 0.4] },
    },
  };

  const gradientStyles = {
    default: "bg-gradient-to-b from-primary/20 via-background to-background",
    subtle: "bg-gradient-to-b from-primary/10 via-background to-background",
    glow: "bg-[radial-gradient(circle_at_center,var(--gradient-start)_0%,var(--gradient-end)_100%)]",
  };

  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", gradientStyles[variant], className)}
      style={
        variant === "glow"
          ? ({
              "--gradient-start": "hsl(var(--primary) / 0.15)",
              "--gradient-end": "transparent",
            } as React.CSSProperties)
          : undefined
      }
    >
      <motion.div
        initial={variants[variant].initial}
        animate={interactive ? undefined : variants[variant].animate}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      />
      {children && <div className="relative z-10">{children}</div>}
    </div>
  );
};
