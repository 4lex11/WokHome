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
import Auth from '@/components/auth'
import { addToCart, removeFromCart, updateCartQuantity } from '@/lib/cart-utils'
import type { Section, SelectedProduct, CartItemInput, CartItem } from '@/lib/types'

export default function Page() {
  const [currentSection, setCurrentSection] = useState<Section>('home')
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userData, setUserData] = useState<{ email: string; name: string } | null>(null)

  const handleAddToCart = (item: CartItemInput) => {
    setCartItems(prevItems => addToCart(prevItems, item))
  }

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prevItems => removeFromCart(prevItems, id))
  }

  const handleUpdateQuantity = (id: string, quantity: number) => {
    setCartItems(prevItems => updateCartQuantity(prevItems, id, quantity))
  }

  const handleLoginSuccess = (user: { email: string; name: string }) => {
    setUserData(user)
    setIsLoggedIn(true)
    setCurrentSection('home')
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserData(null)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
        cartItemCount={cartItems.length}
        onCartClick={() => setCartOpen(!cartOpen)}
        isLoggedIn={isLoggedIn}
        onLogout={handleLogout}
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
        {currentSection === 'login' && (
          <Auth
            onLoginSuccess={handleLoginSuccess}
            onBack={() => setCurrentSection('home')}
          />
        )}
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

      <Footer />

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
