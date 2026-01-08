import React from 'react';
import { GeneratedImage } from '../../ui/GeneratedImage';
import { ArrowRight } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="py-24 bg-background overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                         <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full"></div>
                         <GeneratedImage 
                            prompt="Modern office interior minimalist, dark mode, team working, high tech environment"
                            className="relative z-10 w-full rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
                         />
                    </div>
                    
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                             <div className="mt-2 w-12 h-[1px] bg-primary"></div>
                             <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Original creative & <br/> <span className="text-zinc-600">digital agency</span>
                             </h2>
                        </div>
                        
                        <p className="text-zinc-400 text-lg">
                           Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument.
                        </p>
                        
                        <div className="space-y-4 pt-4">
                            {['Social Media', 'Content Writing', 'Video Production'].map((service, index) => (
                                <a key={index} href="#services" className="group flex items-center justify-between p-4 border-b border-zinc-800 hover:border-primary transition-colors cursor-pointer">
                                    <span className="text-xl font-medium text-zinc-300 group-hover:text-white transition-colors">{service}</span>
                                    <div className="flex items-center gap-4">
                                        <span className="text-zinc-600 font-mono text-sm">0{index + 1}</span>
                                        <ArrowRight className="w-5 h-5 text-zinc-600 group-hover:text-primary -translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
