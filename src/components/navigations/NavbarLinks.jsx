import HomeIcon from '@iconify-react/tabler/home';
import PersonOutlineIcon from '@iconify-react/eva/person-outline';
import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import FolderIcon from '@iconify-react/lucide/folder';
import MailIcon from '@iconify-react/lucide/mail';

const NavbarLinks = ({ className = "" }) => {
    const links = [
        { name: 'Home', href: '#home', icon: <HomeIcon height="1.1em" />, hoverClass: "hover:bg-indigo-600" },
        { name: 'About', href: '#about', icon: <PersonOutlineIcon height="1.1em" />, hoverClass: "hover:bg-pink-600" },
        { name: 'Experience', href: '#experience', icon: <BriefcaseIcon height="1.1em" />, hoverClass: "hover:bg-indigo-600" },
        { name: 'Projects', href: '#projects', icon: <FolderIcon height="1.1em" />, hoverClass: "hover:bg-amber-500" },
        { name: 'Contact', href: '#contact', icon: <MailIcon height="1.1em" />, hoverClass: "hover:bg-slate-900" },
    ];

    return (
        <ul className={`items-center space-x-1 text-sm font-medium ${className}`}>
            {links.map((link, index) => (
                <li key={index}>
                    <a 
                        href={link.href} 
                        className={`flex items-center justify-center space-x-1.5 bg-white text-slate-600 rounded-full px-3 py-1.5 transition-all duration-200 ${link.hoverClass} hover:text-white cursor-pointer`}
                    >
                        {link.icon}
                        <span>{link.name}</span>
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default NavbarLinks;
