import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ClientLogos from './components/ClientLogos'
import Catalog from './components/Catalog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <ClientLogos />
        <Catalog />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
