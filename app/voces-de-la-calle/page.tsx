import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare } from "lucide-react"
import { streetVoices } from "@/data/street-voices"

export const metadata: Metadata = {
  title: "Voces de la Calle - Opiniones y Comentarios",
  description: "Opiniones, comentarios y análisis de aficionados y expertos sobre el mundo del deporte.",
}

export default function StreetVoicesPage() {
  // Group voices by topic
  const topics = [...new Set(streetVoices.map((voice) => voice.topic))]

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            Voces de la <span className="text-accent">Calle</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-300">
            Opiniones, comentarios y análisis de aficionados y expertos sobre el mundo del deporte.
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

          {/* Filter by topic */}
          {/* <div className="mb-12">
            <h2 className="mb-4 text-xl font-bold text-white">Filtrar por tema</h2>
            <div className="flex flex-wrap gap-2">
              <Button
                variant="outline"
                className="border-accent bg-transparent text-primary hover:bg-accent hover:text-primary"
              >
                Todos
              </Button>
              {topics.map((topic) => (
                <Button
                  key={topic}
                  variant="outline"
                  className="border-gray-700 bg-transparent text-primary hover:bg-gray-800"
                >
                  {topic}
                </Button>
              ))}
            </div>
          </div> */}

          {/* Voices grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {streetVoices.map((voice) => (
              <div
                key={voice.id}
                className="relative overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(167,255,47,0.2)]"
              >
                {/* Sticker effect */}
                <div className="absolute -right-2 -top-2 h-16 w-16 rotate-12 bg-accent/10"></div>
                <div className="absolute -left-2 -bottom-2 h-16 w-16 -rotate-12 bg-accent/5"></div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="mb-4 flex items-center">
                    <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={voice.avatar || "/placeholder.svg"}
                        alt={voice.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="flex items-center">
                        <h3 className="font-semibold text-white">{voice.author}</h3>
                        {voice.isEditor && (
                          <span className="ml-2 rounded-full bg-accent/20 px-2 py-0.5 text-xs text-accent">Editor</span>
                        )}
                      </div>
                      <p className="text-xs text-gray-400">{voice.date}</p>
                    </div>
                  </div>

                  <div className="relative mb-3 rounded-lg bg-gray-700 p-4">
                    {/* Quote triangle */}
                    <div className="absolute -top-2 left-4 h-0 w-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-gray-700"></div>

                    <p className="text-gray-200">"{voice.quote}"</p>

                    <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent"></div>
                  </div>

                  <div className="flex items-center text-xs text-gray-400">
                    <MessageSquare className="mr-1 h-3 w-3" />
                    <span>Tema: {voice.topic}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Submit your voice CTA */}
          {/* <div className="mt-16 rounded-lg bg-gray-800 p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold text-white">¿Quieres que tu voz sea escuchada?</h2>
            <p className="mb-6 text-gray-300">
              Comparte tu opinión sobre el mundo del deporte y forma parte de nuestra comunidad.
            </p>
            <Button className="bg-accent text-primary hover:bg-accent/90">Enviar mi Comentario</Button>
          </div> */}
        </div>
      </section>
    </div>
  )
}
