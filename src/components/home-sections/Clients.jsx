import React from 'react';
import { Plus } from 'lucide-react';
import { GeneratedImage } from '../ui/GeneratedImage';

const ClientLogo = ({ i }) => (
    <div className="bg-zinc-900 border border-zinc-800 h-24 flex items-center justify-center p-6 grayscale hover:grayscale-0 transition-all hover:bg-zinc-800">
        <GeneratedImage 
            prompt={`Minimalist company logo ${i}, abstract geometric shape, white on black background, vector style`}
            className="h-full w-auto object-contain"
        />
    </div>
);

export const Clients = () => {
    return (
        <section className="py-24 bg-zinc-950">
             <div className="container mx-auto px-6">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                     <div className="lg:col-span-4">
                         <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Clients</h4>
                         <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Worked with largest brands</h2>
                         <p className="text-zinc-400 mb-8">
                             Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret perceived as perfection.
                         </p>
                         <div className="flex gap-4">
                             {[1,2,3].map(i => (
                                 <div key={i} className="w-12 h-12 rounded-full overflow-hidden border border-zinc-700">
                                      <GeneratedImage 
                                        prompt={`Client portrait ${i}, professional headshot`}
                                        className="w-full h-full object-cover"
                                      />
                                 </div>
                             ))}
                             <div className="w-12 h-12 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-colors cursor-pointer">
                                 <Plus className="w-5 h-5" />
                             </div>
                         </div>
                     </div>
                     
                     <div className="lg:col-span-8">
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                             <div className="col-span-2 md:col-span-2 bg-primary p-8 flex items-center justify-between text-black rounded-lg">
                                 <div>
                                     <span className="text-4xl font-bold block">45+</span>
                                     <span className="font-medium">Active Clients</span>
                                 </div>
                                 <Plus className="w-8 h-8" />
                             </div>
                             {[1,2,3,4,5,6].map(i => (
                                 <ClientLogo key={i} i={i} />
                             ))}
                             <div className="col-span-2 md:col-start-4 md:col-end-5 bg-zinc-800 border border-zinc-700 flex items-center justify-center text-white font-bold hover:bg-primary hover:text-black transition-colors cursor-pointer rounded-lg">
                                 View All
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
        </section>
    );
};
