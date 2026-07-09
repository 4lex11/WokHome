// Tax
export const TAX_RATE = 0.18
export const TAX_DESCRIPTION = 'IGV (18%)'

// Business Info
export const BUSINESS_NAME = 'Wok&Home'
export const BUSINESS_DESCRIPTION = 'Experiencia auténtica de la fusión culinaria Peruano-China'
export const BUSINESS_PHONE = '+51999888777'
export const BUSINESS_EMAIL = 'info@wokandhome.pe'

// Delivery
export const DELIVERY_DAYS = 3
export const DELIVERY_DATE_FORMAT = 'EEEE, d \u0027de\u0027 MMMM \u0027de\u0027 yyyy'

// Order Status
export const ORDER_STATUS = {
  CONFIRMATION: 'Confirmación de Pedido',
  PREPARATION: 'Preparación de Pedido',
  DELIVERY: 'Entrega a tu Puerta',
} as const

// Cart Messages
export const CART_MESSAGES = {
  EMPTY: 'Tu carrito está vacío',
  ADD_ITEMS: 'Agrega productos para comenzar',
  PROCEED: 'Proceder al Pago',
  CONTINUE_SHOPPING: 'Continuar Comprando',
} as const

// Payment Methods
export const PAYMENT_METHODS = {
  CARD: 'Tarjeta de Crédito/Débito',
  YAPE: 'Yape / Plin',
  CASH: 'Pagar en Efectivo',
  PAYPAL: 'PayPal',
} as const
