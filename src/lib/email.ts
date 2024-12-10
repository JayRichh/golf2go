import type { FormData } from "~/types/form";

type EmailFormData = Omit<FormData, "recaptchaToken">;

const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";
const SENDER_EMAIL = "hello@golf2go.nz";
const RECIPIENT_EMAIL = "steven@golf2go.co.nz";

export async function sendEmail(formData: EmailFormData) {
  if (!process.env.NEXT_SMTP_KEY) {
    throw new Error("NEXT_SMTP_KEY environment variable is not set");
  }

  
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
    <p><strong>Number of Holes:</strong> ${formData.numberOfHoles}</p>

    ${formData.message ? `
    <h3>Additional Information</h3>
    <p>${formData.message}</p>
    ` : ''}
  `;

  const payload = {
    api_key: process.env.NEXT_SMTP_KEY,
    sender: SENDER_EMAIL,
    to: [RECIPIENT_EMAIL],
    subject: `New Booking Request from ${formData.companyName || formData.contactPerson}`,
    html_body: htmlBody,
    custom_headers: [
      {
        header: "Reply-To",
        value: formData.email
      }
    ]
  };

  try {
    const response = await fetch(SMTP2GO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const responseData = await response.json();

    if (!response.ok) {
      console.error("SMTP2GO API error response:", {
        status: response.status,
        statusText: response.statusText,
        data: responseData
      });
      throw new Error(`Email service error: ${response.status}`);
    }

    if (!(responseData.data?.succeeded > 0)) {
      console.error("SMTP2GO API unsuccessful response:", responseData);
      throw new Error("Email not sent successfully");
    }

    return true;
  } catch (error) {
    console.error("Email service error:", error);
    throw error;
  }
}
