import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, ArrowUp, ArrowDown, Minus } from "lucide-react"
import { quickAnalyses } from "@/data/quick-analysis"

export const metadata: Metadata = {
  title: "Análisis Rápido - Estadísticas Deportivas",
  description: "Análisis estadístico rápido de los equipos y jugadores más destacados del momento.",
}

export default function QuickAnalysisPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Análisis <span className="text-accent">Rápido</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Estadísticas clave y análisis de datos para entender el deporte más allá del resultado.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Button asChild variant="outline" className="mb-8 text-primary">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
            </Link>
          </Button>

          <div className="space-y-16">
            {quickAnalyses.map((analysis) => (
              <div key={analysis.id} className="rounded-lg bg-white p-8 shadow-md">
                <div className="mb-8 flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-primary">{analysis.title}</h2>
                    <p className="text-sm text-gray-500">{analysis.date}</p>
                  </div>
                  <Button asChild className="bg-primary text-white hover:bg-primary/90">
                    <Link href={`/analisis-rapido/${analysis.slug}`}>
                      Ver Completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                <div className="grid gap-8 md:grid-cols-3">
                  <div className="md:col-span-2">
                    <div className="space-y-6">
                      {analysis.stats.map((stat) => (
                        <div key={stat.id} className="space-y-2">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-semibold text-primary">{stat.team}</h4>
                              <p className="text-sm text-gray-500">{stat.title}</p>
                            </div>
                            <div className="flex items-center">
                              <span className="mr-2 text-lg font-bold" style={{ color: stat.color }}>
                                {stat.value}
                              </span>
                              {stat.trend === "up" ? (
                                <ArrowUp className="h-4 w-4 text-green-500" />
                              ) : stat.trend === "down" ? (
                                <ArrowDown className="h-4 w-4 text-red-500" />
                              ) : (
                                <Minus className="h-4 w-4 text-gray-500" />
                              )}
                            </div>
                          </div>

                          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${(stat.value / stat.maxValue) * 100}%`,
                                backgroundColor: stat.color,
                              }}
                            />
                          </div>

                          <p className="text-xs text-gray-500">{stat.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="rounded-lg bg-gray-50 p-4">
                      <h3 className="mb-4 font-semibold text-primary">Top Insights</h3>
                      <ul className="space-y-3">
                        {analysis.insights.map((insight, index) => (
                          <li key={index} className="flex items-start rounded-lg bg-white p-3 text-sm shadow-sm text-gray-500">
                            <span className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                              {index + 1}
                            </span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
