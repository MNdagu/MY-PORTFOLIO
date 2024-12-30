// /actions/contact.js

export async function submitContactForm(formData) {
  if (!formData) {
    return { success: false, message: "No form data provided." };
  }

  try {
    const response = await fetch("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage = errorData?.message || "Request failed.";
      return { success: false, message: errorMessage };
    }

    const data = await response.json().catch(() => ({}));
    const successMessage = data?.message || "Message sent successfully!";
    return { success: true, message: successMessage };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Unexpected error occurred." };
  }
}
