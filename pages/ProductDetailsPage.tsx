import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Star, MessageCircle, Minus, Plus } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { CartItem } from '../types';
import SEO from '../components/SEO';

const ProductDetailsPage: React.FC<{ onAddToCart: (item: CartItem) => void }> = ({ onAddToCart }) => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === id);
    const [selectedSize, setSelectedSize] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const [mainImage, setMainImage] = useState<string>('');

    useEffect(() => {
        if (product) {
            setMainImage(product.image);
            setSelectedSize(''); // Reset size on product change
            setQuantity(1);
        }
    }, [product]);

    if (!product) return <div className="pt-32 text-center">Product not found</div>;

    const handleAddToCart = () => {
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        onAddToCart({ ...product, selectedSize, quantity });
    };

    const handleWhatsAppOrder = () => {
        if (!selectedSize) {
            alert('Please select a size and quantity first.');
            return;
        }

        const phoneNumber = "919104518311";
        // We construct a simple link because we are using MemoryRouter which doesn't change the browser URL bar
        const productLink = `${window.location.origin}/#/product/${product.id}`;
        const message = `Hi Stiggy, I want to order:\n*${product.name}*\nSize: ${selectedSize}\nQty: ${quantity}\nPrice: ₹${product.price * quantity}\nLink: ${productLink}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 md:px-8">
            <SEO
                title={product.name}
                description={product.description}
                image={product.image}
                url={`https://stiggy.in/product/${product.id}`}
            />
            <div className="mb-6">
                <Link to="/shop" className="inline-flex items-center text-gray-500 hover:text-black transition-colors">
                    <ArrowLeft size={16} className="mr-2" /> Back to Shop
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Images */}
                <div className="space-y-4">
                    <div className="aspect-[3/4] bg-gray-100 overflow-hidden">
                        <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                        {[product.image, ...(product.gallery || [])].map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`aspect-square bg-gray-100 overflow-hidden border-2 ${mainImage === img ? 'border-brand-black' : 'border-transparent'}`}
                            >
                                <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Details */}
                <div className="flex flex-col h-full">
                    <h1 className="font-display font-bold text-3xl md:text-5xl uppercase mb-2 leading-none">{product.name}</h1>
                    <div className="flex items-center gap-4 mb-6">
                        <span className="text-2xl font-bold">₹{product.price}</span>
                        {product.originalPrice && (
                            <span className="text-gray-400 text-lg line-through">₹{product.originalPrice}</span>
                        )}
                        {product.originalPrice && (
                            <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 uppercase rounded">Sale</span>
                        )}
                    </div>

                    <div className="flex items-center gap-1 mb-6 text-yellow-500 text-sm">
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <Star fill="currentColor" size={16} />
                        <span className="text-gray-400 ml-2 text-xs text-black">(24 Reviews)</span>
                    </div>

                    <p className="text-gray-600 mb-8 leading-relaxed">{product.description}</p>

                    <div className="mb-8">
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-sm uppercase">Select Size</span>
                            <button className="text-gray-400 text-xs underline hover:text-black">Size Guide</button>
                        </div>
                        <div className="flex flex-wrap gap-3 mb-6">
                            {product.sizes.map(size => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`w-12 h-12 flex items-center justify-center border font-bold text-sm transition-all ${selectedSize === size
                                        ? 'bg-brand-black text-white border-brand-black'
                                        : 'bg-white text-black border-gray-200 hover:border-black'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        <div className="flex justify-between items-center mb-3">
                            <span className="font-bold text-sm uppercase">Quantity</span>
                        </div>
                        <div className="flex items-center border border-gray-300 w-32">
                            <button
                                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                className="p-3 hover:bg-gray-100 transition-colors"
                            >
                                <Minus size={16} />
                            </button>
                            <span className="flex-1 text-center font-bold">{quantity}</span>
                            <button
                                onClick={() => setQuantity(quantity + 1)}
                                className="p-3 hover:bg-gray-100 transition-colors"
                            >
                                <Plus size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="mt-auto flex flex-col gap-3">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-brand-black text-white py-4 font-bold text-lg uppercase tracking-widest hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-3"
                        >
                            {selectedSize ? 'Add to Cart' : 'Select Size'}
                        </button>
                        <button
                            onClick={handleWhatsAppOrder}
                            className={`w-full py-4 font-bold text-lg uppercase tracking-widest transition-colors duration-300 flex items-center justify-center gap-3 ${selectedSize
                                ? 'bg-[#25D366] text-white hover:bg-[#128C7E]'
                                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                                }`}
                        >
                            <MessageCircle size={20} />
                            Order on WhatsApp
                        </button>
                        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500 uppercase tracking-wider">
                            <Check size={14} className="text-green-500" />
                            <span>Free shipping on orders over ₹2999</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
