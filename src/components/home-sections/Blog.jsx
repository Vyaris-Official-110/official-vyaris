import { ArrowRight, ArrowUpRight, User, Clock } from 'lucide-react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { FadeIn } from '../ui/FadeIn';

const BlogCard = ({ img, date, author, readTime, title, excerpt, category, featured }) => (
    <div className={`group cursor-pointer ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}>
        <div className={`relative h-full bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 ${
            featured ? 'flex flex-col lg:flex-row' : ''
        }`}>
            {/* Image */}
            <div className={`relative overflow-hidden ${featured ? 'lg:w-1/2' : ''}`}>
                <GeneratedImage
                    prompt={img}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        featured ? 'h-64 lg:h-full' : 'aspect-video'
                    }`}
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-primary text-black text-xs font-bold uppercase tracking-wider rounded-full">
                        {category}
                    </span>
                </div>

                {/* Date Badge */}
                <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="text-2xl font-black text-white leading-none">{date.split(' ')[0]}</div>
                    <div className="text-xs text-zinc-400 uppercase">{date.split(' ')[1]}</div>
                </div>
            </div>

            {/* Content */}
            <div className={`p-6 lg:p-8 flex flex-col ${featured ? 'lg:w-1/2 justify-center' : ''}`}>
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-zinc-500 mb-4">
                    <span className="flex items-center gap-1.5">
                        <User size={14} className="text-primary" />
                        {author}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <Clock size={14} className="text-primary" />
                        {readTime}
                    </span>
                </div>

                {/* Title */}
                <h3 className={`font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2 ${
                    featured ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                    {title}
                </h3>

                {/* Excerpt - only for featured */}
                {featured && (
                    <p className="text-zinc-400 mb-6 line-clamp-3 leading-relaxed">
                        {excerpt}
                    </p>
                )}

                {/* Read More Link */}
                <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white group-hover:text-primary transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                </div>
            </div>
        </div>
    </div>
);

export const Blog = () => {
    const posts = [
        {
            img: "Modern workspace with laptop showing code editor, coffee cup, plants, dark moody lighting",
            date: "14 Jan",
            author: "Sarah Chen",
            readTime: "5 min read",
            title: "The Future of Web Development: Trends to Watch in 2024",
            excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI-powered tools to edge computing.",
            category: "Development",
            featured: true
        },
        {
            img: "Creative team brainstorming session in modern office, whiteboard with colorful sticky notes",
            date: "10 Jan",
            author: "James Baker",
            readTime: "4 min read",
            title: "Building a Strong Brand Identity from Scratch",
            category: "Branding",
            featured: false
        },
        {
            img: "Digital marketing analytics dashboard on large screen, graphs and charts, dark theme",
            date: "06 Jan",
            author: "Emily Rodriguez",
            readTime: "6 min read",
            title: "Data-Driven Marketing Strategies for Growth",
            category: "Marketing",
            featured: false
        },
        {
            img: "UI designer working on mobile app interface, multiple screens, design tools",
            date: "02 Jan",
            author: "Michael Torres",
            readTime: "3 min read",
            title: "Essential UI/UX Principles Every Designer Should Know",
            category: "Design",
            featured: false
        },
    ];

    return (
        <section id="blog" className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <FadeIn direction="right">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Blog</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Latest insights <br />
                            <span className="hollow-text">& news</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" className="flex items-end lg:justify-end">
                        <div className="max-w-md">
                            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-6">
                                Stay updated with the latest trends, insights, and best practices in design, development, and digital marketing.
                            </p>
                            <a
                                href="#"
                                className="inline-flex items-center gap-3 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:border-primary/50 transition-colors group"
                            >
                                View All Articles
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* Blog Grid */}
                <FadeIn direction="up">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {posts.map((post, index) => (
                            <BlogCard
                                key={index}
                                img={post.img}
                                date={post.date}
                                author={post.author}
                                readTime={post.readTime}
                                title={post.title}
                                excerpt={post.excerpt}
                                category={post.category}
                                featured={post.featured}
                            />
                        ))}
                    </div>
                </FadeIn>

                {/* Newsletter CTA */}
                <FadeIn direction="up" className="mt-20">
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 lg:p-12">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                            <div>
                                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3">
                                    Subscribe to our newsletter
                                </h3>
                                <p className="text-zinc-400">
                                    Get the latest articles, resources, and inspiration delivered directly to your inbox.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="flex-1 px-6 py-4 bg-zinc-800 border border-zinc-700 rounded-full text-white placeholder:text-zinc-500 focus:outline-none focus:border-primary transition-colors"
                                />
                                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group whitespace-nowrap">
                                    Subscribe
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
