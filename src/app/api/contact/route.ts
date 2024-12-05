import { z } from "zod";
import { NextResponse } from "next/server";
import { sendEmail } from "~/lib/email";
import type { FormData } from "~/types/form";

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

export async function POST(request: Request) {
  try {
    if (!process.env.RECAPTCHA_SECRET_KEY || !process.env.SMTP_KEY) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const validatedData = formSchema.parse(body);

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
    await sendEmail(emailData);

    return NextResponse.json(
      { message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Form submission error:", error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
