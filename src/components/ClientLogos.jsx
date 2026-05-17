import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useI18n } from '../i18n/useI18n.js'
import { pilots } from '../data/pilots.js'

function PilotPhotoViewer({ pilotId, photos }) {
  const { t } = useI18n()
  const [index, setIndex] = useState(0)
  const n = photos.length

  if (n === 0) return null

  const src = `/clients/${pilotId}/${photos[index]}`

  const goPrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIndex((i) => (i - 1 + n) % n)
  }

  const goNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIndex((i) => (i + 1) % n)
  }

  const arrowBtn =
    'relative z-[60] flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-dark/90 text-white shadow-md ring-1 ring-white/20 transition-opacity md:h-8 md:w-8'

  return (
    <div className="group relative flex items-center gap-0.5 overflow-visible sm:gap-1">
      {n > 1 && (
        <button
          type="button"
          onClick={goPrev}
          className={`${arrowBtn} pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 max-lg:pointer-events-auto max-lg:opacity-100`}
          aria-label={t('common.photoPrev')}
        >
          <ChevronLeft className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.5} />
        </button>
      )}

      <div className="relative z-0 w-14 shrink-0 overflow-visible sm:w-16 lg:w-[5.25rem]">
        <div className="relative aspect-[2/3] w-full">
          <img
            key={src}
            src={src}
            alt=""
            loading={index === 0 ? 'eager' : 'lazy'}
            className="absolute inset-0 z-0 h-full w-full rounded-lg object-cover shadow-md ring-1 ring-white/15 transition-transform duration-300 ease-out will-change-transform group-hover:scale-[2.25] group-hover:shadow-2xl"
          />
        </div>
      </div>

      {n > 1 && (
        <button
          type="button"
          onClick={goNext}
          className={`${arrowBtn} pointer-events-none opacity-0 group-hover:pointer-events-auto group-hover:opacity-100 max-lg:pointer-events-auto max-lg:opacity-100`}
          aria-label={t('common.photoNext')}
        >
          <ChevronRight className="h-3.5 w-3.5 md:h-4 md:w-4" strokeWidth={2.5} />
        </button>
      )}
    </div>
  )
}

export default function ClientLogos() {
  const { messages, t } = useI18n()
  const { kicker, title, pilots: pilotCopy } = messages.clientLogos

  return (
    <section className="py-20 sm:py-24 bg-brand-dark">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-brand-orange font-semibold text-sm uppercase tracking-widest mb-2">{kicker}</p>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white/90">{title}</h2>
      </div>

      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16">
        {pilots.map((pilot) => {
          const copy = pilotCopy?.[pilot.id]
          if (!copy) return null

          const gamesLabel = pilot.games.join(' · ')

          return (
            <article
              key={pilot.id}
              className="overflow-visible rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-stretch lg:gap-8">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-8 sm:flex-row sm:gap-10 sm:items-start">
                    <div className="flex shrink-0 justify-center sm:justify-start">
                      <img
                        src={pilot.logo}
                        alt={copy.logoAlt ?? ''}
                        className="h-20 sm:h-24 w-auto max-w-[200px] object-contain object-center opacity-90 grayscale"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="leading-relaxed text-white/70">{copy.description}</p>
                      <div className="mt-4 flex flex-col gap-2 text-sm text-white/50 sm:flex-row sm:flex-wrap sm:gap-x-6">
                        <span>
                          {t(`clientLogos.pilots.${pilot.id}.statsGames`, { games: gamesLabel })}
                        </span>
                        <span>
                          {t(`clientLogos.pilots.${pilot.id}.statsUsers`, { count: pilot.userCount })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {pilot.photos.length > 0 && (
                  <div className="flex shrink-0 justify-center lg:justify-start lg:pt-0">
                    <PilotPhotoViewer pilotId={pilot.id} photos={pilot.photos} />
                  </div>
                )}
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
