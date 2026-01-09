import React from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowRight, MoveUpRight } from 'lucide-react';

export const About = () => {
    return (
        <section className="relative py-24 lg:py-32 bg-[#0a0a0a]">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                    {/* Image Section */}
                    <div className="lg:col-span-5">
                        <div className="relative">
                            <GeneratedImage
                                prompt="Abstract 3D sphere with flowing metallic ribbons wrapped around it, dark moody background, professional studio lighting, cinematic, high contrast"
                                alt="Creative Agency Illustration"
                                className="w-full h-auto rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:col-span-6 lg:col-start-7">
                        <div className="space-y-10">
                            {/* Title with Arrow */}
                            <div className="space-y-6">
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 mt-2">
                                        <MoveUpRight className="w-14 h-14 lg:w-16 lg:h-16 text-white/80 stroke-[1.5]" />
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
                                        Best creative &amp; digital agency
                                    </h2>
                                </div>
                                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-2xl">
                                    Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably
                                </p>
                            </div>

                            {/* Service List */}
                            <ul className="space-y-5">
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-[#1a1a1a] hover:bg-[#252525] transition-all duration-300 group border border-transparent hover:border-gray-800"
                                    >
                                        <div className="flex-shrink-0">
                                            <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        <span className="text-2xl font-bold text-gray-600 min-w-[3rem]">01</span>
                                        <span className="text-lg font-medium text-white">Social Media</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-[#d4ff00] hover:bg-[#e0ff33] transition-all duration-300 group shadow-lg shadow-[#d4ff00]/20"
                                    >
                                        <div className="flex-shrink-0">
                                            <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        <span className="text-2xl font-bold text-black/70 min-w-[3rem]">02</span>
                                        <span className="text-lg font-medium text-black">Content Writing</span>
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="flex items-center gap-5 px-8 py-6 rounded-2xl bg-[#1a1a1a] hover:bg-[#252525] transition-all duration-300 group border border-transparent hover:border-gray-800"
                                    >
                                        <div className="flex-shrink-0">
                                            <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform duration-300" />
                                        </div>
                                        <span className="text-2xl font-bold text-gray-600 min-w-[3rem]">03</span>
                                        <span className="text-lg font-medium text-white">Video Production</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
