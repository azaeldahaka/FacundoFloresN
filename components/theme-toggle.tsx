'use client'

import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('theme')
    const isLight = document.documentElement.classList.contains('light') || storedTheme === 'light'
    setIsDark(!isLight)
    if (isLight) {
      document.documentElement.classList.add('light')
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  function toggle() {
    const nextDark = !isDark
    setIsDark(nextDark)
    const el = document.documentElement
    el.classList.toggle('light', !nextDark)
    el.classList.toggle('dark', nextDark)
    try {
      localStorage.setItem('theme', nextDark ? 'dark' : 'light')
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background/40 text-foreground transition-all duration-150 hover:border-primary/50 hover:text-primary active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      {mounted && isDark ? (
        <Sun className="h-4 w-4 transition-transform duration-200 rotate-0 hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform duration-200 rotate-0 hover:-rotate-12" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}
