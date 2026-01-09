import React from 'react';

export const ContactHero = () => (
  <div className="relative pt-40 pb-64 flex flex-col items-center justify-center bg-[#0E0F11] overflow-hidden">
    {/* Abstract Background Shapes/Gradients to match the 'swirl' effect in the image */}
    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-zinc-800/20 to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-background to-background opacity-80"></div>

    <div className="relative z-10 text-center space-y-4">
      <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight text-white">Get In Touch</h1>
      <div className="flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-zinc-400">
        <span className="hover:text-primary transition-colors cursor-pointer">Home</span>
        <span className="text-zinc-600">/</span>
        <span className="text-white">Contact-Us</span>
      </div>
    </div>
  </div>
);
