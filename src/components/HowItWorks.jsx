import { useI18n } from '../i18n/useI18n.js'

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
      </div>
    </section>
  )
}
