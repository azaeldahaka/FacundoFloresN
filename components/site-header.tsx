'use client'

import { Mail, Terminal, MessageCircle } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const NAV = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'Proyectos', href: '#projects' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azaeldahaka', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundofloresn/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:floresnfacundo@gmail.com', Icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5493874431282', Icon: MessageCircle },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-xl glass px-4 py-2.5 md:px-6">
        <a
          href="#top"
          className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground"
        >
          <span className="grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary glow-ring">
            <Terminal className="h-4 w-4" />
          </span>
          <span className="hidden sm:inline">Facundo Flores</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <div className="hidden items-center gap-0.5 sm:flex">
            {SOCIALS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-colors hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
