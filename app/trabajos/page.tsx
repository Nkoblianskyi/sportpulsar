import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { works } from "@/data/works"
import { ArrowRight, Calendar, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Nuestros Trabajos",
  description: "Explora nuestra cartera de proyectos y casos de éxito en análisis deportivo y creación de contenido.",
}

export default function WorksPage() {
  // Group works by category
  const categories = [...new Set(works.map((work) => work.category))]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Nuestros <span className="text-accent">Trabajos</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            Explora nuestra cartera de proyectos y casos de éxito en análisis deportivo y creación de contenido.
          </p>
        </div>
      </section>

      {/* Works Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Proyectos <span className="text-accent">Destacados</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-700">
              Una selección de nuestros mejores trabajos en diferentes categorías.
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-20">
              <h3 className="mb-8 text-2xl font-bold text-primary">{category}</h3>
              <div className="grid gap-8 grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]">


                {works
                  .filter((work) => work.category === category)
                  .map((work) => (
                    <Card key={work.id} className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                      <div className="relative h-[600px] w-full overflow-hidden">
                        <Image
                          src={work.image || "/placeholder.svg"}
                          alt={work.title}
                          fill
                          className="object-cover transition-transform hover:scale-105"
                        />
                        <div className="absolute left-0 top-0 bg-accent px-3 py-1 text-sm font-bold text-primary">
                          {work.category}
                        </div>
                      </div>
                      <CardHeader>
                        <div className="flex items-center text-sm text-gray-700">
                          <span className="mr-2">{work.client}</span>
                          <span>•</span>
                          <span className="ml-2 flex items-center">
                            <Calendar className="mr-1 h-4 w-4" />
                            {work.date}
                          </span>
                        </div>
                        <CardTitle className="line-clamp-2 text-xl text-primary">
                          <Link href={`/trabajos/${work.slug}`} className="hover:text-accent">
                            {work.title}
                          </Link>
                        </CardTitle>
                        <CardDescription className="line-clamp-3 text-gray-700">
                          {work.shortDescription}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="mt-auto border-t pt-4">
                        <Button asChild variant="link" className="px-0 text-primary">
                          <Link href={`/trabajos/${work.slug}`}>
                            Ver Detalles <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              ¿Listo para crear tu <span className="text-accent">próximo proyecto</span>?
            </h2>
            <p className="mb-8 text-lg text-muted">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos con nuestros servicios
              profesionales.
            </p>
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
              <Link href="/contacto">
                Contactar Ahora <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
