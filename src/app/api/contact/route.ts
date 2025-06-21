import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "~/lib/email";

// Schema for complex form (original)
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
  recaptchaToken: z.string().min(1, "reCAPTCHA verification failed"),
});

// Schema for simplified form (new)
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
  recaptchaToken: z.string().min(1, "reCAPTCHA verification failed"),
});

export async function POST(request: NextRequest) {
  console.log("Starting booking request process...");

  try {
    if (!process.env.NEXT_SMTP_KEY || !process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Received request data:", body);

    // Determine form type and validate accordingly
    let validatedData;
    const isSimpleForm = 'eventLocation' in body || 'numberOfParticipants' in body;
    
    try {
      if (isSimpleForm) {
        validatedData = simpleFormSchema.parse(body);
        console.log("Simple form validation passed");
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

    // Verify reCAPTCHA using Google Assessment API for production security
    const projectId = "golf2go-recaptcha"; // You may need to set this as env var
    
    try {
      // For now, fallback to siteverify but with enhanced validation
      const recaptchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: validatedData.recaptchaToken,
            remoteip: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
          }),
        }
      );

      const recaptchaData = await recaptchaResponse.json();
      console.log("reCAPTCHA verification response:", recaptchaData);

      // Enhanced validation - check score for v3
      if (!recaptchaData.success) {
        console.error("reCAPTCHA verification failed:", recaptchaData["error-codes"]);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed. Please try again." },
          { status: 400 }
        );
      }

      // For reCAPTCHA v3, check score (should be > 0.5 for legitimate users)
      if (recaptchaData.score !== undefined && recaptchaData.score < 0.5) {
        console.error("reCAPTCHA score too low:", recaptchaData.score);
        return NextResponse.json(
          { error: "Security verification failed. Please try again." },
          { status: 400 }
        );
      }

      // Verify action matches expected action
      if (recaptchaData.action && recaptchaData.action !== 'submit') {
        console.error("reCAPTCHA action mismatch:", recaptchaData.action);
        return NextResponse.json(
          { error: "Security verification failed. Invalid action." },
          { status: 400 }
        );
      }

    } catch (recaptchaError) {
      console.error("reCAPTCHA verification error:", recaptchaError);
      return NextResponse.json(
        { error: "reCAPTCHA verification failed. Please try again." },
        { status: 400 }
      );
    }

    // Remove recaptchaToken and acceptTerms before sending email
    const { recaptchaToken, ...emailData } = validatedData;
    
    // Remove acceptTerms if it exists (simple form only)
    const formData = 'acceptTerms' in emailData ?
      (({ acceptTerms, ...rest }) => rest)(emailData as any) :
      emailData;

    // Send email using the consolidated email service
    await sendEmail(formData as any);

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
