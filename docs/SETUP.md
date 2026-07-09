# Guía de Instalación y Setup - Wok&Home

## Requisitos Previos

- Node.js 18+ o superior
- npm, yarn, pnpm, o bun como gestor de paquetes
- Git (para control de versión)

## Instalación Local

### 1. Clonar el Repositorio

```bash
git clone <repository-url>
cd wok-home
```

### 2. Instalar Dependencias

```bash
pnpm install
# o
npm install
# o
yarn install
```

### 3. Ejecutar Servidor de Desarrollo

```bash
pnpm dev
# o
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

## Estructura de Carpetas

```
app/              - Rutas y layout del servidor
components/       - Componentes React reutilizables
lib/              - Lógica, utilidades y configuración
public/           - Archivos estáticos (imágenes, íconos)
docs/             - Documentación del proyecto
```

## Configuración

### Google Tag Manager

El GTM está pre-configurado con el ID: `GTM-W6LRH2CC`

Ubicación: `app/layout.tsx`

Para cambiar el ID:
1. Editar `app/layout.tsx`
2. Reemplazar `GTM-W6LRH2CC` con tu ID

### Personalización de Constantes

Editar `lib/constants.ts` para cambiar:
- Nombre del negocio
- Información de contacto
- Tasa de impuestos (IGV)
- Descripciones de órdenes

### Datos del Menú

Editar `lib/menu-data.ts` para:
- Agregar/remover productos
- Cambiar precios
- Actualizar imágenes
- Modificar categorías

## Build para Producción

### Build Local

```bash
pnpm build
pnpm start
```

### Deploy a GitHub Pages

1. Configurar repositorio en GitHub
2. Habilitar GitHub Pages en Settings
3. Hacer push a la rama configurada (generalmente `main`)

### Deploy a Vercel

```bash
vercel
```

Vercel detectará automáticamente que es un proyecto Next.js y lo deployará.

## Scripts Disponibles

```bash
pnpm dev          # Ejecutar servidor de desarrollo
pnpm build        # Compilar para producción
pnpm start        # Ejecutar build de producción
pnpm lint         # Ejecutar linter (si está configurado)
```

## Imágenes y Assets

### Ubicación de Imágenes

`public/images/` - Todas las imágenes del proyecto

### Rutas de Imágenes

Usar rutas absolutas en componentes:
```tsx
<Image src="/images/producto.png" alt="Descripción" />
```

### Agregar Nuevas Imágenes

1. Colocar imagen en `public/images/`
2. Usar ruta `/images/nombre-archivo.png` en componentes
3. Las imágenes se optimizan automáticamente con Next.js

## Troubleshooting

### "Port 3000 already in use"
```bash
# Cambiar puerto
PORT=3001 pnpm dev
```

### Imágenes no cargan
- Verificar que el archivo existe en `public/images/`
- Asegurar que la ruta es absoluta: `/images/nombre.png`
- Limpiar caché: `rm -rf .next`

### Build falla
```bash
# Limpiar instalación
rm -rf node_modules
pnpm install
pnpm build
```

## Documentación Adicional

- Ver `docs/ARCHITECTURE.md` para detalles de arquitectura
- Ver `README.md` para descripción general
- Ver componentes individuales para API específica

## Preguntas Frecuentes

**¿Puedo cambiar el tema de colores?**
Editar `app/globals.css` y las variables de Tailwind CSS.

**¿Cómo agregar un nuevo método de pago?**
Editar `components/checkout.tsx` y `lib/constants.ts`.

**¿Cómo cambiar las redes sociales?**
Editar `components/footer.tsx` con nuevos URLs.

**¿Es SEO friendly?**
Sí, optimizado con metadata dinámica y estruturación semántica.
