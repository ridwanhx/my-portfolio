import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactSection = () => {
    return (
        <section id="contact" className="pb-16 md:pb-24" aria-labelledby="contact-title">
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
                <ContactInfo />
                <ContactForm />
            </div>
        </section>
    );
};

export default ContactSection;
