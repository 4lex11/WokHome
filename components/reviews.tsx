'use client'

import { Star } from 'lucide-react'

interface Review {
  id: string
  author: string
  location: string
  rating: number
  text: string
  date: string
}

const reviews: Review[] = [
  {
    id: 'rev-1',
    author: 'María García',
    location: 'Lima, Perú',
    rating: 5,
    text: 'La experiencia en Wok&Home fue increíble. Los platillos tienen un sabor auténtico que te transporta a la tradición culinaria Chifa. El servicio fue excelente y la presentación de los platos simplemente hermosa.',
    date: 'Hace 2 semanas',
  },
  {
    id: 'rev-2',
    author: 'Carlos Rodríguez',
    location: 'Miraflores, Lima',
    rating: 5,
    text: 'Definitivamente el mejor restaurante Chifa en la ciudad. Los utensilios que venden son de excelente calidad y el personal conoce perfectamente los detalles de cada platillo. Volveré pronto.',
    date: 'Hace 3 semanas',
  },
  {
    id: 'rev-3',
    author: 'Laura Mendez',
    location: 'San Isidro, Lima',
    rating: 5,
    text: 'Asistí a uno de sus talleres culinarios y fue una experiencia transformadora. El chef fue muy paciente y los platillos que preparamos quedaron deliciosos. Muy recomendado para aprender técnicas auténticas.',
    date: 'Hace 1 mes',
  },
  {
    id: 'rev-4',
    author: 'José Luis Fernández',
    location: 'Barranco, Lima',
    rating: 5,
    text: 'La fusión de sabores Peruano-Chinesa es simplemente magistral. Cada plato es una obra de arte culinaria. Los ingredientes son frescos y la atención al detalle es impecable.',
    date: 'Hace 1 mes',
  },
]

export default function Reviews() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">TESTIMONIOS</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Lo que Dicen nuestros <span className="text-primary">Clientes</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Miles de clientes satisfechos disfrutan de nuestra comida y experiencias cada semana
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map(review => (
            <div
              key={review.id}
              className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-all hover:shadow-md"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">{review.author}</h4>
                  <p className="text-sm text-foreground/60">{review.location}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
                    />
                  ))}
                </div>
              </div>

              <p className="text-foreground/80 mb-4 leading-relaxed">{review.text}</p>

              <p className="text-sm text-foreground/60">{review.date}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-card border border-border/50 rounded-xl p-8">
            <p className="text-sm text-foreground/70 mb-2">Calificación Promedio</p>
            <div className="flex items-center justify-center gap-3">
              <span className="text-5xl font-bold text-primary">4.9</span>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={24}
                      className={i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}
                    />
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mt-2">Basado en 1,200+ reseñas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
