import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "~/lib/email";

// Schema for complex form (original) - keeping for backward compatibility
const complexFormSchema = z.object({
  companyName: z.string().optional(),
  contactPerson: z.string().min(2, "Contact person name is required"),
  landlinePhone: z.string().optional(),
  mobilePhone: z.string().min(8, "Mobile phone is required"),
  email: z.string().email("Invalid email address"),
  postalAddress: z.string().min(1, "Postal address is required"),
  postalAddress2: z.string().optional(),
  postalCity: z.string().min(1, "Postal city is required"),
  postalRegion: z.string().min(1, "Postal region is required"),
  postalPostcode: z.string().min(1, "Postal post code is required"),
  poBox: z.string().optional(),
  deliveryAddress: z.string().min(1, "Delivery address is required"),
  deliveryAddress2: z.string().optional(),
  deliveryCity: z.string().min(1, "Delivery city is required"),
  deliveryRegion: z.string().min(1, "Delivery region is required"),
  deliveryPostcode: z.string().min(1, "Delivery post code is required"),
  eventAddress: z.string().min(1, "Event address is required"),
  eventAddress2: z.string().optional(),
  eventCity: z.string().min(1, "Event city is required"),
  eventRegion: z.string().min(1, "Event region is required"),
  eventPostcode: z.string().min(1, "Event post code is required"),
  eventDate: z.string().min(1, "Event date is required"),
  eventType: z.string().min(1, "Event type is required"),
  numberOfDays: z.string().min(1, "Number of days is required"),
  numberOfHoles: z.string().min(1, "Number of holes is required"),
  message: z.string().optional(),
  // For backward compatibility with old form that might still have recaptcha
  recaptchaToken: z.string().optional(),
});

// Schema for simplified form (new) - NO reCAPTCHA
const simpleFormSchema = z.object({
  contactPerson: z.string().min(2, "Contact person name is required"),
  mobilePhone: z.string().min(8, "Mobile phone is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().optional(),
  eventDate: z.string().min(1, "Event date is required"),
  eventLocation: z.string().min(1, "Event location is required"),
  numberOfParticipants: z.string().min(1, "Number of participants is required"),
  numberOfHoles: z.string().min(1, "Number of holes is required"),
  numberOfDays: z.string().min(1, "Number of days is required"),
  additionalRequirements: z.string().optional(),
  acceptTerms: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
  // Simple honeypot field
  _honeypot: z.string().optional(),
});

export async function POST(request: NextRequest) {
  console.log("Starting booking request process...");

  try {
    if (!process.env.NEXT_SMTP_KEY) {
      console.error("Missing SMTP key environment variable");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Received request data");

    // Determine form type and validate accordingly
    let validatedData;
    const isSimpleForm = 'eventLocation' in body || 'numberOfParticipants' in body;
    
    try {
      if (isSimpleForm) {
        validatedData = simpleFormSchema.parse(body);
        console.log("Simple form validation passed");
        
        // Simple honeypot check - if filled, it's a bot
        if (validatedData._honeypot && validatedData._honeypot.trim() !== '') {
          console.log("Bot detected via honeypot");
          return NextResponse.json(
            { error: "Security check failed" },
            { status: 400 }
          );
        }
      } else {
        validatedData = complexFormSchema.parse(body);
        console.log("Complex form validation passed");
      }
    } catch (error) {
      console.error("Form validation failed:", error);
      return NextResponse.json(
        { error: "Invalid form data", details: error instanceof z.ZodError ? error.errors : String(error) },
        { status: 400 }
      );
    }

    // Remove honeypot, recaptchaToken and acceptTerms before sending email
    let emailData;
    if (isSimpleForm) {
      const { _honeypot, acceptTerms, ...cleanSimpleData } = validatedData as any;
      emailData = cleanSimpleData;
    } else {
      const { recaptchaToken, ...cleanComplexData } = validatedData as any;
      emailData = cleanComplexData;
    }

    // Send email using the consolidated email service
    await sendEmail(emailData);

    console.log("Email sent successfully");
    return NextResponse.json(
      { message: "Booking request sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Unexpected error in booking request:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error instanceof Error ? error.message : String(error)
      },
      { status: 500 }
    );
  }
}
