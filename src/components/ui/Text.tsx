"use client";

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
type TextGradient = "none" | "blue" | "purple" | "orange" | "primary";

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  variant?: TextVariant;
  color?: "default" | "primary" | "secondary" | "success" | "error";
  weight?: "normal" | "medium" | "semibold" | "bold";
  align?: "left" | "center" | "right";
  gradient?: TextGradient;
  glass?: boolean;
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

const gradientClasses: Record<TextGradient, string> = {
  none: "",
  blue: "bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent",
  purple: "bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent",
  orange: "bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent",
  primary: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
};

export const Text = forwardRef<HTMLElement, TextProps>(
  (
    {
      variant = "body",
      color = "default",
      weight,
      align = "left",
      gradient = "none",
      glass = false,
      balance = false,
      mono = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const defaultWeight = variant.startsWith("h") ? "bold" : "normal";
    const finalWeight = weight || defaultWeight;

    // Use semantic HTML elements based on variant
    const getElementType = () => {
      switch (variant) {
        case "h1": return "h1";
        case "h2": return "h2";
        case "h3": return "h3";
        case "h4": return "h4";
        case "body-lg":
        case "body":
        case "body-sm":
        case "base":
        case "lg":
        case "xl":
        case "md": return "p";
        case "caption":
        case "xs":
        case "sm": return "span";
        default: return "div";
      }
    };

    const Element = getElementType() as any;

    return (
      <Element
        ref={ref}
        className={cn(
          variantClasses[variant],
          colorClasses[color],
          weightClasses[finalWeight],
          alignClasses[align],
          gradientClasses[gradient],
          glass && "glass",
          balance && "text-balance",
          mono ? "font-mono" : "font-sans",
          "relative",
          className
        )}
        {...props}
      >
        {glass && (
          <span className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-25 blur-sm" />
        )}
        <span className="relative">{children}</span>
      </Element>
    );
  }
);

Text.displayName = "Text";
