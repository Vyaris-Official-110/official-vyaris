import React from 'react';
import { ArrowRight, BarChart, Smartphone, PenTool, Cpu } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, desc }) => (
    <div className="group relative bg-zinc-900 border border-zinc-800 p-10 hover:border-primary/50 transition-all duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        
        <div className="relative z-10">
            <div className="w-16 h-16 bg-zinc-800 rounded-lg flex items-center justify-center mb-8 border border-zinc-700 group-hover:bg-primary group-hover:text-black transition-colors duration-300">
                <Icon className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-zinc-400 mb-8 leading-relaxed">
                {desc}
            </p>
            
            <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    </div>
);

export const Services = () => {
    return (
        <section id="services" className="py-24 bg-zinc-950">
             <div className="container mx-auto px-6 mb-16">
                 <div className="text-center max-w-3xl mx-auto">
                     <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Services We Offer</h4>
                     <h2 className="text-4xl md:text-5xl font-bold text-white">Turn Information Into Actionable Insights</h2>
                 </div>
             </div>
             
             <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                     <ServiceItem 
                        icon={BarChart}
                        title="Marketing & SEO"
                        desc="Explained jas something an. Contrasted dissimilar get joy you instrument out reasonably."
                     />
                     <ServiceItem 
                        icon={Smartphone}
                        title="Mobile & Web App"
                        desc="Explained jas something an. Contrasted dissimilar get joy you instrument out reasonably."
                     />
                     <ServiceItem 
                        icon={PenTool}
                        title="UI/UX Design"
                        desc="Explained jas something an. Contrasted dissimilar get joy you instrument out reasonably."
                     />
                     <ServiceItem 
                        icon={Cpu}
                        title="Latest Tech"
                        desc="Explained jas something an. Contrasted dissimilar get joy you instrument out reasonably."
                     />
                 </div>
             </div>
        </section>
    );
};
