import { Instagram, Linkedin, Twitter } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const LOGO_IMAGE = '/images/logo_stand_letters_black.webp'

const NAV_HREFS = [
  { key: 'howItWorks', href: '#how-it-works' },
  { key: 'catalog', href: '#catalog' },
  { key: 'pricing', href: '#pricing' },
  { key: 'contact', href: '#contact' },
]

const socialLinks = [
  { Icon: Instagram, href: 'https://instagram.com/playstand_', label: 'Instagram' },
  { Icon: Linkedin, href: 'https://linkedin.com/company/playstand', label: 'LinkedIn' },
  { Icon: Twitter, href: 'https://twitter.com/playstand', label: 'Twitter' },
]

export default function Footer() {
  const { t, messages } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer id="footer" className="border-t border-brand-line bg-brand-paper px-6 py-8 text-brand-ink">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <img
            src={LOGO_IMAGE}
            alt="Stand"
            width="400"
            height="113"
            className="h-auto w-28 self-start object-contain"
          />
          <p className="text-sm text-brand-muted">{messages.footer.tagline}</p>
        </div>

        <nav aria-label={messages.footer.sections} className="flex flex-wrap gap-x-5 gap-y-2">
          {NAV_HREFS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-brand-muted underline-offset-4 hover:text-brand-ink hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="mailto:contact@playstand.app"
            className="text-sm font-semibold text-brand-ink underline decoration-brand-orange underline-offset-4 hover:text-brand-orange-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
          >
            {messages.footer.email}
          </a>
          {socialLinks.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${messages.footer.social}: ${label}`}
              className="rounded-sm text-brand-muted hover:text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
            >
              <Icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl border-t border-brand-line pt-4 text-xs text-brand-muted">
        {t('footer.copyright', { year })}
      </p>
    </footer>
  )
}
