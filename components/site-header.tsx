'use client'

import { useState } from 'react'
import { Mail, Terminal, MessageCircle, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { GithubIcon, LinkedinIcon } from './brand-icons'

const NAV = [
  { label: 'Sobre Mí', href: '#about' },
  { label: 'Metodología', href: '#methodology' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azaeldahaka', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundofloresn/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:floresnfacundo@gmail.com', Icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5493874431282', Icon: MessageCircle },
]

export function SiteHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-xl glass px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary glow-ring md:cursor-default"
          >
            <Terminal className="h-4 w-4" />
          </button>
          <a href="#top" className="hidden sm:inline">Facundo Flores</a>
        </div>

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

      {/* Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" 
          onClick={() => setIsSidebarOpen(false)} 
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-64 z-50 bg-black/95 backdrop-blur-md border-r border-slate-800 transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-slate-800">
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">Facundo Flores</span>
          <button onClick={() => setIsSidebarOpen(false)} className="text-muted-foreground hover:text-primary">
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  )
}
