'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function ClaimsBook() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fechaCompra: '',
    numeroTicket: '',
    descripcion: '',
    tipoReclamo: 'calidad',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simular envío del formulario
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        fechaCompra: '',
        numeroTicket: '',
        descripcion: '',
        tipoReclamo: 'calidad',
      })
      setSubmitted(false)
    }, 2000)
  }

  const faqs = [
    {
      pregunta: '¿Cuál es el plazo para presentar una reclamación?',
      respuesta: 'Puedes presentar una reclamación dentro de 30 días posteriores a la fecha de compra o del evento que originó la reclamación.',
    },
    {
      pregunta: '¿Qué documentos debo adjuntar?',
      respuesta: 'Debes proporcionar tu comprobante de compra (ticket o factura) y cualquier documento que respalde tu reclamación.',
    },
    {
      pregunta: '¿En cuánto tiempo recibiré una respuesta?',
      respuesta: 'Nos comprometemos a responder todas las reclamaciones dentro de 10 días hábiles desde su presentación.',
    },
    {
      pregunta: '¿Cuáles son los tipos de reclamaciones aceptadas?',
      respuesta: 'Aceptamos reclamaciones por: problemas de calidad del producto, atención al cliente deficiente, errores en el pedido, o incumplimiento de políticas.',
    },
    {
      pregunta: '¿Puedo presentar una reclamación en línea?',
      respuesta: 'Sí, puedes presentar tu reclamación a través de este formulario en línea. También puedes hacerlo presencialmente en nuestro local.',
    },
  ]

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">PROTECCIÓN AL CONSUMIDOR</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Libro de <span className="text-primary">Reclamaciones</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
            En Wok&Home valoramos tu opinión y nos comprometemos a resolver cualquier inconveniente. Presentar una reclamación es fácil, rápido y seguro.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📋</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Rápido</h3>
            <p className="text-foreground/70">Completa el formulario en menos de 5 minutos</p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">🛡️</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Seguro</h3>
            <p className="text-foreground/70">Tus datos están protegidos y son confidenciales</p>
          </div>

          <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Efectivo</h3>
            <p className="text-foreground/70">Recibirás respuesta en máximo 10 días hábiles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 mb-24">
          {/* Form */}
          <div className="bg-card border border-border/50 rounded-xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-8">Presenta tu Reclamación</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h4 className="text-lg font-semibold text-green-900 mb-2">¡Reclamación Enviada!</h4>
                <p className="text-green-800">
                  Hemos recibido tu reclamación. Te contactaremos pronto con una respuesta.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleInputChange}
                      required
                      placeholder="Tu nombre"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="tu@email.com"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={formData.telefono}
                      onChange={handleInputChange}
                      required
                      placeholder="+51 999 999 999"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Reclamo *
                    </label>
                    <select
                      name="tipoReclamo"
                      value={formData.tipoReclamo}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    >
                      <option value="calidad">Problema de Calidad</option>
                      <option value="servicio">Mala Atención</option>
                      <option value="pedido">Error en Pedido</option>
                      <option value="entrega">Problema de Entrega</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Fecha de Compra *
                    </label>
                    <input
                      type="date"
                      name="fechaCompra"
                      value={formData.fechaCompra}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Número de Ticket
                    </label>
                    <input
                      type="text"
                      name="numeroTicket"
                      value={formData.numeroTicket}
                      onChange={handleInputChange}
                      placeholder="Opcional"
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Descripción de la Reclamación *
                  </label>
                  <textarea
                    name="descripcion"
                    value={formData.descripcion}
                    onChange={handleInputChange}
                    required
                    placeholder="Cuéntanos en detalle qué sucedió..."
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Enviar Reclamación
                </button>
              </form>
            )}
          </div>

          {/* FAQs */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Preguntas Frecuentes</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-card border border-border/50 rounded-lg overflow-hidden hover:border-border transition-colors"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
                  >
                    <span className="font-semibold text-foreground">{faq.pregunta}</span>
                    <ChevronDown
                      size={20}
                      className={`text-primary transition-transform ${
                        expandedFaq === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {expandedFaq === index && (
                    <div className="px-6 py-4 bg-background/50 border-t border-border/50">
                      <p className="text-foreground/75">{faq.respuesta}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Important Information */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Información Importante
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Requisitos:</h4>
              <ul className="space-y-2 text-foreground/75">
                <li>✓ Proporcionar datos de contacto válidos</li>
                <li>✓ Describir claramente el problema</li>
                <li>✓ Incluir fecha y número de compra si es posible</li>
                <li>✓ Presentar dentro de 30 días</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">¿Qué sucede después?</h4>
              <ul className="space-y-2 text-foreground/75">
                <li>✓ Revisamos tu reclamación en detalle</li>
                <li>✓ Te contactamos para más información si es necesario</li>
                <li>✓ Ofrecemos una solución justa</li>
                <li>✓ Mantenemos un registro confidencial</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
