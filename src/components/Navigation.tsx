import React from 'react';
import { generateEmailLink } from '../utils/helpers';
import { profile } from '../data/profile';

interface NavigationProps {
  isScrolled: boolean;
  setShowProfileModal: (show: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isScrolled, setShowProfileModal }) => {
  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => setShowProfileModal(true)}
          className="flex items-center gap-3 group transition-transform hover:scale-105 active:scale-95"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-xl flex items-center justify-center font-black text-white shadow-xl shadow-blue-500/20 group-hover:shadow-blue-500/40">
            FA
          </div>
          <div className="flex flex-col items-start">
            <span className="hidden md:block font-bold text-white tracking-tight uppercase text-xs">Faishal Khan</span>
            <span className="hidden md:block text-[8px] text-blue-400 font-bold uppercase tracking-widest text-left">View Profile</span>
          </div>
        </button>
        
        <div className="flex items-center gap-6 lg:gap-10 text-[10px] font-bold uppercase tracking-widest">
          <div className="hidden lg:flex gap-8">
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#products" className="hover:text-blue-400 transition-colors">Products</a>
            <a href="#stack" className="hover:text-blue-400 transition-colors">Stack</a>
          </div>
          <a 
            href={generateEmailLink(profile.contact.emails[0].address, "Inquiry from Portfolio")} 
            className="bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
