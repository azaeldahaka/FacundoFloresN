'use client'

import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useLanguage } from '@/lib/i18n'
import { translations } from '@/data/translations'

export function HeroSection() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-12 pt-32 md:pt-36">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left: headline */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            {t.badge}
          </span>

          <h1 className="mt-4 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-5xl">
            {t.headlinePrefix}
            <span className="text-primary glow-text">{t.headlineHighlight}</span>
            {t.headlineSuffix}
          </h1>

          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {t.description}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground glow-ring transition-transform duration-150 ease-out hover:scale-[1.02] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {t.ctaPrimary}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-all duration-150 ease-out hover:border-primary/50 hover:text-primary active:scale-[0.97]"
            >
              {t.ctaSecondary}
            </a>
            <a
              href="https://www.linkedin.com/in/facundofloresn/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border/60 bg-card/40 px-3.5 py-2.5 font-mono text-xs text-muted-foreground transition-all duration-150 ease-out hover:border-primary/40 hover:text-foreground active:scale-[0.97]"
            >
              <span>{t.ctaResume}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-primary" />
            </a>
          </div>

          <dl className="mt-6 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-4 font-mono">
            {t.stats.map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-foreground">{value}</dt>
                <dd className="text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: glowing avatar */}
        <div className="relative mx-auto flex w-full max-w-sm justify-center">
          <div className="relative aspect-square w-72 animate-float md:w-80">
            {/* Rotating dashed ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30"
            />
            {/* Outer glow */}
            <div aria-hidden="true" className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-2xl" />
            {/* Circular frame */}
            <div className="absolute inset-4 overflow-hidden rounded-full border border-primary/40 bg-card glow-ring">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/FacuFotoPerfilCanva-v1.jpg"
                alt={t.portraitAlt}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Corner accents */}
            <span className="absolute right-2 top-8 h-2 w-2 rounded-full bg-primary glow-ring" />
            <span className="absolute bottom-8 left-2 h-2 w-2 rounded-full bg-accent" />
          </div>
        </div>
      </div>
    </section>
  )
}
