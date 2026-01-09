import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { GeneratedImage } from '../ui/GeneratedImage';
import { FadeIn } from '../ui/FadeIn';
import 'swiper/css';
import 'swiper/css/pagination';

const TestimonialItem = ({ rating, text, name, role, company, img }) => (
    <div className="group relative bg-zinc-900 border border-zinc-800 p-8 lg:p-10 rounded-2xl h-full min-h-[380px] flex flex-col hover:border-primary/50 transition-all duration-500">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

        {/* Quote icon */}
        <div className="absolute top-8 right-8 lg:top-10 lg:right-10">
            <Quote className="w-12 h-12 text-zinc-800 group-hover:text-primary/20 transition-colors duration-500" />
        </div>

        <div className="relative z-10 flex flex-col h-full">
            {/* Rating */}
            <div className="flex items-center gap-3 mb-6">
                <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            className={`w-5 h-5 ${i < Math.floor(parseFloat(rating)) ? 'text-primary fill-primary' : 'text-zinc-700'}`}
                        />
                    ))}
                </div>
                <span className="text-sm font-bold text-white">{rating}</span>
            </div>

            {/* Testimonial text */}
            <p className="text-zinc-300 text-lg leading-relaxed flex-1 mb-8">
                "{text}"
            </p>

            {/* Author info */}
            <div className="flex items-center gap-4 pt-6 border-t border-zinc-800 mt-auto">
                <div className="relative">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-zinc-700 group-hover:border-primary transition-colors duration-300">
                        <GeneratedImage
                            prompt={img}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-zinc-900 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-black">✓</span>
                    </div>
                </div>
                <div>
                    <h4 className="text-white font-bold text-lg">{name}</h4>
                    <div className="flex items-center gap-2 text-sm">
                        <span className="text-primary">{role}</span>
                        <span className="text-zinc-600">•</span>
                        <span className="text-zinc-500">{company}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export const Testimonials = () => {
    const testimonials = [
        {
            rating: "5.0",
            text: "Working with Vyaris transformed our digital presence completely. Their strategic approach and creative execution exceeded all expectations.",
            name: "Michel Dark",
            role: "CEO",
            company: "TechVentures",
            img: "Professional headshot of a confident businessman, dark suit, neutral background, studio lighting"
        },
        {
            rating: "4.9",
            text: "The team's attention to detail and commitment to excellence made all the difference. They truly understood our vision and brought it to life.",
            name: "Sarah Chen",
            role: "Marketing Director",
            company: "InnovateCo",
            img: "Professional portrait of an Asian businesswoman, modern office background, warm lighting"
        },
        {
            rating: "5.0",
            text: "Exceptional creativity combined with technical expertise. Vyaris delivered a solution that perfectly aligned with our brand identity.",
            name: "James Wilson",
            role: "Creative Director",
            company: "DesignHub",
            img: "Creative professional portrait, artistic lighting, casual business attire"
        },
        {
            rating: "4.8",
            text: "From concept to execution, the entire process was seamless. Their proactive communication and expert guidance made collaboration effortless.",
            name: "Emily Rodriguez",
            role: "Founder",
            company: "StartupX",
            img: "Young entrepreneur portrait, confident smile, modern workspace background"
        },
    ];

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <FadeIn direction="right">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Testimonials</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            What clients <br />
                            <span className="hollow-text">say about us</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" className="flex items-end lg:justify-end">
                        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 inline-block">
                            <div className="flex items-center gap-6">
                                <div>
                                    <div className="text-6xl lg:text-7xl font-black text-white">4.9</div>
                                    <div className="flex gap-1 mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                                        ))}
                                    </div>
                                </div>
                                <div className="border-l border-zinc-700 pl-6">
                                    <div className="text-3xl font-bold text-white">145+</div>
                                    <div className="text-zinc-500 text-sm">Verified Reviews</div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>

                {/* Testimonials Slider */}
                <FadeIn direction="up">
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1280: { slidesPerView: 3 },
                        }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{
                            clickable: true,
                            bulletClass: 'swiper-pagination-bullet !w-3 !h-3 !bg-zinc-700 !opacity-100',
                            bulletActiveClass: '!bg-primary !w-8 !rounded-full',
                        }}
                        loop={true}
                        className="pb-16"
                    >
                        {testimonials.map((testimonial, index) => (
                            <SwiperSlide key={index} className="!h-auto">
                                <TestimonialItem {...testimonial} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeIn>
            </div>
        </section>
    );
};
