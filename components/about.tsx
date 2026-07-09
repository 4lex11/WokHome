import Image from 'next/image'

export default function About() {
  return (
    <section className="min-h-screen bg-background py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <p className="text-sm font-semibold text-primary mb-4 tracking-wide">NUESTRA HISTORIA</p>
          <h2 className="text-5xl sm:text-6xl font-bold text-foreground mb-6">
            Sobre <span className="text-primary">Wok&Home</span>
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

        {/* Heritage Section with Image */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-foreground mb-12 text-center">
            Nuestra Herencia Cultural
          </h3>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden border border-border/50">
              <Image
                src="/images/heritage-chifa.png"
                alt="Herencia cultural Chifa"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-foreground/75 leading-relaxed">
                La gastronomía Chifa es un testimonio vivo de la fusión cultural. Desde el siglo XIX, cuando los inmigrantes chinos llegaron a Perú, han dejado una huella indeleble en nuestra cocina.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                En Wok&Home, celebramos esta herencia única que no se encuentra en ningún otro lugar del mundo. Cada receta cuenta una historia de integración, innovación y amor por la gastronomía.
              </p>
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

            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                🥢
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Sabor Umami</h4>
              <p className="text-foreground/70 text-sm">
                Salsa de soya combinada con picante peruano tradicional
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-border transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4">
                👨‍🍳
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-3">Tradición</h4>
              <p className="text-foreground/70 text-sm">
                Recetas auténticas preservadas por generaciones
              </p>
            </div>
          </div>
        </div>

        {/* Team and Sourcing Section */}
        <div className="mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative h-80 rounded-xl overflow-hidden border border-border/50">
              <Image
                src="/images/wok-home-team.png"
                alt="Equipo Wok&Home"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground mb-4">Nuestro Equipo</h3>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Somos un equipo apasionado de chefs, cocineros y profesionales culinarios dedicados a ofrecerte la mejor experiencia gastronómica.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Cada miembro del equipo trae su experiencia y dedicación a cada plato que preparamos.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h3 className="text-3xl font-bold text-foreground mb-4">Ingredientes Frescos</h3>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Seleccionamos cuidadosamente cada ingrediente en mercados locales. Trabajamos con proveedores de confianza para garantizar la máxima calidad.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Nuestra compromiso es ofrecerte productos frescos y auténticos en cada compra.
              </p>
            </div>
            <div className="relative h-80 rounded-xl overflow-hidden border border-border/50 order-1 md:order-2">
              <Image
                src="/images/fresh-ingredients.png"
                alt="Ingredientes frescos"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Cooking Technique Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-foreground mb-12 text-center">
            Técnicas de Cocción Tradicionales
          </h3>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-80 rounded-xl overflow-hidden border border-border/50">
              <Image
                src="/images/chef-cooking.png"
                alt="Chef cocinando en wok"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <p className="text-lg text-foreground/75 leading-relaxed">
                Nuestros chefs dominan las técnicas ancestrales del wok, transmitidas de generación en generación.
              </p>
              <p className="text-lg text-foreground/75 leading-relaxed">
                Cada movimiento es preciso, cada llama controlada. El resultado es una experiencia culinaria incomparable que respeta la tradición mientras abraza la innovación.
              </p>
            </div>
          </div>
        </div>

        {/* Emblematic Dishes Section */}
        <div className="mb-24">
          <h3 className="text-4xl font-bold text-foreground mb-12 text-center">
            Platillos Emblemáticos
          </h3>
          <p className="text-lg text-foreground/75 text-center mb-16 max-w-2xl mx-auto">
            Nuestros platos más icónicos que definen la esencia de la cocina Chifa peruana. Cada uno es una obra maestra culinaria con siglos de tradición.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {/* Arroz Chaufa */}
            <div className="group">
              <div className="relative h-48 rounded-xl overflow-hidden border border-border/50 mb-4 hover:border-primary transition-colors">
                <Image
                  src="/images/dish-arroz-chaufa.png"
                  alt="Arroz Chaufa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Arroz Chaufa</h4>
              <p className="text-sm text-foreground/70">
                Arroz salteado con camarones, huevo y verduras en técnica wok tradicional
              </p>
            </div>

            {/* Lomo Saltado */}
            <div className="group">
              <div className="relative h-48 rounded-xl overflow-hidden border border-border/50 mb-4 hover:border-primary transition-colors">
                <Image
                  src="/images/dish-lomo-saltado.png"
                  alt="Lomo Saltado"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Lomo Saltado</h4>
              <p className="text-sm text-foreground/70">
                Lomo de res con papas crujientes, cebolla morada y salsa soya fusión
              </p>
            </div>

            {/* Ceviche */}
            <div className="group">
              <div className="relative h-48 rounded-xl overflow-hidden border border-border/50 mb-4 hover:border-primary transition-colors">
                <Image
                  src="/images/dish-ceviche.png"
                  alt="Ceviche"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Ceviche Fresco</h4>
              <p className="text-sm text-foreground/70">
                Pescado fresco con limón, ají, cilantro y cebolla morada
              </p>
            </div>

            {/* Tallarín Saltado */}
            <div className="group">
              <div className="relative h-48 rounded-xl overflow-hidden border border-border/50 mb-4 hover:border-primary transition-colors">
                <Image
                  src="/images/dish-talarin.png"
                  alt="Tallarín Saltado"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Tallarín Saltado</h4>
              <p className="text-sm text-foreground/70">
                Tallarín fresco con pollo, verduras y salsa umami asiática
              </p>
            </div>

            {/* Wantan Soup */}
            <div className="group">
              <div className="relative h-48 rounded-xl overflow-hidden border border-border/50 mb-4 hover:border-primary transition-colors">
                <Image
                  src="/images/dish-wantan.png"
                  alt="Sopa Wantán"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Sopa Wantán</h4>
              <p className="text-sm text-foreground/70">
                Dumplings chinos tradicionales en caldo aromático con verduras
              </p>
            </div>
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
