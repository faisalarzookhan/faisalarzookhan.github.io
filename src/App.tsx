import React, { useState, useEffect } from 'react';
import {
  Shield, Server, Cpu, Globe, Terminal, Zap, Mail, Linkedin,
  Phone, MapPin, ExternalLink, ChevronRight, Database,
  Lock, Wifi, BarChart, Layers, Code, Download, Award,
  Briefcase, Users, Clock, Layout, CheckCircle2, Globe2,
  X, GraduationCap, FileBadge, Languages, User, MessageSquare
} from 'lucide-react';

import { profile } from './data/profile';
import { flagshipProducts } from './data/products';
import { experience } from './data/experience';

import ProfileModal from './components/ProfileModal';

import Products from './components/Products';
import { openWhatsApp, generateEmailLink } from './utils/helpers';
import Experience from './components/Experience';
import TechStack from './components/TechStack';
import Footer from './components/Footer';

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 selection:bg-blue-600/30 font-sans scroll-smooth">
      {/* Navigation */}
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

      <ProfileModal showProfileModal={showProfileModal} setShowProfileModal={setShowProfileModal} />
      {/* Hero Section */}
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

      {/* Flagship Products Grid */}
      <Products />

      {/* Experience Section */}
      <Experience />
      
      {/* Tech Stack Grid */}
      <TechStack />

      {/* Enhanced Contact Footer */}
      <Footer />
    </div>
  );
};

export default App;