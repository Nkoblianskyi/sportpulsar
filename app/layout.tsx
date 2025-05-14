import type React from "react"
import type { Metadata } from "next"
import { Arima } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"

const inter = Arima({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SportPulsar - Noticias Deportivas y Pronósticos",
    template: "%s | SportPulsar",
  },
  description:
    "Las últimas noticias deportivas y pronósticos de partidos. Análisis experto y cobertura completa de todos los deportes.",
  keywords: ["deportes", "noticias deportivas", "pronósticos", "análisis deportivo", "fútbol", "baloncesto", "tenis"],
  authors: [{ name: "SportPulsar" }],
  creator: "SportPulsar",
  publisher: "SportPulsar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sportpulsar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SportPulsar - Noticias Deportivas y Pronósticos",
    description: "Las últimas noticias deportivas y pronósticos de partidos. Análisis experto y cobertura completa.",
    url: "https://sportpulsar.com",
    siteName: "SportPulsar",
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SportPulsar - Noticias Deportivas y Pronósticos",
    description: "Las últimas noticias deportivas y pronósticos de partidos. Análisis experto y cobertura completa.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <CookieConsent />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
