'use client'

import { useState } from 'react'
import { Heart, Send, MessageCircle, Music, MapPin, Phone, Mail, Clock, BookOpen, X } from 'lucide-react'
import LibroReclamaciones from './libro-reclamaciones'

export default function Footer() {
  const [showLibroReclamaciones, setShowLibroReclamaciones] = useState(false)

  return (
    <>
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Wok&Home</h3>
              <p className="text-background/80 text-sm">
                Autenticidad culinaria Peruano-China en cada plato, llevando tradición a tu hogar.
              </p>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://facebook.com/wokandhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors hover:text-background"
                  aria-label="Facebook"
                >
                  <Send size={20} />
                </a>
                <a
                  href="https://instagram.com/wokandhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors hover:text-background"
                  aria-label="Instagram"
                >
                  <Heart size={20} />
                </a>
                <a
                  href="https://tiktok.com/@wokandhome"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors hover:text-background"
                  aria-label="TikTok"
                >
                  <Music size={20} />
                </a>
                <a
                  href="https://wa.me/51999888777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-background/10 hover:bg-background/20 rounded-lg transition-colors hover:text-background"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Navegación</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Menú
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Contáctenos
                  </a>
                </li>
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Servicios</h4>
              <ul className="space-y-2 text-sm text-background/80">
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Delivery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Reservas
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Talleres
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-background transition-colors">
                    Catering
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contacto</h4>
              <div className="space-y-3 text-sm text-background/80">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                  <span>Calle San Martín 455, Miraflores, Lima</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Phone size={18} className="flex-shrink-0" />
                  <span>+51 (1) 242-5555</span>
                </div>
                <div className="flex gap-3 items-center">
                  <Mail size={18} className="flex-shrink-0" />
                  <span>info@wokandhome.com</span>
                </div>
                <div className="flex gap-3 items-start">
                  <Clock size={18} className="flex-shrink-0 mt-0.5" />
                  <span>L-J: 11:00-23:00 | V-S: 11:00-00:00 | D: 12:00-22:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <div className="grid md:grid-cols-2 gap-8 text-sm text-background/70">
              <div>
                <p>&copy; 2024 Wok&Home. Todos los derechos reservados.</p>
              </div>
              <div className="md:text-right space-y-2">
                <a href="#" className="hover:text-background transition-colors block">
                  Política de Privacidad
                </a>
                <a href="#" className="hover:text-background transition-colors block">
                  Términos de Servicio
                </a>
                <button
                  onClick={() => setShowLibroReclamaciones(true)}
                  className="hover:text-background transition-colors inline-flex items-center gap-1.5 md:justify-end w-full md:w-auto"
                >
                  <BookOpen size={14} />
                  Libro de Reclamaciones
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modal Libro de Reclamaciones */}
      {showLibroReclamaciones && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-start justify-center overflow-y-auto p-4">
          <div className="bg-background text-foreground rounded-xl max-w-3xl w-full my-8 relative">
            <button
              onClick={() => setShowLibroReclamaciones(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-foreground/10 transition-colors z-10"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>
            <LibroReclamaciones />
          </div>
        </div>
      )}
    </>
  )
}