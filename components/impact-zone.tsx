"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { impactEvents } from "@/data/impact-zone"

export default function ImpactZone() {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="relative z-10">Zona de</span> <span className="relative z-10 text-accent">Impacto</span>
            <span className="absolute -bottom-1 left-0 h-3 w-32 bg-accent/30 sm:w-44"></span>
          </h2>
          <Button asChild variant="link" className="text-primary">
            <Link href="/zona-de-impacto">
              Ver Todo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {impactEvents.map((event) => (
            <ImpactCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ImpactCard({ event }: { event: (typeof impactEvents)[number] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/zona-de-impacto/${event.slug}`}>
      <motion.div
        className="group relative h-[400px] overflow-hidden rounded-lg"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.3 }}
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={event.image || "/placeholder.svg"}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        {/* Tag */}
        <div className="absolute right-4 top-4 z-10">
          <motion.div
            className={`rounded-full px-3 py-1 text-sm font-bold ${
              event.tag === "Alta tensión"
                ? "bg-red-500 text-white"
                : event.tag === "Previa caliente"
                  ? "bg-orange-500 text-white"
                  : "bg-accent text-primary"
            }`}
            animate={isHovered ? { scale: [1, 1.1, 1] } : {}}
            transition={{ repeat: isHovered ? Number.POSITIVE_INFINITY : 0, duration: 1 }}
          >
            {event.tag}
          </motion.div>
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
          <div className="mb-2 text-sm font-medium text-gray-300">{event.date}</div>
          <motion.h3
            className="mb-2 text-xl font-bold text-white"
            animate={isHovered ? { textShadow: ["0 0 0px #A7FF2F", "0 0 8px #A7FF2F", "0 0 0px #A7FF2F"] } : {}}
            transition={{ repeat: isHovered ? Number.POSITIVE_INFINITY : 0, duration: 1.5 }}
          >
            {event.title}
          </motion.h3>
          <p className="text-sm text-gray-300">{event.description}</p>

          {/* Graffiti-like spray effect on hover */}
          {isHovered && (
            <motion.div
              className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-accent/20 blur-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>
      </motion.div>
    </Link>
  )
}
