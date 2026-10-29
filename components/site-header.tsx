'use client'

import { useState } from 'react'
import { Mail, Terminal, MessageCircle, X } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { LanguageToggle } from './language-toggle'
import { GithubIcon, LinkedinIcon } from './brand-icons'
import { useLanguage } from '@/lib/i18n'
import { translations } from '@/data/translations'

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/azaeldahaka', Icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundofloresn/', Icon: LinkedinIcon },
  { label: 'Email', href: 'mailto:floresnfacundo@gmail.com', Icon: Mail },
  { label: 'WhatsApp', href: 'https://wa.me/5493874431282', Icon: MessageCircle },
]

export function SiteHeader() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { lang } = useLanguage()
  const t = translations[lang].header

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3">
      <div className="mx-auto mt-3 flex max-w-6xl items-center justify-between gap-4 rounded-xl glass px-4 py-2.5 md:px-6">
        <div className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground">
          <button
            onClick={() => setIsSidebarOpen(true)}
            aria-label={t.openMenu}
            className="grid h-8 w-8 place-items-center rounded-md border border-primary/40 bg-primary/10 text-primary glow-ring transition-transform active:scale-90 md:cursor-default"
          >
            <Terminal className="h-4 w-4" />
          </button>
          <a href="#top" className="hidden sm:inline">
            Facundo Flores
          </a>
        </div>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors duration-150 hover:text-primary active:scale-95"
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
                className="grid h-9 w-9 place-items-center rounded-md text-muted-foreground transition-all duration-150 hover:text-primary active:scale-90"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <span className="mx-1 hidden h-5 w-px bg-border sm:block" />
          <LanguageToggle />
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
      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-64 flex-col border-r border-slate-800 bg-black/95 backdrop-blur-md transition-transform duration-300 ease-in-out md:hidden ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-800 p-4">
          <span className="font-mono text-sm font-semibold tracking-tight text-foreground">
            Facundo Flores
          </span>
          <button
            onClick={() => setIsSidebarOpen(false)}
            aria-label={t.closeMenu}
            className="text-muted-foreground hover:text-primary"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <nav className="flex flex-col gap-4 p-4">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsSidebarOpen(false)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </header>
  )
}
