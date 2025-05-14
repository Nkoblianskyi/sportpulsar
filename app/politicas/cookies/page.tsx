import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Política de cookies de SportPulsar. Información sobre cómo utilizamos las cookies en nuestro sitio web.",
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Política de <span className="text-accent">Cookies</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted">Última actualización: 1 de mayo de 2025</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <Button asChild variant="outline" className="mb-8 text-primary">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
              </Link>
            </Button>

            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="lead text-xl">
                Esta Política de Cookies explica qué son las cookies y cómo las utilizamos en SportPulsar. Debes leer
                esta política para entender qué son las cookies, cómo las usamos, los tipos de cookies que utilizamos,
                la información que recopilamos usando cookies y cómo se utiliza esa información, y cómo controlar las
                preferencias de cookies.
              </p>

              <h2 className="text-2xl font-bold text-primary">¿Qué son las Cookies?</h2>

              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador o dispositivo
                móvil) cuando visitas un sitio web. Las cookies se utilizan ampliamente para hacer que los sitios web
                funcionen, o funcionen de manera más eficiente, así como para proporcionar información a los
                propietarios del sitio.
              </p>

              <p>
                Las cookies pueden ser "persistentes" o "de sesión". Las cookies persistentes permanecen en tu ordenador
                cuando te desconectas y hasta que las eliminas, mientras que las cookies de sesión se eliminan tan
                pronto como cierras tu navegador.
              </p>

              <h2 className="text-2xl font-bold text-primary">¿Cómo Utilizamos las Cookies?</h2>

              <p>
                Utilizamos cookies por varias razones que se detallan a continuación. Desafortunadamente, en la mayoría
                de los casos, no existen opciones estándar de la industria para deshabilitar las cookies sin
                deshabilitar por completo la funcionalidad y características que agregan a este sitio. Se recomienda que
                dejes activadas todas las cookies si no estás seguro de si las necesitas o no, en caso de que se
                utilicen para proporcionar un servicio que utilizas.
              </p>

              <h2 className="text-2xl font-bold text-primary">Tipos de Cookies que Utilizamos</h2>

              <h3 className="text-xl font-bold text-primary">Cookies Necesarias</h3>

              <p>
                Estas cookies son esenciales para proporcionarte los servicios disponibles a través de nuestro sitio web
                y para permitirte utilizar algunas de sus funcionalidades. Sin estas cookies, no podemos proporcionar
                ciertos servicios en nuestro sitio web. Estas cookies no rastrean ninguna información personal
                identificable.
              </p>

              <h3 className="text-xl font-bold text-primary">Cookies Funcionales</h3>

              <p>
                Estas cookies nos permiten recordar las elecciones que haces cuando utilizas nuestro sitio web, como
                recordar tus preferencias de idioma o tus datos de inicio de sesión. El propósito de estas cookies es
                proporcionarte una experiencia más personal y evitar que tengas que volver a introducir tus preferencias
                cada vez que utilices nuestro sitio web.
              </p>

              <h3 className="text-xl font-bold text-primary">Cookies Analíticas</h3>

              <p>
                Estas cookies nos permiten contar las visitas y las fuentes de tráfico para que podamos medir y mejorar
                el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares y a ver
                cómo se mueven los visitantes por el sitio. Toda la información que recogen estas cookies es agregada y,
                por lo tanto, anónima.
              </p>

              <h3 className="text-xl font-bold text-primary">Cookies de Marketing</h3>

              <p>
                Estas cookies se utilizan para rastrear a los visitantes en los sitios web. La intención es mostrar
                anuncios que sean relevantes y atractivos para el usuario individual, y por lo tanto más valiosos para
                los editores y anunciantes terceros.
              </p>

              <h2 className="text-2xl font-bold text-primary">Control de tus Preferencias de Cookies</h2>

              <p>
                La mayoría de los navegadores te permiten controlar las cookies a través de sus preferencias de
                configuración. Sin embargo, si limitas la capacidad de los sitios web para establecer cookies, es
                posible que empeore tu experiencia general de usuario, ya que ya no será personalizada para ti. También
                puede impedirte guardar configuraciones personalizadas como la información de inicio de sesión.
              </p>

              <h2 className="text-2xl font-bold text-primary">Cookies de Terceros</h2>

              <p>
                En algunos casos especiales, también utilizamos cookies proporcionadas por terceros de confianza. La
                siguiente sección detalla qué cookies de terceros podrías encontrar a través de este sitio.
              </p>

              <ul>
                <li>
                  Este sitio utiliza Google Analytics, que es una de las soluciones de análisis más extendidas y
                  confiables en la web, para ayudarnos a entender cómo utilizas el sitio y las formas en que podemos
                  mejorar tu experiencia. Estas cookies pueden rastrear cosas como el tiempo que pasas en el sitio y las
                  páginas que visitas para que podamos seguir produciendo contenido atractivo.
                </li>
                <li>
                  De vez en cuando probamos nuevas funciones y hacemos cambios sutiles en la forma en que se entrega el
                  sitio. Cuando todavía estamos probando nuevas funciones, estas cookies pueden usarse para asegurarse
                  de que recibas una experiencia consistente mientras estás en el sitio, mientras entendemos qué
                  optimizaciones aprecian más nuestros usuarios.
                </li>
              </ul>

              <h2 className="text-2xl font-bold text-primary">Más Información</h2>

              <p>
                Esperamos que esto haya aclarado las cosas para ti y, como se mencionó anteriormente, si hay algo que no
                estás seguro de si necesitas o no, generalmente es más seguro dejar las cookies habilitadas en caso de
                que interactúen con una de las funciones que utilizas en nuestro sitio.
              </p>

              <p>
                Sin embargo, si todavía estás buscando más información, puedes contactarnos a través de uno de nuestros
                métodos de contacto preferidos:
              </p>

              <ul>
                <li>Email: info@sportpulsar.com</li>
                <li>Teléfono: +34 933 441 719</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
