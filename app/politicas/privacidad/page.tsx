import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description:
    "Política de privacidad de SportPulsar. Información sobre cómo recopilamos, utilizamos y protegemos tus datos personales.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="bg-primary py-12">
        <div className="container mx-auto px-4 text-center lg:px-8">
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Política de <span className="text-accent">Privacidad</span>
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
                En SportPulsar, accesible desde sportpulsar.com, una de nuestras principales prioridades es la
                privacidad de nuestros visitantes. Este documento de Política de Privacidad contiene los tipos de
                información que SportPulsar recopila y registra, y cómo la utilizamos.
              </p>

              <p>
                Si tienes preguntas adicionales o requieres más información sobre nuestra Política de Privacidad, no
                dudes en contactarnos a través de nuestro formulario de contacto.
              </p>

              <h2 className="text-2xl font-bold text-primary">Información que Recopilamos</h2>

              <p>
                SportPulsar puede solicitar información personal identificable, como tu nombre, dirección de correo
                electrónico, número de teléfono, etc. Además, podemos recopilar información sobre tu actividad en
                nuestro sitio web, como las páginas que visitas y el tiempo que pasas en ellas.
              </p>

              <h3 className="text-xl font-bold text-primary">Información Personal</h3>

              <p>
                Cuando te registras en nuestro sitio, te pedimos que proporciones cierta información personal, como tu
                nombre y dirección de correo electrónico. Esta información se utiliza para contactarte sobre los
                servicios en los que has expresado interés y para mejorar tu experiencia en nuestro sitio.
              </p>

              <h3 className="text-xl font-bold text-primary">Datos de Registro</h3>

              <p>
                Como muchos operadores de sitios web, recopilamos información que tu navegador envía cada vez que
                visitas nuestro sitio ("Datos de Registro"). Estos Datos de Registro pueden incluir información como la
                dirección de Protocolo de Internet ("IP") de tu computadora, tipo de navegador, versión del navegador,
                las páginas de nuestro sitio que visitas, la hora y fecha de tu visita, el tiempo que pasas en esas
                páginas y otras estadísticas.
              </p>

              <h2 className="text-2xl font-bold text-primary">Cómo Utilizamos tu Información</h2>

              <p>Utilizamos la información que recopilamos de varias maneras, incluyendo:</p>

              <ul>
                <li>Proporcionar, operar y mantener nuestro sitio web</li>
                <li>Mejorar, personalizar y expandir nuestro sitio web</li>
                <li>Entender y analizar cómo utilizas nuestro sitio web</li>
                <li>Desarrollar nuevos productos, servicios, características y funcionalidades</li>
                <li>
                  Comunicarnos contigo, ya sea directamente o a través de uno de nuestros socios, para proporcionarte
                  actualizaciones y otra información relacionada con el sitio web y para fines de marketing y
                  promocionales
                </li>
                <li>Enviarte correos electrónicos</li>
                <li>Encontrar y prevenir fraudes</li>
              </ul>

              <h2 className="text-2xl font-bold text-primary">Cookies</h2>

              <p>
                SportPulsar utiliza "Cookies" para recopilar información y mejorar nuestros servicios. Puedes elegir que
                tu navegador rechace todas las cookies o que te avise cuando se envía una cookie. Sin embargo, si no
                aceptas las cookies, es posible que no puedas utilizar algunas partes de nuestro sitio.
              </p>

              <p>
                Para obtener información más detallada sobre las cookies que utilizamos y cómo las gestionamos, consulta
                nuestra{" "}
                <Link href="/politicas/cookies" className="text-accent hover:underline">
                  Política de Cookies
                </Link>
                .
              </p>

              <h2 className="text-2xl font-bold text-primary">Seguridad</h2>

              <p>
                La seguridad de tu información personal es importante para nosotros, pero recuerda que ningún método de
                transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Aunque nos esforzamos
                por utilizar medios comercialmente aceptables para proteger tu información personal, no podemos
                garantizar su seguridad absoluta.
              </p>

              <h2 className="text-2xl font-bold text-primary">Enlaces a Otros Sitios</h2>

              <p>
                Nuestro sitio puede contener enlaces a otros sitios que no son operados por nosotros. Si haces clic en
                un enlace de terceros, serás dirigido al sitio de ese tercero. Te recomendamos encarecidamente que
                revises la Política de Privacidad de cada sitio que visites.
              </p>

              <p>
                No tenemos control ni asumimos responsabilidad alguna por el contenido, las políticas de privacidad o
                las prácticas de sitios o servicios de terceros.
              </p>

              <h2 className="text-2xl font-bold text-primary">Cambios en esta Política de Privacidad</h2>

              <p>
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio
                publicando la nueva Política de Privacidad en esta página.
              </p>

              <p>
                Te recomendamos que revises esta Política de Privacidad periódicamente para cualquier cambio. Los
                cambios a esta Política de Privacidad son efectivos cuando se publican en esta página.
              </p>

              <h2 className="text-2xl font-bold text-primary">Contacto</h2>

              <p>Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos:</p>

              <ul>
                <li>Por email: info@sportpulsar.com</li>
                <li>Por teléfono: +34 933 441 719</li>
                <li>Por correo postal: Avenida Diagonal, 534, 08006 Barcelona, Spain</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
