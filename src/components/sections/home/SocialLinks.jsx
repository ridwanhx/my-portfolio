import GithubIcon from '@iconify-react/mdi/github';
import InstagramIcon from '@iconify-react/mdi/instagram';
import LinkedinIcon from '@iconify-react/mdi/linkedin';

const SocialLinks = () => {
    const links = [
        { href: "https://github.com", label: "Github Profile", icon: <GithubIcon height='1.5em'/> },
        { href: "https://instagram.com", label: "Instagram Profile", icon: <InstagramIcon height='1.5em'/> },
        { href: "https://linkedin.com", label: "Linkedin Profile", icon: <LinkedinIcon height='1.5em'/> }
    ];

    return (
        <nav aria-label="Social Media Links" className="mb-6">
            <ul className="flex space-x-3">
                {links.map((link, index) => (
                    <li key={index}>
                        <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-slate-700 hover:text-indigo-600 transition-colors" aria-label={link.label}>
                            {link.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default SocialLinks;