import React from 'react';
import { Phone, Mail, Globe, MapPin, Download, Share2, Instagram } from 'lucide-react';

const DigitalCard: React.FC = () => {
  const contactInfo = {
    name: "Stiggy India",
    title: "Future Streetwear Brand",
    phone: "+91 91045 18311",
    email: "hello@stiggyindia.com",
    website: "www.stiggyindia.com",
    location: "Mumbai, India",
    instagram: "@stiggyindia"
  };

  const handleSaveContact = () => {
    // Generate a simple vCard content
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.name}
TITLE:${contactInfo.title}
TEL;TYPE=WORK,VOICE:${contactInfo.phone}
EMAIL:${contactInfo.email}
URL:${contactInfo.website}
ADR;TYPE=WORK:;;${contactInfo.location}
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'stiggy-contact.vcf';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Stiggy India',
          text: 'Check out Stiggy India - Future Streetwear',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      alert('Link copied to clipboard!');
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
        
        {/* Header / Cover */}
        <div className="h-32 bg-brand-black relative overflow-hidden">
          <div className="absolute inset-0 opacity-30 bg-[url('https://picsum.photos/id/400/800/400')] bg-cover bg-center"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-4xl font-display font-bold text-white tracking-widest uppercase">STIGGY<span className="text-brand-accent">.</span></h1>
          </div>
        </div>

        {/* Avatar / Logo */}
        <div className="relative -mt-12 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full p-1 shadow-lg">
            <div className="w-full h-full bg-black rounded-full flex items-center justify-center text-white font-bold text-2xl font-display border-4 border-white">
              S.
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="text-center px-6 pt-4 pb-8">
          <h2 className="text-2xl font-bold text-gray-900">{contactInfo.name}</h2>
          <p className="text-brand-accent font-medium text-sm tracking-wide uppercase mt-1">{contactInfo.title}</p>
          <p className="text-gray-500 text-sm mt-4 max-w-xs mx-auto">Redefining urban aesthetics with oversized silhouettes and heavy-duty fabrics.</p>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center mt-8">
            <button 
              onClick={handleSaveContact}
              className="flex-1 bg-brand-black text-white py-3 px-4 rounded-xl font-bold text-sm shadow-lg hover:bg-gray-800 transition-transform active:scale-95 flex items-center justify-center gap-2"
            >
              <Download size={18} />
              Save Contact
            </button>
            <button 
              onClick={handleShare}
              className="bg-gray-100 text-gray-900 p-3 rounded-xl font-bold text-sm shadow hover:bg-gray-200 transition-transform active:scale-95"
            >
              <Share2 size={20} />
            </button>
          </div>

          {/* Links */}
          <div className="mt-8 space-y-4">
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '').replace('+', '')}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black shadow-sm group-hover:text-brand-accent transition-colors">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase font-bold">Phone</p>
                <p className="text-sm font-medium text-gray-900">{contactInfo.phone}</p>
              </div>
            </a>

            <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black shadow-sm group-hover:text-brand-accent transition-colors">
                <Mail size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                <p className="text-sm font-medium text-gray-900">{contactInfo.email}</p>
              </div>
            </a>

            <a href={`https://${contactInfo.website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black shadow-sm group-hover:text-brand-accent transition-colors">
                <Globe size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase font-bold">Website</p>
                <p className="text-sm font-medium text-gray-900">{contactInfo.website}</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors group">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-black shadow-sm group-hover:text-brand-accent transition-colors">
                <MapPin size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
                <p className="text-sm font-medium text-gray-900">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Footer Socials */}
          <div className="mt-8 flex justify-center gap-6 text-gray-400">
            <a href="#" className="hover:text-brand-accent transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Globe size={24} /></a>
            <a href="#" className="hover:text-brand-accent transition-colors"><Mail size={24} /></a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DigitalCard;