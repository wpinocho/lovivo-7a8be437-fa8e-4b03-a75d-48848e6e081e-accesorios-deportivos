import { Product, Category } from "@/types/product";

export const categories: Category[] = [
  {
    id: "running",
    name: "Running",
    subcategories: ["Zapatillas", "Ropa", "Accesorios"],
    icon: "🏃‍♂️"
  },
  {
    id: "fitness",
    name: "Fitness",
    subcategories: ["Pesas", "Máquinas", "Accesorios"],
    icon: "💪"
  },
  {
    id: "football",
    name: "Fútbol",
    subcategories: ["Botas", "Balones", "Ropa"],
    icon: "⚽"
  },
  {
    id: "basketball",
    name: "Baloncesto",
    subcategories: ["Zapatillas", "Balones", "Ropa"],
    icon: "🏀"
  },
  {
    id: "cycling",
    name: "Ciclismo",
    subcategories: ["Bicicletas", "Cascos", "Accesorios"],
    icon: "🚴‍♂️"
  },
  {
    id: "swimming",
    name: "Natación",
    subcategories: ["Bañadores", "Gafas", "Accesorios"],
    icon: "🏊‍♂️"
  }
];

export const products: Product[] = [
  {
    id: "1",
    name: "Zapatillas Running Nike Air Zoom",
    price: 129.99,
    originalPrice: 159.99,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop",
    category: "running",
    subcategory: "Zapatillas",
    brand: "Nike",
    rating: 4.5,
    reviews: 234,
    description: "Zapatillas de running con tecnología Air Zoom para máxima comodidad y rendimiento.",
    features: ["Tecnología Air Zoom", "Suela de goma resistente", "Transpirable"],
    inStock: true,
    discount: 19
  },
  {
    id: "2",
    name: "Mancuernas Ajustables 20kg",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop",
    category: "fitness",
    subcategory: "Pesas",
    brand: "Decathlon",
    rating: 4.3,
    reviews: 156,
    description: "Set de mancuernas ajustables perfectas para entrenamientos en casa.",
    features: ["Peso ajustable", "Agarre ergonómico", "Compactas"],
    inStock: true
  },
  {
    id: "3",
    name: "Balón Fútbol Adidas Tango",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1614632537190-23e4b2e69c88?w=400&h=400&fit=crop",
    category: "football",
    subcategory: "Balones",
    brand: "Adidas",
    rating: 4.7,
    reviews: 89,
    description: "Balón de fútbol oficial con diseño clásico Tango.",
    features: ["Tamaño oficial", "Cuero sintético", "Cosido a máquina"],
    inStock: true
  },
  {
    id: "4",
    name: "Zapatillas Baloncesto Jordan",
    price: 179.99,
    originalPrice: 199.99,
    image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=400&h=400&fit=crop",
    category: "basketball",
    subcategory: "Zapatillas",
    brand: "Jordan",
    rating: 4.8,
    reviews: 312,
    description: "Zapatillas de baloncesto de alto rendimiento con tecnología Air.",
    features: ["Tecnología Air", "Soporte tobillo", "Tracción superior"],
    inStock: true,
    discount: 10
  },
  {
    id: "5",
    name: "Casco Ciclismo Specialized",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    category: "cycling",
    subcategory: "Cascos",
    brand: "Specialized",
    rating: 4.6,
    reviews: 78,
    description: "Casco de ciclismo ligero con excelente ventilación.",
    features: ["Ultraligero", "Ventilación optimizada", "Ajuste preciso"],
    inStock: true
  },
  {
    id: "6",
    name: "Gafas Natación Speedo",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&h=400&fit=crop",
    category: "swimming",
    subcategory: "Gafas",
    brand: "Speedo",
    rating: 4.4,
    reviews: 145,
    description: "Gafas de natación con lentes anti-vaho y protección UV.",
    features: ["Anti-vaho", "Protección UV", "Ajuste cómodo"],
    inStock: true
  },
  {
    id: "7",
    name: "Camiseta Running Adidas",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
    category: "running",
    subcategory: "Ropa",
    brand: "Adidas",
    rating: 4.2,
    reviews: 203,
    description: "Camiseta técnica de running con tecnología Climalite.",
    features: ["Tecnología Climalite", "Transpirable", "Ajuste cómodo"],
    inStock: true
  },
  {
    id: "8",
    name: "Esterilla Yoga Premium",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1506629905607-d9c297d3f49f?w=400&h=400&fit=crop",
    category: "fitness",
    subcategory: "Accesorios",
    brand: "Decathlon",
    rating: 4.5,
    reviews: 167,
    description: "Esterilla de yoga antideslizante de alta calidad.",
    features: ["Antideslizante", "Grosor 6mm", "Ecológica"],
    inStock: true
  }
];