import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCard = ({ icon: Icon, label, value, href, highlight }) => (
    <a
        href={href}
        className={`group flex items-start gap-4 p-6 rounded-2xl transition-all duration-300 ${highlight
                ? 'bg-primary'
                : 'bg-zinc-900 border border-zinc-800 hover:border-primary/50'
            }`}
    >
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${highlight
                ? 'bg-black/20'
                : 'bg-zinc-800 group-hover:bg-primary group-hover:text-black'
            }`}>
            <Icon className={`w-5 h-5 ${highlight ? 'text-black' : 'text-zinc-400 group-hover:text-black'}`} />
        </div>
        <div>
            <span className={`text-xs font-bold uppercase tracking-wider block mb-1 ${highlight ? 'text-black/60' : 'text-zinc-500'
                }`}>
                {label}
            </span>
            <span className={`text-lg font-semibold block ${highlight ? 'text-black' : 'text-white'
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
                value="+91-7862861266, +91-7600830568"
                href="tel:+917862861266"
                highlight={true}
            />
            <ContactCard
                icon={Mail}
                label="Email Us"
                value="official@vyaris.com"
                href="mailto:official@vyaris.com"
                highlight={false}
            />
            <ContactCard
                icon={MapPin}
                label="Visit Us"
                value="Vadodara, Gujarat"
                href="#map"
                highlight={false}
            />

        </div>


    </div>
);
