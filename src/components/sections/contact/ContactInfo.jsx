import { useLanguage } from "../../../context/LanguageContext";
import ContactMethod from "./ContactMethod";

const ContactInfo = () => {
  const { data } = useLanguage();
  
  // Menggunakan fallback jika objek data belum sepenuhnya termuat dari index locale
  const { title, description, methods } = data?.CONTACT_DATA?.info || {
    title: "",
    description: "",
    methods: []
  };

  return (
    <div>
      <header className="mb-9">
        <h2 id="contact-title" className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-base text-slate-600 max-w-xl leading-relaxed">
          {description}
        </p>
      </header>

      <div className="flex flex-col gap-6">
        {methods.map((method) => (
          <ContactMethod
            key={method.id}
            title={method.title}
            value={method.value}
            icon={method.icon}
            bgClass={method.bgClass}
          />
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;