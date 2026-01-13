import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { GeneratedImage } from '../ui/GeneratedImage';
import { Linkedin, Twitter, Instagram, ArrowRight, ArrowUpRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import 'swiper/css';

const TeamMember = ({ name, img, socials }) => (
    <div className="group relative">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-2xl mb-6">
            <img
                src={img}
                alt={name}
                className="w-full aspect-[3/4] object-cover transition-all duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Social Links */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3">
                    {socials?.linkedin && (
                        <a href={socials.linkedin} className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                            <Linkedin size={18} />
                        </a>
                    )}
                    {socials?.twitter && (
                        <a href={socials.twitter} className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                            <Twitter size={18} />
                        </a>
                    )}
                    {socials?.instagram && (
                        <a href={socials.instagram} className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full hover:bg-primary transition-colors">
                            <Instagram size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Corner Badge */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                <ArrowUpRight className="w-5 h-5 text-black" />
            </div>
        </div>

        {/* Info */}
        <div className="relative">
            <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{name}</h4>
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
        <section id="team" className="py-24 lg:py-32 bg-zinc-950 relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <FadeIn direction="right">
                        <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Our Team</h4>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            Meet the experts <br />
                            <span className="hollow-text">behind Vyaris</span>
                        </h2>
                    </FadeIn>

                    <FadeIn direction="left" className="flex items-end lg:justify-end">
                        <div className="max-w-md">
                            <p className="text-zinc-400 text-base lg:text-lg leading-relaxed mb-6">
                                Our talented team brings together diverse expertise and creative vision to deliver exceptional results.
                            </p>
                            <a
                                href="#careers"
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white hover:text-primary transition-colors group"
                            >
                                Join Our Team
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>



                {/* Team Grid/Slider */}
                <FadeIn direction="up">
                    <Swiper
                        modules={[Autoplay]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                            1280: { slidesPerView: 4 },
                        }}
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={teamMembers.length > 4}
                    >
                        {teamMembers.map((member, index) => (
                            <SwiperSlide key={index}>
                                <TeamMember
                                    name={member.name}
                                    img={member.img}
                                    socials={member.socials}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </FadeIn>

                {/* Bottom CTA */}
                <div className="mt-20 pt-12 border-t border-zinc-800">
                    <FadeIn direction="up">
                        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                            <div>
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Want to join our team?</h3>
                                <p className="text-zinc-500">We're always looking for talented individuals to join our growing team.</p>
                            </div>
                            <a
                                href="#careers"
                                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300 group"
                            >
                                View Open Positions
                                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
};
