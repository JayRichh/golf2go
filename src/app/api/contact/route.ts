import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { sendEmail } from "~/lib/email";

const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";

// Simple rate limiting
const RATE_LIMIT = 5;
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const ipRequests = new Map<string, { count: number; timestamp: number }>();

function rateLimitCheck(ip: string): boolean {
  const now = Date.now();
  const requestData = ipRequests.get(ip) || { count: 0, timestamp: now };

  if (now - requestData.timestamp > RATE_LIMIT_WINDOW) {
    requestData.count = 1;
    requestData.timestamp = now;
  } else {
    requestData.count++;
  }

  ipRequests.set(ip, requestData);
  return requestData.count <= RATE_LIMIT;
}

const formSchema = z.object({
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
  numberOfGreens: z.string().min(1, "Number of greens is required"),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, "reCAPTCHA verification failed"),
});

export async function POST(req: NextRequest) {
  console.log("Starting booking request process...");
  const ip = req.headers.get("x-forwarded-for") || "unknown";

  if (!rateLimitCheck(ip)) {
    console.log("Rate limit exceeded for IP:", ip);
    return NextResponse.json(
      { error: "Rate limit exceeded. Please try again later." },
      { status: 429 }
    );
  }

  try {
    // Check environment variables
    if (!process.env.RECAPTCHA_SECRET_KEY || !process.env.NEXT_SMTP_KEY) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    // Parse and validate request body
    const body = await req.json();
    console.log("Received request data");

    try {
      const validatedData = formSchema.parse(body);
      console.log("Data validation passed");

      // Verify reCAPTCHA
      const recaptchaResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: validatedData.recaptchaToken,
          }),
        }
      );

      const recaptchaData = await recaptchaResponse.json();
      console.log("reCAPTCHA verification response:", recaptchaData);

      if (!recaptchaData.success) {
        console.error("reCAPTCHA verification failed:", recaptchaData["error-codes"]);
        return NextResponse.json(
          { error: "reCAPTCHA verification failed" },
          { status: 400 }
        );
      }

      // Remove recaptchaToken before sending email
      const { recaptchaToken, ...emailData } = validatedData;

      // Send email
      try {
        await sendEmail(emailData);
        console.log("Email sent successfully");
        return NextResponse.json(
          { message: "Booking request sent successfully" },
          { status: 200 }
        );
      } catch (emailError) {
        console.error("Email service error:", emailError);
        return NextResponse.json(
          { 
            error: "Failed to send booking request",
            details: emailError instanceof Error ? emailError.message : String(emailError)
          },
          { status: 500 }
        );
      }
    } catch (validationError) {
      console.error("Validation error:", validationError);
      if (validationError instanceof z.ZodError) {
        return NextResponse.json(
          { error: validationError.errors[0].message },
          { status: 400 }
        );
      }
      throw validationError;
    }
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
