import React from 'react';
import { X, Minus, Plus, Trash2, MessageCircle } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, size: string, delta: number) => void;
  onRemoveItem: (id: string, size: string) => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem 
}) => {
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const phoneNumber = "919104518311";
    let message = "Hi Stiggy, I want to place an order:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} (${item.selectedSize}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}\n`;
    });
    message += `\nTotal: ₹${subtotal}`;
    
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div className={`fixed inset-y-0 right-0 max-w-md w-full bg-white z-[110] transform transition-transform duration-300 flex flex-col shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-display font-bold uppercase tracking-wide">Shopping Bag ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">🛍️</span>
              </div>
              <p className="text-gray-500 font-medium">Your bag is empty.</p>
              <button 
                onClick={onClose}
                className="px-6 py-3 bg-brand-black text-white font-bold uppercase text-xs tracking-widest hover:bg-brand-accent transition-colors"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                <div className="w-20 h-24 bg-gray-100 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <h3 className="font-bold text-sm uppercase pr-4">{item.name}</h3>
                      <button 
                        onClick={() => onRemoveItem(item.id, item.selectedSize)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Size: {item.selectedSize}</p>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center border border-gray-300">
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, -1)}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="px-2 text-xs font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => onUpdateQuantity(item.id, item.selectedSize, 1)}
                        className="p-1 hover:bg-gray-100"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <span className="font-bold text-sm">₹{item.price * item.quantity}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium text-gray-600">Subtotal</span>
              <span className="font-bold text-xl">₹{subtotal}</span>
            </div>
            <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout.</p>
            <button 
              onClick={handleWhatsAppCheckout}
              className="w-full py-4 bg-[#25D366] text-white font-bold uppercase tracking-widest hover:bg-[#128C7E] transition-colors flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;