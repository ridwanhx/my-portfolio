export const contactData = {
  info: {
    title: "Get In Touch.",
    description: "Have a project in mind or want to collaborate? Feel free to reach out through the form or direct contact methods.",
    methods: [
      {
        id: "email",
        title: "Email",
        value: "mr1401.ridwan@gmail.com",
        icon: "mdi:email-outline",
        bgClass: "bg-indigo-100 text-indigo-600"
      },
      {
        id: "location",
        title: "Location",
        value: "Bandung, Indonesia",
        icon: "mdi:location-on-outline",
        bgClass: "bg-pink-100 text-pink-600"
      }
    ]
  },
  form: {
    note: "To get a faster response regarding your project, please remember to include your Telegram username inside the message block below.",
    labels: {
      name: "Full Name",
      email: "Email Address",
      message: "Message"
    },
    placeholders: {
      name: "Enter your name",
      email: "name@email.com",
      message: "Tell me about your project or idea..."
    },
    buttons: {
      send: "Send Message",
      sending: "Sending..."
    },
    messages: {
      success: "Message sent successfully to Telegram!",
      failed: "Failed to send message. Try again later."
    }
  }
};