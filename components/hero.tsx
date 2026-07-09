import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

type Section = 'home' | 'menu' | 'about' | 'contact'

interface HeroProps {
  setCurrentSection: (section: Section) => void
}

export default function Hero({ setCurrentSection }: HeroProps) {
  return (
    <div className="relative min-h-[calc(100vh-64px)] bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/8 rounded-full blur-3xl -mr-40"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl -ml-40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left md:text-left order-2 md:order-1">
            <p className="text-sm font-semibold text-primary mb-4 tracking-wide">COCINA DE FUSIÓN</p>
            
            <h1 className="text-4xl sm:text-6xl font-bold text-foreground mb-6 text-balance leading-tight">
              Wok&Home<br />
              <span className="text-primary">Peruano-China</span>
            </h1>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Experimenta la fusión auténtica de técnicas chinas milenarias con los sabores únicos del Perú, honrando la herencia de la inmigración china.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => setCurrentSection('menu')}
                className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg flex items-center justify-center gap-2"
              >
                Explorar Menú <ArrowRight size={20} />
              </button>
              <button
                onClick={() => setCurrentSection('about')}
                className="px-8 py-3 border border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-all"
              >
                Nuestra Historia
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 relative h-96 md:h-full rounded-xl overflow-hidden border border-border/50">
            <Image
              src="/images/hero-chifa.png"
              alt="Cocina Chifa - Gastronomía Peruano-China"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Features with Images */}
        <div className="grid md:grid-cols-3 gap-8 mt-24">
          <div className="rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-lg">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src="/images/comida-autentica.png"
                alt="Comida Auténtica Chifa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Comida Auténtica</h3>
              <p className="text-foreground/70 text-sm">Platillos Chifa con técnicas wok e ingredientes peruanos frescos</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-lg">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src="/images/utensilios-premium.png"
                alt="Utensilios Premium"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Utensilios Premium</h3>
              <p className="text-foreground/70 text-sm">Herramientas tradicionales para la cocina Chifa en tu hogar</p>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden border border-border/50 hover:border-border transition-all hover:shadow-lg">
            <div className="relative h-64 w-full overflow-hidden bg-muted">
              <Image
                src="/images/ingredientes-premium.png"
                alt="Ingredientes Premium para Llevar"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 bg-card">
              <h3 className="text-lg font-semibold text-foreground mb-2">Ingredientes Premium</h3>
              <p className="text-foreground/70 text-sm">Kits de ingredientes listos para preparar nuestros platos en casa</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
