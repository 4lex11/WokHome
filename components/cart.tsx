import { X, Minus, Plus, ShoppingBag } from 'lucide-react'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

interface CartProps {
  items: CartItem[]
  onClose: () => void
  onRemove: (id: string) => void
  onUpdateQuantity: (id: string, quantity: number) => void
  onCheckout: () => void
}

export default function Cart({
  items,
  onClose,
  onRemove,
  onUpdateQuantity,
  onCheckout,
}: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.18 // Impuesto en Perú (IGV)
  const total = subtotal + tax

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
      ></div>

      {/* Cart Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={24} className="text-primary" />
            <h2 className="text-2xl font-bold text-foreground">Carrito</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-lg font-semibold text-foreground mb-2">
                Tu carrito está vacío
              </p>
              <p className="text-muted-foreground">
                Agrega platillos o utensilios desde el menú
              </p>
            </div>
          ) : (
            items.map(item => (
              <div
                key={item.id}
                className="bg-card border border-border rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between items-start gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-3xl">{item.image}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-sm">
                          {item.name}
                        </h4>
                        <p className="text-primary font-bold text-sm">
                          S/. {item.price.toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center justify-between bg-muted rounded-lg px-2 py-1">
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))
                    }
                    className="p-1 hover:bg-background rounded transition-colors text-foreground"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="font-semibold text-foreground w-8 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() =>
                      onUpdateQuantity(item.id, item.quantity + 1)
                    }
                    className="p-1 hover:bg-background rounded transition-colors text-foreground"
                  >
                    <Plus size={16} />
                  </button>
                </div>

                <div className="text-right pt-2 border-t border-border">
                  <p className="text-foreground font-semibold">
                    S/. {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border p-6 space-y-4 bg-card/50">
            {/* Summary */}
            <div className="space-y-2 pb-4 border-b border-border">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal:</span>
                <span>S/. {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>IGV (18%):</span>
                <span>S/. {tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-foreground pt-2">
                <span>Total:</span>
                <span className="text-primary">S/. {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  onCheckout()
                  onClose()
                }}
                className="w-full px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                Proceder al Pago
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-2 border-2 border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors"
              >
                Continuar Comprando
              </button>
            </div>

            {/* Note */}
            <p className="text-xs text-muted-foreground text-center">
              El envío será calculado en el próximo paso
            </p>
          </div>
        )}
      </div>
    </>
  )
}
