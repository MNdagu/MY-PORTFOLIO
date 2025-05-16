// my-app/app/components/Contact.jsx

"use client";

import { useState } from "react";
import Section from "@/components/Section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Send, User, CheckCircle, AlertCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const response = await fetch("https://formspree.io/f/xnnjzpgw", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } else {
      setStatus("Something went wrong. Try again later.");
    }
  };

  return (
    <Section id="contact" title="Get In Touch" className="bg-primary/20">
      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Name
            </label>
            <div className="relative">
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="pl-10"
                aria-label="Your name"
              />
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Email
            </label>
            <div className="relative">
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="pl-10"
                aria-label="Your email address"
              />
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-foreground"
            >
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="min-h-[150px]"
              aria-label="Your message"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </form>

        {status && (
          <div
            className={`mt-6 p-4 rounded-lg flex items-center space-x-2 animate-fade-in ${
              status === "Message sent successfully!"
                ? "bg-accent/10 text-accent"
                : status === "Sending..."
                ? "bg-primary/10 text-primary"
                : "bg-destructive/10 text-destructive"
            }`}
          >
            {status === "Message sent successfully!" ? (
              <CheckCircle className="h-5 w-5 flex-shrink-0" />
            ) : status === "Sending..." ? (
              <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
            ) : (
              <AlertCircle className="h-5 w-5 flex-shrink-0" />
            )}
            <p>{status}</p>
          </div>
        )}
      </div>
    </Section>
  );
}
