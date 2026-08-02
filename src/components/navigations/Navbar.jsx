import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import HamburgerIcon from '@iconify-react/mdi/hamburger';
import CloseIcon from '@iconify-react/lucide/x';
import GlobeIcon from '@iconify-react/lucide/globe';
import { useState, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const { locale, toggleLanguage } = useLanguage();

    useEffect(() => {
        const sectionIds = ["home", "about", "experience", "projects", "contact"];
        
        const observerOptions = {
            root: null,
            rootMargin: "-35% 0px -60% 0px", 
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const io = new IntersectionObserver(observerCallback, observerOptions);
        const observedIds = new Set();

        const tryObserveAll = () => {
            sectionIds.forEach((id) => {
                if (observedIds.has(id)) return;
                const el = document.getElementById(id);
                if (el) {
                    io.observe(el);
                    observedIds.add(id);
                }
            });

            if (observedIds.size === sectionIds.length) {
                mo.disconnect();
            }
        };

        tryObserveAll();

        const mo = new MutationObserver(tryObserveAll);
        mo.observe(document.body, { childList: true, subtree: true });

        return () => {
            io.disconnect();
            mo.disconnect();
        }
    }, []);

    const handleScrollClick = () => {
        setIsOpen(false);
    };

    return (
        // this dummy commit for June 30, 2026
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-[calc(100%-1.5rem)] max-w-172 bg-white/80 backdrop-blur-lg shadow-md border border-slate-200/50 z-50 rounded-full px-2 transition-all duration-300">
            <div className="px-3 h-12 flex items-center justify-between">
                <NavbarBrand />
                
                <NavbarLinks 
                    className="hidden md:flex" 
                    activeSection={activeSection} 
                    onLinkClick={handleScrollClick} 
                />

                <div className="flex items-center gap-2">
                    <button 
                        type="button" 
                        onClick={toggleLanguage}
                        className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full font-bold text-slate-700 cursor-pointer transition-colors"
                    >
                        <GlobeIcon height="1.1em" className="text-slate-500" />
                        <span className="text-xs uppercase">{locale}</span>
                    </button>

                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className={`p-1.5 text-slate-600 rounded-full md:hidden cursor-pointer transition-all duration-300 ${isOpen ? 'bg-slate-100 rotate-90' : 'hover:bg-slate-100'}`}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <CloseIcon height="1.3em" /> : <HamburgerIcon height="1.3em" />}
                    </button>
                </div>
            </div>

            <NavbarMobile 
                isOpen={isOpen} 
                activeSection={activeSection} 
                onLinkClick={handleScrollClick} 
            />
        </nav>
    );
}

export default Navbar;