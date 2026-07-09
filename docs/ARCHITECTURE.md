# Wok&Home - Arquitectura del Proyecto

## Estructura General

```
/vercel/share/v0-project
├── app/
│   ├── layout.tsx          # Layout principal con GTM
│   ├── page.tsx            # Componente principal con lógica de estado
│   ├── globals.css         # Estilos globales
│   └── favicon.ico
├── components/
│   ├── navbar.tsx          # Barra de navegación
│   ├── hero.tsx            # Sección hero
│   ├── menu.tsx            # Página de menú
│   ├── about.tsx           # Página sobre nosotros
│   ├── contact.tsx         # Página de contacto
│   ├── cart.tsx            # Carrito de compras
│   ├── product-detail.tsx  # Detalle de producto
│   ├── checkout.tsx        # Página de checkout
│   ├── order-complete.tsx  # Confirmación de compra
│   ├── claims-book.tsx     # Libro de reclamaciones
│   ├── recommended.tsx     # Productos recomendados
│   ├── reviews.tsx         # Reseñas
│   └── footer.tsx          # Footer
├── lib/
│   ├── types.ts            # Tipos y interfaces compartidas
│   ├── constants.ts        # Constantes de la aplicación
│   ├── config.ts           # Configuración general
│   ├── menu-data.ts        # Datos del menú
│   ├── cart-utils.ts       # Funciones utilitarias del carrito
│   └── utils.ts            # Funciones generales
├── public/
│   └── images/             # Imágenes del proyecto
├── README.md               # Documentación principal
└── package.json            # Dependencias
```

## Stack Tecnológico

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui (componentes base)
- **Icons**: lucide-react
- **Images**: Next.js Image Optimization
- **Analytics**: Google Tag Manager (GTM-W6LRH2CC)

## Flujo de Datos

### Estado Global
- `currentSection`: Controla qué sección se muestra
- `selectedProduct`: Almacena el producto seleccionado
- `cartItems`: Lista de productos en el carrito
- `cartOpen`: Estado del carrito abierto/cerrado

### Rutas de Navegación
- `home`: Página de inicio
- `menu`: Menú de productos
- `about`: Sobre nosotros con platillos emblemáticos
- `contact`: Contacto
- `product`: Detalle de producto
- `checkout`: Página de pago con múltiples métodos
- `order-complete`: Confirmación de compra
- `claims`: Libro de reclamaciones

## Características Principales

### Gestión de Carrito
- Agregar/remover productos
- Actualizar cantidades
- Cálculo automático de totales
- IGV (18%) incluido

### Métodos de Pago
- Tarjeta de Crédito/Débito
- Yape/Plin (billetera digital peruana)
- Efectivo contra entrega
- PayPal

### Imágenes
- Todas las imágenes usan rutas absolutas `/images/`
- Optimizadas con Next.js Image
- Responsivas para todos los dispositivos

## Optimizaciones Implementadas

1. **Separación de Concerns**: Tipos, constantes y utilidades en archivos dedicados
2. **Reutilización de Código**: Funciones helper para operaciones comunes
3. **Google Tag Manager**: Integración para análisis sin impacto en rendimiento
4. **TypeScript**: Tipado completo para mayor seguridad
5. **Code Splitting**: Componentes cargados dinámicamente según necesidad

## Variables de Entorno

No requiere variables de entorno en desarrollo. El GTM está configurado con hardcoded ID seguro.

## Deployment

### GitHub Pages
Las rutas de imágenes están optimizadas para GitHub Pages. No requiere cambios adicionales.

### Vercel
Deployment automático desde el repositorio Git.

### Otros Servidores
Compatible con cualquier servidor estático que soporte Next.js.
