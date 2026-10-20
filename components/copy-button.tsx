'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'

interface CopyButtonProps {
  value: string
  label?: string
  className?: string
}

export function CopyButton({ value, label, className = '' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (err) {
      console.error('Failed to copy', err)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      title={label ? `Copiar ${label}` : 'Copiar'}
      aria-label={label ? `Copiar ${label}` : 'Copiar al portapapeles'}
      className={`inline-flex items-center gap-1 rounded border border-border/40 bg-secondary/30 px-1.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-all hover:border-primary/40 hover:bg-primary/10 hover:text-primary active:scale-95 ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-400" />
          <span className="text-emerald-400">Copiado</span>
        </>
      ) : (
        <>
          <Copy className="h-3 w-3" />
          <span>Copiar</span>
        </>
      )}
    </button>
  )
}
