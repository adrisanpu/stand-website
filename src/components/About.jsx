import { Contact, MousePointer2, Paintbrush } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const ICONS = [MousePointer2, Paintbrush, Contact]

export default function About() {
  const { messages } = useI18n()
  const copy = messages.about

  return (
    <section id="about" className="section-shell">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div>
          <p className="eyebrow">{copy.kicker}</p>
          <h2 className="section-title">{copy.title1} <span className="text-[#9c4700]">{copy.title2}</span></h2>
          <p className="body-copy mt-5">{copy.intro}</p>
        </div>
        <div className="flex flex-col justify-center border-l-2 border-brand-orange pl-6">
          <h3 className="font-display text-xl font-semibold">{copy.problemTitle}</h3>
          <p className="mt-3 leading-relaxed text-brand-muted">{copy.problemBody}</p>
        </div>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {copy.pillars.map((pillar, index) => {
          const Icon = ICONS[index]
          return (
            <article key={pillar.title} className="rounded-card border border-brand-line bg-white p-7">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-control bg-brand-paper">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="font-display text-xl font-semibold">{pillar.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-brand-muted">{pillar.description}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
