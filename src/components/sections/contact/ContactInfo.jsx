import EmailOutlineIcon from '@iconify-react/mdi/email-outline';
import LocationOnOutlineIcon from '@iconify-react/mdi/location-on-outline';
import ContactMethod from "./ContactMethod";

const ContactInfo = () => {
    return (
        <div>
            <header className="mb-9">
                <h2 id="contact-title" className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
                    Get In Touch.
                </h2>
                <p className="text-base text-slate-600 max-w-xl leading-relaxed">
                    Have a project in mind or want to collaborate? Feel free to reach out through the form or direct contact methods.
                </p>
            </header>

            <div className="flex flex-col gap-6">
                <ContactMethod
                    title="Email"
                    value="mr1401.ridwan@gmail.com"
                    icon={EmailOutlineIcon}
                    bgClass="bg-indigo-100 text-indigo-600"
                />
                <ContactMethod
                    title="Lokasi"
                    value="Bandung, Indonesia"
                    icon={LocationOnOutlineIcon}
                    bgClass="bg-pink-100 text-pink-600"
                />
            </div>
        </div>
    );
};

export default ContactInfo;
