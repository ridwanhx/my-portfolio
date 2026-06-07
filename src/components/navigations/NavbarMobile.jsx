import HomeIcon from '@iconify-react/tabler/home';
import PersonOutlineIcon from '@iconify-react/eva/person-outline';
import BriefcaseIcon from '@iconify-react/lucide/briefcase';
import FolderIcon from '@iconify-react/lucide/folder';
import MailIcon from '@iconify-react/lucide/mail';

const NavbarMobile = ({ isOpen, setIsOpen }) => {
    const links = [
        { name: 'Home', href: '#home', icon: <HomeIcon height="1.2em" /> },
        { name: 'About', href: '#about', icon: <PersonOutlineIcon height="1.2em" /> },
        { name: 'Experience', href: '#experience', icon: <BriefcaseIcon height="1.2em" /> },
        { name: 'Projects', href: '#projects', icon: <FolderIcon height="1.2em" /> },
        { name: 'Contact', href: '#contact', icon: <MailIcon height="1.2em" /> },
    ];

    return (
        <div 
            className={`absolute top-14 left-0 w-full bg-white border shadow-lg rounded-2xl p-4 transition-all duration-300 md:hidden origin-top ${
                isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
            }`}
        >
            <ul className="flex flex-col space-y-2">
                {links.map((link, index) => (
                    <li key={index}>
                        <a 
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-3 text-slate-600 font-medium px-4 py-2.5 rounded-xl transition-all hover:bg-indigo-50 hover:text-indigo-600"
                        >
                            <span className="text-slate-400">{link.icon}</span>
                            <span>{link.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavbarMobile;
