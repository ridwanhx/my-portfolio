import SendIcon from '@iconify-react/tabler/send';
import InputField from "./InputField";

const ContactForm = () => {
    return (
        <form className="p-8 flex flex-col gap-6 rounded-2xl shadow-lg border border-slate-50 bg-white">
            <InputField 
                id="full_name" 
                label="Full Name" 
                placeholder="Enter your name" 
            />
            <InputField 
                id="email" 
                label="Email Address" 
                type="email" 
                placeholder="name@email.com" 
            />
            <InputField 
                id="message" 
                label="Message" 
                isTextArea 
                placeholder="Tell me about your project or idea..." 
            />
            
            <button type="submit" className="flex justify-center items-center p-4 bg-slate-950 hover:bg-slate-900 active:scale-[0.98] text-white gap-2 rounded-2xl transition-all w-full">
                <SendIcon height="1.5em" />
                <span className="font-medium text-sm">Send Message</span>
            </button>
        </form>
    );
};

export default ContactForm;
