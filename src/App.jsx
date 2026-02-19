import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Catalog from './components/Catalog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#101011] text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Catalog />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
