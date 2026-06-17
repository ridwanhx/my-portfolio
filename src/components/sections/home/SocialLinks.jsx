import { Icon } from "@iconify/react";

const SocialLinks = ({ links }) => {
  return (
    <nav aria-label="Social Media Links" className="mb-6">
      <ul className="flex space-x-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-indigo-600 transition-colors flex items-center"
              aria-label={link.label}
            >
              <Icon icon={link.icon} height="1.5em" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialLinks;