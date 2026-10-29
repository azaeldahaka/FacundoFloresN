'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en'

interface LanguageContextValue {
  lang: Language
  setLang: (lang: Language) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

const TITLES: Record<Language, string> = {
  es: 'Facundo Flores — Ingeniero Full-Stack | MVPs y Sistemas Escalables',
  en: 'Facundo Flores — Full-Stack Software Engineer | Scalable Systems & MVPs',
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search)
      const urlLang = params.get('lang')?.toLowerCase()
      if (urlLang === 'en' || urlLang === 'es') {
        setLangState(urlLang)
        localStorage.setItem('lang', urlLang)
        document.documentElement.lang = urlLang
        document.title = TITLES[urlLang]
        return
      }

      const stored = localStorage.getItem('lang')
      if (stored === 'en' || stored === 'es') {
        setLangState(stored)
        document.documentElement.lang = stored
        document.title = TITLES[stored]
        return
      }

      // Auto-detect browser language: default to English for non-Spanish browsers (e.g. US/Global recruiters)
      const browserLang = navigator.language?.toLowerCase() || 'es'
      const detected: Language = browserLang.startsWith('es') ? 'es' : 'en'
      setLangState(detected)
      document.documentElement.lang = detected
      document.title = TITLES[detected]
    } catch {
      // Fallback to 'es' if storage/window access fails
    }
  }, [])

  const setLang = (next: Language) => {
    setLangState(next)
    try {
      localStorage.setItem('lang', next)
      document.documentElement.lang = next
      document.title = TITLES[next]
    } catch {}
  }

  const toggleLang = () => {
    setLang(lang === 'es' ? 'en' : 'es')
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
