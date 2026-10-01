"use client";

import { Text } from "./Text";

interface FormCheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label: string;
  description: string | React.ReactNode;
  error?: string;
  required?: boolean;
}

export function FormCheckbox({ checked, onChange, label, description, error, required }: FormCheckboxProps) {
  return (
    <div className="space-y-2">
      <label className={`group flex cursor-pointer items-start gap-2 sm:gap-3 rounded-lg border p-2 sm:p-4 transition-colors hover:border-border hover:bg-background-secondary ${
        error ? "border-error" : "border-transparent"
      }`}>
        <div className="relative flex h-6 items-center">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onChange(e.target.checked)}
            className={`h-5 w-5 rounded border-2 bg-background accent-primary transition-colors focus:ring-2 focus:ring-primary ${
              error ? "border-error" : "border-border"
            }`}
          />
        </div>
        <div className="flex-1">
          <span className="block font-medium">
            {label}
            {required && <span className="text-error"> *</span>}
          </span>
          <Text variant="sm" className="text-foreground-secondary">
            {description}
          </Text>
        </div>
      </label>
      {error && (
        <Text variant="sm" className="text-error">
          {error}
        </Text>
      )}
    </div>
  );
}
