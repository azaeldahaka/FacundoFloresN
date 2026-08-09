'use client'

import { useState } from 'react'
import { Languages } from 'lucide-react'

const LANGS = ['EN', 'ES'] as const

export function LanguageToggle() {
  const [lang, setLang] = useState<(typeof LANGS)[number]>('EN')

  return (
    <button
      type="button"
      onClick={() => setLang((l) => (l === 'EN' ? 'ES' : 'EN'))}
      aria-label={`Switch language, current ${lang}`}
      className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border bg-background/40 px-2.5 font-mono text-xs text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <Languages className="h-3.5 w-3.5" />
      {lang}
    </button>
  )
}
