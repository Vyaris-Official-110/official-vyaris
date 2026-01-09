import { MapPin, Navigation, ExternalLink } from 'lucide-react';

export const ContactMap = () => (
    <section id="map" className="relative bg-zinc-950">
        {/* Header */}
        <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
                <div>
                    <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Our Location</h4>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white">Find us on the map</h3>
                </div>
                <a
                    href="https://maps.google.com/?q=40.711233,-74.00332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-white hover:border-primary/50 transition-colors group"
                >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                    <ExternalLink className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
            </div>
        </div>

        {/* Map Container */}
        <div className="relative h-[500px] lg:h-[600px] w-full">
            {/* Map */}
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48388.929990966964!2d-74.00332!3d40.711233!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1653598669477!5m2!1sen!2sus"
                className="w-full h-full border-0 filter grayscale brightness-[0.4] contrast-[1.2]"
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
            ></iframe>

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/50 pointer-events-none"></div>

            {/* Floating Location Card */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-auto">
                <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl max-w-sm">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                            <MapPin className="w-6 h-6 text-black" />
                        </div>
                        <div>
                            <h4 className="text-lg font-bold text-white mb-1">Vyaris Headquarters</h4>
                            <p className="text-zinc-400 text-sm mb-3">
                                123 Creative Street<br />
                                New York, NY 10001
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                                <span className="text-xs text-zinc-500">Open Mon-Fri, 9AM-6PM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Map Pin Marker */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none">
                <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full animate-ping absolute"></div>
                    <div className="w-4 h-4 bg-primary rounded-full relative z-10"></div>
                </div>
            </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-zinc-900 border-t border-zinc-800">
            <div className="container mx-auto px-6 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">Address</span>
                        <span className="text-white">123 Creative Street, New York, NY 10001</span>
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">Phone</span>
                        <a href="tel:+14155551234" className="text-white hover:text-primary transition-colors">
                            +1 (415) 555-1234
                        </a>
                    </div>
                    <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-2">Email</span>
                        <a href="mailto:hello@vyaris.com" className="text-white hover:text-primary transition-colors">
                            hello@vyaris.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
