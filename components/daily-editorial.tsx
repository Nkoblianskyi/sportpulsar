"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"
import { editorials } from "@/data/editorials"

export default function DailyEditorial() {
  // Get the latest editorial
  const latestEditorial = editorials[0]

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <div className="flex items-center">
            <Quote className="mr-3 h-8 w-8 text-accent" />
            <h2 className="relative text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              <span className="relative z-10">Editorial del</span>{" "}
              <span className="relative z-10 text-accent">Día</span>
              <span className="absolute -bottom-1 left-0 h-3 w-32 bg-accent/30 sm:w-44"></span>
            </h2>
          </div>
          <Button asChild variant="link" className="text-primary">
            <Link href="/editorial">
              Ver Todo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mx-auto max-w-4xl">
          <motion.div
            className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="mb-4 text-2xl font-bold text-primary">{latestEditorial.title}</h3>

            <div className="mb-6 flex items-center text-sm text-gray-500">
              <span>{latestEditorial.date}</span>
              <span className="mx-2">•</span>
              <span>{latestEditorial.author}</span>
            </div>

            <div className="relative mb-6">
              <div className="absolute -left-4 -top-4 text-5xl text-accent opacity-20">"</div>
              <p className="text-lg leading-relaxed text-gray-700">
                {latestEditorial.content.length > 300
                  ? `${latestEditorial.content.substring(0, 300)}...`
                  : latestEditorial.content}
              </p>
              <div className="absolute -bottom-4 -right-4 text-5xl text-accent opacity-20">"</div>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {latestEditorial.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  {tag}
                </span>
              ))}
            </div>

            <Button asChild className="bg-primary text-white hover:bg-primary/90">
              <Link href={`/editorial/${latestEditorial.slug}`}>
                Leer Editorial Completo <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
