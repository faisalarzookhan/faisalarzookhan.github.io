import React from 'react';
import { experience } from '../data/experience';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">Professional Journey</h2>
        <div className="space-y-12">
          {experience.map((job, i) => (
            <div key={i} className="relative pl-12 border-l border-white/10">
              <div className="absolute -left-[6px] top-0 w-3 h-3 bg-blue-600 rounded-full"></div>
              <div className="bg-white/[0.03] p-8 rounded-3xl border border-white/5">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <p className="text-blue-500 text-sm">{job.company}</p>
                  </div>
                  <span className="text-xs font-mono text-slate-500">{job.period}</span>
                </div>
                <ul className="grid gap-3">
                  {job.points.map((p, j) => (
                    <li key={j} className="text-sm text-slate-400 flex gap-3">
                      <CheckCircle2 size={16} className="text-blue-600 shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
