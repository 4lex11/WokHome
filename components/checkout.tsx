'use client'

import { useState } from 'react'
import { ArrowLeft, Check } from 'lucide-react'

interface CheckoutProps {
  items: Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }>
  onComplete: () => void
  onBack: () => void
}

export default function Checkout({ items, onComplete, onBack }: CheckoutProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  })

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'yape' | 'cash' | 'paypal'>('card')
  const [isProcessing, setIsProcessing] = useState(false)

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const igv = subtotal * 0.18
  const total = subtotal + igv

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    setTimeout(() => {
      setIsProcessing(false)
      onComplete()
    }, 2000)
  }

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Volver al Menú
          </button>
          
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-primary mb-4 tracking-wide">FINALIZAR COMPRA</p>
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
              Checkout
            </h1>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Información Personal */}
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Información Personal</h3>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Nombres</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tu nombre"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Apellidos</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tus apellidos"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Teléfono</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="+51 999 999 999"
                    />
                  </div>
                </div>
              </div>

              {/* Dirección de Envío */}
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Dirección de Envío</h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-3">Dirección</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Calle, número y detalles"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Ciudad</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Lima"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-3">Código Postal</label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="15001"
                    />
                  </div>
                </div>
              </div>

              {/* Método de Pago */}
              <div className="bg-card border border-border/50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Método de Pago</h3>
                
                <div className="space-y-4 mb-8">
                  {/* Tarjeta de Crédito */}
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-background/50 transition-colors" style={{borderColor: paymentMethod === 'card' ? 'var(--color-primary)' : undefined}}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="card"
                      checked={paymentMethod === 'card'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'yape' | 'cash' | 'paypal')}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-lg font-semibold text-foreground">Tarjeta de Crédito/Débito</span>
                      <p className="text-sm text-foreground/70">Visa, Mastercard, Amex</p>
                    </span>
                    <span className="text-2xl">💳</span>
                  </label>

                  {/* Yape/Plin */}
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-background/50 transition-colors" style={{borderColor: paymentMethod === 'yape' ? 'var(--color-primary)' : undefined}}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="yape"
                      checked={paymentMethod === 'yape'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'yape' | 'cash' | 'paypal')}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-lg font-semibold text-foreground">Yape / Plin</span>
                      <p className="text-sm text-foreground/70">Billetera digital peruana</p>
                    </span>
                    <span className="text-2xl">📱</span>
                  </label>

                  {/* Efectivo */}
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-background/50 transition-colors" style={{borderColor: paymentMethod === 'cash' ? 'var(--color-primary)' : undefined}}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="cash"
                      checked={paymentMethod === 'cash'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'yape' | 'cash' | 'paypal')}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-lg font-semibold text-foreground">Pagar en Efectivo</span>
                      <p className="text-sm text-foreground/70">Entrega contra pago</p>
                    </span>
                    <span className="text-2xl">💵</span>
                  </label>

                  {/* PayPal */}
                  <label className="flex items-center p-4 border border-border rounded-lg cursor-pointer hover:bg-background/50 transition-colors" style={{borderColor: paymentMethod === 'paypal' ? 'var(--color-primary)' : undefined}}>
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={paymentMethod === 'paypal'}
                      onChange={(e) => setPaymentMethod(e.target.value as 'card' | 'yape' | 'cash' | 'paypal')}
                      className="w-4 h-4"
                    />
                    <span className="ml-3 flex-1">
                      <span className="text-lg font-semibold text-foreground">PayPal</span>
                      <p className="text-sm text-foreground/70">Pago seguro internacional</p>
                    </span>
                    <span className="text-2xl">🅿️</span>
                  </label>
                </div>

                {/* Card Details - Only shown for card payment */}
                {paymentMethod === 'card' && (
                  <div className="space-y-6 border-t border-border pt-6">
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-foreground mb-3">Número de Tarjeta</label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        placeholder="1234 5678 9012 3456"
                        className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">Fecha de Vencimiento</label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required
                          placeholder="MM/AA"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-3">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          placeholder="123"
                          className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'cash' && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-foreground font-medium">Pago en Efectivo</p>
                    <p className="text-sm text-foreground/70 mt-2">
                      El pago se realizará al momento de la entrega. Por favor, ten el monto exacto o cambio disponible.
                    </p>
                  </div>
                )}

                {paymentMethod === 'yape' && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-foreground font-medium">Pago por Yape/Plin</p>
                    <p className="text-sm text-foreground/70 mt-2">
                      Se te enviará un código QR o número de teléfono para completar el pago inmediatamente después de confirmar tu compra.
                    </p>
                  </div>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <p className="text-foreground font-medium">Pago con PayPal</p>
                    <p className="text-sm text-foreground/70 mt-2">
                      Serás redirigido a PayPal para completar el pago de forma segura.
                    </p>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="w-full px-6 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current"></div>
                    Procesando...
                  </>
                ) : (
                  <>
                    <Check size={20} />
                    Confirmar Compra
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Resumen de Pedido */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border/50 rounded-xl p-8 sticky top-20">
              <h3 className="text-2xl font-bold text-foreground mb-8">Resumen de Pedido</h3>
              
              <div className="space-y-4 mb-8 max-h-96 overflow-y-auto">
                {items.map(item => (
                  <div key={item.id} className="flex justify-between items-start pb-4 border-b border-border/30">
                    <div>
                      <p className="font-semibold text-foreground">{item.name}</p>
                      <p className="text-sm text-foreground/60">Cantidad: {item.quantity}</p>
                    </div>
                    <p className="font-semibold text-primary">S/. {(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-6 border-t border-border/30">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>S/. {subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>IGV (18%)</span>
                  <span>S/. {igv.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground pt-4 border-t border-border/30">
                  <span>Total</span>
                  <span className="text-primary">S/. {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
