import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';
import { PRODUCTS } from '../constants';

const HomePage: React.FC = () => {
    const newArrivals = PRODUCTS.filter(p => p.newArrival).slice(0, 4);
    const bestSellers = PRODUCTS.filter(p => p.bestSeller).slice(0, 4);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            navigate(`/contact-us?subject=Newsletter&email=${encodeURIComponent(email)}`);
        }
    };

    return (
        <>
            <SEO
                title="Home"
                description="Stiggy India - Redefining urban aesthetics with oversized silhouettes and heavy-duty fabrics. Designed in India, worn globally."
            />
            <Hero />

            {/* Featured Section */}
            <section className="py-20 container mx-auto px-4 md:px-8">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-2">Latest Drops</h2>
                        <p className="text-gray-500">Fresh from the studio. Limited quantities.</p>
                    </div>
                    <Link to="/shop?cat=New" className="hidden md:block text-brand-black font-bold uppercase tracking-widest border-b-2 border-brand-black pb-1 hover:text-brand-accent hover:border-brand-accent transition-colors">
                        View All
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {newArrivals.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>

            {/* Banner Section */}
            <section className="py-10">
                <div className="bg-brand-black text-white py-24 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://picsum.photos/id/117/1920/1080')] bg-cover bg-center"></div>
                    <div className="container mx-auto px-4 relative z-10 text-center">
                        <h2 className="font-display font-bold text-5xl md:text-7xl uppercase mb-6">Join The Cult</h2>
                        <p className="max-w-xl mx-auto text-gray-400 mb-8 text-lg">
                            Sign up for early access to drops, exclusive discounts, and invites to pop-up events across India.
                        </p>
                        <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="YOUR EMAIL ADDRESS"
                                className="flex-1 bg-transparent border border-white p-4 text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent"
                                required
                            />
                            <button type="submit" className="bg-brand-accent text-white px-8 py-4 font-bold uppercase tracking-widest hover:bg-white hover:text-brand-black transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-20 container mx-auto px-4 md:px-8">
                <h2 className="font-display font-bold text-4xl md:text-5xl uppercase mb-10 text-center">Trending Now</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {bestSellers.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </section>
        </>
    );
};

export default HomePage;
