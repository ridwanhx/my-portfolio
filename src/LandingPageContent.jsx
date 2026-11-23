import { useState, useEffect, lazy, Suspense } from "react";
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/navigations/Navbar';
import BootScreen from "./components/navigations/BootScreen";
import { shouldShowBoot } from "./components/navigations/bootState";
import FluidCursor from "./components/navigations/FluidCursor";
import HomeSection from './components/sections/home/HomeSection';

const AboutSection = lazy(() => import('./components/sections/about/AboutSection'));
const TechSkillSection = lazy(() => import('./components/sections/tech-skills/TechSkillSection'));
const CertificateSection = lazy(() => import('./components/sections/certificates/CertificateSection'));
const WorkExperienceSection = lazy(() => import('./components/sections/work-experience/WorkExperienceSection'));
const ProjectSection = lazy(() => import('./components/sections/project/ProjectSection'));
const ContactSection = lazy(() => import('./components/sections/contact/ContactSection'));

export default function LandingPageContent() {
  const [isBooting, setIsBooting] = useState(shouldShowBoot);

  useEffect(() => {
    document.body.style.overflow = isBooting ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isBooting]);

  return (
    <LanguageProvider>
      {isBooting && <BootScreen onComplete={() => setIsBooting(false)} />}

      <div className="grid-wrapper">
        <div className="grid-background" />
        <FluidCursor />

        <div className="main-content">
          <header>
            <Navbar />
          </header>

          <main className="mt-16 md:mt-0">
            <HomeSection />

            <Suspense fallback={null}>
              <AboutSection />
              <TechSkillSection />
              <CertificateSection />
              <WorkExperienceSection />
              <ProjectSection />
              <ContactSection />
            </Suspense>
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}
