"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare } from "lucide-react"
import { streetVoices } from "@/data/street-voices"

export default function StreetVoices() {
  return (
    <section className="bg-gray-900 py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            <span className="relative z-10">Voces de la</span> <span className="relative z-10 text-accent">Calle</span>
            <span className="absolute -bottom-1 left-0 h-3 w-32 bg-accent/30 sm:w-44"></span>
          </h2>
          <Button asChild variant="link" className="text-primary">
            <Link href="/voces-de-la-calle">
              Ver Todo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {streetVoices.slice(0, 6).map((voice) => (
            <VoiceSticker key={voice.id} voice={voice} />
          ))}
        </div>
      </div>
    </section>
  )
}

function VoiceSticker({ voice }: { voice: (typeof streetVoices)[number] }) {
  const [isHovered, setIsHovered] = useState(false)

  // Random rotation for sticker effect
  const rotation = Math.random() * 6 - 3

  return (
    <motion.div
      className="group relative overflow-hidden rounded-lg bg-gray-800 p-6 shadow-lg"
      initial={{ rotate: rotation }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0 10px 25px -5px rgba(167, 255, 47, 0.3), 0 8px 10px -6px rgba(167, 255, 47, 0.2)",
      }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Sticker effect */}
      <div className="absolute -right-2 -top-2 h-16 w-16 rotate-12 bg-accent/10"></div>
      <div className="absolute -left-2 -bottom-2 h-16 w-16 -rotate-12 bg-accent/5"></div>

      {/* Content */}
      <div className="relative z-10">
        <div className="mb-4 flex items-center">
          <div className="relative mr-3 h-10 w-10 overflow-hidden rounded-full">
            <Image src={voice.avatar || "/placeholder.svg"} alt={voice.author} fill className="object-cover" />
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

          <motion.div
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent"
            animate={isHovered ? { scale: [1, 1.5, 1] } : {}}
            transition={{ repeat: isHovered ? Number.POSITIVE_INFINITY : 0, duration: 1.5 }}
          />
        </div>

        <div className="flex items-center text-xs text-gray-400">
          <MessageSquare className="mr-1 h-3 w-3" />
          <span>Tema: {voice.topic}</span>
        </div>
      </div>
    </motion.div>
  )
}
