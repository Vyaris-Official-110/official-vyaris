import React from 'react';
import { Search, Lightbulb, Cog, Send, ArrowRight } from 'lucide-react';

const ProcessItem = ({ icon: Icon, title, desc, step, isLast }) => (
    <div className="relative group">
        {/* Connector Line */}
        {!isLast && (
            <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px]">
                <div className="w-full h-full bg-zinc-800 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-transparent w-0 group-hover:w-full transition-all duration-700"></div>
                </div>
                <ArrowRight className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-700" />
            </div>
        )}

        <div className="relative bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-primary/50 transition-all duration-500 h-full">
            {/* Gradient overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

            {/* Step number badge */}
            <div className="absolute -top-4 -right-4 w-10 h-10 bg-zinc-800 border border-zinc-700 rounded-full flex items-center justify-center text-sm font-bold text-zinc-500 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                {step}
            </div>

            <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 bg-zinc-800 rounded-2xl flex items-center justify-center mb-6 border border-zinc-700 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                    <Icon className="w-9 h-9 text-zinc-400 group-hover:text-black transition-colors duration-300" />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">{title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">
                    {desc}
                </p>
            </div>
        </div>
    </div>
);

export const Process = () => {
    const processes = [
        {
            icon: Search,
            title: "Research",
            desc: "Deep dive into your business, market, and competitors to understand the landscape and identify opportunities.",
        },
        {
            icon: Lightbulb,
            title: "Concept",
            desc: "Brainstorm and develop creative strategies tailored to your unique goals and target audience.",
        },
        {
            icon: Cog,
            title: "Implement",
            desc: "Execute the plan with precision, using cutting-edge tools and agile methodologies for optimal results.",
        },
        {
            icon: Send,
            title: "Handover",
            desc: "Deliver polished solutions with comprehensive documentation and ongoing support for seamless transition.",
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
                    <div>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Process</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            How we bring <br />
                            <span className="hollow-text">ideas to life</span>
                        </h2>
                    </div>
                    <div className="flex items-end lg:justify-end">
                        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-md">
                            Our proven four-step methodology ensures every project is delivered with excellence, from initial concept to final execution.
                        </p>
                    </div>
                </div>

                {/* Process Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {processes.map((process, index) => (
                        <ProcessItem
                            key={index}
                            icon={process.icon}
                            title={process.title}
                            desc={process.desc}
                            step={String(index + 1).padStart(2, '0')}
                            isLast={index === processes.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-20 pt-12 border-t border-zinc-800">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to start your project?</h3>
                            <p className="text-zinc-500">Let's discuss how we can help bring your vision to reality.</p>
                        </div>
                        <a
                            href="/contact"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                        >
                            Get Started
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
