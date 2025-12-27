import React from 'react';
import { profile } from '../data/profile';
import { generateEmailLink, openWhatsApp } from '../utils/helpers';
import { Phone, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">Connect Directly.</h2>
          <p className="text-slate-500 max-w-xl mx-auto">Available for strategic consulting and enterprise IT leadership opportunities across India and Saudi Arabia.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {/* Dynamic Phone Cards */}
           {profile.contact.phones.map((p, i) => (
             <div key={i} className="p-8 bg-white/5 rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all text-center group">
               <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">{p.region}</p>
               <p className="text-2xl font-black text-white mb-8">{p.display}</p>
               <div className="flex flex-col gap-3">
                 <a href={`tel:${p.number}`} className="flex items-center justify-center gap-3 bg-white text-black py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all">
                   <Phone size={18}/> Voice Call
                 </a>
                 <button onClick={() => openWhatsApp(p.number)} className="flex items-center justify-center gap-3 bg-emerald-600/10 text-emerald-500 py-4 rounded-2xl font-bold hover:bg-emerald-600 hover:text-white transition-all border border-emerald-600/20">
                   <MessageSquare size={18}/> WhatsApp Inquiry
                 </button>
               </div>
             </div>
           ))}

           {/* Dynamic Email Card */}
           <div className="p-8 bg-gradient-to-br from-blue-600/10 to-transparent rounded-[3rem] border border-white/5 hover:border-blue-500/30 transition-all text-center flex flex-col justify-center">
              <p className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-4">Official Channels</p>
              <div className="space-y-4">
                {profile.contact.emails.map(e => (
                  <a 
                    key={e.address} 
                    href={generateEmailLink(e.address, `Inquiry for ${profile.name}`)}
                    className="block group"
                  >
                    <p className="text-[10px] font-bold text-slate-600 group-hover:text-blue-400 transition-colors uppercase">{e.label}</p>
                    <p className="text-md font-bold text-white break-all">{e.address}</p>
                  </a>
                ))}
              </div>
           </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-600 uppercase tracking-widest">
          <p>© {new Date().getFullYear()} Faishal Arzoo Khan. Built for Performance.</p>
          <div className="flex gap-8">
            <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href={`https://${profile.contact.website}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Website</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
