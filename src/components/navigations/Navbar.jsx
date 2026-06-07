import NavbarBrand from "./NavbarBrand";
import NavbarLinks from "./NavbarLinks";
import NavbarMobile from "./NavbarMobile";
import HamburgerIcon from '@iconify-react/mdi/hamburger';
import CloseIcon from '@iconify-react/lucide/x';
import GlobeIcon from '@iconify-react/lucide/globe';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-3 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-white/90 backdrop-blur-md shadow-md border border-slate-200/80 z-50 rounded-full px-2">
            <div className="px-3 h-12 flex items-center justify-between">
                {/* Navbar brand */}
                <NavbarBrand />
                
                {/* Desktop menu */}
                <NavbarLinks className="hidden md:flex" />

                {/* Bagian Kanan: Bahasa & Hamburger */}
                <div className="flex items-center space-x-2">
                    {/* Pengaturan bahasa */}
                    <button type="button" className="flex items-center space-x-1 bg-slate-100 hover:bg-slate-200 px-3 py-1.5 rounded-full text-xs font-bold text-slate-700 cursor-pointer transition-colors">
                        <GlobeIcon height="1.1em" className="text-slate-500" />
                        <span>EN</span>
                    </button>

                    {/* Hamburger untuk mobile */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)} 
                        className="p-1.5 text-slate-600 hover:bg-slate-100 rounded-full md:hidden cursor-pointer transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <CloseIcon height="1.3em" /> : <HamburgerIcon height="1.3em" />}
                    </button>
                </div>
            </div>

            {/* Menu mobile dengan kontrol state */}
            <NavbarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
        </nav>
    );
}

export default Navbar;
