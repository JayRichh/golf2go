import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        green: {
          DEFAULT: "#008000", // Golf green
          dark: "#006400",
          light: "#00FF00",
        },
        background: {
          DEFAULT: "var(--background)",
          secondary: "var(--background-secondary)",
        },
        foreground: {
          DEFAULT: "var(--foreground)",
          secondary: "var(--foreground-secondary)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        border: "var(--border)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
      fontFamily: {
        sans: ["Arial", "sans-serif"],
        mono: ["Courier New", "monospace"],
      },
    },
  },
  plugins: [],
  darkMode: "class",
};

export default config;
