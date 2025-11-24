import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Cyber Punk Oversized Tee',
    price: 1299,
    originalPrice: 1999,
    category: 'T-Shirts',
    image: 'https://picsum.photos/id/106/800/1000',
    gallery: ['https://picsum.photos/id/106/800/1000', 'https://picsum.photos/id/111/800/1000'],
    description: 'Heavyweight cotton oversized t-shirt featuring futuristic cyber-punk graphic prints. 240 GSM French Terry.',
    sizes: ['S', 'M', 'L', 'XL'],
    newArrival: true,
    bestSeller: true
  },
  {
    id: 'p2',
    name: 'Acid Wash Cargo Joggers',
    price: 2499,
    category: 'Bottoms',
    image: 'https://picsum.photos/id/145/800/1000',
    gallery: ['https://picsum.photos/id/145/800/1000', 'https://picsum.photos/id/177/800/1000'],
    description: 'Utility focused cargo joggers with 6 pockets and adjustable ankle straps. Acid wash finish for vintage look.',
    sizes: ['M', 'L', 'XL'],
    bestSeller: true
  },
  {
    id: 'p3',
    name: 'Neon Tokyo Hoodie',
    price: 3499,
    originalPrice: 4999,
    category: 'Hoodies',
    image: 'https://picsum.photos/id/338/800/1000',
    gallery: ['https://picsum.photos/id/338/800/1000', 'https://picsum.photos/id/342/800/1000'],
    description: 'Premium fleece hoodie with high-density neon puff print. Perfect for urban winter nights.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    newArrival: true
  },
  {
    id: 'p4',
    name: 'Street Soul Varsity Jacket',
    price: 4999,
    category: 'Outerwear',
    image: 'https://picsum.photos/id/203/800/1000',
    gallery: ['https://picsum.photos/id/203/800/1000'],
    description: 'Classic varsity silhouette with vegan leather sleeves and chenille patches.',
    sizes: ['L', 'XL'],
    newArrival: true
  },
  {
    id: 'p5',
    name: 'Minimalist Boxy Tee - Black',
    price: 999,
    category: 'T-Shirts',
    image: 'https://picsum.photos/id/325/800/1000',
    gallery: ['https://picsum.photos/id/325/800/1000'],
    description: 'Essential boxy fit t-shirt in jet black. Drop shoulders and wide sleeves.',
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'p6',
    name: 'Graffiti Print Resort Shirt',
    price: 1899,
    category: 'T-Shirts',
    image: 'https://picsum.photos/id/435/800/1000',
    gallery: ['https://picsum.photos/id/435/800/1000'],
    description: 'Cuban collar shirt with all-over graffiti print. Lightweight viscose fabric.',
    sizes: ['M', 'L', 'XL']
  },
  {
    id: 'p7',
    name: 'Urban Utility Vest',
    price: 2199,
    category: 'Outerwear',
    image: 'https://picsum.photos/id/447/800/1000',
    gallery: ['https://picsum.photos/id/447/800/1000'],
    description: 'Tech-wear inspired utility vest with multiple functional pockets and buckles.',
    sizes: ['One Size']
  },
  {
    id: 'p8',
    name: 'Distressed Denim Shorts',
    price: 1599,
    category: 'Bottoms',
    image: 'https://picsum.photos/id/535/800/1000',
    gallery: ['https://picsum.photos/id/535/800/1000'],
    description: 'Heavy distressed denim shorts with raw hem. Grunge aesthetic.',
    sizes: ['30', '32', '34', '36']
  },
  {
    id: 'p9',
    name: 'Stiggy Signature Cap',
    price: 799,
    category: 'Accessories',
    image: 'https://picsum.photos/id/823/800/1000',
    gallery: ['https://picsum.photos/id/823/800/1000'],
    description: 'Structured 6-panel cap with 3D embroidered Stiggy logo. Adjustable strap.',
    sizes: ['One Size'],
    bestSeller: true
  },
  {
    id: 'p10',
    name: 'Heavy Metal Chain',
    price: 599,
    category: 'Accessories',
    image: 'https://picsum.photos/id/656/800/1000',
    gallery: ['https://picsum.photos/id/656/800/1000'],
    description: 'Stainless steel cuban link chain. Anti-tarnish coating.',
    sizes: ['One Size'],
    newArrival: true
  },
  {
    id: 'p11',
    name: 'Essential Grey Hoodie',
    price: 2999,
    category: 'Hoodies',
    image: 'https://picsum.photos/id/349/800/1000',
    gallery: ['https://picsum.photos/id/349/800/1000'],
    description: 'Everyday comfort. Soft fleece lining with a relaxed fit. The perfect grey hoodie.',
    sizes: ['M', 'L', 'XL'],
  }
];

export const CATEGORIES = ['All', 'T-Shirts', 'Hoodies', 'Bottoms', 'Outerwear', 'Accessories'];