import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const LINK_HREFS = [
  { key: 'about', href: '#about', minClass: 'min-w-[10.25rem]' },
  { key: 'catalog', href: '#catalog', minClass: 'min-w-[5.75rem]' },
  { key: 'pricing', href: '#pricing', minClass: 'min-w-[4.875rem]' },
  { key: 'contact', href: '#contact', minClass: 'min-w-[5.75rem]' },
]

const LOGO_IMAGE = '/images/stand-logo.png'

function LanguageSwitch({ className = '' }) {
  const { locale, setLocale, t } = useI18n()
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.04] p-0.5 ${className}`}
      role="group"
      aria-label={t('common.langSwitcher')}
    >
      <button
        type="button"
        onClick={() => setLocale('es')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
          locale === 'es' ? 'bg-[#ff931f] text-white' : 'text-white/60 hover:text-white'
        }`}
        aria-pressed={locale === 'es'}
        aria-label={t('common.langEs')}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLocale('en')}
        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-colors ${
          locale === 'en' ? 'bg-[#ff931f] text-white' : 'text-white/60 hover:text-white'
        }`}
        aria-pressed={locale === 'en'}
        aria-label={t('common.langEn')}
      >
        EN
      </button>
    </div>
  )
}

export default function Navbar() {
  const { t } = useI18n()
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
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <a href="#" onClick={(e) => handleLink(e, '#')} className="flex items-end gap-1.5 sm:gap-2 group shrink-0">
          <span className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] leading-none tracking-tight text-white">
            stand
          </span>
          <div className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center overflow-hidden shrink-0 mb-0.5 md:mb-1">
            {!logoError ? (
              <img
                src={LOGO_IMAGE}
                alt=""
                className="w-full h-full object-contain"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#ff931f]" aria-hidden />
            )}
          </div>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-8">
          <ul className="flex items-center gap-6 lg:gap-8">
            {LINK_HREFS.map((link) => (
              <li key={link.href} className="flex justify-center">
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className={`inline-block text-center text-sm font-medium text-white/70 hover:text-white transition-colors ${link.minClass}`}
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
          <a
            href="https://playstand.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-w-[11.5rem] px-5 py-2 rounded-full bg-[#ff931f] hover:bg-[#e67e0f] text-white text-sm font-semibold transition-colors duration-200 shrink-0 text-center"
          >
            {t('nav.tryFree')}
          </a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <LanguageSwitch />
          <button
            className="text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label={t('nav.openMenu')}
            type="button"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-[#101011] border-t border-white/10 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {LINK_HREFS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleLink(e, link.href)}
                  className="block text-base font-medium text-white/70 hover:text-white transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://playstand.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 block text-center px-5 py-3 rounded-full bg-[#ff931f] hover:bg-[#e67e0f] text-white font-semibold transition-colors"
          >
            {t('nav.tryFree')}
          </a>
        </div>
      )}
    </header>
  )
}
