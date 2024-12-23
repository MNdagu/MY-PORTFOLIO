'use server'

export async function submitContactForm(formData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const message = formData.get('message')

  if (!name || !email || !message) {
    return { success: false, message: 'All fields are required.' }
  }

  // Here you would typically send an email or save to a database
  console.log('Form submission:', { name, email, message })

  return { success: true, message: 'Thank you for your message! I\'ll get back to you soon.' }
}
