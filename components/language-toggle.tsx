'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'

export function LanguageToggle() {
  const { lang, toggleLang } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLang}
      title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
      aria-label={lang === 'es' ? 'Switch language to English' : 'Cambiar idioma a Español'}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 font-mono text-xs transition-all duration-150 hover:border-primary/50 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="h-3.5 w-3.5 text-primary" />
      <span className="inline-flex items-center gap-1">
        <span className={lang === 'es' ? 'font-semibold text-primary' : 'text-muted-foreground'}>
          ES
        </span>
        <span className="text-border">/</span>
        <span className={lang === 'en' ? 'font-semibold text-primary' : 'text-muted-foreground'}>
          EN
        </span>
      </span>
    </button>
  )
}
