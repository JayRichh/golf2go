"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormCheckbox } from "~/components/ui/FormCheckbox";
import { FormField } from "~/components/ui/FormField";
import { Text } from "~/components/ui/Text";

// Simplified validation schema - NO reCAPTCHA
const validationSchema = z.object({
  contactPerson: z.string().min(1, "Contact person is required"),
  mobilePhone: z.string().regex(/^[0-9+\s()-]{8,}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  companyName: z.string().optional(),
  eventDate: z.string().min(1, "Event date is required"),
  eventLocation: z.string().min(1, "Event location is required"),
  numberOfParticipants: z.string().min(1, "Number of participants is required"),
  numberOfHoles: z.string().min(1, "Number of holes is required"),
  numberOfDays: z.string().min(1, "Number of days is required"),
  additionalRequirements: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  // Hidden honeypot field - bots will fill this
  _honeypot: z.string().optional(),
});

type SimpleFormData = z.infer<typeof validationSchema>;

const pricingTable = {
  1: {1:190.00,2:304.00,3:408.50,4:503.50,5:589.00,6:665.00,7:731.50},
  2: {1:260.00,2:416.00,3:559.00,4:689.00,5:806.00,6:910.00,7:1001.00},
  3: {1:338.00,2:540.80,3:726.70,4:895.70,5:1047.80,6:1183.00,7:1301.30},
  4: {1:395.00,2:632.00,3:849.25,4:1046.75,5:1224.50,6:1382.50,7:1520.75},
  5: {1:448.00,2:716.80,3:963.20,4:1187.20,5:1388.80,6:1568.00,7:1724.80},
  6: {1:495.00,2:792.00,3:1064.25,4:1331.75,5:1534.50,6:1732.50,7:1905.75},
  9: {1:575.00,2:920.00,3:1236.25,4:1523.75,5:1782.50,6:2012.50,7:2213.75},
} as const;

const calculatePrice = (holes: number, days: number) => {
  if (days <= 7) {
    return pricingTable[holes as keyof typeof pricingTable]?.[days as keyof typeof pricingTable[1]] || 0;
  }
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  let price = weeks * pricingTable[holes as keyof typeof pricingTable][7];
  if (remainingDays > 0) {
    price += pricingTable[holes as keyof typeof pricingTable][remainingDays as keyof typeof pricingTable[1]];
  }
  return price;
};

export default function SimpleBookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm<SimpleFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      acceptTerms: false,
      _honeypot: ""
    }
  });

  const statusRef = useRef<HTMLDivElement>(null);

  // On success the form is replaced by the status panel: bring it into view and focus it.
  useEffect(() => {
    if (success) {
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      statusRef.current?.focus({ preventScroll: true });
    }
  }, [success]);

  const formData = watch();

  const price = useMemo(() => {
    const days = Math.max(parseInt(formData.numberOfDays) || 1, 1);
    const holes = parseInt(formData.numberOfHoles) || 1;
    return calculatePrice(holes, days);
  }, [formData.numberOfDays, formData.numberOfHoles]);

  const onSubmit = async (data: SimpleFormData) => {
    setLoading(true);
    setError(null);

    try {
      // Simple bot detection - check honeypot
      if (data._honeypot && data._honeypot.trim() !== '') {
        throw new Error("Security check failed. Please try again.");
      }

      // Remove honeypot from submission data
      const { _honeypot, ...submitData } = data;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }
      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send booking request. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        aria-live="polite"
        className="rounded-md bg-success/10 p-6 text-success focus:outline-none"
      >
        <Text variant="lg" className="font-semibold">Booking request sent successfully!</Text>
        <Text variant="base" className="mt-1">We'll get back to you soon with confirmation details.</Text>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-12"
      noValidate
      itemScope
      itemType="https://schema.org/ReservationForm"
    >
      <meta itemProp="name" content="Mini Golf Hire Booking Form" />
      <meta itemProp="description" content="Book portable mini golf and mini putt hire for your event" />

      {/* Honeypot field - hidden from users */}
      <input
        {...register("_honeypot")}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      />

      {/* Contact Information Section */}
      <fieldset className="min-w-0 space-y-6">
        <legend className="text-2xl font-semibold">Contact Information</legend>
        <Text variant="sm" className="block text-foreground-secondary">Your details for booking confirmation</Text>

        <div className="grid gap-6 lg:grid-cols-2" itemScope itemType="https://schema.org/Organization">
          <FormField
            name="contactPerson"
            label="Contact Person"
            register={register}
            required
            error={errors.contactPerson?.message}
            placeholder="Full name"
          />
          <FormField
            name="mobilePhone"
            label="Mobile Phone"
            type="tel"
            register={register}
            required
            error={errors.mobilePhone?.message}
            placeholder="021 123 4567"
          />
          <FormField
            name="email"
            label="Email Address"
            type="email"
            register={register}
            required
            error={errors.email?.message}
            placeholder="your@email.com"
          />
          <FormField
            name="companyName"
            label="Company Name"
            register={register}
            error={errors.companyName?.message}
            placeholder="Optional"
            itemProp="name"
          />
        </div>
      </fieldset>

      {/* Event Details Section */}
      <fieldset className="min-w-0 space-y-6">
        <legend className="text-2xl font-semibold">Event Details</legend>
        <Text variant="sm" className="block text-foreground-secondary">Tell us about your event requirements</Text>

        <div className="grid gap-6 lg:grid-cols-2">
          <FormField
            name="eventDate"
            label="Event Date"
            type="date"
            register={register}
            required
            error={errors.eventDate?.message}
          />
          <FormField
            name="eventLocation"
            label="Event Location/Address"
            register={register}
            required
            error={errors.eventLocation?.message}
            placeholder="Full address where event will be held"
          />
          <FormField
            name="numberOfParticipants"
            label="Number of Participants"
            type="number"
            register={register}
            required
            error={errors.numberOfParticipants?.message}
            placeholder="Approx. number of people"
          />
          <FormField
            name="numberOfHoles"
            label="Number of Holes"
            type="select"
            register={register}
            required
            error={errors.numberOfHoles?.message}
            options={[
              { value: "", label: "Select number of holes" },
              { value: "1", label: "1 Hole" },
              { value: "2", label: "2 Holes" },
              { value: "3", label: "3 Holes" },
              { value: "4", label: "4 Holes" },
              { value: "5", label: "5 Holes" },
              { value: "6", label: "6 Holes" },
              { value: "9", label: "9 Holes" },
            ]}
          />
          <FormField
            name="numberOfDays"
            label="Number of Days"
            type="number"
            register={register}
            required
            error={errors.numberOfDays?.message}
            placeholder="How many days needed"
          />
        </div>

        {/* Price Estimate */}
        {formData.numberOfHoles && formData.numberOfDays && (
          <div itemScope itemType="https://schema.org/Offer" aria-live="polite">
            <meta itemProp="priceCurrency" content="NZD" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <p className="flex flex-wrap items-baseline gap-x-2">
              <span className="font-semibold">Estimated Price</span>
              <span className="text-xl font-bold text-primary" itemProp="price">${price.toFixed(2)}</span>
              <span className="text-sm text-foreground-secondary">NZD excl. GST</span>
              <span className="text-sm text-foreground-secondary">
                ({formData.numberOfHoles} hole{parseInt(formData.numberOfHoles)>1?'s':''} for {formData.numberOfDays} day{parseInt(formData.numberOfDays)>1?'s':''})
              </span>
            </p>
            <ul className="mt-1 text-sm text-foreground-secondary">
              <li>Delivery and setup costs quoted separately</li>
              <li>Final pricing confirmed upon booking</li>
            </ul>
          </div>
        )}

        <FormField
          name="additionalRequirements"
          label="Additional Requirements"
          type="textarea"
          register={register}
          error={errors.additionalRequirements?.message}
          placeholder="Any special requests, setup requirements, or additional information..."
          rows={4}
        />
      </fieldset>

      {/* Terms & Submit */}
      <div className="space-y-6">
        <FormCheckbox
          checked={formData.acceptTerms}
          onChange={(checked) => setValue("acceptTerms", checked, { shouldValidate: true })}
          label="I accept the terms and conditions"
          description={
            <span>
              I agree to Golf 2 Go NZ's{" "}
              <a href="/terms" className="text-primary underline hover:no-underline" target="_blank" rel="noopener noreferrer">
                terms and conditions
              </a>
            </span>
          }
          error={errors.acceptTerms?.message}
          required
        />

        {error && (
          <div role="alert" aria-live="assertive" className="rounded-md bg-error/10 p-4 text-error">
            <Text variant="base" className="font-semibold">Something went wrong</Text>
            <Text variant="sm" className="block">{error}</Text>
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-base disabled:opacity-60 sm:w-auto sm:px-8 sm:py-4 sm:text-lg"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                </svg>
                <span>Processing...</span>
              </span>
            ) : (
              "Submit Booking Request"
            )}
          </button>
          <Text variant="sm" className="mt-3 block text-foreground-secondary">
            By submitting this form, you'll receive a detailed quote within 24 hours.
          </Text>
        </div>
      </div>
    </form>
  );
}
