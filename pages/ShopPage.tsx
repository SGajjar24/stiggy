import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Filter } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { PRODUCTS, CATEGORIES } from '../constants';

const ShopPage: React.FC = () => {
    const [searchParams] = new URLSearchParams(useLocation().search);
    const categoryParam = new URLSearchParams(useLocation().search).get('cat');
    const [activeCategory, setActiveCategory] = useState(categoryParam || 'All');

    // Update active category if URL param changes
    useEffect(() => {
        setActiveCategory(categoryParam || 'All');
    }, [categoryParam]);

    const filteredProducts = PRODUCTS.filter(product => {
        if (activeCategory === 'All') return true;
        if (activeCategory === 'New') return product.newArrival;
        if (activeCategory === 'Sale') return product.originalPrice;
        return product.category === activeCategory;
    });

    return (
        <div className="pt-32 pb-20 container mx-auto px-4 md:px-8 min-h-screen">
            <SEO
                title="Shop Collection"
                description="Explore the latest streetwear collection from Stiggy India. Hoodies, oversized tees, and more."
                url="https://stiggy.in/shop"
            />
            <h1 className="font-display font-bold text-5xl md:text-7xl uppercase mb-8">Shop Collection</h1>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-12 border-b border-gray-200 pb-6 sticky top-[60px] bg-white/95 backdrop-blur z-[90] pt-4 overflow-x-auto border-t border-transparent">
                <div className="flex items-center gap-2 mr-4 text-gray-500 flex-shrink-0">
                    <Filter size={20} />
                    <span className="uppercase text-sm font-bold tracking-widest">Filter By:</span>
                </div>
                <div className="flex gap-2">
                    {['All', 'New', 'Sale', ...CATEGORIES.filter(c => c !== 'All')].map(cat => (
                        <Link
                            key={cat}
                            to={cat === 'All' ? '/shop' : `/shop?cat=${cat}`}
                            className={`px-4 py-2 rounded-full border text-sm font-bold uppercase tracking-wide transition-all whitespace-nowrap ${activeCategory === cat
                                ? 'bg-brand-black text-white border-brand-black'
                                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-black'
                                }`}
                        >
                            {cat}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 md:gap-x-8 gap-y-12">
                    {filteredProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <h3 className="text-2xl font-bold text-gray-400 uppercase">No products found in this category.</h3>
                    <Link to="/shop" className="inline-block mt-4 text-brand-accent underline">View all products</Link>
                </div>
            )}
        </div>
    );
};

export default ShopPage;
