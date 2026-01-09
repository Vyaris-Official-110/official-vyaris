import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Linkedin, Twitter, Mail, Users, Award, Globe } from 'lucide-react';
import { GeneratedImage } from '../components/ui/GeneratedImage';

const TeamMemberCard = ({ name, role, department, img, socials, featured }) => (
    <div className={`group relative ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}>
        <div className={`relative overflow-hidden rounded-2xl ${featured ? 'h-full' : ''}`}>
            {/* Image */}
            <GeneratedImage
                prompt={img}
                className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${
                    featured ? 'h-full min-h-[500px]' : 'aspect-[3/4]'
                }`}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    {/* Department Badge */}
                    <span className="inline-block px-3 py-1 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                        {department}
                    </span>

                    {/* Name & Role */}
                    <h3 className={`font-bold text-white mb-1 ${featured ? 'text-3xl' : 'text-xl'}`}>
                        {name}
                    </h3>
                    <p className="text-zinc-400 text-sm mb-4">{role}</p>

                    {/* Socials */}
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        {socials?.linkedin && (
                            <a href={socials.linkedin} className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-black transition-colors">
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

const DepartmentFilter = ({ departments, active, onChange }) => (
    <div className="flex flex-wrap gap-3">
        {departments.map((dept) => (
            <button
                key={dept.id}
                onClick={() => onChange(dept.id)}
                className={`px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                    active === dept.id
                        ? 'bg-primary text-black'
                        : 'bg-zinc-900 border border-zinc-800 text-white hover:border-primary/50'
                }`}
            >
                {dept.label}
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                    active === dept.id ? 'bg-black/20' : 'bg-zinc-800'
                }`}>
                    {dept.count}
                </span>
            </button>
        ))}
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
    const [activeDepartment, setActiveDepartment] = useState('all');

    const departments = [
        { id: 'all', label: 'All Team', count: '12' },
        { id: 'leadership', label: 'Leadership', count: '3' },
        { id: 'design', label: 'Design', count: '4' },
        { id: 'development', label: 'Development', count: '5' },
    ];

    const teamMembers = [
        {
            name: "James Anderson",
            role: "CEO & Founder",
            department: "leadership",
            img: "Professional headshot of a confident CEO, dark suit, warm smile, studio lighting, dark background, high quality portrait",
            socials: { linkedin: "#", twitter: "#", email: "james@vyaris.com" },
            featured: true
        },
        {
            name: "Sarah Chen",
            role: "Creative Director",
            department: "leadership",
            img: "Professional portrait of an Asian businesswoman, creative director, stylish modern attire, confident pose, dark studio background",
            socials: { linkedin: "#", twitter: "#" },
            featured: false
        },
        {
            name: "Michael Torres",
            role: "Lead Developer",
            department: "development",
            img: "Portrait of a Hispanic tech professional, casual smart attire, glasses, friendly expression, dark background",
            socials: { linkedin: "#", email: "michael@vyaris.com" },
            featured: false
        },
        {
            name: "Emily Rodriguez",
            role: "UI/UX Designer",
            department: "design",
            img: "Creative portrait of a young Latina woman designer, artistic vibe, colorful accessories, dark background",
            socials: { linkedin: "#", twitter: "#" },
            featured: false
        },
        {
            name: "David Kim",
            role: "CTO",
            department: "leadership",
            img: "Professional headshot of an Asian American CTO, sharp suit, confident look, dark studio background",
            socials: { linkedin: "#", twitter: "#", email: "david@vyaris.com" },
            featured: false
        },
        {
            name: "Anna Schmidt",
            role: "Senior Designer",
            department: "design",
            img: "Portrait of a European creative professional woman, modern style, artistic background, studio lighting",
            socials: { linkedin: "#" },
            featured: false
        },
        {
            name: "Marcus Johnson",
            role: "Full Stack Developer",
            department: "development",
            img: "Professional portrait of an African American developer, casual tech attire, confident smile, dark background",
            socials: { linkedin: "#", twitter: "#" },
            featured: false
        },
        {
            name: "Lisa Wang",
            role: "Product Designer",
            department: "design",
            img: "Portrait of an Asian woman product designer, modern professional look, creative environment, dark background",
            socials: { linkedin: "#", email: "lisa@vyaris.com" },
            featured: false
        },
        {
            name: "Alex Petrov",
            role: "Backend Engineer",
            department: "development",
            img: "Portrait of a Eastern European software engineer, smart casual, focused expression, dark background",
            socials: { linkedin: "#" },
            featured: false
        },
    ];

    const filteredMembers = activeDepartment === 'all'
        ? teamMembers
        : teamMembers.filter(m => m.department === activeDepartment);

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

                    {/* Filters */}
                    <div className="flex justify-center mb-12">
                        <DepartmentFilter
                            departments={departments}
                            active={activeDepartment}
                            onChange={setActiveDepartment}
                        />
                    </div>

                    {/* Team Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {filteredMembers.map((member, index) => (
                            <TeamMemberCard
                                key={index}
                                name={member.name}
                                role={member.role}
                                department={member.department}
                                img={member.img}
                                socials={member.socials}
                                featured={member.featured && activeDepartment === 'all'}
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
                                        <GeneratedImage
                                            prompt="Modern office collaboration space, team meeting, diverse professionals, dark ambient lighting"
                                            className="w-full aspect-[4/5] object-cover"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <GeneratedImage
                                            prompt="Creative brainstorming session, sticky notes on glass wall, modern office, dark theme"
                                            className="w-full aspect-square object-cover"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-4 pt-8">
                                    <div className="rounded-2xl overflow-hidden">
                                        <GeneratedImage
                                            prompt="Team celebration, office party, diverse happy professionals, modern workspace"
                                            className="w-full aspect-square object-cover"
                                        />
                                    </div>
                                    <div className="rounded-2xl overflow-hidden">
                                        <GeneratedImage
                                            prompt="Remote work setup, video call with team, professional home office, dark aesthetic"
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
