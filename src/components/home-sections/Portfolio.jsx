import { useState } from 'react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const categories = ['All', 'Branding', 'Development', 'Marketing', 'Design'];

const PortfolioItem = ({ title, category, img, size = 'normal' }) => (
    <div className={`group relative overflow-hidden rounded-2xl cursor-pointer ${size === 'large' ? 'md:row-span-2' : ''
        }`}>
        <GeneratedImage
            prompt={img}
            className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${size === 'large' ? 'h-full min-h-[500px]' : 'aspect-[4/3]'
                }`}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute inset-0 flex flex-col justify-end p-8">
                <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Category badge */}
                    <span className="inline-block px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                        {category}
                    </span>

                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">{title}</h3>

                    <div className="flex items-center gap-4">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-primary transition-colors"
                        >
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-zinc-800 text-white hover:bg-primary hover:text-black transition-colors"
                        >
                            <ExternalLink className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Corner badge on hover */}
        <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-4 group-hover:translate-y-0">
            <ArrowUpRight className="w-5 h-5 text-black" />
        </div>
    </div>
);

export const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState('All');

    const projects = [
        {
            title: "Brand Identity System",
            category: "Branding",
            img: "Elegant brand identity mockup, business cards and letterhead on dark marble surface, gold foil accents, luxury aesthetic",
            size: "large"
        },
        {
            title: "E-Commerce Platform",
            category: "Development",
            img: "Modern e-commerce website interface on laptop, dark mode UI, floating product cards, neon accents",
            size: "normal"
        },
        {
            title: "Social Media Campaign",
            category: "Marketing",
            img: "Creative social media graphics floating in 3D space, colorful gradients, dark background",
            size: "normal"
        },
        {
            title: "Mobile App Design",
            category: "Design",
            img: "Premium mobile app UI design mockup, multiple screens floating, dark theme with neon green highlights",
            size: "normal"
        },
        {
            title: "Corporate Website",
            category: "Development",
            img: "Professional corporate website design on iMac screen, clean minimal layout, dark mode",
            size: "normal"
        },
    ];

    const filteredProjects = activeCategory === 'All'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                    <FadeIn direction="right">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Portfolio</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Recent creative <br />
                            <span className="hollow-text">work showcase</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" className="flex items-end lg:justify-end">
                        <div className="max-w-md">
                            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-6">
                                Experience the perfect blend of creativity and functionality through our carefully crafted projects.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:border-primary/50 transition-colors group"
                            >
                                View All Projects
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Filter Tabs */}
                <FadeIn direction="up" className="mb-12">
                    <div className="flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${activeCategory === cat
                                        ? 'bg-primary text-black'
                                        : 'bg-zinc-900 border border-zinc-800 text-white hover:border-primary/50'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </FadeIn>

                {/* Portfolio Grid */}
                <FadeIn direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project, index) => (
                            <PortfolioItem
                                key={index}
                                title={project.title}
                                category={project.category}
                                img={project.img}
                                size={project.size}
                            />
                        ))}
                    </div>
                </FadeIn>

                {/* Bottom CTA */}
                <div className="mt-16 text-center">
                    <FadeIn direction="up">
                        <div className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-zinc-900 border border-zinc-800 rounded-2xl">
                            <div className="text-left">
                                <h3 className="text-2xl font-bold text-white mb-2">Have a project in mind?</h3>
                                <p className="text-zinc-500">Let's collaborate and create something amazing together.</p>
                            </div>
                            <a
                                href="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group whitespace-nowrap"
                            >
                                Start Project
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
