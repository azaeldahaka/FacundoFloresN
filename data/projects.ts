export type Project = {
  id: string
  title: string
  description: string
  techStack: string[]
  url?: string
}

export const myProjects: Project[] = [
  {
    id: "1",
    title: "Aromaas Decants",
    description:
      "Configuración de dominio y gestión de stock para plataforma de e-commerce desplegada en producción.",
    techStack: ["React 18", "TypeScript", "Vercel"],
    url: "https://aromaas-decants.vercel.app",
  },
  {
    id: "2",
    title: "Banquito Bebidas",
    description:
      "Diseño y configuración de aplicación móvil enfocada en la gestión operativa del negocio.",
    techStack: ["AppSheet", "Mobile"],
  },
  {
    id: "3",
    title: "Sistema de Gestión de Turnos",
    description:
      "MVP desarrollado para automatizar y gestionar reservas, apuntando a optimizar el tiempo de atención.",
    techStack: ["FilamentPHP", "SQL", "Python"],
  },
  {
    id: "4",
    title: "Bicicletería SantyBike",
    description:
      "Gestión de perfil comercial, posicionamiento y modificaciones de mapas para negocio local.",
    techStack: ["SEO Local", "Business Management"],
  },
]
