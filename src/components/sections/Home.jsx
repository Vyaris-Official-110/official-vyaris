import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Server, ArrowUpRight, ChevronRight, Calculator } from 'lucide-react';
import { Button } from '../ui/Button';
import { GeneratedImage } from '../ui/GeneratedImage';
import { SectionHeading } from '../ui/SectionHeading';
import { ServiceCard } from '../ui/ServiceCard';

export const Home = ({ setPage }) => (
  <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000">
    {/* Hero Section */}
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 max-w-7xl mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 mb-8 w-fit">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="text-[10px] font-bold uppercase tracking-widest text-primary">MERN Orchestration Collective</span>
      </div>
      
      <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] font-bold tracking-tighter uppercase italic mb-12">
        Engineering<br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-zinc-600">The Modern</span><br />
        Web Reality
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-end">
        <div className="space-y-8">
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-snug max-w-xl">
            A precise alliance of 6 developers specializing in high-performance full-stack architectures and seamless global deployment.
          </p>
          <div className="flex gap-8">
            <Button onClick={() => setPage('expertise')}>
              Expertise <ArrowUpRight className="w-4 h-4" />
            </Button>
            <button 
              onClick={() => setPage('contact')}
              className="flex items-center gap-4 group text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500 hover:text-white transition-colors"
            >
              Start Project <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <GeneratedImage 
          prompt="Abstract minimalist glass and metal server architecture, blue light refraction, dark aesthetic" 
          className="rounded-sm grayscale hover:grayscale-0 transition-all duration-700 aspect-square max-w-md ml-auto"
        />
      </div>
    </section>

    {/* Ticker */}
    <div className="border-y border-zinc-900 bg-zinc-950 py-10 overflow-hidden whitespace-nowrap">
      <div className="flex gap-20 animate-infinite-scroll text-zinc-800 font-bold text-4xl tracking-tighter uppercase italic">
        {[1,2,3,4].map(i => (
          <React.Fragment key={i}>
            <span>MongoDB</span>
            <span>Express.js</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>Dynamic UI</span>
            <span>Static Excellence</span>
          </React.Fragment>
        ))}
      </div>
    </div>

    {/* Detailed Services Intro */}
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <SectionHeading 
        subtitle="01 // Collective Mastery"
        title="We build digital ecosystems that outlast trends."
      />
      <div className="grid md:grid-cols-3 gap-0 border-r border-b border-zinc-900">
        <ServiceCard 
          icon={Database}
          title="Dynamic MERN"
          desc="Complex data-driven applications built with real-time reactivity and robust backends."
          delay={0.1}
        />
        <ServiceCard 
          icon={Zap}
          title="Static Speed"
          desc="High-converting landing pages and marketing sites optimized for 100/100 performance scores."
          delay={0.2}
        />
        <ServiceCard 
          icon={Server}
          title="Global Scale"
          desc="Automated infrastructure, containerized deployments, and worldwide CDN distribution."
          delay={0.3}
        />
      </div>
    </section>

    {/* Philosophy Detail */}
    <section className="py-32 bg-zinc-950 relative overflow-hidden px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
        <div className="order-2 md:order-1 relative aspect-square bg-zinc-900 border border-zinc-800 p-8 font-mono text-[10px] text-zinc-600">
           <div className="text-zinc-400 mb-4 border-b border-zinc-800 pb-2">MANIFESTO.log</div>
           <div className="text-primary">INIT: Engineering_Process</div>
           <div className="mt-4 opacity-50">
            {`> analyzing requirements...`} <br/>
            {`> constructing data schemas...`} <br/>
            {`> optimizing render cycles...`} <br/>
            {`> deploying via edge...`} <br/>
           </div>
           <div className="mt-8 text-zinc-300">
             "Precision is not an option; it is our foundation."
           </div>
           <div className="absolute bottom-8 right-8 text-zinc-800 text-6xl font-bold italic">V6</div>
        </div>
        <div className="order-1 md:order-2">
          <SectionHeading 
            subtitle="02 // Design Logic"
            title="Every pixel serves a purpose."
          />
          <ul className="space-y-8">
            <li className="border-b border-zinc-900 pb-6">
              <h4 className="text-xl font-bold uppercase italic mb-2 text-white">Architectural Integrity</h4>
              <p className="text-zinc-500 text-sm font-light">We don't use templates. Every architecture is bespoke to the client's needs.</p>
            </li>
            <li className="border-b border-zinc-900 pb-6">
              <h4 className="text-xl font-bold uppercase italic mb-2 text-white">Performance First</h4>
              <p className="text-zinc-500 text-sm font-light">Sub-second load times are a standard, not a feature.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
);
