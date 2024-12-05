import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";
const RECIPIENT_EMAIL = "steven@golf2go.co.nz";

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

export async function POST(request: NextRequest) {
  console.log("Starting booking request process...");

  try {
    const apiKey = process.env.NEXT_SMTP_KEY;
    if (!apiKey || !process.env.RECAPTCHA_SECRET_KEY) {
      console.error("Missing required environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log("Received request data:", body);

    // Validate form data
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
    const { recaptchaToken, ...formData } = validatedData;

    const formatAddress = (prefix: "postal" | "delivery" | "event") => {
      const address = formData[`${prefix}Address`];
      const address2 = formData[`${prefix}Address2`];
      const city = formData[`${prefix}City`];
      const region = formData[`${prefix}Region`];
      const postcode = formData[`${prefix}Postcode`];
  
      return `${address}${address2 ? `, ${address2}` : ""}, ${city}, ${region}, ${postcode}`;
    };

    const htmlBody = `
      <h2>New Golf 2 Go Booking Request</h2>
      <p>Submitted on ${new Date().toLocaleString("en-NZ")}</p>

      <h3>Contact Information</h3>
      <p><strong>Company:</strong> ${formData.companyName || 'N/A'}</p>
      <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Mobile:</strong> ${formData.mobilePhone}</p>
      ${formData.landlinePhone ? `<p><strong>Landline:</strong> ${formData.landlinePhone}</p>` : ''}

      <h3>Addresses</h3>
      <p><strong>Postal Address:</strong><br>${formatAddress("postal")}</p>
      <p><strong>Delivery Address:</strong><br>${formatAddress("delivery")}</p>
      <p><strong>Event Address:</strong><br>${formatAddress("event")}</p>

      <h3>Event Details</h3>
      <p><strong>Date:</strong> ${new Date(formData.eventDate).toLocaleDateString("en-NZ")}</p>
      <p><strong>Type:</strong> ${formData.eventType}</p>
      <p><strong>Duration:</strong> ${formData.numberOfDays} day(s)</p>
      <p><strong>Number of Greens:</strong> ${formData.numberOfGreens}</p>

      ${formData.message ? `
      <h3>Additional Information</h3>
      <p>${formData.message}</p>
      ` : ''}
    `;

    // Structure the payload according to SMTP2GO's API requirements
    const payload = {
      api_key: apiKey,
      to: [RECIPIENT_EMAIL],
      sender: RECIPIENT_EMAIL,
      subject: `New Booking Request from ${formData.companyName || formData.contactPerson}`,
      html_body: htmlBody,
      custom_headers: [
        {
          header: "Reply-To",
          value: formData.email
        }
      ]
    };

    console.log("Sending email via SMTP2GO...");

    const response = await fetch(SMTP2GO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();
    console.log("SMTP2GO API response:", responseData);

    if (!response.ok) {
      console.error("SMTP2GO API error response:", {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      return NextResponse.json(
        { error: "Failed to send email", details: responseData },
        { status: 500 }
      );
    }

    if (!(responseData.data?.succeeded > 0)) {
      console.error("SMTP2GO API unsuccessful response:", responseData);
      return NextResponse.json(
        { error: "Email not sent successfully", details: responseData },
        { status: 500 }
      );
    }

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
