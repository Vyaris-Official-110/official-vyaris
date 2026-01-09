import React from 'react';
import { Search, Lightbulb, Cog, Send } from 'lucide-react';

const ProcessItem = ({ icon: Icon, title, desc, delay }) => (
    <div className="text-center group p-6 rounded-lg hover:bg-zinc-900 transition-colors duration-300">
        <div className="w-20 h-20 mx-auto bg-zinc-900 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-zinc-800 group-hover:border-primary/50">
            <Icon className="w-8 h-8 text-zinc-400 group-hover:text-primary transition-colors" />
        </div>
        <h4 className="text-xl font-bold text-white mb-4">{title}</h4>
        <p className="text-zinc-400 text-sm leading-relaxed">
            {desc}
        </p>
    </div>
);

export const Process = () => {
    return (
        <section className="py-24 bg-background border-t border-zinc-900">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Process</h4>
                     <h2 className="text-3xl md:text-4xl font-bold text-white">Best Solutions Provider</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                     <ProcessItem 
                        icon={Search}
                        title="Research"
                        desc="Remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position."
                     />
                     <ProcessItem 
                        icon={Lightbulb}
                        title="Concept"
                        desc="Terminators on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position."
                     />
                     <ProcessItem 
                        icon={Cog}
                        title="Implement"
                        desc="Remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position."
                     />
                     <ProcessItem 
                        icon={Send}
                        title="Handover"
                        desc="Transitions on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position."
                     />
                 </div>
            </div>
        </section>
    );
};
