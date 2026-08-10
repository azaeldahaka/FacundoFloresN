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
}

export const myProjects: Project[] = [
  {
    id: "3",
    title: "ERP & E-Commerce - La Linda",
    description:
      "Diseño e implementación de un sistema de gestión empresarial integral (ERP) y plataforma e-commerce para una cadena de supermercados multisucursal. Módulos clave: Administración de catálogo unificado, gestión multisucursal de stock/depósitos, compras, terminal de ventas (POS) y tienda online sincronizada en tiempo real.",
    techStack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS", "Laravel Cloud"],
    duration: "Inicio: Agosto 2026 (En progreso)",
    inDevelopment: true,
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
