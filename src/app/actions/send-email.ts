"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone: string
  message: string
}

export interface ActionResult {
  success: boolean
  message: string
}

export async function sendContactEmail(prevState: ActionResult | null, formData: FormData): Promise<ActionResult> {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    }

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Send email using Resend
    await resend.emails.send({
      from: "onboarding@resend.dev", // Resend's default domain
      to: "texaswebart@gmail.com", // Your Gmail address
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message.replace(/\n/g, "<br>")}</p>
      `,
      replyTo: data.email,
    })

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      message: "Sorry, there was an error sending your message. Please try again.",
    }
  }
}
