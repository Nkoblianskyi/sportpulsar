export interface Editorial {
  id: string
  title: string
  content: string
  author: string
  date: string
  slug: string
  tags: string[]
}

export const editorials: Editorial[] = [
  {
    id: "1",
    title: "El VAR está matando la esencia del fútbol",
    content:
      "El fútbol siempre ha sido un deporte de emociones instantáneas, de celebraciones espontáneas y de polémicas que alimentan tertulias durante días. La introducción del VAR prometía justicia, pero está entregando un producto aséptico, fragmentado y desprovisto de la fluidez que hace único a este deporte. Los largos minutos de espera mientras un árbitro observa repeticiones desde múltiples ángulos están convirtiendo momentos de éxtasis en tediosos paréntesis burocráticos. No es que la tecnología sea mala per se, sino que su implementación actual está sacrificando la esencia del juego en el altar de una perfección inalcanzable. El fútbol necesita recuperar su alma, incluso si eso significa aceptar el error humano como parte inherente de su belleza imperfecta.",
    author: "Redacción SportPulsar",
    date: "15 de mayo, 2025",
    slug: "var-matando-esencia-futbol",
    tags: ["VAR", "Arbitraje", "Polémica"],
  },
  {
    id: "2",
    title: "La hipocresía de los clubes ante el calendario sobrecargado",
    content:
      "Los mismos clubes que ahora se quejan del calendario sobrecargado y del riesgo de lesiones para sus jugadores son los que votaron a favor de más competiciones, más partidos y más giras internacionales. La salud de los futbolistas parece importar solo cuando afecta directamente a sus intereses deportivos inmediatos, no cuando firman lucrativos contratos para jugar amistosos en otros continentes durante las supuestas vacaciones. Esta doble moral es especialmente evidente en los grandes clubes europeos, que por un lado lamentan públicamente la congestión de partidos mientras por otro lado impulsan nuevos formatos de Champions League o proyectos como la Superliga. Si realmente les preocupara el bienestar de los jugadores, empezarían por rechazar algunas de las oportunidades comerciales que ellos mismos han creado.",
    author: "Redacción SportPulsar",
    date: "12 de mayo, 2025",
    slug: "hipocresia-clubes-calendario-sobrecargado",
    tags: ["Calendario", "Lesiones", "Clubes"],
  },
  {
    id: "3",
    title: "El fútbol moderno necesita recuperar su conexión con la afición local",
    content:
      "Mientras los clubes persiguen aficionados en mercados emergentes a miles de kilómetros de distancia, las gradas de sus estadios se llenan cada vez más de turistas con selfie sticks y menos de aficionados locales que han seguido al equipo toda su vida. Los precios prohibitivos de las entradas están expulsando a las clases trabajadoras que históricamente han sido el alma de este deporte. El resultado es un ambiente cada vez más descafeinado, con estadios que parecen parques temáticos en lugar de los calderos de pasión que eran antes. Los clubes deben entender que su valor como marcas globales está intrínsecamente ligado a la autenticidad de su conexión local. Sin esa base cultural sólida, sin ese sentido de pertenencia comunitaria, el producto que venden pierde su esencia y, a largo plazo, también su atractivo comercial.",
    author: "Redacción SportPulsar",
    date: "8 de mayo, 2025",
    slug: "futbol-moderno-conexion-aficion-local",
    tags: ["Afición", "Precios", "Identidad"],
  },
  {
    id: "4",
    title: "La obsesión por los fichajes está devaluando el trabajo de cantera",
    content:
      "La cultura del fichaje estrella, del movimiento mediático y del impacto inmediato está socavando uno de los pilares fundamentales del fútbol: la formación de jugadores propios. Los clubes invierten cientos de millones en jugadores mientras sus canteras languidecen o se convierten en meros escaparates para vender jóvenes talentos antes de que lleguen al primer equipo. Esta mentalidad cortoplacista no solo es económicamente insostenible para la mayoría de los clubes, sino que rompe el vínculo emocional entre afición, jugadores y entidad. Un futbolista formado en casa que entiende la cultura del club y siente sus colores aporta un valor intangible que ningún fichaje millonario puede replicar. Los clubes que están resistiendo esta tendencia, apostando por proyectos a largo plazo basados en la cantera, no solo están construyendo equipos más sostenibles económicamente, sino también más auténticos y conectados con su identidad.",
    author: "Redacción SportPulsar",
    date: "5 de mayo, 2025",
    slug: "obsesion-fichajes-devaluando-cantera",
    tags: ["Cantera", "Fichajes", "Sostenibilidad"],
  },
]
