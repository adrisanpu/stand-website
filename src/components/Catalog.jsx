import { ArrowUpRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

const GAMES = [
  { index: 1, image: 'ruleta-logo', featured: true },
  { index: 2, image: 't1mer-logo', featured: true },
  { index: 0, image: 'l3tras-logo', featured: true },
  { index: 6, image: 'infocards-logo', featured: true },
  { index: 3, image: 'empareja2-logo', featured: false },
  { index: 4, image: 'cupido-logo', featured: false },
  { index: 5, image: 'semaforo-logo', featured: false },
]

export default function Catalog() {
  const { messages } = useI18n()
  const copy = messages.catalog

  return (
    <section id="catalog" className="section-shell">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow">{copy.kicker}</p>
          <h2 className="section-title">{copy.title1} <span className="text-[#9c4700]">{copy.title2}</span></h2>
          <p className="body-copy mt-5">{copy.subtitle}</p>
        </div>
        <a href="#pricing" className="text-link shrink-0">{messages.mobileCta.label} <ArrowUpRight size={16} aria-hidden="true" /></a>
      </div>

      {[true, false].map((featured) => (
        <div key={String(featured)} className="mt-12">
          <h3 className="mb-5 text-sm font-bold text-brand-muted">{featured ? copy.featuredLabel : copy.socialLabel}</h3>
          <div className={`grid gap-5 sm:grid-cols-2 ${featured ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {GAMES.filter((game) => game.featured === featured).map(({ index, image }) => {
              const game = copy.games[index]
              return (
                <article key={game.title} className="flex min-w-0 flex-col overflow-hidden rounded-card border border-brand-line bg-white">
                  <div className="flex h-44 items-center justify-center border-b border-brand-line bg-brand-paper p-4">
                    <img src={`/images/${image}.webp`} alt="" width="320" height="320" loading="lazy" decoding="async" className="h-36 w-36 object-contain" />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-3 text-xs font-semibold text-brand-muted">{game.tag}</p>
                    <h4 className="font-display text-xl font-bold">{game.title}</h4>
                    <p className="mb-5 mt-3 flex-1 text-base leading-relaxed text-brand-muted">{game.description}</p>
                    <a href="#contact" className="text-link">{copy.learnMore} <ArrowUpRight size={15} className="shrink-0" aria-hidden="true" /></a>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      ))}
    </section>
  )
}
