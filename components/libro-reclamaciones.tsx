'use client'

import { useState } from 'react'
import { FileText, Send, ShieldCheck, AlertCircle } from 'lucide-react'

interface FormData {
  tipo: 'reclamo' | 'queja'
  // Consumidor
  nombre: string
  tipoDocumento: 'DNI' | 'CE' | 'Pasaporte'
  numeroDocumento: string
  domicilio: string
  telefono: string
  email: string
  esMenorEdad: boolean
  nombreApoderado: string
  // Bien contratado
  tipoBien: 'producto' | 'servicio'
  descripcionBien: string
  montoReclamado: string
  // Detalle
  detalle: string
  pedido: string
}

const initialFormData: FormData = {
  tipo: 'reclamo',
  nombre: '',
  tipoDocumento: 'DNI',
  numeroDocumento: '',
  domicilio: '',
  telefono: '',
  email: '',
  esMenorEdad: false,
  nombreApoderado: '',
  tipoBien: 'producto',
  descripcionBien: '',
  montoReclamado: '',
  detalle: '',
  pedido: '',
}

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [submitted, setSubmitted] = useState(false)
  const [numeroReclamo, setNumeroReclamo] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const year = new Date().getFullYear()
    const random = Math.floor(1000 + Math.random() * 9000)
    setNumeroReclamo(`WH-${year}-${random}`)
    setSubmitted(true)
  }

  const handleNewClaim = () => {
    setFormData(initialFormData)
    setSubmitted(false)
    setNumeroReclamo('')
  }

  if (submitted) {
    return (
      <section className="min-h-screen bg-background py-24 flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-4">
            {formData.tipo === 'reclamo' ? 'Reclamo' : 'Queja'} registrado
          </h1>
          <p className="text-foreground/70 mb-2">
            Tu número de {formData.tipo} es:
          </p>
          <p className="text-3xl font-bold text-primary mb-8">{numeroReclamo}</p>
          <div className="bg-card border border-border/50 rounded-xl p-6 text-left space-y-3 mb-8">
            <p className="text-sm text-foreground/70">
              De acuerdo con el Código de Protección y Defensa del Consumidor (Ley N° 29571),
              Wok&amp;Home dará respuesta a tu {formData.tipo} en un plazo no mayor a{' '}
              <span className="font-semibold text-foreground">15 días hábiles</span>.
            </p>
            <p className="text-sm text-foreground/70">
              Recibirás la respuesta al correo electrónico:{' '}
              <span className="font-semibold text-foreground">{formData.email}</span>
            </p>
          </div>
          <button
            onClick={handleNewClaim}
            className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
          >
            Registrar otro reclamo
          </button>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <FileText size={28} />
          </div>
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">
            HOJA DE RECLAMACIÓN
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Libro de <span className="text-primary">Reclamaciones</span>
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Este establecimiento cuenta con un Libro de Reclamaciones a tu disposición.
            Conforme lo establece el Código de Protección y Defensa del Consumidor,
            puedes registrar tu reclamo o queja aquí.
          </p>
        </div>

        {/* Aviso informativo */}
        <div className="flex gap-4 bg-muted rounded-xl p-6 mb-12 border border-border/50">
          <AlertCircle size={22} className="flex-shrink-0 text-primary mt-0.5" />
          <div className="text-sm text-foreground/70 space-y-2">
            <p>
              <span className="font-semibold text-foreground">Reclamo: </span> disconformidad
              relacionada a los productos o servicios ofrecidos por Wok&amp;Home.
            </p>
            <p>
              <span className="font-semibold text-foreground">Queja: </span> disconformidad no
              relacionada a los productos o servicios, o malestar respecto a la atención al
              público.
            </p>
            <p>
              La formulación de un reclamo o queja no impide acudir a otras vías de solución
              de controversias ni es requisito previo para interponer una denuncia ante
              INDECOPI.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Tipo de solicitud */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">1. Tipo de solicitud</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {(['reclamo', 'queja'] as const).map(tipo => (
                <label
                  key={tipo}
                  className={`flex items-center gap-3 px-5 py-4 rounded-lg border cursor-pointer transition-all ${
                    formData.tipo === tipo
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-background hover:border-primary/50'
                  }`}
                >
                  <input
                    type="radio"
                    name="tipo"
                    value={tipo}
                    checked={formData.tipo === tipo}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                  <span className="font-medium text-foreground capitalize">{tipo}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Datos del consumidor */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              2. Datos del consumidor reclamante
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-3">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label htmlFor="tipoDocumento" className="block text-sm font-medium text-foreground mb-3">
                  Tipo de documento
                </label>
                <select
                  id="tipoDocumento"
                  name="tipoDocumento"
                  value={formData.tipoDocumento}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="DNI">DNI</option>
                  <option value="CE">Carné de Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>

              <div>
                <label htmlFor="numeroDocumento" className="block text-sm font-medium text-foreground mb-3">
                  Número de documento
                </label>
                <input
                  type="text"
                  id="numeroDocumento"
                  name="numeroDocumento"
                  value={formData.numeroDocumento}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="12345678"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="domicilio" className="block text-sm font-medium text-foreground mb-3">
                  Domicilio
                </label>
                <input
                  type="text"
                  id="domicilio"
                  name="domicilio"
                  value={formData.domicilio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Dirección completa"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-3">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="+51 999 999 999"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                  Correo electrónico
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

              <div className="sm:col-span-2 flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="esMenorEdad"
                  name="esMenorEdad"
                  checked={formData.esMenorEdad}
                  onChange={handleChange}
                  className="accent-primary h-4 w-4"
                />
                <label htmlFor="esMenorEdad" className="text-sm text-foreground">
                  El consumidor es menor de edad
                </label>
              </div>

              {formData.esMenorEdad && (
                <div className="sm:col-span-2">
                  <label htmlFor="nombreApoderado" className="block text-sm font-medium text-foreground mb-3">
                    Nombre del padre, madre o apoderado
                  </label>
                  <input
                    type="text"
                    id="nombreApoderado"
                    name="nombreApoderado"
                    value={formData.nombreApoderado}
                    onChange={handleChange}
                    required={formData.esMenorEdad}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Nombre completo del apoderado"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Datos del bien contratado */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              3. Identificación del bien contratado
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="tipoBien" className="block text-sm font-medium text-foreground mb-3">
                  Tipo
                </label>
                <select
                  id="tipoBien"
                  name="tipoBien"
                  value={formData.tipoBien}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="producto">Producto</option>
                  <option value="servicio">Servicio</option>
                </select>
              </div>

              <div>
                <label htmlFor="montoReclamado" className="block text-sm font-medium text-foreground mb-3">
                  Monto reclamado (S/) — opcional
                </label>
                <input
                  type="text"
                  id="montoReclamado"
                  name="montoReclamado"
                  value={formData.montoReclamado}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="0.00"
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="descripcionBien" className="block text-sm font-medium text-foreground mb-3">
                  Descripción del producto o servicio
                </label>
                <input
                  type="text"
                  id="descripcionBien"
                  name="descripcionBien"
                  value={formData.descripcionBien}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Ej: Pedido delivery del 5 de julio, Arroz Chaufá Especial"
                />
              </div>
            </div>
          </div>

          {/* Detalle */}
          <div className="bg-card border border-border/50 rounded-xl p-8">
            <h2 className="text-xl font-bold text-foreground mb-6">
              4. Detalle de {formData.tipo === 'reclamo' ? 'la reclamación' : 'la queja'}
            </h2>
            <div className="space-y-6">
              <div>
                <label htmlFor="detalle" className="block text-sm font-medium text-foreground mb-3">
                  Describe lo sucedido
                </label>
                <textarea
                  id="detalle"
                  name="detalle"
                  value={formData.detalle}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos con el mayor detalle posible qué ocurrió..."
                ></textarea>
              </div>

              <div>
                <label htmlFor="pedido" className="block text-sm font-medium text-foreground mb-3">
                  Tu pedido
                </label>
                <textarea
                  id="pedido"
                  name="pedido"
                  value={formData.pedido}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="¿Qué solución esperas de parte de Wok&Home?"
                ></textarea>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-md flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Registrar {formData.tipo}
          </button>

          <p className="text-xs text-center text-foreground/50">
            Al enviar este formulario aceptas que tus datos sean usados únicamente para dar
            atención a tu {formData.tipo}, conforme a la Ley N° 29733, Ley de Protección de
            Datos Personales.
          </p>
        </form>
      </div>
    </section>
  )
}