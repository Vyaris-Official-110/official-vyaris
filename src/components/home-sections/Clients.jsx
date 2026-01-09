import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowUpRight } from 'lucide-react';

const ClientLogo = ({ i }) => (
    <div className="group relative bg-zinc-900 border border-zinc-800 h-32 flex items-center justify-center p-6 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <GeneratedImage
            prompt={`Minimalist company logo ${i}, abstract geometric shape, white on transparent, vector style, clean design`}
            className="h-full w-auto object-contain opacity-40 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500 relative z-10"
        />
    </div>
);

const StatCard = ({ value, label, highlight }) => (
    <div className={`relative p-8 rounded-lg border transition-all duration-300 ${
        highlight
            ? 'bg-primary text-black border-primary shadow-lg shadow-primary/20'
            : 'bg-zinc-900 border-zinc-800 hover:border-primary/50'
    }`}>
        {/* Decorative corner */}
        {!highlight && (
            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full"></div>
        )}

        <div className={`text-5xl lg:text-6xl font-black mb-3 ${highlight ? 'text-black' : 'text-white'}`}>
            {value}
        </div>
        <div className={`text-sm font-medium uppercase tracking-wider ${highlight ? 'text-black/70' : 'text-zinc-500'}`}>
            {label}
        </div>
    </div>
);

export const Clients = () => {
    const clients = [
        { id: 1, name: 'TechCorp' },
        { id: 2, name: 'Innovate' },
        { id: 3, name: 'Quantum' },
        { id: 4, name: 'Nexus' },
        { id: 5, name: 'Vertex' },
        { id: 6, name: 'Cipher' },
        { id: 7, name: 'Apex' },
        { id: 8, name: 'Pulse' },
    ];

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Trusted By</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Worked with <br />
                            <span className="hollow-text">largest brands</span>
                        </h2>
                    </div>
                    <div className="flex items-end lg:justify-end">
                        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-md">
                            We've partnered with industry leaders to deliver exceptional digital experiences that drive growth and innovation.
                        </p>
                    </div>
                </div>

                {/* Logos Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 mb-20">
                    {clients.map(client => (
                        <ClientLogo key={client.id} i={client.id} name={client.name} />
                    ))}
                </div>

                {/* Stats Section */}
                <div className="relative">
                    {/* Stats Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <ArrowUpRight className="w-5 h-5 text-black" />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Our Impact</h3>
                        </div>
                        <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
                        >
                            View Our Work
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        <StatCard value="45+" label="Active Clients" />
                        <StatCard value="120+" label="Projects Done" highlight />
                        <StatCard value="98%" label="Client Satisfaction" />
                        <StatCard value="15+" label="Years Experience" />
                    </div>
                </div>
            </div>
        </section>
    );
};
