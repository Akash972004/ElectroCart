
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'phones' | 'laptops' | 'watches' | 'earphones' | 'others';
  description: string;
  specs: string[];
  featured?: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  date: string;
  status: 'processing' | 'shipped' | 'delivered';
}
