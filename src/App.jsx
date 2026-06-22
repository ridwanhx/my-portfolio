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
import FluidCursor from "./components/navigations/FluidCursor";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function LandingPageContent() {
  const [isBooting, setIsBooting] = useState(true);

  useEffect(() => {
    document.body.style.overflow = isBooting ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isBooting]);

  return (
    <LanguageProvider>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}

      <div className={`grid-wrapper transition-opacity duration-500 ${isBooting ? "opacity-0" : "opacity-100"}`}>
        <div className="grid-background"></div>
        <FluidCursor/>

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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dev" replace />} />
        <Route path="/:role" element={<LandingPageContent />} />
      </Routes>
    </Router>
  );
}

export default App;