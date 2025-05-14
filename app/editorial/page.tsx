import Link from "next/link"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react"
import { editorials } from "@/data/editorials"

export const metadata: Metadata = {
  title: "Editorial del Día - Opinión SportPulsar",
  description: "Opiniones y análisis editoriales sobre los temas más relevantes del mundo deportivo.",
}

export default function EditorialPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Editorial del <span className="text-accent">Día</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Opiniones y análisis editoriales sobre los temas más relevantes del mundo deportivo.
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

          <div className="mx-auto max-w-4xl">
            <div className="space-y-12">
              {editorials.map((editorial) => (
                <div key={editorial.id} className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm">
                  <h2 className="mb-4 text-2xl font-bold text-primary">
                    <Link href={`/editorial/${editorial.slug}`} className="hover:text-accent">
                      {editorial.title}
                    </Link>
                  </h2>

                  <div className="mb-6 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{editorial.date}</span>
                    <span className="mx-2">•</span>
                    <span>{editorial.author}</span>
                  </div>

                  <div className="relative mb-6">
                    <div className="absolute -left-4 -top-4 text-5xl text-accent opacity-20">"</div>
                    <p className="text-lg leading-relaxed text-gray-700">
                      {editorial.content.length > 300 ? `${editorial.content.substring(0, 300)}...` : editorial.content}
                    </p>
                    <div className="absolute -bottom-4 -right-4 text-5xl text-accent opacity-20">"</div>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {editorial.tags.map((tag) => (
                      <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Button asChild className="bg-primary text-white hover:bg-primary/90">
                    <Link href={`/editorial/${editorial.slug}`}>
                      Leer Editorial Completo <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
