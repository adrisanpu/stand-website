import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'
import { pilots } from '../data/pilots.js'

function PilotPhotos({ pilot }) {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const count = pilot.photos.length
  if (!count) return null

  return (
    <figure className="min-w-0">
      <div className="flex h-[26rem] items-center justify-center sm:h-[32rem]">
        <img
          src={`/clients/${pilot.id}/${pilot.photos[index]}`}
          alt={t('common.photoAlt', { number: index + 1 })}
          width="900"
          height="1200"
          loading="lazy"
          decoding="async"
          className="h-auto max-h-full w-auto max-w-full rounded-card object-contain"
        />
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4">
        <p aria-live="polite" aria-atomic="true" className="text-xs text-brand-muted">
          {t('common.photoCounter', { current: index + 1, total: count })}
        </p>
        {count > 1 && (
          <div className="flex gap-2">
            <button type="button" onClick={() => setIndex((current) => (current - 1 + count) % count)} aria-label={t('common.photoPrev')} className="flex h-12 w-12 items-center justify-center rounded-control border border-brand-line bg-white hover:border-brand-ink">
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => setIndex((current) => (current + 1) % count)} aria-label={t('common.photoNext')} className="flex h-12 w-12 items-center justify-center rounded-control border border-brand-line bg-white hover:border-brand-ink">
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        )}
      </figcaption>
    </figure>
  )
}

export default function ClientLogos() {
  const { messages, t } = useI18n()
  const copy = messages.clientLogos

  return (
    <section id="pilots" className="border-y border-brand-line bg-[#f0eee8]">
      <div className="section-shell">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow">{copy.kicker}</p>
          <h2 className="section-title">{copy.title}</h2>
          <p className="body-copy mt-5">{copy.intro}</p>
        </div>
        {pilots.map((pilot) => {
          const detail = copy.pilots[pilot.id]
          return (
            <article key={pilot.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div>
                <img src={pilot.logo} alt={detail.logoAlt} width="285" height="147" loading="lazy" className="mb-6 h-auto w-36 object-contain" />
                <p className="mb-4 text-xs font-bold uppercase tracking-wider text-brand-muted">{detail.context}</p>
                <p className="text-lg leading-relaxed">{detail.description}</p>
                <div className="mt-8 grid gap-4 border-t border-brand-dark/20 pt-6 sm:grid-cols-2">
                  <div>
                    <p className="font-display text-xl font-bold">{t(`clientLogos.pilots.${pilot.id}.statsUsers`, { count: pilot.userCount })}</p>
                  </div>
                  <div>
                    <p className="font-display text-base font-bold">{t(`clientLogos.pilots.${pilot.id}.statsGames`, { games: pilot.games.join(' · ') })}</p>
                  </div>
                </div>
              </div>
              <PilotPhotos pilot={pilot} />
            </article>
          )
        })}
      </div>
    </section>
  )
}
