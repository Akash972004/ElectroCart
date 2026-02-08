
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'phones' | 'laptops' | 'watches' | 'earphones' | 'tablets' | 'cameras' | 'gaming' | 'smart-home' | 'drones' | 'accessories' | 'monitors' | 'networking' | 'others';
  description: string;
  specs: string[];
  featured?: boolean;
  rating: number;
  reviews: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'processing' | 'shipped' | 'delivered' | 'cancelled';
}
