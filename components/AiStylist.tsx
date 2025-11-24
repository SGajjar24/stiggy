import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Shirt } from 'lucide-react';
import { chatWithStylist } from '../services/geminiService';
import { ChatMessage, Product } from '../types';
import { PRODUCTS } from '../constants';
import { Link } from 'react-router-dom';

const AiStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: "Yo! I'm your Stiggy AI Stylist. Looking for a fresh fit? Ask me anything!" }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    const response = await chatWithStylist(userMsg.text);
    
    // Map IDs back to full product objects
    const recommendedProducts = response.productIds
      .map(id => PRODUCTS.find(p => p.id === id))
      .filter((p): p is Product => p !== undefined);

    const modelMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: response.text,
      products: recommendedProducts
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 bg-brand-black text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        >
          <Sparkles className="animate-pulse" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-black px-3 py-1 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
            Ask AI Stylist
          </span>
        </button>
      )}

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] max-w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-500 transform origin-bottom-right border border-gray-100 ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
        
        {/* Header */}
        <div className="bg-brand-black text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles size={18} className="text-brand-accent" />
            <h3 className="font-bold tracking-wide">Stiggy Stylist</h3>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-brand-black text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none shadow-sm'}`}>
                {msg.text}
              </div>
              
              {/* Product Recommendations Card */}
              {msg.products && msg.products.length > 0 && (
                <div className="mt-2 flex gap-2 overflow-x-auto w-full pb-2 snap-x">
                  {msg.products.map(p => (
                    <Link to={`/product/${p.id}`} key={p.id} className="min-w-[140px] bg-white rounded-lg p-2 border border-gray-100 shadow-sm snap-start flex-shrink-0 hover:border-brand-accent transition-colors block">
                      <div className="aspect-[3/4] bg-gray-100 rounded mb-2 overflow-hidden">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-[10px] font-bold truncate uppercase">{p.name}</p>
                      <p className="text-[10px] text-gray-500">₹{p.price}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          {isLoading && (
            <div className="flex items-start">
               <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                 <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
               </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <form onSubmit={handleSend} className="p-3 border-t bg-white rounded-b-2xl flex gap-2">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Type 'Show me cool hoodies'..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-black"
          />
          <button 
            type="submit" 
            disabled={!inputText.trim() || isLoading}
            className="bg-brand-black text-white p-2 rounded-full disabled:opacity-50 hover:bg-brand-accent transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </>
  );
};

export default AiStylist;
