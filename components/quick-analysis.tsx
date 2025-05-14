"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowUp, ArrowDown, Minus, BarChart } from "lucide-react"
import { quickAnalyses } from "@/data/quick-analysis"

export default function QuickAnalysis() {
  const [currentAnalysis, setCurrentAnalysis] = useState(quickAnalyses[0])
  const [animateStats, setAnimateStats] = useState(false)

  useEffect(() => {
    // Trigger animation when component mounts
    setAnimateStats(true)
  }, [])

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center">
            <BarChart className="mr-3 h-8 w-8 text-accent" />
            <h2 className="relative text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              <span className="relative z-10">Análisis</span> <span className="relative z-10 text-accent">Rápido</span>
              <span className="absolute -bottom-1 left-0 h-3 w-32 bg-accent/30 sm:w-44"></span>
            </h2>
          </div>
          <Button asChild variant="link" className="text-primary">
            <Link href="/analisis-rapido">
              Ver Todo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-bold text-primary">{currentAnalysis.title}</h3>
              <p className="mb-6 text-sm text-gray-500">{currentAnalysis.date}</p>

              <div className="mb-6 space-y-4">
                <h4 className="font-semibold text-primary">Top Insights</h4>
                <ul className="space-y-3">
                  {currentAnalysis.insights.map((insight, index) => (
                    <motion.li
                      key={index}
                      className="flex items-start rounded-lg bg-gray-50 p-3 text-sm text-primary"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <span className="mr-2 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                        {index + 1}
                      </span>
                      <span>{insight}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full bg-primary text-white hover:bg-primary/90">
                <Link href={`/analisis-rapido/${currentAnalysis.slug}`}>Análisis Completo</Link>
              </Button>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="space-y-6">
                {currentAnalysis.stats.map((stat, index) => (
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
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: stat.color }}
                        initial={{ width: 0 }}
                        animate={{ width: animateStats ? `${(stat.value / stat.maxValue) * 100}%` : 0 }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>

                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
