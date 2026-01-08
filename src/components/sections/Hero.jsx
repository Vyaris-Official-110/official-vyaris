import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { GeneratedImage } from '../ui/GeneratedImage';

export const Hero = () => (
  <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800 via-background to-background"></div>
    
    <div className="max-w-7xl w-full z-10 grid md:grid-cols-2 gap-12 items-center">
      <div className="space-y-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">System Online</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.85] tracking-tighter mb-6">
            Next Gen<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">Digital</span><br />
            Reality.
          </h1>
          <p className="text-lg text-zinc-400 max-w-lg leading-relaxed border-l-2 border-primary/30 pl-6">
            Vyaris is an elite collective of MERN architects. We build high-performance digital infrastructure for the web's most demanding brands.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex gap-6"
        >
          <Button primary>Explore Works</Button>
          <Button>Start Project</Button>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative hidden md:block"
      >
        <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-20"></div>
        <GeneratedImage prompt="Futuristic server room data visualization, isometric, neon green lines" className="aspect-square rounded-sm border border-zinc-800" />
        
        {/* Floating cards */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 bg-zinc-900 border border-zinc-700 p-6 max-w-xs shadow-2xl"
        >
          <div className="flex justify-between items-center mb-4 text-xs font-mono text-zinc-400">
            <span>UPTIME</span>
            <span className="text-primary">99.99%</span>
          </div>
          <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full w-[99%] bg-primary"></div>
          </div>
        </motion.div>
      </motion.div>
    </div>
    
    {/* Decorative large text */}
    <div className="absolute bottom-0 left-0 right-0 whitespace-nowrap overflow-hidden opacity-[0.03] pointer-events-none select-none">
      <span className="text-[20vw] font-bold uppercase leading-none">Orchestration</span>
    </div>
  </section>
);
