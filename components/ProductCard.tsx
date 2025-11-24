import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative flex flex-col">
      <Link to={`/product/${product.id}`} className="block overflow-hidden bg-gray-100 relative aspect-[3/4]">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {product.newArrival && (
          <span className="absolute top-2 left-2 bg-brand-black text-white text-[10px] font-bold uppercase px-2 py-1">New</span>
        )}
        {product.originalPrice && (
          <span className="absolute top-2 right-2 bg-red-500 text-white text-[10px] font-bold uppercase px-2 py-1">Sale</span>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        
        {/* Quick Add Overlay (Desktop) */}
        <button className="absolute bottom-4 left-4 right-4 bg-white text-black font-bold uppercase text-xs py-3 translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-lg hidden md:block">
          View Details
        </button>
      </Link>

      <div className="mt-4 flex justify-between items-start">
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-black group-hover:text-brand-accent transition-colors">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
          <p className="text-xs text-gray-500 mt-1">{product.category}</p>
        </div>
        <button className="text-gray-400 hover:text-red-500 transition-colors">
          <Heart size={18} />
        </button>
      </div>
      
      <div className="mt-2 flex items-center gap-2">
        <span className="font-bold">₹{product.price}</span>
        {product.originalPrice && (
          <span className="text-gray-400 text-sm line-through">₹{product.originalPrice}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
