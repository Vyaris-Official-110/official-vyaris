import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { GeneratedImage } from '../ui/GeneratedImage';
import { Linkedin, Facebook, Twitter, Plus } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import 'swiper/css';

const TeamMember = ({ name, role, img }) => (
    <div className="group relative">
        <div className="relative overflow-hidden rounded-lg mb-6">
            <GeneratedImage 
                prompt={img}
                className="w-full aspect-[3/4] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            {/* Social Overlay */}
            <div className="absolute inset-0 bg-primary/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 translate-y-4 group-hover:translate-y-0 transform">
                <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Linkedin size={18} /></a>
                <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Facebook size={18} /></a>
                <a href="#" className="w-10 h-10 bg-black text-white flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-colors"><Twitter size={18} /></a>
            </div>
            <div className="absolute bottom-4 right-4 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity">
                <Plus size={20} />
            </div>
        </div>
        <div>
            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{name}</h4>
            <span className="text-zinc-500 text-sm">{role}</span>
        </div>
    </div>
);

export const Team = () => {
    const [activeTab, setActiveTab] = useState('leaders');

    return (
        <section id="team" className="py-24 bg-zinc-950">
            <div className="container mx-auto px-6">
                 <div className="text-center max-w-3xl mx-auto mb-16">
                     <FadeIn>
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Team Members</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">Meet Our Experts</h2>
                     </FadeIn>
                 </div>
                 
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                     <div className="lg:col-span-3">
                         <FadeIn direction="right" className="flex flex-col gap-2">
                             {[
                                 { id: 'leaders', label: 'Managing Director', sub: 'Head of Department' },
                                 { id: 'marketing', label: 'Marketing Manager', sub: 'Sales Department' },
                                 { id: 'dev', label: 'Software Developer', sub: 'App Department' }
                             ].map((tab) => (
                                 <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`text-left p-6 rounded-lg transition-all border ${
                                        activeTab === tab.id 
                                        ? 'bg-zinc-900 border-primary/50' 
                                        : 'bg-transparent border-transparent hover:bg-zinc-900'
                                    }`}
                                 >
                                     <strong className={`block text-lg mb-1 ${activeTab === tab.id ? 'text-primary' : 'text-white'}`}>
                                         {tab.label}
                                     </strong>
                                     <span className="text-zinc-500 text-sm">{tab.sub}</span>
                                 </button>
                             ))}
                         </FadeIn>
                     </div>
                     
                     <div className="lg:col-span-9">
                         <FadeIn direction="left" key={activeTab}>
                             <Swiper
                                modules={[Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                autoplay={{ delay: 3000 }}
                                loop={true}
                             >
                                 <SwiperSlide>
                                     <TeamMember 
                                        name="James Baker" 
                                        role="CEO & Founder" 
                                        img="Professional headshot of a CEO, confident look, dark studio background, high quality lighting"
                                     />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <TeamMember 
                                        name="Dalton Gran" 
                                        role="Chairman" 
                                        img="Professional headshot of a business chairman, mature, suit, dark background"
                                     />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <TeamMember 
                                        name="Ryan Ricketts" 
                                        role="Manager" 
                                        img="Professional headshot of a young creative manager, glasses, smart casual, dark background"
                                     />
                                 </SwiperSlide>
                                  <SwiperSlide>
                                     <TeamMember 
                                        name="Sarah Connor" 
                                        role="Lead Developer" 
                                        img="Professional headshot of a woman tech lead, smart, dark background"
                                     />
                                 </SwiperSlide>
                             </Swiper>
                         </FadeIn>
                     </div>
                 </div>
            </div>
        </section>
    );
};
