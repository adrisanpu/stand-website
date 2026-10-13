import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

export default function MobileCTA({ menuOpen }) {
  const { messages } = useI18n()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const sections = ['hero', 'pricing', 'contact', 'footer'].map((id) => document.getElementById(id))
    const inView = new Map()
    let pastHero = false
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        inView.set(entry.target.id, entry.isIntersecting)
        if (entry.target.id === 'hero') pastHero = entry.boundingClientRect.bottom <= 80
      })
      setVisible(pastHero && !['pricing', 'contact', 'footer'].some((id) => inView.get(id)))
    }, { rootMargin: '-80px 0px 0px 0px' })
    sections.forEach((section) => {
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [])

  if (!visible || menuOpen) return null

  return (
    <aside aria-label={messages.mobileCta.label} className="fixed inset-x-0 bottom-0 z-40 border-t border-brand-line bg-brand-paper px-5 pt-3 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] lg:hidden" style={{ paddingBottom: 'max(12px, env(safe-area-inset-bottom))' }}>
      <div className="mx-auto flex max-w-lg items-center justify-between gap-4">
        <p className="text-xs font-medium leading-relaxed text-brand-muted">{messages.mobileCta.note}</p>
        <a href="#pricing" className="button-primary shrink-0 !px-4">
          {messages.mobileCta.label} <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </aside>
  )
}
