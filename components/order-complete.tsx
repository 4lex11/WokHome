'use client'

import { CheckCircle, Package, TrendingUp } from 'lucide-react'

interface OrderCompleteProps {
  onContinueShopping: () => void
}

export default function OrderComplete({ onContinueShopping }: OrderCompleteProps) {
  const orderNumber = `WH-${Math.floor(100000 + Math.random() * 900000)}`
  const estimatedDelivery = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toLocaleDateString('es-PE', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <section className="min-h-screen bg-background py-24 flex items-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-card border border-border/50 rounded-xl p-12 text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-pulse"></div>
              <CheckCircle size={80} className="text-primary relative z-10" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            ¡Compra Realizada!
          </h1>

          {/* Message */}
          <p className="text-xl text-foreground/70 mb-12">
            Gracias por tu compra en Wok&Home. Tu pedido ha sido confirmado y se procesará pronto.
          </p>

          {/* Order Number */}
          <div className="bg-background rounded-lg p-6 mb-12 border border-border/50">
            <p className="text-sm text-foreground/60 mb-2">Número de Pedido</p>
            <p className="text-3xl font-bold text-primary">{orderNumber}</p>
          </div>

          {/* Order Details */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-background rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <Package size={24} className="text-primary" />
                <div className="text-left">
                  <p className="text-sm text-foreground/60">Entrega Estimada</p>
                  <p className="font-semibold text-foreground">{estimatedDelivery}</p>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-lg p-6 border border-border/50">
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp size={24} className="text-primary" />
                <div className="text-left">
                  <p className="text-sm text-foreground/60">Estado</p>
                  <p className="font-semibold text-foreground">Confirmado</p>
                </div>
              </div>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-background rounded-lg p-8 border border-border/50 mb-12 text-left">
            <h3 className="text-xl font-semibold text-foreground mb-6">Próximos Pasos</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary font-semibold">
                    1
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Confirmación de Pedido</p>
                  <p className="text-sm text-foreground/70">Recibirás un email con los detalles de tu compra en los próximos minutos.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary font-semibold">
                    2
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Preparación de Pedido</p>
                  <p className="text-sm text-foreground/70">Nuestro equipo preparará tu pedido con cuidado en los próximos 1-2 días.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/20 text-primary font-semibold">
                    3
                  </div>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Entrega a tu Puerta</p>
                  <p className="text-sm text-foreground/70">Recibirás un seguimiento cuando tu pedido esté en camino hacia ti.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-background rounded-lg p-8 border border-border/50 mb-12">
            <p className="text-foreground/70 mb-4">¿Tienes dudas sobre tu pedido?</p>
            <p className="font-semibold text-foreground mb-4">
              Contáctanos en: <span className="text-primary">info@wokandhome.com</span>
            </p>
            <p className="text-sm text-foreground/60">
              o llama al <span className="text-primary">+51 (1) 242-5555</span>
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onContinueShopping}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all"
            >
              Continuar Comprando
            </button>
            <button
              className="px-8 py-4 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
            >
              Ver Mis Pedidos
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
