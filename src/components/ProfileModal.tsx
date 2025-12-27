import React from 'react';
import { 
  X, User, MapPin, Linkedin, Zap, Phone, MessageSquare, GraduationCap, FileBadge 
} from 'lucide-react';
import { profile } from '../data/profile';
import { openWhatsApp } from '../utils/helpers';

interface ProfileModalProps {
  showProfileModal: boolean;
  setShowProfileModal: (show: boolean) => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ showProfileModal, setShowProfileModal }) => {
  if (!showProfileModal) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setShowProfileModal(false)}></div>
      <div className="relative w-full max-w-4xl bg-[#0c0c0c] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
        <button 
          onClick={() => setShowProfileModal(false)}
          className="absolute top-8 right-8 p-2 text-slate-500 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
        
        <div className="grid md:grid-cols-3 h-full max-h-[90vh] overflow-y-auto">
          {/* Sidebar Info */}
          <div className="p-10 bg-gradient-to-b from-blue-600/10 to-transparent border-r border-white/5">
            <div className="w-24 h-24 bg-blue-600 rounded-[2rem] mb-6 flex items-center justify-center text-white shadow-2xl shadow-blue-600/30">
              <User size={40} />
            </div>
            <h3 className="text-2xl font-black text-white mb-2">{profile.name}</h3>
            <p className="text-xs font-bold text-blue-500 uppercase tracking-widest mb-8">{profile.title}</p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm">
                <div className="p-2 bg-white/5 rounded-lg"><MapPin size={16} className="text-blue-400"/></div>
                <span className="text-slate-400">{profile.contact.location}</span>
              </div>
              <a href={`https://${profile.contact.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm hover:text-white transition-colors">
                <div className="p-2 bg-white/5 rounded-lg"><Linkedin size={16} className="text-blue-400"/></div>
                <span className="text-slate-400">/faishalkhan</span>
              </a>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 p-10 space-y-12 bg-black/40">
            {/* Contact Actions Hub */}
            <div>
                <h4 className="flex items-center gap-3 text-white font-bold mb-6 text-sm uppercase tracking-widest">
                <Zap className="text-blue-500" size={18} /> Quick Connect
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.contact.phones.map((p, idx) => (
                  <div key={idx} className="p-5 bg-white/5 border border-white/10 rounded-3xl group">
                    <p className="text-[10px] font-bold text-slate-500 uppercase mb-3">{p.region}</p>
                    <p className="text-lg font-bold text-white mb-4 tracking-tight">{p.display}</p>
                    <div className="flex gap-2">
                      <a href={`tel:${p.number}`} className="flex-1 flex items-center justify-center gap-2 bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-2 rounded-xl text-[10px] font-black uppercase transition-all">
                        <Phone size={14}/> Call
                      </a>
                      <button onClick={() => openWhatsApp(p.number)} className="flex-1 flex items-center justify-center gap-2 bg-emerald-600/20 hover:bg-emerald-600 text-emerald-400 hover:text-white py-2 rounded-xl text-[10px] font-black uppercase transition-all">
                        <MessageSquare size={14}/> WhatsApp
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="flex items-center gap-3 text-white font-bold mb-6 text-sm uppercase tracking-widest">
                <GraduationCap className="text-blue-500" size={18} /> Education
              </h4>
              <div className="space-y-4">
                {profile.education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-start p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <p className="text-white font-bold">{edu.degree}</p>
                      <p className="text-xs text-slate-500">{edu.school}</p>
                    </div>
                    <span className="text-[10px] font-mono text-blue-400">{edu.year}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="flex items-center gap-3 text-white font-bold mb-6 text-sm uppercase tracking-widest">
                <FileBadge className="text-blue-500" size={18} /> Certifications
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {profile.certs.map((cert, i) => (
                  <div key={i} className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-xs font-bold text-slate-300">
                    {cert}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
