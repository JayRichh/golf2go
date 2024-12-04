'use client';

import { Text } from './Text';
import { UseFormRegister } from 'react-hook-form';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  register: UseFormRegister<any>;
  error?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

export function FormField({ 
  name, 
  label, 
  type = 'text', 
  required = false,
  register,
  error,
  options
}: FormFieldProps) {
  return (
    <div className="col-span-2 md:col-span-1">
      <label htmlFor={name} className="mb-1.5 block">
        <Text variant="sm" className="font-medium text-foreground">
          {label}
          {required && <span className="ml-1 text-amber-500">*</span>}
        </Text>
      </label>
      {type === 'select' ? (
        <select
          id={name}
          {...register(name)}
          className={`input-base ${error ? 'border-red-500 focus:ring-red-500' : required ? 'border-amber-200 focus:ring-amber-500' : ''}`}
        >
          <option value="">Select {label.toLowerCase()}</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={name}
          {...register(name)}
          rows={4}
          className={`input-base ${error ? 'border-red-500 focus:ring-red-500' : required ? 'border-amber-200 focus:ring-amber-500' : ''}`}
          placeholder={`Enter ${label.toLowerCase()}`}
        />
      ) : (
        <input
          type={type}
          id={name}
          {...register(name)}
          min={type === 'number' ? 1 : undefined}
          className={`input-base ${error ? 'border-red-500 focus:ring-red-500' : required ? 'border-amber-200 focus:ring-amber-500' : ''}`}
        />
      )}
      {error && (
        <Text variant="sm" className="mt-1 text-red-500">
          {error}
        </Text>
      )}
    </div>
  );
}
