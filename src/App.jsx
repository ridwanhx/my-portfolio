import Navbar from './components/navigations/Navbar'
import './App.css'
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';
import TechSkillSection from './components/sections/tech-skills/TechSkillSection';
import CertificateSection from './components/sections/certificates/CertificateSection';
import WorkExperienceSection from './components/sections/work-experience/WorkExperienceSection';
import ProjectSection from './components/sections/project/ProjectSection';
import ContactSection from './components/sections/contact/ContactSection';
import { LanguageProvider } from './context/LanguageContext'; // Sesuaikan path jika berbeda

function App() {
  return (
    <LanguageProvider>
      <header>
        <Navbar/>
      </header>

      <main className="mt-16 md:mt-0">
        <HomeSection/>
        <AboutSection />
        <TechSkillSection />
        <CertificateSection />
        <WorkExperienceSection />
        <ProjectSection />
        <ContactSection/>
      </main>
    </LanguageProvider>
  );
}

export default App;