import { ArrowRight, ArrowUpRight, Contact, MousePointer2, Paintbrush, UsersRound } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'
import { pilots } from '../data/pilots.js'

export default function Hero() {
  const { t } = useI18n()

  return (
    <section id="hero" className="relative pt-20">
      <div className="section-shell grid items-center gap-12 !pb-12 !pt-12 sm:!pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:!pb-20 lg:!pt-20">
        <div>
          <p className="eyebrow flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-brand-orange" aria-hidden="true" />
            {t('hero.kicker')}
          </p>
          <h1 className="font-display text-[2.65rem] font-bold leading-[1.06] tracking-[-0.045em] sm:text-6xl lg:text-[4rem]">
            {t('hero.title1')}{' '}
            <span className="relative inline text-[#9c4700]">{t('hero.title2')}</span>
          </h1>
          <p className="body-copy mt-6 max-w-xl">{t('hero.subtitle')}</p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a href="#catalog" className="button-primary">
              {t('hero.ctaCatalog')} <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="https://playstand.app/login" target="_blank" rel="noopener noreferrer" className="text-link justify-center sm:px-3">
              {t('hero.ctaFree')} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-brand-muted">{t('hero.microcopy')}</p>
        </div>

        <figure className="relative min-w-0 overflow-hidden rounded-[2rem] border border-[#e8dbc7] bg-[#f1e7d8] p-5 sm:p-7">
          <div className="flex items-start justify-between gap-4">
            <p className="max-w-[15rem] font-display text-2xl font-semibold leading-tight sm:text-3xl">{t('hero.visualLabel')}</p>
            <span className="rounded-pill border border-brand-dark/20 px-3 py-1 text-xs font-bold tracking-wider" aria-hidden="true">STAND</span>
          </div>
          <div className="relative mt-4 aspect-[1.2]">
            <div className="absolute inset-x-4 inset-y-6 rounded-full bg-[#ffca89]/65" aria-hidden="true" />
            <img
              src="/images/pantalla_horizontal.webp"
              alt={t('hero.visualAlt')}
              width="1100"
              height="733"
              fetchPriority="high"
              className="absolute -left-[25%] top-[2%] w-[130%] max-w-none"
            />
            <img src="/images/pantalla_vertical.webp" alt="" width="900" height="600" className="absolute -right-[35%] top-[12%] w-[105%] max-w-none" />
          </div>
          <div className="relative flex flex-wrap gap-2">
            {[{ Icon: MousePointer2, key: 'chip1' }, { Icon: Paintbrush, key: 'chip2' }, { Icon: Contact, key: 'chip3' }].map(({ Icon, key }) => (
              <span key={key} className="inline-flex items-center gap-1.5 rounded-pill bg-brand-paper px-3 py-2 text-xs font-semibold">
                <Icon size={14} aria-hidden="true" /> {t(`hero.${key}`)}
              </span>
            ))}
          </div>
          <figcaption className="relative mt-4 text-xs leading-relaxed text-brand-muted">{t('hero.visualCaption')}</figcaption>
        </figure>
      </div>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <div className="flex items-center gap-4 border-y border-brand-line py-5">
          <UsersRound size={24} className="shrink-0" aria-hidden="true" />
          <p className="text-sm text-brand-muted">{t('hero.proof', { count: pilots[0].userCount })}</p>
        </div>
      </div>
    </section>
  )
}
