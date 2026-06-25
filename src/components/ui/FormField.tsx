import { UseFormRegister } from "react-hook-form";

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
  const errorId = `${name}-error`;
  const inputProps = {
    id: name,
    ...register(name),
    ...(itemProp ? { itemProp } : {}),
    ...(placeholder ? { placeholder } : {}),
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? errorId : undefined,
    className: `form-input w-full rounded-lg border bg-background px-4 py-2 text-foreground placeholder:text-foreground-secondary/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
      error ? "border-error" : "border-border"
    }`,
  };

  return (
    <div className="space-y-1">
      <label htmlFor={name} className="block text-sm font-medium text-foreground">
        {label}
        {required && (
          <span className="text-error" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>

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
        <p id={errorId} className="text-sm text-error">
          {error}
        </p>
      )}
    </div>
  );
}
