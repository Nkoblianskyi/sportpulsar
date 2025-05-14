"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  })

  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formState.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }

    if (!formState.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "El email no es válido"
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "El asunto es obligatorio"
    }

    if (!formState.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    }

    if (!formState.consent) {
      newErrors.consent = "Debes aceptar la política de privacidad"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormState((prev) => ({ ...prev, consent: checked }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after submission
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
      consent: false,
    })
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="rounded-full bg-green-100 p-3">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900">¡Mensaje Enviado!</h3>
        <p className="text-gray-600">Gracias por contactar con nosotros. Te responderemos lo antes posible.</p>
        <Button onClick={() => setIsSubmitted(false)} className="mt-4 bg-primary text-foreground hover:bg-primary/90">
          Enviar otro mensaje
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={errors.name ? "border-red-500" : ""}
        />
        {errors.name && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.name}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formState.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.email}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="subject">Asunto</Label>
        <Input
          id="subject"
          name="subject"
          value={formState.subject}
          onChange={handleChange}
          placeholder="Asunto de tu mensaje"
          className={errors.subject ? "border-red-500" : ""}
        />
        {errors.subject && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.subject}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mensaje</Label>
        <Textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          placeholder="Tu mensaje"
          rows={4}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1" />
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox
          id="consent"
          checked={formState.consent}
          onCheckedChange={handleCheckboxChange}
          className={errors.consent ? "border-red-500" : ""}
        />
        <div className="space-y-1 leading-none">
          <Label htmlFor="consent" className="text-sm font-normal text-primary">
            Acepto la{" "}
            <Link href="/politicas/privacidad" className="text-accent underline">
              política de privacidad
            </Link>
          </Label>
          {errors.consent && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.consent}
            </p>
          )}
        </div>
      </div>

      <Button type="submit" disabled={isSubmitting} className="w-full bg-accent text-primary hover:bg-accent/90">
        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
      </Button>
    </form>
  )
}
