import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onOpenCart }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Check if we are on the homepage
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  // Determine styles based on route and scroll state
  // Transparent only on Home when at the top. Otherwise white background.
  const isTransparent = isHome && !isScrolled;

  const navClasses = isTransparent
    ? 'bg-black/20 backdrop-blur-md py-5 border-b border-white/10'
    : 'bg-white border-b border-gray-100 py-3 shadow-sm';

  const textColorClass = isTransparent ? 'text-white' : 'text-brand-black';
  const logoColorClass = isTransparent ? 'text-white' : 'text-brand-black';
  const iconHoverClass = isTransparent ? 'hover:bg-white/10' : 'hover:bg-gray-100';

  return (
    <>
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${navClasses}`}>
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textColorClass} transition-colors`}
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className={`text-3xl md:text-4xl font-display font-bold tracking-tighter uppercase ${logoColorClass} transition-colors`}>
            STIGGY<span className="text-brand-accent">.</span>
          </Link>

          {/* Desktop Links */}
          <div className={`hidden md:flex items-center space-x-8 ${textColorClass}`}>
            <Link to="/" className="font-medium hover:text-brand-accent transition-colors uppercase tracking-wider text-sm">Home</Link>
            <Link to="/shop" className="font-medium hover:text-brand-accent transition-colors uppercase tracking-wider text-sm">Shop All</Link>
            <Link to="/shop?cat=New" className="font-medium hover:text-brand-accent transition-colors uppercase tracking-wider text-sm">New Drops</Link>
            <Link to="/shop?cat=Sale" className={`font-medium transition-colors uppercase tracking-wider text-sm ${isTransparent ? 'text-red-400' : 'text-red-500'}`}>Sale</Link>
            <Link to="/contact-us" className="font-medium hover:text-brand-accent transition-colors uppercase tracking-wider text-sm">Contact</Link>
          </div>

          {/* Icons */}
          <div className={`flex items-center space-x-4 ${textColorClass}`}>
            <Link to="/visiting-card" className={`p-2 rounded-full transition-colors hidden sm:block ${iconHoverClass}`} title="Digital Visiting Card">
              <Phone size={20} strokeWidth={1.5} />
            </Link>
            <button
              className="p-2 relative group"
              onClick={onOpenCart}
            >
              <ShoppingBag size={24} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 z-[100] transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsMobileMenuOpen(false)} />

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 left-0 h-full w-[80%] max-w-xs bg-white z-[110] transform transition-transform duration-300 md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-5 flex justify-between items-center border-b">
          <span className="font-display font-bold text-2xl text-brand-black">MENU</span>
          <button onClick={() => setIsMobileMenuOpen(false)} className="text-brand-black">
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col p-6 space-y-6 text-brand-black">
          <Link to="/" onClick={handleMobileLinkClick} className="text-xl font-bold uppercase tracking-wide">Home</Link>
          <Link to="/shop" onClick={handleMobileLinkClick} className="text-xl font-bold uppercase tracking-wide">Shop Collection</Link>
          <Link to="/shop?cat=Hoodies" onClick={handleMobileLinkClick} className="text-xl font-bold uppercase tracking-wide">Hoodies</Link>
          <Link to="/shop?cat=T-Shirts" onClick={handleMobileLinkClick} className="text-xl font-bold uppercase tracking-wide">Oversized Tees</Link>
          <Link to="/shop?cat=Accessories" onClick={handleMobileLinkClick} className="text-xl font-bold uppercase tracking-wide">Accessories</Link>
          <div className="h-px bg-gray-200 w-full my-4"></div>
          <Link to="/contact-us" onClick={handleMobileLinkClick} className="text-gray-500 font-medium">Contact Us</Link>
          <Link to="/visiting-card" onClick={handleMobileLinkClick} className="text-gray-500 font-medium">Digital Visiting Card</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;