import { CartItem, CartItemInput } from './types'

export const addToCart = (
  cartItems: CartItem[],
  item: CartItemInput
): CartItem[] => {
  const existingItem = cartItems.find(i => i.id === item.id)
  
  if (existingItem) {
    return cartItems.map(i =>
      i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
    )
  }
  
  return [...cartItems, { ...item, quantity: 1 }]
}

export const removeFromCart = (cartItems: CartItem[], id: string): CartItem[] => {
  return cartItems.filter(item => item.id !== id)
}

export const updateCartQuantity = (
  cartItems: CartItem[],
  id: string,
  quantity: number
): CartItem[] => {
  if (quantity <= 0) {
    return removeFromCart(cartItems, id)
  }
  
  return cartItems.map(item =>
    item.id === id ? { ...item, quantity } : item
  )
}

export const calculateCartTotal = (cartItems: CartItem[]): number => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
}

export const calculateTax = (subtotal: number, taxRate: number = 0.18): number => {
  return subtotal * taxRate
}

export const calculateTotal = (subtotal: number): number => {
  const tax = calculateTax(subtotal)
  return subtotal + tax
}
