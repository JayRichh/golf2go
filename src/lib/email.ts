import type { FormData } from "~/types/form";

type EmailFormData = Omit<FormData, "recaptchaToken">;

export async function sendEmail(formData: EmailFormData) {
  if (!process.env.NEXT_PUBLIC_SMTP_KEY) {
    throw new Error("NEXT_PUBLIC_SMTP_KEY environment variable is not set");
  }

  const formatAddress = (prefix: "postal" | "delivery" | "event") => {
    const address = formData[`${prefix}Address`];
    const address2 = formData[`${prefix}Address2`];
    const city = formData[`${prefix}City`];
    const region = formData[`${prefix}Region`];
    const postcode = formData[`${prefix}Postcode`];

    return `
      ${address}${address2 ? `<br>${address2}` : ""}
      <br>${city}
      <br>${region}
      <br>${postcode}
    `;
  };

  // Match the exact SMTP2GO API payload structure that works in the Vue app
  const emailPayload = {
    api_key: process.env.NEXT_PUBLIC_SMTP_KEY,
    to: ["steven@golf2go.co.nz"],
    sender: "noreply@golf2go.co.nz",
    subject: `New Booking Request from ${formData.companyName || formData.contactPerson}`,
    html_body: `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 800px; margin: 0 auto; padding: 30px; border: 1px solid #ddd; border-radius: 12px; background-color: #fff;">
      <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #16a34a;">
        <h1 style="color: #16a34a; margin: 0;">New Golf 2 Go Booking Request</h1>
        <p style="color: #666; margin-top: 10px;">Submitted on ${new Date().toLocaleString("en-NZ")}</p>
      </div>

      <!-- Contact Information -->
      <div style="margin-bottom: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <h2 style="color: #16a34a; margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Contact Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          ${formData.companyName ? `
          <tr>
            <td style="padding: 8px 0; width: 150px;"><strong>Company:</strong></td>
            <td style="padding: 8px 0;">${formData.companyName}</td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0;"><strong>Contact Person:</strong></td>
            <td style="padding: 8px 0;">${formData.contactPerson}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Email:</strong></td>
            <td style="padding: 8px 0;"><a href="mailto:${formData.email}" style="color: #16a34a;">${formData.email}</a></td>
          </tr>
          ${formData.landlinePhone ? `
          <tr>
            <td style="padding: 8px 0;"><strong>Landline:</strong></td>
            <td style="padding: 8px 0;"><a href="tel:${formData.landlinePhone}" style="color: #16a34a;">${formData.landlinePhone}</a></td>
          </tr>
          ` : ""}
          <tr>
            <td style="padding: 8px 0;"><strong>Mobile:</strong></td>
            <td style="padding: 8px 0;"><a href="tel:${formData.mobilePhone}" style="color: #16a34a;">${formData.mobilePhone}</a></td>
          </tr>
        </table>
      </div>

      <!-- Addresses -->
      <div style="margin-bottom: 30px;">
        <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #16a34a; margin-top: 0; font-size: 1.2em; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Postal Address</h2>
          <div style="line-height: 1.6;">${formatAddress("postal")}</div>
        </div>

        <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #16a34a; margin-top: 0; font-size: 1.2em; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Delivery Address</h2>
          <div style="line-height: 1.6;">${formatAddress("delivery")}</div>
        </div>

        <div style="padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
          <h2 style="color: #16a34a; margin-top: 0; font-size: 1.2em; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Event Address</h2>
          <div style="line-height: 1.6;">${formatAddress("event")}</div>
        </div>
      </div>

      <!-- Event Details -->
      <div style="margin-bottom: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <h2 style="color: #16a34a; margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Event Details</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; width: 150px;"><strong>Event Date:</strong></td>
            <td style="padding: 8px 0;">${new Date(formData.eventDate).toLocaleDateString("en-NZ", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Event Type:</strong></td>
            <td style="padding: 8px 0;">${formData.eventType}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Duration:</strong></td>
            <td style="padding: 8px 0;">${formData.numberOfDays} day${formData.numberOfDays === "1" ? "" : "s"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0;"><strong>Greens:</strong></td>
            <td style="padding: 8px 0;">${formData.numberOfGreens} green${formData.numberOfGreens === "1" ? "" : "s"}</td>
          </tr>
        </table>
      </div>

      ${formData.message ? `
      <!-- Additional Information -->
      <div style="margin-bottom: 30px; padding: 20px; background-color: #f8f9fa; border-radius: 8px;">
        <h2 style="color: #16a34a; margin-top: 0; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Additional Information</h2>
        <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${formData.message}</p>
      </div>
      ` : ""}
    </div>
    `
  };

  try {
    const response = await fetch("https://api.smtp2go.com/v3/email/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(emailPayload)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("SMTP2GO API error:", errorData);
      throw new Error(`Email service error: ${response.status}`);
    }

    const result = await response.json();
    if (!(result.data?.succeeded > 0)) {
      console.error("SMTP2GO API response:", result);
      throw new Error("Email not sent successfully");
    }

    return true;
  } catch (error) {
    console.error("Email service error:", error);
    throw error;
  }
}
