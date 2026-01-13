import React from 'react';
import { ArrowRight, ArrowUpRight, BarChart, Smartphone, PenTool, Cpu, Layers, Globe } from 'lucide-react';

const ServiceItem = ({ icon: Icon, title, desc, number, isHighlighted }) => (
    <div className={`group relative p-8 lg:p-10 rounded-2xl transition-all duration-500 h-full ${isHighlighted
            ? 'bg-primary'
            : 'bg-zinc-900 border border-zinc-800 hover:border-primary/50'
        }`}>
        {/* Gradient overlay */}
        {!isHighlighted && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        )}

        {/* Number badge */}
        <div className={`absolute top-6 right-6 text-6xl font-black transition-colors duration-300 ${isHighlighted ? 'text-black/10' : 'text-zinc-800 group-hover:text-primary/20'
            }`}>
            {number}
        </div>

        <div className="relative z-10">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${isHighlighted
                    ? 'bg-black/20'
                    : 'bg-zinc-800 border border-zinc-700 group-hover:bg-primary group-hover:border-primary'
                }`}>
                <Icon className={`w-8 h-8 transition-colors duration-300 ${isHighlighted ? 'text-black' : 'text-zinc-400 group-hover:text-black'
                    }`} />
            </div>

            {/* Content */}
            <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isHighlighted ? 'text-black' : 'text-white group-hover:text-primary'
                }`}>{title}</h3>
            <p className={`mb-8 leading-relaxed ${isHighlighted ? 'text-black/70' : 'text-zinc-400'
                }`}>
                {desc}
            </p>

            {/* Link */}
            <a
                href="#"
                className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors group/link ${isHighlighted
                        ? 'text-black hover:text-white'
                        : 'text-white hover:text-primary'
                    }`}
            >
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </a>
        </div>
    </div>
);

export const Services = () => {
    const services = [
        {
            icon: Smartphone,
            title: "Web & Mobile Apps",
            desc: "Expert MERN stack, Next.js, and React Native development for high-performance websites and mobile applications.",
            number: "01",
            isHighlighted: true
        },
        {
            icon: Layers,
            title: "CRM & Enterprise",
            desc: "Custom CRM solutions and enterprise web applications tailored to streamline your business operations.",
            number: "02",
            isHighlighted: false
        },
        {
            icon: Cpu,
            title: "Cloud Support",
            desc: "Reliable cloud infrastructure management and deployment support to ensure your applications are always available.",
            number: "03",
            isHighlighted: false
        },
        {
            icon: BarChart,
            title: "SEO Optimization",
            desc: "Data-driven SEO strategies to improve your search rankings and drive organic traffic to your digital platforms.",
            number: "04",
            isHighlighted: false
        },
    ];

    return (
        <section id="services" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Services We Offer</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Turn ideas into <br />
                            <span className="hollow-text">digital reality</span>
                        </h2>
                    </div>
                    <div className="flex items-end lg:justify-end">
                        <div className="max-w-md">
                            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-6">
                                We offer comprehensive digital services tailored to transform your business and accelerate growth in the digital landscape.
                            </p>
                            <a
                                href="#contact"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
                            >
                                View All Services
                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceItem
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            desc={service.desc}
                            number={service.number}
                            isHighlighted={service.isHighlighted}
                        />
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="mt-20 pt-12 border-t border-zinc-800">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <Layers className="w-6 h-6 text-primary" />
                                <span className="text-4xl font-black text-white">50+</span>
                            </div>
                            <span className="text-zinc-500 text-sm">Services Offered</span>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <Globe className="w-6 h-6 text-primary" />
                                <span className="text-4xl font-black text-white">25+</span>
                            </div>
                            <span className="text-zinc-500 text-sm">Countries Served</span>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <BarChart className="w-6 h-6 text-primary" />
                                <span className="text-4xl font-black text-white">95%</span>
                            </div>
                            <span className="text-zinc-500 text-sm">Success Rate</span>
                        </div>
                        <div className="text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-3 mb-2">
                                <Cpu className="w-6 h-6 text-primary" />
                                <span className="text-4xl font-black text-white">24/7</span>
                            </div>
                            <span className="text-zinc-500 text-sm">Support Available</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
