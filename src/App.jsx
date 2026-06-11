import Navbar from './components/navigations/Navbar'
import './App.css'
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';
import TechSkillSection from './components/sections/tech-skills/TechSkillSection';
import CertificateSection from './components/sections/certificates/CertificateSection';
import WorkExperienceSection from './components/sections/work-experience/WorkExperienceSection';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main className="mt-16 md:mt-0">
        <HomeSection/>
        <AboutSection />
        <TechSkillSection />
        <CertificateSection />
        <WorkExperienceSection/>
      </main>

      <footer>
        <p>Ini adalah bagian footer</p>
      </footer>
    </>
  );
}

export default App
