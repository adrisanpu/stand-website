import { useState, useMemo } from 'react'
import { RotateCcw, Timer, Users, Heart, CircleDot, FileText, Sparkles } from 'lucide-react'
import { BRAND_ORANGE } from '../constants/brandColors.js'
import { useI18n } from '../i18n/useI18n.js'

const GAME_ASSETS = [
  { icon: Sparkles, image: '/images/l3tras-logo.png', color: BRAND_ORANGE },
  { icon: RotateCcw, image: '/images/ruleta-logo.png', color: BRAND_ORANGE },
  { icon: Timer, image: '/images/t1mer-logo.png', color: BRAND_ORANGE },
  { icon: Users, image: '/images/empareja2-logo.png', color: BRAND_ORANGE },
  { icon: Heart, image: '/images/cupido-logo.png', color: BRAND_ORANGE },
  { icon: CircleDot, image: '/images/semaforo-logo.png', color: BRAND_ORANGE },
  { icon: FileText, image: '/images/infocards-logo.png', color: BRAND_ORANGE },
]

export default function Catalog() {
  const { messages, t } = useI18n()

  const experiences = useMemo(() => {
    const games = messages.catalog.games
    return games.map((g, i) => ({
      ...GAME_ASSETS[i],
      tag: g.tag,
      title: g.title,
      description: g.description,
    }))
  }, [messages.catalog.games])

  return (
    <section id="catalog" className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-brand-orange/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-4">{messages.catalog.kicker}</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
            {messages.catalog.title1}
            <br />
            <span className="text-gradient">{messages.catalog.title2}</span>
          </h2>
          <p className="text-white/60 text-lg">{messages.catalog.subtitle}</p>
        </div>

        <p className="text-center text-white/40 text-sm mb-4 md:mb-6">{messages.catalog.scrollHint}</p>

        <div className="relative -mx-6 px-6">
          <div className="flex gap-6 overflow-x-auto overflow-y-hidden pb-4 scroll-smooth snap-x snap-mandatory scrollbar-thin scrollbar-track-white/5 scrollbar-thumb-white/20">
            {experiences.map((exp, i) => (
              <CatalogCard key={exp.title + i} exp={exp} learnMore={t('catalog.learnMore')} />
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-4 w-16 bg-gradient-to-l from-brand-dark to-transparent pointer-events-none" aria-hidden />
        </div>
      </div>
    </section>
  )
}

function CatalogCard({ exp, learnMore }) {
  const [imgError, setImgError] = useState(false)
  const showImage = exp.image && !imgError

  return (
    <div
      className="card-hover group relative p-6 rounded-card border border-white/10 bg-white/[0.03] flex flex-col h-[300px] min-w-[280px] max-w-[320px] shrink-0 snap-start overflow-hidden"
    >
      <span
        className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-semibold shrink-0 transition-colors duration-300"
        style={{ backgroundColor: `${exp.color}20`, color: exp.color }}
      >
        {exp.tag}
      </span>

      <div
        className="absolute left-1/2 top-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-control flex items-center justify-center overflow-hidden transition-all duration-500 ease-out group-hover:left-4 group-hover:top-4 group-hover:w-20 group-hover:h-20 group-hover:translate-x-0 group-hover:translate-y-0 max-md:left-4 max-md:top-4 max-md:w-20 max-md:h-20 max-md:translate-x-0 max-md:translate-y-0"
        style={{ backgroundColor: `${exp.color}15` }}
      >
        {showImage ? (
          <img
            src={exp.image}
            alt=""
            className="w-full h-full object-contain p-1"
            onError={() => setImgError(true)}
          />
        ) : (
          <exp.icon size={32} style={{ color: exp.color }} className="group-hover:scale-75 max-md:scale-75" />
        )}
      </div>

      <div className="relative z-[1] mt-auto min-h-[140px] opacity-0 group-hover:opacity-100 max-md:opacity-100 transition-opacity duration-500 ease-out">
        <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
        <p className="text-white/55 leading-relaxed text-sm">{exp.description}</p>
        <button
          type="button"
          className="mt-2 text-sm font-semibold underline underline-offset-4 text-white/40 group-hover:text-white transition-colors duration-200"
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {learnMore}
        </button>
      </div>
    </div>
  )
}
