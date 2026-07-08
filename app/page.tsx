'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import Menu from '@/components/menu'
import About from '@/components/about'
import Contact from '@/components/contact'
import Cart from '@/components/cart'
import Recommended from '@/components/recommended'
import Reviews from '@/components/reviews'
import Footer from '@/components/footer'
import ProductDetail from '@/components/product-detail'
import Checkout from '@/components/checkout'
import OrderComplete from '@/components/order-complete'
import LibroReclamaciones from '@/components/libro-reclamaciones'


type Section = 'home' | 'menu' | 'about' | 'contact' | 'product' | 'checkout' | 'order-complete' | 'libro-reclamaciones'

interface SelectedProduct {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'comida' | 'utensilios' | 'ingredientes'
}

export default function Page() {
  const [currentSection, setCurrentSection] = useState<Section>('home')
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<Array<{
    id: string
    name: string
    price: number
    quantity: number
    image: string
  }>>([])

  const handleAddToCart = (item: {
    id: string
    name: string
    price: number
    image: string
  }) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === item.id)
      if (existingItem) {
        return prevItems.map(i =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [...prevItems, { ...item, quantity: 1 }]
    })
  }

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id)
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        )
      )
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        cartItemCount={cartItems.length}
        onCartClick={() => setCartOpen(!cartOpen)}
      />

      <main>
        {currentSection === 'home' && (
          <>
            <Hero setCurrentSection={setCurrentSection} />
            <Recommended
              onAddToCart={handleAddToCart}
              onProductClick={(product) => {
                setSelectedProduct(product)
                setCurrentSection('product')
              }}
            />
            <Reviews />
          </>
        )}
        {currentSection === 'menu' && (
          <Menu 
            onAddToCart={handleAddToCart}
            onProductClick={(product) => {
              setSelectedProduct(product)
              setCurrentSection('product')
            }}
          />
        )}
        {currentSection === 'product' && selectedProduct && (
          <ProductDetail
            product={selectedProduct}
            onBack={() => setCurrentSection('menu')}
            onAddToCart={handleAddToCart}
          />
        )}
        {currentSection === 'about' && <About />}
        {currentSection === 'contact' && <Contact />}
        {currentSection === 'libro-reclamaciones' && <LibroReclamaciones />}
        {currentSection === 'checkout' && (
          <Checkout
            items={cartItems}
            onComplete={() => setCurrentSection('order-complete')}
            onBack={() => setCurrentSection('menu')}
          />
        )}
        {currentSection === 'order-complete' && (
          <OrderComplete
            onContinueShopping={() => {
              setCurrentSection('home')
              setCartItems([])
            }}
          />
        )}
      </main>

      <Footer setCurrentSection={setCurrentSection} />

      {cartOpen && (
        <Cart
          items={cartItems}
          onClose={() => setCartOpen(false)}
          onRemove={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onCheckout={() => setCurrentSection('checkout')}
        />
      )}
    </div>
  )
}