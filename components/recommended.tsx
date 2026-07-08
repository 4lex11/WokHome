'use client'

import Image from 'next/image'
import { Star, ShoppingCart } from 'lucide-react'

interface RecommendedItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  rating: number
  reviews: number
}

interface RecommendedProps {
  onAddToCart: (item: { id: string; name: string; price: number; image: string }) => void
  onProductClick: (product: {
    id: string
    name: string
    description: string
    price: number
    image: string
    category: 'comida' | 'utensilios' | 'ingredientes'
  }) => void
}

const recommendedItems: RecommendedItem[] = [
  {
    id: 'rec-1',
    name: 'Arroz Chaufa Premium',
    description: 'Nuestro bestseller con camarones frescos y vegetales salteados al wok',
    price: 28.50,
    image: '/images/plato-recomendado-1.png',
    rating: 4.9,
    reviews: 342,
  },
  {
    id: 'rec-2',
    name: 'Lomo Saltado Estilo Chino',
    description: 'Carne premium salteada con papas crujientes y toque umami',
    price: 35.00,
    image: '/images/plato-recomendado-2.png',
    rating: 4.8,
    reviews: 289,
  },
  {
    id: 'rec-3',
    name: 'Ceviche con Toque Oriental',
    description: 'Pescado fresco marinado con yuzu peruano y jengibre japonés',
    price: 32.00,
    image: '/images/plato-recomendado-3.png',
    rating: 4.9,
    reviews: 156,
  },
]

export default function Recommended({ onAddToCart, onProductClick }: RecommendedProps) {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">LO MÁS POPULAR</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Platos <span className="text-primary">Recomendados</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Descubre nuestros platillos más queridos por nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recommendedItems.map(item => (
            <div
              key={item.id}
              className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-border transition-all hover:shadow-lg cursor-pointer"
              onClick={() => onProductClick({
                id: item.id,
                name: item.name,
                description: item.description,
                price: item.price,
                image: item.image,
                category: 'comida'
              })}
            >
              <div className="relative h-56 w-full overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.name}</h3>
                <p className="text-foreground/70 text-sm mb-4">{item.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < Math.floor(item.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{item.rating}</span>
                  <span className="text-sm text-foreground/60">({item.reviews})</span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border/30">
                  <span className="text-2xl font-bold text-primary">S/. {item.price.toFixed(2)}</span>
                  <button
                    onClick={() =>
                      onAddToCart({
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        image: item.image,
                      })
                    }
                    className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-md"
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
