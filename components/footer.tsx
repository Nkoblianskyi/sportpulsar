import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-foreground">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="-m-1.5 p-1.5 flex gap-4">
              <Image src="/logo.png" alt="SportPulsar Logo" width={32} height={32} />
              <span className="text-2xl font-bold tracking-tight">
                Sport<span className="text-accent">Pulsar</span>
              </span>
            </Link>
            <p className="mb-4 text-muted">
              Noticias deportivas y pronósticos de alta calidad para los aficionados al deporte.
            </p>
            <div className="flex space-x-4">{/* Social media icons would go here */}</div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-muted transition-colors hover:text-accent">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-muted transition-colors hover:text-accent">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted transition-colors hover:text-accent">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/trabajos" className="text-muted transition-colors hover:text-accent">
                  Nuestros Trabajos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted transition-colors hover:text-accent">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted transition-colors hover:text-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Políticas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/politicas/privacidad" className="text-muted transition-colors hover:text-accent">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/politicas/cookies" className="text-muted transition-colors hover:text-accent">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="mr-2 h-5 w-5 text-accent" />
                <span className="text-muted">+34 933 441 719</span>
              </li>
              <li className="flex items-start">
                <Mail className="mr-2 h-5 w-5 text-accent" />
                <a href="mailto:info@sportpulsar.com" className="text-muted transition-colors hover:text-accent">
                  info@sportpulsar.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-accent" />
                <span className="text-muted">Avenida Diagonal, 534, 08006 Barcelona, Spain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} SportPulsar. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
