import { Terminal } from 'lucide-react'

const TECHNOLOGIES = [
  "React 18",
  "TypeScript",
  "Tailwind CSS",
  "Supabase",
  "SQL",
  "Python",
  "FilamentPHP"
]

export function TechSection() {
  return (
    <section id="stack" className="relative scroll-mt-24 px-4 py-16 sm:px-6 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-center gap-4">
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary glow-ring">
            <Terminal className="h-6 w-6" />
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">03 / Stack</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
              Tecnologías y Herramientas
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap">
          {TECHNOLOGIES.map((tech) => (
            <div
              key={tech}
              className="group relative overflow-hidden rounded-xl border border-border glass px-6 py-4 transition-all hover:border-primary/50 hover:bg-primary/5"
            >
              <span className="relative z-10 font-mono text-sm font-medium text-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
