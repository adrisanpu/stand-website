import { useEffect, useRef } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const LINKS = [
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'catalog', href: '#catalog' },
  { key: 'pricing', href: '#pricing' },
]

function LanguageSwitch() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="flex shrink-0 items-center" role="group" aria-label={t('common.langSwitcher')}>
      {['es', 'en'].map((language) => (
        <button
          key={language}
          type="button"
          onClick={() => setLocale(language)}
          aria-pressed={locale === language}
          aria-label={t(language === 'es' ? 'common.langEs' : 'common.langEn')}
          className={`min-h-12 min-w-12 rounded-control text-xs font-bold transition-colors ${
            locale === language ? 'bg-brand-dark text-white' : 'text-brand-muted hover:bg-black/5'
          }`}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default function Navbar({ menuOpen, onMenuChange }) {
  const { t } = useI18n()
  const toggleRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const wideScreen = window.matchMedia('(min-width: 1024px)')
    const closeOnResize = (event) => {
      if (event.matches) onMenuChange(false)
    }
    wideScreen.addEventListener('change', closeOnResize)
    return () => wideScreen.removeEventListener('change', closeOnResize)
  }, [onMenuChange])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        onMenuChange(false)
        toggleRef.current?.focus()
      }
    }
    const onPointerDown = (event) => {
      if (!headerRef.current?.contains(event.target)) onMenuChange(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [menuOpen, onMenuChange])

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 border-b border-brand-line/70 bg-brand-paper/95 backdrop-blur-md">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-3 focus:z-[60] focus:rounded-control focus:bg-brand-dark focus:px-4 focus:py-3 focus:text-white">
        {t('common.skipLink')}
      </a>
      <nav aria-label={t('common.navigation')} className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-6 sm:px-8">
        <a href="#hero" onClick={() => onMenuChange(false)} aria-label="Stand" className="flex min-h-12 shrink-0 items-center">
          <img src="/images/logo_stand_letters_black.webp" alt="Stand" width="400" height="113" className="h-auto w-36 sm:w-40" />
        </a>
        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map((link) => (
            <a key={link.key} href={link.href} className="flex min-h-12 items-center text-sm font-semibold text-brand-muted hover:text-brand-dark">
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <LanguageSwitch />
          <a href="https://playstand.app/login" target="_blank" rel="noopener noreferrer" className="button-secondary hidden lg:inline-flex">
            {t('nav.tryFree')} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
          <button
            ref={toggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={t(menuOpen ? 'nav.closeMenu' : 'nav.openMenu')}
            onClick={() => onMenuChange(!menuOpen)}
            className="flex h-12 w-12 items-center justify-center rounded-control border border-brand-line lg:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      <div id="mobile-navigation" hidden={!menuOpen} className="border-t border-brand-line bg-brand-paper px-6 py-5 lg:hidden">
        <div className="mx-auto flex max-w-6xl flex-col gap-2">
          {[...LINKS, { key: 'contact', href: '#contact' }].map((link) => (
            <a key={link.key} href={link.href} onClick={() => onMenuChange(false)} className="flex min-h-12 items-center rounded-control px-3 text-base font-semibold hover:bg-white">
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a href="https://playstand.app/login" target="_blank" rel="noopener noreferrer" onClick={() => onMenuChange(false)} className="button-primary mt-2">
            {t('nav.tryFree')} <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </header>
  )
}
