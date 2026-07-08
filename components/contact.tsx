'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">CONTÁCTENOS</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Ponte en <span className="text-primary">Contacto</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Nos encantaría escuchar de ti. Contáctanos con tus preguntas y comentarios
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Información de Contacto
            </h3>

            {/* Address */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin size={22} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  Ubicación
                </h4>
                <p className="text-foreground/70">
                  Calle San Martín 455<br />
                  Miraflores, Lima 18<br />
                  Perú
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone size={22} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  Teléfono
                </h4>
                <p className="text-foreground/70">
                  +51 (1) 242-5555<br />
                  +51 955 123 456 (WhatsApp)
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail size={22} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  Correo Electrónico
                </h4>
                <p className="text-foreground/70">
                  info@chifaperu.com<br />
                  reservas@chifaperu.com
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-5">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Clock size={22} />
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">
                  Horario
                </h4>
                <p className="text-foreground/70">
                  Lunes-Jueves: 11:00 - 23:00<br />
                  Viernes-Sábado: 11:00 - 00:00<br />
                  Domingo: 12:00 - 22:00
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-10 border-t border-border/30">
              <h4 className="text-base font-semibold text-foreground mb-5">
                Síguenos en Redes
              </h4>
              <div className="flex gap-3">
                {['Facebook', 'Instagram', 'TikTok'].map(social => (
                  <button
                    key={social}
                    className="px-5 py-2 bg-muted text-foreground rounded-lg hover:bg-primary hover:text-primary-foreground transition-all font-medium text-sm"
                  >
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border/50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Envíanos tu Mensaje
            </h3>

            {submitted && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-950/50 border border-green-300 dark:border-green-800 rounded-lg">
                <p className="text-green-800 dark:text-green-200 font-medium text-sm">
                  ✓ Gracias por tu mensaje. Nos pondremos en contacto pronto.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Teléfono (Opcional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+51 999 999 999"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-3"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-md flex items-center justify-center gap-2 mt-8"
              >
                <Send size={18} />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Encuéntranos
          </h3>
          <div className="w-full h-96 bg-muted rounded-lg border border-border flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-4">📍</div>
              <p className="text-foreground font-semibold mb-2">
                Calle San Martín 455, Miraflores, Lima
              </p>
              <p className="text-muted-foreground mb-4">
                (Integración de mapa interactivo)
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
