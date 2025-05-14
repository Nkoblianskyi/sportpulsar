"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

// Lista completa de todas las páginas disponibles
const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Sobre Nosotros", href: "/sobre-nosotros" },
  { name: "Servicios", href: "/servicios" },
  { name: "Trabajos", href: "/trabajos" },
  { name: "Blog", href: "/blog" },
  { name: "Zona de Impacto", href: "/zona-de-impacto" },
  { name: "Voces de la Calle", href: "/voces-de-la-calle" },
  { name: "Análisis Rápido", href: "/analisis-rapido" },
  { name: "Editorial", href: "/editorial" },
  { name: "Contacto", href: "/contacto" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="bg-primary text-foreground">
      {/* Logo, eslogan y nombre del sitio */}
      <div className="container mx-auto grid grid-cols-3 items-center p-4">
        {/* Logo - Columna izquierda */}
        <div className="flex items-center">
          <Link href="/" className="-m-1.5 p-1.5 flex gap-4">
            <Image src="/logo.png" alt="SportPulsar Logo" width={32} height={32} />
            <span className="text-2xl font-bold tracking-tight">
              Sport<span className="text-accent">Pulsar</span>
            </span>
          </Link>
        </div>

        {/* Eslogan - Columna central */}
        <div className="hidden text-center md:block">
          <p className="text-sm italic text-gray-300">El pulso del deporte en tiempo real</p>
        </div>

        {/* Botón/Menú - Columna derecha */}
        <div className="flex justify-end">
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Abrir menú principal</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <Link href="/contacto" className="hidden lg:flex lg:justify-end">
            <Button variant="outline" className="border-accent text-primary hover:bg-accent hover:text-primary">
              Contacto
            </Button>
          </Link>
        </div>
      </div>

      {/* Navegación principal - versión escritorio */}
      <nav className="hidden border-t border-gray-700 bg-primary/95 lg:block" aria-label="Global">
        <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 px-4 py-2">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-3 py-2 text-sm font-semibold leading-6 transition-colors hover:text-accent ${pathname === item.href ? "text-accent" : "text-foreground"
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-primary">
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-primary px-6 py-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="text-2xl font-bold tracking-tight">
                    Sport<span className="text-accent">Pulsar</span>
                  </span>
                </Link>
                {/* Eslogan visible también en el menú móvil */}
                <p className="mt-1 text-xs italic text-gray-300">El pulso del deporte en tiempo real</p>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Cerrar menú</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-700">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-800 ${pathname === item.href ? "text-accent" : "text-foreground"
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Button
                    variant="outline"
                    className="w-full border-accent text-primary hover:bg-accent hover:text-primary"
                  >
                    Últimos Pronósticos
                  </Button>
                </div>
                <div className="py-6">
                  <div className="space-y-2">
                    <Link
                      href="/politicas/privacidad"
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-gray-300 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Política de Privacidad
                    </Link>
                    <Link
                      href="/politicas/cookies"
                      className="-mx-3 block rounded-lg px-3 py-2 text-sm font-medium leading-7 text-gray-300 hover:bg-gray-800"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Política de Cookies
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
