// my-app/app/actions/contact.js

export async function submitContactForm(formData) {
  if (!formData) {
    return { success: false, message: "No form data provided." };
  }

  try {
    const response = await fetch("http://127.0.0.1:5000", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    });

    console.log("Response Status:", response.status);
    const data = await response.json();
    console.log("Response Data:", data);

    if (!response.ok) {
      const errorMessage = data?.message || "Request failed.";
      return { success: false, message: errorMessage };
    }

    const successMessage = data?.message || "Message sent successfully!";
    return { success: true, message: successMessage };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, message: "Unexpected error occurred." };
  }
}
