export interface Work {
  id: string
  title: string
  slug: string
  category: string
  client: string
  date: string
  image: string
  shortDescription: string
  fullDescription: string
  results: string[]
}

export const works: Work[] = [
  {
    id: "1",
    title: "Análisis Táctico: La Evolución del Fútbol Moderno",
    slug: "analisis-tactico-evolucion-futbol-moderno",
    category: "Análisis Táctico",
    client: "Revista Deportiva Nacional",
    date: "Marzo 2025",
    image: "/53a9f4ba9833648b3b65dd916fd3f20d.jpg",
    shortDescription: "Serie de artículos analizando la evolución táctica del fútbol en la última década.",
    fullDescription:
      "Desarrollamos una serie de cinco artículos en profundidad que analizan la evolución táctica del fútbol moderno. Cada artículo se centró en un aspecto específico: presión alta, construcción desde atrás, roles de los laterales, falsos nueves y transiciones. Combinamos análisis táctico con visualizaciones de datos y ejemplos de equipos de élite para ilustrar los conceptos. La serie recibió elogios por su profundidad analítica y accesibilidad para aficionados de diferentes niveles de conocimiento.",
    results: [
      "Más de 500,000 lectores únicos",
      "Compartido por entrenadores profesionales",
      "Traducido a 3 idiomas",
      "Utilizado como material educativo en cursos de entrenadores",
    ],
  },
  {
    id: "2",
    title: "Pronósticos Liga Española 2024-2025",
    slug: "pronosticos-liga-espanola-2024-2025",
    category: "Pronósticos",
    client: "Portal Deportivo Digital",
    date: "Agosto 2024 - Mayo 2025",
    image: "/10df864dbbb4cf76ab35566994260eec.jpg",
    shortDescription: "Cobertura semanal con pronósticos para todos los partidos de La Liga.",
    fullDescription:
      "Proporcionamos pronósticos semanales para todos los partidos de La Liga durante la temporada 2024-2025. Cada pronóstico incluía análisis estadístico, evaluación de forma reciente, historial de enfrentamientos y factores contextuales como lesiones y sanciones. Complementamos los pronósticos con un sistema de confianza de 1 a 5 estrellas y seguimiento transparente de nuestro rendimiento predictivo. El proyecto incluyó también artículos especiales para derbis y partidos decisivos para el título o el descenso.",
    results: [
      "Tasa de acierto del 68% en resultados",
      "Incremento del 45% en tráfico web para el cliente",
      "Comunidad activa de 25,000 seguidores",
      "Reconocido como el mejor contenido de pronósticos por premio del sector",
    ],
  },
  {
    id: "3",
    title: "Cobertura Especial: Torneo Internacional de Tenis",
    slug: "cobertura-especial-torneo-internacional-tenis",
    category: "Cobertura de Eventos",
    client: "Plataforma Deportiva Multimedia",
    date: "Abril 2025",
    image: "/7b83d8f99464a022a16e04aa8b533cbb.jpg",
    shortDescription: "Cobertura integral de un torneo internacional de tenis con contenido multimedia.",
    fullDescription:
      "Realizamos una cobertura integral del torneo internacional de tenis, incluyendo previas diarias, actualizaciones en vivo, análisis post-partido y contenido exclusivo entre bastidores. Nuestro equipo produjo artículos escritos, videos de análisis técnico, entrevistas con jugadores y entrenadores, y podcasts diarios resumiendo la acción. Implementamos un centro digital interactivo que permitía a los aficionados seguir a sus jugadores favoritos y acceder a estadísticas avanzadas en tiempo real.",
    results: [
      "Más de 2 millones de visitas durante el torneo",
      "Tiempo medio de permanencia de 8.5 minutos",
      "Crecimiento del 200% en suscriptores",
      "Acuerdo para cubrir el mismo evento durante los próximos 3 años",
    ],
  },
  {
    id: "4",
    title: "Estrategia de Contenido para Club Deportivo",
    slug: "estrategia-contenido-club-deportivo",
    category: "Consultoría",
    client: "Club Deportivo Regional",
    date: "Enero - Febrero 2025",
    image: "/b640ea66245c8ee49fdbf33a9b410cc1.jpg",
    shortDescription: "Desarrollo de estrategia de contenido digital para un club deportivo regional.",
    fullDescription:
      "Desarrollamos una estrategia integral de contenido digital para un club deportivo regional que buscaba aumentar su base de aficionados y mejorar el engagement. El proyecto incluyó un análisis de audiencia, evaluación de competidores, planificación editorial anual y formación del equipo interno. Creamos formatos específicos para diferentes plataformas, desde contenido exclusivo para socios hasta estrategias para redes sociales. Implementamos un sistema de medición para evaluar el rendimiento del contenido y realizar ajustes continuos.",
    results: [
      "Aumento del 75% en engagement digital",
      "Crecimiento del 30% en venta de entradas",
      "Incremento del 50% en interacciones en redes sociales",
      "Desarrollo de una comunidad digital activa de aficionados",
    ],
  },
  {
    id: "5",
    title: "Serie Documental: Historias del Deporte Local",
    slug: "serie-documental-historias-deporte-local",
    category: "Producción Multimedia",
    client: "Plataforma de Streaming Regional",
    date: "Febrero - Abril 2025",
    image: "/c46483d9510847ac65734e81da3921e5.jpg",
    shortDescription: "Serie documental de 6 episodios sobre historias inspiradoras del deporte local.",
    fullDescription:
      "Produjimos una serie documental de seis episodios que narra historias inspiradoras del deporte local. Cada episodio se centró en un deportista o equipo diferente, explorando sus desafíos, motivaciones y contribuciones a la comunidad. Combinamos entrevistas en profundidad, metraje de archivo y secuencias cinematográficas para crear narrativas emotivas y auténticas. La serie destacó deportes menos conocidos y figuras que normalmente no reciben atención mediática, celebrando la diversidad del panorama deportivo local.",
    results: [
      "Más de 500,000 visualizaciones en la plataforma",
      "Premio al mejor contenido deportivo documental",
      "Financiación asegurada para una segunda temporada",
      "Impacto positivo en la participación deportiva local",
    ],
  },
]
