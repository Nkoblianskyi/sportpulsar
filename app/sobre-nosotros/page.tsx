import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description: "Conoce al equipo detrás de SportPulsar, nuestra misión y valores.",
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Carlos Martínez",
      role: "Director y Analista Principal",
      bio: "Ex entrenador profesional con más de 15 años de experiencia en análisis táctico. Especialista en fútbol europeo y sudamericano.",
      image: "/placeholder.svg?height=400&width=400&query=hombre profesional con traje",
    },
    {
      name: "Laura Sánchez",
      role: "Jefa de Redacción",
      bio: "Periodista deportiva con experiencia en medios internacionales. Especializada en baloncesto y deportes olímpicos.",
      image: "/placeholder.svg?height=400&width=400&query=mujer profesional sonriendo",
    },
    {
      name: "Miguel Torres",
      role: "Analista de Datos",
      bio: "Matemático y científico de datos con pasión por el deporte. Desarrolla modelos predictivos para nuestros pronósticos.",
      image: "/placeholder.svg?height=400&width=400&query=hombre joven con gafas",
    },
    {
      name: "Elena Rodríguez",
      role: "Especialista en Deportes de Motor",
      bio: "Ex ingeniera de equipo de Fórmula 1. Aporta conocimiento técnico y análisis estratégico de competiciones de motor.",
      image: "/placeholder.svg?height=400&width=400&query=mujer profesional con pelo corto",
    },
  ]

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative bg-primary py-20">
        <div className="absolute inset-0 bg-[url('/a071a20df079c47f5945441dcb1ab4d2.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10 mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Sobre <span className="text-accent">Nosotros</span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted">
            Conoce al equipo detrás de SportPulsar y nuestra pasión por el análisis deportivo de calidad.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative h-[400px] overflow-hidden rounded-lg shadow-xl">
              <Image
                src="/0153e98a2407ae766227ea99ebd24836.jpg"
                alt="Nuestras oficinas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary">
                Nuestra <span className="text-accent">Historia</span>
              </h2>
              <p className="mb-4 text-lg text-gray-700">
                SportPulsar nació en 2020 de la pasión compartida por un grupo de profesionales del periodismo deportivo
                y el análisis de datos que creían en un enfoque más profundo y riguroso de la cobertura deportiva.
              </p>
              <p className="mb-4 text-lg text-gray-700">
                Frustrados por la superficialidad de muchos medios deportivos tradicionales, decidimos crear una
                plataforma que combinara el análisis táctico detallado, la interpretación estadística avanzada y la
                narrativa de calidad.
              </p>
              <p className="text-lg text-gray-700">
                Desde entonces, hemos crecido hasta convertirnos en un referente para aficionados que buscan entender el
                deporte más allá del resultado, ofreciendo perspectivas únicas que enriquecen la experiencia de seguir
                el deporte.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Misión y <span className="text-accent">Valores</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">Los principios que guían nuestro trabajo diario.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Rigor Analítico</h3>
              <p className="text-gray-700">
                Nos comprometemos con el análisis basado en datos y evidencias, evitando especulaciones sin fundamento y
                opiniones no respaldadas por hechos.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Independencia Editorial</h3>
              <p className="text-gray-700">
                Mantenemos nuestra independencia de intereses comerciales o institucionales que puedan comprometer la
                objetividad de nuestros análisis y opiniones.
              </p>
            </div>
            <div className="rounded-lg bg-white p-8 shadow-md transition-all hover:shadow-lg">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Transparencia</h3>
              <p className="text-gray-700">
                Somos transparentes sobre nuestras metodologías de análisis y pronósticos, permitiendo a los lectores
                entender cómo llegamos a nuestras conclusiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary">
              Nuestro <span className="text-accent">Equipo</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              Profesionales apasionados que combinan experiencia deportiva, periodística y analítica.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md transition-all hover:shadow-lg">
                <div className="mb-4 aspect-square overflow-hidden rounded-full">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mb-1 text-xl font-semibold text-primary">{member.name}</h3>
                <p className="mb-3 text-accent">{member.role}</p>
                <p className="text-gray-700">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Why Choose Us */}
      <section className="bg-primary py-16 text-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight">
              Por Qué <span className="text-accent">Elegirnos</span>
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted">Lo que nos diferencia de otros medios deportivos.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Análisis en Profundidad</h3>
              <p className="text-muted">
                Vamos más allá de los titulares para ofrecer análisis detallados que explican el porqué detrás de los
                resultados y tendencias.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
                  <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Enfoque Basado en Datos</h3>
              <p className="text-muted">
                Utilizamos análisis estadístico avanzado para respaldar nuestras opiniones y pronósticos, ofreciendo una
                perspectiva objetiva.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Experiencia Multidisciplinar</h3>
              <p className="text-muted">
                Nuestro equipo combina experiencia en periodismo, entrenamiento profesional, análisis de datos y
                diversas disciplinas deportivas.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Comunidad Comprometida</h3>
              <p className="text-muted">
                Fomentamos la interacción con nuestra comunidad de lectores, valorando sus opiniones y creando un
                espacio de debate constructivo.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Pronósticos Transparentes</h3>
              <p className="text-muted">
                Nuestros pronósticos deportivos incluyen explicaciones detalladas de la metodología y factores
                considerados, con seguimiento de resultados.
              </p>
            </div>
            <div className="rounded-lg bg-gray-800 p-6">
              <div className="mb-4 rounded-full bg-accent/10 p-3 inline-flex">
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
                  className="h-6 w-6 text-accent"
                >
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold">Contenido Original</h3>
              <p className="text-muted">
                Creamos contenido original y perspectivas únicas, evitando la repetición de narrativas comunes en otros
                medios deportivos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
