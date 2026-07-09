'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ShoppingCart, ChevronDown } from 'lucide-react'

interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'comida' | 'utensilios' | 'ingredientes'
  image: string
}

interface MenuProps {
  onAddToCart: (item: {
    id: string
    name: string
    price: number
    image: string
  }) => void
  onProductClick: (product: MenuItem) => void
}

const menuItems: MenuItem[] = [
  // Comida
  {
    id: 'arroz-chaufa',
    name: 'Arroz Chaufa Premium',
    description: 'Arroz salteado con wok, camarones, pollo y verduras frescas',
    price: 28.50,
    category: 'comida',
    image: '/images/arroz-chaufa.png',
  },
  {
    id: 'lomo-saltado',
    name: 'Lomo Saltado Estilo Chino',
    description: 'Lomo fino salteado con ají, cebolla y toque de salsa de soya',
    price: 35.00,
    category: 'comida',
    image: '/images/lomo-saltado.png',
  },
  {
    id: 'tamarind-fish',
    name: 'Ceviche con Toque Oriental',
    description: 'Pescado fresco marinado con yuzu, ají y jengibre',
    price: 32.00,
    category: 'comida',
    image: '/images/ceviche.png',
  },
  {
    id: 'talarin-saltado',
    name: 'Tallarín Saltado con Pollo',
    description: 'Fideos salteados al wok con pollo, vegetales y salsa umami',
    price: 26.50,
    category: 'comida',
    image: '/images/talarin-saltado.png',
  },
  {
    id: 'wantan-peruano',
    name: 'Wantán Peruano (12 pzas)',
    description: 'Dumplings rellenos de camarón, ají y especias peruanas',
    price: 18.00,
    category: 'comida',
    image: '/images/wantan.png',
  },
  {
    id: 'sopa-wonton',
    name: 'Sopa de Wontán con Caldo Peruano',
    description: 'Caldo aromático con dumplings, pollo y vegetales frescos',
    price: 15.50,
    category: 'comida',
    image: '/images/sopa-chifa.png',
  },
  {
    id: 'camote-frito',
    name: 'Pato a la Criolla Estilo Chifa',
    description: 'Pato peruano asado con técnica wok y salsa tradicional',
    price: 38.00,
    category: 'comida',
    image: '/images/pato-criolla.png',
  },
  {
    id: 'causa-oriental',
    name: 'Causa Limeña Versión Chifa',
    description: 'Papa amarilla con atún, aguacate y mayonesa oriental',
    price: 14.00,
    category: 'comida',
    image: '/images/causa-oriental.png',
  },
  // Utensilios
  {
    id: 'wok-carbon',
    name: 'Wok de Acero Carbón 14"',
    description: 'Wok tradicional de acero al carbón, perfecta conducción de calor',
    price: 65.00,
    category: 'utensilios',
    image: '/images/wok-tradicional.png',
  },
  {
    id: 'wok-antiadherente',
    name: 'Sartén Premium Antiadherente',
    description: 'Sartén moderna con revestimiento antiadherente, fácil de limpiar',
    price: 55.00,
    category: 'utensilios',
    image: '/images/sarten-chaufa.png',
  },
  {
    id: 'palillos-bamboo',
    name: 'Juego de Palillos Bambú (5 pares)',
    description: 'Palillos de bambú auténtico, ideales para cocinar y comer',
    price: 18.00,
    category: 'utensilios',
    image: '/images/palillos-chifa.png',
  },
  {
    id: 'cuchilla-profesional',
    name: 'Cuchilla Profesional de Chef',
    description: 'Cuchillo de acero inoxidable para corte profesional',
    price: 45.00,
    category: 'utensilios',
    image: '/images/cuchilla-profesional.png',
  },
  {
    id: 'juego-complete',
    name: 'Juego Completo Chifa (4 piezas)',
    description: 'Wok, palillos, mortero y tabla de corte en set exclusivo',
    price: 150.00,
    category: 'utensilios',
    image: './images/juego-completo.png',
  },
  {
    id: 'mortero-stone',
    name: 'Mortero de Piedra',
    description: 'Mortero de piedra para moler especias y pasta de ají',
    price: 28.00,
    category: 'utensilios',
    image: './images/mortero.png',
  },
  {
    id: 'tabla-corte',
    name: 'Tabla de Corte Premium Bambú',
    description: 'Tabla de bambú ecológica para preparar ingredientes frescos',
    price: 35.00,
    category: 'utensilios',
    image: './images/tabla-corte.png',
  },
  // Ingredientes Premium
  {
    id: 'kit-arroz-chaufa',
    name: 'Kit Arroz Chaufa Premium',
    description: 'Todo lo necesario para preparar un delicioso Arroz Chaufa: camarones frescos, huevos, verduras selectas y salsa de soya premium',
    price: 42.00,
    category: 'ingredientes',
    image: './images/kit-arroz-chaufa.png',
  },
  {
    id: 'kit-lomo-saltado',
    name: 'Kit Lomo Saltado Gourmet',
    description: 'Lomo Premium cortado, papas selectas, cebollas, ají rocoto y salsa especial para un Lomo Saltado perfecto',
    price: 58.00,
    category: 'ingredientes',
    image: '/images/kit-lomo-saltado.png',
  },
  {
    id: 'kit-ceviche',
    name: 'Kit Ceviche Fresco',
    description: 'Pescado fresco del día, limones, ají, cilantro y cebolla morada para preparar un auténtico Ceviche Peruano',
    price: 52.00,
    category: 'ingredientes',
    image: '/images/kit-ceviche.png',
  },
  {
    id: 'kit-talarin-saltado',
    name: 'Kit Tallarín Saltado',
    description: 'Tallarín fresco, pollo Premium, verduras variadas, jengibre y salsa umami para un Tallarín Saltado delicioso',
    price: 39.00,
    category: 'ingredientes',
    image: '/images/kit-talarin.png',
  },
]

export default function Menu({ onAddToCart, onProductClick }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<'comida' | 'utensilios' | 'ingredientes' | 'todos'>('todos')
  const [expandedDescription, setExpandedDescription] = useState<string | null>(null)

  const filteredItems = selectedCategory === 'todos'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  const comidaItems = filteredItems.filter(item => item.category === 'comida')
  const utensiliosItems = filteredItems.filter(item => item.category === 'utensilios')
  const ingredientesItems = filteredItems.filter(item => item.category === 'ingredientes')

  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">NUESTRO MENÚ</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Platillos <span className="text-primary">Premium</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Fusión auténtica de tradición peruana y técnicas chinas
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-20 flex-wrap">
          {[
            { value: 'todos', label: 'Todo' },
            { value: 'comida', label: 'Comida' },
            { value: 'utensilios', label: 'Utensilios' },
            { value: 'ingredientes', label: 'Ingredientes' },
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setSelectedCategory(tab.value as 'comida' | 'utensilios' | 'ingredientes' | 'todos')}
              className={`px-6 py-2 rounded-full font-medium transition-all text-sm ${
                selectedCategory === tab.value
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-foreground hover:bg-muted/80'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Comida Section */}
        {comidaItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-foreground mb-8">Platillos Chifa</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {comidaItems.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedDescription === item.id}
                  onExpandChange={() =>
                    setExpandedDescription(
                      expandedDescription === item.id ? null : item.id
                    )
                  }
                  onAddToCart={onAddToCart}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Utensilios Section */}
        {utensiliosItems.length > 0 && (
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-foreground mb-8">Utensilios Premium</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {utensiliosItems.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedDescription === item.id}
                  onExpandChange={() =>
                    setExpandedDescription(
                      expandedDescription === item.id ? null : item.id
                    )
                  }
                  onAddToCart={onAddToCart}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        )}

        {/* Ingredientes Section */}
        {ingredientesItems.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8">Kits de Ingredientes Premium</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {ingredientesItems.map(item => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  isExpanded={expandedDescription === item.id}
                  onExpandChange={() =>
                    setExpandedDescription(
                      expandedDescription === item.id ? null : item.id
                    )
                  }
                  onAddToCart={onAddToCart}
                  onProductClick={onProductClick}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

interface MenuItemCardProps {
  item: MenuItem
  isExpanded: boolean
  onExpandChange: () => void
  onAddToCart: (item: { id: string; name: string; price: number; image: string }) => void
  onProductClick: (product: MenuItem) => void
}

function MenuItemCard({
  item,
  isExpanded,
  onExpandChange,
  onAddToCart,
  onProductClick,
}: MenuItemCardProps) {
  const isImagePath = item.image.startsWith('/')
  
  return (
    <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-border transition-all hover:shadow-md flex flex-col h-full cursor-pointer" onClick={() => onProductClick(item)}>
      {/* Image Section */}
      {isImagePath && (
        <div className="relative h-48 w-full overflow-hidden bg-muted hover:opacity-90 transition-opacity">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      )}
      
      <div className="p-8 flex flex-col flex-grow">
        {!isImagePath && (
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-3xl mb-6">
            {item.image}
          </div>
        )}
        <h4 className="text-lg font-semibold text-foreground mb-3">{item.name}</h4>
        
        <p className={`text-foreground/70 text-sm mb-4 transition-all flex-grow ${
          isExpanded ? 'line-clamp-none' : 'line-clamp-2'
        }`}>
          {item.description}
        </p>

        {item.description.length > 50 && (
          <button
            onClick={onExpandChange}
            className="text-primary text-xs font-medium flex items-center gap-1 mb-6 hover:gap-2 transition-all"
          >
            {isExpanded ? 'Ver menos' : 'Ver más'}
            <ChevronDown size={14} className={`transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        )}

        <div className="flex justify-between items-center pt-4 border-t border-border/30 mt-auto">
          <span className="text-2xl font-bold text-primary">
            S/. {item.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart({
              id: item.id,
              name: item.name,
              price: item.price,
              image: item.image,
            })}
            className="p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all hover:shadow-md"
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
