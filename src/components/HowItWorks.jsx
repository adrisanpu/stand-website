import { ArrowRight, Link2, Monitor, QrCode, ScreenShare } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const ACTIVATION_ICONS = [Link2, QrCode, Monitor, ScreenShare]

export default function HowItWorks() {
  const { messages } = useI18n()
  const copy = messages.howItWorks

  return (
    <section id="how-it-works" className="border-y border-brand-line bg-[#f0eee8]">
      <div className="section-shell">
        <div className="max-w-2xl">
          <p className="eyebrow">{copy.kicker}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="body-copy mt-5">{copy.subtitle}</p>
        </div>
        <ol className="mt-12 grid gap-8 md:grid-cols-3 md:gap-10">
          {copy.steps.map((step, index) => (
            <li key={step.title} className="border-t border-brand-dark/20 pt-6">
              <span className="font-display text-sm font-bold text-brand-muted" aria-hidden="true">0{index + 1}</span>
              <h3 className="mt-5 font-display text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">{step.description}</p>
            </li>
          ))}
        </ol>
        <div className="mt-16 border-t border-brand-line pt-12">
          <div className="max-w-2xl">
            <p className="eyebrow">{copy.activation.kicker}</p>
            <h3 className="section-title">{copy.activation.title}</h3>
            <p className="body-copy mt-5">{copy.activation.description}</p>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {copy.activation.options.map((option, index) => {
              const Icon = ACTIVATION_ICONS[index]
              return (
                <li key={option.title} className="rounded-card border border-brand-line bg-white p-6">
                  <Icon size={24} className="text-brand-orange-dark" aria-hidden="true" />
                  <h4 className="mt-4 font-display text-lg font-semibold">{option.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-brand-muted">{option.description}</p>
                </li>
              )
            })}
          </ul>
          <a href="#contact" className="text-link mt-6 inline-flex">
            {copy.activation.contact} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
