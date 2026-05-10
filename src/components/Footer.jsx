import { useState } from 'react'
import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const LOGO_IMAGE = '/images/stand-logo.png'

const NAV_HREFS = [
  { key: 'about', href: '#about' },
  { key: 'catalog', href: '#catalog' },
  { key: 'pricing', href: '#pricing' },
  { key: 'contact', href: '#contact' },
]

const LEGAL_KEYS = ['privacy', 'legalNotice', 'cookies']

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/playstand', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/playstand', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/playstand', label: 'Twitter' },
]

export default function Footer() {
  const { t, messages } = useI18n()
  const [logoError, setLogoError] = useState(false)

  const scrollTo = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <button
              type="button"
              onClick={() => scrollTo('#')}
              className="flex items-center gap-2 group w-fit"
            >
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
              <span className="font-extrabold text-xl tracking-tight text-white">Stand</span>
            </button>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">{messages.footer.tagline}</p>
            <div className="flex gap-3 mt-2">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#ff931f] transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">{messages.footer.sections}</p>
            <ul className="flex flex-col gap-3">
              {NAV_HREFS.map((link) => (
                <li key={link.href}>
                  <button
                    type="button"
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-white/40 hover:text-white transition-colors text-left"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">{messages.footer.legal}</p>
            <ul className="flex flex-col gap-3">
              {LEGAL_KEYS.map((key) => (
                <li key={key}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">
                    {messages.footer[key]}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">{t('footer.copyright', { year })}</p>
          <p className="text-xs text-white/20">{messages.footer.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}
