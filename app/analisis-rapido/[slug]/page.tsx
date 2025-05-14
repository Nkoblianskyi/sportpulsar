import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowUp, ArrowDown, Minus, BarChart, Calendar, TrendingUp } from "lucide-react"
import { quickAnalyses } from "@/data/quick-analysis"

interface QuickAnalysisPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: QuickAnalysisPageProps): Promise<Metadata> {
  const analysis = quickAnalyses.find((analysis) => analysis.slug === params.slug)

  if (!analysis) {
    return {
      title: "Análisis no encontrado",
    }
  }

  return {
    title: `${analysis.title} - Análisis Rápido`,
    description: `Análisis estadístico detallado sobre ${analysis.title}`,
  }
}

export async function generateStaticParams() {
  return quickAnalyses.map((analysis) => ({
    slug: analysis.slug,
  }))
}

export default function QuickAnalysisDetailPage({ params }: QuickAnalysisPageProps) {
  const analysis = quickAnalyses.find((analysis) => analysis.slug === params.slug)

  if (!analysis) {
    notFound()
  }

  // Mock additional content for the detailed view
  const additionalInsights = [
    "Los equipos que mantienen una posesión superior al 60% ganan el 72% de sus partidos en esta competición",
    "La eficiencia en el último tercio del campo ha aumentado un 18% respecto a la temporada anterior",
    "Los equipos que presionan alto recuperan el balón en campo contrario un 25% más que la media de la liga",
    "El 65% de los goles se marcan tras secuencias de menos de 4 pases, mostrando una tendencia hacia el juego directo",
  ]

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center">
            <BarChart className="mr-4 h-10 w-10 text-accent" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{analysis.title}</h1>
              <div className="flex items-center text-gray-300 mt-2">
                <Calendar className="mr-2 h-5 w-5" />
                <span>{analysis.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Button asChild variant="outline" className="mb-8">
            <Link href="/analisis-rapido">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Análisis Rápido
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <div className="rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-primary">Estadísticas Detalladas</h2>

                <div className="space-y-8">
                  {analysis.stats.map((stat) => (
                    <div key={stat.id} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-primary">{stat.team}</h4>
                          <p className="text-gray-500">{stat.title}</p>
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold" style={{ color: stat.color }}>
                            {stat.value}
                          </span>
                          {stat.trend === "up" ? (
                            <ArrowUp className="h-5 w-5 text-green-500" />
                          ) : stat.trend === "down" ? (
                            <ArrowDown className="h-5 w-5 text-red-500" />
                          ) : (
                            <Minus className="h-5 w-5 text-gray-500" />
                          )}
                        </div>
                      </div>

                      <div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(stat.value / stat.maxValue) * 100}%`,
                            backgroundColor: stat.color,
                          }}
                        />
                      </div>

                      <p className="text-sm text-gray-500">{stat.description}</p>

                      {/* Additional context for detailed view */}
                      <div className="mt-2 rounded-lg bg-gray-50 p-4">
                        <h5 className="mb-2 font-medium text-primary">Análisis Contextual</h5>
                        <p className="text-sm text-gray-600">
                          {stat.trend === "up"
                            ? `${stat.team} ha mostrado una mejora significativa en este aspecto, superando la media de la competición en un 15%.`
                            : stat.trend === "down"
                              ? `${stat.team} ha experimentado una disminución en este aspecto comparado con sus números de la temporada anterior.`
                              : `${stat.team} mantiene números estables en este aspecto, en línea con su rendimiento histórico.`}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Comparison - Additional content for detailed view */}
              <div className="mt-8 rounded-lg bg-white p-8 shadow-md">
                <h2 className="mb-6 text-2xl font-bold text-primary">Comparativa Histórica</h2>
                <p className="mb-4 text-gray-700">
                  Analizando la evolución de estos equipos en las últimas temporadas, podemos observar tendencias
                  significativas que explican su rendimiento actual.
                </p>

                <div className="space-y-6">
                  {analysis.stats.map((stat) => (
                    <div key={`hist-${stat.id}`} className="rounded-lg bg-gray-50 p-4">
                      <h4 className="mb-2 font-semibold text-primary">{stat.team}</h4>
                      <p className="text-sm text-gray-700">
                        {stat.trend === "up"
                          ? `Ha experimentado un crecimiento constante en los últimos 3 años, mejorando sus números en aproximadamente un 20% cada temporada.`
                          : stat.trend === "down"
                            ? `Después de alcanzar su pico hace dos temporadas, ha mostrado un descenso gradual que coincide con cambios en su plantilla y estilo de juego.`
                            : `Mantiene una consistencia notable en este aspecto, con variaciones mínimas en las últimas 5 temporadas.`}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {/* Key Insights */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-accent" />
                  <h3 className="text-xl font-bold text-primary">Insights Clave</h3>
                </div>

                <ul className="space-y-4">
                  {analysis.insights.map((insight, index) => (
                    <li key={index} className="flex items-start rounded-lg bg-gray-50 p-4 text-sm">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Additional Insights - For detailed view */}
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-primary">Análisis Avanzado</h3>

                <ul className="space-y-4">
                  {additionalInsights.map((insight, index) => (
                    <li key={index} className="flex items-start rounded-lg bg-gray-50 p-4 text-sm">
                      <span className="mr-2 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{insight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Analyses */}
              <div className="mt-6 rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-primary">Análisis Relacionados</h3>

                <div className="space-y-3">
                  {quickAnalyses
                    .filter((a) => a.id !== analysis.id)
                    .map((relatedAnalysis) => (
                      <Link
                        key={relatedAnalysis.id}
                        href={`/analisis-rapido/${relatedAnalysis.slug}`}
                        className="block rounded-lg bg-gray-50 p-4 transition-colors hover:bg-gray-100"
                      >
                        <h4 className="font-semibold text-primary hover:text-accent">{relatedAnalysis.title}</h4>
                        <p className="text-xs text-gray-500">{relatedAnalysis.date}</p>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
