import React from 'react';

export const Button = ({ children, primary = false, className = "", onClick }) => (
  <button 
    onClick={onClick}
    className={`
      relative px-8 py-3 uppercase tracking-wider text-xs font-bold border transition-all duration-300 overflow-hidden group
      cursor-pointer
      ${primary 
        ? 'bg-primary text-black border-primary hover:bg-transparent hover:text-primary' 
        : 'bg-transparent text-white border-white/20 hover:border-primary hover:text-black'}
      ${className}
    `}
  >
    <span className="relative z-10 flex items-center gap-2">{children}</span>
    {/* Hover fill effect */}
    <div className={`absolute inset-0 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out -z-0 ${primary ? 'hidden' : 'block'}`}></div>
  </button>
);
