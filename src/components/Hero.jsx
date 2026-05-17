import { ArrowRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'

export default function Hero() {
  const { t } = useI18n()

  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Half-orbs: circle centered on viewport edge (clipped by overflow-hidden) reaches inward toward the monitors */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[min(120vmin,700px)] h-[min(120vmin,700px)] md:w-[min(132vmin,820px)] md:h-[min(132vmin,820px)]">
          <div className="hero-bg-glow-left h-full w-full rounded-full bg-brand-orange/13 blur-[128px]" />
        </div>
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-[min(120vmin,700px)] h-[min(120vmin,700px)] md:w-[min(132vmin,820px)] md:h-[min(132vmin,820px)]">
          <div className="hero-bg-glow-right h-full w-full rounded-full bg-brand-orange/13 blur-[128px]" />
        </div>
      </div>

      <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">
        <div className="hero-shape-drift-12 absolute top-[18%] right-[4%] md:right-[6%] w-24 h-24 border border-brand-orange/22 rounded-card opacity-45" />
        <div className="hero-shape-drift-neg6 absolute bottom-[22%] left-[4%] md:left-[6%] w-16 h-16 border border-brand-orange/22 rounded-control opacity-40" />
        <div className="hero-dot-drift absolute top-[48%] right-[6%] w-6 h-6 bg-brand-orange/20 rounded-full opacity-50 md:right-[8%]" />
        <div className="hero-dot-drift absolute top-[44%] left-[6%] w-4 h-4 bg-brand-orange/25 rounded-full opacity-55 md:left-[8%]" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="absolute inset-0 z-[2] pointer-events-none flex items-center">
        <img
          src="/images/pantalla_horizontal.png"
          alt=""
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-[15%] max-h-[35vh] md:max-h-[70vh] w-auto object-contain object-left opacity-[0.78] md:opacity-[0.9] drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
        />
        <img
          src="/images/pantalla_vertical.png"
          alt=""
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[15%] max-h-[35vh] md:max-h-[70vh] w-auto object-contain object-right opacity-[0.78] md:opacity-[0.9] drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight sm:leading-none tracking-tight mb-6">
          <span className="text-white">{t('hero.title1')}</span>
          <br />
          <span className="text-gradient">{t('hero.title2')}</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://playstand.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold text-base transition-colors duration-200 shadow-lg shadow-brand-orange/30"
          >
            {t('nav.tryFree')}
            <ArrowRight size={18} />
          </a>
          <button
            type="button"
            onClick={() => scrollTo('#catalog')}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:border-brand-orange text-white font-semibold text-base transition-colors duration-200"
          >
            {t('hero.ctaCatalog')}
          </button>
        </div>

        <div className="mt-12 text-sm text-white/30 max-w-xl mx-auto space-y-2">
          <p>{t('hero.mvpLine1')}</p>
          <p>{t('hero.mvpLine2')}</p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent pointer-events-none" />
    </section>
  )
}
