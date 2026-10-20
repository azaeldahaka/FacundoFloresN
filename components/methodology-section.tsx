import { Layers, Users, Zap } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

type Pillar = {
  Icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const PILLARS: Pillar[] = [
  {
    Icon: Users,
    title: 'Arquitectura Centrada en el Usuario',
    description:
      'En cada sistema priorizo la eficiencia operativa. Durante el desarrollo del sistema hotelero Horizonte Suites, mapeé cada flujo: desde la experiencia intuitiva del huésped al reservar, hasta la velocidad de carga de datos del recepcionista.',
    points: ['Flujos guest & admin', 'Acceso basado en roles', 'Auditoría de fricción'],
  },
  {
    Icon: Layers,
    title: 'Ingeniería Robusta & Arquitectura en Capas',
    description:
      'En plataformas de alta complejidad como Aulix (gestión académica) y La Linda (ERP multisucursal), aplico Spec-Driven Development (SDD), separación en 4 capas (UI, Actions, Service, Repository), control de acceso estricto (RBAC) y tests automatizados.',
    points: ['Spec-Driven Development', 'Arquitectura 4 Capas', 'RBAC & Seguridad', 'Tests Automatizados'],
  },
  {
    Icon: Zap,
    title: 'Estandarización y Rendimiento',
    description:
      'En plataformas e-commerce y SaaS como Aromaas Decants, investigo y aplico las mejores prácticas de la industria en UX/UI. Analizo el comportamiento del usuario para diseñar interfaces fluidas manteniendo el código desacoplado y optimizado.',
    points: ['Mejores prácticas UX/UI', 'Código desacoplado', 'Infraestructura optimizada'],
  },
]

export function MethodologySection() {
  return (
    <section id="methodology" className="relative px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">
            02 / Metodología
          </p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Cómo transformo la ambigüedad en sistemas confiables
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Un enfoque repetible que mantiene los productos centrados en el usuario mientras sostiene
            un alto estándar de ingeniería.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {PILLARS.map(({ Icon, title, description, points }) => (
            <article
              key={title}
              className="group relative flex flex-col rounded-xl glass glow-hover p-6"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}
