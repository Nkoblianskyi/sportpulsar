export interface Service {
  id: string
  title: string
  slug: string
  shortDescription: string
  fullDescription: string
  icon: string
  features: string[]
}

export const services: Service[] = [
  {
    id: "1",
    title: "Redacción de Artículos Deportivos",
    slug: "redaccion-articulos-deportivos",
    shortDescription: "Creación de contenido deportivo de alta calidad con análisis profundo y datos actualizados.",
    fullDescription:
      "Nuestro equipo de redactores especializados en deportes crea contenido de alta calidad que combina análisis táctico, estadísticas actualizadas y contexto histórico. Cada artículo está diseñado para informar y entretener a los aficionados al deporte, con un enfoque en la precisión y la profundidad del análisis. Utilizamos fuentes confiables y verificamos todos los datos para garantizar la exactitud de nuestro contenido.",
    icon: "pencil",
    features: [
      "Artículos de análisis táctico",
      "Perfiles de equipos y jugadores",
      "Resúmenes de partidos",
      "Análisis estadístico",
      "Contenido SEO optimizado",
    ],
  },
  {
    id: "2",
    title: "Pronósticos Deportivos",
    slug: "pronosticos-deportivos",
    shortDescription: "Predicciones basadas en análisis estadístico avanzado y conocimiento experto del deporte.",
    fullDescription:
      "Nuestros pronósticos deportivos combinan análisis estadístico avanzado con el conocimiento experto de nuestro equipo. Utilizamos modelos matemáticos, tendencias históricas y factores contextuales para ofrecer predicciones precisas. Cada pronóstico incluye un análisis detallado que explica el razonamiento detrás de nuestras predicciones, ayudando a los lectores a tomar decisiones informadas.",
    icon: "bar-chart",
    features: [
      "Análisis pre-partido",
      "Estadísticas comparativas",
      "Factores contextuales",
      "Tendencias históricas",
      "Actualizaciones en tiempo real",
    ],
  },
  {
    id: "3",
    title: "Cobertura de Eventos Deportivos",
    slug: "cobertura-eventos-deportivos",
    shortDescription:
      "Reportajes completos de eventos deportivos con actualizaciones en tiempo real y análisis post-partido.",
    fullDescription:
      "Ofrecemos cobertura completa de eventos deportivos, desde la preparación previa hasta el análisis posterior. Nuestro equipo proporciona actualizaciones en tiempo real, destacando los momentos clave y ofreciendo contexto táctico. Después del evento, publicamos análisis detallados que examinan las decisiones clave, el rendimiento de los jugadores y las implicaciones para futuras competiciones.",
    icon: "tv",
    features: [
      "Cobertura pre-evento",
      "Actualizaciones en vivo",
      "Análisis post-partido",
      "Entrevistas exclusivas",
      "Contenido multimedia",
    ],
  },
  {
    id: "4",
    title: "Consultoría de Contenido Deportivo",
    slug: "consultoria-contenido-deportivo",
    shortDescription: "Asesoramiento estratégico para medios deportivos y marcas relacionadas con el deporte.",
    fullDescription:
      "Nuestra consultoría de contenido deportivo ayuda a medios y marcas a desarrollar estrategias efectivas para conectar con audiencias apasionadas por el deporte. Ofrecemos asesoramiento sobre planificación editorial, optimización SEO, estrategias de redes sociales y desarrollo de formatos innovadores. Nuestro enfoque se basa en datos de audiencia y tendencias del sector para maximizar el impacto del contenido.",
    icon: "lightbulb",
    features: [
      "Estrategia de contenido",
      "Optimización SEO",
      "Análisis de audiencia",
      "Planificación editorial",
      "Innovación de formatos",
    ],
  },
  {
    id: "5",
    title: "Producción de Contenido Multimedia",
    slug: "produccion-contenido-multimedia",
    shortDescription: "Creación de videos, podcasts y gráficos interactivos sobre temáticas deportivas.",
    fullDescription:
      "Nuestro equipo de producción multimedia crea contenido atractivo en diversos formatos, desde videos de análisis táctico hasta podcasts con expertos y gráficos interactivos que explican conceptos complejos. Combinamos narrativa convincente con visualización de datos para crear experiencias inmersivas que informan y entretienen a los aficionados al deporte en múltiples plataformas.",
    icon: "video",
    features: [
      "Videos de análisis",
      "Podcasts deportivos",
      "Infografías interactivas",
      "Visualización de datos",
      "Contenido para redes sociales",
    ],
  },
]
