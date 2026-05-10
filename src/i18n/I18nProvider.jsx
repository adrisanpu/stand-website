import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import es from '../locales/es.json'
import en from '../locales/en.json'

const STORAGE_KEY = 'stand-website-locale'

const MESSAGES = { es, en }

export const I18nContext = createContext(null)

function getByPath(obj, path) {
  if (!path) return undefined
  const parts = path.split('.')
  let cur = obj
  for (const p of parts) {
    if (cur == null || typeof cur !== 'object') return undefined
    cur = cur[p]
  }
  return cur
}

function interpolate(str, vars) {
  if (typeof str !== 'string' || !vars) return str
  let out = str
  for (const [k, v] of Object.entries(vars)) {
    out = out.replace(new RegExp(`\\{\\{${k}\\}\\}`, 'g'), String(v))
  }
  return out
}

export function I18nProvider({ children }) {
  const [locale, setLocaleState] = useState(() => {
    if (typeof window === 'undefined') return 'es'
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'en' || stored === 'es') return stored
    } catch {
      /* ignore */
    }
    return 'es'
  })

  const messages = MESSAGES[locale] ?? MESSAGES.es

  const setLocale = useCallback((next) => {
    if (next !== 'es' && next !== 'en') return
    setLocaleState(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const t = useCallback(
    (key, vars) => {
      const raw = getByPath(messages, key)
      if (raw === undefined) {
        console.warn(`[i18n] missing: ${key} (${locale})`)
        return key
      }
      return interpolate(raw, vars)
    },
    [messages, locale],
  )

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.documentElement.lang = locale === 'en' ? 'en' : 'es'
    const seoTitle = getByPath(messages, 'seo.title')
    const seoDesc = getByPath(messages, 'seo.description')
    if (typeof seoTitle === 'string') document.title = seoTitle
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    if (typeof seoDesc === 'string') meta.setAttribute('content', seoDesc)
  }, [locale, messages])

  const value = useMemo(
    () => ({ locale, setLocale, t, messages }),
    [locale, setLocale, t, messages],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
