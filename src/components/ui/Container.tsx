import { HTMLAttributes, ReactNode, forwardRef } from "react";

import { cn } from "~/utils/cn";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl" | "full" | "ultra";
  centered?: boolean;
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

/** Width and gutter wrapper. Content is visible from the server render; no entrance motion. */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { size = "lg", centered = true, maxWidth = true, gutter = true, className, children, ...props },
    ref
  ) => (
    <div
      ref={ref}
      className={cn(
        "relative w-full",
        maxWidth && containerSizes[size],
        gutter && "px-4 sm:px-6 lg:px-8",
        centered && "mx-auto",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = "Container";
