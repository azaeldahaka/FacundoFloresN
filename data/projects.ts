export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  url?: string
  githubUrl?: string
}

export const myProjects: Project[] = [
  {
    id: "1",
    title: "Aromaas Decants",
    description:
      "Configuración de dominio y gestión de stock para plataforma de e-commerce desplegada en producción.",
    techStack: ["React 18", "TypeScript", "Vercel"],
    url: "https://aromaas-decants.vercel.app",
    githubUrl: "https://github.com/azaeldahaka/AromaasDecants",
  },
  {
    id: "2",
    title: "Hotel Horizonte",
    description:
      "Sistema de Gestión Hotelera Full Stack. Aplicación web integral para administración y operación de reservas, evitando solapamientos. Cuenta con autenticación híbrida, roles, protección RLS en Supabase y dashboard estadístico en tiempo real.",
    techStack: ["React 18", "TypeScript", "Tailwind CSS", "Supabase", "Recharts"],
    url: "https://horizontesuites.netlify.app/",
    githubUrl: "https://github.com/azaeldahaka/Hotel-Horizonte-Suites",
  },
]
