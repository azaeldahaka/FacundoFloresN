import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azaeldahaka', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundofloresn/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:floresnfacundo@gmail.com', Icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5493874431282', Icon: MessageCircle },
]

export function SiteFooter() {
  return (
    <footer className="px-4 pb-10 pt-8">
      <div className="mx-auto max-w-6xl">
        {/* CTA panel */}
        <div className="relative overflow-hidden rounded-2xl glass p-8 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[100px]"
          />
          <p className="font-mono text-xs uppercase tracking-widest text-primary">Contacto</p>
          <h2 className="mt-3 max-w-2xl text-pretty text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            ¿Listo para construir algo que escale?
          </h2>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Abierto a colaboraciones freelance y proyectos selectos. Respondo cada mensaje
            en menos de 24 horas.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="mailto:floresnfacundo@gmail.com"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground glow-ring transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              Trabajemos Juntos
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <div className="flex items-center gap-1">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Facundo — Todos los sistemas operativos.</p>
          <p>Full-Stack Engineer · Salta, Argentina</p>
        </div>
      </div>
    </footer>
  )
}
