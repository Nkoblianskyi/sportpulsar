export interface Article {
  id: string
  title: string
  slug: string
  category: string
  author: string
  date: string
  image: string
  excerpt: string
  content: string
  tags: string[]
  featured: boolean
  prediction?: {
    event: string
    teams?: string[]
    players?: string[]
    analysis: string
    prediction: string
    confidence: number // 1-5
  }
}

export const articles: Article[] = [
  {
    id: "1",
    title: "La Revolución Táctica en el Fútbol Moderno: Análisis de las Tendencias Actuales",
    slug: "revolucion-tactica-futbol-moderno",
    category: "Fútbol",
    author: "Carlos Martínez",
    date: "15 de enero, 2025",
    image: "/33b99b25df1c39f176e39e0f436577f8.jpg",
    excerpt:
      "Un análisis profundo de cómo los sistemas tácticos en el fútbol han evolucionado en la última década y qué podemos esperar en el futuro.",
    content:
      "El fútbol moderno ha experimentado una revolución táctica sin precedentes en la última década. Los sistemas rígidos del pasado han dado paso a enfoques más fluidos y adaptables, donde los jugadores deben dominar múltiples posiciones y funciones.\n\nLa influencia de entrenadores innovadores como Pep Guardiola, Jürgen Klopp y Thomas Tuchel ha transformado la forma en que entendemos el juego. La presión alta, la construcción desde atrás y la ocupación inteligente de espacios son ahora elementos fundamentales en el fútbol de élite.\n\nUna de las tendencias más significativas es la evolución del papel de los laterales. Estos ya no son simplemente defensores que ocasionalmente se suman al ataque, sino piezas fundamentales en la construcción ofensiva. Vemos laterales que se invierten hacia el centro del campo, creando superioridades numéricas en zonas interiores y permitiendo a los extremos mantener la amplitud.\n\nOtra innovación notable es la interpretación moderna del mediocampista defensivo. Lejos de ser simplemente 'destructores', estos jugadores ahora son fundamentales en la primera fase de construcción, actuando como pivotes que conectan defensa y ataque. Su capacidad para resistir la presión y distribuir el balón con precisión es tan valorada como sus habilidades defensivas.\n\nLos delanteros también han visto transformado su rol. El '9' clásico ha evolucionado hacia perfiles más completos que participan activamente en el juego combinativo. La figura del 'falso 9' popularizada por Guardiola con Messi ha inspirado una generación de atacantes que dominan tanto la finalización como la creación.\n\nEn términos de estructuras defensivas, hemos visto un renacimiento de la defensa de tres centrales, pero con interpretaciones modernas que permiten mayor flexibilidad. Los equipos ahora transitan fluidamente entre diferentes sistemas durante un mismo partido, adaptándose a las circunstancias del juego.\n\nMirando hacia el futuro, podemos anticipar una mayor individualización táctica, donde los sistemas se diseñarán específicamente para maximizar las fortalezas de jugadores clave. También veremos una creciente influencia de la tecnología y el análisis de datos en la toma de decisiones tácticas, permitiendo ajustes más precisos y personalizados.\n\nEsta evolución táctica continuará impulsando el desarrollo del juego, creando nuevos desafíos para entrenadores y jugadores, y ofreciendo a los aficionados un espectáculo cada vez más rico y complejo.",
    tags: ["fútbol", "táctica", "análisis", "tendencias"],
    featured: true,
  },
  {
    id: "2",
    title: "Previa del Clásico: Análisis Táctico y Pronóstico",
    slug: "previa-clasico-analisis-pronostico",
    category: "Fútbol",
    author: "Laura Sánchez",
    date: "20 de febrero, 2025",
    image: "/d2555601d5ce4179bebf37d28f6da769.jpg",
    excerpt:
      "Analizamos las claves tácticas del próximo Clásico y ofrecemos nuestro pronóstico basado en datos y análisis experto.",
    content:
      "El próximo fin de semana se disputará una nueva edición del Clásico, uno de los enfrentamientos más esperados del calendario futbolístico mundial. Ambos equipos llegan en un momento crucial de la temporada, con implicaciones directas para la lucha por el título.\n\nEl equipo local ha mostrado una solidez defensiva impresionante en los últimos partidos, concediendo apenas tres goles en sus últimos diez encuentros ligueros. Su sistema de juego basado en un 4-3-3 con un mediocampista defensivo fijo les ha proporcionado el equilibrio necesario para dominar a la mayoría de sus rivales.\n\nPor su parte, los visitantes han apostado por un fútbol más vertical y directo esta temporada, aprovechando la velocidad de sus extremos y la capacidad de su delantero centro para ganar duelos individuales. Su transición defensa-ataque es probablemente la más efectiva de la liga, completando contraataques letales en cuestión de segundos.\n\nUna de las batallas tácticas más interesantes se dará en el mediocampo. El control de esta zona será fundamental, con el equipo local buscando imponer su posesión característica frente a un rival que prefiere ceder la iniciativa para luego atacar los espacios.\n\nLas bandas serán otra zona decisiva. Los laterales del equipo local tienen tendencia a proyectarse constantemente al ataque, lo que podría dejar espacios que los rápidos extremos visitantes intentarán explotar.\n\nEn cuanto a individualidades, habrá que prestar especial atención al duelo entre el mediapunta local, en estado de gracia con 12 goles y 8 asistencias esta temporada, y el mediocentro defensivo visitante, pieza clave en la recuperación y distribución del juego de su equipo.\n\nLa estadística reciente favorece ligeramente al equipo local, que ha ganado tres de los últimos cinco enfrentamientos directos. Sin embargo, el visitante se impuso en su último encuentro, mostrando una efectividad letal en las áreas.",
    tags: ["fútbol", "clásico", "análisis táctico", "pronóstico"],
    featured: true,
    prediction: {
      event: "El Clásico - Jornada 24",
      teams: ["Equipo Local", "Equipo Visitante"],
      analysis:
        "El equipo local parte como favorito por su solidez en casa y su mejor momento de forma. Sin embargo, el visitante ha demostrado ser especialmente peligroso contra equipos que toman la iniciativa, aprovechando los espacios a la espalda de las defensas adelantadas. Las bajas por lesión del lateral derecho titular local y del central visitante podrían ser factores determinantes.",
      prediction: "Victoria ajustada del equipo local (2-1)",
      confidence: 3,
    },
  },
  {
    id: "3",
    title: "El Ascenso Meteórico de la Nueva Estrella del Tenis",
    slug: "ascenso-meteorico-nueva-estrella-tenis",
    category: "Tenis",
    author: "Miguel Ángel Torres",
    date: "5 de marzo, 2025",
    image: "/f505f4d4dfec56c1f9e89fed117b4773.jpg",
    excerpt:
      "Analizamos la trayectoria y el estilo de juego de la joven promesa que está revolucionando el circuito profesional de tenis.",
    content:
      "El mundo del tenis está presenciando el surgimiento de una nueva estrella que, a sus apenas 19 años, ya ha conseguido irrumpir en el Top 20 del ranking mundial. Su ascenso meteórico recuerda a los inicios de figuras legendarias como Rafael Nadal o Novak Djokovic.\n\nNacido en una pequeña localidad y formado inicialmente en instalaciones modestas, su talento excepcional llamó la atención de una academia prestigiosa que decidió apostar por su desarrollo. Bajo la tutela de un extenista de élite, ha pulido su técnica y, especialmente, su mentalidad competitiva.\n\nSu estilo de juego combina elementos modernos con toques clásicos. Dotado de un saque potente que regularmente supera los 210 km/h, ha construido su juego alrededor de esta arma. Su derecha es igualmente devastadora, capaz de generar ángulos imposibles y acelerar la bola como pocos jugadores en el circuito.\n\nPero quizás lo más impresionante es su movilidad y resistencia física. A pesar de su altura (1,93m), se mueve por la pista con una agilidad sorprendente, llegando a bolas aparentemente imposibles y manteniendo un nivel físico excepcional en partidos a cinco sets.\n\nSu revés a dos manos, inicialmente considerado su golpe más débil, ha mejorado notablemente en los últimos meses. Ahora es capaz de mantener intercambios prolongados desde el fondo de la pista y, cuando tiene la oportunidad, atacar con su revés paralelo.\n\nEn el aspecto mental, muestra una madurez impropia de su edad. Su capacidad para gestionar los momentos de presión y mantener la calma en puntos decisivos ha sido clave en sus victorias contra jugadores más experimentados.\n\nEsta temporada ya ha conseguido dos títulos ATP 250 y alcanzó las semifinales en un Masters 1000, donde cayó en un ajustado partido contra el número dos del mundo. Los expertos coinciden en que es solo cuestión de tiempo que dispute las rondas finales de los Grand Slams.\n\nSu juego se adapta especialmente bien a superficies rápidas, aunque ha demostrado versatilidad en tierra batida. De cara a la próxima temporada, su equipo ha señalado que el objetivo es consolidarse en el Top 10 y prepararse para dar el salto definitivo a la élite absoluta.",
    tags: ["tenis", "nueva estrella", "análisis"],
    featured: false,
  },
  {
    id: "4",
    title: "Análisis del Gran Premio: Estrategias y Pronósticos",
    slug: "analisis-gran-premio-estrategias-pronosticos",
    category: "Fórmula 1",
    author: "Elena Rodríguez",
    date: "12 de abril, 2025",
    image: "/2ceea247c8d57a62728f582fc5cdacb0.jpg",
    excerpt:
      "Desglosamos las estrategias de los equipos principales y ofrecemos nuestros pronósticos para el próximo Gran Premio.",
    content:
      "El circuito que acogerá el próximo Gran Premio presenta características únicas que pondrán a prueba tanto a pilotos como a ingenieros. Con sus 5.4 kilómetros de longitud, combina rectas largas donde los monoplazas alcanzan velocidades superiores a 330 km/h con secciones técnicas que requieren precisión milimétrica.\n\nLas condiciones meteorológicas añaden un factor adicional de incertidumbre. Las previsiones indican posibilidad de lluvia intermitente durante la clasificación, lo que podría alterar completamente el orden de la parrilla y las estrategias para la carrera del domingo.\n\nEn cuanto a los neumáticos, el proveedor oficial ha designado los compuestos C2 (duro), C3 (medio) y C4 (blando) para este Gran Premio. La degradación será un factor crucial, especialmente en el sector intermedio del circuito, donde las curvas de alta velocidad someten a los neumáticos a fuerzas laterales extremas.\n\nEl equipo líder del campeonato llega como favorito tras su dominio en las últimas carreras. Su monoplaza ha mostrado un equilibrio excepcional entre rendimiento en clasificación y ritmo de carrera. Sin embargo, las recientes mejoras aerodinámicas introducidas por su principal rival podrían reducir la diferencia, especialmente en las secciones más técnicas del trazado.\n\nLa estrategia de paradas en boxes será determinante. Los análisis de carreras anteriores en este circuito sugieren que la estrategia óptima es de dos paradas, comenzando con el compuesto blando para asegurar una buena posición en las primeras vueltas, pasando luego a medio y finalizando con duro. Sin embargo, equipos con menor degradación podrían intentar una estrategia agresiva de una sola parada.\n\nOtro factor a considerar es la dificultad para adelantar en este circuito. A pesar de contar con dos zonas de DRS, la configuración de las curvas que las preceden hace que seguir de cerca al coche delantero sea extremadamente difícil debido a la pérdida de carga aerodinámica. Esto aumenta la importancia de la clasificación y la salida.",
    tags: ["fórmula 1", "gran premio", "estrategia", "pronóstico"],
    featured: false,
    prediction: {
      event: "Gran Premio - Ronda 6",
      players: ["Piloto A", "Piloto B", "Piloto C"],
      analysis:
        "El circuito favorece a monoplazas con buena eficiencia aerodinámica y tracción en curvas lentas. El equipo del Piloto A ha mostrado fortaleza en estos aspectos durante toda la temporada. Sin embargo, el Piloto B viene de ganar la última carrera y su equipo ha introducido mejoras significativas en el difusor que podrían darle ventaja en las secciones más técnicas.",
      prediction: "1. Piloto A, 2. Piloto B, 3. Piloto C",
      confidence: 4,
    },
  },
  {
    id: "5",
    title: "La Evolución del Baloncesto Moderno: Análisis Estadístico y Táctico",
    slug: "evolucion-baloncesto-moderno-analisis",
    category: "Baloncesto",
    author: "Javier López",
    date: "25 de abril, 2025",
    image: "/59060e2b1da019baa366a31c410baf82.jpg",
    excerpt:
      "Un análisis profundo de cómo ha evolucionado el baloncesto en la última década, con énfasis en el impacto de la analítica avanzada.",
    content:
      "El baloncesto ha experimentado una transformación radical en la última década, impulsada principalmente por la revolución analítica y la evolución de las habilidades de los jugadores. Lo que antes era considerado un buen tiro —el tiro de media distancia— ahora es visto como una opción ineficiente en comparación con los triples y las canastas cerca del aro.\n\nLas estadísticas avanzadas han revelado que un tiro de tres puntos con un 35% de efectividad produce más puntos por posesión que un tiro de media distancia con un 50% de acierto. Esta simple realidad matemática ha transformado completamente las estrategias ofensivas de los equipos profesionales.\n\nLa evolución es evidente en los números: en la temporada 2010-2011, los equipos promediaban 18 intentos de triple por partido. En la actual temporada 2024-2025, ese promedio ha ascendido a 35, prácticamente duplicándose. Paralelamente, los tiros de media distancia han caído de 25 a apenas 10 por partido.\n\nEsta transformación ha tenido un impacto profundo en los perfiles de jugadores valorados en la liga. Los 'big men' tradicionales, cuyo juego se centraba en el poste bajo, han tenido que adaptar sus habilidades para incluir el tiro exterior. Hoy, es común ver a jugadores de 2,10 metros lanzando con soltura desde más allá de la línea de tres puntos.\n\nLa defensa también ha evolucionado como respuesta. Los esquemas defensivos modernos priorizan la protección del aro y la línea de tres puntos, concediendo deliberadamente los tiros de media distancia. La versatilidad defensiva es ahora una cualidad premium, con equipos buscando jugadores capaces de defender múltiples posiciones para facilitar los cambios defensivos.\n\nOtro aspecto revolucionario ha sido el ritmo de juego. La velocidad de las transiciones y el número de posesiones por partido ha aumentado significativamente. Los equipos ya no esperan pacientemente a que su pívot se establezca en el poste bajo; en su lugar, buscan ventajas inmediatas tras el rebote defensivo o incluso después de recibir una canasta.\n\nLa tecnología de seguimiento ha permitido a los equipos optimizar la ubicación de los jugadores en la cancha para maximizar el espaciado. Los análisis de 'shot charts' y mapas de calor han identificado las zonas de mayor eficiencia para cada jugador, permitiendo diseñar jugadas que los coloquen en sus spots preferidos.\n\nMirando hacia el futuro, podemos anticipar una mayor personalización de las estrategias basadas en datos. La inteligencia artificial ya está siendo utilizada para predecir patrones defensivos y sugerir ajustes en tiempo real. El próximo horizonte podría incluir entrenamiento personalizado basado en biomecánica avanzada y análisis predictivo de lesiones.",
    tags: ["baloncesto", "análisis estadístico", "evolución táctica"],
    featured: true,
  },
  {
    id: "6",
    title: "Previa del Torneo de Tenis: Favoritos y Pronósticos",
    slug: "previa-torneo-tenis-favoritos-pronosticos",
    category: "Tenis",
    author: "Ana Martín",
    date: "2 de mayo, 2025",
    image: "/3652228038f3a49598080347f8585c52.jpg",
    excerpt:
      "Analizamos el cuadro del próximo torneo de tenis, destacando a los favoritos y ofreciendo pronósticos para las rondas finales.",
    content:
      "El prestigioso torneo que comenzará la próxima semana promete emociones fuertes con un cuadro repleto de estrellas y posibles sorpresas. La superficie rápida del complejo, ligeramente más lenta que en ediciones anteriores según han confirmado los organizadores, podría equilibrar las fuerzas entre diferentes estilos de juego.\n\nEl actual número uno del mundo llega como principal favorito tras su impresionante racha de 15 victorias consecutivas. Su adaptabilidad a todo tipo de superficies y su consistencia desde el fondo de la pista le convierten en el hombre a batir. Sin embargo, deberá superar un cuadro complicado que incluye potenciales enfrentamientos tempranos contra especialistas en pista rápida.\n\nSu eterno rival, a pesar de no estar en su mejor momento de forma tras recuperarse de una lesión en el hombro, nunca puede ser descartado. Su experiencia en momentos decisivos y su capacidad para elevar su nivel en los grandes torneos le mantienen entre los candidatos al título. Los entrenamientos previos al torneo han mostrado signos positivos sobre su recuperación física.\n\nLa joven promesa que ha irrumpido esta temporada en el Top 10 representa la amenaza más fresca. Su tenis agresivo, construido alrededor de un saque demoledor y una derecha potente, le hace especialmente peligroso en esta superficie. Ya derrotó al número uno en su último enfrentamiento hace dos meses, demostrando que tiene las armas para competir al máximo nivel.\n\nEn el cuadro femenino, la actual campeona defiende título en un momento excepcional de su carrera. Su juego basado en la precisión y la inteligencia táctica, más que en la potencia bruta, ha demostrado ser extremadamente efectivo. Su capacidad para variar ritmos y desactivar el juego de rivales más potentes será clave para repetir éxito.\n\nSu principal competidora será la ganadora de los dos últimos Grand Slams, cuyo tenis agresivo y físico representa el contrapunto perfecto. Los enfrentamientos entre ambas han sido algunos de los partidos más emocionantes de las últimas temporadas, con un balance prácticamente equilibrado.",
    tags: ["tenis", "torneo", "pronósticos", "análisis"],
    featured: false,
    prediction: {
      event: "Torneo Internacional de Tenis - Mayo 2025",
      players: ["Jugador A", "Jugadora B", "Jugador C", "Jugadora D"],
      analysis:
        "La superficie rápida pero con buen agarre favorece a jugadores con golpes potentes que también tengan consistencia desde el fondo. El Jugador A ha mostrado un excelente estado de forma en los últimos torneos y su historial en esta superficie es impresionante (85% de victorias). La Jugadora B llega como defensora del título y conoce perfectamente las condiciones, aunque ha tenido algunos problemas físicos en el último mes.",
      prediction: "Campeón masculino: Jugador A, Campeona femenina: Jugadora D",
      confidence: 4,
    },
  },
  {
    id: "7",
    title: "La Ciencia detrás del Rendimiento Deportivo de Élite",
    slug: "ciencia-rendimiento-deportivo-elite",
    category: "Ciencia Deportiva",
    author: "Dr. Roberto Fernández",
    date: "10 de mayo, 2025",
    image: "/placeholder.svg?key=u2isk",
    excerpt:
      "Exploramos los avances científicos que están transformando el entrenamiento y la recuperación de los atletas de élite.",
    content:
      "El rendimiento deportivo de élite ha experimentado una revolución silenciosa en la última década gracias a los avances científicos y tecnológicos. Lo que antes se basaba principalmente en la intuición y la experiencia de entrenadores, ahora se fundamenta en datos precisos y metodologías científicamente validadas.\n\nUno de los campos que más ha evolucionado es la biomecánica aplicada. Mediante sistemas de captura de movimiento 3D y sensores inerciales, los científicos deportivos pueden analizar con precisión milimétrica cada aspecto del movimiento de un atleta. Esto permite identificar ineficiencias técnicas imperceptibles para el ojo humano y diseñar correcciones personalizadas que optimizan tanto el rendimiento como la prevención de lesiones.\n\nLa fisiología del ejercicio también ha experimentado avances significativos. Los protocolos de entrenamiento actuales se diseñan basándose en perfiles metabólicos individualizados, determinados mediante pruebas exhaustivas que miden desde el umbral anaeróbico hasta la eficiencia en la utilización de diferentes sustratos energéticos. Esto permite crear programas de entrenamiento totalmente personalizados que maximizan las adaptaciones fisiológicas específicas para cada atleta y disciplina.\n\nLa nutrición deportiva ha pasado de las recomendaciones generales a la precisión molecular. Los planes nutricionales modernos no solo consideran los macronutrientes, sino también el timing nutricional, la periodización de carbohidratos y la suplementación específica basada en el perfil genético del atleta. Técnicas como la calorimetría indirecta permiten determinar con exactitud los requerimientos energéticos individuales en diferentes fases de entrenamiento y competición.\n\nQuizás el área que ha experimentado mayor revolución es la recuperación. Las técnicas tradicionales como los baños de hielo están siendo complementadas o reemplazadas por métodos basados en evidencia científica sólida. La compresión neumática intermitente, la estimulación eléctrica neuromuscular y las cámaras hiperbáricas son solo algunas de las tecnologías que permiten acelerar los procesos de recuperación y adaptación.\n\nLa neurociencia deportiva emerge como la nueva frontera. El entrenamiento cognitivo y perceptivo-motor está demostrando ser tan importante como el físico en muchas disciplinas. Sistemas de realidad virtual permiten a los atletas entrenar la toma de decisiones y las habilidades perceptivas en entornos controlados que simulan situaciones competitivas con precisión.\n\nLa monitorización continua mediante wearables avanzados ha transformado la gestión de la carga de entrenamiento. Parámetros como la variabilidad de la frecuencia cardíaca, la calidad del sueño y los marcadores de fatiga neuromuscular son analizados diariamente para ajustar los entrenamientos en tiempo real, maximizando adaptaciones y minimizando riesgos de sobreentrenamiento.\n\nLa genética y la epigenética representan el horizonte más prometedor. La secuenciación del genoma completo de atletas permite identificar predisposiciones para diferentes tipos de entrenamiento, riesgos de lesión y respuestas a estímulos específicos. Esto está abriendo la puerta a una verdadera medicina deportiva de precisión, donde cada aspecto del entrenamiento se adapta al perfil genético único del atleta.",
    tags: ["ciencia deportiva", "rendimiento", "tecnología", "entrenamiento"],
    featured: false,
  },
  {
    id: "8",
    title: "Análisis Previo: El Derbi de la Ciudad",
    slug: "analisis-previo-derbi-ciudad",
    category: "Fútbol",
    author: "Carlos Martínez",
    date: "18 de mayo, 2025",
    image: "/489f31c9e4f329cb7700488bde7e2f30.jpg",
    excerpt:
      "Desglosamos las claves tácticas del próximo derbi y ofrecemos nuestro pronóstico para este encuentro crucial.",
    content:
      "El derbi que se disputará este fin de semana trasciende lo meramente deportivo para convertirse en un evento que divide a la ciudad. Con ambos equipos separados por apenas tres puntos en la clasificación, el encuentro tiene implicaciones directas en la lucha por los puestos europeos.\n\nEl equipo local llega en un momento de forma ascendente, con cuatro victorias consecutivas que han revitalizado sus aspiraciones. Su sistema de juego basado en la posesión y la presión alta tras pérdida les ha permitido dominar a rivales de entidad en las últimas jornadas. La recuperación de su mediocampista creativo, ausente durante dos meses por lesión, ha sido fundamental en este resurgir.\n\nPor su parte, los visitantes atraviesan un momento irregular, alternando actuaciones brillantes con inexplicables bajones de rendimiento. Su fortaleza reside en un bloque defensivo sólido y transiciones rápidas, aprovechando la velocidad de sus extremos. La baja por sanción de su central titular supone un contratiempo significativo para su planteamiento habitual.\n\nHistóricamente, los derbis entre estos equipos han sido encuentros cerrados y de alta intensidad. En los últimos cinco enfrentamientos directos, ningún equipo ha conseguido marcar más de dos goles, y tres de ellos han finalizado en empate. La tensión del ambiente suele traducirse en partidos con numerosas interrupciones y un alto número de tarjetas.\n\nUna de las batallas tácticas más interesantes se dará en las bandas. Los laterales ofensivos del equipo local se enfrentarán a los veloces extremos visitantes, en un duelo que podría definir el partido. La capacidad de los locales para mantener la posesión en campo contrario frente a la amenaza constante del contraataque visitante será otra de las claves.\n\nEn el aspecto individual, el duelo entre el delantero centro local, máximo goleador del equipo con 15 tantos, y la pareja de centrales visitante promete emociones. Igualmente relevante será el rendimiento del mediocentro organizador visitante, auténtico termómetro de su equipo y especialista en partidos de alta intensidad.",
    tags: ["fútbol", "derbi", "análisis táctico", "pronóstico"],
    featured: true,
    prediction: {
      event: "Derbi de la Ciudad - Jornada 36",
      teams: ["Equipo Local", "Equipo Visitante"],
      analysis:
        "El factor campo será determinante en un derbi donde la presión ambiental juega un papel fundamental. El equipo local llega en mejor momento de forma y cuenta con la ventaja de una semana completa de preparación, mientras que el visitante afrontó un partido exigente a mitad de semana. La baja por sanción del central titular visitante debilita significativamente su línea defensiva frente a un ataque local que ha anotado en sus últimos 12 partidos como local.",
      prediction: "Victoria del equipo local (2-0)",
      confidence: 4,
    },
  },
]
