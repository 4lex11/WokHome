export type Section = 'home' | 'menu' | 'about' | 'contact' | 'product' | 'checkout' | 'order-complete' | 'login'

export interface SelectedProduct {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: 'comida' | 'utensilios' | 'ingredientes'
}

export interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export interface CartItemInput {
  id: string
  name: string
  price: number
  image: string
}
