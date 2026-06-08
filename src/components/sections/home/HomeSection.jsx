import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import MailIcon from '@iconify-react/lucide/mail';
import SocialLinks from './SocialLinks';
import ProfileCard from './ProfileCard';

const HomeSection = () => {
    return (
        <section id="home" className="py-16 md:py-24">
            {/* Grid container utama */}
            <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-stretch">
                
                {/* Kolom Kiri: Konten Utama */}
                <div className="px-4 md:px-8 flex flex-col justify-center text-start">
                    {/* Header Kecil */}
                    <span className="block uppercase font-medium text-slate-600 mb-4 tracking-wide text-sm">
                        Hello, I am
                    </span>

                    {/* Nama Utama */}
                    <h1 className="block text-5xl md:text-7xl font-black mb-4 leading-tight">
                        Muhamad <span className="text-indigo-600">Ridwan</span>.
                    </h1>

                    {/* Interests */}
                    <p className="text-sm md:text-lg font-bold text-slate-700 mb-6">
                        Fullstack Developer
                    </p>

                    {/* Navigasi Sosial Media */}
                    <SocialLinks/>

                    {/* Deskripsi */}
                    <p className="mb-9 leading-relaxed text-slate-600">
                        Building functional, interactive, and user-centric web applications.
                    </p>

                    {/* main actions */}
                    <div className="flex items-center gap-4">
                        <a href="#projects" className="flex items-center justify-center space-x-1.5 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-colors">
                            <BriefcaseIcon height="1.5em" />
                            <span>View Project</span>
                        </a>
                        <a href="#contact" className="flex items-center justify-center space-x-1.5 px-5 py-3 border border-slate-300 rounded-full font-medium hover:bg-slate-50 transition-colors">
                            <MailIcon height="1.5em" />
                            <span>Contact Me</span>
                        </a>
                    </div>
                </div>

                {/* Kolom Kanan: Profile Card */}
                <ProfileCard/>

            </div>
        </section>
    );
}

export default HomeSection;
