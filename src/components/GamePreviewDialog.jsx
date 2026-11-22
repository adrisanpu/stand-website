import { useEffect, useRef, useState } from 'react'
import { RotateCcw, X } from 'lucide-react'

const APP_URL = import.meta.env.VITE_APP_URL
  || (import.meta.env.DEV ? 'http://localhost:5173' : 'https://playstand.app')

export default function GamePreviewDialog({ game, locale, onClose }) {
  const dialogRef = useRef(null)
  const [reset, setReset] = useState(0)

  useEffect(() => {
    if (!game) return undefined
    const dialog = dialogRef.current
    if (dialog && !dialog.open) dialog.showModal()
    return () => {
      if (dialog?.open) dialog.close()
    }
  }, [game])

  if (!game) return null

  const closeLabel = locale === 'en' ? 'Close game preview' : 'Cerrar vista previa'
  const source = `${APP_URL}/preview/${encodeURIComponent(game.previewType)}?lang=${locale}&embedded=1`

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="game-preview-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) event.currentTarget.close()
      }}
      className="fixed m-auto h-[calc(100dvh-1rem)] max-h-none w-[calc(100%-1rem)] max-w-5xl overflow-hidden rounded-card border border-brand-line bg-white p-0 text-brand-ink shadow-2xl backdrop:bg-black/70 sm:h-[96dvh] sm:w-[calc(100%-2rem)]"
    >
      <div className="flex h-full min-h-0 flex-col">
        <header className="flex shrink-0 items-center justify-between gap-4 border-b border-brand-line px-5 py-3 sm:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-brand-muted">
              {locale === 'en' ? 'Interactive preview' : 'Vista previa interactiva'}
            </p>
            <h2 id="game-preview-title" className="font-display text-xl font-bold">{game.title}</h2>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={() => setReset(value => value + 1)}
              aria-label={locale === 'en' ? 'Reset preview' : 'Reiniciar prueba'}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line hover:bg-brand-paper">
              <RotateCcw size={20} aria-hidden="true" />
            </button>
            <button type="button" onClick={() => dialogRef.current?.close()} aria-label={closeLabel}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-line hover:bg-brand-paper">
              <X size={20} aria-hidden="true" />
            </button>
          </div>
        </header>
        <iframe
          key={`${game.previewType}:${reset}`}
          src={source}
          title={locale === 'en' ? `${game.title} interactive preview` : `Vista previa interactiva de ${game.title}`}
          className="min-h-0 w-full flex-1 border-0"
          allow="fullscreen"
        />
      </div>
    </dialog>
  )
}
