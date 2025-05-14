export interface ImpactEvent {
  id: string
  title: string
  description: string
  image: string
  tag: "Alta tensión" | "Previa caliente" | "Pronóstico incluido"
  date: string
  slug: string
}

export const impactEvents: ImpactEvent[] = [
  {
    id: "1",
    title: "El Clásico: Batalla por el Liderato",
    description:
      "Un enfrentamiento decisivo que podría definir el campeón de la temporada. Ambos equipos llegan en su mejor momento con todas sus estrellas disponibles.",
    image: "/0ecae48201b9f920125dcfe4ea10a086.jpg",
    tag: "Alta tensión",
    date: "15 de mayo, 2025",
    slug: "clasico-batalla-liderato",
  },
  {
    id: "2",
    title: "Escándalo de Arbitraje en la Champions",
    description:
      "Polémica decisión arbitral en los últimos minutos desata la furia de jugadores y aficionados. El VAR vuelve a ser protagonista negativo en un partido crucial.",
    image: "/8b87bf77d37b3103c7ac84f20b757d88.jpg",
    tag: "Alta tensión",
    date: "12 de mayo, 2025",
    slug: "escandalo-arbitraje-champions",
  },
  {
    id: "3",
    title: "Derbi Madrileño: Previa del Encuentro",
    description:
      "El estadio será una caldera este domingo. Analizamos las claves tácticas y los duelos individuales que podrían decidir el partido más caliente de la temporada.",
    image: "/2b63e8d1a18083ed2d4d52c4d0729bf6.jpg",
    tag: "Previa caliente",
    date: "18 de mayo, 2025",
    slug: "derbi-madrileno-previa",
  },
  {
    id: "4",
    title: "Fichaje Bomba: Estrella Mundial Cambia de Equipo",
    description:
      "Tras semanas de rumores, se confirma el traspaso más caro de la historia. El jugador firma por cinco temporadas en un movimiento que revoluciona el mercado.",
    image: "/4f2f73a3795dc8d36828424dabed2e9f.jpg",
    tag: "Pronóstico incluido",
    date: "10 de mayo, 2025",
    slug: "fichaje-bomba-estrella-mundial",
  },
]
