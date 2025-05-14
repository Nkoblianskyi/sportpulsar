import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { articles } from "@/data/articles"
import { faqs } from "@/data/faq"
import { ArrowRight, Calendar, ChevronRight, Trophy } from "lucide-react"
import ContactForm from "@/components/contact-form"
import FaqAccordion from "@/components/faq-accordion"

import ImpactZone from "@/components/impact-zone"
import StreetVoices from "@/components/street-voices"
import QuickAnalysis from "@/components/quick-analysis"
import DailyEditorial from "@/components/daily-editorial"

export default function Home() {
  // Get featured articles
  const featuredArticles = articles.filter((article) => article.featured).slice(0, 3)
  // Get latest articles
  const latestArticles = [...articles]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 4)

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary py-20 lg:py-32">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Análisis Deportivo <span className="text-accent">de Élite</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-xl text-muted">
            Noticias, análisis tácticos y pronósticos deportivos basados en datos y experiencia.
          </p>
          <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <Button asChild size="lg" className="bg-accent text-primary hover:bg-accent/90">
              <Link href="/blog">
                Últimas Noticias <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent text-primary hover:bg-accent hover:text-primary"
            >
              <Link href="/servicios">
                Nuestros Servicios <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary">
                Sobre <span className="text-accent">SportPulsar</span>
              </h2>
              <p className="mb-6 text-lg text-gray-700">
                SportPulsar es un medio digital especializado en análisis deportivo de alta calidad. Nuestro equipo
                combina pasión por el deporte con rigor analítico para ofrecer contenido que va más allá de la
                superficie.
              </p>
              <p className="mb-8 text-lg text-gray-700">
                Desde análisis tácticos detallados hasta pronósticos basados en datos, nuestro objetivo es proporcionar
                una perspectiva única y valiosa para los verdaderos aficionados al deporte.
              </p>
              <Button asChild className="bg-primary text-foreground hover:bg-primary/90">
                <Link href="/sobre-nosotros">
                  Conoce Más Sobre Nosotros <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image src="/224a342f01584e802bf42c988a1a4cf1.jpg" alt="Equipo SportPulsar" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Artículos <span className="text-accent">Destacados</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Análisis en profundidad y las historias más relevantes del mundo deportivo.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="flex h-full flex-col overflow-hidden transition-all hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {article.prediction && (
                    <div className="absolute right-0 top-0 bg-accent px-3 py-1 text-sm font-bold text-primary">
                      <Trophy className="mr-1 inline-block h-4 w-4" />
                      Pronóstico
                    </div>
                  )}
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex items-center text-sm text-gray-700">
                    <span className="mr-2">{article.category}</span>
                    <span>•</span>
                    <span className="ml-2 flex items-center">
                      <Calendar className="mr-1 h-4 w-4" />
                      {article.date}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-xl text-gray-500">
                    <Link href={`/blog/${article.slug}`} className="hover:text-accent">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3 mt-2 text-gray-500">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter className="border-t pt-4">
                  <Button asChild variant="link" className="px-0 text-primary">
                    <Link href={`/blog/${article.slug}`}>
                      Leer Más <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild className="bg-primary text-foreground hover:bg-primary/90">
              <Link href="/blog">
                Ver Todos los Artículos <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-background py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Últimas <span className="text-accent">Noticias</span>
            </h2>
            <p className="max-w-2xl text-lg text-gray-700">
              Mantente al día con las noticias más recientes del mundo deportivo.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {latestArticles.map((article) => (
              <Card key={article.id} className="flex h-full flex-col overflow-hidden transition-all hover:shadow-md">
                <div className="relative h-40 w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  {article.prediction && (
                    <div className="absolute right-0 top-0 bg-accent px-2 py-1 text-xs font-bold text-primary">
                      <Trophy className="mr-1 inline-block h-3 w-3" />
                      Pronóstico
                    </div>
                  )}
                </div>
                <CardHeader className="flex-grow p-4">
                  <div className="mb-2 flex items-center text-xs text-gray-700">
                    <span>{article.category}</span>
                    <span className="mx-1">•</span>
                    <span>{article.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2 text-base text-gray-500">
                    <Link href={`/blog/${article.slug}`} className="hover:text-accent">
                      {article.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardFooter className="border-t p-4 pt-3">
                  <Button asChild variant="link" className="h-auto p-0 text-sm text-primary">
                    <Link href={`/blog/${article.slug}`}>
                      Leer Más <ChevronRight className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Zone */}
      <ImpactZone />

      {/* Street Voices */}
      <StreetVoices />

      {/* Quick Analysis */}
      <QuickAnalysis />

      {/* Daily Editorial */}
      <DailyEditorial />

      {/* Contact Form */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
                Contacta <span className="text-accent">con Nosotros</span>
              </h2>
              <p className="mb-6 text-lg text-muted">
                ¿Tienes alguna pregunta o comentario? ¿Estás interesado en nuestros servicios? No dudes en ponerte en
                contacto con nosotros. Estaremos encantados de atenderte.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2 text-accent">
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
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Teléfono</h3>
                    <p className="text-muted">+34 933 441 719</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2 text-accent">
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
                      className="h-5 w-5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted">info@sportpulsar.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mr-4 rounded-full bg-accent/10 p-2 text-accent">
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
                      className="h-5 w-5"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Dirección</h3>
                    <p className="text-muted">Avenida Diagonal, 534, 08006 Barcelona, Spain</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
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
            <FaqAccordion faqs={faqs.slice(0, 4)} />
            <div className="mt-8 text-center">
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-foreground"
              >
                <Link href="/contacto#faq">
                  Ver Todas las Preguntas <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
