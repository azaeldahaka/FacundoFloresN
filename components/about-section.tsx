import { Cpu, GraduationCap, MapPin, Radio } from 'lucide-react'

const META = [
  { Icon: MapPin, label: 'Ubicación', value: 'Salta, Argentina — Remoto (UTC-3)' },
  { Icon: GraduationCap, label: 'Estudios', value: 'Ing. Informática — UCASAL' },
  { Icon: Cpu, label: 'Enfoque', value: 'Full-Stack · Sistemas escalables' },
  { Icon: Radio, label: 'Estado', value: 'Abierto a colaboraciones' },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">01 / Sobre Mí</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Desarrollador Full-Stack & Estudiante Avanzado de Ingeniería Informática
            </h2>
          </div>
        </div>

        {/* Terminal window */}
        <div className="overflow-hidden rounded-xl glass">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-border px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-destructive/70" />
            <span className="h-3 w-3 rounded-full bg-accent/70" />
            <span className="h-3 w-3 rounded-full bg-primary/70" />
            <span className="ml-3 font-mono text-xs text-muted-foreground">
              facu@dev: ~/about
            </span>
          </div>

          <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_1fr] md:p-8">
            {/* Left: prose as terminal output */}
            <div className="font-mono text-sm leading-relaxed">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="mt-1 text-foreground">
                Soy Facundo, desarrollador Full-Stack radicado en Salta, Argentina. Actualmente
                curso la carrera de Ingeniería Informática en la UCASAL. Tengo 23 años.
              </p>
              <p className="mt-4 text-muted-foreground">
                <span className="text-primary">$</span> cat philosophy.txt
              </p>
              <p className="mt-1 text-foreground">
                Combino mi formación académica con experiencia real en el mercado, construyendo
                soluciones de software eficientes, escalables y orientadas a resultados para clientes
                internacionales. Mi enfoque no es solo escribir código, sino entender el problema de
                raíz.
              </p>
              <p className="mt-4 flex items-center gap-2 text-muted-foreground">
                <span className="text-primary">$</span>
                <span className="inline-block h-4 w-2 animate-pulse bg-primary" aria-hidden="true" />
              </p>
            </div>

            {/* Right: data readout */}
            <dl className="grid gap-3 rounded-lg border border-border bg-background/40 p-4">
              {META.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <dt className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
                      {label}
                    </dt>
                    <dd className="text-sm text-foreground">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
