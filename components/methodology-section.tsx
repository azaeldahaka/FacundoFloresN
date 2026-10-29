'use client'

import { Layers, Users, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { translations } from '@/data/translations'

const PILLAR_ICONS = [Users, Layers, Zap]

export function MethodologySection() {
  const { lang } = useLanguage()
  const t = translations[lang].methodology

  return (
    <section id="methodology" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">{t.eyebrow}</p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            {t.heading}
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{t.subtitle}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {t.pillars.map(({ title, description, points }, i) => {
            const Icon = PILLAR_ICONS[i]
            return (
              <article key={title} className="group relative flex flex-col rounded-xl glass glow-hover p-6">
                <span className="grid h-11 w-11 place-items-center rounded-lg border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:glow-ring">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {points.map((p) => (
                    <li
                      key={p}
                      className="rounded-md border border-border bg-background/40 px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {p}
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
