import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center bg-zinc-900 overflow-hidden">
      {/* Background Image / Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
         <GeneratedImage 
             prompt="Abstract dark geometric shapes, architectural patterns, subtle light leaks, high end digital agency background"
             className="w-full h-full object-cover"
         />
      </div>
      
      <div className="container mx-auto px-6 relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8">
            <div className="space-y-4">
              <div className="overflow-hidden">
                 <h2 className="text-[12vw] leading-[0.8] font-bold uppercase text-white animate-in slide-in-from-left duration-700">Designing</h2>
              </div>
              <div className="overflow-hidden">
                  <h2 className="text-[12vw] leading-[0.8] font-bold uppercase text-zinc-600 animate-in slide-in-from-right duration-700 delay-100">Creative</h2>
              </div>
            </div>
            
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 bg-zinc-950/80 backdrop-blur-sm p-8 border border-white/5 rounded-lg max-w-3xl">
                <div>
                   <h4 className="text-2xl font-bold text-white mb-2">Vyaris </h4>
                   <p className="text-zinc-400 text-sm leading-relaxed">
                     Providing innovative solutions in branding, marketing, design, and advertising. These agencies often collaborate with clients to develop unique campaigns, visual identities, and digital strategies.
                   </p>
                   <button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center gap-2 mt-6 text-primary font-semibold uppercase tracking-wider text-xs hover:gap-4 transition-all bg-transparent border-none cursor-pointer p-0">
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4" />
                   </button>
                </div>
             </div>
          </div>
          
          <div className="lg:col-span-4 hidden lg:block">
             <div className="relative">
                <GeneratedImage 
                  prompt="Futuristic 3d abstract art sculpture, glossy material, dark background, cinematic lighting"
                  className="w-full h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
