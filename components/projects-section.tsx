import { ArrowUpRight, Code2, ImageIcon, Terminal } from 'lucide-react'
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
              {project.imageUrl ? (
                <div className="relative flex aspect-video w-full overflow-hidden border-b border-border/20">
                  <img
                    src={project.imageUrl}
                    alt={`Preview of ${project.title}`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {project.inDevelopment && (
                    <div className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm backdrop-blur-md">
                      En Desarrollo
                    </div>
                  )}
                </div>
              ) : (
                <div className="relative flex aspect-video w-full items-center justify-center border-b border-border/10 bg-secondary/10 overflow-hidden">
                  {/* Subtle pattern for the background */}
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
                  {project.inDevelopment ? (
                    <div className="relative flex flex-col items-center gap-3 text-muted-foreground">
                      <Terminal className="h-10 w-10 text-primary/70" />
                      <span className="font-mono text-sm uppercase tracking-wider text-primary/90 font-medium">En Desarrollo</span>
                    </div>
                  ) : (
                    <div className="relative flex flex-col items-center gap-3 text-muted-foreground/40">
                      <ImageIcon className="h-10 w-10" />
                      <span className="font-mono text-xs tracking-wider">Sin vista previa</span>
                    </div>
                  )}
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  {project.duration && (
                    <span className="text-xs font-medium text-muted-foreground bg-secondary/50 px-2 py-1 rounded-md w-fit">
                      {project.duration}
                    </span>
                  )}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
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
