import React from 'react';
import { ArrowRight, Calendar, User, MessageSquare } from 'lucide-react';
import { GeneratedImage } from '../../ui/GeneratedImage';

const BlogItem = ({ img, date, author, comments, title }) => (
    <div className="group cursor-pointer">
        <div className="relative overflow-hidden rounded-lg mb-6">
            <GeneratedImage 
                prompt={img}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 bg-primary text-black px-4 py-2 font-bold rounded shadow-lg text-center leading-tight">
                {date.split(' ')[0]} <br/> <span className="text-xs font-normal uppercase">{date.split(' ')[1]}</span>
            </div>
        </div>
        
        <div className="flex items-center gap-6 text-xs text-zinc-500 mb-4 uppercase tracking-wider font-bold">
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><User size={14} /> {author}</span>
            <span className="flex items-center gap-2 hover:text-primary transition-colors"><MessageSquare size={14} /> {comments} Comments</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-primary transition-colors line-clamp-2">
            {title}
        </h3>
        
        <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white border-b border-zinc-700 pb-1 hover:text-primary hover:border-primary transition-colors">
            Continue Reading <ArrowRight className="w-4 h-4" />
        </div>
    </div>
);

export const Blog = () => {
    return (
        <section id="blog" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                     <h4 className="text-primary font-bold uppercase tracking-widest mb-4">News & Events</h4>
                     <h2 className="text-3xl md:text-4xl font-bold text-white">Latest blog posts</h2>
                 </div>
                 
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                     <BlogItem 
                        img="Laptop workspace with coffee visuals, coding screen, dark mode aesthetic"
                        date="14 Sep"
                        author="Md Sohag"
                        comments="18"
                        title="Miscovery incommode earnestly commanded"
                     />
                     <BlogItem 
                        img="Team brainstorming session in modern office, whiteboard graphics"
                        date="06 Oct"
                        author="Md Sohag"
                        comments="12"
                        title="Expression acceptance imprudence particular"
                     />
                 </div>
            </div>
        </section>
    );
};
