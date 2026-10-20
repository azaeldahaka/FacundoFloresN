export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://facundoflores.dev/#website',
        url: 'https://facundoflores.dev',
        name: 'Facundo Flores — Portafolio Full-Stack',
        description:
          'Portafolio profesional de Facundo Flores, Ingeniero Full-Stack especializado en sistemas escalables y MVPs.',
        inLanguage: 'es-AR',
      },
      {
        '@type': 'Person',
        '@id': 'https://facundoflores.dev/#person',
        name: 'Facundo Flores',
        alternateName: ['Facu', 'Azael Dahaka'],
        jobTitle: 'Full-Stack Engineer',
        description:
          'Ingeniero Full-Stack y estudiante avanzado de Ingeniería Informática en UCASAL. Diseña arquitecturas resilientes y sistemas web escalables.',
        url: 'https://facundoflores.dev',
        image: 'https://facundoflores.dev/FacuFotoPerfilCanva-v1.jpg',
        email: 'mailto:floresnfacundo@gmail.com',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Salta',
          addressRegion: 'Salta',
          addressCountry: 'AR',
        },
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Universidad Católica de Salta (UCASAL)',
        },
        sameAs: [
          'https://github.com/azaeldahaka',
          'https://www.linkedin.com/in/facundofloresn/',
          'https://wa.me/5493874431282',
        ],
        knowsAbout: [
          'Next.js',
          'React',
          'TypeScript',
          'Laravel',
          'PostgreSQL',
          'Prisma ORM',
          'Docker',
          'Tailwind CSS',
          'REST APIs',
          'Software Architecture',
          'Spec-Driven Development',
        ],
      },
      {
        '@type': 'ProfilePage',
        '@id': 'https://facundoflores.dev/#webpage',
        url: 'https://facundoflores.dev',
        name: 'Facundo Flores — Full-Stack Engineer | Scalable Systems',
        isPartOf: {
          '@id': 'https://facundoflores.dev/#website',
        },
        about: {
          '@id': 'https://facundoflores.dev/#person',
        },
        inLanguage: 'es-AR',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
