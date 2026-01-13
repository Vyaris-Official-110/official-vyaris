import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ContactHero = () => (
    <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0">
            {/* Gradient Orbs */}
            <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                {/* Breadcrumb */}
                <nav className="flex items-center justify-center gap-2 mb-8">
                    <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-primary transition-colors">
                        Home
                    </Link>
                    <ArrowRight className="w-4 h-4 text-zinc-700" />
                    <span className="text-sm font-medium text-white">Contact</span>
                </nav>

                {/* Main Heading */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
                    Get in <span className="hollow-text">Touch</span>
                </h1>

                {/* Description */}
                <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
                    Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                {/* Quick Contact Info */}
                <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
                    <div className="flex items-center gap-3">
                        <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">Available for new projects</span>
                    </div>
                    <div className="hidden lg:block w-px h-6 bg-zinc-800"></div>
                    <a href="mailto:official@vyaris.com" className="text-zinc-400 hover:text-primary transition-colors">
                        official@vyaris.com
                    </a>
                    <div className="hidden lg:block w-px h-6 bg-zinc-800"></div>
                    <a href="tel:+917862861266" className="text-zinc-400 hover:text-primary transition-colors">
                        +91-7862861266, +91-7600830568
                    </a>
                </div>
            </div>
        </div>
    </section>
);
