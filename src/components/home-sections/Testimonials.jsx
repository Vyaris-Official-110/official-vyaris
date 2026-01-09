import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { FadeIn } from '../ui/FadeIn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestimonialItem = ({ rating, text, name, cname, img }) => (
    <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-lg h-full min-h-[320px] flex flex-col">
        <div className="flex items-center gap-4 mb-6">
            <span className="text-2xl font-bold text-white">{rating}</span>
            <div className="flex gap-1 text-primary">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                ))}
            </div>
        </div>
        <p className="text-zinc-400 mb-8 italic leading-relaxed flex-1">
            "{text}"
        </p>
        <div className="flex items-center gap-4 mt-auto">
            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <GeneratedImage
                    prompt={img}
                    className="w-full h-full object-cover"
                />
            </div>
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <span className="text-zinc-500 text-sm">{cname}</span>
            </div>
        </div>
    </div>
);

export const Testimonials = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 mb-16 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end gap-8">
                    <FadeIn direction="right" className="max-w-xl">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Testimonials</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-white">What Our Clients Say</h2>
                    </FadeIn>
                    <FadeIn direction="left" className="text-right">
                        <h2 className="text-6xl font-bold text-white">4.9</h2>
                        <div className="flex gap-1 justify-end text-primary my-2">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-zinc-500">Based on 145 Reviews</span>
                    </FadeIn>
                </div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <FadeIn direction="up">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        loop={true}
                        className="pb-12"
                    >
                        <SwiperSlide className="!h-auto">
                            <TestimonialItem
                                rating="5.0"
                                text="Targeting consultation discover apartments. Indulgence off under folly death is wrote causes maintaining way spite. Plan upon yet way get coldest spot its week."
                                name="Michel Dark"
                                cname="Envato Client"
                                img="Portrait of a happy client, man, casual, dark background"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="!h-auto">
                            <TestimonialItem
                                rating="4.8"
                                text="Mentioning consultation discover apartments. Indulgence off under folly death is wrote causes maintaining way spite. Plan upon yet way get coldest spot its week."
                                name="Alex Hales"
                                cname="Tech Startup CEO"
                                img="Portrait of a professional woman, glasses, office background"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="!h-auto">
                            <TestimonialItem
                                rating="4.9"
                                text="Almost do am or limits hearts resolve parties the regular intension. Plan upon yet way get coldest spot its week."
                                name="Micky James"
                                cname="Creative Director"
                                img="Portrait of a creative professional, artistic lighting"
                            />
                        </SwiperSlide>
                        <SwiperSlide className="!h-auto">
                            <TestimonialItem
                                rating="5.0"
                                text="Exceptional service and support throughout the entire process. The team really understood our vision."
                                name="Sarah Jenkins"
                                cname="Marketing Head"
                                img="Portrait of a young business woman, professional, blurred background"
                            />
                        </SwiperSlide>
                    </Swiper>
                </FadeIn>
            </div>
        </section>
    );
};
