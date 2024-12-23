'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { submitContactForm } from '../actions/contact'

export default function Contact() {
  const [message, setMessage] = useState('')

  async function handleSubmit(formData) {
    const result = await submitContactForm(formData)
    setMessage(result.message)
  }

  return (
    <section id="contact" className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contact Me</h2>
        <form action={handleSubmit} className="max-w-md mx-auto space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-muted-foreground">Name</label>
            <Input id="name" type="text" name="name" placeholder="Your Name" required className="bg-background" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
            <Input id="email" type="email" name="email" placeholder="Your Email" required className="bg-background" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-muted-foreground">Message</label>
            <Textarea id="message" name="message" placeholder="Your Message" required className="min-h-[120px] bg-background" />
          </div>
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
        {message && <p className="mt-6 text-center text-green-500">{message}</p>}
      </div>
    </section>
  )
}

