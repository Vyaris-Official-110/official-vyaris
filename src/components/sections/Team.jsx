import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';

export const Team = () => (
  <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4">
    <div className="text-center mb-24">
      <SectionHeading subtitle="The Squad" title="The Six" align="center" />
      <p className="text-zinc-500 mt-6 max-w-xl mx-auto font-light">A unified strike-team of developers, each a master of their domain.</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
      {[1,2,3,4,5,6].map(i => (
        <div key={i} className="group border border-zinc-900 aspect-square p-8 flex flex-col justify-between hover:bg-zinc-950 transition-colors bg-zinc-900/10">
          <div className="text-zinc-800 text-6xl font-bold italic group-hover:text-zinc-600 transition-colors">V{i}</div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary">Specialist</div>
            <div className="text-sm font-medium text-zinc-300">Developer_Unit_0{i}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
