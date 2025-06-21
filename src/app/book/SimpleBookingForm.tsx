"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { generateBookingSchema, generateFormSchema } from './schema';
import * as z from "zod";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Container } from "~/components/ui/Container";
import { FormCheckbox } from "~/components/ui/FormCheckbox";
import { FormField } from "~/components/ui/FormField";
import { Text } from "~/components/ui/Text";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options?: { action?: string }) => Promise<string>;
    };
  }
}

// Simplified validation schema with only essential fields
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
  recaptchaToken: z.string().min(1, "reCAPTCHA is required"),
});

type SimpleFormData = z.infer<typeof validationSchema>;

const eventTypes = [
  { value: "corporate", label: "Corporate Event" },
  { value: "birthday", label: "Birthday Party" },
  { value: "school", label: "School Event" },
  { value: "wedding", label: "Wedding" },
  { value: "other", label: "Other" },
];

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

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://golf2go.co.nz";
const bookingSchemaData = generateBookingSchema(baseUrl);
const formSchemaData = generateFormSchema(baseUrl);

export default function SimpleBookingForm() {
  // Add schema.org markup
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify([bookingSchemaData, formSchemaData]);
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue } = useForm<SimpleFormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      recaptchaToken: "",
      acceptTerms: false
    }
  });

  const formData = watch();

  useEffect(() => {
    if (recaptchaLoaded && window.grecaptcha) {
      window.grecaptcha.ready(async () => {
        try {
          const token = await window.grecaptcha.execute(process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!, { action: "submit" });
          setValue("recaptchaToken", token, { shouldValidate: true });
        } catch {
          setError("Failed to verify reCAPTCHA. Please refresh and try again.");
        }
      });
    }
  }, [recaptchaLoaded, setValue]);

  const price = useMemo(() => {
    const days = Math.max(parseInt(formData.numberOfDays) || 1, 1);
    const holes = parseInt(formData.numberOfHoles) || 1;
    return calculatePrice(holes, days);
  }, [formData.numberOfDays, formData.numberOfHoles]);

  const onSubmit = async (data: SimpleFormData) => {
    setLoading(true);
    setError(null);

    try {
      if (!data.recaptchaToken) {
        throw new Error("reCAPTCHA verification failed. Please refresh and try again.");
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Failed to submit form");
      }
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to send booking request. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
        onLoad={() => setRecaptchaLoaded(true)}
        onError={() => setError("Failed to load reCAPTCHA. Please refresh the page and try again.")}
      />

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="space-y-8" 
        noValidate
        itemScope 
        itemType="https://schema.org/ReservationForm"
      >
        <meta itemProp="name" content="Corporate Entertainment Booking Form" />
        <meta itemProp="description" content="Book premium corporate entertainment and event solutions" />
        
        {success && (
          <Container glass className="border-success/20 bg-success/10">
            <div className="flex items-center gap-3">
              <span className="text-xl">✅</span>
              <div>
                <Text variant="base" className="font-medium text-success">Booking request sent successfully!</Text>
                <Text variant="sm" className="text-success">We'll get back to you soon with confirmation details.</Text>
              </div>
            </div>
          </Container>
        )}

        {error && (
          <Container glass className="border-error/20 bg-error/10">
            <div className="flex items-center gap-3">
              <span className="text-xl">⚠️</span>
              <div>
                <Text variant="base" className="font-medium text-error">Something went wrong</Text>
                <Text variant="sm" className="text-error">{error}</Text>
              </div>
            </div>
          </Container>
        )}

        {/* Contact Information Section */}
        <Container glass className="p-6">
          <div className="mb-6">
            <Text variant="h3" className="text-foreground mb-2">Contact Information</Text>
            <Text variant="sm" className="text-foreground-secondary">Your details for booking confirmation</Text>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2" itemScope itemType="https://schema.org/Organization">
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
        </Container>

        {/* Event Details Section */}
        <Container glass className="p-6">
          <div className="mb-6">
            <Text variant="h3" className="text-foreground mb-2">Event Details</Text>
            <Text variant="sm" className="text-foreground-secondary">Tell us about your event requirements</Text>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
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
          
          <div className="mt-6">
            <FormField 
              name="additionalRequirements" 
              label="Additional Requirements" 
              type="textarea" 
              register={register} 
              error={errors.additionalRequirements?.message}
              placeholder="Any special requests, setup requirements, or additional information..."
              rows={4}
            />
          </div>
        </Container>

        {/* Price Estimate */}
        {formData.numberOfHoles && formData.numberOfDays && (
          <Container glass className="p-6" itemScope itemType="https://schema.org/Offer">
            <meta itemProp="priceCurrency" content="NZD" />
            <meta itemProp="availability" content="https://schema.org/InStock" />
            <meta itemProp="validFrom" content="2025-01-01T00:00:00.000Z" />
            <meta itemProp="priceValidUntil" content="2025-12-31T23:59:59.999Z" />
            
            <div className="flex items-center justify-between border-b border-border/50 bg-background-secondary/30 p-4 rounded-t-lg">
              <div className="flex items-center gap-3">
                <span className="text-xl">💰</span>
                <Text variant="h4">Estimated Price</Text>
              </div>
              <div className="flex items-baseline">
                <Text variant="h3" className="text-primary" itemProp="price">${price.toFixed(2)}</Text>
                <Text variant="sm" className="ml-2 text-foreground-secondary">NZD excl. GST</Text>
              </div>
            </div>
            <div className="p-4 space-y-2">
              <Text variant="sm" className="text-foreground-secondary">
                {formData.numberOfHoles} hole{parseInt(formData.numberOfHoles)>1?'s':''} for {formData.numberOfDays} day{parseInt(formData.numberOfDays)>1?'s':''}
              </Text>
              <Text variant="sm" className="text-foreground-secondary">• Delivery and setup costs quoted separately</Text>
              <Text variant="sm" className="text-foreground-secondary">• Final pricing confirmed upon booking</Text>
            </div>
          </Container>
        )}

        {/* Terms & Submit */}
        <Container glass className="p-6">
          <div className="space-y-6">
            <FormCheckbox
              checked={formData.acceptTerms}
              onChange={(checked) => setValue("acceptTerms", checked, { shouldValidate: true })}
              label="I accept the terms and conditions"
              description={
                <span>
                  I agree to Golf 2 Go NZ's{" "}
                  <a href="/terms" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    terms and conditions
                  </a>
                </span>
              }
              error={errors.acceptTerms?.message}
              required
            />
            
            <div className="text-center">
              <button
                type="submit"
                disabled={loading || !recaptchaLoaded || !isValid || !formData.recaptchaToken || !formData.acceptTerms}
                className="btn-primary inline-flex min-w-[200px] items-center justify-center gap-2 px-8 py-4 text-lg"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                    </svg>
                    <Text variant="base">Processing...</Text>
                  </div>
                ) : (
                  <>
                    <span>📝</span>
                    <Text variant="base">Submit Booking Request</Text>
                  </>
                )}
              </button>
            </div>
            
            <div className="text-center">
              <Text variant="sm" className="text-foreground-secondary">
                By submitting this form, you'll receive a detailed quote within 24 hours.
              </Text>
            </div>
          </div>
        </Container>
      </form>
    </>
  );
}