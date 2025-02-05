// my-app/app/components/Contact.jsx

"use client";

import { useState } from "react";
import { submitContactForm } from "../actions/contact";

export default function Contact() {
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const result = await submitContactForm(formData);
    setMessage(result.message);
  }

  return (
    <section id="contact" className="py-20 bg-amber-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-black">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-500"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium mb-2 text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-amber-500 min-h-[120px]"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-950 text-white py-3 px-6 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
        {message && (
          <p className="mt-6 text-center text-green-500">{message}</p>
        )}
      </div>
    </section>
  );
}
