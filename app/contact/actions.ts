"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  errors?: {
    name?: string[];
    email?: string[];
    subject?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  };

  // Validate
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
    };
  }

  // Honeypot check
  const honeypot = formData.get("website");
  if (honeypot) {
    return { success: true }; // Silently succeed for bots
  }

  try {
    // In production, send email via your preferred service (SendGrid, Resend, etc.)
    // For now, we'll just log it
    console.log("Contact form submission:", result.data);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact form:", error);
    return {
      error: "Failed to send message. Please try again or email directly.",
    };
  }
}
