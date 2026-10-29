import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { JsonLd } from '@/components/json-ld'
import { LanguageProvider } from '@/lib/i18n'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://facundoflores.dev'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Facundo Flores — Ingeniero Full-Stack | MVPs y Sistemas Escalables',
    template: '%s | Facundo Flores',
  },
  description:
    'Ingeniero Full-Stack radicado en Salta, Argentina. Diseño y desarrollo de arquitecturas resilientes, sistemas de gestión empresarial (ERP), SaaS y plataformas web modernas con Next.js, React, Laravel y PostgreSQL.',
  keywords: [
    'Facundo Flores',
    'Facu Flores',
    'Full-Stack Engineer',
    'Desarrollador Web Argentina',
    'Desarrollador Salta',
    'Next.js',
    'React',
    'TypeScript',
    'Laravel',
    'PostgreSQL',
    'Prisma',
    'Docker',
    'Tailwind CSS',
    'Sistemas Escalables',
    'ERP',
  ],
  authors: [{ name: 'Facundo Flores', url: 'https://github.com/azaeldahaka' }],
  creator: 'Facundo Flores',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: '/',
    siteName: 'Facundo Flores Portfolio',
    title: 'Facundo Flores — Ingeniero Full-Stack | MVPs y Sistemas Escalables',
    description:
      'Diseño y desarrollo de arquitecturas resilientes, plataformas de alto tráfico y sistemas empresariales escalables.',
    images: [
      {
        url: '/FacuFotoPerfilCanva-v1.jpg',
        width: 800,
        height: 800,
        alt: 'Retrato de Facundo Flores, Ingeniero Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facundo Flores — Ingeniero Full-Stack',
    description:
      'Diseño arquitecturas resilientes y productos escalables. Desde plataformas de alto tráfico hasta sistemas ERP.',
    images: ['/FacuFotoPerfilCanva-v1.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark light',
  themeColor: '#0a0d1a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`${geist.variable} ${geistMono.variable} bg-background`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd />
      </head>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
