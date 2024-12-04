"use client";

import { HTMLMotionProps, motion } from "framer-motion";

import { ReactNode, forwardRef } from "react";

import { cn } from "~/utils/cn";

interface ContainerProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full" | "ultra";
  centered?: boolean;
  glass?: boolean;
  glassDark?: boolean;
  noPadding?: boolean;
  className?: string;
  innerClassName?: string;
  maxWidth?: boolean;
  gutter?: boolean;
}

const containerSizes = {
  sm: "max-w-3xl",
  md: "max-w-4xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  ultra: "max-w-[100rem]",
  full: "max-w-full",
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      size = "lg",
      centered = true,
      glass = false,
      glassDark = false,
      noPadding = false,
      className = "",
      innerClassName = "",
      maxWidth = true,
      gutter = true,
      children,
      ...props
    },
    ref
  ) => {
    // Animation variants for container
    const containerVariants = {
      hidden: { opacity: 0, y: 8 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    };

    // Base container styles
    const containerStyles = cn(
      "relative w-full",
      maxWidth && containerSizes[size],
      gutter && "px-4 sm:px-6 lg:px-8",
      centered && "mx-auto",
      className
    );

    // Glass effect styles
    const glassStyles = cn(
      glass && "glass",
      glassDark && "dark:glass-dark",
      !noPadding && "py-6 px-4 sm:py-8 sm:px-4",
      "rounded-lg border border-border/50 shadow-sm backdrop-blur-sm",
      "transition-all duration-200 ease-in-out",
      "hover:border-border/70 hover:shadow-md"
    );

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={containerStyles}
        {...props}
      >
        {glass || glassDark ? (
          <div className={cn(glassStyles, innerClassName)}>
            {/* Content with relative positioning */}
            <div className="relative z-10">{children}</div>
          </div>
        ) : (
          // Regular content without glass effect
          <div className={innerClassName}>{children}</div>
        )}
      </motion.div>
    );
  }
);

Container.displayName = "Container";
