import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { works } from "@/data/works"
import { ArrowLeft, ArrowRight, Calendar, User, CheckCircle, ChevronRight } from "lucide-react"

interface WorkPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const work = works.find((work) => work.slug === params.slug)

  if (!work) {
    return {
      title: "Trabajo no encontrado",
    }
  }

  return {
    title: work.title,
    description: work.shortDescription,
  }
}

export async function generateStaticParams() {
  return works.map((work) => ({
    slug: work.slug,
  }))
}

export default function WorkPage({ params }: WorkPageProps) {
  const work = works.find((work) => work.slug === params.slug)

  if (!work) {
    notFound()
  }

  // Find related works (same category)
  const relatedWorks = works.filter((w) => w.category === work.category && w.id !== work.id).slice(0, 3)

  // Find next and previous works for navigation
  const currentIndex = works.findIndex((w) => w.slug === params.slug)
  const prevWork = currentIndex > 0 ? works[currentIndex - 1] : null
  const nextWork = currentIndex < works.length - 1 ? works[currentIndex + 1] : null

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-block rounded-full bg-accent/20 px-4 py-1 text-sm font-semibold text-accent">
              {work.category}
            </div>
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{work.title}</h1>
            <div className="flex items-center justify-center space-x-4 text-muted">
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4" />
                <span>{work.client}</span>
              </div>
              <span>•</span>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                <span>{work.date}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 overflow-hidden rounded-lg shadow-lg">
              <Image
                src={work.image || "/placeholder.svg"}
                alt={work.title}
                width={1200}
                height={600}
                className="w-full object-cover"
              />
            </div>

            <div className="grid gap-12 md:grid-cols-3">
              <div className="md:col-span-2">
                <h2 className="mb-4 text-2xl font-bold text-primary">Descripción del Proyecto</h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p className="lead text-xl">{work.shortDescription}</p>
                  <p>{work.fullDescription}</p>
                </div>
              </div>

              <div>
                <div className="rounded-lg bg-gray-100 p-6">
                  <h3 className="mb-4 text-xl font-bold text-primary">Detalles del Proyecto</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-gray-500">Cliente</h4>
                      <p className="text-gray-700">{work.client}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-gray-500">Categoría</h4>
                      <p className="text-gray-700">{work.category}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold uppercase text-gray-500">Fecha</h4>
                      <p className="text-gray-700">{work.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-primary">Resultados</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {work.results.map((result, index) => (
                  <div key={index} className="flex items-start rounded-lg bg-gray-100 p-4">
                    <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-accent" />
                    <p className="text-gray-700">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Works */}
            {relatedWorks.length > 0 && (
              <div className="mt-16">
                <h2 className="mb-6 text-2xl font-bold text-primary">Proyectos Relacionados</h2>
                <div className="grid gap-8 md:grid-cols-3">
                  {relatedWorks.map((relatedWork) => (
                    <div
                      key={relatedWork.id}
                      className="rounded-lg bg-white p-4 shadow-md transition-all hover:shadow-lg"
                    >
                      <div className="relative mb-4 h-40 w-full overflow-hidden rounded-md">
                        <Image
                          src={relatedWork.image || "/placeholder.svg"}
                          alt={relatedWork.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-primary">
                        <Link href={`/trabajos/${relatedWork.slug}`} className="hover:text-accent">
                          {relatedWork.title}
                        </Link>
                      </h3>
                      <p className="mb-4 text-sm text-gray-600 line-clamp-2">{relatedWork.shortDescription}</p>
                      <Button asChild variant="link" className="px-0 text-primary">
                        <Link href={`/trabajos/${relatedWork.slug}`}>
                          Ver Detalles <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Work Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
              {prevWork ? (
                <Button asChild variant="outline" className="flex items-center">
                  <Link href={`/trabajos/${prevWork.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> Proyecto Anterior
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}

              <Button asChild variant="outline">
                <Link href="/trabajos">Todos los Proyectos</Link>
              </Button>

              {nextWork ? (
                <Button asChild variant="outline" className="flex items-center">
                  <Link href={`/trabajos/${nextWork.slug}`}>
                    Proyecto Siguiente <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
