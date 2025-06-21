import { UseFormRegister } from "react-hook-form";
import { Text } from "./Text";

export interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  register: UseFormRegister<any>;
  required?: boolean;
  error?: string;
  options?: { value: string; label: string }[];
  itemProp?: string;
  placeholder?: string;
  rows?: number;
}

export function FormField({
  name,
  label,
  type = "text",
  register,
  required = false,
  error,
  options,
  itemProp,
  placeholder,
  rows = 4,
}: FormFieldProps) {
  const inputProps = {
    ...register(name),
    ...(itemProp ? { 'itemProp': itemProp } : {}),
    ...(placeholder ? { placeholder } : {}),
    className: `form-input w-full rounded-lg border bg-background px-4 py-2 text-foreground placeholder:text-foreground-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
      error ? "border-error" : "border-border"
    }`,
  };

  return (
    <div className="space-y-1">
      <Text variant="sm" className="font-medium">
        {label}
        {required && <span className="text-error"> *</span>}
      </Text>

      {type === "textarea" ? (
        <textarea {...inputProps} rows={rows} />
      ) : type === "select" ? (
        <select {...inputProps}>
          <option value="">Select...</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input type={type} {...inputProps} />
      )}

      {error && (
        <Text variant="sm" className="text-error">
          {error}
        </Text>
      )}
    </div>
  );
}
