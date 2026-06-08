import Navbar from './components/navigations/Navbar'
import './App.css'
import HomeSection from './components/sections/home/HomeSection';
import AboutSection from './components/sections/about/AboutSection';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main className="mt-16 md:mt-0">
        <HomeSection/>
        <AboutSection/>
      </main>

      <footer>
        <p>Ini adalah bagian footer</p>
      </footer>
    </>
  );
}

export default App
