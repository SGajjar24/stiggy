import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col justify-center bg-brand-black text-white">
      {/* Custom Styles for Animations and Text Effects */}
      <style>{`
        .text-outline {
          -webkit-text-stroke: 2px white;
          color: transparent;
          transition: all 0.5s ease;
        }
        .text-outline:hover {
          color: white;
          text-shadow: 0 0 30px rgba(255,255,255,0.8);
        }
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes zoomInOut {
            0% { transform: scale(1); }
            50% { transform: scale(1.15); }
            100% { transform: scale(1); }
        }
        .animate-zoom {
            animation: zoomInOut 25s infinite ease-in-out;
        }
        .animate-enter {
          opacity: 0; /* Start hidden */
          animation: slideUpFade 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
      `}</style>

      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-brand-black z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop"
          alt="Streetwear Background"
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-30 text-center px-4 max-w-6xl mx-auto pt-48 pb-28">
        {/* Badge */}
        <div className="animate-enter">
          <span className="inline-block py-1 px-4 border border-brand-accent text-brand-accent text-xs font-bold tracking-[0.25em] uppercase mb-8 backdrop-blur-md bg-black/30 rounded-full hover:bg-brand-accent hover:text-white transition-colors cursor-default hover:scale-105 transform duration-300 shadow-lg">
            New Collection Drop 004
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-display font-bold text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-tight leading-[0.9] mb-8 perspective-text">
          <span className="block text-outline animate-enter delay-100 cursor-default hover:scale-[1.02] transform transition-transform duration-500 origin-center">
            Future
          </span>
          <span className="block text-white animate-enter delay-200 hover:text-gray-200 transition-colors duration-300 tracking-wider">
            Streetwear
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-xl mx-auto text-gray-300 mb-12 text-sm md:text-lg tracking-wide animate-enter delay-300 font-light drop-shadow-md">
          Redefining urban aesthetics with oversized silhouettes and heavy-duty fabrics. Designed in India, worn globally.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-enter delay-400 mb-20">
          <Button to="/shop" variant="white">
            Shop Now
          </Button>
          <Button to="/shop?cat=New" variant="outline" className="text-white border-white hover:bg-white hover:text-black backdrop-blur-sm bg-black/20">
            <span>Lookbook</span>
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {/* Scrolling Marquee */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-accent text-brand-black overflow-hidden py-3 z-20 border-t border-brand-black">
        <div className="animate-marquee whitespace-nowrap flex gap-8 font-bold uppercase tracking-widest text-sm">
          {Array(10).fill("Free Shipping on All Orders • Limited Edition Drops • Worldwide Shipping • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;