import React from 'react';

const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-16">The Technical Dossier</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { title: 'Server & Infra', items: ['Windows/Linux', 'Active Directory', 'VPN', 'DR Systems'] },
            { title: 'Full Stack', items: ['React', 'Next.js', 'Node.js', 'PostgreSQL'] },
            { title: 'DevOps & AI', items: ['Docker', 'Python', 'PowerShell', 'Automation'] },
            { title: 'Network Security', items: ['Firewalls', 'CCTV/IP', 'Biometrics', 'RBAC'] }
          ].map((group, i) => (
            <div key={i} className="p-8 bg-white/5 rounded-[2.5rem] border border-white/5">
              <h5 className="text-white font-bold mb-4 text-[10px] uppercase tracking-widest">{group.title}</h5>
              <div className="space-y-2">
                {group.items.map((item, j) => (
                  <p key={j} className="text-xs text-slate-500">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
