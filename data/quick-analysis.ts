export interface QuickStat {
  id: string
  team: string
  title: string
  value: number
  maxValue: number
  description: string
  trend: "up" | "down" | "neutral"
  color: string
}

export interface QuickAnalysis {
  id: string
  title: string
  date: string
  stats: QuickStat[]
  insights: string[]
  slug: string
}

export const quickAnalyses: QuickAnalysis[] = [
  {
    id: "1",
    title: "Rendimiento Ofensivo: Liga Española",
    date: "14 de mayo, 2025",
    stats: [
      {
        id: "1",
        team: "Barcelona",
        title: "Goles por partido",
        value: 2.8,
        maxValue: 4,
        description: "Promedio de los últimos 10 partidos",
        trend: "up",
        color: "#A7FF2F",
      },
      {
        id: "2",
        team: "Real Madrid",
        title: "Goles por partido",
        value: 2.5,
        maxValue: 4,
        description: "Promedio de los últimos 10 partidos",
        trend: "neutral",
        color: "#FF6240",
      },
      {
        id: "3",
        team: "Atlético Madrid",
        title: "Goles por partido",
        value: 1.7,
        maxValue: 4,
        description: "Promedio de los últimos 10 partidos",
        trend: "down",
        color: "#3E7BFA",
      },
    ],
    insights: [
      "Barcelona: 7 de sus últimos 10 partidos terminaron con más de 2.5 goles",
      "Real Madrid: Marca en el primer tiempo en el 80% de sus partidos como local",
      "Atlético Madrid: Ha reducido su promedio goleador un 15% desde el inicio de temporada",
    ],
    slug: "rendimiento-ofensivo-liga-espanola",
  },
  {
    id: "2",
    title: "Análisis de Posesión: Champions League",
    date: "12 de mayo, 2025",
    stats: [
      {
        id: "1",
        team: "Manchester City",
        title: "Posesión promedio",
        value: 68,
        maxValue: 100,
        description: "Fase eliminatoria",
        trend: "up",
        color: "#A7FF2F",
      },
      {
        id: "2",
        team: "Bayern Munich",
        title: "Posesión promedio",
        value: 59,
        maxValue: 100,
        description: "Fase eliminatoria",
        trend: "neutral",
        color: "#FF6240",
      },
      {
        id: "3",
        team: "PSG",
        title: "Posesión promedio",
        value: 54,
        maxValue: 100,
        description: "Fase eliminatoria",
        trend: "down",
        color: "#3E7BFA",
      },
    ],
    insights: [
      "Manchester City: Mantiene más del 65% de posesión en el 90% de sus partidos",
      "Bayern Munich: Su eficiencia de conversión posesión-goles es la más alta del torneo",
      "PSG: A pesar de menor posesión, genera más ocasiones claras que la temporada anterior",
    ],
    slug: "analisis-posesion-champions-league",
  },
  {
    id: "3",
    title: "Efectividad Defensiva: Serie A",
    date: "10 de mayo, 2025",
    stats: [
      {
        id: "1",
        team: "Inter",
        title: "Goles concedidos",
        value: 0.9,
        maxValue: 3,
        description: "Promedio por partido",
        trend: "down",
        color: "#A7FF2F",
      },
      {
        id: "2",
        team: "Juventus",
        title: "Goles concedidos",
        value: 0.7,
        maxValue: 3,
        description: "Promedio por partido",
        trend: "down",
        color: "#FF6240",
      },
      {
        id: "3",
        team: "Milan",
        title: "Goles concedidos",
        value: 1.2,
        maxValue: 3,
        description: "Promedio por partido",
        trend: "up",
        color: "#3E7BFA",
      },
    ],
    insights: [
      "Juventus: 6 porterías a cero en sus últimos 8 partidos",
      "Inter: Reduce un 30% los tiros a puerta recibidos en la segunda mitad",
      "Milan: Ha concedido el 70% de sus goles en los últimos 15 minutos de partido",
    ],
    slug: "efectividad-defensiva-serie-a",
  },
]
