import type { Language } from '@/lib/i18n'

export const translations = {
  es: {
    header: {
      nav: [
        { label: 'Sobre Mí', href: '#about' },
        { label: 'Metodología', href: '#methodology' },
        { label: 'Tecnologías', href: '#stack' },
        { label: 'Proyectos', href: '#projects' },
        { label: 'Contacto', href: '#contact' },
      ],
      openMenu: 'Abrir menú de navegación',
      closeMenu: 'Cerrar menú',
    },
    hero: {
      badge: 'Disponible para roles remotos y proyectos selectos',
      headlinePrefix: 'Creo ',
      headlineHighlight: 'MVPs y sistemas escalables',
      headlineSuffix: ' para negocios que necesitan resultados.',
      description:
        'Soy Facu, ingeniero Full-Stack. Diseño arquitecturas resilientes y productos centrados en el usuario. Desde plataformas de alto tráfico hasta sistemas ERP y SaaS, transformo requerimientos complejos en sistemas que funcionan y perduran.',
      ctaPrimary: 'Trabajemos Juntos',
      ctaSecondary: 'Ver Proyectos',
      ctaResume: 'Ver Perfil / CV',
      stats: [
        ['4', 'Proyectos entregados'],
        ['23', 'Años'],
        ['Salta, AR', 'Ubicación (UTC-3)'],
      ] as const,
      portraitAlt: 'Retrato de Facundo, desarrollador Full-Stack',
    },
    about: {
      eyebrow: '01 / Sobre Mí',
      heading: 'Desarrollador Full-Stack & Estudiante Avanzado de Ingeniería Informática',
      whoami:
        'Soy Facundo, desarrollador Full-Stack radicado en Salta, Argentina. Actualmente curso el 4° año de Ingeniería Informática en la UCASAL. Tengo 23 años.',
      philosophy:
        'Combino mi formación académica con experiencia real en el mercado, construyendo soluciones de software eficientes, escalables y orientadas a resultados para equipos y clientes internacionales. Mi enfoque no es solo escribir código, sino entender el problema de raíz.',
      meta: [
        { label: 'Ubicación', value: 'Salta, Argentina — Remoto (UTC-3)' },
        { label: 'Estudios', value: 'Ing. Informática (4° año) — UCASAL' },
        { label: 'Enfoque', value: 'Full-Stack · Sistemas escalables' },
        { label: 'Estado', value: 'Abierto a roles remotos y colaboraciones' },
      ],
    },
    methodology: {
      eyebrow: '02 / Metodología',
      heading: 'Cómo transformo la ambigüedad en sistemas confiables',
      subtitle:
        'Un enfoque repetible que mantiene los productos centrados en el usuario mientras sostiene un alto estándar de ingeniería.',
      pillars: [
        {
          title: 'Arquitectura Centrada en el Usuario',
          description:
            'En cada sistema priorizo la eficiencia operativa. Durante el desarrollo del sistema hotelero Horizonte Suites, mapeé cada flujo: desde la experiencia intuitiva del huésped al reservar, hasta la velocidad de carga de datos del recepcionista.',
          points: ['Flujos guest & admin', 'Acceso basado en roles', 'Auditoría de fricción'],
        },
        {
          title: 'Ingeniería Robusta & Arquitectura en Capas',
          description:
            'En plataformas de alta complejidad como Aulix (gestión académica) y La Linda (ERP multisucursal), aplico Spec-Driven Development (SDD), separación en 4 capas (UI, Actions, Service, Repository), control de acceso estricto (RBAC) y tests automatizados.',
          points: ['Spec-Driven Development', 'Arquitectura 4 Capas', 'RBAC & Seguridad', 'Tests Automatizados'],
        },
        {
          title: 'Estandarización y Rendimiento',
          description:
            'En plataformas e-commerce y SaaS como Aromaas Decants, investigo y aplico las mejores prácticas de la industria en UX/UI. Analizo el comportamiento del usuario para diseñar interfaces fluidas manteniendo el código desacoplado y optimizado.',
          points: ['Mejores prácticas UX/UI', 'Código desacoplado', 'Infraestructura optimizada'],
        },
      ],
    },
    tech: {
      eyebrow: '03 / Stack',
      heading: 'Tecnologías y Herramientas',
    },
    projects: {
      eyebrow: '04 / Proyectos',
      heading: 'Proyectos seleccionados en producción',
      subtitle: 'Sistemas que he diseñado, desarrollado y desplegado de punta a punta.',
      inDevelopment: 'En Desarrollo',
      enterpriseArchitecture: 'Arquitectura Empresarial',
      demoHeader: 'Credenciales de prueba / Demo:',
      userLabel: 'Usuario:',
      passwordLabel: 'Clave:',
      roleLabel: 'Rol:',
      copyUserAria: 'usuario',
      copyPassAria: 'contraseña',
      liveDemo: 'Probar en Vivo',
      viewProduction: 'Ver en Producción',
      viewGithub: 'Ver en GitHub',
    },
    copy: {
      copy: 'Copiar',
      copied: 'Copiado',
      copyTitlePrefix: 'Copiar',
      copyDefaultAria: 'Copiar al portapapeles',
    },
    footer: {
      eyebrow: 'Contacto',
      heading: '¿Listo para construir algo que escale?',
      subtitle:
        'Abierto a oportunidades remotas full-time, colaboraciones freelance y proyectos selectos. Respondo cada mensaje en menos de 24 horas.',
      ctaPrimary: 'Trabajemos Juntos',
      copyrightSuffix: 'Facundo — Todos los sistemas operativos.',
      tagline: 'Full-Stack Engineer · Salta, Argentina (UTC-3)',
    },
  },
  en: {
    header: {
      nav: [
        { label: 'About', href: '#about' },
        { label: 'Methodology', href: '#methodology' },
        { label: 'Tech Stack', href: '#stack' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
      ],
      openMenu: 'Open navigation menu',
      closeMenu: 'Close menu',
    },
    hero: {
      badge: 'Available for remote roles & select projects',
      headlinePrefix: 'I build ',
      headlineHighlight: 'MVPs & scalable systems',
      headlineSuffix: ' for businesses that demand results.',
      description:
        "I'm Facu, a Full-Stack Software Engineer. I design resilient architectures and user-centric products. From high-traffic web platforms to enterprise ERPs and SaaS, I turn complex requirements into reliable systems built to last.",
      ctaPrimary: "Let's Work Together",
      ctaSecondary: 'View Projects',
      ctaResume: 'LinkedIn / Resume',
      stats: [
        ['4', 'Shipped Projects'],
        ['23', 'Years Old'],
        ['Salta, AR', 'Location (UTC-3)'],
      ] as const,
      portraitAlt: 'Portrait of Facundo, Full-Stack Software Engineer',
    },
    about: {
      eyebrow: '01 / About Me',
      heading: 'Full-Stack Software Engineer & Senior Computer Engineering Student',
      whoami:
        "I'm Facundo, a 23-year-old Full-Stack Developer based in Salta, Argentina. I'm currently a 4th-year Computer Engineering student at UCASAL.",
      philosophy:
        "I combine rigorous Computer Engineering fundamentals with real-world production experience—building efficient, scalable, and outcome-driven software for global teams and clients. My focus isn't just writing code; it's solving the root business problem.",
      meta: [
        { label: 'Location', value: 'Salta, Argentina — Remote (UTC-3)' },
        { label: 'Education', value: 'B.S. Computer Engineering (4th Yr) — UCASAL' },
        { label: 'Focus', value: 'Full-Stack · Scalable Systems' },
        { label: 'Status', value: 'Open to Remote Roles & Collaborations' },
      ],
    },
    methodology: {
      eyebrow: '02 / Methodology',
      heading: 'How I turn ambiguity into reliable systems',
      subtitle:
        'A repeatable engineering workflow that keeps products user-centric while upholding strict architectural standards.',
      pillars: [
        {
          title: 'User-Centric Architecture',
          description:
            'Every system prioritizes operational speed and clarity. While building the Horizonte Suites hotel platform, I mapped every workflow end-to-end: from frictionless guest booking to high-speed front-desk data entry.',
          points: ['Guest & admin flows', 'Role-based access', 'UX friction audits'],
        },
        {
          title: 'Clean 4-Layer Architecture & Testing',
          description:
            'For complex platforms like Aulix (academic SaaS) and La Linda (multi-branch ERP), I enforce Spec-Driven Development (SDD), strict 4-layer separation (UI, Actions, Domain Service, Repository), granular RBAC, and automated test suites.',
          points: ['Spec-Driven Development', '4-Layer Architecture', 'Granular RBAC', 'Automated Testing'],
        },
        {
          title: 'Performance & Industry Standards',
          description:
            'Across production e-commerce and SaaS apps like Aromaas Decants, I apply industry UX/UI best practices and Core Web Vitals optimization—delivering fast, conversion-focused interfaces backed by decoupled, maintainable code.',
          points: ['UX/UI best practices', 'Decoupled codebase', 'Core Web Vitals'],
        },
      ],
    },
    tech: {
      eyebrow: '03 / Stack',
      heading: 'Technologies & Tools',
    },
    projects: {
      eyebrow: '04 / Projects',
      heading: 'Selected Production Projects',
      subtitle: 'End-to-end systems I have architected, engineered, and deployed.',
      inDevelopment: 'In Development',
      enterpriseArchitecture: 'Enterprise Architecture',
      demoHeader: 'Live Demo Credentials:',
      userLabel: 'User:',
      passwordLabel: 'Password:',
      roleLabel: 'Role:',
      copyUserAria: 'username',
      copyPassAria: 'password',
      liveDemo: 'Live Demo',
      viewProduction: 'View Live',
      viewGithub: 'Source on GitHub',
    },
    copy: {
      copy: 'Copy',
      copied: 'Copied',
      copyTitlePrefix: 'Copy',
      copyDefaultAria: 'Copy to clipboard',
    },
    footer: {
      eyebrow: 'Contact',
      heading: 'Ready to build something that scales?',
      subtitle:
        'Open to full-time remote engineering roles, freelance collaborations, and select projects. I reply to every message within 24 hours.',
      ctaPrimary: "Let's Work Together",
      copyrightSuffix: 'Facundo — All systems operational.',
      tagline: 'Full-Stack Engineer · Salta, Argentina (UTC-3)',
    },
  },
} satisfies Record<Language, unknown>
