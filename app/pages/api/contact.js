// my-app/app/pages/api/contact.js
// my-app/app/pages/api/contact.js
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: "onboarding@resend.dev", // Your verified sender email
      to: process.env.EMAIL, // Your personal email where you receive messages
      reply_to: email, // So when you reply, it goes to the sender
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    if (!result) {
      throw new Error("Failed to send email using Resend");
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error." });
  }
}
