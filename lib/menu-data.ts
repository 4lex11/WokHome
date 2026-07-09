export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  category: 'comida' | 'utensilios' | 'ingredientes'
  image: string
}

export const menuItems: MenuItem[] = [
  // COMIDA
  {
    id: 'arroz-chaufa',
    name: 'Arroz Chaufa Premium',
    description: 'Arroz salteado con wok, camarones, pollo y verduras frescas',
    price: 28.50,
    category: 'comida',
    image: '/images/arroz-chaufa.png',
  },
  {
    id: 'lomo-saltado',
    name: 'Lomo Saltado Estilo Chino',
    description: 'Lomo fino salteado con ají, cebolla y toque de salsa de soya',
    price: 35.00,
    category: 'comida',
    image: '/images/lomo-saltado.png',
  },
  {
    id: 'tamarind-fish',
    name: 'Ceviche con Toque Oriental',
    description: 'Pescado fresco marinado con yuzu, ají y jengibre',
    price: 32.00,
    category: 'comida',
    image: '/images/ceviche.png',
  },
  {
    id: 'talarin-saltado',
    name: 'Tallarín Saltado con Pollo',
    description: 'Fideos salteados al wok con pollo, vegetales y salsa umami',
    price: 26.50,
    category: 'comida',
    image: '/images/talarin-saltado.png',
  },
  {
    id: 'wantan-peruano',
    name: 'Wantán Peruano (12 pzas)',
    description: 'Dumplings rellenos de camarón, ají y especias peruanas',
    price: 18.00,
    category: 'comida',
    image: '/images/wantan.png',
  },
  {
    id: 'sopa-wonton',
    name: 'Sopa de Wontán con Caldo Peruano',
    description: 'Caldo aromático con dumplings, pollo y vegetales frescos',
    price: 15.50,
    category: 'comida',
    image: '/images/sopa-chifa.png',
  },
  {
    id: 'camote-frito',
    name: 'Pato a la Criolla Estilo Chifa',
    description: 'Pato peruano asado con técnica wok y salsa tradicional',
    price: 38.00,
    category: 'comida',
    image: '/images/pato-criolla.png',
  },
  {
    id: 'causa-oriental',
    name: 'Causa Limeña Versión Chifa',
    description: 'Papa amarilla con atún, aguacate y mayonesa oriental',
    price: 14.00,
    category: 'comida',
    image: '/images/causa-oriental.png',
  },

  // UTENSILIOS
  {
    id: 'wok-traditional',
    name: 'Wok Tradicional de Carbón 14\"',
    description: 'Auténtico wok de acero al carbón, ideal para técnica ancestral',
    price: 89.99,
    category: 'utensilios',
    image: '/images/wok-tradicional.png',
  },
  {
    id: 'sarten-antiadherente',
    name: 'Sartén Premium Antiadherente',
    description: 'Sartén profesional con revestimiento antiadherente premium',
    price: 59.99,
    category: 'utensilios',
    image: '/images/sarten-chaufa.png',
  },
  {
    id: 'palillos-chifa',
    name: 'Palillos de Bambú Chifa (5 pares)',
    description: 'Juego de palillos auténticos de bambú tradicional chino',
    price: 12.99,
    category: 'utensilios',
    image: '/images/palillos-chifa.png',
  },
  {
    id: 'cuchilla-profesional',
    name: 'Cuchilla Profesional Chifa',
    description: 'Cuchilla de acero inoxidable para corte perfecto de ingredientes',
    price: 45.00,
    category: 'utensilios',
    image: '/images/cuchilla-profesional.png',
  },
  {
    id: 'mortero-piedra',
    name: 'Mortero de Piedra Volcánica',
    description: 'Mortero auténtico para moler especias y condimentos tradicionales',
    price: 28.50,
    category: 'utensilios',
    image: '/images/mortero.png',
  },
  {
    id: 'tabla-corte',
    name: 'Tabla de Corte de Bambú Premium',
    description: 'Tabla eco-friendly de bambú para preparación de alimentos',
    price: 35.00,
    category: 'utensilios',
    image: '/images/tabla-corte.png',
  },
  {
    id: 'juego-complete',
    name: 'Juego Completo Chifa (4 piezas)',
    description: 'Wok, palillos, mortero y tabla de corte en set exclusivo',
    price: 150.00,
    category: 'utensilios',
    image: '/images/juego-completo.png',
  },

  // INGREDIENTES
  {
    id: 'aji-amarillo',
    name: 'Ají Amarillo Fresco Premium (500g)',
    description: 'Ají amarillo fresco recién cosechado de la sierra peruana',
    price: 8.50,
    category: 'ingredientes',
    image: '🌶️',
  },
  {
    id: 'salsa-soya',
    name: 'Salsa de Soya Premium Importada (1L)',
    description: 'Salsa de soya tradicional japonesa para técnica wok perfecta',
    price: 12.00,
    category: 'ingredientes',
    image: '🍶',
  },
  {
    id: 'gengibre',
    name: 'Raíz de Jengibre Fresco (250g)',
    description: 'Jengibre fresco seleccionado para sabor umami auténtico',
    price: 6.50,
    category: 'ingredientes',
    image: '🥔',
  },
  {
    id: 'camote-morado',
    name: 'Camote Morado Orgánico (1kg)',
    description: 'Camote morado fresco de cultivo orgánico peruano',
    price: 7.00,
    category: 'ingredientes',
    image: '🥔',
  },
]

export const getMenuItemsByCategory = (category: MenuItem['category']): MenuItem[] => {
  return menuItems.filter(item => item.category === category)
}

export const getMenuItemById = (id: string): MenuItem | undefined => {
  return menuItems.find(item => item.id === id)
}
