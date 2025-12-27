import React from 'react';
import { Zap, MessageSquare, Phone } from 'lucide-react';
import { profile } from '../data/profile';
import { openWhatsApp } from '../utils/helpers';

interface HeroProps {
  setShowProfileModal: (show: boolean) => void;
}

const Hero: React.FC<HeroProps> = ({ setShowProfileModal }) => {
  return (
    <section className="relative pt-48 pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none animate-pulse"></div>
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-600/10 border border-blue-600/20 text-blue-400 text-[10px] font-bold tracking-widest uppercase mb-8">
            <Zap size={14} /> Multi-Region IT Infrastructure Lead
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Digital</span> Sovereignty.
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl border-l-2 border-blue-600/30 pl-6">
            {profile.summary}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => setShowProfileModal(true)}
              className="flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-2xl hover:bg-blue-500 transition-all font-bold shadow-xl shadow-blue-600/20"
            >
              View Detailed Bio
            </button>
            <div className="flex gap-2">
              <button 
                onClick={() => openWhatsApp(profile.contact.phones[0].number)}
                className="p-4 bg-emerald-600/10 border border-emerald-600/20 text-emerald-400 rounded-2xl hover:bg-emerald-600 hover:text-white transition-all"
                title="WhatsApp Me"
              >
                <MessageSquare size={24} />
              </button>
              <a 
                href={`tel:${profile.contact.phones[0].number}`}
                className="p-4 bg-blue-600/10 border border-blue-600/20 text-blue-400 rounded-2xl hover:bg-blue-600 hover:text-white transition-all"
                title="Call Me"
              >
                <Phone size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
