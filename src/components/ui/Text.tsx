import { HTMLAttributes, forwardRef } from "react";

import { cn } from "~/utils/cn";

type TextVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "body-lg"
  | "body"
  | "body-sm"
  | "caption"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "base";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TextVariant;
  /** Omit to inherit the parent colour (for example inside a button or a green band). */
  color?: "default" | "primary" | "secondary" | "success" | "error";
  weight?: "normal" | "medium" | "semibold" | "bold";
  /** Omit to inherit the parent alignment. */
  align?: "left" | "center" | "right";
  balance?: boolean;
  mono?: boolean;
}

const variantClasses: Record<TextVariant, string> = {
  h1: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight",
  h2: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight",
  h3: "text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-snug",
  h4: "text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold leading-snug",
  "body-lg": "text-lg md:text-xl leading-relaxed",
  body: "text-base leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  caption: "text-xs leading-normal",
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  base: "",
};

const colorClasses = {
  default: "text-foreground",
  primary: "text-primary",
  secondary: "text-muted-foreground",
  success: "text-success",
  error: "text-error",
};

const weightClasses = {
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

const elementFor = (variant: TextVariant) => {
  switch (variant) {
    case "h1":
    case "h2":
    case "h3":
    case "h4":
      return variant;
    case "caption":
    case "xs":
    case "sm":
      return "span";
    default:
      return "p";
  }
};

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "body",
      color,
      weight,
      align,
      balance = false,
      mono = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const finalWeight = weight || (variant.startsWith("h") ? "bold" : "normal");
    const Element = elementFor(variant) as any;

    return (
      <Element
        ref={ref}
        className={cn(
          variantClasses[variant],
          color && colorClasses[color],
          weightClasses[finalWeight],
          align && alignClasses[align],
          balance && "text-balance",
          mono ? "font-mono" : "font-sans",
          className
        )}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

Text.displayName = "Text";
