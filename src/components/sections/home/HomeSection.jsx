import GithubIcon from '@iconify-react/mdi/github';
import InstagramIcon from '@iconify-react/mdi/instagram';
import LinkedinIcon from '@iconify-react/mdi/linkedin';
import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import MailIcon from '@iconify-react/lucide/mail';

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

                    {/* Posisi/Pekerjaan */}
                    <p className="text-sm md:text-lg font-bold text-slate-700 mb-6">
                        Fullstack Developer
                    </p>

                    {/* Navigasi Sosial Media Semantik */}
                    <nav aria-label="Social Media Links" className="mb-6">
                        <ul className="flex space-x-3">
                            <li>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-indigo-600 transition-colors" aria-label="Github Profile">
                                    <GithubIcon height="1.5em" />
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-indigo-600 transition-colors" aria-label="Instagram Profile">
                                    <InstagramIcon height="1.5em" />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-indigo-600 transition-colors" aria-label="Linkedin Profile">
                                    <LinkedinIcon height="1.5em" />
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Deskripsi */}
                    <p className="mb-9 leading-relaxed text-slate-600">
                        Building functional, interactive, and user-centric web applications.
                    </p>

                    {/* Tombol Aksi Utama (Semantik Link karena berpindah/aksi luar) */}
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

                {/* Kolom Kanan: Profile Card (Menggunakan <aside> untuk info pelengkap) */}
                <aside className="w-full flex justify-center">
                    <div className="w-full max-w-sm min-h-100 bg-slate-500 backdrop-blur flex flex-col justify-between border border-white rounded-3xl overflow-hidden shadow-lg">
                        
                        {/* Bagian Atas Kartu */}
                        <div className="m-6 my-8">
                            <h2 className="text-2xl font-bold tracking-tight text-white">
                                Muhamad
                                <span className="text-amber-500 ms-1">Ridwan</span>
                            </h2>
                            <p className="text-sm font-medium tracking-tight text-slate-200 mt-1">
                                Fullstack Developer
                            </p>
                        </div>

                        {/* Bagian Bawah Kartu (Status & Kontak Cepat) */}
                        <div className="m-6 my-8">
                            <div className="w-full p-3 bg-slate-700/50 backdrop-blur-md rounded-full flex items-center justify-between gap-2">
                                <div className="flex items-center gap-3">
                                    {/* Avatar Placeholder */}
                                    <div className="w-10 h-10 bg-red-300 rounded-full shrink-0" aria-hidden="true"></div>
                                    <div className="truncate">
                                        <span className="text-xs font-semibold text-white block truncate">@muha.rdwn0414</span>
                                        <span className="text-[10px] text-green-400 font-medium flex items-center gap-1">
                                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse"></span>
                                            Online
                                        </span>
                                    </div>
                                </div>
                                <a href="#contact" className="py-2 px-4 bg-white text-slate-900 rounded-full font-semibold text-xs hover:bg-slate-100 transition-colors whitespace-nowrap">
                                    Contact Me
                                </a>
                            </div>
                        </div>

                    </div>
                </aside>

            </div>
        </section>
    );
}

export default HomeSection;
