import type { FormData } from "~/types/form";

type EmailFormData = Omit<FormData, "recaptchaToken">;

const SMTP2GO_API_URL = "https://api.smtp2go.com/v3/email/send";
const SENDER_EMAIL = "contact@golf2go.nz";
const RECIPIENT_EMAIL = "golf2go2017@gmail.com";

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
    <div style="background:#f4f4f4;padding:20px;font-family:Arial,sans-serif;font-size:14px;color:#333;">
      <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #ddd;border-radius:6px;overflow:hidden;">
        <div style="background:#004a2f;padding:20px;text-align:center;color:#fff;">
          <h2 style="margin:0;font-size:20px;font-weight:normal;">New Golf 2 Go Booking Request</h2>
        </div>
        <div style="padding:20px;">
          <p style="margin-top:0;margin-bottom:15px;">Submitted on ${new Date().toLocaleString("en-NZ")}</p>
          <h3 style="margin-top:0;margin-bottom:10px;font-size:16px;color:#004a2f;">Contact Information</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Company:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.companyName || 'N/A'}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Contact Person:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.contactPerson}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Email:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.email}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Mobile:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.mobilePhone}</td></tr>
            ${formData.landlinePhone ? `<tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Landline:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.landlinePhone}</td></tr>` : ''}
          </table>
          <h3 style="margin-top:0;margin-bottom:10px;font-size:16px;color:#004a2f;">Addresses</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;vertical-align:top;">Postal Address:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formatAddress("postal")}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;vertical-align:top;">Delivery Address:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formatAddress("delivery")}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Event Address:</td><td style="padding:8px;">${formatAddress("event")}</td></tr>
          </table>
          <h3 style="margin-top:0;margin-bottom:10px;font-size:16px;color:#004a2f;">Event Details</h3>
          <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Date:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${new Date(formData.eventDate).toLocaleDateString("en-NZ")}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Type:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.eventType}</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Duration:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.numberOfDays} day(s)</td></tr>
            <tr><td style="padding:8px;border-bottom:1px solid #ddd;font-weight:bold;">Number of Holes:</td><td style="padding:8px;border-bottom:1px solid #ddd;">${formData.numberOfHoles}</td></tr>
          </table>
          ${formData.message ? `
            <h3 style="margin-top:0;margin-bottom:10px;font-size:16px;color:#004a2f;">Additional Information</h3>
            <p style="margin-top:0;">${formData.message}</p>
          ` : ''}
        </div>
      </div>
    </div>
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
