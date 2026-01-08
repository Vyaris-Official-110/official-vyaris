import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GeneratedImage } from '../ui/GeneratedImage';

export const Expertise = () => (
  <div className="pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4">
    <SectionHeading 
      subtitle="01 // The Stack"
      title="Deep expertise in modern tools."
    />
    <div className="grid md:grid-cols-2 gap-20">
      <GeneratedImage prompt="Macro shot of computer chip with blue neon trace lines" className="aspect-video" />
      <div className="space-y-12">
        <div>
          <h3 className="text-3xl font-bold uppercase italic mb-4 text-white">React & Next.js</h3>
          <p className="text-zinc-500 font-light leading-relaxed">Highly interactive UIs with server-side rendering for perfect SEO and performance.</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold uppercase italic mb-4 text-white">Node & MongoDB</h3>
          <p className="text-zinc-500 font-light leading-relaxed">Scalable backends and flexible data structures to handle any project volume.</p>
        </div>
      </div>
    </div>
  </div>
);
