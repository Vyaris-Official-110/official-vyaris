import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowUpRight } from 'lucide-react';
import sevaLogo from '../../assets/images/seva-logo.png';
import microAirLogo from '../../assets/images/micro-air-systems-logo.png';

const ClientLogo = ({ i, name, desc, logo }) => (
    <div className="group relative bg-zinc-900 border border-zinc-800 flex flex-col items-center justify-center p-8 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-500 h-full text-center">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="h-24 w-full mb-6 flex items-center justify-center relative z-10">
            {logo ? (
                <img
                    src={logo}
                    alt={`${name} logo`}
                    className="h-full w-auto object-contain transition-all duration-500 bg-white rounded-lg p-2"
                />
            ) : (
                <GeneratedImage
                    prompt={`Minimalist logo for ${name}, ${desc}, abstract, vector style, white on transparent`}
                    className="h-full w-auto object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"
                />
            )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 relative z-10">{name}</h3>
        <p className="text-zinc-400 text-sm relative z-10 leading-relaxed max-w-sm">
            {desc}
        </p>
    </div>
);

const StatCard = ({ value, label, highlight }) => (
    <div className={`relative p-8 rounded-lg border transition-all duration-300 ${highlight
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
        {
            id: 1,
            name: 'Seva Consultancy',
            desc: 'One of the leading finance consulting firm in Vadodara which provides financial services.',
            logo: sevaLogo
        },
        {
            id: 2,
            name: 'Micro Air Systems',
            desc: 'One of the leading HVAC and retail AC services firm.',
            logo: microAirLogo
        },
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    {clients.map(client => (
                        <ClientLogo key={client.id} i={client.id} name={client.name} desc={client.desc} logo={client.logo} />
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
                        {/* <a
                            href="#portfolio"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
                        >
                            View Our Work
                            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a> */}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        <StatCard value="5+" label="Active Clients" />
                        <StatCard value="10+" label="Projects Done" highlight />
                        <StatCard value="98%" label="Client Satisfaction" />
                        <StatCard value="2+" label="Years Experience" />
                    </div>
                </div>
            </div>
        </section>
    );
};
