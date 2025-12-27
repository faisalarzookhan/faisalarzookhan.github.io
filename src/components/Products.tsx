import React from 'react';
import { flagshipProducts } from '../data/products';

const Products: React.FC = () => {
  return (
    <section id="products" className="py-24 bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-bold text-white mb-2">The Limitless Ecosystem</h2>
            <p className="text-slate-500">Proprietary enterprise solutions built for scale and security.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {flagshipProducts.map((p, i) => (
            <div key={i} className="group p-8 bg-gradient-to-br from-white/5 to-transparent rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all relative overflow-hidden">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                {p.icon}
              </div>
              <span className="text-[10px] font-bold text-blue-500/70 uppercase tracking-tighter block mb-2">{p.tag}</span>
              <h4 className="text-2xl font-bold text-white mb-3">{p.name}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
