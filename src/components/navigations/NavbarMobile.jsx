import HomeIcon from '@iconify-react/tabler/home';
import PersonOutlineIcon from '@iconify-react/eva/person-outline';
import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import FolderIcon from '@iconify-react/lucide/folder';
import MailIcon from '@iconify-react/lucide/mail';
import ChevronRight from '@iconify-react/lucide/chevron-right';
import { useLanguage } from "../../context/LanguageContext";

const NavbarMobile = ({ isOpen, activeSection, onLinkClick }) => {
    const { locale } = useLanguage();

    const links = [
        { name: locale === "id" ? "Beranda" : "Home", id: 'home', href: '#home', icon: <HomeIcon height="1.2em" />, color: "text-indigo-500", bgActive: "bg-indigo-50/70 border-indigo-100", borderActive: "bg-indigo-500" },
        { name: locale === "id" ? "Tentang" : "About", id: 'about', href: '#about', icon: <PersonOutlineIcon height="1.2em" />, color: "text-pink-500", bgActive: "bg-pink-50/70 border-pink-100", borderActive: "bg-pink-500" },
        { name: locale === "id" ? "Pengalaman" : "Experience", id: 'experience', href: '#experience', icon: <BriefcaseIcon height="1.2em" />, color: "text-sky-500", bgActive: "bg-sky-50/70 border-sky-100", borderActive: "bg-sky-500" },
        { name: locale === "id" ? "Proyek" : "Projects", id: 'projects', href: '#projects', icon: <FolderIcon height="1.2em" />, color: "text-amber-500", bgActive: "bg-amber-50/70 border-amber-100", borderActive: "bg-amber-500" },
        { name: locale === "id" ? "Kontak" : "Contact", id: 'contact', href: '#contact', icon: <MailIcon height="1.2em" />, color: "text-slate-900", bgActive: "bg-slate-100 border-slate-200", borderActive: "bg-slate-900" },
    ];

    return (
        <div 
            className={`absolute top-15 left-0 w-full bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl rounded-3xl p-3 md:hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isOpen 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'
            }`}
        >
            <ul className="flex flex-col space-y-1.5">
                {links.map((link, index) => {
                    const isActive = activeSection === link.id;
                    return (
                        <li 
                            key={index}
                            style={{ 
                                transitionDelay: isOpen ? `${index * 50}ms` : '0ms',
                                transform: isOpen ? 'translateX(0)' : 'translateX(-10px)',
                                opacity: isOpen ? 1 : 0
                            }}
                            className="transition-all duration-300"
                        >
                            <a 
                                href={link.href}
                                onClick={() => onLinkClick()}
                                className={`group flex items-center justify-between font-semibold px-4 py-3 rounded-2xl transition-all border border-transparent relative overflow-hidden ${
                                    isActive ? `${link.bgActive} text-slate-900 shadow-xs` : 'text-slate-600 hover:bg-slate-50'
                                }`}
                            >
                                <div className={`absolute left-0 top-0 bottom-0 w-1 transition-transform duration-300 rounded-r ${
                                    isActive ? `scale-y-100 ${link.borderActive}` : `scale-y-0 group-hover:scale-y-100 ${link.borderActive}`
                                }`} />
                                
                                <div className="flex items-center space-x-3.5">
                                    <span className={`transition-colors duration-300 ${
                                        isActive ? link.color : 'text-slate-400 group-hover:' + link.color
                                    }`}>
                                        {link.icon}
                                    </span>
                                    <span className={`text-sm tracking-wide transition-transform duration-300 ${
                                        isActive ? 'translate-x-1 font-bold' : 'group-hover:translate-x-1'
                                    }`}>
                                        {link.name}
                                    </span>
                                </div>

                                <ChevronRight height="1.2em" className={`transition-all duration-300 ${
                                    isActive ? 'text-slate-600 translate-x-0.5' : 'text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5'
                                }`} />
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default NavbarMobile;