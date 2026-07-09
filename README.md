# Wok&Home - Gastronomía Peruano-China

Sitio web completo para la marca Wok&Home, un restaurante especializado en cocina Chifa (fusión de gastronomía peruana y china).

## 🌟 Características

### Páginas Principales
- **Inicio**: Hero section con características destacadas (Comida Auténtica, Utensilios Premium, Ingredientes Premium)
- **Menú**: Catálogo completo de productos con 3 categorías:
  - Comida (platillos listos para servir)
  - Utensilios (herramientas tradicionales)
  - Ingredientes (kits de ingredientes para preparar en casa)
- **Sobre Nosotros**: Historia, misión, visión y platillos emblemáticos con imágenes
- **Contacto**: Formulario de contacto
- **Libro de Reclamaciones**: Sistema de atención al cliente con FAQs

### Funcionalidades E-commerce
- ✅ Catálogo de productos con imágenes
- ✅ Página de detalle de producto con selector de cantidad
- ✅ Carrito de compras funcional
- ✅ **Pasarela de pagos múltiple**:
  - Tarjeta de Crédito/Débito
  - Yape/Plin
  - Efectivo (contra pago)
  - PayPal
- ✅ Página de checkout completa
- ✅ Confirmación de compra
- ✅ Producto clickeable desde inicio y menú

### Secciones Destacadas
- Platos Recomendados con imágenes profesionales
- Reseñas de clientes
- Platillos Emblemáticos (5 platos con imágenes)
- Información sobre herencia cultural Chifa
- Equipo y selección de ingredientes

## 🎨 Diseño

- **Colores**: Paleta moderna con acentos en rojo/marrón para la marca peruana
- **Tipografía**: Geist Sans y Geist Mono de Google Fonts
- **Framework**: Tailwind CSS v4
- **Componentes**: shadcn/ui pre-instalados

## 🚀 Tecnología

- **Framework**: Next.js 16 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS v4
- **Imágenes**: Next.js Image Component con rutas `/images/`
- **UI Components**: shadcn/ui

## 📁 Estructura de Archivos

```
├── app/
│   ├── layout.tsx          # Layout raíz
│   ├── page.tsx            # Página principal
│   └── globals.css         # Estilos globales
├── components/
│   ├── navbar.tsx          # Barra de navegación
│   ├── hero.tsx            # Sección hero con características
│   ├── menu.tsx            # Menú de productos
│   ├── about.tsx           # Página sobre nosotros
│   ├── contact.tsx         # Formulario de contacto
│   ├── recommended.tsx     # Platos recomendados
│   ├── reviews.tsx         # Reseñas de clientes
│   ├── cart.tsx            # Carrito de compras
│   ├── product-detail.tsx  # Detalle de producto
│   ├── checkout.tsx        # Página de checkout CON pasarela de pagos
│   ├── order-complete.tsx  # Confirmación de compra
│   ├── claims-book.tsx     # Libro de reclamaciones
│   ├── footer.tsx          # Footer con redes sociales
│   └── ui/                 # Componentes shadcn
├── public/
│   └── images/             # Imágenes del sitio
└── package.json
```

## 🖼️ Imágenes Incluidas

Todas las imágenes están en `/public/images/`:
- Características principales (comida auténtica, utensilios, ingredientes)
- Herencia cultural y equipo
- Ingredientes frescos
- Chef cocinando
- 5 Platillos emblemáticos (Arroz Chaufa, Lomo Saltado, Ceviche, Tallarín, Wantán)

## 💳 Métodos de Pago

La pasarela de pagos incluye:
1. **Tarjeta de Crédito/Débito**: Formulario completo con número, fecha vencimiento y CVV
2. **Yape/Plin**: Billetera digital peruana con código QR
3. **Efectivo**: Pago contra entrega con confirmación de monto
4. **PayPal**: Redirección a PayPal para pago seguro

## 🌐 Despliegue en GitHub Pages

El proyecto está optimizado para desplegar en GitHub Pages:

```bash
# En package.json, asegúrate que tengas:
"export": "next build && next export"

# Luego:
npm run export
```

Las rutas de imágenes están configuradas como `/images/` lo que funcionará correctamente en GitHub Pages.

## 📦 Instalación Local

```bash
# Instalar dependencias
npm install
# o
pnpm install

# Ejecutar en desarrollo
npm run dev
# o
pnpm dev

# Abre http://localhost:3000
```

## 🔗 Enlaces de Redes Sociales

- Facebook: facebook.com/wokandhome
- Instagram: instagram.com/wokandhome
- TikTok: tiktok.com/@wokandhome
- WhatsApp: +51 999 888 777

## 📞 Contacto

- Teléfono: (+51) 232-5900 / +51-1100-5100
- Email: info@wokandhome.com
- Ubicación: Calle San Martín, 455, Miraflores, Lima

## 📄 Licencia

© 2024 Wok&Home. Todos los derechos reservados.
