import type { Language } from '@/lib/i18n'

export type DemoCredentials = {
  email?: string
  password?: string
  role?: string
  note?: string
  copyEmail?: string
  copyPassword?: string
}

export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  url?: string
  githubUrl?: string
  duration?: string
  imageUrl?: string
  inDevelopment?: boolean
  demoCredentials?: DemoCredentials
}

export const projectsByLang: Record<Language, Project[]> = {
  es: [
    {
      id: "4",
      title: "Aulix — Sistema de Gestión Académica & Operativa",
      description:
        "Plataforma integral para centros de atención académica, turnos y administración operativa. Desarrollado con arquitectura limpia en 4 capas y metodología Spec-Driven Development (SDD). Incluye control de accesos granular (RBAC), legajos de alumnos, asignación y cupos de aulas, disponibilidad y liquidación docente, calendario multidimensional interactivo, gestión de cobros, comprobantes y reportes gerenciales en tiempo real.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "Docker", "Tailwind CSS", "Recharts"],
      githubUrl: "https://github.com/jfNatanahel/aulix-ing-sw",
      duration: "Septiembre 2026 - Octubre 2026",
      demoCredentials: {
        email: "admin@aulix.local / alumno@gmail.com",
        password: "Password123! (Admin: Admin123!)",
        copyEmail: "admin@aulix.local",
        copyPassword: "Password123!",
        role: "Director, Alumno, Profesor, Recepción",
        note: "Contraseña universal: Password123!. Admite autenticación indistinta mediante Email, Nombre de Usuario o DNI.",
      },
    },
    {
      id: "3",
      title: "ERP & E-Commerce - La Linda",
      description:
        "Diseño e implementación de un sistema de gestión empresarial integral (ERP) y plataforma e-commerce para una cadena de supermercados multisucursal. Módulos clave: Administración de catálogo unificado, gestión multisucursal de stock/depósitos, compras y órdenes a proveedores, terminal de ventas (POS) con apertura/cierre de caja, facturación y tienda online sincronizada en tiempo real.",
      techStack: ["Laravel 13", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS", "Vite"],
      url: "https://la-linda-app-production-5zyab2.laravel.cloud/login",
      githubUrl: "https://github.com/MauricioLopezC/la-linda-app",
      duration: "Agosto 2026 - Presente",
      demoCredentials: {
        email: "compras@example.com",
        password: "aguanteboca",
        copyEmail: "compras@example.com",
        copyPassword: "aguanteboca",
        role: "Compras / Gestión Operativa",
        note: "Acceso asignado al módulo de compras, control de proveedores y emisión de órdenes.",
      },
    },
    {
      id: "1",
      title: "Aromaas Decants",
      description:
        "Plataforma e-commerce Mobile-First de perfumería de lujo desplegada en producción. Incluye catálogo interactivo Luxury Dark Mode, lógica dinámica de variantes (3ml, 5ml, 10ml), gestión de stock, configuración de dominio y optimización SEO en Vercel.",
      techStack: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      url: "https://aromaas-decants.vercel.app",
      githubUrl: "https://github.com/azaeldahaka/AromaasDecants",
      duration: "Abril 2026 - Mayo 2026",
      imageUrl: "/projects/AromaasDecants.png",
    },
    {
      id: "2",
      title: "Hotel Horizonte",
      description:
        "Sistema de Gestión Hotelera Full Stack. Aplicación web integral para administración y operación de reservas, evitando solapamientos. Cuenta con autenticación híbrida, roles, protección RLS en Supabase y dashboard estadístico en tiempo real.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
      url: "https://horizontesuites.netlify.app/",
      githubUrl: "https://github.com/azaeldahaka/Hotel-Horizonte-Suites",
      duration: "Diciembre 2025 (1 mes)",
      imageUrl: "/projects/HorizonteSuites.png",
    },
  ],
  en: [
    {
      id: "4",
      title: "Aulix — Academic & Operational Management SaaS",
      description:
        "End-to-end platform for educational centers, scheduling, and operational management. Built on a strict 4-layer Clean Architecture using Spec-Driven Development (SDD). Features granular RBAC, student records, classroom capacity & overlap prevention, teacher availability & payroll payouts, interactive multi-dimensional calendars, billing, receipts, and real-time executive analytics.",
      techStack: ["Next.js 16", "React 19", "TypeScript", "Prisma 7", "PostgreSQL", "Docker", "Tailwind CSS", "Recharts"],
      githubUrl: "https://github.com/jfNatanahel/aulix-ing-sw",
      duration: "Sep 2026 - Oct 2026",
      demoCredentials: {
        email: "admin@aulix.local / alumno@gmail.com",
        password: "Password123! (Admin: Admin123!)",
        copyEmail: "admin@aulix.local",
        copyPassword: "Password123!",
        role: "Director, Student, Teacher, Front Desk",
        note: "Universal password: Password123!. Supports seamless authentication via Email, Username, or National ID.",
      },
    },
    {
      id: "3",
      title: "La Linda — Multi-Warehouse Retail ERP & E-Commerce",
      description:
        "Design and implementation of a full-scale Enterprise Resource Planning (ERP) system and e-commerce storefront for a multi-branch supermarket chain. Key modules: unified catalog & dynamic pricing, multi-warehouse stock tracking, supplier purchase orders, Point of Sale (POS) terminal with cash-register reconciliation, invoicing, and a real-time synced online store.",
      techStack: ["Laravel 13", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS", "Vite"],
      url: "https://la-linda-app-production-5zyab2.laravel.cloud/login",
      githubUrl: "https://github.com/MauricioLopezC/la-linda-app",
      duration: "Aug 2026 - Present",
      demoCredentials: {
        email: "compras@example.com",
        password: "aguanteboca",
        copyEmail: "compras@example.com",
        copyPassword: "aguanteboca",
        role: "Purchasing / Operations Management",
        note: "Pre-configured access to the purchasing, supplier management, and purchase order module.",
      },
    },
    {
      id: "1",
      title: "Aromaas Decants — Luxury E-Commerce",
      description:
        "Production-grade mobile-first luxury fragrance e-commerce platform. Features a custom Luxury Dark Mode catalog, dynamic product variant schemas (3ml, 5ml, 10ml), inventory management, custom domain configuration, and Core Web Vitals optimization on Vercel.",
      techStack: ["React 18", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      url: "https://aromaas-decants.vercel.app",
      githubUrl: "https://github.com/azaeldahaka/AromaasDecants",
      duration: "Apr 2026 - May 2026",
      imageUrl: "/projects/AromaasDecants.png",
    },
    {
      id: "2",
      title: "Horizonte Suites — Full-Stack Hotel Management",
      description:
        "Comprehensive web application for hotel reservation management and front-desk operations with concurrency overlap-prevention algorithms. Features hybrid authentication (OAuth + custom), role-based access protected by native PostgreSQL Row-Level Security (RLS) in Supabase, and a real-time analytics dashboard.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
      url: "https://horizontesuites.netlify.app/",
      githubUrl: "https://github.com/azaeldahaka/Hotel-Horizonte-Suites",
      duration: "Dec 2025 (1 month)",
      imageUrl: "/projects/HorizonteSuites.png",
    },
  ],
}

export const myProjects: Project[] = projectsByLang.es

export function getProjects(lang: Language): Project[] {
  return projectsByLang[lang]
}
