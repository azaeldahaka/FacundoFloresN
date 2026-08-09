import { ArrowUpRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-36 md:pt-44">
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left: headline */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-3 py-1 font-mono text-xs text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Disponible para proyectos selectos
          </span>

          <h1 className="mt-6 text-pretty text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Creo <span className="text-primary glow-text">MVPs y sistemas escalables</span> para
            negocios que necesitan resultados.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Soy Facu, ingeniero Full-Stack. Diseño arquitecturas resilientes y productos centrados
            en el usuario. Desde plataformas de alto tráfico hasta pipelines de automatización,
            transformo requerimientos complejos en sistemas que funcionan y perduran.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:floresnfacundo@gmail.com"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-ring transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Trabajemos Juntos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Ver Proyectos
            </a>
          </div>

          <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-border pt-6 font-mono">
            {[
              ['4+', 'Proyectos entregados'],
              ['23', 'Años'],
              ['Salta, AR', 'Ubicación'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="text-2xl font-semibold text-foreground">{value}</dt>
                <dd className="text-xs text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Right: glowing hexagonal avatar */}
        <div className="relative mx-auto flex w-full max-w-sm justify-center">
          <div className="relative aspect-square w-72 animate-float md:w-80">
            {/* Rotating dashed ring */}
            <div
              aria-hidden="true"
              className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-primary/30"
            />
            {/* Outer glow */}
            <div
              aria-hidden="true"
              className="absolute inset-6 rounded-[2rem] bg-primary/20 blur-2xl"
            />
            {/* Hexagon clip frame */}
            <div
              className="absolute inset-4 overflow-hidden border border-primary/40 bg-card glow-ring"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/FacuFotoPerfil1.jpg"
                alt="Retrato de Facundo, desarrollador Full-Stack"
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
