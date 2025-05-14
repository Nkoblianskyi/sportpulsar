import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { impactEvents } from "@/data/impact-zone"

export const metadata: Metadata = {
  title: "Zona de Impacto - Eventos Destacados",
  description: "Las noticias y eventos deportivos más impactantes de la semana.",
}

export default function ImpactZonePage() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-30"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Zona de <span className="text-accent">Impacto</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Los eventos deportivos más impactantes que han sacudido el mundo del deporte esta semana.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Button asChild variant="outline" className="mb-8 border-gray-700 text-primary hover:bg-gray-800">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
            </Link>
          </Button>

          <div className="grid gap-8 md:grid-cols-2">
            {impactEvents.map((event) => (
              <Link key={event.id} href={`/zona-de-impacto/${event.slug}`} className="group">
                <div className="relative h-[400px] overflow-hidden rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(167,255,47,0.3)]">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  </div>

                  {/* Tag */}
                  <div className="absolute right-4 top-4 z-10">
                    <div
                      className={`rounded-full px-3 py-1 text-sm font-bold ${
                        event.tag === "Alta tensión"
                          ? "bg-red-500 text-white"
                          : event.tag === "Previa caliente"
                            ? "bg-orange-500 text-white"
                            : "bg-accent text-primary"
                      }`}
                    >
                      {event.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                    <div className="mb-2 text-sm font-medium text-gray-300">{event.date}</div>
                    <h3 className="mb-2 text-2xl font-bold text-white group-hover:text-accent">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
