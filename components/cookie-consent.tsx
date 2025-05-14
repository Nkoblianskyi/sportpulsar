"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowConsent(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowConsent(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookie-consent", "declined")
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-primary p-4 shadow-lg md:p-6">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center text-sm text-foreground md:text-left">
          <p>
            Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Al continuar navegando, acepta nuestra{" "}
            <Link href="/politicas/cookies" className="text-accent underline">
              Política de Cookies
            </Link>
            .
          </p>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            className="border-gray-600 text-primary hover:bg-gray-700 hover:text-foreground"
            onClick={declineCookies}
          >
            Rechazar
          </Button>
          <Button className="bg-accent text-primary hover:bg-accent/90" onClick={acceptCookies}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  )
}
