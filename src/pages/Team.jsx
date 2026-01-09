import React from 'react';

export const Team = () => {
  return (
    <div className="pt-40 pb-32 px-6 md:px-12 min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 max-w-2xl mx-auto">
        <div className="inline-block px-4 py-2 border border-primary/30 rounded-full mb-4">
          <span className="text-xs uppercase tracking-widest text-primary">Under Development</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">
          Coming Soon
        </h1>
        <p className="text-zinc-500 text-lg font-light leading-relaxed">
          We're crafting something exceptional. The Team page will be available soon.
        </p>
      </div>
    </div>
  );
};
