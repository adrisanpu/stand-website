import { Zap, Users, Trophy, Contact } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const PILLAR_ICONS = [Zap, Users, Contact, Trophy]

export default function About() {
  const { messages } = useI18n()
  const pillars = messages.about.pillars

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">{messages.about.kicker}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            {messages.about.title1}
            <br />
            <span className="text-gradient">{messages.about.title2}</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">{messages.about.intro}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, i) => {
            const Icon = PILLAR_ICONS[i]
            return (
              <div
                key={p.title}
                className="card-hover p-8 rounded-card border border-white/10 bg-white/[0.03] flex flex-col gap-5"
              >
                <div className="w-12 h-12 rounded-control bg-brand-orange/20 flex items-center justify-center">
                  <Icon size={24} className="text-brand-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{p.title}</h3>
                  <p className="text-white/55 leading-relaxed text-sm">{p.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
