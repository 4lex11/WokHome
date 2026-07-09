import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react'
import { useState } from 'react'

type Section = 'home' | 'menu' | 'about' | 'contact' | 'login'

interface NavbarProps {
  currentSection: Section
  setCurrentSection: (section: Section) => void
  cartItemCount: number
  onCartClick: () => void
  isLoggedIn: boolean
  onLogout: () => void
}

export default function Navbar({
  currentSection,
  setCurrentSection,
  cartItemCount,
  onCartClick,
  isLoggedIn,
  onLogout,
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home' as const, label: 'Inicio' },
    { id: 'menu' as const, label: 'Menú' },
    { id: 'about' as const, label: 'Sobre Nosotros' },
    { id: 'contact' as const, label: 'Contáctenos' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setCurrentSection('home')}>
            <div className="text-2xl font-bold text-primary">Wok&Home</div>
            <div className="hidden sm:block">
              <p className="text-xs text-muted-foreground font-medium">Cocina Peruano-China</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setCurrentSection(item.id)}
                className={`text-sm font-medium transition-all ${
                  currentSection === item.id
                    ? 'text-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Auth and Cart */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={onLogout}
                className="text-sm font-medium px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                Cerrar Sesión
              </button>
            ) : (
              <button
                onClick={() => setCurrentSection('login')}
                className="text-sm font-medium px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Iniciar Sesión
              </button>
            )}
          </div>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-foreground hover:text-primary transition-colors"
            >
              <ShoppingCart size={24} />
              {cartItemCount > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  currentSection === item.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-foreground hover:bg-muted'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-border pt-3 mt-3">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    onLogout()
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 rounded text-foreground hover:bg-muted transition-colors"
                >
                  Cerrar Sesión
                </button>
              ) : (
                <button
                  onClick={() => {
                    setCurrentSection('login')
                    setMobileMenuOpen(false)
                  }}
                  className="block w-full text-left px-4 py-2 rounded bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Iniciar Sesión
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
