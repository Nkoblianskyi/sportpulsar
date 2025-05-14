export interface StreetVoice {
  id: string
  author: string
  avatar: string
  quote: string
  topic: string
  date: string
  isEditor: boolean
}

export const streetVoices: StreetVoice[] = [
  {
    id: "1",
    author: "Carlos_Futbolero",
    avatar: "/429251c09d9e9220f1b8754f6f9a56db.jpg",
    quote: "Este árbitro no distingue una falta de un tropiezo. ¡Increíble que siga pitando en primera división!",
    topic: "Arbitraje",
    date: "Hace 2 horas",
    isEditor: false,
  },
  {
    id: "2",
    author: "Ana Martínez",
    avatar: "/69b358ba2950a7901d08073ef781961b.jpg",
    quote:
      "La defensa de tres centrales es el futuro del fútbol moderno. Los equipos que no se adapten quedarán obsoletos.",
    topic: "Táctica",
    date: "Hace 5 horas",
    isEditor: true,
  },
  {
    id: "3",
    author: "Balón_de_Oro",
    avatar: "/9b650cff9af420350391a02e67cfa1d7.jpg",
    quote:
      "Este delantero no marcaría ni al arco iris. Lleva 7 partidos sin ver portería y siguen poniéndolo de titular.",
    topic: "Jugadores",
    date: "Hace 1 día",
    isEditor: false,
  },
  {
    id: "4",
    author: "Miguel Torres",
    avatar: "/2ec31ca3da29a93615cd9813c0ec9546.jpg",
    quote:
      "Las estadísticas no mienten: este equipo tiene un 75% más de posesión pero un 30% menos de disparos a puerta que la temporada pasada.",
    topic: "Estadísticas",
    date: "Hace 1 día",
    isEditor: true,
  },
  {
    id: "5",
    author: "Tribuna_Sur",
    avatar: "/ab24c40c7132ad8966af92dabfdf0455.jpg",
    quote:
      "La afición merece más respeto. No puede ser que los jugadores no suden la camiseta después de lo que pagamos por las entradas.",
    topic: "Afición",
    date: "Hace 2 días",
    isEditor: false,
  },
  {
    id: "6",
    author: "Laura Sánchez",
    avatar: "/2d367820f377369665d80ea3b51d0a7c.jpg",
    quote:
      "El VAR debería ser una herramienta para la justicia, no para generar más polémica. Necesitamos transparencia en los criterios.",
    topic: "Tecnología",
    date: "Hace 3 días",
    isEditor: true,
  },
]
