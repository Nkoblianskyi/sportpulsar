import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center bg-background px-4 py-16 text-center">
      <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Página No Encontrada</h2>
      <p className="mb-8 max-w-md text-lg text-gray-600">
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
        <Button asChild className="bg-accent text-primary hover:bg-accent/90">
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Volver al Inicio
          </Link>
        </Button>
        <Button asChild variant="outline" className="text-primary">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" /> Ver Noticias
          </Link>
        </Button>
      </div>
    </div>
  )
}
