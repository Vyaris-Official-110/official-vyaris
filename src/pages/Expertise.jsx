import { Link } from 'react-router-dom';
import {
    ArrowRight,
    ArrowUpRight,
    Code,
    Palette,
    TrendingUp,
    Smartphone,
    Layers,
    Zap,
    Database
} from 'lucide-react';


const ServiceCard = ({ icon: Icon, title, description, features, index, highlighted }) => (
    <div className={`group relative p-8 lg:p-10 rounded-2xl transition-all duration-500 h-full ${highlighted
        ? 'bg-primary'
        : 'bg-zinc-900 border border-zinc-800 hover:border-primary/50'
        }`}>
        {/* Gradient overlay */}
        {!highlighted && (
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
        )}

        {/* Number */}
        <div className={`absolute top-6 right-6 text-6xl font-black ${highlighted ? 'text-black/10' : 'text-zinc-800 group-hover:text-primary/20'
            } transition-colors`}>
            {String(index).padStart(2, '0')}
        </div>

        <div className="relative z-10">
            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 ${highlighted
                ? 'bg-black/20'
                : 'bg-zinc-800 border border-zinc-700 group-hover:bg-primary group-hover:border-primary'
                }`}>
                <Icon className={`w-8 h-8 ${highlighted ? 'text-black' : 'text-zinc-400 group-hover:text-black'
                    } transition-colors`} />
            </div>

            {/* Content */}
            <h3 className={`text-2xl font-bold mb-4 ${highlighted ? 'text-black' : 'text-white group-hover:text-primary'
                } transition-colors`}>
                {title}
            </h3>
            <p className={`mb-6 leading-relaxed ${highlighted ? 'text-black/70' : 'text-zinc-400'
                }`}>
                {description}
            </p>

            {/* Features */}
            <ul className="space-y-2 mb-8">
                {features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${highlighted ? 'text-black/80' : 'text-zinc-500'
                        }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${highlighted ? 'bg-black' : 'bg-primary'
                            }`}></div>
                        {feature}
                    </li>
                ))}
            </ul>

            {/* Link */}
            <a
                href="/contact"
                className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider transition-colors ${highlighted ? 'text-black hover:text-white' : 'text-white hover:text-primary'
                    }`}
            >
                Learn More
                <ArrowRight className="w-4 h-4" />
            </a>
        </div>
    </div>
);

const ProcessStep = ({ number, title, description }) => (
    <div className="relative group">
        <div className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center text-2xl font-black text-zinc-600 group-hover:bg-primary group-hover:text-black group-hover:border-primary transition-all duration-300">
                {number}
            </div>
            <div>
                <h4 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">{title}</h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
);

const TechBadge = ({ name }) => (
    <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400 hover:border-primary/50 hover:text-white transition-all cursor-default">
        {name}
    </div>
);

export const Expertise = () => {
    const services = [
        {
            icon: Code,
            title: "Custom Software Development",
            description: "End-to-end software solutions including CRMs, enterprise applications, and automation tools tailored to your business needs.",
            features: ["CRM Systems", "Enterprise Apps", "Automation Tools", "API Development"],
            highlighted: true
        },
        {
            icon: Layers,
            title: "Web Development",
            description: "Custom web applications built with cutting-edge technologies for optimal performance and scalability.",
            features: ["React & Next.js", "Node.js Backend", "E-commerce Platforms", "Cloud Deployment"],
            highlighted: false
        },
        {
            icon: TrendingUp,
            title: "SEO Optimization",
            description: "Data-driven SEO strategies to boost your online visibility and drive organic traffic to your platforms.",
            features: ["Technical SEO", "On-page Optimization", "Content Strategy", "Analytics & Reporting"],
            highlighted: false
        },
    ];

    const technologies = [
        "React", "Next.js", "TypeScript", "Node.js", "Python", "AWS", "Docker",
        "PostgreSQL", "MongoDB", "GraphQL", "Tailwind CSS", "Figma", "Flutter", "Firebase"
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 mb-8">
                        <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <ArrowRight className="w-4 h-4 text-zinc-700" />
                        <span className="text-sm font-medium text-white">Expertise</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Expertise</h4>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
                                What we do <span className="hollow-text">best</span>
                            </h1>
                            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
                                We specialize in transforming complex challenges into elegant digital solutions. Our expertise spans across design, development, and digital strategy.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <a
                                    href="#services"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                                >
                                    Explore Services
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </a>
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wider rounded-full hover:border-primary/50 transition-colors duration-300"
                                >
                                    Start Project
                                </Link>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                                <div className="text-5xl font-black text-white mb-2">3</div>
                                <div className="text-zinc-500 text-sm">Core Services</div>
                            </div>
                            <div className="bg-primary rounded-2xl p-8">
                                <div className="text-5xl font-black text-black mb-2">98%</div>
                                <div className="text-black/60 text-sm">Success Rate</div>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                                <div className="text-5xl font-black text-white mb-2">2+</div>
                                <div className="text-zinc-500 text-sm">Years Experience</div>
                            </div>
                            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-primary/50 transition-colors">
                                <div className="text-5xl font-black text-white mb-2">10+</div>
                                <div className="text-zinc-500 text-sm">Projects Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Services</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Comprehensive digital <span className="hollow-text">solutions</span>
                        </h2>
                        <p className="text-zinc-400 text-lg">
                            From concept to launch, we provide end-to-end services tailored to your unique needs.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                                index={index + 1}
                                highlighted={service.highlighted}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Process</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                How we turn ideas into <span className="hollow-text">reality</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-12">
                                Our proven methodology ensures every project is delivered with excellence, on time, and within budget.
                            </p>

                            <div className="space-y-8">
                                <ProcessStep
                                    number="01"
                                    title="Discovery & Research"
                                    description="We dive deep into understanding your business, goals, and target audience."
                                />
                                <ProcessStep
                                    number="02"
                                    title="Strategy & Planning"
                                    description="Develop a comprehensive roadmap aligned with your objectives."
                                />
                                <ProcessStep
                                    number="03"
                                    title="Design & Development"
                                    description="Create and build your solution with iterative feedback loops."
                                />
                                <ProcessStep
                                    number="04"
                                    title="Launch & Support"
                                    description="Deploy your project and provide ongoing maintenance and optimization."
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src="/Expertise/expertise_hero.png"
                                    alt="Modern creative workspace showcasing our expertise"
                                    className="w-full aspect-square object-cover"
                                />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 -left-6 bg-primary rounded-2xl p-6 shadow-2xl shadow-primary/20">
                                <div className="flex items-center gap-4">
                                    <Zap className="w-8 h-8 text-black" />
                                    <div>
                                        <div className="text-2xl font-black text-black">2x Faster</div>
                                        <div className="text-black/60 text-sm">Delivery Time</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-24 bg-zinc-950 border-y border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Technologies</h4>
                        <h3 className="text-3xl font-bold text-white">Tools & Technologies We Use</h3>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {technologies.map((tech, i) => (
                            <TechBadge key={i} name={tech} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Ready to start your <span className="text-primary">project</span>?
                        </h2>
                        <p className="text-zinc-400 text-lg mb-10 max-w-2xl mx-auto">
                            Let's discuss how our expertise can help transform your ideas into exceptional digital experiences.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                            >
                                Get in Touch
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </Link>
                            <a
                                href="#services"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800 border border-zinc-700 text-white font-bold uppercase tracking-wider rounded-full hover:border-primary/50 transition-colors duration-300"
                            >
                                View Services
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
