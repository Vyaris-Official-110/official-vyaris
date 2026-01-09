import { Star } from 'lucide-react';

const tickerItems = [
    { text: 'Web Development', highlight: true },
    { text: 'Brand Strategy', highlight: false },
    { text: 'UI/UX Design', highlight: true },
    { text: 'Digital Marketing', highlight: false },
    { text: 'Mobile Apps', highlight: true },
    { text: 'E-Commerce', highlight: false },
    { text: 'SEO Optimization', highlight: true },
    { text: 'Content Creation', highlight: false },
];

export const Ticker = () => {
    return (
        <div className="relative border-y border-zinc-800 bg-zinc-950 py-6 overflow-hidden">
            {/* Gradient Fades */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>

            <div className="flex whitespace-nowrap">
                {/* First set - scrolling */}
                <div className="flex gap-8 animate-infinite-scroll">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className={`text-3xl md:text-4xl font-black uppercase tracking-tight ${
                                item.highlight ? 'text-white' : 'hollow-text'
                            }`}>
                                {item.text}
                            </span>
                            <Star className="w-6 h-6 text-primary fill-primary flex-shrink-0" />
                        </div>
                    ))}
                </div>

                {/* Duplicate for seamless loop */}
                <div className="flex gap-8 animate-infinite-scroll" aria-hidden="true">
                    {[...tickerItems, ...tickerItems].map((item, i) => (
                        <div key={i} className="flex items-center gap-8">
                            <span className={`text-3xl md:text-4xl font-black uppercase tracking-tight ${
                                item.highlight ? 'text-white' : 'hollow-text'
                            }`}>
                                {item.text}
                            </span>
                            <Star className="w-6 h-6 text-primary fill-primary flex-shrink-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
