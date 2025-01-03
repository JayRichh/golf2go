"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { generateBookingSchema, generateFormSchema } from './schema';
import * as z from "zod";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Script from "next/script";
import { Container } from "~/components/ui/Container";
import { FormCheckbox } from "~/components/ui/FormCheckbox";
import { FormField } from "~/components/ui/FormField";
import { FormStep } from "~/components/ui/FormStep";
import { StepIndicator } from "~/components/ui/StepIndicator";
import { Text } from "~/components/ui/Text";
import type { FormData } from "~/types/form";

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options?: { action?: string }) => Promise<string>;
    };
  }
}

const validationSchema = z.object({
  companyName: z.string().optional(),
  contactPerson: z.string().min(1, "Contact person is required"),
  landlinePhone: z.string().optional(),
  mobilePhone: z.string().regex(/^[0-9+\s()-]{8,}$/, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  postalAddress: z.string().min(1, "Postal address is required"),
  postalAddress2: z.string().optional(),
  postalCity: z.string().min(1, "City is required"),
  postalRegion: z.string().min(1, "Region is required"),
  postalPostcode: z.string().regex(/^\d{4}$/, "Please enter a valid 4-digit postcode"),
  poBox: z.string().optional(),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  deliveryAddress2: z.string().optional(),
  deliveryCity: z.string().min(1, "City is required"),
  deliveryRegion: z.string().min(1, "Region is required"),
  deliveryPostcode: z.string().regex(/^\d{4}$/, "Please enter a valid 4-digit postcode"),
  eventAddress: z.string().min(1, "Event address is required"),
  eventAddress2: z.string().optional(),
  eventCity: z.string().min(1, "City is required"),
  eventRegion: z.string().min(1, "Region is required"),
  eventPostcode: z.string().regex(/^\d{4}$/, "Please enter a valid 4-digit postcode"),
  eventDate: z.string().min(1, "Event date is required"),
  eventType: z.string().min(1, "Event type is required"),
  numberOfDays: z.string().min(1, "Number of days is required"),
  numberOfHoles: z.string().min(1, "Number of holes is required"),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, "reCAPTCHA is required"),
});

type Section = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

const sections: Section[] = [
  { id: "contact", title: "Contact Details", icon: "👤", description: "Your contact information" },
  { id: "postal", title: "Postal Address", icon: "📮", description: "Where to send documents" },
  {
    id: "delivery",
    title: "Delivery Details",
    icon: "🚚",
    description: "Where to deliver equipment",
  },
  { id: "event", title: "Event Information", icon: "🎯", description: "Details about your event" },
];

const eventTypes = [
  { value: "corporate", label: "Corporate Event" },
  { value: "birthday", label: "Birthday Party" },
  { value: "school", label: "School Event" },
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

const basePrices = {
  1: 190.00,
  2: 260.00,
  3: 338.00,
  4: 395.00,
  5: 448.00,
  6: 495.00,
  9: 575.00
} as const;

const calculatePrice = (holes: number, days: number) => {
  if (days <= 7) {
    return pricingTable[holes as keyof typeof pricingTable]?.[days as keyof typeof pricingTable[1]] || 0;
  }
  const basePrice = basePrices[holes as keyof typeof basePrices] || basePrices[1];
  const weeks = Math.floor(days / 7);
  const remainingDays = days % 7;
  let price = weeks * pricingTable[holes as keyof typeof pricingTable][7];
  if (remainingDays > 0) {
    price += pricingTable[holes as keyof typeof pricingTable][remainingDays as keyof typeof pricingTable[1]];
  }
  return price;
};

const baseUrl = "https://golf2go.co.nz";
const bookingSchemaData = generateBookingSchema(baseUrl);
const formSchemaData = generateFormSchema();

export default function BookingForm() {
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
  const [sameAsPostal, setSameAsPostal] = useState(false);
  const [sameAsDelivery, setSameAsDelivery] = useState(false);
  const [activeSection, setActiveSection] = useState("contact");
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const { register, handleSubmit, formState: { errors, isValid }, watch, setValue, trigger } = useForm<FormData>({
    resolver: zodResolver(validationSchema),
    mode: "onChange",
    defaultValues: {
      recaptchaToken: ""
    }
  });

  const formData = watch();
  const currentSectionIndex = sections.findIndex((section) => section.id === activeSection);

  const validateSection = useCallback(
    async (sectionId: string) => {
      const fieldsToValidate = getFieldsForSection(sectionId);
      const valid = await trigger(fieldsToValidate);
      if (valid) {
        setCompletedSections(prev => (prev.includes(sectionId) ? prev : [...prev, sectionId]));
      }
      return valid;
    },
    [trigger]
  );

  const copyPostalToDelivery = useCallback(() => {
    if (!sameAsPostal) return;
    const fieldsToUpdate = {
      deliveryAddress: formData.postalAddress,
      deliveryAddress2: formData.postalAddress2,
      deliveryCity: formData.postalCity,
      deliveryRegion: formData.postalRegion,
      deliveryPostcode: formData.postalPostcode,
    };
    Object.entries(fieldsToUpdate).forEach(([key, value]) => {
      if (value) {
        setValue(key as keyof FormData, value, { shouldValidate: true });
      }
    });
  }, [sameAsPostal, formData, setValue]);

  const copyDeliveryToEvent = useCallback(() => {
    if (!sameAsDelivery) return;
    const fieldsToUpdate = {
      eventAddress: formData.deliveryAddress,
      eventAddress2: formData.deliveryAddress2,
      eventCity: formData.deliveryCity,
      eventRegion: formData.deliveryRegion,
      eventPostcode: formData.deliveryPostcode,
    };
    Object.entries(fieldsToUpdate).forEach(([key, value]) => {
      if (value) {
        setValue(key as keyof FormData, value, { shouldValidate: true });
      }
    });
  }, [sameAsDelivery, formData, setValue]);

  useEffect(() => {
    const timer = setTimeout(copyPostalToDelivery, 300);
    return () => clearTimeout(timer);
  }, [formData.postalAddress, formData.postalAddress2, formData.postalCity, formData.postalRegion, formData.postalPostcode, copyPostalToDelivery]);

  useEffect(() => {
    const timer = setTimeout(copyDeliveryToEvent, 300);
    return () => clearTimeout(timer);
  }, [formData.deliveryAddress, formData.deliveryAddress2, formData.deliveryCity, formData.deliveryRegion, formData.deliveryPostcode, copyDeliveryToEvent]);

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

  const getFieldsForSection = (sectionId: string): Array<keyof FormData> => {
    switch (sectionId) {
      case "contact":
        return ["contactPerson", "mobilePhone", "email"];
      case "postal":
        return ["postalAddress", "postalCity", "postalRegion", "postalPostcode"];
      case "delivery":
        return ["deliveryAddress", "deliveryCity", "deliveryRegion", "deliveryPostcode"];
      case "event":
        return ["eventAddress","eventCity","eventRegion","eventPostcode","eventDate","eventType","numberOfDays","numberOfHoles"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: FormData) => {
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

  const handleStepClick = async (sectionId: string) => {
    const targetIndex = sections.findIndex((section) => section.id === sectionId);
    const currentIndex = sections.findIndex((section) => section.id === activeSection);
    if (targetIndex > currentIndex) {
      const valid = await validateSection(activeSection);
      if (!valid) return;
    }
    setActiveSection(sectionId);
  };

  const handleNext = async () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sections.length) {
      const valid = await validateSection(activeSection);
      if (valid) {
        setActiveSection(sections[nextIndex].id);
      }
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentSectionIndex - 1;
    if (prevIndex >= 0) {
      setActiveSection(sections[prevIndex].id);
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

        <StepIndicator steps={sections} currentStep={activeSection} onStepClick={handleStepClick} />

        <div className="relative w-full">
          <div className="relative min-h-[400px]">
            <FormStep isActive={activeSection === "contact"} direction="right">
              <div className="grid gap-6 md:grid-cols-2" itemScope itemType="https://schema.org/Organization">
                <FormField name="companyName" label="Company Name" register={register} error={errors.companyName?.message} itemProp="name"/>
                <FormField name="contactPerson" label="Contact Person" register={register} required error={errors.contactPerson?.message}/>
                <FormField name="landlinePhone" label="Landline Phone" type="tel" register={register} error={errors.landlinePhone?.message}/>
                <FormField name="mobilePhone" label="Mobile Phone" type="tel" register={register} required error={errors.mobilePhone?.message}/>
                <FormField name="email" label="Email" type="email" register={register} required error={errors.email?.message}/>
              </div>
            </FormStep>

            <FormStep isActive={activeSection === "postal"} direction={currentSectionIndex > 1 ? "left" : "right"}>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField name="postalAddress" label="Street Address" register={register} required error={errors.postalAddress?.message}/>
                <FormField name="postalAddress2" label="Street Address Line 2" register={register} error={errors.postalAddress2?.message}/>
                <FormField name="postalCity" label="Town / City" register={register} required error={errors.postalCity?.message}/>
                <FormField name="postalRegion" label="Region / Province" register={register} required error={errors.postalRegion?.message}/>
                <FormField name="postalPostcode" label="Post Code" register={register} required error={errors.postalPostcode?.message}/>
                <FormField name="poBox" label="PO Box Number" register={register} error={errors.poBox?.message}/>
              </div>
              <div className="mt-6">
                <FormCheckbox
                  checked={sameAsPostal}
                  onChange={(checked) => {
                    setSameAsPostal(checked);
                    if (checked) copyPostalToDelivery();
                  }}
                  label="Use postal address for delivery"
                  description="We'll deliver the equipment to your postal address"
                />
              </div>
            </FormStep>

            <FormStep isActive={activeSection === "delivery"} direction={currentSectionIndex > 2 ? "left" : "right"}>
              <div className="grid gap-6 md:grid-cols-2">
                <FormField name="deliveryAddress" label="Street Address" register={register} required error={errors.deliveryAddress?.message}/>
                <FormField name="deliveryAddress2" label="Street Address Line 2" register={register} error={errors.deliveryAddress2?.message}/>
                <FormField name="deliveryCity" label="Town / City" register={register} required error={errors.deliveryCity?.message}/>
                <FormField name="deliveryRegion" label="Region / Province" register={register} required error={errors.deliveryRegion?.message}/>
                <FormField name="deliveryPostcode" label="Post Code" register={register} required error={errors.deliveryPostcode?.message}/>
              </div>
              <div className="mt-6">
                <FormCheckbox
                  checked={sameAsDelivery}
                  onChange={(checked) => {
                    setSameAsDelivery(checked);
                    if (checked) copyDeliveryToEvent();
                  }}
                  label="Event at same location"
                  description="The event will be held at the delivery address"
                />
              </div>
            </FormStep>

            <FormStep isActive={activeSection === "event"} direction="left">
              <div className="grid gap-6 md:grid-cols-2">
                <FormField name="eventAddress" label="Street Address" register={register} required error={errors.eventAddress?.message}/>
                <FormField name="eventAddress2" label="Street Address Line 2" register={register} error={errors.eventAddress2?.message}/>
                <FormField name="eventCity" label="Town / City" register={register} required error={errors.eventCity?.message}/>
                <FormField name="eventRegion" label="Region / Province" register={register} required error={errors.eventRegion?.message}/>
                <FormField name="eventPostcode" label="Post Code" register={register} required error={errors.eventPostcode?.message}/>
                <FormField name="eventDate" label="Event Date" type="date" register={register} required error={errors.eventDate?.message}/>
                <FormField name="eventType" label="Event Type" type="select" register={register} required error={errors.eventType?.message} options={eventTypes}/>
                <FormField name="numberOfDays" label="Number of Days Required" type="number" register={register} required error={errors.numberOfDays?.message}/>
                <FormField name="numberOfHoles" label="Number of Holes" type="select" register={register} required error={errors.numberOfHoles?.message} 
                  options={[
                    { value: "1", label: "1 Hole" },
                    { value: "2", label: "2 Holes" },
                    { value: "3", label: "3 Holes" },
                    { value: "4", label: "4 Holes" },
                    { value: "5", label: "5 Holes" },
                    { value: "6", label: "6 Holes" },
                    { value: "9", label: "9 Holes" },
                  ]}
                />
                <FormField name="message" label="Additional Information" type="textarea" register={register} error={errors.message?.message}/>
              </div>
              <Container glass className="mt-8" itemScope itemType="https://schema.org/Offer">
                <meta itemProp="priceCurrency" content="NZD" />
                <div className="flex items-center justify-between border-b border-border/50 bg-background-secondary/30 p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">💰</span>
                    <Text variant="h4">Estimated Price</Text>
                  </div>
                  <div className="flex items-baseline">
                    <Text variant="h3" className="text-primary" itemProp="price">${price.toFixed(2)}</Text>
                    <Text variant="sm" className="ml-2 text-foreground-secondary">NZD excl. GST</Text>
                    <meta itemProp="availability" content="https://schema.org/InStock" />
                    <meta itemProp="validFrom" content={new Date().toISOString()} />
                    <meta itemProp="priceValidUntil" content={new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString()} />
                  </div>
                </div>
                <div className="p-6 space-y-2">
                  <Text variant="sm" className="text-foreground-secondary">
                    {formData.numberOfHoles && formData.numberOfDays ? 
                      `${formData.numberOfHoles} hole${parseInt(formData.numberOfHoles)>1?'s':''} for ${formData.numberOfDays} day${parseInt(formData.numberOfDays)>1?'s':''}` 
                      : 'Select number of holes and days to see pricing'}
                  </Text>
                  <Text variant="sm" className="text-foreground-secondary">• Freight rates will be quoted separately based on location</Text>
                  <Text variant="sm" className="text-foreground-secondary">• Maximum rental duration varies based on season and availability</Text>
                </div>
              </Container>
            </FormStep>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {currentSectionIndex > 0 && (
            <button type="button" onClick={handlePrevious} className="btn-outline inline-flex min-w-[120px] items-center justify-center gap-2 px-6">
              <Text variant="base">Previous</Text>
            </button>
          )}
          {currentSectionIndex < sections.length - 1 ? (
            <button type="button" onClick={handleNext} className="btn-primary inline-flex min-w-[120px] items-center justify-center gap-2 px-6">
              <Text variant="base">Next</Text>
            </button>
          ) : (
            <button
              type="submit"
              disabled={loading || !recaptchaLoaded || !isValid || !formData.recaptchaToken}
              className="btn-primary inline-flex min-w-[160px] items-center justify-center gap-2 px-8 py-3"
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
                  <Text variant="base">Submit Request</Text>
                </>
              )}
            </button>
          )}
        </div>

        <Container glass className="text-center">
          <Text variant="sm" className="text-foreground-secondary">
            By submitting this form, you agree to our <a href="/terms" className="text-primary hover:underline" itemProp="termsOfService">terms and conditions</a>
          </Text>
        </Container>
      </form>
    </>
  );
}
