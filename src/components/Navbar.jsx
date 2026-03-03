import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Sobre nosotros', href: '#about' },
  { label: 'Catálogo', href: '#catalog' },
  { label: 'Precios', href: '#pricing' },
  { label: 'Contacto', href: '#contact' },
]

const LOGO_IMAGE = '/images/stand-logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [logoError, setLogoError] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-glass' : 'bg-transparent'}`}>
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={(e) => handleLink(e, '#')} className="flex items-center gap-2 group">
          <div className="w-8 h-8 flex items-center justify-center overflow-hidden shrink-0">
            {!logoError ? (
              <img
                src={LOGO_IMAGE}
                alt="Stand"
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-black text-white text-lg">S</span>
            )}
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white">stand</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleLink(e, link.href)}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="#contact"
          onClick={(e) => handleLink(e, '#contact')}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-[#ff931f] hover:bg-[#e67e0f] text-white text-sm font-semibold transition-colors duration-200"
        >
          Solicitar demo
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#101011] border-t border-white/10 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className="block text-base font-medium text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => handleLink(e, '#contact')}
            className="mt-6 block text-center px-5 py-3 rounded-full bg-[#ff931f] hover:bg-[#e67e0f] text-white font-semibold transition-colors"
          >
            Solicitar demo
          </a>
        </div>
      )}
    </header>
  )
}
