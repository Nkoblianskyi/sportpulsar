import type React from "react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { services } from "@/data/services"
import { ArrowRight, BarChart, Pencil, Tv, Lightbulb, Video } from "lucide-react"

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Descubre los servicios profesionales de análisis deportivo, pronósticos y contenido que ofrece SportPulsar.",
}

const iconMap: Record<string, React.ReactNode> = {
  pencil: <Pencil className="h-6 w-6" />,
  "bar-chart": <BarChart className="h-6 w-6" />,
  tv: <Tv className="h-6 w-6" />,
  lightbulb: <Lightbulb className="h-6 w-6" />,
  video: <Video className="h-6 w-6" />,
}

export default function ServicesPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Nuestros <span className="text-accent">Servicios</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            Soluciones profesionales de análisis deportivo, pronósticos y contenido especializado.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Servicios <span className="text-accent">Profesionales</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Ofrecemos una gama completa de servicios especializados en análisis deportivo y creación de contenido.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
                    <div className="text-accent">{iconMap[service.icon]}</div>
                  </div>
                  <CardTitle className="text-xl text-primary">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.shortDescription}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2 h-5 w-5 flex-shrink-0 text-accent"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="border-t pt-4">
                  <Button asChild variant="link" className="px-0 text-accent">
                    <Link href={`/servicios/${service.slug}`}>
                      Más Información <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary">
                Por Qué Elegir <span className="text-accent">Nuestros Servicios</span>
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                En SportPulsar combinamos experiencia profesional, metodología rigurosa y pasión por el deporte para
                ofrecer servicios de máxima calidad.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Experiencia Profesional</h3>
                    <p className="text-gray-700">
                      Nuestro equipo incluye ex deportistas, entrenadores y periodistas con amplia experiencia en el
                      sector.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                      <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Enfoque Basado en Datos</h3>
                    <p className="text-gray-700">
                      Utilizamos análisis estadístico avanzado y metodologías probadas para respaldar nuestro trabajo.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5 text-accent"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="3" y1="9" x2="21" y2="9"></line>
                      <line x1="9" y1="21" x2="9" y2="9"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Soluciones Personalizadas</h3>
                    <p className="text-gray-700">
                      Adaptamos cada proyecto a las necesidades específicas del cliente, con un enfoque flexible y
                      colaborativo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/placeholder.svg?height=800&width=1200&query=reunión de equipo de análisis deportivo"
                alt="Nuestro equipo trabajando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary py-16 text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">
              ¿Listo para llevar tu contenido deportivo al <span className="text-accent">siguiente nivel</span>?
            </h2>
            <p className="mb-8 text-lg text-muted">
              Contáctanos hoy mismo para discutir cómo podemos ayudarte a alcanzar tus objetivos con nuestros servicios
              profesionales.
            </p>
            <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
                <Link href="/contacto">
                  Contactar Ahora <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-primary"
              >
                <Link href="/trabajos">
                  Ver Nuestros Trabajos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
