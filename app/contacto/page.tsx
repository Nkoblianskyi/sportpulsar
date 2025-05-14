import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FaqAccordion from "@/components/faq-accordion"
import { faqs } from "@/data/faq"

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con el equipo de SportPulsar para consultas, colaboraciones o servicios.",
}

export default function ContactPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-16">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contacta <span className="text-accent">con Nosotros</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            Estamos aquí para responder a tus preguntas y ayudarte con nuestros servicios.
          </p>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary">
                Información de <span className="text-accent">Contacto</span>
              </h2>
              <p className="mb-8 text-lg text-gray-700">
                Puedes contactarnos a través del formulario o utilizando cualquiera de los siguientes métodos. Nuestro
                equipo te responderá lo antes posible.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Teléfono</h3>
                    <p className="text-gray-700">+34 933 441 719</p>
                    <p className="text-sm text-gray-500">Lunes a Viernes, 9:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3 text-accent">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Email</h3>
                    <p className="text-gray-700">info@sportpulsar.com</p>
                    <p className="text-sm text-gray-500">Respondemos en 24-48 horas</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-3 text-accent">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary">Dirección</h3>
                    <p className="text-gray-700">Avenida Diagonal, 534, 08006 Barcelona, Spain</p>
                    <p className="text-sm text-gray-500">Visitas con cita previa</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h2 className="mb-6 text-2xl font-bold text-primary">Envíanos un Mensaje</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Preguntas <span className="text-accent">Frecuentes</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Respuestas a las preguntas más comunes sobre nuestros servicios y contenidos.
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>
    </div>
  )
}
