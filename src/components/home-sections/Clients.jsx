import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';

const ClientLogo = ({ i }) => (
    <div className="bg-zinc-900/50 border border-zinc-800/50 h-28 flex items-center justify-center p-8 rounded-xl grayscale hover:grayscale-0 hover:border-zinc-700 transition-all duration-300 group">
        <GeneratedImage
            prompt={`Minimalist company logo ${i}, abstract geometric shape, white on transparent, vector style, clean design`}
            className="h-full w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
        />
    </div>
);

export const Clients = () => {
    return (
        <section className="py-24 lg:py-32 bg-zinc-950">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="max-w-2xl mb-16">
                    <h4 className="text-sm font-semibold text-[#d4ff00] uppercase tracking-wider mb-4">Trusted By</h4>
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                        Worked with largest brands
                    </h2>
                    <p className="text-gray-400 text-base lg:text-lg leading-relaxed">
                        Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret perceived as perfection.
                    </p>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                        <ClientLogo key={i} i={i} />
                    ))}
                </div>

                {/* Stats */}
                <div className="mt-16 pt-16 border-t border-zinc-800/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">45+</div>
                            <div className="text-gray-400 text-sm">Active Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">120+</div>
                            <div className="text-gray-400 text-sm">Projects Done</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">98%</div>
                            <div className="text-gray-400 text-sm">Client Satisfaction</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl lg:text-5xl font-bold text-white mb-2">15+</div>
                            <div className="text-gray-400 text-sm">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
