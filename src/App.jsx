import { useState, useEffect } from "react";
import Navbar from './components/navigations/Navbar';
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';
import TechSkillSection from './components/sections/tech-skills/TechSkillSection';
import CertificateSection from './components/sections/certificates/CertificateSection';
import WorkExperienceSection from './components/sections/work-experience/WorkExperienceSection';
import ProjectSection from './components/sections/project/ProjectSection';
import ContactSection from './components/sections/contact/ContactSection';
import BootScreen from "./components/navigations/BootScreen";
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    if (isBooting) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBooting]);

  return (
    <LanguageProvider>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}

      {/* wrapper utama, background grid */}
      <div className={`grid-wrapper transition-opacity duration-500 ${isBooting ? "opacity-0" : "opacity-100"}`}>
        
        {/* grid element */}
        <div className="grid-background"></div>

        {/* main content */}
        <div className="main-content">
          <header>
            <Navbar />
          </header>

          <main className="mt-16 md:mt-0">
            <HomeSection />
            <AboutSection />
            <TechSkillSection />
            <CertificateSection />
            <WorkExperienceSection />
            <ProjectSection />
            <ContactSection />
          </main>
        </div>

      </div>
    </LanguageProvider>
  );
}

export default App;
