import { Phone, Mail, MapPin, Clock, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactCard = ({ icon: Icon, label, value, href, highlight }) => (
    <a
        href={href}
        className={`group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 ${
            highlight
                ? 'bg-primary'
                : 'bg-zinc-900 border border-zinc-800 hover:border-primary/50'
        }`}
    >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
            highlight
                ? 'bg-black/20'
                : 'bg-zinc-800 group-hover:bg-primary group-hover:text-black'
        }`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-black' : 'text-zinc-400 group-hover:text-black'}`} />
        </div>
        <div>
            <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                highlight ? 'text-black/60' : 'text-zinc-500'
            }`}>
                {label}
            </span>
            <span className={`text-lg font-semibold block ${
                highlight ? 'text-black' : 'text-white'
            }`}>
                {value}
            </span>
        </div>
    </a>
);

export const ContactInfo = () => (
    <div className="h-full flex flex-col">
        {/* Header */}
        <div className="mb-10">
            <h4 className="text-primary font-bold uppercase tracking-widest mb-4">Contact Info</h4>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                Let's start a <br />
                <span className="hollow-text">conversation</span>
            </h2>
        </div>

        {/* Contact Cards */}
        <div className="space-y-4 mb-10">
            <ContactCard
                icon={Phone}
                label="Call Us"
                value="+1 (415) 555-1234"
                href="tel:+14155551234"
                highlight={true}
            />
            <ContactCard
                icon={Mail}
                label="Email Us"
                value="support@vyaris.com"
                href="mailto:support@vyaris.com"
                highlight={false}
            />
            <ContactCard
                icon={MapPin}
                label="Visit Us"
                value="123 Creative St, NYC"
                href="#map"
                highlight={false}
            />
            <ContactCard
                icon={Clock}
                label="Working Hours"
                value="Mon - Fri, 9AM - 6PM"
                href="#"
                highlight={false}
            />
        </div>

        {/* Social Links */}
        <div className="mt-auto pt-8 border-t border-zinc-800">
            <span className="text-sm text-zinc-500 block mb-4">Follow us on social media</span>
            <div className="flex gap-3">
                {[
                    { icon: Linkedin, href: '#', label: 'LinkedIn' },
                    { icon: Twitter, href: '#', label: 'Twitter' },
                    { icon: Instagram, href: '#', label: 'Instagram' },
                ].map((social, i) => (
                    <a
                        key={i}
                        href={social.href}
                        aria-label={social.label}
                        className="group w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 hover:bg-primary hover:border-primary hover:text-black transition-all duration-300"
                    >
                        <social.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        </div>
    </div>
);
