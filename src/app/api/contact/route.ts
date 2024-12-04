import { NextResponse } from 'next/server';
import { sendEmail } from '~/lib/email';
import type { FormData } from '~/types/form';
import { z } from 'zod';

const formSchema = z.object({
  companyName: z.string().optional(),
  contactPerson: z.string().min(2, 'Contact person name is required'),
  phone: z.string().optional(),
  email: z.string().email('Invalid email address'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  region: z.string().min(1, 'Region is required'),
  postcode: z.string().min(1, 'Post code is required'),
  eventDate: z.string().min(1, 'Event date is required'),
  eventType: z.string().min(1, 'Event type is required'),
  numberOfDays: z.string().min(1, 'Number of days is required'),
  numberOfGreens: z.string().min(1, 'Number of greens is required'),
  message: z.string().optional(),
  recaptchaToken: z.string().min(1, 'reCAPTCHA verification failed'),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = formSchema.parse(body);

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${validatedData.recaptchaToken}`,
      { method: 'POST' }
    );

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      );
    }

    // Remove recaptchaToken before sending email
    const { recaptchaToken, ...emailData } = validatedData;

    // Send email with the cleaned data
    await sendEmail(emailData as FormData);

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
