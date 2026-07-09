'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ShoppingCart, Minus, Plus } from 'lucide-react'

interface ProductDetailProps {
  product: {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: 'comida' | 'utensilios' | 'ingredientes'
  }
  onBack: () => void
  onAddToCart: (item: {
    id: string
    name: string
    price: number
    image: string
  }) => void
}

export default function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const isImagePath = product.image.startsWith('./')

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    }
    setQuantity(1)
  }

  const getCategoryLabel = () => {
    const labels: Record<string, string> = {
      comida: 'Platillo',
      utensilios: 'Utensilio',
      ingredientes: 'Kit de Ingredientes',
    }
    return labels[product.category] || 'Producto'
  }

  return (
    <section className="min-h-screen bg-background py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Volver al Menú
        </button>

        {/* Product Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="flex items-center justify-center">
            {isImagePath ? (
              <div className="relative w-full h-96 md:h-full rounded-xl overflow-hidden border border-border/50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div className="w-full h-96 md:h-full rounded-xl overflow-hidden border border-border/50 bg-muted flex items-center justify-center text-6xl">
                {product.image}
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold text-primary mb-2 tracking-wide">
              {getCategoryLabel()}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
              {product.name}
            </h1>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">
                S/. {product.price.toFixed(2)}
              </span>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-foreground mb-3">
                Cantidad
              </label>
              <div className="flex items-center border border-border rounded-lg w-fit">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Disminuir cantidad"
                >
                  <Minus size={20} className="text-foreground" />
                </button>
                <span className="px-6 text-lg font-semibold text-foreground min-w-16 text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-3 hover:bg-muted transition-colors"
                  aria-label="Aumentar cantidad"
                >
                  <Plus size={20} className="text-foreground" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-3 text-lg"
            >
              <ShoppingCart size={24} />
              Agregar {quantity > 1 ? `${quantity} productos` : 'al Carrito'}
            </button>

            {/* Additional Info */}
            <div className="mt-12 pt-8 border-t border-border/30">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">
                    CATEGORÍA
                  </p>
                  <p className="text-lg font-medium text-foreground">
                    {getCategoryLabel()}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground/60 mb-2">
                    SKU
                  </p>
                  <p className="text-lg font-medium text-foreground font-mono">
                    {product.id}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
