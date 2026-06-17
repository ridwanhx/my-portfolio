import { useState } from "react";
import { Icon } from "@iconify/react";
import { CONTACT_DATA } from "../../static/data";
import InputField from "./InputField";

const ContactForm = () => {
  const [formData, setFormData] = useState({ full_name: "", email: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const { token, chatId } = CONTACT_DATA.telegram;
    const formatMessage = `📩 *New Message From Portfolio*\n\n👤 *Name:* ${formData.full_name}\n📧 *Email:* ${formData.email}\n\n💬 *Message:*\n${formData.message}`;

    try {
      const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: formatMessage,
          parse_mode: "Markdown",
        }),
      });

      if (!response.ok) throw new Error();

      setStatus({ loading: false, success: true });
      setFormData({ full_name: "", email: "", message: "" });
    } catch {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-slate-50 bg-white">
      <InputField 
        id="full_name" 
        label="Full Name" 
        placeholder="Enter your name" 
        value={formData.full_name}
        onChange={handleChange}
        required
      />
      <InputField 
        id="email" 
        label="Email Address" 
        type="email" 
        placeholder="name@email.com" 
        value={formData.email}
        onChange={handleChange}
        required
      />
      <InputField 
        id="message" 
        label="Message" 
        isTextArea 
        placeholder="Tell me about your project or idea..." 
        value={formData.message}
        onChange={handleChange}
        required
      />
      
      <button 
        type="submit" 
        disabled={status.loading}
        className="flex justify-center items-center p-4 bg-slate-950 hover:bg-slate-900 active:scale-[0.98] disabled:bg-slate-400 text-white gap-2 rounded-2xl transition-all w-full cursor-pointer disabled:cursor-not-allowed"
      >
        <Icon icon={status.loading ? "line-md:loading-twotone-loop" : "tabler:send"} height="1.5em" />
        <span className="font-medium text-sm">
          {status.loading ? "Sending..." : "Send Message"}
        </span>
      </button>

      {status.success === true && (
        <p className="text-sm font-medium text-emerald-600 text-center">Message sent successfully to Telegram!</p>
      )}
      {status.success === false && (
        <p className="text-sm font-medium text-rose-600 text-center">Failed to send message. Try again later.</p>
      )}
    </form>
  );
};

export default ContactForm;