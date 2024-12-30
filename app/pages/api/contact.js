import { Resend } from "resend"; // Import the Resend package
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY); // Your Resend API key

export async function POST(req, res) {
  console.log("Received POST request to /api/contact");

  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required." });
    }

    // Send the email using Resend
    const result = await resend.sendEmail({
      from: email === null || email === undefined ? "" : email, // Sender's email
      to:
        process.env.EMAIL === null || process.env.EMAIL === undefined
          ? ""
          : process.env.EMAIL, // Recipient email
      subject: "New Contact Form Submission",
      text: `Name: ${name === null || name === undefined ? "" : name}\nEmail: ${
        email === null || email === undefined ? "" : email
      }\nMessage: ${message === null || message === undefined ? "" : message}`,
    });

    if (result === null || result === undefined) {
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
