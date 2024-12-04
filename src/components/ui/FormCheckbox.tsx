"use client";

import { Text } from "./Text";

interface FormCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description: string;
}

export function FormCheckbox({ checked, onChange, label, description }: FormCheckboxProps) {
  return (
    <label className="group flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-4 transition-colors hover:border-border hover:bg-background-secondary">
      <div className="relative flex h-6 items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="h-5 w-5 rounded border-2 border-border bg-background text-primary transition-colors focus:ring-2 focus:ring-primary/20 group-hover:border-primary/50"
        />
        <div className="pointer-events-none absolute left-0 flex h-5 w-5 items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <svg
            className="h-3 w-3 text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div className="flex-1">
        <Text variant="base" className="font-medium">
          {label}
        </Text>
        <Text variant="sm" className="text-foreground-secondary">
          {description}
        </Text>
      </div>
    </label>
  );
}
