import Navbar from './components/navigations/Navbar'
import './App.css'

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>

      <main className="mt-20">
        <section>Section 1</section>
        <section>Section 2</section>
        <section>Section 3</section>
      </main>

      <footer>
        <p>Ini adalah bagian footer</p>
      </footer>
    </>
  );
}

export default App
