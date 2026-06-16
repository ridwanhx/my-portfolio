import HomeIcon from '@iconify-react/tabler/home';
import PersonOutlineIcon from '@iconify-react/eva/person-outline';
import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import FolderIcon from '@iconify-react/lucide/folder';
import MailIcon from '@iconify-react/lucide/mail';

const NavbarLinks = ({ className = "", activeSection, onLinkClick }) => {
    const links = [
        { name: 'Home', id: 'home', href: '#home', icon: <HomeIcon height="1.1em" />, activeClass: "bg-indigo-600 text-white", hoverClass: "hover:bg-indigo-600" },
        { name: 'About', id: 'about', href: '#about', icon: <PersonOutlineIcon height="1.1em" />, activeClass: "bg-pink-600 text-white", hoverClass: "hover:bg-pink-600" },
        { name: 'Experience', id: 'experience', href: '#experience', icon: <BriefcaseIcon height="1.1em" />, activeClass: "bg-indigo-600 text-white", hoverClass: "hover:bg-indigo-600" },
        { name: 'Projects', id: 'projects', href: '#projects', icon: <FolderIcon height="1.1em" />, activeClass: "bg-amber-500 text-white", hoverClass: "hover:bg-amber-500" },
        { name: 'Contact', id: 'contact', href: '#contact', icon: <MailIcon height="1.1em" />, activeClass: "bg-slate-900 text-white", hoverClass: "hover:bg-slate-900" },
    ];

    return (
        <ul className={`items-center space-x-1 text-sm font-medium ${className}`}>
            {links.map((link, index) => {
                const isActive = activeSection === link.id;
                return (
                    <li key={index}>
                        <a 
                            href={link.href} 
                            onClick={(e) => onLinkClick(e, link.href)}
                            className={`flex items-center justify-center space-x-1.5 rounded-full px-3 py-1.5 transition-all duration-300 cursor-pointer text-slate-600 ${
                                isActive ? `${link.activeClass} shadow-sm scale-105 font-bold` : `bg-white ${link.hoverClass} hover:text-white`
                            }`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default NavbarLinks;