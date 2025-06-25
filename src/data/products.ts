
import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'iPhone 15 Pro',
    price: 999,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop',
    category: 'phones',
    description: 'The most advanced iPhone ever with titanium design and A17 Pro chip.',
    specs: ['A17 Pro chip', '6.1-inch display', 'Pro camera system', '128GB storage'],
    featured: true
  },
  {
    id: '2',
    name: 'MacBook Pro 14"',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=500&fit=crop',
    category: 'laptops',
    description: 'Supercharged by M3 Pro chip for incredible performance.',
    specs: ['M3 Pro chip', '14-inch Retina display', '16GB RAM', '512GB SSD'],
    featured: true
  },
  {
    id: '3',
    name: 'Apple Watch Series 9',
    price: 399,
    image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&h=500&fit=crop',
    category: 'watches',
    description: 'Advanced health features and the most powerful Apple Watch yet.',
    specs: ['S9 SiP chip', 'Always-On Retina display', 'Health sensors', 'GPS + Cellular'],
    featured: true
  },
  {
    id: '4',
    name: 'AirPods Pro',
    price: 249,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop',
    category: 'earphones',
    description: 'Immersive sound with active noise cancellation.',
    specs: ['Active Noise Cancellation', 'Spatial Audio', 'H2 chip', 'USB-C charging'],
    featured: true
  },
  {
    id: '5',
    name: 'Samsung Galaxy S24',
    price: 799,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&h=500&fit=crop',
    category: 'phones',
    description: 'AI-powered smartphone with incredible camera capabilities.',
    specs: ['Snapdragon 8 Gen 3', '6.2-inch display', 'Triple camera', '256GB storage']
  },
  {
    id: '6',
    name: 'Dell XPS 13',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=500&fit=crop',
    category: 'laptops',
    description: 'Ultra-portable laptop with stunning InfinityEdge display.',
    specs: ['Intel Core i7', '13.4-inch display', '16GB RAM', '512GB SSD']
  },
  {
    id: '7',
    name: 'Samsung Watch 6',
    price: 329,
    image: 'https://images.unsplash.com/photo-1434493907317-a46b5bbe7834?w=500&h=500&fit=crop',
    category: 'watches',
    description: 'Advanced smartwatch with comprehensive health tracking.',
    specs: ['Exynos W930', 'Super AMOLED display', 'Health sensors', 'Wear OS']
  },
  {
    id: '8',
    name: 'Sony WH-1000XM5',
    price: 349,
    image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&h=500&fit=crop',
    category: 'earphones',
    description: 'Industry-leading noise canceling headphones.',
    specs: ['30-hour battery', 'Quick Charge', 'Multipoint connection', 'Touch controls']
  }
];
