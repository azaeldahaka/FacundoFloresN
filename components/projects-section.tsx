import { ArrowUpRight, Github } from 'lucide-react'
import { myProjects } from '@/data/projects'

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 px-4 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary">04 / Proyectos</p>
          <h2 className="mt-2 text-pretty text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Proyectos seleccionados en producción
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Sistemas que he diseñado, desarrollado y desplegado de punta a punta.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {myProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-xl glass glow-hover"
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((t) => (
                    <li
                      key={t}
                      className="rounded-md border border-primary/25 bg-primary/10 px-2 py-0.5 font-mono text-xs text-primary"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center gap-6">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      Ver en Producción
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 self-start text-sm font-medium text-foreground transition-colors hover:text-primary"
                    >
                      Ver en GitHub
                      <Github className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
