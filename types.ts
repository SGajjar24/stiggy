export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  image: string;
  gallery: string[];
  description: string;
  sizes: string[];
  newArrival?: boolean;
  bestSeller?: boolean;
}

export interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  products?: Product[]; // Optional recommended products
}
