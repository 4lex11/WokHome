# ⚡ Quick Start - Wok&Home

## 🚀 En 5 Minutos

### 1. Instalar
```bash
cd wok-home
pnpm install
```

### 2. Ejecutar
```bash
pnpm dev
```

### 3. Abrir
```
http://localhost:3000
```

¡Listo! 🎉

---

## 📝 Cambios Comunes

### Agregar Producto al Menú
**Archivo:** `lib/menu-data.ts`

```typescript
{
  id: 'mi-producto',
  name: 'Mi Producto',
  description: 'Descripción aquí',
  price: 29.99,
  category: 'comida',
  image: '/images/mi-producto.png',
}
```

### Cambiar Impuesto (IGV)
**Archivo:** `lib/constants.ts`

```typescript
export const TAX_RATE = 0.18  // Cambiar aquí
```

### Cambiar GTM ID
**Archivo:** `app/layout.tsx`

Buscar: `GTM-W6LRH2CC` → Reemplazar

### Agregar Producto al Inicio
**Archivo:** `components/recommended.tsx`

Agregar producto al array `recommendedItems`

### Cambiar Colores
**Archivo:** `app/globals.css`

Editar variables CSS de colores

---

## 🌐 Desplegar

### GitHub Pages
```bash
git add .
git commit -m "Deploy v2.0"
git push origin main
```

### Vercel
```bash
vercel
```

---

## 📚 Documentación

| Documento | Para |
|-----------|------|
| README.md | Resumen general |
| docs/SETUP.md | Instalación completa |
| docs/ARCHITECTURE.md | Arquitectura técnica |
| docs/OPTIMIZATIONS.md | Mejoras implementadas |
| IMPLEMENTACION_FINAL.md | Estado final del proyecto |

---

## 🆘 Problemas Comunes

### Port 3000 en uso
```bash
PORT=3001 pnpm dev
```

### Imágenes no cargan
- Verificar: archivo existe en `public/images/`
- Ruta debe ser: `/images/nombre.png`
- Limpiar: `rm -rf .next`

### Build falla
```bash
rm -rf node_modules
pnpm install
pnpm build
```

---

## 📱 Verificar Funcionalidades

- [ ] Agregar producto al carrito
- [ ] Ver carrito con imágenes
- [ ] Cambiar cantidad
- [ ] Ver total con IGV
- [ ] Seleccionar método pago
- [ ] Completar checkout
- [ ] Ver confirmación

---

## 💻 Scripts

```bash
pnpm dev         # Desarrollo
pnpm build       # Build
pnpm start       # Producción
```

---

## ✅ Checklist Pre-Deploy

- [ ] Verificar todos los productos
- [ ] Probar todos los métodos de pago
- [ ] Probar en mobile
- [ ] Verificar imágenes
- [ ] GTM funcionando
- [ ] Links sociales ok

---

**Todo listo. ¡A producción! 🚀**
