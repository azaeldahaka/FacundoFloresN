export type DemoCredentials = {
  email?: string
  password?: string
  role?: string
  note?: string
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

export const myProjects: Project[] = [
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
    githubUrl: "https://github.com/MauricioLopezC/la-linda-app",
    duration: "Agosto 2026 - Presente",
    demoCredentials: {
      email: "compras@example.com",
      password: "aguanteboca",
      role: "Compras / Gestión Operativa",
      note: "Acceso asignado al módulo de compras, control de proveedores y emisión de órdenes.",
    },
  },
  {
    id: "1",
    title: "Aromaas Decants",
    description:
      "Configuración de dominio y gestión de stock para plataforma de e-commerce desplegada en producción.",
    techStack: ["React 18", "TypeScript", "Vercel"],
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
]
