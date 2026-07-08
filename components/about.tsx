import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">NUESTRA HISTORIA</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Sobre <span className="text-primary">CHIFA</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            La fusión auténtica de tradición culinaria peruana y china
          </p>
        </div>

        {/* Main Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="text-4xl font-bold text-foreground">
              La Herencia Chifa
            </h3>
            <p className="text-lg text-foreground/75 leading-relaxed">
              La gastronomía Peruano-China, conocida como <span className="text-primary font-semibold">Chifa</span>, surge del encuentro histórico del siglo XIX. Inmigrantes chinos llegaron a Perú y fusionaron sus técnicas milenarias con la rica tradición culinaria local.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Honramos esta herencia preservando técnicas del wok chino mientras celebramos ingredientes únicos del Perú: ají, papas, camote, maíz y pescado fresco.
            </p>
            <p className="text-lg text-foreground/75 leading-relaxed">
              Cada plato que servimos es una historia de inmigración, tradición y amor por la gastronomía.
            </p>
          </div>

          <div className="space-y-6 order-1 md:order-2">
            <div className="relative h-96 rounded-xl overflow-hidden border border-border/50">
              <Image
                src="/images/about-chifa.png"
                alt="Restaurante Chifa - Ambiente elegante"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-border transition-colors">
                <h4 className="text-lg font-semibold text-primary mb-3">Misión</h4>
                <p className="text-foreground/80 text-sm">
                  Preservar y compartir la autenticidad de la cocina Chifa
                </p>
              </div>

              <div className="bg-card border border-border/50 rounded-xl p-8 text-center hover:border-border transition-colors">
                <h4 className="text-lg font-semibold text-accent mb-3">Visión</h4>
                <p className="text-foreground/80 text-sm">
                  Ser referente global de la gastronomía Peruano-China
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Characteristics */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-foreground mb-12 text-center">
            Elementos Clave
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                🔥
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Técnicas Chinas</h4>
              <p className="text-foreground/70 text-sm">
                Salteados rápidos y cocción al fuego alto en wok tradicional
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                🌶️
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Ingredientes Frescos</h4>
              <p className="text-foreground/70 text-sm">
                Ají, papas, camote, maíz y pescado fresco de la costa
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🥢</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Sabor Umami</h4>
              <p className="text-muted-foreground">
                Salsa de soya combinada con picante peruano tradicional
              </p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">👨‍🍳</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Tradición</h4>
              <p className="text-muted-foreground">
                Recetas auténticas preservadas por generaciones
              </p>
            </div>
          </div>
        </div>

        {/* Signature Dishes */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Platillos Emblemáticos
          </h3>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: 'Arroz Chaufa',
                desc: 'El arroz salteado al wok es la joya de la corona de Chifa',
                icon: '🍚',
              },
              {
                name: 'Lomo Saltado',
                desc: 'Lomo peruano con influencia china, un balance perfecto',
                icon: '🥩',
              },
              {
                name: 'Tallarín Saltado',
                desc: 'Fideos crujientes con técnica de wok y condimentos peruanos',
                icon: '🍝',
              },
              {
                name: 'Wantán Peruano',
                desc: 'Dumplings rellenos de ingredientes locales',
                icon: '🥟',
              },
            ].map(dish => (
              <div
                key={dish.name}
                className="bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
              >
                <div className="text-5xl mb-4">{dish.icon}</div>
                <h4 className="text-xl font-bold text-foreground mb-2">{dish.name}</h4>
                <p className="text-muted-foreground">{dish.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-12 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-8">
            Nuestros Valores
          </h3>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl mb-3">🌍</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Autenticidad</h4>
              <p className="text-muted-foreground">
                Respetamos las tradiciones mientras innovamos constantemente
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">🤝</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Comunidad</h4>
              <p className="text-muted-foreground">
                Conectamos gentes a través de la gastronomía y la experiencia
              </p>
            </div>

            <div>
              <div className="text-4xl mb-3">✅</div>
              <h4 className="text-lg font-bold text-foreground mb-2">Calidad</h4>
              <p className="text-muted-foreground">
                Ingredientes frescos y procesos tradicionales en cada plato
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
