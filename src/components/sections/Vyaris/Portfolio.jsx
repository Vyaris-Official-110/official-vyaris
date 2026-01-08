import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { GeneratedImage } from '../../ui/GeneratedImage';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '../../ui/FadeIn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PortfolioItem = ({ title, category, img }) => (
    <div className="group relative overflow-hidden rounded-lg cursor-pointer h-full">
        <GeneratedImage 
            prompt={img}
            className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
            <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">{category}</span>
                <h3 className="text-3xl font-bold text-white mb-6">{title}</h3>
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white text-black hover:bg-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                </span>
            </div>
        </div>
    </div>
);

export const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 bg-background relative overflow-hidden">
             <div className="absolute left-0 top-0 w-1/3 h-full bg-zinc-900/50 -skew-x-12 -z-0"></div>
             
             <div className="container mx-auto px-6 relative z-10">
                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                     <div className="lg:col-span-4">
                         <FadeIn direction="right" className="pr-12">
                             <h4 className="text-xl font-medium text-white mb-4">Recent Work</h4>
                             <p className="text-zinc-400 mb-8 leading-relaxed">
                                 Diasert carets dolor sit amet consectetur adipisicing elit. Deserunt ullam laboriosam, excepturi quibusdam ipsa sed maiores illo qui vel dicta impedit.
                             </p>
                             <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
                                 <h5 className="text-white font-bold text-lg">Experience the perfect blend of creativity and functionality</h5>
                             </div>
                         </FadeIn>
                     </div>
                     
                     <div className="lg:col-span-8">
                         <FadeIn direction="left">
                             <Swiper
                                modules={[Navigation, Pagination, Autoplay]}
                                spaceBetween={30}
                                slidesPerView={1}
                                breakpoints={{
                                    640: { slidesPerView: 2 },
                                }}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}
                                loop={true}
                                className="w-full"
                             >
                                 <SwiperSlide>
                                     <PortfolioItem 
                                        title="Motion Graphics" 
                                        category="Art & Design" 
                                        img="Abstract 3D colorful motion graphics, fluid shapes, dark background"
                                     />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <PortfolioItem 
                                        title="Market Branding" 
                                        category="Strategy" 
                                        img="Minimalist branding mockup on dark surface, luxury aesthetic, gold foil"
                                     />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <PortfolioItem 
                                        title="Digital Campaign" 
                                        category="Marketing" 
                                        img="Futuristic digital marketing dashboard, neon data visualization"
                                     />
                                 </SwiperSlide>
                                 <SwiperSlide>
                                     <PortfolioItem 
                                        title="Web Experience" 
                                        category="Development" 
                                        img="Isometric view of a modern website interface, dark mode, glowing elements"
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
