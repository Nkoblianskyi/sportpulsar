import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { ArrowLeft, ArrowRight, Check } from "lucide-react"

interface ServicePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    return {
      title: "Servicio no encontrado",
    }
  }

  return {
    title: service.title,
    description: service.shortDescription,
  }
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = services.find((service) => service.slug === params.slug)

  if (!service) {
    notFound()
  }

  // Find next and previous services for navigation
  const currentIndex = services.findIndex((s) => s.slug === params.slug)
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{service.title}</h1>
            <p className="text-xl text-muted">{service.shortDescription}</p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl font-medium">{service.shortDescription}</p>

              <h2 className="mt-8 text-2xl font-bold text-primary">Descripción del Servicio</h2>
              <p>{service.fullDescription}</p>

              <h2 className="mt-8 text-2xl font-bold text-primary">Características Principales</h2>
              <ul className="mt-4 space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-accent" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-8 text-2xl font-bold text-primary">Proceso de Trabajo</h2>
              <ol className="mt-4 space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Consulta Inicial</h3>
                    <p>Realizamos una reunión para entender tus necesidades específicas y objetivos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Propuesta Personalizada</h3>
                    <p>Desarrollamos una propuesta detallada adaptada a tus requerimientos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Ejecución</h3>
                    <p>Nuestro equipo especializado trabaja en la implementación del proyecto.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Revisión y Ajustes</h3>
                    <p>Presentamos los resultados para revisión y realizamos los ajustes necesarios.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    5
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Entrega Final</h3>
                    <p>Entregamos el proyecto finalizado y proporcionamos soporte posterior.</p>
                  </div>
                </li>
              </ol>
            </div>

            {/* Call to Action */}
            <div className="mt-12 rounded-lg bg-gray-100 p-8">
              <h2 className="mb-4 text-2xl font-bold text-primary">¿Interesado en este servicio?</h2>
              <p className="mb-6 text-gray-700">
                Contáctanos hoy mismo para discutir cómo podemos adaptar este servicio a tus necesidades específicas.
              </p>
              <Button asChild className="bg-accent text-primary hover:bg-accent/90">
                <Link href="/contacto">
                  Solicitar Información <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Service Navigation */}
            <div className="mt-12 flex items-center justify-between border-t border-gray-200 pt-8">
              {prevService ? (
                <Button asChild variant="outline" className="flex items-center text-primary">
                  <Link href={`/servicios/${prevService.slug}`}>
                    <ArrowLeft className="mr-2 h-4 w-4" /> {prevService.title}
                  </Link>
                </Button>
              ) : (
                <div></div>
              )}

              {nextService ? (
                <Button asChild variant="outline" className="flex items-center text-primary">
                  <Link href={`/servicios/${nextService.slug}`}>
                    {nextService.title} <ArrowRight className="ml-2 h-4 w-4" />
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
