import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar } from "lucide-react"
import { impactEvents } from "@/data/impact-zone"

interface ImpactEventPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ImpactEventPageProps): Promise<Metadata> {
  const event = impactEvents.find((event) => event.slug === params.slug)

  if (!event) {
    return {
      title: "Evento no encontrado",
    }
  }

  return {
    title: `${event.title} - Zona de Impacto`,
    description: event.description,
  }
}

export async function generateStaticParams() {
  return impactEvents.map((event) => ({
    slug: event.slug,
  }))
}

export default function ImpactEventPage({ params }: ImpactEventPageProps) {
  const event = impactEvents.find((event) => event.slug === params.slug)

  if (!event) {
    notFound()
  }

  // Mock content for the full article
  const fullContent = `
    ${event.description}
    
    Los aficionados han estado esperando este momento durante semanas, y finalmente ha llegado. Las implicaciones de este evento se sentirán en todo el mundo deportivo durante mucho tiempo.
    
    Los expertos coinciden en que estamos ante un punto de inflexión que podría cambiar el rumbo de la temporada. Las reacciones no se han hecho esperar, con opiniones divididas entre quienes aplauden lo sucedido y quienes lo critican duramente.
    
    Las redes sociales han explotado con millones de interacciones, convirtiendo este tema en tendencia global durante las últimas 24 horas. Personalidades de todos los ámbitos han querido dar su opinión sobre lo ocurrido.
    
    Lo que está claro es que nada volverá a ser igual después de este acontecimiento que ha sacudido los cimientos del deporte tal y como lo conocemos.
  `

  // Format content with paragraphs
  const formattedContent = fullContent.split("\n\n").map((paragraph, index) => (
    <p key={index} className="mb-4">
      {paragraph}
    </p>
  ))

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <div className="absolute inset-0">
          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
        </div>
        <div className="container relative z-10 mx-auto flex h-full items-center px-4 lg:px-8">
          <div className="max-w-3xl">
            <div
              className={`mb-4 inline-block rounded-full px-4 py-1 text-sm font-bold ${
                event.tag === "Alta tensión"
                  ? "bg-red-500 text-white"
                  : event.tag === "Previa caliente"
                    ? "bg-orange-500 text-white"
                    : "bg-accent text-primary"
              }`}
            >
              {event.tag}
            </div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">{event.title}</h1>
            <div className="flex items-center text-gray-300">
              <Calendar className="mr-2 h-5 w-5" />
              <span>{event.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="outline" className="mb-8 border-gray-700 text-gray-300 hover:bg-gray-800">
              <Link href="/zona-de-impacto">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Zona de Impacto
              </Link>
            </Button>

            <div className="prose prose-lg max-w-none text-gray-300">{formattedContent}</div>

            {/* Related Events */}
            <div className="mt-16">
              <h2 className="mb-8 text-2xl font-bold text-white">Otros Eventos de Impacto</h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {impactEvents
                  .filter((e) => e.slug !== event.slug)
                  .slice(0, 2)
                  .map((relatedEvent) => (
                    <Link key={relatedEvent.id} href={`/zona-de-impacto/${relatedEvent.slug}`} className="group">
                      <div className="relative h-[200px] overflow-hidden rounded-lg">
                        <Image
                          src={relatedEvent.image || "/placeholder.svg"}
                          alt={relatedEvent.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-lg font-bold text-white group-hover:text-accent">{relatedEvent.title}</h3>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
