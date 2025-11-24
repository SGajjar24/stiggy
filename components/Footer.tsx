import React, { useState } from 'react';
import { Instagram, Twitter, Facebook, Phone, X, Package, Clock, History } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const [isShippingModalOpen, setIsShippingModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleShippingInquiry = (type: 'current' | 'past') => {
    const phoneNumber = "919104518311";
    let message = "";
    
    if (type === 'current') {
      message = "Hi Stiggy, I placed an order recently and would like to know its current shipping status.";
    } else {
      message = "Hi Stiggy, I need help finding details about my past orders.";
    }
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    setIsShippingModalOpen(false);
  };

  const handleNewsletterJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      navigate(`/contact-us?subject=Newsletter&email=${encodeURIComponent(email)}`);
    }
  };

  return (
    <>
      <footer className="bg-brand-black text-white pt-16 pb-8">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-1">
              <h2 className="text-4xl font-display font-bold mb-6">STIGGY.</h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Born on the streets, designed for the future. Stiggy India brings you premium oversized fits and cutting-edge designs.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white transition-all duration-300 rounded-full">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white transition-all duration-300 rounded-full">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white transition-all duration-300 rounded-full">
                  <Facebook size={18} />
                </a>
                <Link to="/visiting-card" className="w-10 h-10 border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] hover:border-white transition-all duration-300 rounded-full">
                  <Phone size={18} />
                </Link>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">Shop</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><Link to="/shop?cat=New" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">New Arrivals</Link></li>
                <li><Link to="/shop?cat=All" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Best Sellers</Link></li>
                <li><Link to="/shop?cat=T-Shirts" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Oversized Tees</Link></li>
                <li><Link to="/shop?cat=Bottoms" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Bottoms</Link></li>
                <li><Link to="/shop?cat=Accessories" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Accessories</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">Help</h3>
              <ul className="space-y-3 text-sm text-gray-400">
                <li>
                  <button onClick={() => setIsShippingModalOpen(true)} className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2 text-left">
                    Shipping Info
                  </button>
                </li>
                <li><Link to="/size-guide" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Size Guide</Link></li>
                <li><Link to="/contact-us" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Contact Us</Link></li>
                <li><Link to="/visiting-card" className="hover:text-white transition-all duration-300 inline-block hover:translate-x-2">Visiting Card</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold uppercase tracking-widest mb-6 text-sm">Newsletter</h3>
              <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
              <form onSubmit={handleNewsletterJoin} className="flex border-b border-gray-700 pb-2">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email" 
                  className="bg-transparent w-full focus:outline-none text-sm text-white"
                  required
                />
                <button type="submit" className="text-brand-accent uppercase font-bold text-xs tracking-widest hover:text-white transition-colors">Join</button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Stiggy India. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="hover:text-white transition-colors hover:underline">Privacy Policy</Link>
              <Link to="/terms-of-service" className="hover:text-white transition-colors hover:underline">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Shipping Info Modal */}
      {isShippingModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsShippingModalOpen(false)}></div>
          <div className="relative bg-white text-black p-8 rounded-2xl w-full max-w-sm shadow-2xl animate-in fade-in zoom-in duration-200">
            <button 
              onClick={() => setIsShippingModalOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4 text-brand-black">
                <Package size={24} />
              </div>
              <h3 className="text-xl font-display font-bold uppercase tracking-wide">Shipping Inquiry</h3>
              <p className="text-center text-sm text-gray-500 mt-2">
                Please select the type of order you need help with. We'll redirect you to WhatsApp support.
              </p>
            </div>

            <div className="space-y-3">
              <button 
                onClick={() => handleShippingInquiry('current')}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-brand-black hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <Clock size={18} className="text-brand-accent" />
                  <div className="text-left">
                    <span className="block font-bold text-sm uppercase">Current Order</span>
                    <span className="text-xs text-gray-500">Tracking & Delivery Status</span>
                  </div>
                </div>
              </button>

              <button 
                onClick={() => handleShippingInquiry('past')}
                className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:border-brand-black hover:bg-gray-50 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <History size={18} className="text-gray-500 group-hover:text-brand-black" />
                  <div className="text-left">
                    <span className="block font-bold text-sm uppercase">Past Order</span>
                    <span className="text-xs text-gray-500">History & Invoice</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;