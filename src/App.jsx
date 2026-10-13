import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import ClientLogos from './components/ClientLogos'
import Catalog from './components/Catalog'
import Pricing from './components/Pricing'
import Contact from './components/Contact'
import Footer from './components/Footer'
import HowItWorks from './components/HowItWorks'
import FAQ from './components/FAQ'
import MobileCTA from './components/MobileCTA'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="min-h-screen pb-24 lg:pb-0">
      <Navbar menuOpen={menuOpen} onMenuChange={setMenuOpen} />
      <main id="main" tabIndex={-1}>
        <Hero />
        <About />
        <HowItWorks />
        <Catalog />
        <ClientLogos />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <MobileCTA menuOpen={menuOpen} />
    </div>
  )
}
