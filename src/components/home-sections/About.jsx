import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';

const ServiceListItem = ({ number, title, isActive }) => (
    <a
        href="#services"
        className={`group flex items-center gap-5 px-8 py-6 rounded-2xl transition-all duration-300 ${isActive
                ? 'bg-primary shadow-lg shadow-primary/20'
                : 'bg-zinc-900 border border-zinc-800 hover:border-primary/50'
            }`}
    >
        <div className="flex-shrink-0">
            <ArrowRight className={`w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 ${isActive ? 'text-black' : 'text-white/70'
                }`} />
        </div>
        <span className={`text-2xl font-bold min-w-[3rem] ${isActive ? 'text-black/50' : 'text-zinc-700'
            }`}>{number}</span>
        <span className={`text-lg font-semibold ${isActive ? 'text-black' : 'text-white'
            }`}>{title}</span>
    </a>
);

export const About = () => {
    const services = [
        { number: '01', title: 'Brand Strategy', isActive: false },
        { number: '02', title: 'Digital Marketing', isActive: true },
        { number: '03', title: 'Web Development', isActive: false },
        { number: '04', title: 'Creative Design', isActive: false },
    ];

    return (
        <section id="about" className="relative py-24 lg:py-32 bg-background overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                    {/* Image Section */}
                    <div className="lg:col-span-5">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden">
                                <img
                                    src="/about-image.jpg"
                                    alt="Creative Agency Illustration"
                                    className="w-full h-auto"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Stats Card */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center">
                                        <Play className="w-6 h-6 text-black fill-black ml-1" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-white">15+</div>
                                        <div className="text-zinc-500 text-sm">Years Experience</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Badge */}
                            <div className="absolute -top-4 -left-4 lg:-left-8 bg-zinc-900 border border-zinc-800 rounded-full px-6 py-3">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider">Since 2009</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-7">
                        <div className="space-y-10">
                            {/* Header */}
                            <div className="space-y-6">
                                <h4 className="text-primary font-bold uppercase tracking-widest">About Us</h4>
                                <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                                    Best creative & <br />
                                    <span className="hollow-text">digital agency</span>
                                </h2>
                                <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-xl">
                                    We transform ideas into exceptional digital experiences. Our team combines creativity with technical expertise to deliver solutions that drive growth and make lasting impressions.
                                </p>
                            </div>

                            {/* Service List */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {services.map((service) => (
                                    <ServiceListItem
                                        key={service.number}
                                        number={service.number}
                                        title={service.title}
                                        isActive={service.isActive}
                                    />
                                ))}
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                                >
                                    Start a Project
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <a
                                    href="#portfolio"
                                    className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
                                >
                                    View Our Work
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
