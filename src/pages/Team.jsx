import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Linkedin, Twitter, Mail, Users, Award, Globe } from 'lucide-react';

const TeamMemberCard = ({ name, img, socials, featured }) => (
    <div className={`group relative ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className={`relative overflow-hidden rounded-2xl ${featured ? 'h-full' : ''}`}>
            {/* Image */}
            <img
                src={img}
                alt={name}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${featured ? 'h-full min-h-[500px]' : 'aspect-[3/4]'
                    }`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Name */}
                    <h3 className={`font-bold text-white mb-3 ${featured ? 'text-3xl' : 'text-xl'}`}>
                        {name}
                    </h3>

                    {/* Socials */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {socials?.linkedin && (
                            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Linkedin size={16} />
                            </a>
                        )}
                        {socials?.twitter && (
                            <a href={socials.twitter} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Twitter size={16} />
                            </a>
                        )}
                        {socials?.email && (
                            <a href={`mailto:${socials.email}`} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
                                <Mail size={16} />
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute top-4 right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
        </div>
    </div>
);


const StatCard = ({ icon: Icon, value, label }) => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-primary/50 transition-colors group">
        <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center group-hover:bg-primary transition-colors">
                <Icon className="w-6 h-6 text-zinc-400 group-hover:text-black transition-colors" />
            </div>
            <div>
                <div className="text-3xl font-black text-white">{value}</div>
                <div className="text-zinc-500 text-sm">{label}</div>
            </div>
        </div>
    </div>
);

export const Team = () => {
    const teamMembers = [
        {
            name: "Ansh Raiyani",
            img: "/team/AnshRaiyani.jpeg",
            socials: { linkedin: "https://www.linkedin.com/in/ansh-raiyani-b33511223/" }
        },
        {
            name: "Aum Patel",
            img: "/team/AumPatel.jpg",
            socials: { linkedin: "https://www.linkedin.com/in/aum-patel-945561222/" }
        },
        {
            name: "Poojan Prajapati",
            img: "/team/PoojanPrajapati.jpg",
            socials: { linkedin: "https://www.linkedin.com/in/poojan-prajapati-a866082b1/" }
        },
        {
            name: "Kush Rana",
            img: "/team/DevVaghela.jpg", // Placeholder until photo is available
            socials: { linkedin: "https://www.linkedin.com/in/kush-rana-9357b7272/" }
        },
        {
            name: "Dev Vaghela",
            img: "/team/DevVaghela.jpg",
            socials: { linkedin: "https://www.linkedin.com/in/dev-vaghela-dev1900/" }
        },
        {
            name: "Yaksh Patel",
            img: "/team/YakshPatel.jpg",
            socials: { linkedin: "https://www.linkedin.com/in/yaksh-patel-b04875245/" }
        },
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Breadcrumb */}
                    <nav className="flex items-center gap-2 mb-8">
                        <Link to="/" className="text-sm font-medium text-zinc-500 hover:text-primary transition-colors">
                            Home
                        </Link>
                        <ArrowRight className="w-4 h-4 text-zinc-700" />
                        <span className="text-sm font-medium text-white">Our Team</span>
                    </nav>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Team</h4>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] tracking-tight mb-6">
                                Meet the <span className="hollow-text">experts</span>
                            </h1>
                            <p className="text-zinc-400 text-lg lg:text-xl leading-relaxed mb-8 max-w-xl">
                                Our talented team brings together diverse expertise, creative vision, and technical excellence to deliver exceptional results.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                                >
                                    Work With Us
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                                <a
                                    href="#careers"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-wider rounded-full hover:border-primary/50 transition-colors duration-300"
                                >
                                    View Careers
                                </a>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <StatCard icon={Users} value="50+" label="Team Members" />
                            <StatCard icon={Globe} value="25+" label="Countries" />
                            <StatCard icon={Award} value="15+" label="Years Experience" />
                            <div className="bg-primary rounded-2xl p-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-black/20 rounded-xl flex items-center justify-center">
                                        <ArrowUpRight className="w-6 h-6 text-black" />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-black">100%</div>
                                        <div className="text-black/60 text-sm">Remote Friendly</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Grid Section */}
            <section className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
                <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">The Team</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Talented individuals, <span className="hollow-text">one team</span>
                        </h2>
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                img={member.img}
                                socials={member.socials}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Culture Section */}
            <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-4">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/team/AnshRaiyani.jpeg"
                                            alt="Ansh Raiyani"
                                            className="w-full aspect-[4/5] object-cover"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/team/AumPatel.jpg"
                                            alt="Aum Patel"
                                            className="w-full aspect-square object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/team/DevVaghela.jpg"
                                            alt="Dev Vaghela"
                                            className="w-full aspect-square object-cover"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <img
                                            src="/team/YakshPatel.jpg"
                                            alt="Yaksh Patel"
                                            className="w-full aspect-[4/5] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Floating badge */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-primary rounded-2xl px-8 py-4 shadow-2xl shadow-primary/20">
                                <div className="text-center">
                                    <div className="text-2xl font-black text-black">Great Place to Work</div>
                                    <div className="text-black/60 text-sm">Certified 2024</div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Culture</h4>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                                Where creativity <span className="hollow-text">thrives</span>
                            </h2>
                            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                                We've built a culture that values innovation, collaboration, and personal growth. Our team members are empowered to take ownership, experiment boldly, and push boundaries.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Remote-First", desc: "Work from anywhere in the world with flexible hours." },
                                    { title: "Continuous Learning", desc: "Learning budget and time dedicated to personal development." },
                                    { title: "Health & Wellness", desc: "Comprehensive benefits including mental health support." },
                                    { title: "Team Events", desc: "Regular virtual and in-person gatherings to connect." },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-4 group">
                                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                        <div>
                                            <h4 className="text-white font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h4>
                                            <p className="text-zinc-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Join Us CTA */}
            <section id="careers" className="py-24 lg:py-32 bg-zinc-950 border-t border-zinc-800">
                <div className="container mx-auto px-6">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 lg:p-16">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Join Our Team</h4>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                                    Want to work with us?
                                </h2>
                                <p className="text-zinc-400 text-lg mb-8">
                                    We're always looking for talented individuals to join our growing team. Check out our open positions and become part of something great.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="#"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                                    >
                                        View Open Positions
                                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-800 border border-zinc-700 text-white font-bold uppercase tracking-wider rounded-full hover:border-primary/50 transition-colors duration-300"
                                    >
                                        Contact HR
                                    </Link>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-black text-white mb-2">5+</div>
                                    <div className="text-zinc-500 text-sm">Open Positions</div>
                                </div>
                                <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-black text-white mb-2">100%</div>
                                    <div className="text-zinc-500 text-sm">Remote</div>
                                </div>
                                <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-black text-white mb-2">4.8</div>
                                    <div className="text-zinc-500 text-sm">Glassdoor Rating</div>
                                </div>
                                <div className="bg-primary rounded-2xl p-6 text-center">
                                    <div className="text-4xl font-black text-black mb-2">∞</div>
                                    <div className="text-black/60 text-sm">Growth Potential</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
