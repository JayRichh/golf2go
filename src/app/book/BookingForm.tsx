'use client';

import { useEffect, useState, useCallback, useMemo } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Container } from '~/components/ui/Container';
import { Text } from '~/components/ui/Text';
import { FormStep } from '~/components/ui/FormStep';
import { StepIndicator } from '~/components/ui/StepIndicator';
import { FormCheckbox } from '~/components/ui/FormCheckbox';
import { FormField } from '~/components/ui/FormField';
import { sendEmail } from '~/lib/email';
import type { FormData } from '~/types/form';

const formSchema = z.object({
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
  numberOfGreens: z.string().min(1, "Number of greens is required"),
  message: z.string().optional(),
});

type Section = {
  id: string;
  title: string;
  icon: string;
  description: string;
};

const sections: Section[] = [
  { id: 'contact', title: 'Contact Details', icon: '👤', description: 'Your contact information' },
  { id: 'postal', title: 'Postal Address', icon: '📮', description: 'Where to send documents' },
  { id: 'delivery', title: 'Delivery Details', icon: '🚚', description: 'Where to deliver equipment' },
  { id: 'event', title: 'Event Information', icon: '🎯', description: 'Details about your event' }
];

const eventTypes = [
  { value: 'corporate', label: 'Corporate Event' },
  { value: 'birthday', label: 'Birthday Party' },
  { value: 'school', label: 'School Event' },
  { value: 'other', label: 'Other' }
];

export default function BookingForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sameAsPostal, setSameAsPostal] = useState(false);
  const [sameAsDelivery, setSameAsDelivery] = useState(false);
  const [activeSection, setActiveSection] = useState('contact');
  const [showPriceInfo, setShowPriceInfo] = useState(false);
  const [completedSections, setCompletedSections] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    setValue,
    trigger,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onBlur',
    criteriaMode: 'firstError'
  });

  const getFieldsForSection = (sectionId: string): Array<keyof FormData> => {
    switch (sectionId) {
      case 'contact':
        return ['contactPerson', 'mobilePhone', 'email'];
      case 'postal':
        return ['postalAddress', 'postalCity', 'postalRegion', 'postalPostcode'];
      case 'delivery':
        return ['deliveryAddress', 'deliveryCity', 'deliveryRegion', 'deliveryPostcode'];
      case 'event':
        return ['eventAddress', 'eventCity', 'eventRegion', 'eventPostcode', 'eventDate', 'eventType', 'numberOfDays', 'numberOfGreens'];
      default:
        return [];
    }
  };

  const formData = watch();
  const currentSectionIndex = sections.findIndex(section => section.id === activeSection);

  const validateSection = useCallback(async (sectionId: string) => {
    const fieldsToValidate = getFieldsForSection(sectionId);
    const isValid = await trigger(fieldsToValidate);
    
    if (isValid) {
      setCompletedSections(prev => 
        prev.includes(sectionId) ? prev : [...prev, sectionId]
      );
    }
    
    return isValid;
  }, [trigger]);

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
  
  const price = useMemo(() => {
    const days = parseInt(formData.numberOfDays) || 1;
    const greens = parseInt(formData.numberOfGreens) || 1;
    const basePrice = 500;
    const greenPrice = 250;
    let dayMultiplier = 1;

    if (days > 1) {
      dayMultiplier = days * 0.8;
    }

    return (basePrice + (greenPrice * greens)) * dayMultiplier;
  }, [formData.numberOfDays, formData.numberOfGreens]);

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setError(null);

    try {
      await sendEmail(data);
      setSuccess(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setError('Failed to send booking request. Please try again or contact us directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleStepClick = async (sectionId: string) => {
    const targetIndex = sections.findIndex(section => section.id === sectionId);
    const currentIndex = sections.findIndex(section => section.id === activeSection);

    if (targetIndex > currentIndex) {
      const isValid = await validateSection(activeSection);
      if (!isValid) return;
    }

    setActiveSection(sectionId);
  };

  const handleNext = async () => {
    const nextIndex = currentSectionIndex + 1;
    if (nextIndex < sections.length) {
      const isValid = await validateSection(activeSection);
      if (isValid) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      {/* Status Messages */}
      {success && (
        <Container glass className="border-success/20 bg-success/10">
          <div className="flex items-center gap-3">
            <span className="text-xl">✅</span>
            <div>
              <Text variant="base" className="font-medium text-success">
                Booking request sent successfully!
              </Text>
              <Text variant="sm" className="text-success">
                We'll get back to you soon with confirmation details.
              </Text>
            </div>
          </div>
        </Container>
      )}

      {error && (
        <Container glass className="border-error/20 bg-error/10">
          <div className="flex items-center gap-3">
            <span className="text-xl">⚠️</span>
            <div>
              <Text variant="base" className="font-medium text-error">
                Something went wrong
              </Text>
              <Text variant="sm" className="text-error">
                {error}
              </Text>
            </div>
          </div>
        </Container>
      )}

      {/* Progress Steps */}
      <StepIndicator
        steps={sections}
        currentStep={activeSection}
        onStepClick={handleStepClick}
      />

      {/* Form Content */}
      <div className="relative w-full">
      <div className="relative min-h-[400px]">
          {/* Contact Section */}
          <FormStep isActive={activeSection === 'contact'} direction="right">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                name="companyName"
                label="Company Name"
                register={register}
                error={errors.companyName?.message}
              />
              <FormField
                name="contactPerson"
                label="Contact Person"
                register={register}
                required
                error={errors.contactPerson?.message}
              />
              <FormField
                name="landlinePhone"
                label="Landline Phone"
                type="tel"
                register={register}
                error={errors.landlinePhone?.message}
              />
              <FormField
                name="mobilePhone"
                label="Mobile Phone"
                type="tel"
                register={register}
                required
                error={errors.mobilePhone?.message}
              />
              <FormField
                name="email"
                label="Email"
                type="email"
                register={register}
                required
                error={errors.email?.message}
              />
            </div>
          </FormStep>

          {/* Postal Section */}
          <FormStep isActive={activeSection === 'postal'} direction={currentSectionIndex > 1 ? 'left' : 'right'}>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                name="postalAddress"
                label="Street Address"
                register={register}
                required
                error={errors.postalAddress?.message}
              />
              <FormField
                name="postalAddress2"
                label="Street Address Line 2"
                register={register}
                error={errors.postalAddress2?.message}
              />
              <FormField
                name="postalCity"
                label="Town / City"
                register={register}
                required
                error={errors.postalCity?.message}
              />
              <FormField
                name="postalRegion"
                label="Region / Province"
                register={register}
                required
                error={errors.postalRegion?.message}
              />
              <FormField
                name="postalPostcode"
                label="Post Code"
                register={register}
                required
                error={errors.postalPostcode?.message}
              />
              <FormField
                name="poBox"
                label="PO Box Number"
                register={register}
                error={errors.poBox?.message}
              />
            </div>
            <div className="mt-6">
              <FormCheckbox
                checked={sameAsPostal}
                onChange={(checked) => {
                  setSameAsPostal(checked);
                  if (checked) {
                    copyPostalToDelivery();
                  }
                }}
                label="Use postal address for delivery"
                description="We'll deliver the equipment to your postal address"
              />
            </div>
          </FormStep>

          {/* Delivery Section */}
          <FormStep isActive={activeSection === 'delivery'} direction={currentSectionIndex > 2 ? 'left' : 'right'}>
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                name="deliveryAddress"
                label="Street Address"
                register={register}
                required
                error={errors.deliveryAddress?.message}
              />
              <FormField
                name="deliveryAddress2"
                label="Street Address Line 2"
                register={register}
                error={errors.deliveryAddress2?.message}
              />
              <FormField
                name="deliveryCity"
                label="Town / City"
                register={register}
                required
                error={errors.deliveryCity?.message}
              />
              <FormField
                name="deliveryRegion"
                label="Region / Province"
                register={register}
                required
                error={errors.deliveryRegion?.message}
              />
              <FormField
                name="deliveryPostcode"
                label="Post Code"
                register={register}
                required
                error={errors.deliveryPostcode?.message}
              />
            </div>
            <div className="mt-6">
              <FormCheckbox
                checked={sameAsDelivery}
                onChange={(checked) => {
                  setSameAsDelivery(checked);
                  if (checked) {
                    copyDeliveryToEvent();
                  }
                }}
                label="Event at same location"
                description="The event will be held at the delivery address"
              />
            </div>
          </FormStep>

          {/* Event Section */}
          <FormStep isActive={activeSection === 'event'} direction="left">
            <div className="grid gap-6 md:grid-cols-2">
              <FormField
                name="eventAddress"
                label="Street Address"
                register={register}
                required
                error={errors.eventAddress?.message}
              />
              <FormField
                name="eventAddress2"
                label="Street Address Line 2"
                register={register}
                error={errors.eventAddress2?.message}
              />
              <FormField
                name="eventCity"
                label="Town / City"
                register={register}
                required
                error={errors.eventCity?.message}
              />
              <FormField
                name="eventRegion"
                label="Region / Province"
                register={register}
                required
                error={errors.eventRegion?.message}
              />
              <FormField
                name="eventPostcode"
                label="Post Code"
                register={register}
                required
                error={errors.eventPostcode?.message}
              />
              <FormField
                name="eventDate"
                label="Event Date"
                type="date"
                register={register}
                required
                error={errors.eventDate?.message}
              />
              <FormField
                name="eventType"
                label="Event Type"
                type="select"
                register={register}
                required
                error={errors.eventType?.message}
                options={eventTypes}
              />
              <FormField
                name="numberOfDays"
                label="Number of Days Required"
                type="number"
                register={register}
                required
                error={errors.numberOfDays?.message}
              />
              <FormField
                name="numberOfGreens"
                label="Number of Greens"
                type="number"
                register={register}
                required
                error={errors.numberOfGreens?.message}
              />
              <FormField
                name="message"
                label="Additional Information"
                type="textarea"
                register={register}
                error={errors.message?.message}
              />
            </div>

            <Container glass className="mt-8">
              <div className="flex items-center justify-between border-b border-border/50 bg-background-secondary/30 p-4">
                <div className="flex items-center gap-3">
                  <span className="text-xl">💰</span>
                  <Text variant="h4">Estimated Price</Text>
                  <button
                    type="button"
                    onClick={() => setShowPriceInfo(!showPriceInfo)}
                    className="ml-2 rounded-full bg-background-secondary p-2 text-foreground-secondary transition-colors hover:bg-background hover:text-foreground"
                  >
                    ℹ️
                  </button>
                </div>
                <div className="flex items-baseline">
                  <Text variant="h3" className="text-primary">
                    ${price.toFixed(2)}
                  </Text>
                  <Text variant="sm" className="ml-2 text-foreground-secondary">
                    NZD excl. GST
                  </Text>
                </div>
              </div>
              <div className="p-6">
                {showPriceInfo && (
                  <div className="mb-4 rounded-lg bg-background-secondary/50 p-4">
                    <Text variant="sm" className="mb-2 font-medium">
                      Price Breakdown:
                    </Text>
                    <ul className="list-inside list-disc space-y-1">
                      <li><Text variant="sm" className="text-foreground-secondary">Base price: $500</Text></li>
                      <li><Text variant="sm" className="text-foreground-secondary">Additional greens: $250 each</Text></li>
                      <li><Text variant="sm" className="text-foreground-secondary">Multi-day discount: 20% off for bookings longer than 1 day</Text></li>
                    </ul>
                  </div>
                )}
                <Text variant="sm" className="text-foreground-secondary">
                  Final price may vary based on location and specific requirements
                </Text>
              </div>
            </Container>
          </FormStep>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4">
        {currentSectionIndex > 0 && (
          <button
            type="button"
            onClick={handlePrevious}
            className="btn-outline inline-flex min-w-[120px] items-center justify-center gap-2 px-6"
          >
            <Text variant="base">Previous</Text>
          </button>
        )}
        {currentSectionIndex < sections.length - 1 ? (
          <button
            type="button"
            onClick={handleNext}
            className="btn-primary inline-flex min-w-[120px] items-center justify-center gap-2 px-6"
          >
            <Text variant="base">Next</Text>
          </button>
        ) : (
          <button
            type="submit"
            disabled={loading}
            className="btn-primary inline-flex min-w-[160px] items-center justify-center gap-2 px-8 py-3"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg 
                  className="h-5 w-5 animate-spin" 
                  xmlns="http://www.w3.org/2000/svg" 
                  fill="none" 
                  viewBox="0 0 24 24"
                >
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                  />
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
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
          By submitting this form, you agree to our terms and conditions
        </Text>
      </Container>
    </form>
  );
}
