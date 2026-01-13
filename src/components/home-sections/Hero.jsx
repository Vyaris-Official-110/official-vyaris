import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowUpRight, Play } from 'lucide-react';

export const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-7 space-y-8">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-zinc-900 border border-zinc-800 rounded-full">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                            <span className="text-sm font-medium text-zinc-400">Creative Digital Agency</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                                Designing
                            </h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight hollow-text">
                                Creative
                            </h1>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.9] tracking-tight">
                                <span className="text-primary">Solutions</span>
                            </h1>
                        </div>

                        {/* Description */}
                        <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-xl">
                            We transform ideas into exceptional digital experiences. Branding, marketing, design, and digital strategies that resonate with your audience.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
                            <a
                                href="#contact"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300"
                            >
                                Start a Project
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a
                                href="#portfolio"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wider rounded-full hover:border-primary/50 transition-colors duration-300"
                            >
                                <Play className="w-4 h-4 fill-current" />
                                View Our Work
                            </a>
                        </div>

                        {/* Stats Row */}
                        <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-zinc-800">
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-white">2.5K+</div>
                                <div className="text-zinc-500 text-sm">Projects Completed</div>
                            </div>
                            <div className="w-px h-12 bg-zinc-800 hidden sm:block"></div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-white">98%</div>
                                <div className="text-zinc-500 text-sm">Client Satisfaction</div>
                            </div>
                            <div className="w-px h-12 bg-zinc-800 hidden sm:block"></div>
                            <div>
                                <div className="text-4xl lg:text-5xl font-black text-white">15+</div>
                                <div className="text-zinc-500 text-sm">Years Experience</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Hero Image */}
                    <div className="lg:col-span-5 relative">
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden">
                                <img
                                    src="/HomePage/hero-image.jpg"
                                    alt="Modern tech workstation with dual monitors"
                                    className="w-full h-auto aspect-[4/5] object-cover"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
                            </div>

                            {/* Floating Card - Top Right */}
                            <div className="absolute -top-6 -right-6 lg:top-8 lg:-right-12 bg-zinc-900 border border-zinc-800 rounded-2xl p-5 shadow-2xl">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                        <ArrowUpRight className="w-5 h-5 text-black" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-black text-white">120+</div>
                                        <div className="text-zinc-500 text-xs">Active Clients</div>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Card - Bottom Left */}
                            <div className="absolute -bottom-6 -left-6 lg:bottom-12 lg:-left-12 bg-primary rounded-2xl p-5 shadow-2xl shadow-primary/20">
                                <div className="flex items-center gap-4">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden">
                                                <GeneratedImage
                                                    prompt={`Professional headshot ${i}, diverse, studio lighting`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    <div>
                                        <div className="text-lg font-bold text-black">50+ Experts</div>
                                        <div className="text-black/60 text-xs">Ready to Help</div>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-1/2 -left-4 w-8 h-8 border-2 border-primary/30 rounded-full"></div>
                            <div className="absolute top-1/4 -right-2 w-4 h-4 bg-primary rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
                    <span className="text-zinc-500 text-xs uppercase tracking-widest">Scroll</span>
                    <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex justify-center pt-2">
                        <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
