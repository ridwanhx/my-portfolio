import { useState } from "react";
import { Icon } from "@iconify/react";
import { CONTACT_DATA } from "../../static/data";
import InputField from "./InputField";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({ loading: false, success: null });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: null });

    const { token, chatId } = CONTACT_DATA.telegram;
    const formatMessage =
      `📩 <b>New Message From Portfolio</b>\n\n` +
      `👤 <b>Name:</b> ${formData.full_name}\n` +
      `📧 <b>Email:</b> ${formData.email}\n\n` +
      `💬 <b>Message:</b>\n${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text: formatMessage,
            parse_mode: "HTML",
          }),
        },
      );

      if (!response.ok) throw new Error();

      setStatus({ loading: false, success: true });
      setFormData({ full_name: "", email: "", message: "" });
    } catch {
      setStatus({ loading: false, success: false });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-slate-50 bg-white"
    >
      <div className="flex gap-3 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs leading-relaxed">
        <Icon
          icon="mdi:information-outline"
          className="shrink-0 text-amber-600"
          height="1.5em"
        />
        <p>
          <strong>Note:</strong> To get a faster response regarding your
          project, please remember to include your{" "}
          <strong>Telegram username</strong> inside the message block below.
        </p>
      </div>
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
        <Icon
          icon={status.loading ? "line-md:loading-twotone-loop" : "tabler:send"}
          height="1.5em"
        />
        <span className="font-medium text-sm">
          {status.loading ? "Sending..." : "Send Message"}
        </span>
      </button>

      {status.success === true && (
        <p className="text-sm font-medium text-emerald-600 text-center">
          Message sent successfully to Telegram!
        </p>
      )}
      {status.success === false && (
        <p className="text-sm font-medium text-rose-600 text-center">
          Failed to send message. Try again later.
        </p>
      )}
    </form>
  );
};

export default ContactForm;
